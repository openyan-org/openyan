package api

import (
	"fmt"
	"log/slog"
	"net/http"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/httprate"
	"github.com/openyan/openyan/internal/database"
	"github.com/openyan/openyan/internal/handlers"
	"github.com/openyan/openyan/internal/repositories"
)

type Server struct {
	Port int
	DB   *database.Queries
}

type RouteHandlers struct {
	miscHandler handlers.MiscHandler
	userHandler handlers.UserHandler
}

func mount(mainRouter *chi.Mux, rh RouteHandlers) {
	v1 := chi.NewRouter()

	// Register middlewares specific to /api/v1
	v1.Use(middleware.Logger)
	v1.Use(httprate.Limit(100, time.Minute))

	// Register routes for v1
	v1.Get("/health", rh.miscHandler.HealthCheck)
	v1.Post("/users", rh.userHandler.CreateUser)

	v1.NotFound(rh.miscHandler.NotFound)
	v1.MethodNotAllowed(rh.miscHandler.MethodNotAllowed)

	// Mount v1 router at /api/v1
	mainRouter.Mount("/api/v1", v1)
}

func (s *Server) NewRouter() *chi.Mux {
	mainRouter := chi.NewRouter()

	// Initialize repositories
	userRepo := repositories.NewUserRepository(s.DB)

	// Initialize route handlers
	miscHandler := handlers.NewMiscHandler()
	userHandler := handlers.NewUserHandler(*userRepo)

	// Mount versioned routes
	mount(mainRouter, RouteHandlers{
		miscHandler: miscHandler,
		userHandler: userHandler,
	})

	return mainRouter
}

func (s *Server) Run(r *chi.Mux) {
	slog.Info(fmt.Sprintf("Server is running on http://localhost:%d", s.Port))

	if err := http.ListenAndServe(fmt.Sprintf(":%d", s.Port), r); err != nil {
		slog.Error("Failed to start server", "error", err)
	}
}

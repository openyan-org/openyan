package api

import (
	"fmt"
	"log/slog"
	"net/http"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/httprate"
	"github.com/openyan/openyan/internal/handlers"
)

type Server struct {
	Port   int
	Router *chi.Mux
}

func mount(mainRouter *chi.Mux, miscHandler handlers.MiscHandler) {
	v1 := chi.NewRouter()

	// Register middlewares specific to /api/v1
	v1.Use(middleware.Logger)
	v1.Use(httprate.Limit(100, time.Minute))

	// Register routes for v1
	v1.Get("/health", miscHandler.HealthCheck)
	v1.NotFound(miscHandler.NotFound)
	v1.MethodNotAllowed(miscHandler.MethodNotAllowed)

	// Mount v1 router at /api/v1
	mainRouter.Mount("/api/v1", v1)
}

func NewRouter() *chi.Mux {
	mainRouter := chi.NewRouter()

	// Inject dependencies
	miscHandler := handlers.NewMiscHandler()

	// Mount versioned routes
	mount(mainRouter, miscHandler)

	return mainRouter
}

func Run(s Server) {
	slog.Info(fmt.Sprintf("Server is running on http://localhost:%d", s.Port))

	if err := http.ListenAndServe(fmt.Sprintf(":%d", s.Port), s.Router); err != nil {
		slog.Error("Failed to start server", "error", err)
	}
}

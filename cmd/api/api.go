package api

import (
	"fmt"
	"log/slog"
	"net/http"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/httprate"
	"github.com/openyan/openyan/pkg/handlers"
)

type Server struct {
	Port   int
	Router *chi.Mux
}

func mount(r *chi.Mux) *chi.Mux {
	v1 := chi.NewRouter()

	v1.Mount("/api/v1", r)

	return v1
}

func NewRouter() *chi.Mux {
	r := chi.NewRouter()

	// Inject dependencies
	miscHandler := handlers.NewMiscHandler()

	// Register middlewares
	r.Use(middleware.Logger)
	r.Use(httprate.Limit(100, time.Minute))

	// 404 and 405 handlers

	// Register routes
	r.NotFound(miscHandler.HealthCheck)
	r.MethodNotAllowed(miscHandler.MethodNotAllowed)

	r.Get("/health", miscHandler.HealthCheck)

	// Mount router
	v1 := mount(r)

	return v1
}

func Run(s Server) {
	slog.Info(fmt.Sprintf("Server is running on http://localhost:%d", s.Port))

	http.ListenAndServe(fmt.Sprintf(":%d", s.Port), s.Router)
}

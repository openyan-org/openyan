package api

import (
	"log"
	"net/http"
	"time"
)

type Application struct {
	config config
}

type config struct {
	addr string
}

func (app *Application) mount() *http.ServeMux {
	mux := http.NewServeMux()

	return mux
}

func (app *Application) run(mux *http.ServeMux) error {
	srv := &http.Server{
		Addr:         app.config.addr,
		Handler:      mux,
		WriteTimeout: time.Second * 30,
		ReadTimeout:  time.Second * 10,
		IdleTimeout:  time.Minute,
	}

	log.Printf("Server is listening at %s", app.config.addr)

	return srv.ListenAndServe()
}

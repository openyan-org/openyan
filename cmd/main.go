package main

import (
	"github.com/openyan/openyan/cmd/api"
)

func main() {
	router := api.NewRouter()

	api.Run(api.Server{
		Port:   8080,
		Router: router,
	})
}

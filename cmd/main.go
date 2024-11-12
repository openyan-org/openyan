package main

import (
	"log"

	"github.com/joho/godotenv"
	"github.com/openyan/openyan/cmd/api"
	"github.com/openyan/openyan/internal/utils"
)

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}

func main() {
	db := utils.ConnectToDB()

	server := api.Server{
		Port: 8080,
		DB:   db,
	}

	router := server.NewRouter()

	server.Run(router)
}

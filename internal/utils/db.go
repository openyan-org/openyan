package utils

import (
	"database/sql"
	"log"
	"os"

	_ "github.com/lib/pq"
	"github.com/openyan/openyan/internal/database"
)

func ConnectToDB() *database.Queries {
	databaseURL := os.Getenv("DATABASE_URL")
	if databaseURL == "" {
		log.Fatal("DATABASE_URL is not set in the environment")
	}

	conn, err := sql.Open("postgres", databaseURL)
	if err != nil {
		log.Fatal(err)
	}

	return database.New(conn)
}

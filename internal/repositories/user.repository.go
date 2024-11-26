package repositories

import (
	"context"

	"github.com/openyan/openyan/internal/database"
	"github.com/openyan/openyan/internal/dtos"
)

type UserRepository struct {
	db *database.Queries
}

func NewUserRepository(db *database.Queries) *UserRepository {
	return &UserRepository{db: db}
}

func (repo *UserRepository) CreateUser(ctx context.Context, req dtos.CreateUserRequest) (int32, error) {
	params := database.CreateUserParams{
		DisplayName:  req.DisplayName,
		Username:     req.Username,
		Email:        req.Email,
		PasswordHash: req.PasswordHash,
	}

	return repo.db.CreateUser(ctx, params)
}

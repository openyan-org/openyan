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

func (repo *UserRepository) CreateUser(ctx context.Context, req dtos.CreateUserRequest) (string, error) {
	params := database.CreateUserParams{
		ID:            req.ID,
		Name:          req.Name,
		Email:         req.Email,
		OauthProvider: req.OAuthProvider,
	}

	return repo.db.CreateUser(ctx, params)
}

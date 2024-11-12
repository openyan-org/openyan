package handlers

import (
	"net/http"

	"github.com/openyan/openyan/internal/dtos"
	"github.com/openyan/openyan/internal/repositories"
	"github.com/openyan/openyan/internal/utils"
)

type UserHandler struct {
	repo repositories.UserRepository
}

func NewUserHandler(repo repositories.UserRepository) UserHandler {
	return UserHandler{repo: repo}
}

func (h *UserHandler) CreateUser(w http.ResponseWriter, r *http.Request) {
	var requestPayload dtos.CreateUserRequest
	if err := utils.ReadJSON(w, r, &requestPayload); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	userID, err := h.repo.CreateUser(r.Context(), requestPayload)
	if err != nil {
		http.Error(w, "Failed to create user: "+err.Error(), http.StatusInternalServerError)
		return
	}

	utils.WriteJSON(w, http.StatusCreated, dtos.CreateUserResponse{
		UserID: userID,
	})
}

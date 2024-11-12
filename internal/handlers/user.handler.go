package handlers

import (
	"net/http"

	"github.com/openyan/openyan/internal/database"
	"github.com/openyan/openyan/internal/dtos"
	"github.com/openyan/openyan/internal/utils"
)

type UserHandler struct {
	db *database.Queries
}

func NewUserHandler() UserHandler {
	return UserHandler{}
}

func (h *UserHandler) GetAllUsers(w http.ResponseWriter, r *http.Request) {
	var requestPayload dtos.CreateUserRequest
	if err := utils.ReadJSON(w, r, &requestPayload); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	userID, err := h.db.CreateUser(r.Context(), database.CreateUserParams{
		DisplayName:  requestPayload.DisplayName,
		Username:     requestPayload.Username,
		Email:        requestPayload.Email,
		PasswordHash: requestPayload.PasswordHash,
	})

	if err != nil {
		http.Error(w, "Failed to create user: "+err.Error(), http.StatusInternalServerError)
		return
	}

	utils.WriteJSON(w, http.StatusCreated, dtos.CreateUserResponse{
		UserID: userID,
	})
}

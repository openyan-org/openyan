package handlers

import (
	"net/http"

	"github.com/openyan/openyan/pkg/utils"
)

type MiscHandler struct{}

func NewMiscHandler() MiscHandler {
	return MiscHandler{}
}

func (h *MiscHandler) HealthCheck(w http.ResponseWriter, r *http.Request) {
	responsePayload := map[string]string{"message": "The app is up and running!"}
	utils.WriteJSON(w, http.StatusOK, responsePayload)
}

func (h *MiscHandler) NotFound(w http.ResponseWriter, r *http.Request) {
	responsePayload := map[string]string{"error": "Resource not found."}
	utils.WriteJSON(w, http.StatusNotFound, responsePayload)
}

func (h *MiscHandler) MethodNotAllowed(w http.ResponseWriter, r *http.Request) {
	responsePayload := map[string]string{"error": "Method is not allowed."}
	utils.WriteJSON(w, http.StatusMethodNotAllowed, responsePayload)
}

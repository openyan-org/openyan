package handlers

import (
	"net/http"

	"github.com/openyan/openyan/internal/repositories"
)

type AuthHandler struct {
	repo repositories.UserRepository
}

func NewAuthHandler(repo repositories.UserRepository) AuthHandler {
	return AuthHandler{repo: repo}
}

// Strict-Transport-Security, X-Content-Type-Options, X-Frame-Options
// use RS256

func (h *AuthHandler) Register(w http.ResponseWriter, r *http.Request) {
	// Hash password
	// Store user as unverified in 'users' table
	// Note: if user never verifies their email e.g., they do not actually own the email
	// the right user can still register because on the next register call,
	// if user is unverified, then replace the user instance with the new form inputs

	// Send a verification link with the token to the user's email
	// Maybe use sendgrid?

	// Token should be short-lived

	// implement an expiration period for unverified users so that the database doesn’t retain stale entries indefinitely.
}

func (h *AuthHandler) VerifyEmail(w http.ResponseWriter, r *http.Request) {
	// Gets the token from /verify-email?token={token}
	// Validate the token
	// Set user as verified

	// Consider adding token expiry checks in VerifyEmail and deleting expired tokens to keep the system lean.
}

func (h *AuthHandler) Login(w http.ResponseWriter, r *http.Request) {
	// Check user credentials
	// Create a JWT cookie

}

func (h *AuthHandler) RefreshToken(w http.ResponseWriter, r *http.Request) {
	// Validate the refresh_token cookie
	// Issue a new access_token if its no longer valid

	// Used refresh tokens should be blacklisted
	// Make sure to store these tokens with a reasonable TTL (e.g., matching the refresh token lifespan) to prevent indefinite storage.
}

func (h *AuthHandler) ForgotPassword(w http.ResponseWriter, r *http.Request) {
	// Send an email with reset link containing JWT
	// The JWT should have an email claim

	// Blacklist used tokens (single use)
}

func (h *AuthHandler) ResetPassword(w http.ResponseWriter, r *http.Request) {
	// Validate the token from /reset-password?token={token}
	// Get the new password from json payload

	// Get the email claim
	// Get user by email
	// Hash new password
	// Update user's password
}

func (h *AuthHandler) Logout(w http.ResponseWriter, r *http.Request) {
	// Invalidate access and refresh token cookies
	// Blacklist refresh token
}

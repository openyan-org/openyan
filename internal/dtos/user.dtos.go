package dtos

type CreateUserRequest struct {
	ID            string `json:"id"`
	Name          string `json:"name"`
	Email         string `json:"email"`
	OAuthProvider string `json:"oauth_provider"`
}

type CreateUserResponse struct {
	UserID string `json:"user_id"`
}

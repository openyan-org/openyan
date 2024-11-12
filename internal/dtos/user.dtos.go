package dtos

type CreateUserRequest struct {
	DisplayName  string `json:"display_name"`
	Username     string `json:"username"`
	Email        string `json:"email"`
	PasswordHash string `json:"password_hash"`
}

type CreateUserResponse struct {
	UserID int32 `json:"user_id"`
}

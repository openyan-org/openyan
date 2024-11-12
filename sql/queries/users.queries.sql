-- name: CreateUser :one

INSERT INTO users (display_name, username, email, password_hash)
VALUES ($1, $2, $3, $4)
RETURNING id;

-- name: GetAllUsers :many

SELECT id, display_name, username, email, verified
FROM users;

-- name: GetUserByID :one

SELECT id, display_name, username, email, verified
FROM users
WHERE id = $1;

-- name: GetUserByUsername :one

SELECT id, display_name, username, email, verified
FROM users
WHERE username = $1;

-- name: GetUserByEmail :one

SELECT id, display_name, username, email, verified
FROM users
WHERE email = $1;

-- name: UpdateUserById :one

UPDATE users
SET display_name = $2, email = $3, password_hash = $4, verified = $5
WHERE id = $1
RETURNING id, display_name, username, email, verified;

-- name: DeleteUser :exec

DELETE FROM users
WHERE id = $1;
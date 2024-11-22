-- name: CreateUser :one

INSERT INTO users (id, name, email, oauth_provider)
VALUES ($1, $2, $3, $4)
RETURNING id;

-- name: GetAllUsers :many

SELECT id, name, email, oauth_provider, is_banned
FROM users;

-- name: GetUserByID :one

SELECT id, name, email, oauth_provider, is_banned
FROM users
WHERE id = $1;

-- name: GetUserByEmail :one

SELECT id, name, email, oauth_provider, is_banned
FROM users
WHERE email = $1;

-- name: UpdateUserById :one

UPDATE users
SET name = $2, email = $3, oauth_provider = $4, is_banned = $5
WHERE id = $1
RETURNING id, name, email, oauth_provider, is_banned;

-- name: DeleteUser :exec

DELETE FROM users
WHERE id = $1;

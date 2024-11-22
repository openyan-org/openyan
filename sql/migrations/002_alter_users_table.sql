-- +goose Up

BEGIN;

DROP INDEX IF EXISTS idx_users_email;
DROP INDEX IF EXISTS idx_users_username;

ALTER TABLE users
    RENAME COLUMN display_name TO name,
    ADD COLUMN oauth_provider VARCHAR(50) NOT NULL,
    ADD COLUMN is_banned BOOLEAN NOT NULL DEFAULT FALSE;

ALTER TABLE users
    DROP COLUMN username,
    DROP COLUMN password_hash,
    DROP COLUMN verified;

CREATE INDEX idx_users_email ON users(email);

COMMIT;

-- +goose Down

BEGIN;

ALTER TABLE users
    ADD COLUMN username VARCHAR(20) NOT NULL UNIQUE,
    ADD COLUMN password_hash TEXT NOT NULL,
    ADD COLUMN verified BOOLEAN NOT NULL DEFAULT FALSE,
    RENAME COLUMN name TO display_name,
    DROP COLUMN oauth_provider,
    DROP COLUMN is_banned;

CREATE INDEX idx_users_username ON users(username);

COMMIT;

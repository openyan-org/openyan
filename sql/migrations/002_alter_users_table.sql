-- +goose Up

BEGIN;

DROP INDEX IF EXISTS idx_users_email;
DROP INDEX IF EXISTS idx_users_username;

ALTER TABLE users RENAME COLUMN display_name TO name;

ALTER TABLE users ADD COLUMN oauth_provider VARCHAR(50) NOT NULL DEFAULT 'none';
ALTER TABLE users ADD COLUMN is_banned BOOLEAN NOT NULL DEFAULT FALSE;

ALTER TABLE users DROP COLUMN username;
ALTER TABLE users DROP COLUMN password_hash;
ALTER TABLE users DROP COLUMN verified;

CREATE INDEX idx_users_email ON users(email);

COMMIT;

-- +goose Down

BEGIN;

ALTER TABLE users ADD COLUMN username VARCHAR(20) NOT NULL UNIQUE DEFAULT 'undefined';
ALTER TABLE users ADD COLUMN password_hash TEXT NOT NULL DEFAULT 'undefined';
ALTER TABLE users ADD COLUMN verified BOOLEAN NOT NULL DEFAULT FALSE;

ALTER TABLE users RENAME COLUMN name TO display_name;

ALTER TABLE users DROP COLUMN oauth_provider;
ALTER TABLE users DROP COLUMN is_banned;

CREATE INDEX idx_users_username ON users(username);

COMMIT;

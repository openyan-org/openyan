-- +goose Up

BEGIN;

ALTER TABLE users DROP CONSTRAINT IF EXISTS users_pkey;

ALTER TABLE users
    ALTER COLUMN id TYPE TEXT,
    ALTER COLUMN id SET NOT NULL,
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);

COMMIT;

-- +goose Down

BEGIN;

ALTER TABLE users DROP CONSTRAINT IF EXISTS users_pkey;

ALTER TABLE users ADD COLUMN temp_id TEXT;

UPDATE users SET temp_id = id;

UPDATE users SET id = temp_id::integer;

ALTER TABLE users ALTER COLUMN id TYPE INTEGER USING id::integer;

ALTER TABLE users DROP COLUMN temp_id;

ALTER TABLE users ALTER COLUMN id SET DEFAULT nextval('users_id_seq');

ALTER TABLE users ALTER COLUMN id SET NOT NULL;

ALTER SEQUENCE users_id_seq OWNED BY users.id;

ALTER TABLE users ADD CONSTRAINT users_pkey PRIMARY KEY (id);

COMMIT;

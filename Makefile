db-up:
	@exec bash scripts/postgres-up.sh

db-down:
	@exec bash scripts/psotgres-down.sh

db-migrate-up:
	@exec goose -dir sql/migrations postgres postgresql://postgres:postgres@localhost:5432/postgres up

db-migrate-down:
	@exec goose -dir sql/migrations postgres postgresql://postgres:postgres@localhost:5432/postgres down

test:
	@exec go test ./...
	@exec bun run --cwd ./web test
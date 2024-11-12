dev:
	@exec bunx concurrently --names "Server,Client" --prefix-colors "bgYellow.bold,bgBlue.bold" \
		"air" \
		"cd web && bun run dev"

db-up:
	@exec bash scripts/postgres-up.sh

db-down:
	@exec bash scirpts/psotgres-down.sh

db-migrate-up:
	@exec goose -dir sql/migrations postgres postgresql://postgres:postgres@localhost:5432/postgres up

db-migrate-down:
	@exec goose -dir sql/migrations postgres postgresql://postgres:postgres@localhost:5432/postgres down

test:
	@exec go test ./...
	@exec bun run --cwd ./web test
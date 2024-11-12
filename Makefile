dev:
	@exec npx concurrently --names "Server,Client" --prefix-colors "bgYellow.bold,bgBlue.bold" \
		"air" \
		"cd web && bun run dev"

test:
	@exec go test ./...
	@exec bun run --cwd ./web test
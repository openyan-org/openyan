dev:
	@exec npx concurrently "air" "cd web && bun run dev:next"

test:
	@exec go test ./...
	@exec bun run --cwd ./web test
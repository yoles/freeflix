local:
	docker compose stop && docker compose up --build --remove-orphans -d

start:
	docker compose up -d --remove-orphans

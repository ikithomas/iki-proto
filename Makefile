.PHONY: build sh pb

build:
	@docker-compose build app

sh:
	@docker-compose run --rm app sh

pb:
	@protoc -I=pb --go_out=. pb/*.proto

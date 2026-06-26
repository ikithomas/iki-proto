.PHONY: build sh pb dep

build:
	@docker-compose build app

sh:
	@docker-compose run --rm app sh

pb:
	@bin/genall.sh

dep:
	@buf dep update

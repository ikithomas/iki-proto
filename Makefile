.PHONY: build sh pb

build:
	@docker-compose build app

sh:
	@docker-compose run --rm app sh

pb:
	@rm -rf pb
	@mkdir pb
	@protoc \
    --go_out=./ --go_opt=paths=source_relative \
    --go-grpc_out=./ --go-grpc_opt=paths=source_relative \
    ikipb/*/*.proto

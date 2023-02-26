.PHONY: build sh pb

build:
	@docker-compose build app

sh:
	@docker-compose run --rm app sh

pb:
	@rm -rf ikipb/**/*.pb.go
	@rm -rf ikipb/**/*_pb.js
	@protoc \
    --go_out=./ --go_opt=paths=source_relative \
    --go-grpc_out=./ --go-grpc_opt=paths=source_relative \
    ikipb/**/*.proto
	@protoc \
    --js_out=import_style=commonjs:./ \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./ \
    ikipb/**/*.proto

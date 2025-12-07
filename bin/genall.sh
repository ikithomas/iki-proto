#!/usr/bin/env bash

rm -rf ikipb/**/*.pb.go
rm -rf ikipb/**/*.ts
rm -rf ikipb/iki_blog/**/*.pb.go
rm -rf ikipb/iki_blog/**/*.ts
rm -rf ikipb/iki_bus/**/*.pb.go
rm -rf ikipb/iki_bus/**/*.ts
rm -rf ikipb/iki_iam/**/*.pb.go
rm -rf ikipb/iki_iam/**/*.ts
rm -rf ikipb/iki_activity/**/*.pb.go
rm -rf ikipb/iki_activity/**/*.ts

for f in $(find . -path "./ikipb/**/*.proto"); do
  protoc \
    --go_out=./ --go_opt=paths=source_relative \
    --go-grpc_out=./ --go-grpc_opt=paths=source_relative \
    ${f}
  protoc \
    --grpc-gateway_out=./ \
    --grpc-gateway_opt=paths=source_relative \
    --grpc-gateway_opt=generate_unbound_methods=true \
    ${f}
  protoc \
    --ts_proto_out=./ \
    --plugin=node_modules/ts-proto/protoc-gen-ts_proto \
    --ts_proto_opt=env=browser \
    --ts_proto_opt=outputClientImpl=grpc-web \
    --ts_proto_opt=forceLong=number \
    --ts_proto_opt=esModuleInterop=true \
    ${f}
  protoc \
    --ruby_out=./ \
    ${f}
done

# typescrypt compile
rm -r dist/*
npx tsc --skipLibCheck
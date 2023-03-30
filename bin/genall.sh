#!/usr/bin/env bash

rm -rf ikipb/**/*.pb.go
rm -rf ikipb/**/*_pb.js
rm -rf ikipb/**/*_pb.ts
rm -rf ikipb/**/*Pb.ts

for f in $(find . -name "*.proto"); do
  protoc \
    --go_out=./ --go_opt=paths=source_relative \
    --go-grpc_out=./ --go-grpc_opt=paths=source_relative \
    ${f}
  protoc \
    --js_out=import_style=commonjs:./ \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:./ \
    ${f}
done

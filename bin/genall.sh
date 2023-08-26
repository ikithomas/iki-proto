#!/usr/bin/env bash

rm -rf ikipb/**/*.pb.go
rm -rf ikipb/**/*_pb.js
rm -rf ikipb/**/*_pb.d.ts
rm -rf ikipb/**/*Pb.ts
rm -rf ikipb/iki_bus/**/*.pb.go
rm -rf ikipb/iki_bus/**/*_pb.js
rm -rf ikipb/iki_bus/**/*_pb.d.ts
rm -rf ikipb/iki_bus/**/*Pb.ts
rm -rf ikipb/iki_iam/**/*.pb.go
rm -rf ikipb/iki_iam/**/*_pb.js
rm -rf ikipb/iki_iam/**/*_pb.d.ts
rm -rf ikipb/iki_iam/**/*Pb.ts

for f in $(find . -path "./ikipb/**/*.proto"); do
  protoc \
    --go_out=./ --go_opt=paths=source_relative \
    --go-grpc_out=./ --go-grpc_opt=paths=source_relative \
    ${f}
  # protoc \
  #   --js_out=import_style=commonjs:./ \
  #   --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./ \
  #   ${f}
  protoc \
    --ts_proto_out=./ \
    --plugin=node_modules/ts-proto/protoc-gen-ts_proto \
    --ts_proto_opt=env=browser \
    --ts_proto_opt=outputClientImpl=grpc-web \
    ${f}
done

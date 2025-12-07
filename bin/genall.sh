#!/usr/bin/env bash

rm -rf ikipb/**/*.pb.go
rm -rf ikipb/**/*.ts
rm -rf ikipb/iki_health/**/*.pb.go
rm -rf ikipb/iki_health/**/*.ts
rm -rf ikipb/iki_health/**/*.rb
rm -rf ikipb/iki_helloworld/**/*.pb.go
rm -rf ikipb/iki_helloworld/**/*.ts
rm -rf ikipb/iki_helloworld/**/*.rb
rm -rf ikipb/iki_activity/**/*.pb.go
rm -rf ikipb/iki_activity/**/*.ts
rm -rf ikipb/iki_activity/**/*.rb
rm -rf ikipb/iki_blog/**/*.pb.go
rm -rf ikipb/iki_blog/**/*.ts
rm -rf ikipb/iki_blog/**/*.rb
rm -rf ikipb/iki_iam/**/*.pb.go
rm -rf ikipb/iki_iam/**/*.ts
rm -rf ikipb/iki_iam/**/*.rb
rm -rf ikipb/iki_workers/**/*.pb.go
rm -rf ikipb/iki_workers/**/*.ts
rm -rf ikipb/iki_workers/**/*.rb
rm -rf ikipb/iki_bus/**/*.pb.go
rm -rf ikipb/iki_bus/**/*.ts
rm -rf ikipb/iki_bus/**/*.rb
rm -rf ikipb/iki_event/**/*.pb.go
rm -rf ikipb/iki_event/**/*.ts
rm -rf ikipb/iki_event/**/*.rb

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
  protoc --proto_path=. --ruby_out=. ${f}
done

# typescrypt compile
rm -r dist/*
npx tsc --skipLibCheck
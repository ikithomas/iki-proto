
###

- [Protobuf best practice](https://medium.com/@akhaku/protobuf-definition-best-practices-87f281576f31)

### How-to

Prerequisite

```bash
brew install protobuf@3
brew link --overwrite protobuf@3
brew install protoc-gen-grpc-web

go install \
  github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway \
  github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2 \
  google.golang.org/protobuf/cmd/protoc-gen-go \
  google.golang.org/grpc/cmd/protoc-gen-go-grpc

# ts proto
npm install ts-proto
```

```bash
protoc -I=proto --go_out=. proto/user.proto
```

Publish to NPM

```bash
# Link the repo
npm link iki-proto

# Login
npm adduser

# Publish
npm publish
```

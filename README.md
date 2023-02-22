
###

- [Protobuf best practice](https://medium.com/@akhaku/protobuf-definition-best-practices-87f281576f31)

### How-to

Prerequisite

```bash
brew install protobuf@3
brew link --overwrite protobuf@3
brew install protoc-gen-grpc-web
```

```bash
protoc -I=proto --go_out=. proto/user.proto
```

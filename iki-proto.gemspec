# my_proto_lib.gemspec
Gem::Specification.new do |spec|
  spec.name          = "iki-proto"
  spec.version       = "0.1.0"
  spec.summary       = "Proto-generated Ruby definitions"
  spec.description   = "gRPC / protobuf Ruby stubs generated from .proto files."
  spec.authors       = ["Tsz Him"]
  spec.email         = ["thomas@ikithomas.com"]
  spec.license       = "MIT"
  spec.homepage      = "https://github.com/ikithomas/iki-proto"

  spec.files = Dir["**/*"]
  spec.require_paths = ["."]

  spec.add_runtime_dependency "grpc"
  spec.add_runtime_dependency "google-protobuf"
end

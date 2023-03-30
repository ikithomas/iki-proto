import * as grpcWeb from 'grpc-web';

import * as ikipb_helloworld_helloworld_pb from '../../ikipb/helloworld/helloworld_pb';


export class GreeterClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sayHello(
    request: ikipb_helloworld_helloworld_pb.HelloRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_helloworld_helloworld_pb.HelloReply) => void
  ): grpcWeb.ClientReadableStream<ikipb_helloworld_helloworld_pb.HelloReply>;

  sayHelloAgain(
    request: ikipb_helloworld_helloworld_pb.HelloRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_helloworld_helloworld_pb.HelloReply) => void
  ): grpcWeb.ClientReadableStream<ikipb_helloworld_helloworld_pb.HelloReply>;

  sayHellos(
    request: ikipb_helloworld_helloworld_pb.HelloRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ikipb_helloworld_helloworld_pb.HelloReply>;

}

export class GreeterPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sayHello(
    request: ikipb_helloworld_helloworld_pb.HelloRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_helloworld_helloworld_pb.HelloReply>;

  sayHelloAgain(
    request: ikipb_helloworld_helloworld_pb.HelloRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_helloworld_helloworld_pb.HelloReply>;

  sayHellos(
    request: ikipb_helloworld_helloworld_pb.HelloRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ikipb_helloworld_helloworld_pb.HelloReply>;

}


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as ikipb_iki_bus_route_route_pb from '../../../ikipb/iki_bus/route/route_pb';


export class RouteServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  list(
    request: ikipb_iki_bus_route_route_pb.ListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_bus_route_route_pb.ListResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_bus_route_route_pb.ListResponse>;

  sync(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class RouteServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  list(
    request: ikipb_iki_bus_route_route_pb.ListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_bus_route_route_pb.ListResponse>;

  sync(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}


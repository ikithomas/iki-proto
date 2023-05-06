import * as grpcWeb from 'grpc-web';

import * as ikipb_iki_activity_activity_pb from '../../ikipb/iki_activity/activity_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class ActivityServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  get(
    request: ikipb_iki_activity_activity_pb.GetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_activity_activity_pb.GetResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_activity_activity_pb.GetResponse>;

  getMine(
    request: ikipb_iki_activity_activity_pb.GetMineRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_activity_activity_pb.GetMineResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_activity_activity_pb.GetMineResponse>;

  getFeatured(
    request: ikipb_iki_activity_activity_pb.GetFeaturedRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_activity_activity_pb.GetFeaturedResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_activity_activity_pb.GetFeaturedResponse>;

  list(
    request: ikipb_iki_activity_activity_pb.ListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_activity_activity_pb.ListResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_activity_activity_pb.ListResponse>;

  listMine(
    request: ikipb_iki_activity_activity_pb.ListMineRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_activity_activity_pb.ListMineResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_activity_activity_pb.ListMineResponse>;

  listFeatured(
    request: ikipb_iki_activity_activity_pb.ListFeaturedRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_activity_activity_pb.ListFeaturedResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_activity_activity_pb.ListFeaturedResponse>;

  calculateStats(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class ActivityServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  get(
    request: ikipb_iki_activity_activity_pb.GetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_activity_activity_pb.GetResponse>;

  getMine(
    request: ikipb_iki_activity_activity_pb.GetMineRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_activity_activity_pb.GetMineResponse>;

  getFeatured(
    request: ikipb_iki_activity_activity_pb.GetFeaturedRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_activity_activity_pb.GetFeaturedResponse>;

  list(
    request: ikipb_iki_activity_activity_pb.ListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_activity_activity_pb.ListResponse>;

  listMine(
    request: ikipb_iki_activity_activity_pb.ListMineRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_activity_activity_pb.ListMineResponse>;

  listFeatured(
    request: ikipb_iki_activity_activity_pb.ListFeaturedRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_activity_activity_pb.ListFeaturedResponse>;

  calculateStats(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}


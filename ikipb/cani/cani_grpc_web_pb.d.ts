import * as grpcWeb from 'grpc-web';

import * as ikipb_cani_cani_pb from '../../ikipb/cani/cani_pb';


export class CanIServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  canI(
    request: ikipb_cani_cani_pb.CanIRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_cani_cani_pb.CanIResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_cani_cani_pb.CanIResponse>;

}

export class CanIServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  canI(
    request: ikipb_cani_cani_pb.CanIRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_cani_cani_pb.CanIResponse>;

}


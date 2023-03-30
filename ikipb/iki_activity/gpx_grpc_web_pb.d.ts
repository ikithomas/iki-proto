import * as grpcWeb from 'grpc-web';

import * as ikipb_iki_activity_gpx_pb from '../../ikipb/iki_activity/gpx_pb';


export class GpxServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getGpx(
    request: ikipb_iki_activity_gpx_pb.GetGpxRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ikipb_iki_activity_gpx_pb.Chunk>;

  getConciseGpx(
    request: ikipb_iki_activity_gpx_pb.GetGpxRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_activity_gpx_pb.GetConciseGpxResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_activity_gpx_pb.GetConciseGpxResponse>;

}

export class GpxServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getGpx(
    request: ikipb_iki_activity_gpx_pb.GetGpxRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ikipb_iki_activity_gpx_pb.Chunk>;

  getConciseGpx(
    request: ikipb_iki_activity_gpx_pb.GetGpxRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_activity_gpx_pb.GetConciseGpxResponse>;

}


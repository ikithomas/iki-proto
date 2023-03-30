import * as grpcWeb from 'grpc-web';

import * as ikipb_iki_heatmap_heatmap_pb from '../../ikipb/iki_heatmap/heatmap_pb';


export class HeatmapServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  get(
    request: ikipb_iki_heatmap_heatmap_pb.GetRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ikipb_iki_heatmap_heatmap_pb.Track>;

}

export class HeatmapServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  get(
    request: ikipb_iki_heatmap_heatmap_pb.GetRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ikipb_iki_heatmap_heatmap_pb.Track>;

}


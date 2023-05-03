import * as grpcWeb from 'grpc-web';

import * as ikipb_iki_activity_athlete_pb from '../../ikipb/iki_activity/athlete_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class AthleteServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  setFitnessMetric(
    request: ikipb_iki_activity_athlete_pb.SetFitnessMetricRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getFitnessMetric(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_activity_athlete_pb.GetFitnessMetricResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_activity_athlete_pb.GetFitnessMetricResponse>;

}

export class AthleteServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  setFitnessMetric(
    request: ikipb_iki_activity_athlete_pb.SetFitnessMetricRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getFitnessMetric(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_activity_athlete_pb.GetFitnessMetricResponse>;

}


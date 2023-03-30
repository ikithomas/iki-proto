import * as grpcWeb from 'grpc-web';

import * as ikipb_health_health_pb from '../../ikipb/health/health_pb';


export class HealthClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  check(
    request: ikipb_health_health_pb.HealthCheckRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_health_health_pb.HealthCheckResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_health_health_pb.HealthCheckResponse>;

  watch(
    request: ikipb_health_health_pb.HealthCheckRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ikipb_health_health_pb.HealthCheckResponse>;

}

export class HealthPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  check(
    request: ikipb_health_health_pb.HealthCheckRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_health_health_pb.HealthCheckResponse>;

  watch(
    request: ikipb_health_health_pb.HealthCheckRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ikipb_health_health_pb.HealthCheckResponse>;

}


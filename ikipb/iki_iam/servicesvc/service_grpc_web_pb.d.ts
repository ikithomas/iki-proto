import * as grpcWeb from 'grpc-web';

import * as ikipb_iki_iam_servicesvc_service_pb from '../../../ikipb/iki_iam/servicesvc/service_pb';


export class ServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  create(
    request: ikipb_iki_iam_servicesvc_service_pb.CreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_iam_servicesvc_service_pb.CreateResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_iam_servicesvc_service_pb.CreateResponse>;

  delete(
    request: ikipb_iki_iam_servicesvc_service_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_iam_servicesvc_service_pb.DeleteResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_iam_servicesvc_service_pb.DeleteResponse>;

  get(
    request: ikipb_iki_iam_servicesvc_service_pb.GetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_iam_servicesvc_service_pb.GetResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_iam_servicesvc_service_pb.GetResponse>;

  list(
    request: ikipb_iki_iam_servicesvc_service_pb.ListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_iam_servicesvc_service_pb.ListResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_iam_servicesvc_service_pb.ListResponse>;

  addSecret(
    request: ikipb_iki_iam_servicesvc_service_pb.AddSecretRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_iam_servicesvc_service_pb.AddSecretResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_iam_servicesvc_service_pb.AddSecretResponse>;

  deactivateSecret(
    request: ikipb_iki_iam_servicesvc_service_pb.DeactivateSecretRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_iam_servicesvc_service_pb.DeactivateSecretResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_iam_servicesvc_service_pb.DeactivateSecretResponse>;

  deleteSecret(
    request: ikipb_iki_iam_servicesvc_service_pb.DeleteSecretRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_iam_servicesvc_service_pb.DeleteSecretResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_iam_servicesvc_service_pb.DeleteSecretResponse>;

}

export class ServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  create(
    request: ikipb_iki_iam_servicesvc_service_pb.CreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_iam_servicesvc_service_pb.CreateResponse>;

  delete(
    request: ikipb_iki_iam_servicesvc_service_pb.DeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_iam_servicesvc_service_pb.DeleteResponse>;

  get(
    request: ikipb_iki_iam_servicesvc_service_pb.GetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_iam_servicesvc_service_pb.GetResponse>;

  list(
    request: ikipb_iki_iam_servicesvc_service_pb.ListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_iam_servicesvc_service_pb.ListResponse>;

  addSecret(
    request: ikipb_iki_iam_servicesvc_service_pb.AddSecretRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_iam_servicesvc_service_pb.AddSecretResponse>;

  deactivateSecret(
    request: ikipb_iki_iam_servicesvc_service_pb.DeactivateSecretRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_iam_servicesvc_service_pb.DeactivateSecretResponse>;

  deleteSecret(
    request: ikipb_iki_iam_servicesvc_service_pb.DeleteSecretRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_iam_servicesvc_service_pb.DeleteSecretResponse>;

}


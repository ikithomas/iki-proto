import * as grpcWeb from 'grpc-web';

import * as ikipb_iki_iam_groupsvc_group_pb from '../../../ikipb/iki_iam/groupsvc/group_pb';


export class GroupClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  get(
    request: ikipb_iki_iam_groupsvc_group_pb.GetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_iam_groupsvc_group_pb.GetResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_iam_groupsvc_group_pb.GetResponse>;

  list(
    request: ikipb_iki_iam_groupsvc_group_pb.ListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_iam_groupsvc_group_pb.ListResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_iam_groupsvc_group_pb.ListResponse>;

  create(
    request: ikipb_iki_iam_groupsvc_group_pb.CreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_iam_groupsvc_group_pb.CreateResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_iam_groupsvc_group_pb.CreateResponse>;

  delete(
    request: ikipb_iki_iam_groupsvc_group_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_iam_groupsvc_group_pb.DeleteResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_iam_groupsvc_group_pb.DeleteResponse>;

}

export class GroupPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  get(
    request: ikipb_iki_iam_groupsvc_group_pb.GetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_iam_groupsvc_group_pb.GetResponse>;

  list(
    request: ikipb_iki_iam_groupsvc_group_pb.ListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_iam_groupsvc_group_pb.ListResponse>;

  create(
    request: ikipb_iki_iam_groupsvc_group_pb.CreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_iam_groupsvc_group_pb.CreateResponse>;

  delete(
    request: ikipb_iki_iam_groupsvc_group_pb.DeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_iam_groupsvc_group_pb.DeleteResponse>;

}


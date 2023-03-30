import * as grpcWeb from 'grpc-web';

import * as ikipb_iki_iam_usersvc_user_pb from '../../../ikipb/iki_iam/usersvc/user_pb';


export class UserClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  profile(
    request: ikipb_iki_iam_usersvc_user_pb.ProfileRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_iam_usersvc_user_pb.ProfileResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_iam_usersvc_user_pb.ProfileResponse>;

  list(
    request: ikipb_iki_iam_usersvc_user_pb.ListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_iam_usersvc_user_pb.ListResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_iam_usersvc_user_pb.ListResponse>;

  get(
    request: ikipb_iki_iam_usersvc_user_pb.GetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_iam_usersvc_user_pb.GetResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_iam_usersvc_user_pb.GetResponse>;

  delete(
    request: ikipb_iki_iam_usersvc_user_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_iam_usersvc_user_pb.DeleteResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_iam_usersvc_user_pb.DeleteResponse>;

  resetPassword(
    request: ikipb_iki_iam_usersvc_user_pb.ResetPasswordRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_iam_usersvc_user_pb.ResetPasswordResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_iam_usersvc_user_pb.ResetPasswordResponse>;

  attachGroup(
    request: ikipb_iki_iam_usersvc_user_pb.AttachGroupRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_iam_usersvc_user_pb.AttachGroupResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_iam_usersvc_user_pb.AttachGroupResponse>;

  detachGroup(
    request: ikipb_iki_iam_usersvc_user_pb.DetachGroupRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_iam_usersvc_user_pb.DetachGroupResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_iam_usersvc_user_pb.DetachGroupResponse>;

}

export class UserPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  profile(
    request: ikipb_iki_iam_usersvc_user_pb.ProfileRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_iam_usersvc_user_pb.ProfileResponse>;

  list(
    request: ikipb_iki_iam_usersvc_user_pb.ListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_iam_usersvc_user_pb.ListResponse>;

  get(
    request: ikipb_iki_iam_usersvc_user_pb.GetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_iam_usersvc_user_pb.GetResponse>;

  delete(
    request: ikipb_iki_iam_usersvc_user_pb.DeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_iam_usersvc_user_pb.DeleteResponse>;

  resetPassword(
    request: ikipb_iki_iam_usersvc_user_pb.ResetPasswordRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_iam_usersvc_user_pb.ResetPasswordResponse>;

  attachGroup(
    request: ikipb_iki_iam_usersvc_user_pb.AttachGroupRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_iam_usersvc_user_pb.AttachGroupResponse>;

  detachGroup(
    request: ikipb_iki_iam_usersvc_user_pb.DetachGroupRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_iam_usersvc_user_pb.DetachGroupResponse>;

}


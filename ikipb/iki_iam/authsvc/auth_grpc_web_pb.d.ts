import * as grpcWeb from 'grpc-web';

import * as ikipb_iki_iam_authsvc_auth_pb from '../../../ikipb/iki_iam/authsvc/auth_pb';


export class AuthClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  googleLogin(
    request: ikipb_iki_iam_authsvc_auth_pb.GoogleLoginRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_iam_authsvc_auth_pb.GoogleLoginResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_iam_authsvc_auth_pb.GoogleLoginResponse>;

  serviceLogin(
    request: ikipb_iki_iam_authsvc_auth_pb.ServiceLoginRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_iam_authsvc_auth_pb.ServiceLoginResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_iam_authsvc_auth_pb.ServiceLoginResponse>;

  signout(
    request: ikipb_iki_iam_authsvc_auth_pb.SignoutRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_iam_authsvc_auth_pb.SignoutResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_iam_authsvc_auth_pb.SignoutResponse>;

}

export class AuthPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  googleLogin(
    request: ikipb_iki_iam_authsvc_auth_pb.GoogleLoginRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_iam_authsvc_auth_pb.GoogleLoginResponse>;

  serviceLogin(
    request: ikipb_iki_iam_authsvc_auth_pb.ServiceLoginRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_iam_authsvc_auth_pb.ServiceLoginResponse>;

  signout(
    request: ikipb_iki_iam_authsvc_auth_pb.SignoutRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_iam_authsvc_auth_pb.SignoutResponse>;

}


import * as grpcWeb from 'grpc-web';

import * as ikipb_iki_iam_tokensvc_token_pb from '../../../ikipb/iki_iam/tokensvc/token_pb';


export class TokenClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getJwkset(
    request: ikipb_iki_iam_tokensvc_token_pb.GetJwksetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_iam_tokensvc_token_pb.GetJwksetResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_iam_tokensvc_token_pb.GetJwksetResponse>;

  accessToken(
    request: ikipb_iki_iam_tokensvc_token_pb.AccessTokenRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ikipb_iki_iam_tokensvc_token_pb.AccessTokenResponse) => void
  ): grpcWeb.ClientReadableStream<ikipb_iki_iam_tokensvc_token_pb.AccessTokenResponse>;

}

export class TokenPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getJwkset(
    request: ikipb_iki_iam_tokensvc_token_pb.GetJwksetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_iam_tokensvc_token_pb.GetJwksetResponse>;

  accessToken(
    request: ikipb_iki_iam_tokensvc_token_pb.AccessTokenRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ikipb_iki_iam_tokensvc_token_pb.AccessTokenResponse>;

}


import * as jspb from 'google-protobuf'

import * as ikipb_iki_iam_iam_pb from '../../../ikipb/iki_iam/iam_pb';


export class GoogleLoginRequest extends jspb.Message {
  getIdToken(): string;
  setIdToken(value: string): GoogleLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleLoginRequest): GoogleLoginRequest.AsObject;
  static serializeBinaryToWriter(message: GoogleLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleLoginRequest;
  static deserializeBinaryFromReader(message: GoogleLoginRequest, reader: jspb.BinaryReader): GoogleLoginRequest;
}

export namespace GoogleLoginRequest {
  export type AsObject = {
    idToken: string,
  }
}

export class GoogleLoginResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): GoogleLoginResponse;

  getRefreshToken(): string;
  setRefreshToken(value: string): GoogleLoginResponse;

  getUser(): ikipb_iki_iam_iam_pb.User | undefined;
  setUser(value?: ikipb_iki_iam_iam_pb.User): GoogleLoginResponse;
  hasUser(): boolean;
  clearUser(): GoogleLoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleLoginResponse): GoogleLoginResponse.AsObject;
  static serializeBinaryToWriter(message: GoogleLoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleLoginResponse;
  static deserializeBinaryFromReader(message: GoogleLoginResponse, reader: jspb.BinaryReader): GoogleLoginResponse;
}

export namespace GoogleLoginResponse {
  export type AsObject = {
    accessToken: string,
    refreshToken: string,
    user?: ikipb_iki_iam_iam_pb.User.AsObject,
  }
}

export class ServiceLoginRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): ServiceLoginRequest;

  getClientSecret(): string;
  setClientSecret(value: string): ServiceLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceLoginRequest): ServiceLoginRequest.AsObject;
  static serializeBinaryToWriter(message: ServiceLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceLoginRequest;
  static deserializeBinaryFromReader(message: ServiceLoginRequest, reader: jspb.BinaryReader): ServiceLoginRequest;
}

export namespace ServiceLoginRequest {
  export type AsObject = {
    clientId: string,
    clientSecret: string,
  }
}

export class ServiceLoginResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): ServiceLoginResponse;

  getRefreshToken(): string;
  setRefreshToken(value: string): ServiceLoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceLoginResponse): ServiceLoginResponse.AsObject;
  static serializeBinaryToWriter(message: ServiceLoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceLoginResponse;
  static deserializeBinaryFromReader(message: ServiceLoginResponse, reader: jspb.BinaryReader): ServiceLoginResponse;
}

export namespace ServiceLoginResponse {
  export type AsObject = {
    accessToken: string,
    refreshToken: string,
  }
}

export class SignoutRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignoutRequest): SignoutRequest.AsObject;
  static serializeBinaryToWriter(message: SignoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignoutRequest;
  static deserializeBinaryFromReader(message: SignoutRequest, reader: jspb.BinaryReader): SignoutRequest;
}

export namespace SignoutRequest {
  export type AsObject = {
  }
}

export class SignoutResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignoutResponse): SignoutResponse.AsObject;
  static serializeBinaryToWriter(message: SignoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignoutResponse;
  static deserializeBinaryFromReader(message: SignoutResponse, reader: jspb.BinaryReader): SignoutResponse;
}

export namespace SignoutResponse {
  export type AsObject = {
  }
}


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

export class PasswordLoginRequest extends jspb.Message {
  getEmailAddress(): string;
  setEmailAddress(value: string): PasswordLoginRequest;

  getPassword(): string;
  setPassword(value: string): PasswordLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PasswordLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PasswordLoginRequest): PasswordLoginRequest.AsObject;
  static serializeBinaryToWriter(message: PasswordLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PasswordLoginRequest;
  static deserializeBinaryFromReader(message: PasswordLoginRequest, reader: jspb.BinaryReader): PasswordLoginRequest;
}

export namespace PasswordLoginRequest {
  export type AsObject = {
    emailAddress: string,
    password: string,
  }
}

export class PasswordLoginResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): PasswordLoginResponse;

  getRefreshToken(): string;
  setRefreshToken(value: string): PasswordLoginResponse;

  getUser(): ikipb_iki_iam_iam_pb.User | undefined;
  setUser(value?: ikipb_iki_iam_iam_pb.User): PasswordLoginResponse;
  hasUser(): boolean;
  clearUser(): PasswordLoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PasswordLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PasswordLoginResponse): PasswordLoginResponse.AsObject;
  static serializeBinaryToWriter(message: PasswordLoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PasswordLoginResponse;
  static deserializeBinaryFromReader(message: PasswordLoginResponse, reader: jspb.BinaryReader): PasswordLoginResponse;
}

export namespace PasswordLoginResponse {
  export type AsObject = {
    accessToken: string,
    refreshToken: string,
    user?: ikipb_iki_iam_iam_pb.User.AsObject,
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


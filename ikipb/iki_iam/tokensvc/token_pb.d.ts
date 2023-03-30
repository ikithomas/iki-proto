import * as jspb from 'google-protobuf'



export class GetJwksetRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJwksetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetJwksetRequest): GetJwksetRequest.AsObject;
  static serializeBinaryToWriter(message: GetJwksetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJwksetRequest;
  static deserializeBinaryFromReader(message: GetJwksetRequest, reader: jspb.BinaryReader): GetJwksetRequest;
}

export namespace GetJwksetRequest {
  export type AsObject = {
  }
}

export class GetJwksetResponse extends jspb.Message {
  getJwkset(): Uint8Array | string;
  getJwkset_asU8(): Uint8Array;
  getJwkset_asB64(): string;
  setJwkset(value: Uint8Array | string): GetJwksetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJwksetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetJwksetResponse): GetJwksetResponse.AsObject;
  static serializeBinaryToWriter(message: GetJwksetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJwksetResponse;
  static deserializeBinaryFromReader(message: GetJwksetResponse, reader: jspb.BinaryReader): GetJwksetResponse;
}

export namespace GetJwksetResponse {
  export type AsObject = {
    jwkset: Uint8Array | string,
  }
}

export class AccessTokenRequest extends jspb.Message {
  getRefreshToken(): string;
  setRefreshToken(value: string): AccessTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccessTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccessTokenRequest): AccessTokenRequest.AsObject;
  static serializeBinaryToWriter(message: AccessTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccessTokenRequest;
  static deserializeBinaryFromReader(message: AccessTokenRequest, reader: jspb.BinaryReader): AccessTokenRequest;
}

export namespace AccessTokenRequest {
  export type AsObject = {
    refreshToken: string,
  }
}

export class AccessTokenResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): AccessTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccessTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AccessTokenResponse): AccessTokenResponse.AsObject;
  static serializeBinaryToWriter(message: AccessTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccessTokenResponse;
  static deserializeBinaryFromReader(message: AccessTokenResponse, reader: jspb.BinaryReader): AccessTokenResponse;
}

export namespace AccessTokenResponse {
  export type AsObject = {
    accessToken: string,
  }
}


/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import * as _m0 from "protobufjs/minimal";
import { EntityType, entityTypeFromJSON, entityTypeToJSON } from "../iam";

export const protobufPackage = "tokensvc";

export interface GetJwksetRequest {
}

export interface GetJwksetResponse {
  jwkset: Uint8Array;
}

export interface AccessTokenRequest {
  refreshToken: string;
  entityType: EntityType;
}

export interface AccessTokenResponse {
  accessToken: string;
}

function createBaseGetJwksetRequest(): GetJwksetRequest {
  return {};
}

export const GetJwksetRequest = {
  encode(_: GetJwksetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetJwksetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetJwksetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): GetJwksetRequest {
    return {};
  },

  toJSON(_: GetJwksetRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetJwksetRequest>, I>>(base?: I): GetJwksetRequest {
    return GetJwksetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetJwksetRequest>, I>>(_: I): GetJwksetRequest {
    const message = createBaseGetJwksetRequest();
    return message;
  },
};

function createBaseGetJwksetResponse(): GetJwksetResponse {
  return { jwkset: new Uint8Array(0) };
}

export const GetJwksetResponse = {
  encode(message: GetJwksetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jwkset.length !== 0) {
      writer.uint32(10).bytes(message.jwkset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetJwksetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetJwksetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jwkset = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetJwksetResponse {
    return { jwkset: isSet(object.jwkset) ? bytesFromBase64(object.jwkset) : new Uint8Array(0) };
  },

  toJSON(message: GetJwksetResponse): unknown {
    const obj: any = {};
    if (message.jwkset.length !== 0) {
      obj.jwkset = base64FromBytes(message.jwkset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetJwksetResponse>, I>>(base?: I): GetJwksetResponse {
    return GetJwksetResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetJwksetResponse>, I>>(object: I): GetJwksetResponse {
    const message = createBaseGetJwksetResponse();
    message.jwkset = object.jwkset ?? new Uint8Array(0);
    return message;
  },
};

function createBaseAccessTokenRequest(): AccessTokenRequest {
  return { refreshToken: "", entityType: 0 };
}

export const AccessTokenRequest = {
  encode(message: AccessTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.refreshToken !== "") {
      writer.uint32(10).string(message.refreshToken);
    }
    if (message.entityType !== 0) {
      writer.uint32(16).int32(message.entityType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessTokenRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.refreshToken = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.entityType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccessTokenRequest {
    return {
      refreshToken: isSet(object.refreshToken) ? String(object.refreshToken) : "",
      entityType: isSet(object.entityType) ? entityTypeFromJSON(object.entityType) : 0,
    };
  },

  toJSON(message: AccessTokenRequest): unknown {
    const obj: any = {};
    if (message.refreshToken !== "") {
      obj.refreshToken = message.refreshToken;
    }
    if (message.entityType !== 0) {
      obj.entityType = entityTypeToJSON(message.entityType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccessTokenRequest>, I>>(base?: I): AccessTokenRequest {
    return AccessTokenRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AccessTokenRequest>, I>>(object: I): AccessTokenRequest {
    const message = createBaseAccessTokenRequest();
    message.refreshToken = object.refreshToken ?? "";
    message.entityType = object.entityType ?? 0;
    return message;
  },
};

function createBaseAccessTokenResponse(): AccessTokenResponse {
  return { accessToken: "" };
}

export const AccessTokenResponse = {
  encode(message: AccessTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccessTokenResponse {
    return { accessToken: isSet(object.accessToken) ? String(object.accessToken) : "" };
  },

  toJSON(message: AccessTokenResponse): unknown {
    const obj: any = {};
    if (message.accessToken !== "") {
      obj.accessToken = message.accessToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccessTokenResponse>, I>>(base?: I): AccessTokenResponse {
    return AccessTokenResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AccessTokenResponse>, I>>(object: I): AccessTokenResponse {
    const message = createBaseAccessTokenResponse();
    message.accessToken = object.accessToken ?? "";
    return message;
  },
};

export interface Token {
  GetJwkset(request: DeepPartial<GetJwksetRequest>, metadata?: grpc.Metadata): Promise<GetJwksetResponse>;
  AccessToken(request: DeepPartial<AccessTokenRequest>, metadata?: grpc.Metadata): Promise<AccessTokenResponse>;
}

export class TokenClientImpl implements Token {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetJwkset = this.GetJwkset.bind(this);
    this.AccessToken = this.AccessToken.bind(this);
  }

  GetJwkset(request: DeepPartial<GetJwksetRequest>, metadata?: grpc.Metadata): Promise<GetJwksetResponse> {
    return this.rpc.unary(TokenGetJwksetDesc, GetJwksetRequest.fromPartial(request), metadata);
  }

  AccessToken(request: DeepPartial<AccessTokenRequest>, metadata?: grpc.Metadata): Promise<AccessTokenResponse> {
    return this.rpc.unary(TokenAccessTokenDesc, AccessTokenRequest.fromPartial(request), metadata);
  }
}

export const TokenDesc = { serviceName: "tokensvc.Token" };

export const TokenGetJwksetDesc: UnaryMethodDefinitionish = {
  methodName: "GetJwkset",
  service: TokenDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetJwksetRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetJwksetResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const TokenAccessTokenDesc: UnaryMethodDefinitionish = {
  methodName: "AccessToken",
  service: TokenDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AccessTokenRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = AccessTokenResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
      upStreamRetryCodes?: number[];
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata ?? this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata ?? {},
        ...(this.options.transport !== undefined ? { transport: this.options.transport } : {}),
        debug: this.options.debug ?? false,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message!.toObject());
          } else {
            const err = new GrpcWebError(response.statusMessage, response.status, response.trailers);
            reject(err);
          }
        },
      });
    });
  }
}

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export class GrpcWebError extends tsProtoGlobalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}

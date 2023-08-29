/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { Athlete } from "../activity";

export const protobufPackage = "stravasvc";

export interface AuthzRequest {
  /** authz_code is the ID used to exchange Strava token. */
  authzCode: string;
}

export interface AuthzResponse {
  athlete: Athlete | undefined;
}

function createBaseAuthzRequest(): AuthzRequest {
  return { authzCode: "" };
}

export const AuthzRequest = {
  encode(message: AuthzRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authzCode !== "") {
      writer.uint32(10).string(message.authzCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthzRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthzRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authzCode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuthzRequest {
    return { authzCode: isSet(object.authzCode) ? String(object.authzCode) : "" };
  },

  toJSON(message: AuthzRequest): unknown {
    const obj: any = {};
    if (message.authzCode !== "") {
      obj.authzCode = message.authzCode;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthzRequest>, I>>(base?: I): AuthzRequest {
    return AuthzRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AuthzRequest>, I>>(object: I): AuthzRequest {
    const message = createBaseAuthzRequest();
    message.authzCode = object.authzCode ?? "";
    return message;
  },
};

function createBaseAuthzResponse(): AuthzResponse {
  return { athlete: undefined };
}

export const AuthzResponse = {
  encode(message: AuthzResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.athlete !== undefined) {
      Athlete.encode(message.athlete, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthzResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthzResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.athlete = Athlete.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuthzResponse {
    return { athlete: isSet(object.athlete) ? Athlete.fromJSON(object.athlete) : undefined };
  },

  toJSON(message: AuthzResponse): unknown {
    const obj: any = {};
    if (message.athlete !== undefined) {
      obj.athlete = Athlete.toJSON(message.athlete);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthzResponse>, I>>(base?: I): AuthzResponse {
    return AuthzResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AuthzResponse>, I>>(object: I): AuthzResponse {
    const message = createBaseAuthzResponse();
    message.athlete = (object.athlete !== undefined && object.athlete !== null)
      ? Athlete.fromPartial(object.athlete)
      : undefined;
    return message;
  },
};

export interface StravaSvc {
  Authz(request: DeepPartial<AuthzRequest>, metadata?: grpc.Metadata): Promise<AuthzResponse>;
}

export class StravaSvcClientImpl implements StravaSvc {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Authz = this.Authz.bind(this);
  }

  Authz(request: DeepPartial<AuthzRequest>, metadata?: grpc.Metadata): Promise<AuthzResponse> {
    return this.rpc.unary(StravaSvcAuthzDesc, AuthzRequest.fromPartial(request), metadata);
  }
}

export const StravaSvcDesc = { serviceName: "stravasvc.StravaSvc" };

export const StravaSvcAuthzDesc: UnaryMethodDefinitionish = {
  methodName: "Authz",
  service: StravaSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AuthzRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = AuthzResponse.decode(data);
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

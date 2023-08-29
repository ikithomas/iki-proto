/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { share } from "rxjs/operators";
import { Chunk, Gpx } from "../activity";

export const protobufPackage = "gpxsvc";

export interface GetMyRequest {
  activityId: string;
}

export interface GetRequest {
  userId: string;
  activityId: string;
}

export interface GetResponse {
  activityId: string;
  stravaId: number;
  stravaAthleteId: number;
  gpx: Gpx | undefined;
}

function createBaseGetMyRequest(): GetMyRequest {
  return { activityId: "" };
}

export const GetMyRequest = {
  encode(message: GetMyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activityId !== "") {
      writer.uint32(10).string(message.activityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.activityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetMyRequest {
    return { activityId: isSet(object.activityId) ? String(object.activityId) : "" };
  },

  toJSON(message: GetMyRequest): unknown {
    const obj: any = {};
    if (message.activityId !== "") {
      obj.activityId = message.activityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMyRequest>, I>>(base?: I): GetMyRequest {
    return GetMyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetMyRequest>, I>>(object: I): GetMyRequest {
    const message = createBaseGetMyRequest();
    message.activityId = object.activityId ?? "";
    return message;
  },
};

function createBaseGetRequest(): GetRequest {
  return { userId: "", activityId: "" };
}

export const GetRequest = {
  encode(message: GetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.activityId !== "") {
      writer.uint32(18).string(message.activityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.activityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      activityId: isSet(object.activityId) ? String(object.activityId) : "",
    };
  },

  toJSON(message: GetRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.activityId !== "") {
      obj.activityId = message.activityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetRequest>, I>>(base?: I): GetRequest {
    return GetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetRequest>, I>>(object: I): GetRequest {
    const message = createBaseGetRequest();
    message.userId = object.userId ?? "";
    message.activityId = object.activityId ?? "";
    return message;
  },
};

function createBaseGetResponse(): GetResponse {
  return { activityId: "", stravaId: 0, stravaAthleteId: 0, gpx: undefined };
}

export const GetResponse = {
  encode(message: GetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activityId !== "") {
      writer.uint32(10).string(message.activityId);
    }
    if (message.stravaId !== 0) {
      writer.uint32(16).int64(message.stravaId);
    }
    if (message.stravaAthleteId !== 0) {
      writer.uint32(24).int64(message.stravaAthleteId);
    }
    if (message.gpx !== undefined) {
      Gpx.encode(message.gpx, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.activityId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.stravaId = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.stravaAthleteId = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.gpx = Gpx.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetResponse {
    return {
      activityId: isSet(object.activityId) ? String(object.activityId) : "",
      stravaId: isSet(object.stravaId) ? Number(object.stravaId) : 0,
      stravaAthleteId: isSet(object.stravaAthleteId) ? Number(object.stravaAthleteId) : 0,
      gpx: isSet(object.gpx) ? Gpx.fromJSON(object.gpx) : undefined,
    };
  },

  toJSON(message: GetResponse): unknown {
    const obj: any = {};
    if (message.activityId !== "") {
      obj.activityId = message.activityId;
    }
    if (message.stravaId !== 0) {
      obj.stravaId = Math.round(message.stravaId);
    }
    if (message.stravaAthleteId !== 0) {
      obj.stravaAthleteId = Math.round(message.stravaAthleteId);
    }
    if (message.gpx !== undefined) {
      obj.gpx = Gpx.toJSON(message.gpx);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetResponse>, I>>(base?: I): GetResponse {
    return GetResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetResponse>, I>>(object: I): GetResponse {
    const message = createBaseGetResponse();
    message.activityId = object.activityId ?? "";
    message.stravaId = object.stravaId ?? 0;
    message.stravaAthleteId = object.stravaAthleteId ?? 0;
    message.gpx = (object.gpx !== undefined && object.gpx !== null) ? Gpx.fromPartial(object.gpx) : undefined;
    return message;
  },
};

export interface MyGpxSvc {
  Get(request: DeepPartial<GetMyRequest>, metadata?: grpc.Metadata): Observable<Chunk>;
}

export class MyGpxSvcClientImpl implements MyGpxSvc {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Get = this.Get.bind(this);
  }

  Get(request: DeepPartial<GetMyRequest>, metadata?: grpc.Metadata): Observable<Chunk> {
    return this.rpc.invoke(MyGpxSvcGetDesc, GetMyRequest.fromPartial(request), metadata);
  }
}

export const MyGpxSvcDesc = { serviceName: "gpxsvc.MyGpxSvc" };

export const MyGpxSvcGetDesc: UnaryMethodDefinitionish = {
  methodName: "Get",
  service: MyGpxSvcDesc,
  requestStream: false,
  responseStream: true,
  requestType: {
    serializeBinary() {
      return GetMyRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = Chunk.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export interface GpxSvc {
  Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
}

export class GpxSvcClientImpl implements GpxSvc {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Get = this.Get.bind(this);
  }

  Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse> {
    return this.rpc.unary(GpxSvcGetDesc, GetRequest.fromPartial(request), metadata);
  }
}

export const GpxSvcDesc = { serviceName: "gpxsvc.GpxSvc" };

export const GpxSvcGetDesc: UnaryMethodDefinitionish = {
  methodName: "Get",
  service: GpxSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetResponse.decode(data);
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
  invoke<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Observable<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;
    streamingTransport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;
      streamingTransport?: grpc.TransportFactory;
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

  invoke<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Observable<any> {
    const upStreamCodes = this.options.upStreamRetryCodes ?? [];
    const DEFAULT_TIMEOUT_TIME: number = 3_000;
    const request = { ..._request, ...methodDesc.requestType };
    const transport = this.options.streamingTransport ?? this.options.transport;
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata ?? this.options.metadata;
    return new Observable((observer) => {
      const upStream = (() => {
        const client = grpc.invoke(methodDesc, {
          host: this.host,
          request,
          ...(transport !== undefined ? { transport } : {}),
          metadata: maybeCombinedMetadata ?? {},
          debug: this.options.debug ?? false,
          onMessage: (next) => observer.next(next),
          onEnd: (code: grpc.Code, message: string, trailers: grpc.Metadata) => {
            if (code === 0) {
              observer.complete();
            } else if (upStreamCodes.includes(code)) {
              setTimeout(upStream, DEFAULT_TIMEOUT_TIME);
            } else {
              const err = new Error(message) as any;
              err.code = code;
              err.metadata = trailers;
              observer.error(err);
            }
          },
        });
        observer.add(() => {
          return client.close();
        });
      });
      upStream();
    }).pipe(share());
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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export class GrpcWebError extends tsProtoGlobalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}

/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";

export const protobufPackage = "stop";

export interface Stop {
  id: string;
  remoteId: string;
  name: string;
  lat: number;
  long: number;
  createdAt: number;
}

export interface ListRequest {
  language: ListRequest_Language;
}

export enum ListRequest_Language {
  LANGUAGE_UNSPECIFIED = 0,
  LANGUAGE_EN = 1,
  LANGUAGE_TC = 2,
  LANGUAGE_SC = 3,
  UNRECOGNIZED = -1,
}

export function listRequest_LanguageFromJSON(object: any): ListRequest_Language {
  switch (object) {
    case 0:
    case "LANGUAGE_UNSPECIFIED":
      return ListRequest_Language.LANGUAGE_UNSPECIFIED;
    case 1:
    case "LANGUAGE_EN":
      return ListRequest_Language.LANGUAGE_EN;
    case 2:
    case "LANGUAGE_TC":
      return ListRequest_Language.LANGUAGE_TC;
    case 3:
    case "LANGUAGE_SC":
      return ListRequest_Language.LANGUAGE_SC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ListRequest_Language.UNRECOGNIZED;
  }
}

export function listRequest_LanguageToJSON(object: ListRequest_Language): string {
  switch (object) {
    case ListRequest_Language.LANGUAGE_UNSPECIFIED:
      return "LANGUAGE_UNSPECIFIED";
    case ListRequest_Language.LANGUAGE_EN:
      return "LANGUAGE_EN";
    case ListRequest_Language.LANGUAGE_TC:
      return "LANGUAGE_TC";
    case ListRequest_Language.LANGUAGE_SC:
      return "LANGUAGE_SC";
    case ListRequest_Language.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ListResponse {
  stops: Stop[];
}

function createBaseStop(): Stop {
  return { id: "", remoteId: "", name: "", lat: 0, long: 0, createdAt: 0 };
}

export const Stop = {
  encode(message: Stop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.remoteId !== "") {
      writer.uint32(18).string(message.remoteId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.lat !== 0) {
      writer.uint32(37).float(message.lat);
    }
    if (message.long !== 0) {
      writer.uint32(45).float(message.long);
    }
    if (message.createdAt !== 0) {
      writer.uint32(48).int64(message.createdAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Stop {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.remoteId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.lat = reader.float();
          continue;
        case 5:
          if (tag !== 45) {
            break;
          }

          message.long = reader.float();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.createdAt = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Stop {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      remoteId: isSet(object.remoteId) ? String(object.remoteId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      lat: isSet(object.lat) ? Number(object.lat) : 0,
      long: isSet(object.long) ? Number(object.long) : 0,
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
    };
  },

  toJSON(message: Stop): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.remoteId !== "") {
      obj.remoteId = message.remoteId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.lat !== 0) {
      obj.lat = message.lat;
    }
    if (message.long !== 0) {
      obj.long = message.long;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Stop>, I>>(base?: I): Stop {
    return Stop.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Stop>, I>>(object: I): Stop {
    const message = createBaseStop();
    message.id = object.id ?? "";
    message.remoteId = object.remoteId ?? "";
    message.name = object.name ?? "";
    message.lat = object.lat ?? 0;
    message.long = object.long ?? 0;
    message.createdAt = object.createdAt ?? 0;
    return message;
  },
};

function createBaseListRequest(): ListRequest {
  return { language: 0 };
}

export const ListRequest = {
  encode(message: ListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.language !== 0) {
      writer.uint32(8).int32(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.language = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListRequest {
    return { language: isSet(object.language) ? listRequest_LanguageFromJSON(object.language) : 0 };
  },

  toJSON(message: ListRequest): unknown {
    const obj: any = {};
    if (message.language !== 0) {
      obj.language = listRequest_LanguageToJSON(message.language);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListRequest>, I>>(base?: I): ListRequest {
    return ListRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListRequest>, I>>(object: I): ListRequest {
    const message = createBaseListRequest();
    message.language = object.language ?? 0;
    return message;
  },
};

function createBaseListResponse(): ListResponse {
  return { stops: [] };
}

export const ListResponse = {
  encode(message: ListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stops) {
      Stop.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stops.push(Stop.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListResponse {
    return { stops: Array.isArray(object?.stops) ? object.stops.map((e: any) => Stop.fromJSON(e)) : [] };
  },

  toJSON(message: ListResponse): unknown {
    const obj: any = {};
    if (message.stops?.length) {
      obj.stops = message.stops.map((e) => Stop.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListResponse>, I>>(base?: I): ListResponse {
    return ListResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListResponse>, I>>(object: I): ListResponse {
    const message = createBaseListResponse();
    message.stops = object.stops?.map((e) => Stop.fromPartial(e)) || [];
    return message;
  },
};

export interface StopSvc {
  List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
  Sync(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<Empty>;
}

export class StopSvcClientImpl implements StopSvc {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.List = this.List.bind(this);
    this.Sync = this.Sync.bind(this);
  }

  List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse> {
    return this.rpc.unary(StopSvcListDesc, ListRequest.fromPartial(request), metadata);
  }

  Sync(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<Empty> {
    return this.rpc.unary(StopSvcSyncDesc, Empty.fromPartial(request), metadata);
  }
}

export const StopSvcDesc = { serviceName: "stop.StopSvc" };

export const StopSvcListDesc: UnaryMethodDefinitionish = {
  methodName: "List",
  service: StopSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ListRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ListResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const StopSvcSyncDesc: UnaryMethodDefinitionish = {
  methodName: "Sync",
  service: StopSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = Empty.decode(data);
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

/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { share } from "rxjs/operators";
import Long = require("long");

export const protobufPackage = "gpx";

export interface GetGpxRequest {
  activityId: string;
}

export interface GetConciseGpxRequest {
  activityId: string;
}

export interface GetConciseGpxResponse {
  activityId: string;
  stravaId: number;
  stravaAthleteId: number;
  gpx: Gpx | undefined;
}

export interface Chunk {
  chunk: Uint8Array;
}

export interface Gpx {
  name: string;
  startDate: number;
  type: string;
  points: Point[];
}

export interface Point {
  lat: number;
  lon: number;
  ele: number;
  time: number;
  hr: number;
  cad: number;
}

function createBaseGetGpxRequest(): GetGpxRequest {
  return { activityId: "" };
}

export const GetGpxRequest = {
  encode(message: GetGpxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activityId !== "") {
      writer.uint32(10).string(message.activityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGpxRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGpxRequest();
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

  fromJSON(object: any): GetGpxRequest {
    return { activityId: isSet(object.activityId) ? String(object.activityId) : "" };
  },

  toJSON(message: GetGpxRequest): unknown {
    const obj: any = {};
    if (message.activityId !== "") {
      obj.activityId = message.activityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetGpxRequest>, I>>(base?: I): GetGpxRequest {
    return GetGpxRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetGpxRequest>, I>>(object: I): GetGpxRequest {
    const message = createBaseGetGpxRequest();
    message.activityId = object.activityId ?? "";
    return message;
  },
};

function createBaseGetConciseGpxRequest(): GetConciseGpxRequest {
  return { activityId: "" };
}

export const GetConciseGpxRequest = {
  encode(message: GetConciseGpxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activityId !== "") {
      writer.uint32(10).string(message.activityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetConciseGpxRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetConciseGpxRequest();
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

  fromJSON(object: any): GetConciseGpxRequest {
    return { activityId: isSet(object.activityId) ? String(object.activityId) : "" };
  },

  toJSON(message: GetConciseGpxRequest): unknown {
    const obj: any = {};
    if (message.activityId !== "") {
      obj.activityId = message.activityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetConciseGpxRequest>, I>>(base?: I): GetConciseGpxRequest {
    return GetConciseGpxRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetConciseGpxRequest>, I>>(object: I): GetConciseGpxRequest {
    const message = createBaseGetConciseGpxRequest();
    message.activityId = object.activityId ?? "";
    return message;
  },
};

function createBaseGetConciseGpxResponse(): GetConciseGpxResponse {
  return { activityId: "", stravaId: 0, stravaAthleteId: 0, gpx: undefined };
}

export const GetConciseGpxResponse = {
  encode(message: GetConciseGpxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): GetConciseGpxResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetConciseGpxResponse();
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

  fromJSON(object: any): GetConciseGpxResponse {
    return {
      activityId: isSet(object.activityId) ? String(object.activityId) : "",
      stravaId: isSet(object.stravaId) ? Number(object.stravaId) : 0,
      stravaAthleteId: isSet(object.stravaAthleteId) ? Number(object.stravaAthleteId) : 0,
      gpx: isSet(object.gpx) ? Gpx.fromJSON(object.gpx) : undefined,
    };
  },

  toJSON(message: GetConciseGpxResponse): unknown {
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

  create<I extends Exact<DeepPartial<GetConciseGpxResponse>, I>>(base?: I): GetConciseGpxResponse {
    return GetConciseGpxResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetConciseGpxResponse>, I>>(object: I): GetConciseGpxResponse {
    const message = createBaseGetConciseGpxResponse();
    message.activityId = object.activityId ?? "";
    message.stravaId = object.stravaId ?? 0;
    message.stravaAthleteId = object.stravaAthleteId ?? 0;
    message.gpx = (object.gpx !== undefined && object.gpx !== null) ? Gpx.fromPartial(object.gpx) : undefined;
    return message;
  },
};

function createBaseChunk(): Chunk {
  return { chunk: new Uint8Array(0) };
}

export const Chunk = {
  encode(message: Chunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chunk.length !== 0) {
      writer.uint32(10).bytes(message.chunk);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Chunk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chunk = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Chunk {
    return { chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array(0) };
  },

  toJSON(message: Chunk): unknown {
    const obj: any = {};
    if (message.chunk.length !== 0) {
      obj.chunk = base64FromBytes(message.chunk);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Chunk>, I>>(base?: I): Chunk {
    return Chunk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Chunk>, I>>(object: I): Chunk {
    const message = createBaseChunk();
    message.chunk = object.chunk ?? new Uint8Array(0);
    return message;
  },
};

function createBaseGpx(): Gpx {
  return { name: "", startDate: 0, type: "", points: [] };
}

export const Gpx = {
  encode(message: Gpx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.startDate !== 0) {
      writer.uint32(16).int64(message.startDate);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    for (const v of message.points) {
      Point.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Gpx {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGpx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.startDate = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.type = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.points.push(Point.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Gpx {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      startDate: isSet(object.startDate) ? Number(object.startDate) : 0,
      type: isSet(object.type) ? String(object.type) : "",
      points: Array.isArray(object?.points) ? object.points.map((e: any) => Point.fromJSON(e)) : [],
    };
  },

  toJSON(message: Gpx): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.startDate !== 0) {
      obj.startDate = Math.round(message.startDate);
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.points?.length) {
      obj.points = message.points.map((e) => Point.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Gpx>, I>>(base?: I): Gpx {
    return Gpx.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Gpx>, I>>(object: I): Gpx {
    const message = createBaseGpx();
    message.name = object.name ?? "";
    message.startDate = object.startDate ?? 0;
    message.type = object.type ?? "";
    message.points = object.points?.map((e) => Point.fromPartial(e)) || [];
    return message;
  },
};

function createBasePoint(): Point {
  return { lat: 0, lon: 0, ele: 0, time: 0, hr: 0, cad: 0 };
}

export const Point = {
  encode(message: Point, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lat !== 0) {
      writer.uint32(13).float(message.lat);
    }
    if (message.lon !== 0) {
      writer.uint32(21).float(message.lon);
    }
    if (message.ele !== 0) {
      writer.uint32(29).float(message.ele);
    }
    if (message.time !== 0) {
      writer.uint32(32).int64(message.time);
    }
    if (message.hr !== 0) {
      writer.uint32(40).int32(message.hr);
    }
    if (message.cad !== 0) {
      writer.uint32(48).int32(message.cad);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Point {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.lat = reader.float();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.lon = reader.float();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.ele = reader.float();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.time = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.hr = reader.int32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.cad = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Point {
    return {
      lat: isSet(object.lat) ? Number(object.lat) : 0,
      lon: isSet(object.lon) ? Number(object.lon) : 0,
      ele: isSet(object.ele) ? Number(object.ele) : 0,
      time: isSet(object.time) ? Number(object.time) : 0,
      hr: isSet(object.hr) ? Number(object.hr) : 0,
      cad: isSet(object.cad) ? Number(object.cad) : 0,
    };
  },

  toJSON(message: Point): unknown {
    const obj: any = {};
    if (message.lat !== 0) {
      obj.lat = message.lat;
    }
    if (message.lon !== 0) {
      obj.lon = message.lon;
    }
    if (message.ele !== 0) {
      obj.ele = message.ele;
    }
    if (message.time !== 0) {
      obj.time = Math.round(message.time);
    }
    if (message.hr !== 0) {
      obj.hr = Math.round(message.hr);
    }
    if (message.cad !== 0) {
      obj.cad = Math.round(message.cad);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Point>, I>>(base?: I): Point {
    return Point.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Point>, I>>(object: I): Point {
    const message = createBasePoint();
    message.lat = object.lat ?? 0;
    message.lon = object.lon ?? 0;
    message.ele = object.ele ?? 0;
    message.time = object.time ?? 0;
    message.hr = object.hr ?? 0;
    message.cad = object.cad ?? 0;
    return message;
  },
};

export interface GpxService {
  GetGpx(request: DeepPartial<GetGpxRequest>, metadata?: grpc.Metadata): Observable<Chunk>;
  GetConciseGpx(request: DeepPartial<GetGpxRequest>, metadata?: grpc.Metadata): Promise<GetConciseGpxResponse>;
}

export class GpxServiceClientImpl implements GpxService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetGpx = this.GetGpx.bind(this);
    this.GetConciseGpx = this.GetConciseGpx.bind(this);
  }

  GetGpx(request: DeepPartial<GetGpxRequest>, metadata?: grpc.Metadata): Observable<Chunk> {
    return this.rpc.invoke(GpxServiceGetGpxDesc, GetGpxRequest.fromPartial(request), metadata);
  }

  GetConciseGpx(request: DeepPartial<GetGpxRequest>, metadata?: grpc.Metadata): Promise<GetConciseGpxResponse> {
    return this.rpc.unary(GpxServiceGetConciseGpxDesc, GetGpxRequest.fromPartial(request), metadata);
  }
}

export const GpxServiceDesc = { serviceName: "gpx.GpxService" };

export const GpxServiceGetGpxDesc: UnaryMethodDefinitionish = {
  methodName: "GetGpx",
  service: GpxServiceDesc,
  requestStream: false,
  responseStream: true,
  requestType: {
    serializeBinary() {
      return GetGpxRequest.encode(this).finish();
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

export const GpxServiceGetConciseGpxDesc: UnaryMethodDefinitionish = {
  methodName: "GetConciseGpx",
  service: GpxServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetGpxRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetConciseGpxResponse.decode(data);
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

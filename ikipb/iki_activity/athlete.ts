/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import * as _m0 from "protobufjs/minimal";
import { Empty } from "../../google/protobuf/empty";

export const protobufPackage = "athlete";

export interface FitnessMetric {
  age: number;
  height: number;
  weight: number;
  maxHeartrate: number;
  restHeartrate: number;
  vo2Max: number;
  male: boolean;
}

export interface SetFitnessMetricRequest {
  fitnessMetric: FitnessMetric | undefined;
}

export interface GetFitnessMetricResponse {
  fitnessMetric: FitnessMetric | undefined;
}

function createBaseFitnessMetric(): FitnessMetric {
  return { age: 0, height: 0, weight: 0, maxHeartrate: 0, restHeartrate: 0, vo2Max: 0, male: false };
}

export const FitnessMetric = {
  encode(message: FitnessMetric, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.age !== 0) {
      writer.uint32(8).int32(message.age);
    }
    if (message.height !== 0) {
      writer.uint32(21).float(message.height);
    }
    if (message.weight !== 0) {
      writer.uint32(29).float(message.weight);
    }
    if (message.maxHeartrate !== 0) {
      writer.uint32(32).int32(message.maxHeartrate);
    }
    if (message.restHeartrate !== 0) {
      writer.uint32(40).int32(message.restHeartrate);
    }
    if (message.vo2Max !== 0) {
      writer.uint32(48).int32(message.vo2Max);
    }
    if (message.male === true) {
      writer.uint32(56).bool(message.male);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FitnessMetric {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFitnessMetric();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.age = reader.int32();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.height = reader.float();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.weight = reader.float();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.maxHeartrate = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.restHeartrate = reader.int32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.vo2Max = reader.int32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.male = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FitnessMetric {
    return {
      age: isSet(object.age) ? Number(object.age) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      weight: isSet(object.weight) ? Number(object.weight) : 0,
      maxHeartrate: isSet(object.maxHeartrate) ? Number(object.maxHeartrate) : 0,
      restHeartrate: isSet(object.restHeartrate) ? Number(object.restHeartrate) : 0,
      vo2Max: isSet(object.vo2Max) ? Number(object.vo2Max) : 0,
      male: isSet(object.male) ? Boolean(object.male) : false,
    };
  },

  toJSON(message: FitnessMetric): unknown {
    const obj: any = {};
    if (message.age !== 0) {
      obj.age = Math.round(message.age);
    }
    if (message.height !== 0) {
      obj.height = message.height;
    }
    if (message.weight !== 0) {
      obj.weight = message.weight;
    }
    if (message.maxHeartrate !== 0) {
      obj.maxHeartrate = Math.round(message.maxHeartrate);
    }
    if (message.restHeartrate !== 0) {
      obj.restHeartrate = Math.round(message.restHeartrate);
    }
    if (message.vo2Max !== 0) {
      obj.vo2Max = Math.round(message.vo2Max);
    }
    if (message.male === true) {
      obj.male = message.male;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FitnessMetric>, I>>(base?: I): FitnessMetric {
    return FitnessMetric.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FitnessMetric>, I>>(object: I): FitnessMetric {
    const message = createBaseFitnessMetric();
    message.age = object.age ?? 0;
    message.height = object.height ?? 0;
    message.weight = object.weight ?? 0;
    message.maxHeartrate = object.maxHeartrate ?? 0;
    message.restHeartrate = object.restHeartrate ?? 0;
    message.vo2Max = object.vo2Max ?? 0;
    message.male = object.male ?? false;
    return message;
  },
};

function createBaseSetFitnessMetricRequest(): SetFitnessMetricRequest {
  return { fitnessMetric: undefined };
}

export const SetFitnessMetricRequest = {
  encode(message: SetFitnessMetricRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fitnessMetric !== undefined) {
      FitnessMetric.encode(message.fitnessMetric, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetFitnessMetricRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetFitnessMetricRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fitnessMetric = FitnessMetric.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetFitnessMetricRequest {
    return { fitnessMetric: isSet(object.fitnessMetric) ? FitnessMetric.fromJSON(object.fitnessMetric) : undefined };
  },

  toJSON(message: SetFitnessMetricRequest): unknown {
    const obj: any = {};
    if (message.fitnessMetric !== undefined) {
      obj.fitnessMetric = FitnessMetric.toJSON(message.fitnessMetric);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetFitnessMetricRequest>, I>>(base?: I): SetFitnessMetricRequest {
    return SetFitnessMetricRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetFitnessMetricRequest>, I>>(object: I): SetFitnessMetricRequest {
    const message = createBaseSetFitnessMetricRequest();
    message.fitnessMetric = (object.fitnessMetric !== undefined && object.fitnessMetric !== null)
      ? FitnessMetric.fromPartial(object.fitnessMetric)
      : undefined;
    return message;
  },
};

function createBaseGetFitnessMetricResponse(): GetFitnessMetricResponse {
  return { fitnessMetric: undefined };
}

export const GetFitnessMetricResponse = {
  encode(message: GetFitnessMetricResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fitnessMetric !== undefined) {
      FitnessMetric.encode(message.fitnessMetric, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFitnessMetricResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFitnessMetricResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fitnessMetric = FitnessMetric.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetFitnessMetricResponse {
    return { fitnessMetric: isSet(object.fitnessMetric) ? FitnessMetric.fromJSON(object.fitnessMetric) : undefined };
  },

  toJSON(message: GetFitnessMetricResponse): unknown {
    const obj: any = {};
    if (message.fitnessMetric !== undefined) {
      obj.fitnessMetric = FitnessMetric.toJSON(message.fitnessMetric);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetFitnessMetricResponse>, I>>(base?: I): GetFitnessMetricResponse {
    return GetFitnessMetricResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetFitnessMetricResponse>, I>>(object: I): GetFitnessMetricResponse {
    const message = createBaseGetFitnessMetricResponse();
    message.fitnessMetric = (object.fitnessMetric !== undefined && object.fitnessMetric !== null)
      ? FitnessMetric.fromPartial(object.fitnessMetric)
      : undefined;
    return message;
  },
};

export interface AthleteService {
  SetFitnessMetric(request: DeepPartial<SetFitnessMetricRequest>, metadata?: grpc.Metadata): Promise<Empty>;
  GetFitnessMetric(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetFitnessMetricResponse>;
}

export class AthleteServiceClientImpl implements AthleteService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetFitnessMetric = this.SetFitnessMetric.bind(this);
    this.GetFitnessMetric = this.GetFitnessMetric.bind(this);
  }

  SetFitnessMetric(request: DeepPartial<SetFitnessMetricRequest>, metadata?: grpc.Metadata): Promise<Empty> {
    return this.rpc.unary(AthleteServiceSetFitnessMetricDesc, SetFitnessMetricRequest.fromPartial(request), metadata);
  }

  GetFitnessMetric(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetFitnessMetricResponse> {
    return this.rpc.unary(AthleteServiceGetFitnessMetricDesc, Empty.fromPartial(request), metadata);
  }
}

export const AthleteServiceDesc = { serviceName: "athlete.AthleteService" };

export const AthleteServiceSetFitnessMetricDesc: UnaryMethodDefinitionish = {
  methodName: "SetFitnessMetric",
  service: AthleteServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SetFitnessMetricRequest.encode(this).finish();
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

export const AthleteServiceGetFitnessMetricDesc: UnaryMethodDefinitionish = {
  methodName: "GetFitnessMetric",
  service: AthleteServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetFitnessMetricResponse.decode(data);
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

/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { Athlete, AthleteFitness } from "../activity";

export const protobufPackage = "athletesvc";

export interface GetMyRequest {
}

export interface GetMyResponse {
  athlete: Athlete | undefined;
}

export interface SetMyFitnessRequest {
  fitness: AthleteFitness | undefined;
}

export interface SetMyFitnessResponse {
}

export interface GetRequest {
  userId: string;
}

export interface GetResponse {
  athlete: Athlete | undefined;
}

export interface SetFitnessRequest {
  userId: string;
  fitness: AthleteFitness | undefined;
}

export interface SetFitnessResponse {
}

function createBaseGetMyRequest(): GetMyRequest {
  return {};
}

export const GetMyRequest = {
  encode(_: GetMyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMyRequest();
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

  fromJSON(_: any): GetMyRequest {
    return {};
  },

  toJSON(_: GetMyRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMyRequest>, I>>(base?: I): GetMyRequest {
    return GetMyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetMyRequest>, I>>(_: I): GetMyRequest {
    const message = createBaseGetMyRequest();
    return message;
  },
};

function createBaseGetMyResponse(): GetMyResponse {
  return { athlete: undefined };
}

export const GetMyResponse = {
  encode(message: GetMyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.athlete !== undefined) {
      Athlete.encode(message.athlete, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMyResponse();
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

  fromJSON(object: any): GetMyResponse {
    return { athlete: isSet(object.athlete) ? Athlete.fromJSON(object.athlete) : undefined };
  },

  toJSON(message: GetMyResponse): unknown {
    const obj: any = {};
    if (message.athlete !== undefined) {
      obj.athlete = Athlete.toJSON(message.athlete);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMyResponse>, I>>(base?: I): GetMyResponse {
    return GetMyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetMyResponse>, I>>(object: I): GetMyResponse {
    const message = createBaseGetMyResponse();
    message.athlete = (object.athlete !== undefined && object.athlete !== null)
      ? Athlete.fromPartial(object.athlete)
      : undefined;
    return message;
  },
};

function createBaseSetMyFitnessRequest(): SetMyFitnessRequest {
  return { fitness: undefined };
}

export const SetMyFitnessRequest = {
  encode(message: SetMyFitnessRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fitness !== undefined) {
      AthleteFitness.encode(message.fitness, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetMyFitnessRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetMyFitnessRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fitness = AthleteFitness.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetMyFitnessRequest {
    return { fitness: isSet(object.fitness) ? AthleteFitness.fromJSON(object.fitness) : undefined };
  },

  toJSON(message: SetMyFitnessRequest): unknown {
    const obj: any = {};
    if (message.fitness !== undefined) {
      obj.fitness = AthleteFitness.toJSON(message.fitness);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetMyFitnessRequest>, I>>(base?: I): SetMyFitnessRequest {
    return SetMyFitnessRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetMyFitnessRequest>, I>>(object: I): SetMyFitnessRequest {
    const message = createBaseSetMyFitnessRequest();
    message.fitness = (object.fitness !== undefined && object.fitness !== null)
      ? AthleteFitness.fromPartial(object.fitness)
      : undefined;
    return message;
  },
};

function createBaseSetMyFitnessResponse(): SetMyFitnessResponse {
  return {};
}

export const SetMyFitnessResponse = {
  encode(_: SetMyFitnessResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetMyFitnessResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetMyFitnessResponse();
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

  fromJSON(_: any): SetMyFitnessResponse {
    return {};
  },

  toJSON(_: SetMyFitnessResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SetMyFitnessResponse>, I>>(base?: I): SetMyFitnessResponse {
    return SetMyFitnessResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetMyFitnessResponse>, I>>(_: I): SetMyFitnessResponse {
    const message = createBaseSetMyFitnessResponse();
    return message;
  },
};

function createBaseGetRequest(): GetRequest {
  return { userId: "" };
}

export const GetRequest = {
  encode(message: GetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetRequest {
    return { userId: isSet(object.userId) ? String(object.userId) : "" };
  },

  toJSON(message: GetRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetRequest>, I>>(base?: I): GetRequest {
    return GetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetRequest>, I>>(object: I): GetRequest {
    const message = createBaseGetRequest();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseGetResponse(): GetResponse {
  return { athlete: undefined };
}

export const GetResponse = {
  encode(message: GetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.athlete !== undefined) {
      Athlete.encode(message.athlete, writer.uint32(10).fork()).ldelim();
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

  fromJSON(object: any): GetResponse {
    return { athlete: isSet(object.athlete) ? Athlete.fromJSON(object.athlete) : undefined };
  },

  toJSON(message: GetResponse): unknown {
    const obj: any = {};
    if (message.athlete !== undefined) {
      obj.athlete = Athlete.toJSON(message.athlete);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetResponse>, I>>(base?: I): GetResponse {
    return GetResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetResponse>, I>>(object: I): GetResponse {
    const message = createBaseGetResponse();
    message.athlete = (object.athlete !== undefined && object.athlete !== null)
      ? Athlete.fromPartial(object.athlete)
      : undefined;
    return message;
  },
};

function createBaseSetFitnessRequest(): SetFitnessRequest {
  return { userId: "", fitness: undefined };
}

export const SetFitnessRequest = {
  encode(message: SetFitnessRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.fitness !== undefined) {
      AthleteFitness.encode(message.fitness, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetFitnessRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetFitnessRequest();
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

          message.fitness = AthleteFitness.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetFitnessRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      fitness: isSet(object.fitness) ? AthleteFitness.fromJSON(object.fitness) : undefined,
    };
  },

  toJSON(message: SetFitnessRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.fitness !== undefined) {
      obj.fitness = AthleteFitness.toJSON(message.fitness);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetFitnessRequest>, I>>(base?: I): SetFitnessRequest {
    return SetFitnessRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetFitnessRequest>, I>>(object: I): SetFitnessRequest {
    const message = createBaseSetFitnessRequest();
    message.userId = object.userId ?? "";
    message.fitness = (object.fitness !== undefined && object.fitness !== null)
      ? AthleteFitness.fromPartial(object.fitness)
      : undefined;
    return message;
  },
};

function createBaseSetFitnessResponse(): SetFitnessResponse {
  return {};
}

export const SetFitnessResponse = {
  encode(_: SetFitnessResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetFitnessResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetFitnessResponse();
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

  fromJSON(_: any): SetFitnessResponse {
    return {};
  },

  toJSON(_: SetFitnessResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SetFitnessResponse>, I>>(base?: I): SetFitnessResponse {
    return SetFitnessResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetFitnessResponse>, I>>(_: I): SetFitnessResponse {
    const message = createBaseSetFitnessResponse();
    return message;
  },
};

export interface MyAthleteSvc {
  Get(request: DeepPartial<GetMyRequest>, metadata?: grpc.Metadata): Promise<GetMyResponse>;
  SetFitness(request: DeepPartial<SetMyFitnessRequest>, metadata?: grpc.Metadata): Promise<SetMyFitnessResponse>;
}

export class MyAthleteSvcClientImpl implements MyAthleteSvc {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Get = this.Get.bind(this);
    this.SetFitness = this.SetFitness.bind(this);
  }

  Get(request: DeepPartial<GetMyRequest>, metadata?: grpc.Metadata): Promise<GetMyResponse> {
    return this.rpc.unary(MyAthleteSvcGetDesc, GetMyRequest.fromPartial(request), metadata);
  }

  SetFitness(request: DeepPartial<SetMyFitnessRequest>, metadata?: grpc.Metadata): Promise<SetMyFitnessResponse> {
    return this.rpc.unary(MyAthleteSvcSetFitnessDesc, SetMyFitnessRequest.fromPartial(request), metadata);
  }
}

export const MyAthleteSvcDesc = { serviceName: "athletesvc.MyAthleteSvc" };

export const MyAthleteSvcGetDesc: UnaryMethodDefinitionish = {
  methodName: "Get",
  service: MyAthleteSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetMyRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetMyResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MyAthleteSvcSetFitnessDesc: UnaryMethodDefinitionish = {
  methodName: "SetFitness",
  service: MyAthleteSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SetMyFitnessRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = SetMyFitnessResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export interface AthleteSvc {
  Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
  SetFitness(request: DeepPartial<SetFitnessRequest>, metadata?: grpc.Metadata): Promise<SetFitnessResponse>;
}

export class AthleteSvcClientImpl implements AthleteSvc {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Get = this.Get.bind(this);
    this.SetFitness = this.SetFitness.bind(this);
  }

  Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse> {
    return this.rpc.unary(AthleteSvcGetDesc, GetRequest.fromPartial(request), metadata);
  }

  SetFitness(request: DeepPartial<SetFitnessRequest>, metadata?: grpc.Metadata): Promise<SetFitnessResponse> {
    return this.rpc.unary(AthleteSvcSetFitnessDesc, SetFitnessRequest.fromPartial(request), metadata);
  }
}

export const AthleteSvcDesc = { serviceName: "athletesvc.AthleteSvc" };

export const AthleteSvcGetDesc: UnaryMethodDefinitionish = {
  methodName: "Get",
  service: AthleteSvcDesc,
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

export const AthleteSvcSetFitnessDesc: UnaryMethodDefinitionish = {
  methodName: "SetFitness",
  service: AthleteSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SetFitnessRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = SetFitnessResponse.decode(data);
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

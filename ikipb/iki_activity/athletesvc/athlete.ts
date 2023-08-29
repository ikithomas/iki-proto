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

export interface SetMyFitnessMetricRequest {
  fitness: AthleteFitness | undefined;
}

export interface SetMyFitnessMetricResponse {
}

export interface GetMyFitnessMetricRequest {
}

export interface GetMyFitnessMetricResponse {
  fitness: AthleteFitness | undefined;
}

export interface GetRequest {
  userId: string;
}

export interface GetResponse {
  athlete: Athlete | undefined;
}

export interface SetFitnessMetricRequest {
  userId: string;
  fitness: AthleteFitness | undefined;
}

export interface SetFitnessMetricResponse {
}

export interface GetFitnessMetricRequest {
  userId: string;
}

export interface GetFitnessMetricResponse {
  fitness: AthleteFitness | undefined;
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

function createBaseSetMyFitnessMetricRequest(): SetMyFitnessMetricRequest {
  return { fitness: undefined };
}

export const SetMyFitnessMetricRequest = {
  encode(message: SetMyFitnessMetricRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fitness !== undefined) {
      AthleteFitness.encode(message.fitness, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetMyFitnessMetricRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetMyFitnessMetricRequest();
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

  fromJSON(object: any): SetMyFitnessMetricRequest {
    return { fitness: isSet(object.fitness) ? AthleteFitness.fromJSON(object.fitness) : undefined };
  },

  toJSON(message: SetMyFitnessMetricRequest): unknown {
    const obj: any = {};
    if (message.fitness !== undefined) {
      obj.fitness = AthleteFitness.toJSON(message.fitness);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetMyFitnessMetricRequest>, I>>(base?: I): SetMyFitnessMetricRequest {
    return SetMyFitnessMetricRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetMyFitnessMetricRequest>, I>>(object: I): SetMyFitnessMetricRequest {
    const message = createBaseSetMyFitnessMetricRequest();
    message.fitness = (object.fitness !== undefined && object.fitness !== null)
      ? AthleteFitness.fromPartial(object.fitness)
      : undefined;
    return message;
  },
};

function createBaseSetMyFitnessMetricResponse(): SetMyFitnessMetricResponse {
  return {};
}

export const SetMyFitnessMetricResponse = {
  encode(_: SetMyFitnessMetricResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetMyFitnessMetricResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetMyFitnessMetricResponse();
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

  fromJSON(_: any): SetMyFitnessMetricResponse {
    return {};
  },

  toJSON(_: SetMyFitnessMetricResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SetMyFitnessMetricResponse>, I>>(base?: I): SetMyFitnessMetricResponse {
    return SetMyFitnessMetricResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetMyFitnessMetricResponse>, I>>(_: I): SetMyFitnessMetricResponse {
    const message = createBaseSetMyFitnessMetricResponse();
    return message;
  },
};

function createBaseGetMyFitnessMetricRequest(): GetMyFitnessMetricRequest {
  return {};
}

export const GetMyFitnessMetricRequest = {
  encode(_: GetMyFitnessMetricRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMyFitnessMetricRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMyFitnessMetricRequest();
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

  fromJSON(_: any): GetMyFitnessMetricRequest {
    return {};
  },

  toJSON(_: GetMyFitnessMetricRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMyFitnessMetricRequest>, I>>(base?: I): GetMyFitnessMetricRequest {
    return GetMyFitnessMetricRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetMyFitnessMetricRequest>, I>>(_: I): GetMyFitnessMetricRequest {
    const message = createBaseGetMyFitnessMetricRequest();
    return message;
  },
};

function createBaseGetMyFitnessMetricResponse(): GetMyFitnessMetricResponse {
  return { fitness: undefined };
}

export const GetMyFitnessMetricResponse = {
  encode(message: GetMyFitnessMetricResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fitness !== undefined) {
      AthleteFitness.encode(message.fitness, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMyFitnessMetricResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMyFitnessMetricResponse();
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

  fromJSON(object: any): GetMyFitnessMetricResponse {
    return { fitness: isSet(object.fitness) ? AthleteFitness.fromJSON(object.fitness) : undefined };
  },

  toJSON(message: GetMyFitnessMetricResponse): unknown {
    const obj: any = {};
    if (message.fitness !== undefined) {
      obj.fitness = AthleteFitness.toJSON(message.fitness);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMyFitnessMetricResponse>, I>>(base?: I): GetMyFitnessMetricResponse {
    return GetMyFitnessMetricResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetMyFitnessMetricResponse>, I>>(object: I): GetMyFitnessMetricResponse {
    const message = createBaseGetMyFitnessMetricResponse();
    message.fitness = (object.fitness !== undefined && object.fitness !== null)
      ? AthleteFitness.fromPartial(object.fitness)
      : undefined;
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

function createBaseSetFitnessMetricRequest(): SetFitnessMetricRequest {
  return { userId: "", fitness: undefined };
}

export const SetFitnessMetricRequest = {
  encode(message: SetFitnessMetricRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.fitness !== undefined) {
      AthleteFitness.encode(message.fitness, writer.uint32(18).fork()).ldelim();
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

  fromJSON(object: any): SetFitnessMetricRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      fitness: isSet(object.fitness) ? AthleteFitness.fromJSON(object.fitness) : undefined,
    };
  },

  toJSON(message: SetFitnessMetricRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.fitness !== undefined) {
      obj.fitness = AthleteFitness.toJSON(message.fitness);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetFitnessMetricRequest>, I>>(base?: I): SetFitnessMetricRequest {
    return SetFitnessMetricRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetFitnessMetricRequest>, I>>(object: I): SetFitnessMetricRequest {
    const message = createBaseSetFitnessMetricRequest();
    message.userId = object.userId ?? "";
    message.fitness = (object.fitness !== undefined && object.fitness !== null)
      ? AthleteFitness.fromPartial(object.fitness)
      : undefined;
    return message;
  },
};

function createBaseSetFitnessMetricResponse(): SetFitnessMetricResponse {
  return {};
}

export const SetFitnessMetricResponse = {
  encode(_: SetFitnessMetricResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetFitnessMetricResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetFitnessMetricResponse();
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

  fromJSON(_: any): SetFitnessMetricResponse {
    return {};
  },

  toJSON(_: SetFitnessMetricResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SetFitnessMetricResponse>, I>>(base?: I): SetFitnessMetricResponse {
    return SetFitnessMetricResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetFitnessMetricResponse>, I>>(_: I): SetFitnessMetricResponse {
    const message = createBaseSetFitnessMetricResponse();
    return message;
  },
};

function createBaseGetFitnessMetricRequest(): GetFitnessMetricRequest {
  return { userId: "" };
}

export const GetFitnessMetricRequest = {
  encode(message: GetFitnessMetricRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFitnessMetricRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFitnessMetricRequest();
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

  fromJSON(object: any): GetFitnessMetricRequest {
    return { userId: isSet(object.userId) ? String(object.userId) : "" };
  },

  toJSON(message: GetFitnessMetricRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetFitnessMetricRequest>, I>>(base?: I): GetFitnessMetricRequest {
    return GetFitnessMetricRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetFitnessMetricRequest>, I>>(object: I): GetFitnessMetricRequest {
    const message = createBaseGetFitnessMetricRequest();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseGetFitnessMetricResponse(): GetFitnessMetricResponse {
  return { fitness: undefined };
}

export const GetFitnessMetricResponse = {
  encode(message: GetFitnessMetricResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fitness !== undefined) {
      AthleteFitness.encode(message.fitness, writer.uint32(10).fork()).ldelim();
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

  fromJSON(object: any): GetFitnessMetricResponse {
    return { fitness: isSet(object.fitness) ? AthleteFitness.fromJSON(object.fitness) : undefined };
  },

  toJSON(message: GetFitnessMetricResponse): unknown {
    const obj: any = {};
    if (message.fitness !== undefined) {
      obj.fitness = AthleteFitness.toJSON(message.fitness);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetFitnessMetricResponse>, I>>(base?: I): GetFitnessMetricResponse {
    return GetFitnessMetricResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetFitnessMetricResponse>, I>>(object: I): GetFitnessMetricResponse {
    const message = createBaseGetFitnessMetricResponse();
    message.fitness = (object.fitness !== undefined && object.fitness !== null)
      ? AthleteFitness.fromPartial(object.fitness)
      : undefined;
    return message;
  },
};

export interface MyAthleteSvc {
  Get(request: DeepPartial<GetMyRequest>, metadata?: grpc.Metadata): Promise<GetMyResponse>;
  SetFitnessMetric(
    request: DeepPartial<SetMyFitnessMetricRequest>,
    metadata?: grpc.Metadata,
  ): Promise<SetMyFitnessMetricResponse>;
  GetFitnessMetric(
    request: DeepPartial<GetMyFitnessMetricRequest>,
    metadata?: grpc.Metadata,
  ): Promise<GetMyFitnessMetricResponse>;
}

export class MyAthleteSvcClientImpl implements MyAthleteSvc {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Get = this.Get.bind(this);
    this.SetFitnessMetric = this.SetFitnessMetric.bind(this);
    this.GetFitnessMetric = this.GetFitnessMetric.bind(this);
  }

  Get(request: DeepPartial<GetMyRequest>, metadata?: grpc.Metadata): Promise<GetMyResponse> {
    return this.rpc.unary(MyAthleteSvcGetDesc, GetMyRequest.fromPartial(request), metadata);
  }

  SetFitnessMetric(
    request: DeepPartial<SetMyFitnessMetricRequest>,
    metadata?: grpc.Metadata,
  ): Promise<SetMyFitnessMetricResponse> {
    return this.rpc.unary(MyAthleteSvcSetFitnessMetricDesc, SetMyFitnessMetricRequest.fromPartial(request), metadata);
  }

  GetFitnessMetric(
    request: DeepPartial<GetMyFitnessMetricRequest>,
    metadata?: grpc.Metadata,
  ): Promise<GetMyFitnessMetricResponse> {
    return this.rpc.unary(MyAthleteSvcGetFitnessMetricDesc, GetMyFitnessMetricRequest.fromPartial(request), metadata);
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

export const MyAthleteSvcSetFitnessMetricDesc: UnaryMethodDefinitionish = {
  methodName: "SetFitnessMetric",
  service: MyAthleteSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SetMyFitnessMetricRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = SetMyFitnessMetricResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MyAthleteSvcGetFitnessMetricDesc: UnaryMethodDefinitionish = {
  methodName: "GetFitnessMetric",
  service: MyAthleteSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetMyFitnessMetricRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetMyFitnessMetricResponse.decode(data);
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
  SetFitnessMetric(
    request: DeepPartial<SetFitnessMetricRequest>,
    metadata?: grpc.Metadata,
  ): Promise<SetFitnessMetricResponse>;
  GetFitnessMetric(
    request: DeepPartial<GetFitnessMetricRequest>,
    metadata?: grpc.Metadata,
  ): Promise<GetFitnessMetricResponse>;
}

export class AthleteSvcClientImpl implements AthleteSvc {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Get = this.Get.bind(this);
    this.SetFitnessMetric = this.SetFitnessMetric.bind(this);
    this.GetFitnessMetric = this.GetFitnessMetric.bind(this);
  }

  Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse> {
    return this.rpc.unary(AthleteSvcGetDesc, GetRequest.fromPartial(request), metadata);
  }

  SetFitnessMetric(
    request: DeepPartial<SetFitnessMetricRequest>,
    metadata?: grpc.Metadata,
  ): Promise<SetFitnessMetricResponse> {
    return this.rpc.unary(AthleteSvcSetFitnessMetricDesc, SetFitnessMetricRequest.fromPartial(request), metadata);
  }

  GetFitnessMetric(
    request: DeepPartial<GetFitnessMetricRequest>,
    metadata?: grpc.Metadata,
  ): Promise<GetFitnessMetricResponse> {
    return this.rpc.unary(AthleteSvcGetFitnessMetricDesc, GetFitnessMetricRequest.fromPartial(request), metadata);
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

export const AthleteSvcSetFitnessMetricDesc: UnaryMethodDefinitionish = {
  methodName: "SetFitnessMetric",
  service: AthleteSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SetFitnessMetricRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = SetFitnessMetricResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AthleteSvcGetFitnessMetricDesc: UnaryMethodDefinitionish = {
  methodName: "GetFitnessMetric",
  service: AthleteSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetFitnessMetricRequest.encode(this).finish();
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

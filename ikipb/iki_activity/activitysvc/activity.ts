/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Activity } from "../activity";

export const protobufPackage = "activitysvc";

export interface GetMyRequest {
  id: string;
}

export interface GetMyResponse {
  activity: Activity | undefined;
}

export interface ListMyRequest {
  page: number;
  pageSize: number;
}

export interface ListMyResponse {
  activities: Activity[];
  totalCount: number;
}

export interface CalculateMyStatsRequest {
}

export interface CalculateMyStatsResponse {
}

export interface GetRequest {
  userId: string;
  id: string;
}

export interface GetResponse {
  activity: Activity | undefined;
}

export interface ListRequest {
  userId: string;
  page: number;
  pageSize: number;
}

export interface ListResponse {
  activities: Activity[];
  totalCount: number;
}

export interface CalculateStatsRequest {
  userId: string;
}

export interface CalculateStatsResponse {
}

function createBaseGetMyRequest(): GetMyRequest {
  return { id: "" };
}

export const GetMyRequest = {
  encode(message: GetMyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
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

          message.id = reader.string();
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
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: GetMyRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMyRequest>, I>>(base?: I): GetMyRequest {
    return GetMyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetMyRequest>, I>>(object: I): GetMyRequest {
    const message = createBaseGetMyRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetMyResponse(): GetMyResponse {
  return { activity: undefined };
}

export const GetMyResponse = {
  encode(message: GetMyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activity !== undefined) {
      Activity.encode(message.activity, writer.uint32(10).fork()).ldelim();
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

          message.activity = Activity.decode(reader, reader.uint32());
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
    return { activity: isSet(object.activity) ? Activity.fromJSON(object.activity) : undefined };
  },

  toJSON(message: GetMyResponse): unknown {
    const obj: any = {};
    if (message.activity !== undefined) {
      obj.activity = Activity.toJSON(message.activity);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMyResponse>, I>>(base?: I): GetMyResponse {
    return GetMyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetMyResponse>, I>>(object: I): GetMyResponse {
    const message = createBaseGetMyResponse();
    message.activity = (object.activity !== undefined && object.activity !== null)
      ? Activity.fromPartial(object.activity)
      : undefined;
    return message;
  },
};

function createBaseListMyRequest(): ListMyRequest {
  return { page: 0, pageSize: 0 };
}

export const ListMyRequest = {
  encode(message: ListMyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== 0) {
      writer.uint32(8).int32(message.page);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.page = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pageSize = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListMyRequest {
    return {
      page: isSet(object.page) ? Number(object.page) : 0,
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
    };
  },

  toJSON(message: ListMyRequest): unknown {
    const obj: any = {};
    if (message.page !== 0) {
      obj.page = Math.round(message.page);
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListMyRequest>, I>>(base?: I): ListMyRequest {
    return ListMyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListMyRequest>, I>>(object: I): ListMyRequest {
    const message = createBaseListMyRequest();
    message.page = object.page ?? 0;
    message.pageSize = object.pageSize ?? 0;
    return message;
  },
};

function createBaseListMyResponse(): ListMyResponse {
  return { activities: [], totalCount: 0 };
}

export const ListMyResponse = {
  encode(message: ListMyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.activities) {
      Activity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).int64(message.totalCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.activities.push(Activity.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.totalCount = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListMyResponse {
    return {
      activities: Array.isArray(object?.activities) ? object.activities.map((e: any) => Activity.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
    };
  },

  toJSON(message: ListMyResponse): unknown {
    const obj: any = {};
    if (message.activities?.length) {
      obj.activities = message.activities.map((e) => Activity.toJSON(e));
    }
    if (message.totalCount !== 0) {
      obj.totalCount = Math.round(message.totalCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListMyResponse>, I>>(base?: I): ListMyResponse {
    return ListMyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListMyResponse>, I>>(object: I): ListMyResponse {
    const message = createBaseListMyResponse();
    message.activities = object.activities?.map((e) => Activity.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    return message;
  },
};

function createBaseCalculateMyStatsRequest(): CalculateMyStatsRequest {
  return {};
}

export const CalculateMyStatsRequest = {
  encode(_: CalculateMyStatsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CalculateMyStatsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalculateMyStatsRequest();
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

  fromJSON(_: any): CalculateMyStatsRequest {
    return {};
  },

  toJSON(_: CalculateMyStatsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CalculateMyStatsRequest>, I>>(base?: I): CalculateMyStatsRequest {
    return CalculateMyStatsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CalculateMyStatsRequest>, I>>(_: I): CalculateMyStatsRequest {
    const message = createBaseCalculateMyStatsRequest();
    return message;
  },
};

function createBaseCalculateMyStatsResponse(): CalculateMyStatsResponse {
  return {};
}

export const CalculateMyStatsResponse = {
  encode(_: CalculateMyStatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CalculateMyStatsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalculateMyStatsResponse();
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

  fromJSON(_: any): CalculateMyStatsResponse {
    return {};
  },

  toJSON(_: CalculateMyStatsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CalculateMyStatsResponse>, I>>(base?: I): CalculateMyStatsResponse {
    return CalculateMyStatsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CalculateMyStatsResponse>, I>>(_: I): CalculateMyStatsResponse {
    const message = createBaseCalculateMyStatsResponse();
    return message;
  },
};

function createBaseGetRequest(): GetRequest {
  return { userId: "", id: "" };
}

export const GetRequest = {
  encode(message: GetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
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

          message.id = reader.string();
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
    return { userId: isSet(object.userId) ? String(object.userId) : "", id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: GetRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetRequest>, I>>(base?: I): GetRequest {
    return GetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetRequest>, I>>(object: I): GetRequest {
    const message = createBaseGetRequest();
    message.userId = object.userId ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetResponse(): GetResponse {
  return { activity: undefined };
}

export const GetResponse = {
  encode(message: GetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activity !== undefined) {
      Activity.encode(message.activity, writer.uint32(10).fork()).ldelim();
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

          message.activity = Activity.decode(reader, reader.uint32());
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
    return { activity: isSet(object.activity) ? Activity.fromJSON(object.activity) : undefined };
  },

  toJSON(message: GetResponse): unknown {
    const obj: any = {};
    if (message.activity !== undefined) {
      obj.activity = Activity.toJSON(message.activity);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetResponse>, I>>(base?: I): GetResponse {
    return GetResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetResponse>, I>>(object: I): GetResponse {
    const message = createBaseGetResponse();
    message.activity = (object.activity !== undefined && object.activity !== null)
      ? Activity.fromPartial(object.activity)
      : undefined;
    return message;
  },
};

function createBaseListRequest(): ListRequest {
  return { userId: "", page: 0, pageSize: 0 };
}

export const ListRequest = {
  encode(message: ListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.page !== 0) {
      writer.uint32(16).int32(message.page);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int32(message.pageSize);
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
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.page = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.pageSize = reader.int32();
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
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      page: isSet(object.page) ? Number(object.page) : 0,
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
    };
  },

  toJSON(message: ListRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.page !== 0) {
      obj.page = Math.round(message.page);
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListRequest>, I>>(base?: I): ListRequest {
    return ListRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListRequest>, I>>(object: I): ListRequest {
    const message = createBaseListRequest();
    message.userId = object.userId ?? "";
    message.page = object.page ?? 0;
    message.pageSize = object.pageSize ?? 0;
    return message;
  },
};

function createBaseListResponse(): ListResponse {
  return { activities: [], totalCount: 0 };
}

export const ListResponse = {
  encode(message: ListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.activities) {
      Activity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).int64(message.totalCount);
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

          message.activities.push(Activity.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.totalCount = longToNumber(reader.int64() as Long);
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
    return {
      activities: Array.isArray(object?.activities) ? object.activities.map((e: any) => Activity.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
    };
  },

  toJSON(message: ListResponse): unknown {
    const obj: any = {};
    if (message.activities?.length) {
      obj.activities = message.activities.map((e) => Activity.toJSON(e));
    }
    if (message.totalCount !== 0) {
      obj.totalCount = Math.round(message.totalCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListResponse>, I>>(base?: I): ListResponse {
    return ListResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListResponse>, I>>(object: I): ListResponse {
    const message = createBaseListResponse();
    message.activities = object.activities?.map((e) => Activity.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    return message;
  },
};

function createBaseCalculateStatsRequest(): CalculateStatsRequest {
  return { userId: "" };
}

export const CalculateStatsRequest = {
  encode(message: CalculateStatsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CalculateStatsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalculateStatsRequest();
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

  fromJSON(object: any): CalculateStatsRequest {
    return { userId: isSet(object.userId) ? String(object.userId) : "" };
  },

  toJSON(message: CalculateStatsRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CalculateStatsRequest>, I>>(base?: I): CalculateStatsRequest {
    return CalculateStatsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CalculateStatsRequest>, I>>(object: I): CalculateStatsRequest {
    const message = createBaseCalculateStatsRequest();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseCalculateStatsResponse(): CalculateStatsResponse {
  return {};
}

export const CalculateStatsResponse = {
  encode(_: CalculateStatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CalculateStatsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalculateStatsResponse();
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

  fromJSON(_: any): CalculateStatsResponse {
    return {};
  },

  toJSON(_: CalculateStatsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CalculateStatsResponse>, I>>(base?: I): CalculateStatsResponse {
    return CalculateStatsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CalculateStatsResponse>, I>>(_: I): CalculateStatsResponse {
    const message = createBaseCalculateStatsResponse();
    return message;
  },
};

export interface MyActivitySvc {
  Get(request: DeepPartial<GetMyRequest>, metadata?: grpc.Metadata): Promise<GetMyResponse>;
  List(request: DeepPartial<ListMyRequest>, metadata?: grpc.Metadata): Promise<ListMyResponse>;
  CalculateStats(
    request: DeepPartial<CalculateMyStatsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<CalculateMyStatsResponse>;
}

export class MyActivitySvcClientImpl implements MyActivitySvc {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Get = this.Get.bind(this);
    this.List = this.List.bind(this);
    this.CalculateStats = this.CalculateStats.bind(this);
  }

  Get(request: DeepPartial<GetMyRequest>, metadata?: grpc.Metadata): Promise<GetMyResponse> {
    return this.rpc.unary(MyActivitySvcGetDesc, GetMyRequest.fromPartial(request), metadata);
  }

  List(request: DeepPartial<ListMyRequest>, metadata?: grpc.Metadata): Promise<ListMyResponse> {
    return this.rpc.unary(MyActivitySvcListDesc, ListMyRequest.fromPartial(request), metadata);
  }

  CalculateStats(
    request: DeepPartial<CalculateMyStatsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<CalculateMyStatsResponse> {
    return this.rpc.unary(MyActivitySvcCalculateStatsDesc, CalculateMyStatsRequest.fromPartial(request), metadata);
  }
}

export const MyActivitySvcDesc = { serviceName: "activitysvc.MyActivitySvc" };

export const MyActivitySvcGetDesc: UnaryMethodDefinitionish = {
  methodName: "Get",
  service: MyActivitySvcDesc,
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

export const MyActivitySvcListDesc: UnaryMethodDefinitionish = {
  methodName: "List",
  service: MyActivitySvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ListMyRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ListMyResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MyActivitySvcCalculateStatsDesc: UnaryMethodDefinitionish = {
  methodName: "CalculateStats",
  service: MyActivitySvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CalculateMyStatsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = CalculateMyStatsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export interface ActivitySvc {
  Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
  List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
  CalculateStats(
    request: DeepPartial<CalculateStatsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<CalculateStatsResponse>;
}

export class ActivitySvcClientImpl implements ActivitySvc {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Get = this.Get.bind(this);
    this.List = this.List.bind(this);
    this.CalculateStats = this.CalculateStats.bind(this);
  }

  Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse> {
    return this.rpc.unary(ActivitySvcGetDesc, GetRequest.fromPartial(request), metadata);
  }

  List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse> {
    return this.rpc.unary(ActivitySvcListDesc, ListRequest.fromPartial(request), metadata);
  }

  CalculateStats(
    request: DeepPartial<CalculateStatsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<CalculateStatsResponse> {
    return this.rpc.unary(ActivitySvcCalculateStatsDesc, CalculateStatsRequest.fromPartial(request), metadata);
  }
}

export const ActivitySvcDesc = { serviceName: "activitysvc.ActivitySvc" };

export const ActivitySvcGetDesc: UnaryMethodDefinitionish = {
  methodName: "Get",
  service: ActivitySvcDesc,
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

export const ActivitySvcListDesc: UnaryMethodDefinitionish = {
  methodName: "List",
  service: ActivitySvcDesc,
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

export const ActivitySvcCalculateStatsDesc: UnaryMethodDefinitionish = {
  methodName: "CalculateStats",
  service: ActivitySvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CalculateStatsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = CalculateStatsResponse.decode(data);
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

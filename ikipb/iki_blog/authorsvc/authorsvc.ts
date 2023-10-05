/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Author } from "../blog";

export const protobufPackage = "authorsvc";

export interface ListRequest {
  page: number;
  pageSize: number;
}

export interface ListResponse {
  authors: Author[];
  totalCount: number;
}

export interface GetRequest {
  id: string;
}

export interface GetResponse {
  author: Author | undefined;
}

export interface CreateRequest {
  displayName: string;
}

export interface CreateResponse {
  author: Author | undefined;
}

export interface ProfileRequest {
}

export interface ProfileResponse {
  author: Author | undefined;
}

function createBaseListRequest(): ListRequest {
  return { page: 0, pageSize: 0 };
}

export const ListRequest = {
  encode(message: ListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== 0) {
      writer.uint32(8).int32(message.page);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
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

  fromJSON(object: any): ListRequest {
    return {
      page: isSet(object.page) ? Number(object.page) : 0,
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
    };
  },

  toJSON(message: ListRequest): unknown {
    const obj: any = {};
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
    message.page = object.page ?? 0;
    message.pageSize = object.pageSize ?? 0;
    return message;
  },
};

function createBaseListResponse(): ListResponse {
  return { authors: [], totalCount: 0 };
}

export const ListResponse = {
  encode(message: ListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.authors) {
      Author.encode(v!, writer.uint32(10).fork()).ldelim();
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

          message.authors.push(Author.decode(reader, reader.uint32()));
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
      authors: Array.isArray(object?.authors) ? object.authors.map((e: any) => Author.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
    };
  },

  toJSON(message: ListResponse): unknown {
    const obj: any = {};
    if (message.authors?.length) {
      obj.authors = message.authors.map((e) => Author.toJSON(e));
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
    message.authors = object.authors?.map((e) => Author.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    return message;
  },
};

function createBaseGetRequest(): GetRequest {
  return { id: "" };
}

export const GetRequest = {
  encode(message: GetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
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
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: GetRequest): unknown {
    const obj: any = {};
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
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetResponse(): GetResponse {
  return { author: undefined };
}

export const GetResponse = {
  encode(message: GetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.author !== undefined) {
      Author.encode(message.author, writer.uint32(10).fork()).ldelim();
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

          message.author = Author.decode(reader, reader.uint32());
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
    return { author: isSet(object.author) ? Author.fromJSON(object.author) : undefined };
  },

  toJSON(message: GetResponse): unknown {
    const obj: any = {};
    if (message.author !== undefined) {
      obj.author = Author.toJSON(message.author);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetResponse>, I>>(base?: I): GetResponse {
    return GetResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetResponse>, I>>(object: I): GetResponse {
    const message = createBaseGetResponse();
    message.author = (object.author !== undefined && object.author !== null)
      ? Author.fromPartial(object.author)
      : undefined;
    return message;
  },
};

function createBaseCreateRequest(): CreateRequest {
  return { displayName: "" };
}

export const CreateRequest = {
  encode(message: CreateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.displayName !== "") {
      writer.uint32(10).string(message.displayName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.displayName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateRequest {
    return { displayName: isSet(object.displayName) ? String(object.displayName) : "" };
  },

  toJSON(message: CreateRequest): unknown {
    const obj: any = {};
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateRequest>, I>>(base?: I): CreateRequest {
    return CreateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateRequest>, I>>(object: I): CreateRequest {
    const message = createBaseCreateRequest();
    message.displayName = object.displayName ?? "";
    return message;
  },
};

function createBaseCreateResponse(): CreateResponse {
  return { author: undefined };
}

export const CreateResponse = {
  encode(message: CreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.author !== undefined) {
      Author.encode(message.author, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.author = Author.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateResponse {
    return { author: isSet(object.author) ? Author.fromJSON(object.author) : undefined };
  },

  toJSON(message: CreateResponse): unknown {
    const obj: any = {};
    if (message.author !== undefined) {
      obj.author = Author.toJSON(message.author);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateResponse>, I>>(base?: I): CreateResponse {
    return CreateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateResponse>, I>>(object: I): CreateResponse {
    const message = createBaseCreateResponse();
    message.author = (object.author !== undefined && object.author !== null)
      ? Author.fromPartial(object.author)
      : undefined;
    return message;
  },
};

function createBaseProfileRequest(): ProfileRequest {
  return {};
}

export const ProfileRequest = {
  encode(_: ProfileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProfileRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfileRequest();
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

  fromJSON(_: any): ProfileRequest {
    return {};
  },

  toJSON(_: ProfileRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfileRequest>, I>>(base?: I): ProfileRequest {
    return ProfileRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProfileRequest>, I>>(_: I): ProfileRequest {
    const message = createBaseProfileRequest();
    return message;
  },
};

function createBaseProfileResponse(): ProfileResponse {
  return { author: undefined };
}

export const ProfileResponse = {
  encode(message: ProfileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.author !== undefined) {
      Author.encode(message.author, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProfileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.author = Author.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProfileResponse {
    return { author: isSet(object.author) ? Author.fromJSON(object.author) : undefined };
  },

  toJSON(message: ProfileResponse): unknown {
    const obj: any = {};
    if (message.author !== undefined) {
      obj.author = Author.toJSON(message.author);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfileResponse>, I>>(base?: I): ProfileResponse {
    return ProfileResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProfileResponse>, I>>(object: I): ProfileResponse {
    const message = createBaseProfileResponse();
    message.author = (object.author !== undefined && object.author !== null)
      ? Author.fromPartial(object.author)
      : undefined;
    return message;
  },
};

export interface AuthorSvc {
  List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
  Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
}

export class AuthorSvcClientImpl implements AuthorSvc {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.List = this.List.bind(this);
    this.Get = this.Get.bind(this);
  }

  List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse> {
    return this.rpc.unary(AuthorSvcListDesc, ListRequest.fromPartial(request), metadata);
  }

  Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse> {
    return this.rpc.unary(AuthorSvcGetDesc, GetRequest.fromPartial(request), metadata);
  }
}

export const AuthorSvcDesc = { serviceName: "authorsvc.AuthorSvc" };

export const AuthorSvcListDesc: UnaryMethodDefinitionish = {
  methodName: "List",
  service: AuthorSvcDesc,
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

export const AuthorSvcGetDesc: UnaryMethodDefinitionish = {
  methodName: "Get",
  service: AuthorSvcDesc,
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

export interface MyAuthorSvc {
  Create(request: DeepPartial<CreateRequest>, metadata?: grpc.Metadata): Promise<CreateResponse>;
  Profile(request: DeepPartial<ProfileRequest>, metadata?: grpc.Metadata): Promise<ProfileResponse>;
}

export class MyAuthorSvcClientImpl implements MyAuthorSvc {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Profile = this.Profile.bind(this);
  }

  Create(request: DeepPartial<CreateRequest>, metadata?: grpc.Metadata): Promise<CreateResponse> {
    return this.rpc.unary(MyAuthorSvcCreateDesc, CreateRequest.fromPartial(request), metadata);
  }

  Profile(request: DeepPartial<ProfileRequest>, metadata?: grpc.Metadata): Promise<ProfileResponse> {
    return this.rpc.unary(MyAuthorSvcProfileDesc, ProfileRequest.fromPartial(request), metadata);
  }
}

export const MyAuthorSvcDesc = { serviceName: "authorsvc.MyAuthorSvc" };

export const MyAuthorSvcCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: MyAuthorSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CreateRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = CreateResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MyAuthorSvcProfileDesc: UnaryMethodDefinitionish = {
  methodName: "Profile",
  service: MyAuthorSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ProfileRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ProfileResponse.decode(data);
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

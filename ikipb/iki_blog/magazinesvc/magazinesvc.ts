/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Billy, Magazine, Pagination, PostMetadata } from "../blog";

export const protobufPackage = "magazinesvc";

export interface ListRequest {
  pagination: Pagination | undefined;
}

export interface ListByAuthorIdRequest {
  pagination: Pagination | undefined;
  authorId: string;
}

export interface ListByCategoryRequest {
  pagination: Pagination | undefined;
  category: string;
}

export interface ListResponse {
  magazines: Magazine[];
  billy: Billy[];
  totalCount: number;
}

export interface GetRequest {
  id: string;
}

export interface GetResponse {
  magazine: Magazine | undefined;
  posts: PostMetadata[];
}

export interface CreateMyRequest {
  title: string;
  preface: string;
  category: string;
}

export interface CreateMyResponse {
  magazine: Magazine | undefined;
}

export interface UpdateMyRequest {
  id: string;
  title: string;
  preface: string;
  category: string;
}

export interface UpdateMyResponse {
}

export interface GetMyRequest {
  id: string;
}

export interface GetMyResponse {
  magazine: Magazine | undefined;
  posts: PostMetadata[];
}

export interface DeleteMyRequest {
  id: string;
}

export interface DeleteMyResponse {
}

export interface ListMyRequest {
  pagination: Pagination | undefined;
}

export interface ListMyByCategoryRequest {
  pagination: Pagination | undefined;
  category: string;
}

export interface ListMyResponse {
  magazines: Magazine[];
  totalCount: number;
  billy: Billy | undefined;
}

function createBaseListRequest(): ListRequest {
  return { pagination: undefined };
}

export const ListRequest = {
  encode(message: ListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      Pagination.encode(message.pagination, writer.uint32(10).fork()).ldelim();
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

          message.pagination = Pagination.decode(reader, reader.uint32());
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
    return { pagination: isSet(object.pagination) ? Pagination.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: ListRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = Pagination.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListRequest>, I>>(base?: I): ListRequest {
    return ListRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListRequest>, I>>(object: I): ListRequest {
    const message = createBaseListRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? Pagination.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseListByAuthorIdRequest(): ListByAuthorIdRequest {
  return { pagination: undefined, authorId: "" };
}

export const ListByAuthorIdRequest = {
  encode(message: ListByAuthorIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      Pagination.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.authorId !== "") {
      writer.uint32(18).string(message.authorId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListByAuthorIdRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListByAuthorIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = Pagination.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.authorId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListByAuthorIdRequest {
    return {
      pagination: isSet(object.pagination) ? Pagination.fromJSON(object.pagination) : undefined,
      authorId: isSet(object.authorId) ? String(object.authorId) : "",
    };
  },

  toJSON(message: ListByAuthorIdRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = Pagination.toJSON(message.pagination);
    }
    if (message.authorId !== "") {
      obj.authorId = message.authorId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListByAuthorIdRequest>, I>>(base?: I): ListByAuthorIdRequest {
    return ListByAuthorIdRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListByAuthorIdRequest>, I>>(object: I): ListByAuthorIdRequest {
    const message = createBaseListByAuthorIdRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? Pagination.fromPartial(object.pagination)
      : undefined;
    message.authorId = object.authorId ?? "";
    return message;
  },
};

function createBaseListByCategoryRequest(): ListByCategoryRequest {
  return { pagination: undefined, category: "" };
}

export const ListByCategoryRequest = {
  encode(message: ListByCategoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      Pagination.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.category !== "") {
      writer.uint32(18).string(message.category);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListByCategoryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListByCategoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = Pagination.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.category = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListByCategoryRequest {
    return {
      pagination: isSet(object.pagination) ? Pagination.fromJSON(object.pagination) : undefined,
      category: isSet(object.category) ? String(object.category) : "",
    };
  },

  toJSON(message: ListByCategoryRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = Pagination.toJSON(message.pagination);
    }
    if (message.category !== "") {
      obj.category = message.category;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListByCategoryRequest>, I>>(base?: I): ListByCategoryRequest {
    return ListByCategoryRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListByCategoryRequest>, I>>(object: I): ListByCategoryRequest {
    const message = createBaseListByCategoryRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? Pagination.fromPartial(object.pagination)
      : undefined;
    message.category = object.category ?? "";
    return message;
  },
};

function createBaseListResponse(): ListResponse {
  return { magazines: [], billy: [], totalCount: 0 };
}

export const ListResponse = {
  encode(message: ListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.magazines) {
      Magazine.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.billy) {
      Billy.encode(v!, writer.uint32(26).fork()).ldelim();
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

          message.magazines.push(Magazine.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.billy.push(Billy.decode(reader, reader.uint32()));
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
      magazines: Array.isArray(object?.magazines) ? object.magazines.map((e: any) => Magazine.fromJSON(e)) : [],
      billy: Array.isArray(object?.billy) ? object.billy.map((e: any) => Billy.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
    };
  },

  toJSON(message: ListResponse): unknown {
    const obj: any = {};
    if (message.magazines?.length) {
      obj.magazines = message.magazines.map((e) => Magazine.toJSON(e));
    }
    if (message.billy?.length) {
      obj.billy = message.billy.map((e) => Billy.toJSON(e));
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
    message.magazines = object.magazines?.map((e) => Magazine.fromPartial(e)) || [];
    message.billy = object.billy?.map((e) => Billy.fromPartial(e)) || [];
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
  return { magazine: undefined, posts: [] };
}

export const GetResponse = {
  encode(message: GetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.magazine !== undefined) {
      Magazine.encode(message.magazine, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.posts) {
      PostMetadata.encode(v!, writer.uint32(18).fork()).ldelim();
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

          message.magazine = Magazine.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.posts.push(PostMetadata.decode(reader, reader.uint32()));
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
      magazine: isSet(object.magazine) ? Magazine.fromJSON(object.magazine) : undefined,
      posts: Array.isArray(object?.posts) ? object.posts.map((e: any) => PostMetadata.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetResponse): unknown {
    const obj: any = {};
    if (message.magazine !== undefined) {
      obj.magazine = Magazine.toJSON(message.magazine);
    }
    if (message.posts?.length) {
      obj.posts = message.posts.map((e) => PostMetadata.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetResponse>, I>>(base?: I): GetResponse {
    return GetResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetResponse>, I>>(object: I): GetResponse {
    const message = createBaseGetResponse();
    message.magazine = (object.magazine !== undefined && object.magazine !== null)
      ? Magazine.fromPartial(object.magazine)
      : undefined;
    message.posts = object.posts?.map((e) => PostMetadata.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateMyRequest(): CreateMyRequest {
  return { title: "", preface: "", category: "" };
}

export const CreateMyRequest = {
  encode(message: CreateMyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.preface !== "") {
      writer.uint32(18).string(message.preface);
    }
    if (message.category !== "") {
      writer.uint32(26).string(message.category);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateMyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateMyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.preface = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.category = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateMyRequest {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      preface: isSet(object.preface) ? String(object.preface) : "",
      category: isSet(object.category) ? String(object.category) : "",
    };
  },

  toJSON(message: CreateMyRequest): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.preface !== "") {
      obj.preface = message.preface;
    }
    if (message.category !== "") {
      obj.category = message.category;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateMyRequest>, I>>(base?: I): CreateMyRequest {
    return CreateMyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateMyRequest>, I>>(object: I): CreateMyRequest {
    const message = createBaseCreateMyRequest();
    message.title = object.title ?? "";
    message.preface = object.preface ?? "";
    message.category = object.category ?? "";
    return message;
  },
};

function createBaseCreateMyResponse(): CreateMyResponse {
  return { magazine: undefined };
}

export const CreateMyResponse = {
  encode(message: CreateMyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.magazine !== undefined) {
      Magazine.encode(message.magazine, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateMyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateMyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.magazine = Magazine.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateMyResponse {
    return { magazine: isSet(object.magazine) ? Magazine.fromJSON(object.magazine) : undefined };
  },

  toJSON(message: CreateMyResponse): unknown {
    const obj: any = {};
    if (message.magazine !== undefined) {
      obj.magazine = Magazine.toJSON(message.magazine);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateMyResponse>, I>>(base?: I): CreateMyResponse {
    return CreateMyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateMyResponse>, I>>(object: I): CreateMyResponse {
    const message = createBaseCreateMyResponse();
    message.magazine = (object.magazine !== undefined && object.magazine !== null)
      ? Magazine.fromPartial(object.magazine)
      : undefined;
    return message;
  },
};

function createBaseUpdateMyRequest(): UpdateMyRequest {
  return { id: "", title: "", preface: "", category: "" };
}

export const UpdateMyRequest = {
  encode(message: UpdateMyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.preface !== "") {
      writer.uint32(26).string(message.preface);
    }
    if (message.category !== "") {
      writer.uint32(34).string(message.category);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMyRequest();
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

          message.title = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.preface = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.category = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateMyRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      title: isSet(object.title) ? String(object.title) : "",
      preface: isSet(object.preface) ? String(object.preface) : "",
      category: isSet(object.category) ? String(object.category) : "",
    };
  },

  toJSON(message: UpdateMyRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.preface !== "") {
      obj.preface = message.preface;
    }
    if (message.category !== "") {
      obj.category = message.category;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateMyRequest>, I>>(base?: I): UpdateMyRequest {
    return UpdateMyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateMyRequest>, I>>(object: I): UpdateMyRequest {
    const message = createBaseUpdateMyRequest();
    message.id = object.id ?? "";
    message.title = object.title ?? "";
    message.preface = object.preface ?? "";
    message.category = object.category ?? "";
    return message;
  },
};

function createBaseUpdateMyResponse(): UpdateMyResponse {
  return {};
}

export const UpdateMyResponse = {
  encode(_: UpdateMyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMyResponse();
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

  fromJSON(_: any): UpdateMyResponse {
    return {};
  },

  toJSON(_: UpdateMyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateMyResponse>, I>>(base?: I): UpdateMyResponse {
    return UpdateMyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateMyResponse>, I>>(_: I): UpdateMyResponse {
    const message = createBaseUpdateMyResponse();
    return message;
  },
};

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
  return { magazine: undefined, posts: [] };
}

export const GetMyResponse = {
  encode(message: GetMyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.magazine !== undefined) {
      Magazine.encode(message.magazine, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.posts) {
      PostMetadata.encode(v!, writer.uint32(18).fork()).ldelim();
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

          message.magazine = Magazine.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.posts.push(PostMetadata.decode(reader, reader.uint32()));
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
    return {
      magazine: isSet(object.magazine) ? Magazine.fromJSON(object.magazine) : undefined,
      posts: Array.isArray(object?.posts) ? object.posts.map((e: any) => PostMetadata.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetMyResponse): unknown {
    const obj: any = {};
    if (message.magazine !== undefined) {
      obj.magazine = Magazine.toJSON(message.magazine);
    }
    if (message.posts?.length) {
      obj.posts = message.posts.map((e) => PostMetadata.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMyResponse>, I>>(base?: I): GetMyResponse {
    return GetMyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetMyResponse>, I>>(object: I): GetMyResponse {
    const message = createBaseGetMyResponse();
    message.magazine = (object.magazine !== undefined && object.magazine !== null)
      ? Magazine.fromPartial(object.magazine)
      : undefined;
    message.posts = object.posts?.map((e) => PostMetadata.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDeleteMyRequest(): DeleteMyRequest {
  return { id: "" };
}

export const DeleteMyRequest = {
  encode(message: DeleteMyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteMyRequest();
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

  fromJSON(object: any): DeleteMyRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DeleteMyRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteMyRequest>, I>>(base?: I): DeleteMyRequest {
    return DeleteMyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteMyRequest>, I>>(object: I): DeleteMyRequest {
    const message = createBaseDeleteMyRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteMyResponse(): DeleteMyResponse {
  return {};
}

export const DeleteMyResponse = {
  encode(_: DeleteMyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteMyResponse();
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

  fromJSON(_: any): DeleteMyResponse {
    return {};
  },

  toJSON(_: DeleteMyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteMyResponse>, I>>(base?: I): DeleteMyResponse {
    return DeleteMyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteMyResponse>, I>>(_: I): DeleteMyResponse {
    const message = createBaseDeleteMyResponse();
    return message;
  },
};

function createBaseListMyRequest(): ListMyRequest {
  return { pagination: undefined };
}

export const ListMyRequest = {
  encode(message: ListMyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      Pagination.encode(message.pagination, writer.uint32(10).fork()).ldelim();
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
          if (tag !== 10) {
            break;
          }

          message.pagination = Pagination.decode(reader, reader.uint32());
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
    return { pagination: isSet(object.pagination) ? Pagination.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: ListMyRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = Pagination.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListMyRequest>, I>>(base?: I): ListMyRequest {
    return ListMyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListMyRequest>, I>>(object: I): ListMyRequest {
    const message = createBaseListMyRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? Pagination.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseListMyByCategoryRequest(): ListMyByCategoryRequest {
  return { pagination: undefined, category: "" };
}

export const ListMyByCategoryRequest = {
  encode(message: ListMyByCategoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      Pagination.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.category !== "") {
      writer.uint32(18).string(message.category);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMyByCategoryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMyByCategoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = Pagination.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.category = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListMyByCategoryRequest {
    return {
      pagination: isSet(object.pagination) ? Pagination.fromJSON(object.pagination) : undefined,
      category: isSet(object.category) ? String(object.category) : "",
    };
  },

  toJSON(message: ListMyByCategoryRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = Pagination.toJSON(message.pagination);
    }
    if (message.category !== "") {
      obj.category = message.category;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListMyByCategoryRequest>, I>>(base?: I): ListMyByCategoryRequest {
    return ListMyByCategoryRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListMyByCategoryRequest>, I>>(object: I): ListMyByCategoryRequest {
    const message = createBaseListMyByCategoryRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? Pagination.fromPartial(object.pagination)
      : undefined;
    message.category = object.category ?? "";
    return message;
  },
};

function createBaseListMyResponse(): ListMyResponse {
  return { magazines: [], totalCount: 0, billy: undefined };
}

export const ListMyResponse = {
  encode(message: ListMyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.magazines) {
      Magazine.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).int64(message.totalCount);
    }
    if (message.billy !== undefined) {
      Billy.encode(message.billy, writer.uint32(26).fork()).ldelim();
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

          message.magazines.push(Magazine.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.totalCount = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.billy = Billy.decode(reader, reader.uint32());
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
      magazines: Array.isArray(object?.magazines) ? object.magazines.map((e: any) => Magazine.fromJSON(e)) : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      billy: isSet(object.billy) ? Billy.fromJSON(object.billy) : undefined,
    };
  },

  toJSON(message: ListMyResponse): unknown {
    const obj: any = {};
    if (message.magazines?.length) {
      obj.magazines = message.magazines.map((e) => Magazine.toJSON(e));
    }
    if (message.totalCount !== 0) {
      obj.totalCount = Math.round(message.totalCount);
    }
    if (message.billy !== undefined) {
      obj.billy = Billy.toJSON(message.billy);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListMyResponse>, I>>(base?: I): ListMyResponse {
    return ListMyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListMyResponse>, I>>(object: I): ListMyResponse {
    const message = createBaseListMyResponse();
    message.magazines = object.magazines?.map((e) => Magazine.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.billy = (object.billy !== undefined && object.billy !== null) ? Billy.fromPartial(object.billy) : undefined;
    return message;
  },
};

/**
 * //////////////////////////////////////////////////////////////////////////////
 * Magazine Service
 * ////
 */
export interface MagazineSvc {
  List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
  ListByAuthorId(request: DeepPartial<ListByAuthorIdRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
  ListByCategory(request: DeepPartial<ListByCategoryRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
  Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
}

export class MagazineSvcClientImpl implements MagazineSvc {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.List = this.List.bind(this);
    this.ListByAuthorId = this.ListByAuthorId.bind(this);
    this.ListByCategory = this.ListByCategory.bind(this);
    this.Get = this.Get.bind(this);
  }

  List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse> {
    return this.rpc.unary(MagazineSvcListDesc, ListRequest.fromPartial(request), metadata);
  }

  ListByAuthorId(request: DeepPartial<ListByAuthorIdRequest>, metadata?: grpc.Metadata): Promise<ListResponse> {
    return this.rpc.unary(MagazineSvcListByAuthorIdDesc, ListByAuthorIdRequest.fromPartial(request), metadata);
  }

  ListByCategory(request: DeepPartial<ListByCategoryRequest>, metadata?: grpc.Metadata): Promise<ListResponse> {
    return this.rpc.unary(MagazineSvcListByCategoryDesc, ListByCategoryRequest.fromPartial(request), metadata);
  }

  Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse> {
    return this.rpc.unary(MagazineSvcGetDesc, GetRequest.fromPartial(request), metadata);
  }
}

export const MagazineSvcDesc = { serviceName: "magazinesvc.MagazineSvc" };

export const MagazineSvcListDesc: UnaryMethodDefinitionish = {
  methodName: "List",
  service: MagazineSvcDesc,
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

export const MagazineSvcListByAuthorIdDesc: UnaryMethodDefinitionish = {
  methodName: "ListByAuthorId",
  service: MagazineSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ListByAuthorIdRequest.encode(this).finish();
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

export const MagazineSvcListByCategoryDesc: UnaryMethodDefinitionish = {
  methodName: "ListByCategory",
  service: MagazineSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ListByCategoryRequest.encode(this).finish();
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

export const MagazineSvcGetDesc: UnaryMethodDefinitionish = {
  methodName: "Get",
  service: MagazineSvcDesc,
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

/**
 * //////////////////////////////////////////////////////////////////////////////
 * MyMagazine Service
 * ////
 */
export interface MyMagazineSvc {
  Create(request: DeepPartial<CreateMyRequest>, metadata?: grpc.Metadata): Promise<CreateMyResponse>;
  Update(request: DeepPartial<UpdateMyRequest>, metadata?: grpc.Metadata): Promise<UpdateMyResponse>;
  Get(request: DeepPartial<GetMyRequest>, metadata?: grpc.Metadata): Promise<GetMyResponse>;
  Delete(request: DeepPartial<DeleteMyRequest>, metadata?: grpc.Metadata): Promise<DeleteMyResponse>;
  List(request: DeepPartial<ListMyRequest>, metadata?: grpc.Metadata): Promise<ListMyResponse>;
  ListByCategory(request: DeepPartial<ListMyByCategoryRequest>, metadata?: grpc.Metadata): Promise<ListMyResponse>;
}

export class MyMagazineSvcClientImpl implements MyMagazineSvc {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Update = this.Update.bind(this);
    this.Get = this.Get.bind(this);
    this.Delete = this.Delete.bind(this);
    this.List = this.List.bind(this);
    this.ListByCategory = this.ListByCategory.bind(this);
  }

  Create(request: DeepPartial<CreateMyRequest>, metadata?: grpc.Metadata): Promise<CreateMyResponse> {
    return this.rpc.unary(MyMagazineSvcCreateDesc, CreateMyRequest.fromPartial(request), metadata);
  }

  Update(request: DeepPartial<UpdateMyRequest>, metadata?: grpc.Metadata): Promise<UpdateMyResponse> {
    return this.rpc.unary(MyMagazineSvcUpdateDesc, UpdateMyRequest.fromPartial(request), metadata);
  }

  Get(request: DeepPartial<GetMyRequest>, metadata?: grpc.Metadata): Promise<GetMyResponse> {
    return this.rpc.unary(MyMagazineSvcGetDesc, GetMyRequest.fromPartial(request), metadata);
  }

  Delete(request: DeepPartial<DeleteMyRequest>, metadata?: grpc.Metadata): Promise<DeleteMyResponse> {
    return this.rpc.unary(MyMagazineSvcDeleteDesc, DeleteMyRequest.fromPartial(request), metadata);
  }

  List(request: DeepPartial<ListMyRequest>, metadata?: grpc.Metadata): Promise<ListMyResponse> {
    return this.rpc.unary(MyMagazineSvcListDesc, ListMyRequest.fromPartial(request), metadata);
  }

  ListByCategory(request: DeepPartial<ListMyByCategoryRequest>, metadata?: grpc.Metadata): Promise<ListMyResponse> {
    return this.rpc.unary(MyMagazineSvcListByCategoryDesc, ListMyByCategoryRequest.fromPartial(request), metadata);
  }
}

export const MyMagazineSvcDesc = { serviceName: "magazinesvc.MyMagazineSvc" };

export const MyMagazineSvcCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: MyMagazineSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CreateMyRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = CreateMyResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MyMagazineSvcUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: MyMagazineSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return UpdateMyRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = UpdateMyResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MyMagazineSvcGetDesc: UnaryMethodDefinitionish = {
  methodName: "Get",
  service: MyMagazineSvcDesc,
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

export const MyMagazineSvcDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: MyMagazineSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DeleteMyRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = DeleteMyResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MyMagazineSvcListDesc: UnaryMethodDefinitionish = {
  methodName: "List",
  service: MyMagazineSvcDesc,
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

export const MyMagazineSvcListByCategoryDesc: UnaryMethodDefinitionish = {
  methodName: "ListByCategory",
  service: MyMagazineSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ListMyByCategoryRequest.encode(this).finish();
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

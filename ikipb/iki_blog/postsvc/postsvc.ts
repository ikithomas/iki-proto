/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PostMetadata } from "../blog";

export const protobufPackage = "postsvc";

export interface ListRequest {
  page: number;
  pageSize: number;
}

export interface ListByAuthorIdRequest {
  page: number;
  pageSize: number;
  authorId: string;
}

export interface ListByCategoryRequest {
  page: number;
  pageSize: number;
  category: string;
}

export interface ListByTagRequest {
  page: number;
  pageSize: number;
  tag: string;
}

export interface ListResponse {
  postMetadata: PostMetadata[];
  totalCount: number;
  tags: string[];
}

export interface ListTagRequest {
}

export interface ListTagResponse {
  tags: string[];
}

export interface GetRequest {
  id: string;
}

export interface GetResponse {
  postMetadata: PostMetadata | undefined;
  content: string;
}

export interface CreateMyRequest {
  title: string;
  preface: string;
  published: boolean;
  tags: string[];
  category: string;
  content: string;
  magazineId?: string | undefined;
}

export interface CreateMyResponse {
  postMetadata: PostMetadata | undefined;
  content: string;
}

export interface UpdateMyRequest {
  id: string;
  title: string;
  preface: string;
  published: boolean;
  tags: string[];
  category: string;
  content: string;
  magazineId?: string | undefined;
}

export interface UpdateMyResponse {
}

export interface GetMyRequest {
  id: string;
}

export interface GetMyResponse {
  postMetadata: PostMetadata | undefined;
  content: string;
}

export interface DeleteMyRequest {
  id: string;
}

export interface DeleteMyResponse {
}

export interface ListMyRequest {
  page: number;
  pageSize: number;
}

export interface ListMyByCategoryRequest {
  page: number;
  pageSize: number;
  category: string;
}

export interface ListMyByTagRequest {
  page: number;
  pageSize: number;
  tag: string;
}

export interface ListMyResponse {
  postMetadata: PostMetadata[];
  totalCount: number;
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

function createBaseListByAuthorIdRequest(): ListByAuthorIdRequest {
  return { page: 0, pageSize: 0, authorId: "" };
}

export const ListByAuthorIdRequest = {
  encode(message: ListByAuthorIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== 0) {
      writer.uint32(8).int32(message.page);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.authorId !== "") {
      writer.uint32(26).string(message.authorId);
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
        case 3:
          if (tag !== 26) {
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
      page: isSet(object.page) ? Number(object.page) : 0,
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      authorId: isSet(object.authorId) ? String(object.authorId) : "",
    };
  },

  toJSON(message: ListByAuthorIdRequest): unknown {
    const obj: any = {};
    if (message.page !== 0) {
      obj.page = Math.round(message.page);
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
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
    message.page = object.page ?? 0;
    message.pageSize = object.pageSize ?? 0;
    message.authorId = object.authorId ?? "";
    return message;
  },
};

function createBaseListByCategoryRequest(): ListByCategoryRequest {
  return { page: 0, pageSize: 0, category: "" };
}

export const ListByCategoryRequest = {
  encode(message: ListByCategoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== 0) {
      writer.uint32(8).int32(message.page);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.category !== "") {
      writer.uint32(26).string(message.category);
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

  fromJSON(object: any): ListByCategoryRequest {
    return {
      page: isSet(object.page) ? Number(object.page) : 0,
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      category: isSet(object.category) ? String(object.category) : "",
    };
  },

  toJSON(message: ListByCategoryRequest): unknown {
    const obj: any = {};
    if (message.page !== 0) {
      obj.page = Math.round(message.page);
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
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
    message.page = object.page ?? 0;
    message.pageSize = object.pageSize ?? 0;
    message.category = object.category ?? "";
    return message;
  },
};

function createBaseListByTagRequest(): ListByTagRequest {
  return { page: 0, pageSize: 0, tag: "" };
}

export const ListByTagRequest = {
  encode(message: ListByTagRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== 0) {
      writer.uint32(8).int32(message.page);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.tag !== "") {
      writer.uint32(26).string(message.tag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListByTagRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListByTagRequest();
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tag = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListByTagRequest {
    return {
      page: isSet(object.page) ? Number(object.page) : 0,
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      tag: isSet(object.tag) ? String(object.tag) : "",
    };
  },

  toJSON(message: ListByTagRequest): unknown {
    const obj: any = {};
    if (message.page !== 0) {
      obj.page = Math.round(message.page);
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.tag !== "") {
      obj.tag = message.tag;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListByTagRequest>, I>>(base?: I): ListByTagRequest {
    return ListByTagRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListByTagRequest>, I>>(object: I): ListByTagRequest {
    const message = createBaseListByTagRequest();
    message.page = object.page ?? 0;
    message.pageSize = object.pageSize ?? 0;
    message.tag = object.tag ?? "";
    return message;
  },
};

function createBaseListResponse(): ListResponse {
  return { postMetadata: [], totalCount: 0, tags: [] };
}

export const ListResponse = {
  encode(message: ListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.postMetadata) {
      PostMetadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).int64(message.totalCount);
    }
    for (const v of message.tags) {
      writer.uint32(26).string(v!);
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

          message.postMetadata.push(PostMetadata.decode(reader, reader.uint32()));
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

          message.tags.push(reader.string());
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
      postMetadata: Array.isArray(object?.postMetadata)
        ? object.postMetadata.map((e: any) => PostMetadata.fromJSON(e))
        : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: ListResponse): unknown {
    const obj: any = {};
    if (message.postMetadata?.length) {
      obj.postMetadata = message.postMetadata.map((e) => PostMetadata.toJSON(e));
    }
    if (message.totalCount !== 0) {
      obj.totalCount = Math.round(message.totalCount);
    }
    if (message.tags?.length) {
      obj.tags = message.tags;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListResponse>, I>>(base?: I): ListResponse {
    return ListResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListResponse>, I>>(object: I): ListResponse {
    const message = createBaseListResponse();
    message.postMetadata = object.postMetadata?.map((e) => PostMetadata.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    message.tags = object.tags?.map((e) => e) || [];
    return message;
  },
};

function createBaseListTagRequest(): ListTagRequest {
  return {};
}

export const ListTagRequest = {
  encode(_: ListTagRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTagRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTagRequest();
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

  fromJSON(_: any): ListTagRequest {
    return {};
  },

  toJSON(_: ListTagRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ListTagRequest>, I>>(base?: I): ListTagRequest {
    return ListTagRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListTagRequest>, I>>(_: I): ListTagRequest {
    const message = createBaseListTagRequest();
    return message;
  },
};

function createBaseListTagResponse(): ListTagResponse {
  return { tags: [] };
}

export const ListTagResponse = {
  encode(message: ListTagResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tags) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTagResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tags.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListTagResponse {
    return { tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [] };
  },

  toJSON(message: ListTagResponse): unknown {
    const obj: any = {};
    if (message.tags?.length) {
      obj.tags = message.tags;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListTagResponse>, I>>(base?: I): ListTagResponse {
    return ListTagResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListTagResponse>, I>>(object: I): ListTagResponse {
    const message = createBaseListTagResponse();
    message.tags = object.tags?.map((e) => e) || [];
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
  return { postMetadata: undefined, content: "" };
}

export const GetResponse = {
  encode(message: GetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.postMetadata !== undefined) {
      PostMetadata.encode(message.postMetadata, writer.uint32(10).fork()).ldelim();
    }
    if (message.content !== "") {
      writer.uint32(18).string(message.content);
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

          message.postMetadata = PostMetadata.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.content = reader.string();
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
      postMetadata: isSet(object.postMetadata) ? PostMetadata.fromJSON(object.postMetadata) : undefined,
      content: isSet(object.content) ? String(object.content) : "",
    };
  },

  toJSON(message: GetResponse): unknown {
    const obj: any = {};
    if (message.postMetadata !== undefined) {
      obj.postMetadata = PostMetadata.toJSON(message.postMetadata);
    }
    if (message.content !== "") {
      obj.content = message.content;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetResponse>, I>>(base?: I): GetResponse {
    return GetResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetResponse>, I>>(object: I): GetResponse {
    const message = createBaseGetResponse();
    message.postMetadata = (object.postMetadata !== undefined && object.postMetadata !== null)
      ? PostMetadata.fromPartial(object.postMetadata)
      : undefined;
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseCreateMyRequest(): CreateMyRequest {
  return { title: "", preface: "", published: false, tags: [], category: "", content: "", magazineId: undefined };
}

export const CreateMyRequest = {
  encode(message: CreateMyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.preface !== "") {
      writer.uint32(18).string(message.preface);
    }
    if (message.published === true) {
      writer.uint32(24).bool(message.published);
    }
    for (const v of message.tags) {
      writer.uint32(34).string(v!);
    }
    if (message.category !== "") {
      writer.uint32(42).string(message.category);
    }
    if (message.content !== "") {
      writer.uint32(50).string(message.content);
    }
    if (message.magazineId !== undefined) {
      writer.uint32(58).string(message.magazineId);
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
          if (tag !== 24) {
            break;
          }

          message.published = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.tags.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.category = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.content = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.magazineId = reader.string();
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
      published: isSet(object.published) ? Boolean(object.published) : false,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      category: isSet(object.category) ? String(object.category) : "",
      content: isSet(object.content) ? String(object.content) : "",
      magazineId: isSet(object.magazineId) ? String(object.magazineId) : undefined,
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
    if (message.published === true) {
      obj.published = message.published;
    }
    if (message.tags?.length) {
      obj.tags = message.tags;
    }
    if (message.category !== "") {
      obj.category = message.category;
    }
    if (message.content !== "") {
      obj.content = message.content;
    }
    if (message.magazineId !== undefined) {
      obj.magazineId = message.magazineId;
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
    message.published = object.published ?? false;
    message.tags = object.tags?.map((e) => e) || [];
    message.category = object.category ?? "";
    message.content = object.content ?? "";
    message.magazineId = object.magazineId ?? undefined;
    return message;
  },
};

function createBaseCreateMyResponse(): CreateMyResponse {
  return { postMetadata: undefined, content: "" };
}

export const CreateMyResponse = {
  encode(message: CreateMyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.postMetadata !== undefined) {
      PostMetadata.encode(message.postMetadata, writer.uint32(10).fork()).ldelim();
    }
    if (message.content !== "") {
      writer.uint32(18).string(message.content);
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

          message.postMetadata = PostMetadata.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.content = reader.string();
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
    return {
      postMetadata: isSet(object.postMetadata) ? PostMetadata.fromJSON(object.postMetadata) : undefined,
      content: isSet(object.content) ? String(object.content) : "",
    };
  },

  toJSON(message: CreateMyResponse): unknown {
    const obj: any = {};
    if (message.postMetadata !== undefined) {
      obj.postMetadata = PostMetadata.toJSON(message.postMetadata);
    }
    if (message.content !== "") {
      obj.content = message.content;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateMyResponse>, I>>(base?: I): CreateMyResponse {
    return CreateMyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateMyResponse>, I>>(object: I): CreateMyResponse {
    const message = createBaseCreateMyResponse();
    message.postMetadata = (object.postMetadata !== undefined && object.postMetadata !== null)
      ? PostMetadata.fromPartial(object.postMetadata)
      : undefined;
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseUpdateMyRequest(): UpdateMyRequest {
  return {
    id: "",
    title: "",
    preface: "",
    published: false,
    tags: [],
    category: "",
    content: "",
    magazineId: undefined,
  };
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
    if (message.published === true) {
      writer.uint32(32).bool(message.published);
    }
    for (const v of message.tags) {
      writer.uint32(42).string(v!);
    }
    if (message.category !== "") {
      writer.uint32(50).string(message.category);
    }
    if (message.content !== "") {
      writer.uint32(58).string(message.content);
    }
    if (message.magazineId !== undefined) {
      writer.uint32(66).string(message.magazineId);
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
          if (tag !== 32) {
            break;
          }

          message.published = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.tags.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.category = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.content = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.magazineId = reader.string();
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
      published: isSet(object.published) ? Boolean(object.published) : false,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      category: isSet(object.category) ? String(object.category) : "",
      content: isSet(object.content) ? String(object.content) : "",
      magazineId: isSet(object.magazineId) ? String(object.magazineId) : undefined,
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
    if (message.published === true) {
      obj.published = message.published;
    }
    if (message.tags?.length) {
      obj.tags = message.tags;
    }
    if (message.category !== "") {
      obj.category = message.category;
    }
    if (message.content !== "") {
      obj.content = message.content;
    }
    if (message.magazineId !== undefined) {
      obj.magazineId = message.magazineId;
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
    message.published = object.published ?? false;
    message.tags = object.tags?.map((e) => e) || [];
    message.category = object.category ?? "";
    message.content = object.content ?? "";
    message.magazineId = object.magazineId ?? undefined;
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
  return { postMetadata: undefined, content: "" };
}

export const GetMyResponse = {
  encode(message: GetMyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.postMetadata !== undefined) {
      PostMetadata.encode(message.postMetadata, writer.uint32(10).fork()).ldelim();
    }
    if (message.content !== "") {
      writer.uint32(18).string(message.content);
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

          message.postMetadata = PostMetadata.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.content = reader.string();
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
      postMetadata: isSet(object.postMetadata) ? PostMetadata.fromJSON(object.postMetadata) : undefined,
      content: isSet(object.content) ? String(object.content) : "",
    };
  },

  toJSON(message: GetMyResponse): unknown {
    const obj: any = {};
    if (message.postMetadata !== undefined) {
      obj.postMetadata = PostMetadata.toJSON(message.postMetadata);
    }
    if (message.content !== "") {
      obj.content = message.content;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMyResponse>, I>>(base?: I): GetMyResponse {
    return GetMyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetMyResponse>, I>>(object: I): GetMyResponse {
    const message = createBaseGetMyResponse();
    message.postMetadata = (object.postMetadata !== undefined && object.postMetadata !== null)
      ? PostMetadata.fromPartial(object.postMetadata)
      : undefined;
    message.content = object.content ?? "";
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

function createBaseListMyByCategoryRequest(): ListMyByCategoryRequest {
  return { page: 0, pageSize: 0, category: "" };
}

export const ListMyByCategoryRequest = {
  encode(message: ListMyByCategoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== 0) {
      writer.uint32(8).int32(message.page);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.category !== "") {
      writer.uint32(26).string(message.category);
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

  fromJSON(object: any): ListMyByCategoryRequest {
    return {
      page: isSet(object.page) ? Number(object.page) : 0,
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      category: isSet(object.category) ? String(object.category) : "",
    };
  },

  toJSON(message: ListMyByCategoryRequest): unknown {
    const obj: any = {};
    if (message.page !== 0) {
      obj.page = Math.round(message.page);
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
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
    message.page = object.page ?? 0;
    message.pageSize = object.pageSize ?? 0;
    message.category = object.category ?? "";
    return message;
  },
};

function createBaseListMyByTagRequest(): ListMyByTagRequest {
  return { page: 0, pageSize: 0, tag: "" };
}

export const ListMyByTagRequest = {
  encode(message: ListMyByTagRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== 0) {
      writer.uint32(8).int32(message.page);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.tag !== "") {
      writer.uint32(26).string(message.tag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMyByTagRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMyByTagRequest();
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tag = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListMyByTagRequest {
    return {
      page: isSet(object.page) ? Number(object.page) : 0,
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      tag: isSet(object.tag) ? String(object.tag) : "",
    };
  },

  toJSON(message: ListMyByTagRequest): unknown {
    const obj: any = {};
    if (message.page !== 0) {
      obj.page = Math.round(message.page);
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.tag !== "") {
      obj.tag = message.tag;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListMyByTagRequest>, I>>(base?: I): ListMyByTagRequest {
    return ListMyByTagRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListMyByTagRequest>, I>>(object: I): ListMyByTagRequest {
    const message = createBaseListMyByTagRequest();
    message.page = object.page ?? 0;
    message.pageSize = object.pageSize ?? 0;
    message.tag = object.tag ?? "";
    return message;
  },
};

function createBaseListMyResponse(): ListMyResponse {
  return { postMetadata: [], totalCount: 0 };
}

export const ListMyResponse = {
  encode(message: ListMyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.postMetadata) {
      PostMetadata.encode(v!, writer.uint32(10).fork()).ldelim();
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

          message.postMetadata.push(PostMetadata.decode(reader, reader.uint32()));
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
      postMetadata: Array.isArray(object?.postMetadata)
        ? object.postMetadata.map((e: any) => PostMetadata.fromJSON(e))
        : [],
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
    };
  },

  toJSON(message: ListMyResponse): unknown {
    const obj: any = {};
    if (message.postMetadata?.length) {
      obj.postMetadata = message.postMetadata.map((e) => PostMetadata.toJSON(e));
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
    message.postMetadata = object.postMetadata?.map((e) => PostMetadata.fromPartial(e)) || [];
    message.totalCount = object.totalCount ?? 0;
    return message;
  },
};

export interface PostSvc {
  List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
  ListByAuthorId(request: DeepPartial<ListByAuthorIdRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
  ListByCategory(request: DeepPartial<ListByCategoryRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
  ListByTag(request: DeepPartial<ListByTagRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
  Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
  ListTag(request: DeepPartial<ListTagRequest>, metadata?: grpc.Metadata): Promise<ListTagResponse>;
}

export class PostSvcClientImpl implements PostSvc {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.List = this.List.bind(this);
    this.ListByAuthorId = this.ListByAuthorId.bind(this);
    this.ListByCategory = this.ListByCategory.bind(this);
    this.ListByTag = this.ListByTag.bind(this);
    this.Get = this.Get.bind(this);
    this.ListTag = this.ListTag.bind(this);
  }

  List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse> {
    return this.rpc.unary(PostSvcListDesc, ListRequest.fromPartial(request), metadata);
  }

  ListByAuthorId(request: DeepPartial<ListByAuthorIdRequest>, metadata?: grpc.Metadata): Promise<ListResponse> {
    return this.rpc.unary(PostSvcListByAuthorIdDesc, ListByAuthorIdRequest.fromPartial(request), metadata);
  }

  ListByCategory(request: DeepPartial<ListByCategoryRequest>, metadata?: grpc.Metadata): Promise<ListResponse> {
    return this.rpc.unary(PostSvcListByCategoryDesc, ListByCategoryRequest.fromPartial(request), metadata);
  }

  ListByTag(request: DeepPartial<ListByTagRequest>, metadata?: grpc.Metadata): Promise<ListResponse> {
    return this.rpc.unary(PostSvcListByTagDesc, ListByTagRequest.fromPartial(request), metadata);
  }

  Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse> {
    return this.rpc.unary(PostSvcGetDesc, GetRequest.fromPartial(request), metadata);
  }

  ListTag(request: DeepPartial<ListTagRequest>, metadata?: grpc.Metadata): Promise<ListTagResponse> {
    return this.rpc.unary(PostSvcListTagDesc, ListTagRequest.fromPartial(request), metadata);
  }
}

export const PostSvcDesc = { serviceName: "postsvc.PostSvc" };

export const PostSvcListDesc: UnaryMethodDefinitionish = {
  methodName: "List",
  service: PostSvcDesc,
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

export const PostSvcListByAuthorIdDesc: UnaryMethodDefinitionish = {
  methodName: "ListByAuthorId",
  service: PostSvcDesc,
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

export const PostSvcListByCategoryDesc: UnaryMethodDefinitionish = {
  methodName: "ListByCategory",
  service: PostSvcDesc,
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

export const PostSvcListByTagDesc: UnaryMethodDefinitionish = {
  methodName: "ListByTag",
  service: PostSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ListByTagRequest.encode(this).finish();
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

export const PostSvcGetDesc: UnaryMethodDefinitionish = {
  methodName: "Get",
  service: PostSvcDesc,
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

export const PostSvcListTagDesc: UnaryMethodDefinitionish = {
  methodName: "ListTag",
  service: PostSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ListTagRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ListTagResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export interface MyPostSvc {
  Create(request: DeepPartial<CreateMyRequest>, metadata?: grpc.Metadata): Promise<CreateMyResponse>;
  Update(request: DeepPartial<UpdateMyRequest>, metadata?: grpc.Metadata): Promise<UpdateMyResponse>;
  Get(request: DeepPartial<GetMyRequest>, metadata?: grpc.Metadata): Promise<GetMyResponse>;
  Delete(request: DeepPartial<DeleteMyRequest>, metadata?: grpc.Metadata): Promise<DeleteMyResponse>;
  List(request: DeepPartial<ListMyRequest>, metadata?: grpc.Metadata): Promise<ListMyResponse>;
  ListByCategory(request: DeepPartial<ListMyByCategoryRequest>, metadata?: grpc.Metadata): Promise<ListMyResponse>;
  ListByTag(request: DeepPartial<ListMyByTagRequest>, metadata?: grpc.Metadata): Promise<ListMyResponse>;
}

export class MyPostSvcClientImpl implements MyPostSvc {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Update = this.Update.bind(this);
    this.Get = this.Get.bind(this);
    this.Delete = this.Delete.bind(this);
    this.List = this.List.bind(this);
    this.ListByCategory = this.ListByCategory.bind(this);
    this.ListByTag = this.ListByTag.bind(this);
  }

  Create(request: DeepPartial<CreateMyRequest>, metadata?: grpc.Metadata): Promise<CreateMyResponse> {
    return this.rpc.unary(MyPostSvcCreateDesc, CreateMyRequest.fromPartial(request), metadata);
  }

  Update(request: DeepPartial<UpdateMyRequest>, metadata?: grpc.Metadata): Promise<UpdateMyResponse> {
    return this.rpc.unary(MyPostSvcUpdateDesc, UpdateMyRequest.fromPartial(request), metadata);
  }

  Get(request: DeepPartial<GetMyRequest>, metadata?: grpc.Metadata): Promise<GetMyResponse> {
    return this.rpc.unary(MyPostSvcGetDesc, GetMyRequest.fromPartial(request), metadata);
  }

  Delete(request: DeepPartial<DeleteMyRequest>, metadata?: grpc.Metadata): Promise<DeleteMyResponse> {
    return this.rpc.unary(MyPostSvcDeleteDesc, DeleteMyRequest.fromPartial(request), metadata);
  }

  List(request: DeepPartial<ListMyRequest>, metadata?: grpc.Metadata): Promise<ListMyResponse> {
    return this.rpc.unary(MyPostSvcListDesc, ListMyRequest.fromPartial(request), metadata);
  }

  ListByCategory(request: DeepPartial<ListMyByCategoryRequest>, metadata?: grpc.Metadata): Promise<ListMyResponse> {
    return this.rpc.unary(MyPostSvcListByCategoryDesc, ListMyByCategoryRequest.fromPartial(request), metadata);
  }

  ListByTag(request: DeepPartial<ListMyByTagRequest>, metadata?: grpc.Metadata): Promise<ListMyResponse> {
    return this.rpc.unary(MyPostSvcListByTagDesc, ListMyByTagRequest.fromPartial(request), metadata);
  }
}

export const MyPostSvcDesc = { serviceName: "postsvc.MyPostSvc" };

export const MyPostSvcCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: MyPostSvcDesc,
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

export const MyPostSvcUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: MyPostSvcDesc,
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

export const MyPostSvcGetDesc: UnaryMethodDefinitionish = {
  methodName: "Get",
  service: MyPostSvcDesc,
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

export const MyPostSvcDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: MyPostSvcDesc,
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

export const MyPostSvcListDesc: UnaryMethodDefinitionish = {
  methodName: "List",
  service: MyPostSvcDesc,
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

export const MyPostSvcListByCategoryDesc: UnaryMethodDefinitionish = {
  methodName: "ListByCategory",
  service: MyPostSvcDesc,
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

export const MyPostSvcListByTagDesc: UnaryMethodDefinitionish = {
  methodName: "ListByTag",
  service: MyPostSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ListMyByTagRequest.encode(this).finish();
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

/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "blog";

export interface PostMetadata {
  id: string;
  author: Author | undefined;
  title: string;
  preface: string;
  published: boolean;
  tags: string[];
  category: string;
  createdAt: number;
  updatedAt: number;
}

export interface Series {
  id: string;
  author: Author | undefined;
  title: string;
  preface: string;
  category: string;
  createdAt: number;
  updatedAt: number;
}

export interface Author {
  id: string;
  ikiUserId: string;
  displayName: string;
}

export interface Pagination {
  page: number;
  pageSize: number;
}

function createBasePostMetadata(): PostMetadata {
  return {
    id: "",
    author: undefined,
    title: "",
    preface: "",
    published: false,
    tags: [],
    category: "",
    createdAt: 0,
    updatedAt: 0,
  };
}

export const PostMetadata = {
  encode(message: PostMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.author !== undefined) {
      Author.encode(message.author, writer.uint32(18).fork()).ldelim();
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.preface !== "") {
      writer.uint32(34).string(message.preface);
    }
    if (message.published === true) {
      writer.uint32(40).bool(message.published);
    }
    for (const v of message.tags) {
      writer.uint32(50).string(v!);
    }
    if (message.category !== "") {
      writer.uint32(58).string(message.category);
    }
    if (message.createdAt !== 0) {
      writer.uint32(64).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(72).int64(message.updatedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostMetadata();
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

          message.author = Author.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.title = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.preface = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.published = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.tags.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.category = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.createdAt = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.updatedAt = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PostMetadata {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      author: isSet(object.author) ? Author.fromJSON(object.author) : undefined,
      title: isSet(object.title) ? String(object.title) : "",
      preface: isSet(object.preface) ? String(object.preface) : "",
      published: isSet(object.published) ? Boolean(object.published) : false,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      category: isSet(object.category) ? String(object.category) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
    };
  },

  toJSON(message: PostMetadata): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.author !== undefined) {
      obj.author = Author.toJSON(message.author);
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
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PostMetadata>, I>>(base?: I): PostMetadata {
    return PostMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PostMetadata>, I>>(object: I): PostMetadata {
    const message = createBasePostMetadata();
    message.id = object.id ?? "";
    message.author = (object.author !== undefined && object.author !== null)
      ? Author.fromPartial(object.author)
      : undefined;
    message.title = object.title ?? "";
    message.preface = object.preface ?? "";
    message.published = object.published ?? false;
    message.tags = object.tags?.map((e) => e) || [];
    message.category = object.category ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    return message;
  },
};

function createBaseSeries(): Series {
  return { id: "", author: undefined, title: "", preface: "", category: "", createdAt: 0, updatedAt: 0 };
}

export const Series = {
  encode(message: Series, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.author !== undefined) {
      Author.encode(message.author, writer.uint32(18).fork()).ldelim();
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.preface !== "") {
      writer.uint32(34).string(message.preface);
    }
    if (message.category !== "") {
      writer.uint32(42).string(message.category);
    }
    if (message.createdAt !== 0) {
      writer.uint32(48).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(56).int64(message.updatedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Series {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeries();
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

          message.author = Author.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.title = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.preface = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.category = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.createdAt = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.updatedAt = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Series {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      author: isSet(object.author) ? Author.fromJSON(object.author) : undefined,
      title: isSet(object.title) ? String(object.title) : "",
      preface: isSet(object.preface) ? String(object.preface) : "",
      category: isSet(object.category) ? String(object.category) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
    };
  },

  toJSON(message: Series): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.author !== undefined) {
      obj.author = Author.toJSON(message.author);
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
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Series>, I>>(base?: I): Series {
    return Series.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Series>, I>>(object: I): Series {
    const message = createBaseSeries();
    message.id = object.id ?? "";
    message.author = (object.author !== undefined && object.author !== null)
      ? Author.fromPartial(object.author)
      : undefined;
    message.title = object.title ?? "";
    message.preface = object.preface ?? "";
    message.category = object.category ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    return message;
  },
};

function createBaseAuthor(): Author {
  return { id: "", ikiUserId: "", displayName: "" };
}

export const Author = {
  encode(message: Author, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.ikiUserId !== "") {
      writer.uint32(18).string(message.ikiUserId);
    }
    if (message.displayName !== "") {
      writer.uint32(26).string(message.displayName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Author {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthor();
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

          message.ikiUserId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): Author {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      ikiUserId: isSet(object.ikiUserId) ? String(object.ikiUserId) : "",
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
    };
  },

  toJSON(message: Author): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.ikiUserId !== "") {
      obj.ikiUserId = message.ikiUserId;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Author>, I>>(base?: I): Author {
    return Author.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Author>, I>>(object: I): Author {
    const message = createBaseAuthor();
    message.id = object.id ?? "";
    message.ikiUserId = object.ikiUserId ?? "";
    message.displayName = object.displayName ?? "";
    return message;
  },
};

function createBasePagination(): Pagination {
  return { page: 0, pageSize: 0 };
}

export const Pagination = {
  encode(message: Pagination, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== 0) {
      writer.uint32(8).int32(message.page);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pagination {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePagination();
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

  fromJSON(object: any): Pagination {
    return {
      page: isSet(object.page) ? Number(object.page) : 0,
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
    };
  },

  toJSON(message: Pagination): unknown {
    const obj: any = {};
    if (message.page !== 0) {
      obj.page = Math.round(message.page);
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Pagination>, I>>(base?: I): Pagination {
    return Pagination.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Pagination>, I>>(object: I): Pagination {
    const message = createBasePagination();
    message.page = object.page ?? 0;
    message.pageSize = object.pageSize ?? 0;
    return message;
  },
};

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

/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ticket";

export interface TicketEvent {
  eventTime: number;
  created?: TicketEvent_Created | undefined;
  updated?: TicketEvent_Updated | undefined;
  stateChanged?: TicketEvent_StateChanged | undefined;
  commented?: TicketEvent_Commented | undefined;
}

export interface TicketEvent_Created {
  ticketId: string;
  title: string;
  content?: string | undefined;
  stateKey: string;
  creatorId: string;
  assigneeId?: string | undefined;
  dueAt?: number | undefined;
}

export interface TicketEvent_Updated {
  ticketId: string;
  title: string;
  content?: string | undefined;
  assigneeId?: string | undefined;
  dueAt?: number | undefined;
}

export interface TicketEvent_StateChanged {
  ticketId: string;
  fromStateKey: string;
  toStateKey: string;
  stateUpdatedAt: number;
}

export interface TicketEvent_Commented {
  ticketId: string;
  commentId: string;
  content: string;
  authorId: string;
}

function createBaseTicketEvent(): TicketEvent {
  return { eventTime: 0, created: undefined, updated: undefined, stateChanged: undefined, commented: undefined };
}

export const TicketEvent = {
  encode(message: TicketEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventTime !== 0) {
      writer.uint32(8).int64(message.eventTime);
    }
    if (message.created !== undefined) {
      TicketEvent_Created.encode(message.created, writer.uint32(18).fork()).ldelim();
    }
    if (message.updated !== undefined) {
      TicketEvent_Updated.encode(message.updated, writer.uint32(26).fork()).ldelim();
    }
    if (message.stateChanged !== undefined) {
      TicketEvent_StateChanged.encode(message.stateChanged, writer.uint32(34).fork()).ldelim();
    }
    if (message.commented !== undefined) {
      TicketEvent_Commented.encode(message.commented, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TicketEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTicketEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.eventTime = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.created = TicketEvent_Created.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updated = TicketEvent_Updated.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.stateChanged = TicketEvent_StateChanged.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.commented = TicketEvent_Commented.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TicketEvent {
    return {
      eventTime: isSet(object.eventTime) ? Number(object.eventTime) : 0,
      created: isSet(object.created) ? TicketEvent_Created.fromJSON(object.created) : undefined,
      updated: isSet(object.updated) ? TicketEvent_Updated.fromJSON(object.updated) : undefined,
      stateChanged: isSet(object.stateChanged) ? TicketEvent_StateChanged.fromJSON(object.stateChanged) : undefined,
      commented: isSet(object.commented) ? TicketEvent_Commented.fromJSON(object.commented) : undefined,
    };
  },

  toJSON(message: TicketEvent): unknown {
    const obj: any = {};
    if (message.eventTime !== 0) {
      obj.eventTime = Math.round(message.eventTime);
    }
    if (message.created !== undefined) {
      obj.created = TicketEvent_Created.toJSON(message.created);
    }
    if (message.updated !== undefined) {
      obj.updated = TicketEvent_Updated.toJSON(message.updated);
    }
    if (message.stateChanged !== undefined) {
      obj.stateChanged = TicketEvent_StateChanged.toJSON(message.stateChanged);
    }
    if (message.commented !== undefined) {
      obj.commented = TicketEvent_Commented.toJSON(message.commented);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TicketEvent>, I>>(base?: I): TicketEvent {
    return TicketEvent.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TicketEvent>, I>>(object: I): TicketEvent {
    const message = createBaseTicketEvent();
    message.eventTime = object.eventTime ?? 0;
    message.created = (object.created !== undefined && object.created !== null)
      ? TicketEvent_Created.fromPartial(object.created)
      : undefined;
    message.updated = (object.updated !== undefined && object.updated !== null)
      ? TicketEvent_Updated.fromPartial(object.updated)
      : undefined;
    message.stateChanged = (object.stateChanged !== undefined && object.stateChanged !== null)
      ? TicketEvent_StateChanged.fromPartial(object.stateChanged)
      : undefined;
    message.commented = (object.commented !== undefined && object.commented !== null)
      ? TicketEvent_Commented.fromPartial(object.commented)
      : undefined;
    return message;
  },
};

function createBaseTicketEvent_Created(): TicketEvent_Created {
  return {
    ticketId: "",
    title: "",
    content: undefined,
    stateKey: "",
    creatorId: "",
    assigneeId: undefined,
    dueAt: undefined,
  };
}

export const TicketEvent_Created = {
  encode(message: TicketEvent_Created, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ticketId !== "") {
      writer.uint32(10).string(message.ticketId);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.content !== undefined) {
      writer.uint32(26).string(message.content);
    }
    if (message.stateKey !== "") {
      writer.uint32(34).string(message.stateKey);
    }
    if (message.creatorId !== "") {
      writer.uint32(42).string(message.creatorId);
    }
    if (message.assigneeId !== undefined) {
      writer.uint32(50).string(message.assigneeId);
    }
    if (message.dueAt !== undefined) {
      writer.uint32(56).int64(message.dueAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TicketEvent_Created {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTicketEvent_Created();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ticketId = reader.string();
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

          message.content = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.stateKey = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.creatorId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.assigneeId = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.dueAt = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TicketEvent_Created {
    return {
      ticketId: isSet(object.ticketId) ? String(object.ticketId) : "",
      title: isSet(object.title) ? String(object.title) : "",
      content: isSet(object.content) ? String(object.content) : undefined,
      stateKey: isSet(object.stateKey) ? String(object.stateKey) : "",
      creatorId: isSet(object.creatorId) ? String(object.creatorId) : "",
      assigneeId: isSet(object.assigneeId) ? String(object.assigneeId) : undefined,
      dueAt: isSet(object.dueAt) ? Number(object.dueAt) : undefined,
    };
  },

  toJSON(message: TicketEvent_Created): unknown {
    const obj: any = {};
    if (message.ticketId !== "") {
      obj.ticketId = message.ticketId;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.content !== undefined) {
      obj.content = message.content;
    }
    if (message.stateKey !== "") {
      obj.stateKey = message.stateKey;
    }
    if (message.creatorId !== "") {
      obj.creatorId = message.creatorId;
    }
    if (message.assigneeId !== undefined) {
      obj.assigneeId = message.assigneeId;
    }
    if (message.dueAt !== undefined) {
      obj.dueAt = Math.round(message.dueAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TicketEvent_Created>, I>>(base?: I): TicketEvent_Created {
    return TicketEvent_Created.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TicketEvent_Created>, I>>(object: I): TicketEvent_Created {
    const message = createBaseTicketEvent_Created();
    message.ticketId = object.ticketId ?? "";
    message.title = object.title ?? "";
    message.content = object.content ?? undefined;
    message.stateKey = object.stateKey ?? "";
    message.creatorId = object.creatorId ?? "";
    message.assigneeId = object.assigneeId ?? undefined;
    message.dueAt = object.dueAt ?? undefined;
    return message;
  },
};

function createBaseTicketEvent_Updated(): TicketEvent_Updated {
  return { ticketId: "", title: "", content: undefined, assigneeId: undefined, dueAt: undefined };
}

export const TicketEvent_Updated = {
  encode(message: TicketEvent_Updated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ticketId !== "") {
      writer.uint32(10).string(message.ticketId);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.content !== undefined) {
      writer.uint32(26).string(message.content);
    }
    if (message.assigneeId !== undefined) {
      writer.uint32(34).string(message.assigneeId);
    }
    if (message.dueAt !== undefined) {
      writer.uint32(40).int64(message.dueAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TicketEvent_Updated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTicketEvent_Updated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ticketId = reader.string();
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

          message.content = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.assigneeId = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.dueAt = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TicketEvent_Updated {
    return {
      ticketId: isSet(object.ticketId) ? String(object.ticketId) : "",
      title: isSet(object.title) ? String(object.title) : "",
      content: isSet(object.content) ? String(object.content) : undefined,
      assigneeId: isSet(object.assigneeId) ? String(object.assigneeId) : undefined,
      dueAt: isSet(object.dueAt) ? Number(object.dueAt) : undefined,
    };
  },

  toJSON(message: TicketEvent_Updated): unknown {
    const obj: any = {};
    if (message.ticketId !== "") {
      obj.ticketId = message.ticketId;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.content !== undefined) {
      obj.content = message.content;
    }
    if (message.assigneeId !== undefined) {
      obj.assigneeId = message.assigneeId;
    }
    if (message.dueAt !== undefined) {
      obj.dueAt = Math.round(message.dueAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TicketEvent_Updated>, I>>(base?: I): TicketEvent_Updated {
    return TicketEvent_Updated.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TicketEvent_Updated>, I>>(object: I): TicketEvent_Updated {
    const message = createBaseTicketEvent_Updated();
    message.ticketId = object.ticketId ?? "";
    message.title = object.title ?? "";
    message.content = object.content ?? undefined;
    message.assigneeId = object.assigneeId ?? undefined;
    message.dueAt = object.dueAt ?? undefined;
    return message;
  },
};

function createBaseTicketEvent_StateChanged(): TicketEvent_StateChanged {
  return { ticketId: "", fromStateKey: "", toStateKey: "", stateUpdatedAt: 0 };
}

export const TicketEvent_StateChanged = {
  encode(message: TicketEvent_StateChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ticketId !== "") {
      writer.uint32(10).string(message.ticketId);
    }
    if (message.fromStateKey !== "") {
      writer.uint32(18).string(message.fromStateKey);
    }
    if (message.toStateKey !== "") {
      writer.uint32(26).string(message.toStateKey);
    }
    if (message.stateUpdatedAt !== 0) {
      writer.uint32(32).int64(message.stateUpdatedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TicketEvent_StateChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTicketEvent_StateChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ticketId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fromStateKey = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.toStateKey = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.stateUpdatedAt = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TicketEvent_StateChanged {
    return {
      ticketId: isSet(object.ticketId) ? String(object.ticketId) : "",
      fromStateKey: isSet(object.fromStateKey) ? String(object.fromStateKey) : "",
      toStateKey: isSet(object.toStateKey) ? String(object.toStateKey) : "",
      stateUpdatedAt: isSet(object.stateUpdatedAt) ? Number(object.stateUpdatedAt) : 0,
    };
  },

  toJSON(message: TicketEvent_StateChanged): unknown {
    const obj: any = {};
    if (message.ticketId !== "") {
      obj.ticketId = message.ticketId;
    }
    if (message.fromStateKey !== "") {
      obj.fromStateKey = message.fromStateKey;
    }
    if (message.toStateKey !== "") {
      obj.toStateKey = message.toStateKey;
    }
    if (message.stateUpdatedAt !== 0) {
      obj.stateUpdatedAt = Math.round(message.stateUpdatedAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TicketEvent_StateChanged>, I>>(base?: I): TicketEvent_StateChanged {
    return TicketEvent_StateChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TicketEvent_StateChanged>, I>>(object: I): TicketEvent_StateChanged {
    const message = createBaseTicketEvent_StateChanged();
    message.ticketId = object.ticketId ?? "";
    message.fromStateKey = object.fromStateKey ?? "";
    message.toStateKey = object.toStateKey ?? "";
    message.stateUpdatedAt = object.stateUpdatedAt ?? 0;
    return message;
  },
};

function createBaseTicketEvent_Commented(): TicketEvent_Commented {
  return { ticketId: "", commentId: "", content: "", authorId: "" };
}

export const TicketEvent_Commented = {
  encode(message: TicketEvent_Commented, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ticketId !== "") {
      writer.uint32(10).string(message.ticketId);
    }
    if (message.commentId !== "") {
      writer.uint32(18).string(message.commentId);
    }
    if (message.content !== "") {
      writer.uint32(26).string(message.content);
    }
    if (message.authorId !== "") {
      writer.uint32(34).string(message.authorId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TicketEvent_Commented {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTicketEvent_Commented();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ticketId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.commentId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.content = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): TicketEvent_Commented {
    return {
      ticketId: isSet(object.ticketId) ? String(object.ticketId) : "",
      commentId: isSet(object.commentId) ? String(object.commentId) : "",
      content: isSet(object.content) ? String(object.content) : "",
      authorId: isSet(object.authorId) ? String(object.authorId) : "",
    };
  },

  toJSON(message: TicketEvent_Commented): unknown {
    const obj: any = {};
    if (message.ticketId !== "") {
      obj.ticketId = message.ticketId;
    }
    if (message.commentId !== "") {
      obj.commentId = message.commentId;
    }
    if (message.content !== "") {
      obj.content = message.content;
    }
    if (message.authorId !== "") {
      obj.authorId = message.authorId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TicketEvent_Commented>, I>>(base?: I): TicketEvent_Commented {
    return TicketEvent_Commented.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TicketEvent_Commented>, I>>(object: I): TicketEvent_Commented {
    const message = createBaseTicketEvent_Commented();
    message.ticketId = object.ticketId ?? "";
    message.commentId = object.commentId ?? "";
    message.content = object.content ?? "";
    message.authorId = object.authorId ?? "";
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

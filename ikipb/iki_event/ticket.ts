/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ticket";

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
}

export interface Comment {
  id: string;
  content: string;
  author: User | undefined;
}

export interface Ticket {
  id: string;
  title: string;
  content?: string | undefined;
  stateKey: string;
  dueAt?: number | undefined;
  creator: User | undefined;
  assignee?: User | undefined;
  comments: Comment[];
}

export interface EventTicketCreated {
  ticket: Ticket | undefined;
}

export interface EventTicketUpdated {
  ticket: Ticket | undefined;
}

export interface EventTicketStateUpdated {
  ticket: Ticket | undefined;
}

export interface EventTicketCommented {
  ticket: Ticket | undefined;
}

function createBaseUser(): User {
  return { id: "", firstname: "", lastname: "", email: "" };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.firstname !== "") {
      writer.uint32(18).string(message.firstname);
    }
    if (message.lastname !== "") {
      writer.uint32(26).string(message.lastname);
    }
    if (message.email !== "") {
      writer.uint32(34).string(message.email);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
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

          message.firstname = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lastname = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.email = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      firstname: isSet(object.firstname) ? String(object.firstname) : "",
      lastname: isSet(object.lastname) ? String(object.lastname) : "",
      email: isSet(object.email) ? String(object.email) : "",
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.firstname !== "") {
      obj.firstname = message.firstname;
    }
    if (message.lastname !== "") {
      obj.lastname = message.lastname;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.id = object.id ?? "";
    message.firstname = object.firstname ?? "";
    message.lastname = object.lastname ?? "";
    message.email = object.email ?? "";
    return message;
  },
};

function createBaseComment(): Comment {
  return { id: "", content: "", author: undefined };
}

export const Comment = {
  encode(message: Comment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.content !== "") {
      writer.uint32(18).string(message.content);
    }
    if (message.author !== undefined) {
      User.encode(message.author, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Comment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComment();
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

          message.content = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.author = User.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Comment {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      content: isSet(object.content) ? String(object.content) : "",
      author: isSet(object.author) ? User.fromJSON(object.author) : undefined,
    };
  },

  toJSON(message: Comment): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.content !== "") {
      obj.content = message.content;
    }
    if (message.author !== undefined) {
      obj.author = User.toJSON(message.author);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Comment>, I>>(base?: I): Comment {
    return Comment.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Comment>, I>>(object: I): Comment {
    const message = createBaseComment();
    message.id = object.id ?? "";
    message.content = object.content ?? "";
    message.author = (object.author !== undefined && object.author !== null)
      ? User.fromPartial(object.author)
      : undefined;
    return message;
  },
};

function createBaseTicket(): Ticket {
  return {
    id: "",
    title: "",
    content: undefined,
    stateKey: "",
    dueAt: undefined,
    creator: undefined,
    assignee: undefined,
    comments: [],
  };
}

export const Ticket = {
  encode(message: Ticket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
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
    if (message.dueAt !== undefined) {
      writer.uint32(40).int64(message.dueAt);
    }
    if (message.creator !== undefined) {
      User.encode(message.creator, writer.uint32(50).fork()).ldelim();
    }
    if (message.assignee !== undefined) {
      User.encode(message.assignee, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.comments) {
      Comment.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Ticket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTicket();
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

          message.content = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.stateKey = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.dueAt = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.creator = User.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.assignee = User.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.comments.push(Comment.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Ticket {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      title: isSet(object.title) ? String(object.title) : "",
      content: isSet(object.content) ? String(object.content) : undefined,
      stateKey: isSet(object.stateKey) ? String(object.stateKey) : "",
      dueAt: isSet(object.dueAt) ? Number(object.dueAt) : undefined,
      creator: isSet(object.creator) ? User.fromJSON(object.creator) : undefined,
      assignee: isSet(object.assignee) ? User.fromJSON(object.assignee) : undefined,
      comments: Array.isArray(object?.comments) ? object.comments.map((e: any) => Comment.fromJSON(e)) : [],
    };
  },

  toJSON(message: Ticket): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
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
    if (message.dueAt !== undefined) {
      obj.dueAt = Math.round(message.dueAt);
    }
    if (message.creator !== undefined) {
      obj.creator = User.toJSON(message.creator);
    }
    if (message.assignee !== undefined) {
      obj.assignee = User.toJSON(message.assignee);
    }
    if (message.comments?.length) {
      obj.comments = message.comments.map((e) => Comment.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Ticket>, I>>(base?: I): Ticket {
    return Ticket.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Ticket>, I>>(object: I): Ticket {
    const message = createBaseTicket();
    message.id = object.id ?? "";
    message.title = object.title ?? "";
    message.content = object.content ?? undefined;
    message.stateKey = object.stateKey ?? "";
    message.dueAt = object.dueAt ?? undefined;
    message.creator = (object.creator !== undefined && object.creator !== null)
      ? User.fromPartial(object.creator)
      : undefined;
    message.assignee = (object.assignee !== undefined && object.assignee !== null)
      ? User.fromPartial(object.assignee)
      : undefined;
    message.comments = object.comments?.map((e) => Comment.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventTicketCreated(): EventTicketCreated {
  return { ticket: undefined };
}

export const EventTicketCreated = {
  encode(message: EventTicketCreated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ticket !== undefined) {
      Ticket.encode(message.ticket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTicketCreated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTicketCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ticket = Ticket.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventTicketCreated {
    return { ticket: isSet(object.ticket) ? Ticket.fromJSON(object.ticket) : undefined };
  },

  toJSON(message: EventTicketCreated): unknown {
    const obj: any = {};
    if (message.ticket !== undefined) {
      obj.ticket = Ticket.toJSON(message.ticket);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventTicketCreated>, I>>(base?: I): EventTicketCreated {
    return EventTicketCreated.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventTicketCreated>, I>>(object: I): EventTicketCreated {
    const message = createBaseEventTicketCreated();
    message.ticket = (object.ticket !== undefined && object.ticket !== null)
      ? Ticket.fromPartial(object.ticket)
      : undefined;
    return message;
  },
};

function createBaseEventTicketUpdated(): EventTicketUpdated {
  return { ticket: undefined };
}

export const EventTicketUpdated = {
  encode(message: EventTicketUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ticket !== undefined) {
      Ticket.encode(message.ticket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTicketUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTicketUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ticket = Ticket.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventTicketUpdated {
    return { ticket: isSet(object.ticket) ? Ticket.fromJSON(object.ticket) : undefined };
  },

  toJSON(message: EventTicketUpdated): unknown {
    const obj: any = {};
    if (message.ticket !== undefined) {
      obj.ticket = Ticket.toJSON(message.ticket);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventTicketUpdated>, I>>(base?: I): EventTicketUpdated {
    return EventTicketUpdated.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventTicketUpdated>, I>>(object: I): EventTicketUpdated {
    const message = createBaseEventTicketUpdated();
    message.ticket = (object.ticket !== undefined && object.ticket !== null)
      ? Ticket.fromPartial(object.ticket)
      : undefined;
    return message;
  },
};

function createBaseEventTicketStateUpdated(): EventTicketStateUpdated {
  return { ticket: undefined };
}

export const EventTicketStateUpdated = {
  encode(message: EventTicketStateUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ticket !== undefined) {
      Ticket.encode(message.ticket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTicketStateUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTicketStateUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ticket = Ticket.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventTicketStateUpdated {
    return { ticket: isSet(object.ticket) ? Ticket.fromJSON(object.ticket) : undefined };
  },

  toJSON(message: EventTicketStateUpdated): unknown {
    const obj: any = {};
    if (message.ticket !== undefined) {
      obj.ticket = Ticket.toJSON(message.ticket);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventTicketStateUpdated>, I>>(base?: I): EventTicketStateUpdated {
    return EventTicketStateUpdated.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventTicketStateUpdated>, I>>(object: I): EventTicketStateUpdated {
    const message = createBaseEventTicketStateUpdated();
    message.ticket = (object.ticket !== undefined && object.ticket !== null)
      ? Ticket.fromPartial(object.ticket)
      : undefined;
    return message;
  },
};

function createBaseEventTicketCommented(): EventTicketCommented {
  return { ticket: undefined };
}

export const EventTicketCommented = {
  encode(message: EventTicketCommented, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ticket !== undefined) {
      Ticket.encode(message.ticket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTicketCommented {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTicketCommented();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ticket = Ticket.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventTicketCommented {
    return { ticket: isSet(object.ticket) ? Ticket.fromJSON(object.ticket) : undefined };
  },

  toJSON(message: EventTicketCommented): unknown {
    const obj: any = {};
    if (message.ticket !== undefined) {
      obj.ticket = Ticket.toJSON(message.ticket);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventTicketCommented>, I>>(base?: I): EventTicketCommented {
    return EventTicketCommented.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventTicketCommented>, I>>(object: I): EventTicketCommented {
    const message = createBaseEventTicketCommented();
    message.ticket = (object.ticket !== undefined && object.ticket !== null)
      ? Ticket.fromPartial(object.ticket)
      : undefined;
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

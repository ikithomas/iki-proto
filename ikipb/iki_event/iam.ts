/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { EntityType, entityTypeFromJSON, entityTypeToJSON } from "../iki_iam/iam";

export const protobufPackage = "iam";

/**
 * //////////////////////////////////////////////////////////////////////////////
 * Events
 * ////
 */
export interface EventEntity {
  topic: string;
  origin: string;
  entityId: string;
  entityName: string;
  entityType: EntityType;
  content: EventEntity_Content | undefined;
}

export interface EventEntity_Content {
  refreshToken: EventEntity_Content_RefreshToken | undefined;
  login: EventEntity_Content_Login | undefined;
  signout: EventEntity_Content_Signout | undefined;
}

export interface EventEntity_Content_RefreshToken {
  result: EventEntity_Content_RefreshToken_Result;
  message: string;
}

export enum EventEntity_Content_RefreshToken_Result {
  RESULT_UNSPECIFIED = 0,
  RESULT_SUCCESS = 1,
  RESULT_FAILED = 2,
  UNRECOGNIZED = -1,
}

export function eventEntity_Content_RefreshToken_ResultFromJSON(object: any): EventEntity_Content_RefreshToken_Result {
  switch (object) {
    case 0:
    case "RESULT_UNSPECIFIED":
      return EventEntity_Content_RefreshToken_Result.RESULT_UNSPECIFIED;
    case 1:
    case "RESULT_SUCCESS":
      return EventEntity_Content_RefreshToken_Result.RESULT_SUCCESS;
    case 2:
    case "RESULT_FAILED":
      return EventEntity_Content_RefreshToken_Result.RESULT_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EventEntity_Content_RefreshToken_Result.UNRECOGNIZED;
  }
}

export function eventEntity_Content_RefreshToken_ResultToJSON(object: EventEntity_Content_RefreshToken_Result): string {
  switch (object) {
    case EventEntity_Content_RefreshToken_Result.RESULT_UNSPECIFIED:
      return "RESULT_UNSPECIFIED";
    case EventEntity_Content_RefreshToken_Result.RESULT_SUCCESS:
      return "RESULT_SUCCESS";
    case EventEntity_Content_RefreshToken_Result.RESULT_FAILED:
      return "RESULT_FAILED";
    case EventEntity_Content_RefreshToken_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface EventEntity_Content_Login {
  result: EventEntity_Content_Login_Result;
  message: string;
}

export enum EventEntity_Content_Login_Result {
  RESULT_UNSPECIFIED = 0,
  RESULT_SUCCESS = 1,
  RESULT_FAILED = 2,
  UNRECOGNIZED = -1,
}

export function eventEntity_Content_Login_ResultFromJSON(object: any): EventEntity_Content_Login_Result {
  switch (object) {
    case 0:
    case "RESULT_UNSPECIFIED":
      return EventEntity_Content_Login_Result.RESULT_UNSPECIFIED;
    case 1:
    case "RESULT_SUCCESS":
      return EventEntity_Content_Login_Result.RESULT_SUCCESS;
    case 2:
    case "RESULT_FAILED":
      return EventEntity_Content_Login_Result.RESULT_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EventEntity_Content_Login_Result.UNRECOGNIZED;
  }
}

export function eventEntity_Content_Login_ResultToJSON(object: EventEntity_Content_Login_Result): string {
  switch (object) {
    case EventEntity_Content_Login_Result.RESULT_UNSPECIFIED:
      return "RESULT_UNSPECIFIED";
    case EventEntity_Content_Login_Result.RESULT_SUCCESS:
      return "RESULT_SUCCESS";
    case EventEntity_Content_Login_Result.RESULT_FAILED:
      return "RESULT_FAILED";
    case EventEntity_Content_Login_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface EventEntity_Content_Signout {
  result: EventEntity_Content_Signout_Result;
  message: string;
}

export enum EventEntity_Content_Signout_Result {
  RESULT_UNSPECIFIED = 0,
  RESULT_SUCCESS = 1,
  RESULT_FAILED = 2,
  UNRECOGNIZED = -1,
}

export function eventEntity_Content_Signout_ResultFromJSON(object: any): EventEntity_Content_Signout_Result {
  switch (object) {
    case 0:
    case "RESULT_UNSPECIFIED":
      return EventEntity_Content_Signout_Result.RESULT_UNSPECIFIED;
    case 1:
    case "RESULT_SUCCESS":
      return EventEntity_Content_Signout_Result.RESULT_SUCCESS;
    case 2:
    case "RESULT_FAILED":
      return EventEntity_Content_Signout_Result.RESULT_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EventEntity_Content_Signout_Result.UNRECOGNIZED;
  }
}

export function eventEntity_Content_Signout_ResultToJSON(object: EventEntity_Content_Signout_Result): string {
  switch (object) {
    case EventEntity_Content_Signout_Result.RESULT_UNSPECIFIED:
      return "RESULT_UNSPECIFIED";
    case EventEntity_Content_Signout_Result.RESULT_SUCCESS:
      return "RESULT_SUCCESS";
    case EventEntity_Content_Signout_Result.RESULT_FAILED:
      return "RESULT_FAILED";
    case EventEntity_Content_Signout_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseEventEntity(): EventEntity {
  return { topic: "", origin: "", entityId: "", entityName: "", entityType: 0, content: undefined };
}

export const EventEntity = {
  encode(message: EventEntity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topic !== "") {
      writer.uint32(10).string(message.topic);
    }
    if (message.origin !== "") {
      writer.uint32(18).string(message.origin);
    }
    if (message.entityId !== "") {
      writer.uint32(26).string(message.entityId);
    }
    if (message.entityName !== "") {
      writer.uint32(34).string(message.entityName);
    }
    if (message.entityType !== 0) {
      writer.uint32(40).int32(message.entityType);
    }
    if (message.content !== undefined) {
      EventEntity_Content.encode(message.content, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEntity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.topic = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.origin = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.entityName = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.entityType = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.content = EventEntity_Content.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventEntity {
    return {
      topic: isSet(object.topic) ? String(object.topic) : "",
      origin: isSet(object.origin) ? String(object.origin) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      entityName: isSet(object.entityName) ? String(object.entityName) : "",
      entityType: isSet(object.entityType) ? entityTypeFromJSON(object.entityType) : 0,
      content: isSet(object.content) ? EventEntity_Content.fromJSON(object.content) : undefined,
    };
  },

  toJSON(message: EventEntity): unknown {
    const obj: any = {};
    if (message.topic !== "") {
      obj.topic = message.topic;
    }
    if (message.origin !== "") {
      obj.origin = message.origin;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.entityName !== "") {
      obj.entityName = message.entityName;
    }
    if (message.entityType !== 0) {
      obj.entityType = entityTypeToJSON(message.entityType);
    }
    if (message.content !== undefined) {
      obj.content = EventEntity_Content.toJSON(message.content);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventEntity>, I>>(base?: I): EventEntity {
    return EventEntity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventEntity>, I>>(object: I): EventEntity {
    const message = createBaseEventEntity();
    message.topic = object.topic ?? "";
    message.origin = object.origin ?? "";
    message.entityId = object.entityId ?? "";
    message.entityName = object.entityName ?? "";
    message.entityType = object.entityType ?? 0;
    message.content = (object.content !== undefined && object.content !== null)
      ? EventEntity_Content.fromPartial(object.content)
      : undefined;
    return message;
  },
};

function createBaseEventEntity_Content(): EventEntity_Content {
  return { refreshToken: undefined, login: undefined, signout: undefined };
}

export const EventEntity_Content = {
  encode(message: EventEntity_Content, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.refreshToken !== undefined) {
      EventEntity_Content_RefreshToken.encode(message.refreshToken, writer.uint32(10).fork()).ldelim();
    }
    if (message.login !== undefined) {
      EventEntity_Content_Login.encode(message.login, writer.uint32(18).fork()).ldelim();
    }
    if (message.signout !== undefined) {
      EventEntity_Content_Signout.encode(message.signout, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEntity_Content {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEntity_Content();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.refreshToken = EventEntity_Content_RefreshToken.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.login = EventEntity_Content_Login.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.signout = EventEntity_Content_Signout.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventEntity_Content {
    return {
      refreshToken: isSet(object.refreshToken)
        ? EventEntity_Content_RefreshToken.fromJSON(object.refreshToken)
        : undefined,
      login: isSet(object.login) ? EventEntity_Content_Login.fromJSON(object.login) : undefined,
      signout: isSet(object.signout) ? EventEntity_Content_Signout.fromJSON(object.signout) : undefined,
    };
  },

  toJSON(message: EventEntity_Content): unknown {
    const obj: any = {};
    if (message.refreshToken !== undefined) {
      obj.refreshToken = EventEntity_Content_RefreshToken.toJSON(message.refreshToken);
    }
    if (message.login !== undefined) {
      obj.login = EventEntity_Content_Login.toJSON(message.login);
    }
    if (message.signout !== undefined) {
      obj.signout = EventEntity_Content_Signout.toJSON(message.signout);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventEntity_Content>, I>>(base?: I): EventEntity_Content {
    return EventEntity_Content.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventEntity_Content>, I>>(object: I): EventEntity_Content {
    const message = createBaseEventEntity_Content();
    message.refreshToken = (object.refreshToken !== undefined && object.refreshToken !== null)
      ? EventEntity_Content_RefreshToken.fromPartial(object.refreshToken)
      : undefined;
    message.login = (object.login !== undefined && object.login !== null)
      ? EventEntity_Content_Login.fromPartial(object.login)
      : undefined;
    message.signout = (object.signout !== undefined && object.signout !== null)
      ? EventEntity_Content_Signout.fromPartial(object.signout)
      : undefined;
    return message;
  },
};

function createBaseEventEntity_Content_RefreshToken(): EventEntity_Content_RefreshToken {
  return { result: 0, message: "" };
}

export const EventEntity_Content_RefreshToken = {
  encode(message: EventEntity_Content_RefreshToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEntity_Content_RefreshToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEntity_Content_RefreshToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventEntity_Content_RefreshToken {
    return {
      result: isSet(object.result) ? eventEntity_Content_RefreshToken_ResultFromJSON(object.result) : 0,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: EventEntity_Content_RefreshToken): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = eventEntity_Content_RefreshToken_ResultToJSON(message.result);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventEntity_Content_RefreshToken>, I>>(
    base?: I,
  ): EventEntity_Content_RefreshToken {
    return EventEntity_Content_RefreshToken.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventEntity_Content_RefreshToken>, I>>(
    object: I,
  ): EventEntity_Content_RefreshToken {
    const message = createBaseEventEntity_Content_RefreshToken();
    message.result = object.result ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseEventEntity_Content_Login(): EventEntity_Content_Login {
  return { result: 0, message: "" };
}

export const EventEntity_Content_Login = {
  encode(message: EventEntity_Content_Login, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEntity_Content_Login {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEntity_Content_Login();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventEntity_Content_Login {
    return {
      result: isSet(object.result) ? eventEntity_Content_Login_ResultFromJSON(object.result) : 0,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: EventEntity_Content_Login): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = eventEntity_Content_Login_ResultToJSON(message.result);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventEntity_Content_Login>, I>>(base?: I): EventEntity_Content_Login {
    return EventEntity_Content_Login.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventEntity_Content_Login>, I>>(object: I): EventEntity_Content_Login {
    const message = createBaseEventEntity_Content_Login();
    message.result = object.result ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseEventEntity_Content_Signout(): EventEntity_Content_Signout {
  return { result: 0, message: "" };
}

export const EventEntity_Content_Signout = {
  encode(message: EventEntity_Content_Signout, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEntity_Content_Signout {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEntity_Content_Signout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventEntity_Content_Signout {
    return {
      result: isSet(object.result) ? eventEntity_Content_Signout_ResultFromJSON(object.result) : 0,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: EventEntity_Content_Signout): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = eventEntity_Content_Signout_ResultToJSON(message.result);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventEntity_Content_Signout>, I>>(base?: I): EventEntity_Content_Signout {
    return EventEntity_Content_Signout.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventEntity_Content_Signout>, I>>(object: I): EventEntity_Content_Signout {
    const message = createBaseEventEntity_Content_Signout();
    message.result = object.result ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

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

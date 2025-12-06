/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "iam";

export enum EntityType {
  ENTITY_TYPE_UNSPECIFIED = 0,
  ENTITY_TYPE_USER = 1,
  ENTITY_TYPE_SERVICE = 2,
  UNRECOGNIZED = -1,
}

export function entityTypeFromJSON(object: any): EntityType {
  switch (object) {
    case 0:
    case "ENTITY_TYPE_UNSPECIFIED":
      return EntityType.ENTITY_TYPE_UNSPECIFIED;
    case 1:
    case "ENTITY_TYPE_USER":
      return EntityType.ENTITY_TYPE_USER;
    case 2:
    case "ENTITY_TYPE_SERVICE":
      return EntityType.ENTITY_TYPE_SERVICE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EntityType.UNRECOGNIZED;
  }
}

export function entityTypeToJSON(object: EntityType): string {
  switch (object) {
    case EntityType.ENTITY_TYPE_UNSPECIFIED:
      return "ENTITY_TYPE_UNSPECIFIED";
    case EntityType.ENTITY_TYPE_USER:
      return "ENTITY_TYPE_USER";
    case EntityType.ENTITY_TYPE_SERVICE:
      return "ENTITY_TYPE_SERVICE";
    case EntityType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** User is a human user */
export interface User {
  id: string;
  email: string;
  givenName: string;
  familyName: string;
  roles: Group[];
  active: boolean;
  lastLoginAt: number;
  lastActivityAt: number;
}

export interface Group {
  id: string;
  name: string;
}

/** Service is a microservice */
export interface Service {
  /** Internal ID of the service. */
  id: string;
  /** Client ID of the service. Used for authentication. */
  clientId: string;
  /** secret to authenticate to. */
  secrets: Secret[];
  /** Friendly name */
  name: string;
}

export interface Secret {
  id: string;
  secret: string;
  lastUsedAt: number;
  active: boolean;
}

export interface EventUserLogin {
  ikiUserId: string;
  email: string;
}

export interface EventAccessToken {
  entityId: string;
  entityType: EntityType;
}

function createBaseUser(): User {
  return {
    id: "",
    email: "",
    givenName: "",
    familyName: "",
    roles: [],
    active: false,
    lastLoginAt: 0,
    lastActivityAt: 0,
  };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.givenName !== "") {
      writer.uint32(26).string(message.givenName);
    }
    if (message.familyName !== "") {
      writer.uint32(34).string(message.familyName);
    }
    for (const v of message.roles) {
      Group.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.active === true) {
      writer.uint32(72).bool(message.active);
    }
    if (message.lastLoginAt !== 0) {
      writer.uint32(80).int64(message.lastLoginAt);
    }
    if (message.lastActivityAt !== 0) {
      writer.uint32(88).int64(message.lastActivityAt);
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

          message.email = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.givenName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.familyName = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.roles.push(Group.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.active = reader.bool();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.lastLoginAt = longToNumber(reader.int64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.lastActivityAt = longToNumber(reader.int64() as Long);
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
      email: isSet(object.email) ? String(object.email) : "",
      givenName: isSet(object.givenName) ? String(object.givenName) : "",
      familyName: isSet(object.familyName) ? String(object.familyName) : "",
      roles: Array.isArray(object?.roles) ? object.roles.map((e: any) => Group.fromJSON(e)) : [],
      active: isSet(object.active) ? Boolean(object.active) : false,
      lastLoginAt: isSet(object.lastLoginAt) ? Number(object.lastLoginAt) : 0,
      lastActivityAt: isSet(object.lastActivityAt) ? Number(object.lastActivityAt) : 0,
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.givenName !== "") {
      obj.givenName = message.givenName;
    }
    if (message.familyName !== "") {
      obj.familyName = message.familyName;
    }
    if (message.roles?.length) {
      obj.roles = message.roles.map((e) => Group.toJSON(e));
    }
    if (message.active === true) {
      obj.active = message.active;
    }
    if (message.lastLoginAt !== 0) {
      obj.lastLoginAt = Math.round(message.lastLoginAt);
    }
    if (message.lastActivityAt !== 0) {
      obj.lastActivityAt = Math.round(message.lastActivityAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.id = object.id ?? "";
    message.email = object.email ?? "";
    message.givenName = object.givenName ?? "";
    message.familyName = object.familyName ?? "";
    message.roles = object.roles?.map((e) => Group.fromPartial(e)) || [];
    message.active = object.active ?? false;
    message.lastLoginAt = object.lastLoginAt ?? 0;
    message.lastActivityAt = object.lastActivityAt ?? 0;
    return message;
  },
};

function createBaseGroup(): Group {
  return { id: "", name: "" };
}

export const Group = {
  encode(message: Group, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Group {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroup();
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

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Group {
    return { id: isSet(object.id) ? String(object.id) : "", name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: Group): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Group>, I>>(base?: I): Group {
    return Group.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Group>, I>>(object: I): Group {
    const message = createBaseGroup();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseService(): Service {
  return { id: "", clientId: "", secrets: [], name: "" };
}

export const Service = {
  encode(message: Service, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    for (const v of message.secrets) {
      Secret.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Service {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseService();
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

          message.clientId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.secrets.push(Secret.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Service {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      secrets: Array.isArray(object?.secrets) ? object.secrets.map((e: any) => Secret.fromJSON(e)) : [],
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: Service): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.clientId !== "") {
      obj.clientId = message.clientId;
    }
    if (message.secrets?.length) {
      obj.secrets = message.secrets.map((e) => Secret.toJSON(e));
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Service>, I>>(base?: I): Service {
    return Service.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Service>, I>>(object: I): Service {
    const message = createBaseService();
    message.id = object.id ?? "";
    message.clientId = object.clientId ?? "";
    message.secrets = object.secrets?.map((e) => Secret.fromPartial(e)) || [];
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseSecret(): Secret {
  return { id: "", secret: "", lastUsedAt: 0, active: false };
}

export const Secret = {
  encode(message: Secret, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.secret !== "") {
      writer.uint32(18).string(message.secret);
    }
    if (message.lastUsedAt !== 0) {
      writer.uint32(24).int64(message.lastUsedAt);
    }
    if (message.active === true) {
      writer.uint32(32).bool(message.active);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Secret {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecret();
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

          message.secret = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.lastUsedAt = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.active = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Secret {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      secret: isSet(object.secret) ? String(object.secret) : "",
      lastUsedAt: isSet(object.lastUsedAt) ? Number(object.lastUsedAt) : 0,
      active: isSet(object.active) ? Boolean(object.active) : false,
    };
  },

  toJSON(message: Secret): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.secret !== "") {
      obj.secret = message.secret;
    }
    if (message.lastUsedAt !== 0) {
      obj.lastUsedAt = Math.round(message.lastUsedAt);
    }
    if (message.active === true) {
      obj.active = message.active;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Secret>, I>>(base?: I): Secret {
    return Secret.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Secret>, I>>(object: I): Secret {
    const message = createBaseSecret();
    message.id = object.id ?? "";
    message.secret = object.secret ?? "";
    message.lastUsedAt = object.lastUsedAt ?? 0;
    message.active = object.active ?? false;
    return message;
  },
};

function createBaseEventUserLogin(): EventUserLogin {
  return { ikiUserId: "", email: "" };
}

export const EventUserLogin = {
  encode(message: EventUserLogin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ikiUserId !== "") {
      writer.uint32(10).string(message.ikiUserId);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUserLogin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUserLogin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ikiUserId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): EventUserLogin {
    return {
      ikiUserId: isSet(object.ikiUserId) ? String(object.ikiUserId) : "",
      email: isSet(object.email) ? String(object.email) : "",
    };
  },

  toJSON(message: EventUserLogin): unknown {
    const obj: any = {};
    if (message.ikiUserId !== "") {
      obj.ikiUserId = message.ikiUserId;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventUserLogin>, I>>(base?: I): EventUserLogin {
    return EventUserLogin.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventUserLogin>, I>>(object: I): EventUserLogin {
    const message = createBaseEventUserLogin();
    message.ikiUserId = object.ikiUserId ?? "";
    message.email = object.email ?? "";
    return message;
  },
};

function createBaseEventAccessToken(): EventAccessToken {
  return { entityId: "", entityType: 0 };
}

export const EventAccessToken = {
  encode(message: EventAccessToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    if (message.entityType !== 0) {
      writer.uint32(16).int32(message.entityType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAccessToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAccessToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.entityType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventAccessToken {
    return {
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      entityType: isSet(object.entityType) ? entityTypeFromJSON(object.entityType) : 0,
    };
  },

  toJSON(message: EventAccessToken): unknown {
    const obj: any = {};
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.entityType !== 0) {
      obj.entityType = entityTypeToJSON(message.entityType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventAccessToken>, I>>(base?: I): EventAccessToken {
    return EventAccessToken.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventAccessToken>, I>>(object: I): EventAccessToken {
    const message = createBaseEventAccessToken();
    message.entityId = object.entityId ?? "";
    message.entityType = object.entityType ?? 0;
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

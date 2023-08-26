/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import Long = require("long");

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
  groupOwner: boolean;
  groupAdmin: boolean;
  groupUser: boolean;
  roles: string[];
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
  secret: Secret[];
  /** Friendly name */
  name: string;
}

export interface Secret {
  id: string;
  secret: string;
  lastUsedAt: number;
  active: boolean;
}

function createBaseUser(): User {
  return {
    id: "",
    email: "",
    givenName: "",
    familyName: "",
    groupOwner: false,
    groupAdmin: false,
    groupUser: false,
    roles: [],
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
    if (message.groupOwner === true) {
      writer.uint32(40).bool(message.groupOwner);
    }
    if (message.groupAdmin === true) {
      writer.uint32(48).bool(message.groupAdmin);
    }
    if (message.groupUser === true) {
      writer.uint32(56).bool(message.groupUser);
    }
    for (const v of message.roles) {
      writer.uint32(66).string(v!);
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
        case 5:
          if (tag !== 40) {
            break;
          }

          message.groupOwner = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.groupAdmin = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.groupUser = reader.bool();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.roles.push(reader.string());
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
      groupOwner: isSet(object.groupOwner) ? Boolean(object.groupOwner) : false,
      groupAdmin: isSet(object.groupAdmin) ? Boolean(object.groupAdmin) : false,
      groupUser: isSet(object.groupUser) ? Boolean(object.groupUser) : false,
      roles: Array.isArray(object?.roles) ? object.roles.map((e: any) => String(e)) : [],
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
    if (message.groupOwner === true) {
      obj.groupOwner = message.groupOwner;
    }
    if (message.groupAdmin === true) {
      obj.groupAdmin = message.groupAdmin;
    }
    if (message.groupUser === true) {
      obj.groupUser = message.groupUser;
    }
    if (message.roles?.length) {
      obj.roles = message.roles;
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
    message.groupOwner = object.groupOwner ?? false;
    message.groupAdmin = object.groupAdmin ?? false;
    message.groupUser = object.groupUser ?? false;
    message.roles = object.roles?.map((e) => e) || [];
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
  return { id: "", clientId: "", secret: [], name: "" };
}

export const Service = {
  encode(message: Service, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    for (const v of message.secret) {
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

          message.secret.push(Secret.decode(reader, reader.uint32()));
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
      secret: Array.isArray(object?.secret) ? object.secret.map((e: any) => Secret.fromJSON(e)) : [],
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
    if (message.secret?.length) {
      obj.secret = message.secret.map((e) => Secret.toJSON(e));
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
    message.secret = object.secret?.map((e) => Secret.fromPartial(e)) || [];
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

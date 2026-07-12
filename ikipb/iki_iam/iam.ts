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
  active: boolean;
  lastLoginAt?: number | undefined;
  lastActivityAt?: number | undefined;
  scimLastSyncedAt?: number | undefined;
}

export interface UserDetail {
  user: User | undefined;
  groups: Group[];
  /** Roles assigned directly to the user (via account_iam_role). */
  directRoles: Role[];
  /** Union of all roles from group memberships and direct assignments. */
  effectiveRoles: Role[];
}

export interface Permission {
  id: string;
  name: string;
  externalId: string;
}

export interface Role {
  id: string;
  name: string;
}

export interface RoleDetail {
  role: Role | undefined;
  permissions: Permission[];
}

export interface Group {
  id: string;
  name: string;
}

export interface GroupDetail {
  group: Group | undefined;
  roles: Role[];
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

function createBaseUser(): User {
  return {
    id: "",
    email: "",
    givenName: "",
    familyName: "",
    active: false,
    lastLoginAt: undefined,
    lastActivityAt: undefined,
    scimLastSyncedAt: undefined,
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
    if (message.active === true) {
      writer.uint32(72).bool(message.active);
    }
    if (message.lastLoginAt !== undefined) {
      writer.uint32(80).int64(message.lastLoginAt);
    }
    if (message.lastActivityAt !== undefined) {
      writer.uint32(88).int64(message.lastActivityAt);
    }
    if (message.scimLastSyncedAt !== undefined) {
      writer.uint32(96).int64(message.scimLastSyncedAt);
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
        case 12:
          if (tag !== 96) {
            break;
          }

          message.scimLastSyncedAt = longToNumber(reader.int64() as Long);
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
      active: isSet(object.active) ? Boolean(object.active) : false,
      lastLoginAt: isSet(object.lastLoginAt) ? Number(object.lastLoginAt) : undefined,
      lastActivityAt: isSet(object.lastActivityAt) ? Number(object.lastActivityAt) : undefined,
      scimLastSyncedAt: isSet(object.scimLastSyncedAt) ? Number(object.scimLastSyncedAt) : undefined,
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
    if (message.active === true) {
      obj.active = message.active;
    }
    if (message.lastLoginAt !== undefined) {
      obj.lastLoginAt = Math.round(message.lastLoginAt);
    }
    if (message.lastActivityAt !== undefined) {
      obj.lastActivityAt = Math.round(message.lastActivityAt);
    }
    if (message.scimLastSyncedAt !== undefined) {
      obj.scimLastSyncedAt = Math.round(message.scimLastSyncedAt);
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
    message.active = object.active ?? false;
    message.lastLoginAt = object.lastLoginAt ?? undefined;
    message.lastActivityAt = object.lastActivityAt ?? undefined;
    message.scimLastSyncedAt = object.scimLastSyncedAt ?? undefined;
    return message;
  },
};

function createBaseUserDetail(): UserDetail {
  return { user: undefined, groups: [], directRoles: [], effectiveRoles: [] };
}

export const UserDetail = {
  encode(message: UserDetail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.directRoles) {
      Role.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.effectiveRoles) {
      Role.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserDetail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserDetail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.groups.push(Group.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.directRoles.push(Role.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.effectiveRoles.push(Role.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserDetail {
    return {
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromJSON(e)) : [],
      directRoles: Array.isArray(object?.directRoles) ? object.directRoles.map((e: any) => Role.fromJSON(e)) : [],
      effectiveRoles: Array.isArray(object?.effectiveRoles)
        ? object.effectiveRoles.map((e: any) => Role.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UserDetail): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = User.toJSON(message.user);
    }
    if (message.groups?.length) {
      obj.groups = message.groups.map((e) => Group.toJSON(e));
    }
    if (message.directRoles?.length) {
      obj.directRoles = message.directRoles.map((e) => Role.toJSON(e));
    }
    if (message.effectiveRoles?.length) {
      obj.effectiveRoles = message.effectiveRoles.map((e) => Role.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserDetail>, I>>(base?: I): UserDetail {
    return UserDetail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserDetail>, I>>(object: I): UserDetail {
    const message = createBaseUserDetail();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    message.groups = object.groups?.map((e) => Group.fromPartial(e)) || [];
    message.directRoles = object.directRoles?.map((e) => Role.fromPartial(e)) || [];
    message.effectiveRoles = object.effectiveRoles?.map((e) => Role.fromPartial(e)) || [];
    return message;
  },
};

function createBasePermission(): Permission {
  return { id: "", name: "", externalId: "" };
}

export const Permission = {
  encode(message: Permission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.externalId !== "") {
      writer.uint32(26).string(message.externalId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Permission {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermission();
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.externalId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Permission {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      externalId: isSet(object.externalId) ? String(object.externalId) : "",
    };
  },

  toJSON(message: Permission): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.externalId !== "") {
      obj.externalId = message.externalId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Permission>, I>>(base?: I): Permission {
    return Permission.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Permission>, I>>(object: I): Permission {
    const message = createBasePermission();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.externalId = object.externalId ?? "";
    return message;
  },
};

function createBaseRole(): Role {
  return { id: "", name: "" };
}

export const Role = {
  encode(message: Role, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Role {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRole();
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

  fromJSON(object: any): Role {
    return { id: isSet(object.id) ? String(object.id) : "", name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: Role): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Role>, I>>(base?: I): Role {
    return Role.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Role>, I>>(object: I): Role {
    const message = createBaseRole();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseRoleDetail(): RoleDetail {
  return { role: undefined, permissions: [] };
}

export const RoleDetail = {
  encode(message: RoleDetail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.role !== undefined) {
      Role.encode(message.role, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.permissions) {
      Permission.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleDetail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleDetail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.role = Role.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.permissions.push(Permission.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RoleDetail {
    return {
      role: isSet(object.role) ? Role.fromJSON(object.role) : undefined,
      permissions: Array.isArray(object?.permissions) ? object.permissions.map((e: any) => Permission.fromJSON(e)) : [],
    };
  },

  toJSON(message: RoleDetail): unknown {
    const obj: any = {};
    if (message.role !== undefined) {
      obj.role = Role.toJSON(message.role);
    }
    if (message.permissions?.length) {
      obj.permissions = message.permissions.map((e) => Permission.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RoleDetail>, I>>(base?: I): RoleDetail {
    return RoleDetail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RoleDetail>, I>>(object: I): RoleDetail {
    const message = createBaseRoleDetail();
    message.role = (object.role !== undefined && object.role !== null) ? Role.fromPartial(object.role) : undefined;
    message.permissions = object.permissions?.map((e) => Permission.fromPartial(e)) || [];
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

function createBaseGroupDetail(): GroupDetail {
  return { group: undefined, roles: [] };
}

export const GroupDetail = {
  encode(message: GroupDetail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.roles) {
      Role.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupDetail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupDetail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.group = Group.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.roles.push(Role.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GroupDetail {
    return {
      group: isSet(object.group) ? Group.fromJSON(object.group) : undefined,
      roles: Array.isArray(object?.roles) ? object.roles.map((e: any) => Role.fromJSON(e)) : [],
    };
  },

  toJSON(message: GroupDetail): unknown {
    const obj: any = {};
    if (message.group !== undefined) {
      obj.group = Group.toJSON(message.group);
    }
    if (message.roles?.length) {
      obj.roles = message.roles.map((e) => Role.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GroupDetail>, I>>(base?: I): GroupDetail {
    return GroupDetail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GroupDetail>, I>>(object: I): GroupDetail {
    const message = createBaseGroupDetail();
    message.group = (object.group !== undefined && object.group !== null) ? Group.fromPartial(object.group) : undefined;
    message.roles = object.roles?.map((e) => Role.fromPartial(e)) || [];
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

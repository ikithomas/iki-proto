/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { Group, Permission, Role, User, UserDetail } from "../iam";

export const protobufPackage = "adminsvc";

export interface ListPermissionsRequest {
}

export interface ListPermissionsResponse {
  permissions: Permission[];
}

export interface GetPermissionRequest {
  id: string;
}

export interface GetPermissionResponse {
  permission: Permission | undefined;
}

export interface CreatePermissionRequest {
  name: string;
  externalId: string;
}

export interface CreatePermissionResponse {
  permission: Permission | undefined;
}

export interface PatchPermissionRequest {
  id: string;
  name?: string | undefined;
  externalId?: string | undefined;
}

export interface PatchPermissionResponse {
  permission: Permission | undefined;
}

export interface DeletePermissionRequest {
  id: string;
}

export interface DeletePermissionResponse {
}

export interface ListRolesRequest {
}

export interface ListRolesResponse {
  roles: Role[];
}

export interface GetRoleRequest {
  id: string;
}

export interface GetRoleResponse {
  role: Role | undefined;
}

export interface CreateRoleRequest {
  name: string;
}

export interface CreateRoleResponse {
  role: Role | undefined;
}

export interface PatchRoleRequest {
  id: string;
  name?: string | undefined;
}

export interface PatchRoleResponse {
  role: Role | undefined;
}

export interface DeleteRoleRequest {
  id: string;
}

export interface DeleteRoleResponse {
}

export interface SetRolePermissionsRequest {
  roleId: string;
  permissionIds: string[];
}

export interface SetRolePermissionsResponse {
  role: Role | undefined;
}

export interface ListGroupsRequest {
}

export interface ListGroupsResponse {
  groups: Group[];
}

export interface GetGroupRequest {
  id: string;
}

export interface GetGroupResponse {
  group: Group | undefined;
}

export interface CreateGroupRequest {
  name: string;
}

export interface CreateGroupResponse {
  group: Group | undefined;
}

export interface PatchGroupRequest {
  id: string;
  name?: string | undefined;
}

export interface PatchGroupResponse {
  group: Group | undefined;
}

export interface DeleteGroupRequest {
  id: string;
}

export interface DeleteGroupResponse {
}

export interface SetGroupRolesRequest {
  groupId: string;
  roleIds: string[];
}

export interface SetGroupRolesResponse {
  group: Group | undefined;
}

export interface ListUsersRequest {
}

export interface ListUsersResponse {
  users: User[];
}

export interface PatchUserRequest {
  id: string;
  givenName?: string | undefined;
  familyName?: string | undefined;
  email?: string | undefined;
  active?: boolean | undefined;
}

export interface PatchUserResponse {
  user: User | undefined;
}

export interface CreateUserRequest {
  email: string;
  givenName: string;
  familyName: string;
}

export interface CreateUserResponse {
  user: User | undefined;
}

export interface GetUserRequest {
  id: string;
}

export interface GetUserResponse {
  user: UserDetail | undefined;
}

export interface DeleteUserRequest {
  id: string;
}

export interface DeleteUserResponse {
}

export interface ListGroupUsersRequest {
  groupId: string;
}

export interface ListGroupUsersResponse {
  users: User[];
}

export interface AddUserToGroupRequest {
  userId: string;
  groupId: string;
}

export interface AddUserToGroupResponse {
}

export interface RemoveUserFromGroupRequest {
  userId: string;
  groupId: string;
}

export interface RemoveUserFromGroupResponse {
}

export interface SetUserRolesRequest {
  userId: string;
  roleIds: string[];
}

export interface SetUserRolesResponse {
  user: UserDetail | undefined;
}

export interface SetUserGroupsRequest {
  userId: string;
  groupIds: string[];
}

export interface SetUserGroupsResponse {
  user: UserDetail | undefined;
}

function createBaseListPermissionsRequest(): ListPermissionsRequest {
  return {};
}

export const ListPermissionsRequest = {
  encode(_: ListPermissionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListPermissionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPermissionsRequest();
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

  fromJSON(_: any): ListPermissionsRequest {
    return {};
  },

  toJSON(_: ListPermissionsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ListPermissionsRequest>, I>>(base?: I): ListPermissionsRequest {
    return ListPermissionsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListPermissionsRequest>, I>>(_: I): ListPermissionsRequest {
    const message = createBaseListPermissionsRequest();
    return message;
  },
};

function createBaseListPermissionsResponse(): ListPermissionsResponse {
  return { permissions: [] };
}

export const ListPermissionsResponse = {
  encode(message: ListPermissionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.permissions) {
      Permission.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListPermissionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPermissionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): ListPermissionsResponse {
    return {
      permissions: Array.isArray(object?.permissions) ? object.permissions.map((e: any) => Permission.fromJSON(e)) : [],
    };
  },

  toJSON(message: ListPermissionsResponse): unknown {
    const obj: any = {};
    if (message.permissions?.length) {
      obj.permissions = message.permissions.map((e) => Permission.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListPermissionsResponse>, I>>(base?: I): ListPermissionsResponse {
    return ListPermissionsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListPermissionsResponse>, I>>(object: I): ListPermissionsResponse {
    const message = createBaseListPermissionsResponse();
    message.permissions = object.permissions?.map((e) => Permission.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetPermissionRequest(): GetPermissionRequest {
  return { id: "" };
}

export const GetPermissionRequest = {
  encode(message: GetPermissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPermissionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPermissionRequest();
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

  fromJSON(object: any): GetPermissionRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: GetPermissionRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPermissionRequest>, I>>(base?: I): GetPermissionRequest {
    return GetPermissionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetPermissionRequest>, I>>(object: I): GetPermissionRequest {
    const message = createBaseGetPermissionRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetPermissionResponse(): GetPermissionResponse {
  return { permission: undefined };
}

export const GetPermissionResponse = {
  encode(message: GetPermissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.permission !== undefined) {
      Permission.encode(message.permission, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPermissionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPermissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.permission = Permission.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetPermissionResponse {
    return { permission: isSet(object.permission) ? Permission.fromJSON(object.permission) : undefined };
  },

  toJSON(message: GetPermissionResponse): unknown {
    const obj: any = {};
    if (message.permission !== undefined) {
      obj.permission = Permission.toJSON(message.permission);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPermissionResponse>, I>>(base?: I): GetPermissionResponse {
    return GetPermissionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetPermissionResponse>, I>>(object: I): GetPermissionResponse {
    const message = createBaseGetPermissionResponse();
    message.permission = (object.permission !== undefined && object.permission !== null)
      ? Permission.fromPartial(object.permission)
      : undefined;
    return message;
  },
};

function createBaseCreatePermissionRequest(): CreatePermissionRequest {
  return { name: "", externalId: "" };
}

export const CreatePermissionRequest = {
  encode(message: CreatePermissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.externalId !== "") {
      writer.uint32(18).string(message.externalId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePermissionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePermissionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): CreatePermissionRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      externalId: isSet(object.externalId) ? String(object.externalId) : "",
    };
  },

  toJSON(message: CreatePermissionRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.externalId !== "") {
      obj.externalId = message.externalId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePermissionRequest>, I>>(base?: I): CreatePermissionRequest {
    return CreatePermissionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreatePermissionRequest>, I>>(object: I): CreatePermissionRequest {
    const message = createBaseCreatePermissionRequest();
    message.name = object.name ?? "";
    message.externalId = object.externalId ?? "";
    return message;
  },
};

function createBaseCreatePermissionResponse(): CreatePermissionResponse {
  return { permission: undefined };
}

export const CreatePermissionResponse = {
  encode(message: CreatePermissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.permission !== undefined) {
      Permission.encode(message.permission, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePermissionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePermissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.permission = Permission.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreatePermissionResponse {
    return { permission: isSet(object.permission) ? Permission.fromJSON(object.permission) : undefined };
  },

  toJSON(message: CreatePermissionResponse): unknown {
    const obj: any = {};
    if (message.permission !== undefined) {
      obj.permission = Permission.toJSON(message.permission);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePermissionResponse>, I>>(base?: I): CreatePermissionResponse {
    return CreatePermissionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreatePermissionResponse>, I>>(object: I): CreatePermissionResponse {
    const message = createBaseCreatePermissionResponse();
    message.permission = (object.permission !== undefined && object.permission !== null)
      ? Permission.fromPartial(object.permission)
      : undefined;
    return message;
  },
};

function createBasePatchPermissionRequest(): PatchPermissionRequest {
  return { id: "", name: undefined, externalId: undefined };
}

export const PatchPermissionRequest = {
  encode(message: PatchPermissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.externalId !== undefined) {
      writer.uint32(26).string(message.externalId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PatchPermissionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePatchPermissionRequest();
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

  fromJSON(object: any): PatchPermissionRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : undefined,
      externalId: isSet(object.externalId) ? String(object.externalId) : undefined,
    };
  },

  toJSON(message: PatchPermissionRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.externalId !== undefined) {
      obj.externalId = message.externalId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PatchPermissionRequest>, I>>(base?: I): PatchPermissionRequest {
    return PatchPermissionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PatchPermissionRequest>, I>>(object: I): PatchPermissionRequest {
    const message = createBasePatchPermissionRequest();
    message.id = object.id ?? "";
    message.name = object.name ?? undefined;
    message.externalId = object.externalId ?? undefined;
    return message;
  },
};

function createBasePatchPermissionResponse(): PatchPermissionResponse {
  return { permission: undefined };
}

export const PatchPermissionResponse = {
  encode(message: PatchPermissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.permission !== undefined) {
      Permission.encode(message.permission, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PatchPermissionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePatchPermissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.permission = Permission.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PatchPermissionResponse {
    return { permission: isSet(object.permission) ? Permission.fromJSON(object.permission) : undefined };
  },

  toJSON(message: PatchPermissionResponse): unknown {
    const obj: any = {};
    if (message.permission !== undefined) {
      obj.permission = Permission.toJSON(message.permission);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PatchPermissionResponse>, I>>(base?: I): PatchPermissionResponse {
    return PatchPermissionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PatchPermissionResponse>, I>>(object: I): PatchPermissionResponse {
    const message = createBasePatchPermissionResponse();
    message.permission = (object.permission !== undefined && object.permission !== null)
      ? Permission.fromPartial(object.permission)
      : undefined;
    return message;
  },
};

function createBaseDeletePermissionRequest(): DeletePermissionRequest {
  return { id: "" };
}

export const DeletePermissionRequest = {
  encode(message: DeletePermissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeletePermissionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePermissionRequest();
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

  fromJSON(object: any): DeletePermissionRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DeletePermissionRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePermissionRequest>, I>>(base?: I): DeletePermissionRequest {
    return DeletePermissionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeletePermissionRequest>, I>>(object: I): DeletePermissionRequest {
    const message = createBaseDeletePermissionRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeletePermissionResponse(): DeletePermissionResponse {
  return {};
}

export const DeletePermissionResponse = {
  encode(_: DeletePermissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeletePermissionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePermissionResponse();
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

  fromJSON(_: any): DeletePermissionResponse {
    return {};
  },

  toJSON(_: DeletePermissionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePermissionResponse>, I>>(base?: I): DeletePermissionResponse {
    return DeletePermissionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeletePermissionResponse>, I>>(_: I): DeletePermissionResponse {
    const message = createBaseDeletePermissionResponse();
    return message;
  },
};

function createBaseListRolesRequest(): ListRolesRequest {
  return {};
}

export const ListRolesRequest = {
  encode(_: ListRolesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRolesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRolesRequest();
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

  fromJSON(_: any): ListRolesRequest {
    return {};
  },

  toJSON(_: ListRolesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ListRolesRequest>, I>>(base?: I): ListRolesRequest {
    return ListRolesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListRolesRequest>, I>>(_: I): ListRolesRequest {
    const message = createBaseListRolesRequest();
    return message;
  },
};

function createBaseListRolesResponse(): ListRolesResponse {
  return { roles: [] };
}

export const ListRolesResponse = {
  encode(message: ListRolesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.roles) {
      Role.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRolesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRolesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): ListRolesResponse {
    return { roles: Array.isArray(object?.roles) ? object.roles.map((e: any) => Role.fromJSON(e)) : [] };
  },

  toJSON(message: ListRolesResponse): unknown {
    const obj: any = {};
    if (message.roles?.length) {
      obj.roles = message.roles.map((e) => Role.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListRolesResponse>, I>>(base?: I): ListRolesResponse {
    return ListRolesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListRolesResponse>, I>>(object: I): ListRolesResponse {
    const message = createBaseListRolesResponse();
    message.roles = object.roles?.map((e) => Role.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetRoleRequest(): GetRoleRequest {
  return { id: "" };
}

export const GetRoleRequest = {
  encode(message: GetRoleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRoleRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRoleRequest();
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

  fromJSON(object: any): GetRoleRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: GetRoleRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetRoleRequest>, I>>(base?: I): GetRoleRequest {
    return GetRoleRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetRoleRequest>, I>>(object: I): GetRoleRequest {
    const message = createBaseGetRoleRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetRoleResponse(): GetRoleResponse {
  return { role: undefined };
}

export const GetRoleResponse = {
  encode(message: GetRoleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.role !== undefined) {
      Role.encode(message.role, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRoleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRoleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.role = Role.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetRoleResponse {
    return { role: isSet(object.role) ? Role.fromJSON(object.role) : undefined };
  },

  toJSON(message: GetRoleResponse): unknown {
    const obj: any = {};
    if (message.role !== undefined) {
      obj.role = Role.toJSON(message.role);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetRoleResponse>, I>>(base?: I): GetRoleResponse {
    return GetRoleResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetRoleResponse>, I>>(object: I): GetRoleResponse {
    const message = createBaseGetRoleResponse();
    message.role = (object.role !== undefined && object.role !== null) ? Role.fromPartial(object.role) : undefined;
    return message;
  },
};

function createBaseCreateRoleRequest(): CreateRoleRequest {
  return { name: "" };
}

export const CreateRoleRequest = {
  encode(message: CreateRoleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateRoleRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateRoleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): CreateRoleRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: CreateRoleRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateRoleRequest>, I>>(base?: I): CreateRoleRequest {
    return CreateRoleRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateRoleRequest>, I>>(object: I): CreateRoleRequest {
    const message = createBaseCreateRoleRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCreateRoleResponse(): CreateRoleResponse {
  return { role: undefined };
}

export const CreateRoleResponse = {
  encode(message: CreateRoleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.role !== undefined) {
      Role.encode(message.role, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateRoleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateRoleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.role = Role.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateRoleResponse {
    return { role: isSet(object.role) ? Role.fromJSON(object.role) : undefined };
  },

  toJSON(message: CreateRoleResponse): unknown {
    const obj: any = {};
    if (message.role !== undefined) {
      obj.role = Role.toJSON(message.role);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateRoleResponse>, I>>(base?: I): CreateRoleResponse {
    return CreateRoleResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateRoleResponse>, I>>(object: I): CreateRoleResponse {
    const message = createBaseCreateRoleResponse();
    message.role = (object.role !== undefined && object.role !== null) ? Role.fromPartial(object.role) : undefined;
    return message;
  },
};

function createBasePatchRoleRequest(): PatchRoleRequest {
  return { id: "", name: undefined };
}

export const PatchRoleRequest = {
  encode(message: PatchRoleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PatchRoleRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePatchRoleRequest();
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

  fromJSON(object: any): PatchRoleRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : undefined,
    };
  },

  toJSON(message: PatchRoleRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PatchRoleRequest>, I>>(base?: I): PatchRoleRequest {
    return PatchRoleRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PatchRoleRequest>, I>>(object: I): PatchRoleRequest {
    const message = createBasePatchRoleRequest();
    message.id = object.id ?? "";
    message.name = object.name ?? undefined;
    return message;
  },
};

function createBasePatchRoleResponse(): PatchRoleResponse {
  return { role: undefined };
}

export const PatchRoleResponse = {
  encode(message: PatchRoleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.role !== undefined) {
      Role.encode(message.role, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PatchRoleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePatchRoleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.role = Role.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PatchRoleResponse {
    return { role: isSet(object.role) ? Role.fromJSON(object.role) : undefined };
  },

  toJSON(message: PatchRoleResponse): unknown {
    const obj: any = {};
    if (message.role !== undefined) {
      obj.role = Role.toJSON(message.role);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PatchRoleResponse>, I>>(base?: I): PatchRoleResponse {
    return PatchRoleResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PatchRoleResponse>, I>>(object: I): PatchRoleResponse {
    const message = createBasePatchRoleResponse();
    message.role = (object.role !== undefined && object.role !== null) ? Role.fromPartial(object.role) : undefined;
    return message;
  },
};

function createBaseDeleteRoleRequest(): DeleteRoleRequest {
  return { id: "" };
}

export const DeleteRoleRequest = {
  encode(message: DeleteRoleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRoleRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteRoleRequest();
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

  fromJSON(object: any): DeleteRoleRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DeleteRoleRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteRoleRequest>, I>>(base?: I): DeleteRoleRequest {
    return DeleteRoleRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteRoleRequest>, I>>(object: I): DeleteRoleRequest {
    const message = createBaseDeleteRoleRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteRoleResponse(): DeleteRoleResponse {
  return {};
}

export const DeleteRoleResponse = {
  encode(_: DeleteRoleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRoleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteRoleResponse();
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

  fromJSON(_: any): DeleteRoleResponse {
    return {};
  },

  toJSON(_: DeleteRoleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteRoleResponse>, I>>(base?: I): DeleteRoleResponse {
    return DeleteRoleResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteRoleResponse>, I>>(_: I): DeleteRoleResponse {
    const message = createBaseDeleteRoleResponse();
    return message;
  },
};

function createBaseSetRolePermissionsRequest(): SetRolePermissionsRequest {
  return { roleId: "", permissionIds: [] };
}

export const SetRolePermissionsRequest = {
  encode(message: SetRolePermissionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.roleId !== "") {
      writer.uint32(10).string(message.roleId);
    }
    for (const v of message.permissionIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetRolePermissionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetRolePermissionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.roleId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.permissionIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetRolePermissionsRequest {
    return {
      roleId: isSet(object.roleId) ? String(object.roleId) : "",
      permissionIds: Array.isArray(object?.permissionIds) ? object.permissionIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: SetRolePermissionsRequest): unknown {
    const obj: any = {};
    if (message.roleId !== "") {
      obj.roleId = message.roleId;
    }
    if (message.permissionIds?.length) {
      obj.permissionIds = message.permissionIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetRolePermissionsRequest>, I>>(base?: I): SetRolePermissionsRequest {
    return SetRolePermissionsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetRolePermissionsRequest>, I>>(object: I): SetRolePermissionsRequest {
    const message = createBaseSetRolePermissionsRequest();
    message.roleId = object.roleId ?? "";
    message.permissionIds = object.permissionIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseSetRolePermissionsResponse(): SetRolePermissionsResponse {
  return { role: undefined };
}

export const SetRolePermissionsResponse = {
  encode(message: SetRolePermissionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.role !== undefined) {
      Role.encode(message.role, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetRolePermissionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetRolePermissionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.role = Role.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetRolePermissionsResponse {
    return { role: isSet(object.role) ? Role.fromJSON(object.role) : undefined };
  },

  toJSON(message: SetRolePermissionsResponse): unknown {
    const obj: any = {};
    if (message.role !== undefined) {
      obj.role = Role.toJSON(message.role);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetRolePermissionsResponse>, I>>(base?: I): SetRolePermissionsResponse {
    return SetRolePermissionsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetRolePermissionsResponse>, I>>(object: I): SetRolePermissionsResponse {
    const message = createBaseSetRolePermissionsResponse();
    message.role = (object.role !== undefined && object.role !== null) ? Role.fromPartial(object.role) : undefined;
    return message;
  },
};

function createBaseListGroupsRequest(): ListGroupsRequest {
  return {};
}

export const ListGroupsRequest = {
  encode(_: ListGroupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGroupsRequest();
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

  fromJSON(_: any): ListGroupsRequest {
    return {};
  },

  toJSON(_: ListGroupsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ListGroupsRequest>, I>>(base?: I): ListGroupsRequest {
    return ListGroupsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListGroupsRequest>, I>>(_: I): ListGroupsRequest {
    const message = createBaseListGroupsRequest();
    return message;
  },
};

function createBaseListGroupsResponse(): ListGroupsResponse {
  return { groups: [] };
}

export const ListGroupsResponse = {
  encode(message: ListGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groups.push(Group.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListGroupsResponse {
    return { groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromJSON(e)) : [] };
  },

  toJSON(message: ListGroupsResponse): unknown {
    const obj: any = {};
    if (message.groups?.length) {
      obj.groups = message.groups.map((e) => Group.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListGroupsResponse>, I>>(base?: I): ListGroupsResponse {
    return ListGroupsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListGroupsResponse>, I>>(object: I): ListGroupsResponse {
    const message = createBaseListGroupsResponse();
    message.groups = object.groups?.map((e) => Group.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetGroupRequest(): GetGroupRequest {
  return { id: "" };
}

export const GetGroupRequest = {
  encode(message: GetGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupRequest();
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

  fromJSON(object: any): GetGroupRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: GetGroupRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetGroupRequest>, I>>(base?: I): GetGroupRequest {
    return GetGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetGroupRequest>, I>>(object: I): GetGroupRequest {
    const message = createBaseGetGroupRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetGroupResponse(): GetGroupResponse {
  return { group: undefined };
}

export const GetGroupResponse = {
  encode(message: GetGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.group = Group.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetGroupResponse {
    return { group: isSet(object.group) ? Group.fromJSON(object.group) : undefined };
  },

  toJSON(message: GetGroupResponse): unknown {
    const obj: any = {};
    if (message.group !== undefined) {
      obj.group = Group.toJSON(message.group);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetGroupResponse>, I>>(base?: I): GetGroupResponse {
    return GetGroupResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetGroupResponse>, I>>(object: I): GetGroupResponse {
    const message = createBaseGetGroupResponse();
    message.group = (object.group !== undefined && object.group !== null) ? Group.fromPartial(object.group) : undefined;
    return message;
  },
};

function createBaseCreateGroupRequest(): CreateGroupRequest {
  return { name: "" };
}

export const CreateGroupRequest = {
  encode(message: CreateGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): CreateGroupRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: CreateGroupRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateGroupRequest>, I>>(base?: I): CreateGroupRequest {
    return CreateGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateGroupRequest>, I>>(object: I): CreateGroupRequest {
    const message = createBaseCreateGroupRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCreateGroupResponse(): CreateGroupResponse {
  return { group: undefined };
}

export const CreateGroupResponse = {
  encode(message: CreateGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.group = Group.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateGroupResponse {
    return { group: isSet(object.group) ? Group.fromJSON(object.group) : undefined };
  },

  toJSON(message: CreateGroupResponse): unknown {
    const obj: any = {};
    if (message.group !== undefined) {
      obj.group = Group.toJSON(message.group);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateGroupResponse>, I>>(base?: I): CreateGroupResponse {
    return CreateGroupResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateGroupResponse>, I>>(object: I): CreateGroupResponse {
    const message = createBaseCreateGroupResponse();
    message.group = (object.group !== undefined && object.group !== null) ? Group.fromPartial(object.group) : undefined;
    return message;
  },
};

function createBasePatchGroupRequest(): PatchGroupRequest {
  return { id: "", name: undefined };
}

export const PatchGroupRequest = {
  encode(message: PatchGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PatchGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePatchGroupRequest();
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

  fromJSON(object: any): PatchGroupRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : undefined,
    };
  },

  toJSON(message: PatchGroupRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PatchGroupRequest>, I>>(base?: I): PatchGroupRequest {
    return PatchGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PatchGroupRequest>, I>>(object: I): PatchGroupRequest {
    const message = createBasePatchGroupRequest();
    message.id = object.id ?? "";
    message.name = object.name ?? undefined;
    return message;
  },
};

function createBasePatchGroupResponse(): PatchGroupResponse {
  return { group: undefined };
}

export const PatchGroupResponse = {
  encode(message: PatchGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PatchGroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePatchGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.group = Group.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PatchGroupResponse {
    return { group: isSet(object.group) ? Group.fromJSON(object.group) : undefined };
  },

  toJSON(message: PatchGroupResponse): unknown {
    const obj: any = {};
    if (message.group !== undefined) {
      obj.group = Group.toJSON(message.group);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PatchGroupResponse>, I>>(base?: I): PatchGroupResponse {
    return PatchGroupResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PatchGroupResponse>, I>>(object: I): PatchGroupResponse {
    const message = createBasePatchGroupResponse();
    message.group = (object.group !== undefined && object.group !== null) ? Group.fromPartial(object.group) : undefined;
    return message;
  },
};

function createBaseDeleteGroupRequest(): DeleteGroupRequest {
  return { id: "" };
}

export const DeleteGroupRequest = {
  encode(message: DeleteGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteGroupRequest();
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

  fromJSON(object: any): DeleteGroupRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DeleteGroupRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteGroupRequest>, I>>(base?: I): DeleteGroupRequest {
    return DeleteGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteGroupRequest>, I>>(object: I): DeleteGroupRequest {
    const message = createBaseDeleteGroupRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteGroupResponse(): DeleteGroupResponse {
  return {};
}

export const DeleteGroupResponse = {
  encode(_: DeleteGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteGroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteGroupResponse();
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

  fromJSON(_: any): DeleteGroupResponse {
    return {};
  },

  toJSON(_: DeleteGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteGroupResponse>, I>>(base?: I): DeleteGroupResponse {
    return DeleteGroupResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteGroupResponse>, I>>(_: I): DeleteGroupResponse {
    const message = createBaseDeleteGroupResponse();
    return message;
  },
};

function createBaseSetGroupRolesRequest(): SetGroupRolesRequest {
  return { groupId: "", roleIds: [] };
}

export const SetGroupRolesRequest = {
  encode(message: SetGroupRolesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    for (const v of message.roleIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetGroupRolesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupRolesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.roleIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetGroupRolesRequest {
    return {
      groupId: isSet(object.groupId) ? String(object.groupId) : "",
      roleIds: Array.isArray(object?.roleIds) ? object.roleIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: SetGroupRolesRequest): unknown {
    const obj: any = {};
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
    }
    if (message.roleIds?.length) {
      obj.roleIds = message.roleIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetGroupRolesRequest>, I>>(base?: I): SetGroupRolesRequest {
    return SetGroupRolesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetGroupRolesRequest>, I>>(object: I): SetGroupRolesRequest {
    const message = createBaseSetGroupRolesRequest();
    message.groupId = object.groupId ?? "";
    message.roleIds = object.roleIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseSetGroupRolesResponse(): SetGroupRolesResponse {
  return { group: undefined };
}

export const SetGroupRolesResponse = {
  encode(message: SetGroupRolesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetGroupRolesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupRolesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.group = Group.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetGroupRolesResponse {
    return { group: isSet(object.group) ? Group.fromJSON(object.group) : undefined };
  },

  toJSON(message: SetGroupRolesResponse): unknown {
    const obj: any = {};
    if (message.group !== undefined) {
      obj.group = Group.toJSON(message.group);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetGroupRolesResponse>, I>>(base?: I): SetGroupRolesResponse {
    return SetGroupRolesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetGroupRolesResponse>, I>>(object: I): SetGroupRolesResponse {
    const message = createBaseSetGroupRolesResponse();
    message.group = (object.group !== undefined && object.group !== null) ? Group.fromPartial(object.group) : undefined;
    return message;
  },
};

function createBaseListUsersRequest(): ListUsersRequest {
  return {};
}

export const ListUsersRequest = {
  encode(_: ListUsersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUsersRequest();
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

  fromJSON(_: any): ListUsersRequest {
    return {};
  },

  toJSON(_: ListUsersRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ListUsersRequest>, I>>(base?: I): ListUsersRequest {
    return ListUsersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListUsersRequest>, I>>(_: I): ListUsersRequest {
    const message = createBaseListUsersRequest();
    return message;
  },
};

function createBaseListUsersResponse(): ListUsersResponse {
  return { users: [] };
}

export const ListUsersResponse = {
  encode(message: ListUsersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUsersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.users.push(User.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListUsersResponse {
    return { users: Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [] };
  },

  toJSON(message: ListUsersResponse): unknown {
    const obj: any = {};
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListUsersResponse>, I>>(base?: I): ListUsersResponse {
    return ListUsersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListUsersResponse>, I>>(object: I): ListUsersResponse {
    const message = createBaseListUsersResponse();
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

function createBasePatchUserRequest(): PatchUserRequest {
  return { id: "", givenName: undefined, familyName: undefined, email: undefined, active: undefined };
}

export const PatchUserRequest = {
  encode(message: PatchUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.givenName !== undefined) {
      writer.uint32(18).string(message.givenName);
    }
    if (message.familyName !== undefined) {
      writer.uint32(26).string(message.familyName);
    }
    if (message.email !== undefined) {
      writer.uint32(34).string(message.email);
    }
    if (message.active !== undefined) {
      writer.uint32(40).bool(message.active);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PatchUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePatchUserRequest();
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

          message.givenName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.familyName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.email = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
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

  fromJSON(object: any): PatchUserRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      givenName: isSet(object.givenName) ? String(object.givenName) : undefined,
      familyName: isSet(object.familyName) ? String(object.familyName) : undefined,
      email: isSet(object.email) ? String(object.email) : undefined,
      active: isSet(object.active) ? Boolean(object.active) : undefined,
    };
  },

  toJSON(message: PatchUserRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.givenName !== undefined) {
      obj.givenName = message.givenName;
    }
    if (message.familyName !== undefined) {
      obj.familyName = message.familyName;
    }
    if (message.email !== undefined) {
      obj.email = message.email;
    }
    if (message.active !== undefined) {
      obj.active = message.active;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PatchUserRequest>, I>>(base?: I): PatchUserRequest {
    return PatchUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PatchUserRequest>, I>>(object: I): PatchUserRequest {
    const message = createBasePatchUserRequest();
    message.id = object.id ?? "";
    message.givenName = object.givenName ?? undefined;
    message.familyName = object.familyName ?? undefined;
    message.email = object.email ?? undefined;
    message.active = object.active ?? undefined;
    return message;
  },
};

function createBasePatchUserResponse(): PatchUserResponse {
  return { user: undefined };
}

export const PatchUserResponse = {
  encode(message: PatchUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PatchUserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePatchUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PatchUserResponse {
    return { user: isSet(object.user) ? User.fromJSON(object.user) : undefined };
  },

  toJSON(message: PatchUserResponse): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = User.toJSON(message.user);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PatchUserResponse>, I>>(base?: I): PatchUserResponse {
    return PatchUserResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PatchUserResponse>, I>>(object: I): PatchUserResponse {
    const message = createBasePatchUserResponse();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseCreateUserRequest(): CreateUserRequest {
  return { email: "", givenName: "", familyName: "" };
}

export const CreateUserRequest = {
  encode(message: CreateUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.givenName !== "") {
      writer.uint32(18).string(message.givenName);
    }
    if (message.familyName !== "") {
      writer.uint32(26).string(message.familyName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.email = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.givenName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.familyName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateUserRequest {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      givenName: isSet(object.givenName) ? String(object.givenName) : "",
      familyName: isSet(object.familyName) ? String(object.familyName) : "",
    };
  },

  toJSON(message: CreateUserRequest): unknown {
    const obj: any = {};
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.givenName !== "") {
      obj.givenName = message.givenName;
    }
    if (message.familyName !== "") {
      obj.familyName = message.familyName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateUserRequest>, I>>(base?: I): CreateUserRequest {
    return CreateUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateUserRequest>, I>>(object: I): CreateUserRequest {
    const message = createBaseCreateUserRequest();
    message.email = object.email ?? "";
    message.givenName = object.givenName ?? "";
    message.familyName = object.familyName ?? "";
    return message;
  },
};

function createBaseCreateUserResponse(): CreateUserResponse {
  return { user: undefined };
}

export const CreateUserResponse = {
  encode(message: CreateUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateUserResponse {
    return { user: isSet(object.user) ? User.fromJSON(object.user) : undefined };
  },

  toJSON(message: CreateUserResponse): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = User.toJSON(message.user);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateUserResponse>, I>>(base?: I): CreateUserResponse {
    return CreateUserResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateUserResponse>, I>>(object: I): CreateUserResponse {
    const message = createBaseCreateUserResponse();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseGetUserRequest(): GetUserRequest {
  return { id: "" };
}

export const GetUserRequest = {
  encode(message: GetUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserRequest();
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

  fromJSON(object: any): GetUserRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: GetUserRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserRequest>, I>>(base?: I): GetUserRequest {
    return GetUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUserRequest>, I>>(object: I): GetUserRequest {
    const message = createBaseGetUserRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetUserResponse(): GetUserResponse {
  return { user: undefined };
}

export const GetUserResponse = {
  encode(message: GetUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      UserDetail.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = UserDetail.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserResponse {
    return { user: isSet(object.user) ? UserDetail.fromJSON(object.user) : undefined };
  },

  toJSON(message: GetUserResponse): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = UserDetail.toJSON(message.user);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserResponse>, I>>(base?: I): GetUserResponse {
    return GetUserResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUserResponse>, I>>(object: I): GetUserResponse {
    const message = createBaseGetUserResponse();
    message.user = (object.user !== undefined && object.user !== null)
      ? UserDetail.fromPartial(object.user)
      : undefined;
    return message;
  },
};

function createBaseDeleteUserRequest(): DeleteUserRequest {
  return { id: "" };
}

export const DeleteUserRequest = {
  encode(message: DeleteUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteUserRequest();
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

  fromJSON(object: any): DeleteUserRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DeleteUserRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteUserRequest>, I>>(base?: I): DeleteUserRequest {
    return DeleteUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteUserRequest>, I>>(object: I): DeleteUserRequest {
    const message = createBaseDeleteUserRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteUserResponse(): DeleteUserResponse {
  return {};
}

export const DeleteUserResponse = {
  encode(_: DeleteUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteUserResponse();
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

  fromJSON(_: any): DeleteUserResponse {
    return {};
  },

  toJSON(_: DeleteUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteUserResponse>, I>>(base?: I): DeleteUserResponse {
    return DeleteUserResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteUserResponse>, I>>(_: I): DeleteUserResponse {
    const message = createBaseDeleteUserResponse();
    return message;
  },
};

function createBaseListGroupUsersRequest(): ListGroupUsersRequest {
  return { groupId: "" };
}

export const ListGroupUsersRequest = {
  encode(message: ListGroupUsersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupUsersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGroupUsersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListGroupUsersRequest {
    return { groupId: isSet(object.groupId) ? String(object.groupId) : "" };
  },

  toJSON(message: ListGroupUsersRequest): unknown {
    const obj: any = {};
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListGroupUsersRequest>, I>>(base?: I): ListGroupUsersRequest {
    return ListGroupUsersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListGroupUsersRequest>, I>>(object: I): ListGroupUsersRequest {
    const message = createBaseListGroupUsersRequest();
    message.groupId = object.groupId ?? "";
    return message;
  },
};

function createBaseListGroupUsersResponse(): ListGroupUsersResponse {
  return { users: [] };
}

export const ListGroupUsersResponse = {
  encode(message: ListGroupUsersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupUsersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGroupUsersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.users.push(User.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListGroupUsersResponse {
    return { users: Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [] };
  },

  toJSON(message: ListGroupUsersResponse): unknown {
    const obj: any = {};
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListGroupUsersResponse>, I>>(base?: I): ListGroupUsersResponse {
    return ListGroupUsersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListGroupUsersResponse>, I>>(object: I): ListGroupUsersResponse {
    const message = createBaseListGroupUsersResponse();
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAddUserToGroupRequest(): AddUserToGroupRequest {
  return { userId: "", groupId: "" };
}

export const AddUserToGroupRequest = {
  encode(message: AddUserToGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.groupId !== "") {
      writer.uint32(18).string(message.groupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddUserToGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddUserToGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.groupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddUserToGroupRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      groupId: isSet(object.groupId) ? String(object.groupId) : "",
    };
  },

  toJSON(message: AddUserToGroupRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddUserToGroupRequest>, I>>(base?: I): AddUserToGroupRequest {
    return AddUserToGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddUserToGroupRequest>, I>>(object: I): AddUserToGroupRequest {
    const message = createBaseAddUserToGroupRequest();
    message.userId = object.userId ?? "";
    message.groupId = object.groupId ?? "";
    return message;
  },
};

function createBaseAddUserToGroupResponse(): AddUserToGroupResponse {
  return {};
}

export const AddUserToGroupResponse = {
  encode(_: AddUserToGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddUserToGroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddUserToGroupResponse();
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

  fromJSON(_: any): AddUserToGroupResponse {
    return {};
  },

  toJSON(_: AddUserToGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AddUserToGroupResponse>, I>>(base?: I): AddUserToGroupResponse {
    return AddUserToGroupResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddUserToGroupResponse>, I>>(_: I): AddUserToGroupResponse {
    const message = createBaseAddUserToGroupResponse();
    return message;
  },
};

function createBaseRemoveUserFromGroupRequest(): RemoveUserFromGroupRequest {
  return { userId: "", groupId: "" };
}

export const RemoveUserFromGroupRequest = {
  encode(message: RemoveUserFromGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.groupId !== "") {
      writer.uint32(18).string(message.groupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveUserFromGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveUserFromGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.groupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveUserFromGroupRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      groupId: isSet(object.groupId) ? String(object.groupId) : "",
    };
  },

  toJSON(message: RemoveUserFromGroupRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveUserFromGroupRequest>, I>>(base?: I): RemoveUserFromGroupRequest {
    return RemoveUserFromGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveUserFromGroupRequest>, I>>(object: I): RemoveUserFromGroupRequest {
    const message = createBaseRemoveUserFromGroupRequest();
    message.userId = object.userId ?? "";
    message.groupId = object.groupId ?? "";
    return message;
  },
};

function createBaseRemoveUserFromGroupResponse(): RemoveUserFromGroupResponse {
  return {};
}

export const RemoveUserFromGroupResponse = {
  encode(_: RemoveUserFromGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveUserFromGroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveUserFromGroupResponse();
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

  fromJSON(_: any): RemoveUserFromGroupResponse {
    return {};
  },

  toJSON(_: RemoveUserFromGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveUserFromGroupResponse>, I>>(base?: I): RemoveUserFromGroupResponse {
    return RemoveUserFromGroupResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveUserFromGroupResponse>, I>>(_: I): RemoveUserFromGroupResponse {
    const message = createBaseRemoveUserFromGroupResponse();
    return message;
  },
};

function createBaseSetUserRolesRequest(): SetUserRolesRequest {
  return { userId: "", roleIds: [] };
}

export const SetUserRolesRequest = {
  encode(message: SetUserRolesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    for (const v of message.roleIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetUserRolesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetUserRolesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.roleIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetUserRolesRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      roleIds: Array.isArray(object?.roleIds) ? object.roleIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: SetUserRolesRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.roleIds?.length) {
      obj.roleIds = message.roleIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetUserRolesRequest>, I>>(base?: I): SetUserRolesRequest {
    return SetUserRolesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetUserRolesRequest>, I>>(object: I): SetUserRolesRequest {
    const message = createBaseSetUserRolesRequest();
    message.userId = object.userId ?? "";
    message.roleIds = object.roleIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseSetUserRolesResponse(): SetUserRolesResponse {
  return { user: undefined };
}

export const SetUserRolesResponse = {
  encode(message: SetUserRolesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      UserDetail.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetUserRolesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetUserRolesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = UserDetail.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetUserRolesResponse {
    return { user: isSet(object.user) ? UserDetail.fromJSON(object.user) : undefined };
  },

  toJSON(message: SetUserRolesResponse): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = UserDetail.toJSON(message.user);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetUserRolesResponse>, I>>(base?: I): SetUserRolesResponse {
    return SetUserRolesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetUserRolesResponse>, I>>(object: I): SetUserRolesResponse {
    const message = createBaseSetUserRolesResponse();
    message.user = (object.user !== undefined && object.user !== null)
      ? UserDetail.fromPartial(object.user)
      : undefined;
    return message;
  },
};

function createBaseSetUserGroupsRequest(): SetUserGroupsRequest {
  return { userId: "", groupIds: [] };
}

export const SetUserGroupsRequest = {
  encode(message: SetUserGroupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    for (const v of message.groupIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetUserGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetUserGroupsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.groupIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetUserGroupsRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      groupIds: Array.isArray(object?.groupIds) ? object.groupIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: SetUserGroupsRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.groupIds?.length) {
      obj.groupIds = message.groupIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetUserGroupsRequest>, I>>(base?: I): SetUserGroupsRequest {
    return SetUserGroupsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetUserGroupsRequest>, I>>(object: I): SetUserGroupsRequest {
    const message = createBaseSetUserGroupsRequest();
    message.userId = object.userId ?? "";
    message.groupIds = object.groupIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseSetUserGroupsResponse(): SetUserGroupsResponse {
  return { user: undefined };
}

export const SetUserGroupsResponse = {
  encode(message: SetUserGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      UserDetail.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetUserGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetUserGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = UserDetail.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetUserGroupsResponse {
    return { user: isSet(object.user) ? UserDetail.fromJSON(object.user) : undefined };
  },

  toJSON(message: SetUserGroupsResponse): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = UserDetail.toJSON(message.user);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetUserGroupsResponse>, I>>(base?: I): SetUserGroupsResponse {
    return SetUserGroupsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetUserGroupsResponse>, I>>(object: I): SetUserGroupsResponse {
    const message = createBaseSetUserGroupsResponse();
    message.user = (object.user !== undefined && object.user !== null)
      ? UserDetail.fromPartial(object.user)
      : undefined;
    return message;
  },
};

export interface AdminSvc {
  /** User management */
  ListUsers(request: DeepPartial<ListUsersRequest>, metadata?: grpc.Metadata): Promise<ListUsersResponse>;
  GetUser(request: DeepPartial<GetUserRequest>, metadata?: grpc.Metadata): Promise<GetUserResponse>;
  PatchUser(request: DeepPartial<PatchUserRequest>, metadata?: grpc.Metadata): Promise<PatchUserResponse>;
  CreateUser(request: DeepPartial<CreateUserRequest>, metadata?: grpc.Metadata): Promise<CreateUserResponse>;
  DeleteUser(request: DeepPartial<DeleteUserRequest>, metadata?: grpc.Metadata): Promise<DeleteUserResponse>;
  SetUserRoles(request: DeepPartial<SetUserRolesRequest>, metadata?: grpc.Metadata): Promise<SetUserRolesResponse>;
  SetUserGroups(request: DeepPartial<SetUserGroupsRequest>, metadata?: grpc.Metadata): Promise<SetUserGroupsResponse>;
  /** Permission management */
  ListPermissions(
    request: DeepPartial<ListPermissionsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<ListPermissionsResponse>;
  GetPermission(request: DeepPartial<GetPermissionRequest>, metadata?: grpc.Metadata): Promise<GetPermissionResponse>;
  CreatePermission(
    request: DeepPartial<CreatePermissionRequest>,
    metadata?: grpc.Metadata,
  ): Promise<CreatePermissionResponse>;
  PatchPermission(
    request: DeepPartial<PatchPermissionRequest>,
    metadata?: grpc.Metadata,
  ): Promise<PatchPermissionResponse>;
  DeletePermission(
    request: DeepPartial<DeletePermissionRequest>,
    metadata?: grpc.Metadata,
  ): Promise<DeletePermissionResponse>;
  /** Group management */
  ListGroups(request: DeepPartial<ListGroupsRequest>, metadata?: grpc.Metadata): Promise<ListGroupsResponse>;
  GetGroup(request: DeepPartial<GetGroupRequest>, metadata?: grpc.Metadata): Promise<GetGroupResponse>;
  CreateGroup(request: DeepPartial<CreateGroupRequest>, metadata?: grpc.Metadata): Promise<CreateGroupResponse>;
  PatchGroup(request: DeepPartial<PatchGroupRequest>, metadata?: grpc.Metadata): Promise<PatchGroupResponse>;
  DeleteGroup(request: DeepPartial<DeleteGroupRequest>, metadata?: grpc.Metadata): Promise<DeleteGroupResponse>;
  /** Role management */
  ListRoles(request: DeepPartial<ListRolesRequest>, metadata?: grpc.Metadata): Promise<ListRolesResponse>;
  GetRole(request: DeepPartial<GetRoleRequest>, metadata?: grpc.Metadata): Promise<GetRoleResponse>;
  CreateRole(request: DeepPartial<CreateRoleRequest>, metadata?: grpc.Metadata): Promise<CreateRoleResponse>;
  PatchRole(request: DeepPartial<PatchRoleRequest>, metadata?: grpc.Metadata): Promise<PatchRoleResponse>;
  DeleteRole(request: DeepPartial<DeleteRoleRequest>, metadata?: grpc.Metadata): Promise<DeleteRoleResponse>;
  /** Role ↔ Permission bindings */
  SetRolePermissions(
    request: DeepPartial<SetRolePermissionsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<SetRolePermissionsResponse>;
  /** Group ↔ Role bindings */
  SetGroupRoles(request: DeepPartial<SetGroupRolesRequest>, metadata?: grpc.Metadata): Promise<SetGroupRolesResponse>;
  /** User ↔ Group bindings */
  AddUserToGroup(
    request: DeepPartial<AddUserToGroupRequest>,
    metadata?: grpc.Metadata,
  ): Promise<AddUserToGroupResponse>;
  RemoveUserFromGroup(
    request: DeepPartial<RemoveUserFromGroupRequest>,
    metadata?: grpc.Metadata,
  ): Promise<RemoveUserFromGroupResponse>;
  ListGroupUsers(
    request: DeepPartial<ListGroupUsersRequest>,
    metadata?: grpc.Metadata,
  ): Promise<ListGroupUsersResponse>;
}

export class AdminSvcClientImpl implements AdminSvc {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ListUsers = this.ListUsers.bind(this);
    this.GetUser = this.GetUser.bind(this);
    this.PatchUser = this.PatchUser.bind(this);
    this.CreateUser = this.CreateUser.bind(this);
    this.DeleteUser = this.DeleteUser.bind(this);
    this.SetUserRoles = this.SetUserRoles.bind(this);
    this.SetUserGroups = this.SetUserGroups.bind(this);
    this.ListPermissions = this.ListPermissions.bind(this);
    this.GetPermission = this.GetPermission.bind(this);
    this.CreatePermission = this.CreatePermission.bind(this);
    this.PatchPermission = this.PatchPermission.bind(this);
    this.DeletePermission = this.DeletePermission.bind(this);
    this.ListGroups = this.ListGroups.bind(this);
    this.GetGroup = this.GetGroup.bind(this);
    this.CreateGroup = this.CreateGroup.bind(this);
    this.PatchGroup = this.PatchGroup.bind(this);
    this.DeleteGroup = this.DeleteGroup.bind(this);
    this.ListRoles = this.ListRoles.bind(this);
    this.GetRole = this.GetRole.bind(this);
    this.CreateRole = this.CreateRole.bind(this);
    this.PatchRole = this.PatchRole.bind(this);
    this.DeleteRole = this.DeleteRole.bind(this);
    this.SetRolePermissions = this.SetRolePermissions.bind(this);
    this.SetGroupRoles = this.SetGroupRoles.bind(this);
    this.AddUserToGroup = this.AddUserToGroup.bind(this);
    this.RemoveUserFromGroup = this.RemoveUserFromGroup.bind(this);
    this.ListGroupUsers = this.ListGroupUsers.bind(this);
  }

  ListUsers(request: DeepPartial<ListUsersRequest>, metadata?: grpc.Metadata): Promise<ListUsersResponse> {
    return this.rpc.unary(AdminSvcListUsersDesc, ListUsersRequest.fromPartial(request), metadata);
  }

  GetUser(request: DeepPartial<GetUserRequest>, metadata?: grpc.Metadata): Promise<GetUserResponse> {
    return this.rpc.unary(AdminSvcGetUserDesc, GetUserRequest.fromPartial(request), metadata);
  }

  PatchUser(request: DeepPartial<PatchUserRequest>, metadata?: grpc.Metadata): Promise<PatchUserResponse> {
    return this.rpc.unary(AdminSvcPatchUserDesc, PatchUserRequest.fromPartial(request), metadata);
  }

  CreateUser(request: DeepPartial<CreateUserRequest>, metadata?: grpc.Metadata): Promise<CreateUserResponse> {
    return this.rpc.unary(AdminSvcCreateUserDesc, CreateUserRequest.fromPartial(request), metadata);
  }

  DeleteUser(request: DeepPartial<DeleteUserRequest>, metadata?: grpc.Metadata): Promise<DeleteUserResponse> {
    return this.rpc.unary(AdminSvcDeleteUserDesc, DeleteUserRequest.fromPartial(request), metadata);
  }

  SetUserRoles(request: DeepPartial<SetUserRolesRequest>, metadata?: grpc.Metadata): Promise<SetUserRolesResponse> {
    return this.rpc.unary(AdminSvcSetUserRolesDesc, SetUserRolesRequest.fromPartial(request), metadata);
  }

  SetUserGroups(request: DeepPartial<SetUserGroupsRequest>, metadata?: grpc.Metadata): Promise<SetUserGroupsResponse> {
    return this.rpc.unary(AdminSvcSetUserGroupsDesc, SetUserGroupsRequest.fromPartial(request), metadata);
  }

  ListPermissions(
    request: DeepPartial<ListPermissionsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<ListPermissionsResponse> {
    return this.rpc.unary(AdminSvcListPermissionsDesc, ListPermissionsRequest.fromPartial(request), metadata);
  }

  GetPermission(request: DeepPartial<GetPermissionRequest>, metadata?: grpc.Metadata): Promise<GetPermissionResponse> {
    return this.rpc.unary(AdminSvcGetPermissionDesc, GetPermissionRequest.fromPartial(request), metadata);
  }

  CreatePermission(
    request: DeepPartial<CreatePermissionRequest>,
    metadata?: grpc.Metadata,
  ): Promise<CreatePermissionResponse> {
    return this.rpc.unary(AdminSvcCreatePermissionDesc, CreatePermissionRequest.fromPartial(request), metadata);
  }

  PatchPermission(
    request: DeepPartial<PatchPermissionRequest>,
    metadata?: grpc.Metadata,
  ): Promise<PatchPermissionResponse> {
    return this.rpc.unary(AdminSvcPatchPermissionDesc, PatchPermissionRequest.fromPartial(request), metadata);
  }

  DeletePermission(
    request: DeepPartial<DeletePermissionRequest>,
    metadata?: grpc.Metadata,
  ): Promise<DeletePermissionResponse> {
    return this.rpc.unary(AdminSvcDeletePermissionDesc, DeletePermissionRequest.fromPartial(request), metadata);
  }

  ListGroups(request: DeepPartial<ListGroupsRequest>, metadata?: grpc.Metadata): Promise<ListGroupsResponse> {
    return this.rpc.unary(AdminSvcListGroupsDesc, ListGroupsRequest.fromPartial(request), metadata);
  }

  GetGroup(request: DeepPartial<GetGroupRequest>, metadata?: grpc.Metadata): Promise<GetGroupResponse> {
    return this.rpc.unary(AdminSvcGetGroupDesc, GetGroupRequest.fromPartial(request), metadata);
  }

  CreateGroup(request: DeepPartial<CreateGroupRequest>, metadata?: grpc.Metadata): Promise<CreateGroupResponse> {
    return this.rpc.unary(AdminSvcCreateGroupDesc, CreateGroupRequest.fromPartial(request), metadata);
  }

  PatchGroup(request: DeepPartial<PatchGroupRequest>, metadata?: grpc.Metadata): Promise<PatchGroupResponse> {
    return this.rpc.unary(AdminSvcPatchGroupDesc, PatchGroupRequest.fromPartial(request), metadata);
  }

  DeleteGroup(request: DeepPartial<DeleteGroupRequest>, metadata?: grpc.Metadata): Promise<DeleteGroupResponse> {
    return this.rpc.unary(AdminSvcDeleteGroupDesc, DeleteGroupRequest.fromPartial(request), metadata);
  }

  ListRoles(request: DeepPartial<ListRolesRequest>, metadata?: grpc.Metadata): Promise<ListRolesResponse> {
    return this.rpc.unary(AdminSvcListRolesDesc, ListRolesRequest.fromPartial(request), metadata);
  }

  GetRole(request: DeepPartial<GetRoleRequest>, metadata?: grpc.Metadata): Promise<GetRoleResponse> {
    return this.rpc.unary(AdminSvcGetRoleDesc, GetRoleRequest.fromPartial(request), metadata);
  }

  CreateRole(request: DeepPartial<CreateRoleRequest>, metadata?: grpc.Metadata): Promise<CreateRoleResponse> {
    return this.rpc.unary(AdminSvcCreateRoleDesc, CreateRoleRequest.fromPartial(request), metadata);
  }

  PatchRole(request: DeepPartial<PatchRoleRequest>, metadata?: grpc.Metadata): Promise<PatchRoleResponse> {
    return this.rpc.unary(AdminSvcPatchRoleDesc, PatchRoleRequest.fromPartial(request), metadata);
  }

  DeleteRole(request: DeepPartial<DeleteRoleRequest>, metadata?: grpc.Metadata): Promise<DeleteRoleResponse> {
    return this.rpc.unary(AdminSvcDeleteRoleDesc, DeleteRoleRequest.fromPartial(request), metadata);
  }

  SetRolePermissions(
    request: DeepPartial<SetRolePermissionsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<SetRolePermissionsResponse> {
    return this.rpc.unary(AdminSvcSetRolePermissionsDesc, SetRolePermissionsRequest.fromPartial(request), metadata);
  }

  SetGroupRoles(request: DeepPartial<SetGroupRolesRequest>, metadata?: grpc.Metadata): Promise<SetGroupRolesResponse> {
    return this.rpc.unary(AdminSvcSetGroupRolesDesc, SetGroupRolesRequest.fromPartial(request), metadata);
  }

  AddUserToGroup(
    request: DeepPartial<AddUserToGroupRequest>,
    metadata?: grpc.Metadata,
  ): Promise<AddUserToGroupResponse> {
    return this.rpc.unary(AdminSvcAddUserToGroupDesc, AddUserToGroupRequest.fromPartial(request), metadata);
  }

  RemoveUserFromGroup(
    request: DeepPartial<RemoveUserFromGroupRequest>,
    metadata?: grpc.Metadata,
  ): Promise<RemoveUserFromGroupResponse> {
    return this.rpc.unary(AdminSvcRemoveUserFromGroupDesc, RemoveUserFromGroupRequest.fromPartial(request), metadata);
  }

  ListGroupUsers(
    request: DeepPartial<ListGroupUsersRequest>,
    metadata?: grpc.Metadata,
  ): Promise<ListGroupUsersResponse> {
    return this.rpc.unary(AdminSvcListGroupUsersDesc, ListGroupUsersRequest.fromPartial(request), metadata);
  }
}

export const AdminSvcDesc = { serviceName: "adminsvc.AdminSvc" };

export const AdminSvcListUsersDesc: UnaryMethodDefinitionish = {
  methodName: "ListUsers",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ListUsersRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ListUsersResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminSvcGetUserDesc: UnaryMethodDefinitionish = {
  methodName: "GetUser",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetUserRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetUserResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminSvcPatchUserDesc: UnaryMethodDefinitionish = {
  methodName: "PatchUser",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return PatchUserRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = PatchUserResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminSvcCreateUserDesc: UnaryMethodDefinitionish = {
  methodName: "CreateUser",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CreateUserRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = CreateUserResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminSvcDeleteUserDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteUser",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DeleteUserRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = DeleteUserResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminSvcSetUserRolesDesc: UnaryMethodDefinitionish = {
  methodName: "SetUserRoles",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SetUserRolesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = SetUserRolesResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminSvcSetUserGroupsDesc: UnaryMethodDefinitionish = {
  methodName: "SetUserGroups",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SetUserGroupsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = SetUserGroupsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminSvcListPermissionsDesc: UnaryMethodDefinitionish = {
  methodName: "ListPermissions",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ListPermissionsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ListPermissionsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminSvcGetPermissionDesc: UnaryMethodDefinitionish = {
  methodName: "GetPermission",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetPermissionRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetPermissionResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminSvcCreatePermissionDesc: UnaryMethodDefinitionish = {
  methodName: "CreatePermission",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CreatePermissionRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = CreatePermissionResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminSvcPatchPermissionDesc: UnaryMethodDefinitionish = {
  methodName: "PatchPermission",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return PatchPermissionRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = PatchPermissionResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminSvcDeletePermissionDesc: UnaryMethodDefinitionish = {
  methodName: "DeletePermission",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DeletePermissionRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = DeletePermissionResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminSvcListGroupsDesc: UnaryMethodDefinitionish = {
  methodName: "ListGroups",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ListGroupsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ListGroupsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminSvcGetGroupDesc: UnaryMethodDefinitionish = {
  methodName: "GetGroup",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetGroupRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetGroupResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminSvcCreateGroupDesc: UnaryMethodDefinitionish = {
  methodName: "CreateGroup",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CreateGroupRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = CreateGroupResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminSvcPatchGroupDesc: UnaryMethodDefinitionish = {
  methodName: "PatchGroup",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return PatchGroupRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = PatchGroupResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminSvcDeleteGroupDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteGroup",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DeleteGroupRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = DeleteGroupResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminSvcListRolesDesc: UnaryMethodDefinitionish = {
  methodName: "ListRoles",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ListRolesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ListRolesResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminSvcGetRoleDesc: UnaryMethodDefinitionish = {
  methodName: "GetRole",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetRoleRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetRoleResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminSvcCreateRoleDesc: UnaryMethodDefinitionish = {
  methodName: "CreateRole",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CreateRoleRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = CreateRoleResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminSvcPatchRoleDesc: UnaryMethodDefinitionish = {
  methodName: "PatchRole",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return PatchRoleRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = PatchRoleResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminSvcDeleteRoleDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteRole",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DeleteRoleRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = DeleteRoleResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminSvcSetRolePermissionsDesc: UnaryMethodDefinitionish = {
  methodName: "SetRolePermissions",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SetRolePermissionsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = SetRolePermissionsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminSvcSetGroupRolesDesc: UnaryMethodDefinitionish = {
  methodName: "SetGroupRoles",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SetGroupRolesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = SetGroupRolesResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminSvcAddUserToGroupDesc: UnaryMethodDefinitionish = {
  methodName: "AddUserToGroup",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AddUserToGroupRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = AddUserToGroupResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminSvcRemoveUserFromGroupDesc: UnaryMethodDefinitionish = {
  methodName: "RemoveUserFromGroup",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return RemoveUserFromGroupRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = RemoveUserFromGroupResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AdminSvcListGroupUsersDesc: UnaryMethodDefinitionish = {
  methodName: "ListGroupUsers",
  service: AdminSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ListGroupUsersRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ListGroupUsersResponse.decode(data);
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export class GrpcWebError extends tsProtoGlobalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}

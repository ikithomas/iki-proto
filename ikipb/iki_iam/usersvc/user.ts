/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { User } from "../iam";

export const protobufPackage = "usersvc";

export interface ProfileRequest {
}

export interface ProfileResponse {
  user: User | undefined;
}

export interface CheckEmailRequest {
  email: string;
}

export interface CheckEmailResponse {
  exist: boolean;
}

export interface GetRequest {
  id: string;
}

export interface GetResponse {
  user: User | undefined;
}

export interface ListRequest {
}

export interface ListResponse {
  users: User[];
}

export interface DeleteRequest {
  id: string;
}

export interface DeleteResponse {
}

export interface UpdateGroupRequest {
  userId: string;
  groupIds: string[];
}

export interface UpdateGroupResponse {
}

export interface ActivateUserRequest {
  id: string;
}

export interface ActivateUserResponse {
}

export interface DeactivateUserRequest {
  id: string;
}

export interface DeactivateUserResponse {
}

function createBaseProfileRequest(): ProfileRequest {
  return {};
}

export const ProfileRequest = {
  encode(_: ProfileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProfileRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfileRequest();
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

  fromJSON(_: any): ProfileRequest {
    return {};
  },

  toJSON(_: ProfileRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfileRequest>, I>>(base?: I): ProfileRequest {
    return ProfileRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProfileRequest>, I>>(_: I): ProfileRequest {
    const message = createBaseProfileRequest();
    return message;
  },
};

function createBaseProfileResponse(): ProfileResponse {
  return { user: undefined };
}

export const ProfileResponse = {
  encode(message: ProfileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProfileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfileResponse();
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

  fromJSON(object: any): ProfileResponse {
    return { user: isSet(object.user) ? User.fromJSON(object.user) : undefined };
  },

  toJSON(message: ProfileResponse): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = User.toJSON(message.user);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfileResponse>, I>>(base?: I): ProfileResponse {
    return ProfileResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProfileResponse>, I>>(object: I): ProfileResponse {
    const message = createBaseProfileResponse();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseCheckEmailRequest(): CheckEmailRequest {
  return { email: "" };
}

export const CheckEmailRequest = {
  encode(message: CheckEmailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckEmailRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckEmailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): CheckEmailRequest {
    return { email: isSet(object.email) ? String(object.email) : "" };
  },

  toJSON(message: CheckEmailRequest): unknown {
    const obj: any = {};
    if (message.email !== "") {
      obj.email = message.email;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CheckEmailRequest>, I>>(base?: I): CheckEmailRequest {
    return CheckEmailRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CheckEmailRequest>, I>>(object: I): CheckEmailRequest {
    const message = createBaseCheckEmailRequest();
    message.email = object.email ?? "";
    return message;
  },
};

function createBaseCheckEmailResponse(): CheckEmailResponse {
  return { exist: false };
}

export const CheckEmailResponse = {
  encode(message: CheckEmailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exist === true) {
      writer.uint32(8).bool(message.exist);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckEmailResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckEmailResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.exist = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckEmailResponse {
    return { exist: isSet(object.exist) ? Boolean(object.exist) : false };
  },

  toJSON(message: CheckEmailResponse): unknown {
    const obj: any = {};
    if (message.exist === true) {
      obj.exist = message.exist;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CheckEmailResponse>, I>>(base?: I): CheckEmailResponse {
    return CheckEmailResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CheckEmailResponse>, I>>(object: I): CheckEmailResponse {
    const message = createBaseCheckEmailResponse();
    message.exist = object.exist ?? false;
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
  return { user: undefined };
}

export const GetResponse = {
  encode(message: GetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
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

  fromJSON(object: any): GetResponse {
    return { user: isSet(object.user) ? User.fromJSON(object.user) : undefined };
  },

  toJSON(message: GetResponse): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = User.toJSON(message.user);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetResponse>, I>>(base?: I): GetResponse {
    return GetResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetResponse>, I>>(object: I): GetResponse {
    const message = createBaseGetResponse();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseListRequest(): ListRequest {
  return {};
}

export const ListRequest = {
  encode(_: ListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRequest();
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

  fromJSON(_: any): ListRequest {
    return {};
  },

  toJSON(_: ListRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ListRequest>, I>>(base?: I): ListRequest {
    return ListRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListRequest>, I>>(_: I): ListRequest {
    const message = createBaseListRequest();
    return message;
  },
};

function createBaseListResponse(): ListResponse {
  return { users: [] };
}

export const ListResponse = {
  encode(message: ListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
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

  fromJSON(object: any): ListResponse {
    return { users: Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [] };
  },

  toJSON(message: ListResponse): unknown {
    const obj: any = {};
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListResponse>, I>>(base?: I): ListResponse {
    return ListResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListResponse>, I>>(object: I): ListResponse {
    const message = createBaseListResponse();
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDeleteRequest(): DeleteRequest {
  return { id: "" };
}

export const DeleteRequest = {
  encode(message: DeleteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteRequest();
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

  fromJSON(object: any): DeleteRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DeleteRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteRequest>, I>>(base?: I): DeleteRequest {
    return DeleteRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteRequest>, I>>(object: I): DeleteRequest {
    const message = createBaseDeleteRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteResponse(): DeleteResponse {
  return {};
}

export const DeleteResponse = {
  encode(_: DeleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteResponse();
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

  fromJSON(_: any): DeleteResponse {
    return {};
  },

  toJSON(_: DeleteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteResponse>, I>>(base?: I): DeleteResponse {
    return DeleteResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteResponse>, I>>(_: I): DeleteResponse {
    const message = createBaseDeleteResponse();
    return message;
  },
};

function createBaseUpdateGroupRequest(): UpdateGroupRequest {
  return { userId: "", groupIds: [] };
}

export const UpdateGroupRequest = {
  encode(message: UpdateGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    for (const v of message.groupIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGroupRequest();
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

  fromJSON(object: any): UpdateGroupRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      groupIds: Array.isArray(object?.groupIds) ? object.groupIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: UpdateGroupRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.groupIds?.length) {
      obj.groupIds = message.groupIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateGroupRequest>, I>>(base?: I): UpdateGroupRequest {
    return UpdateGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateGroupRequest>, I>>(object: I): UpdateGroupRequest {
    const message = createBaseUpdateGroupRequest();
    message.userId = object.userId ?? "";
    message.groupIds = object.groupIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseUpdateGroupResponse(): UpdateGroupResponse {
  return {};
}

export const UpdateGroupResponse = {
  encode(_: UpdateGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGroupResponse();
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

  fromJSON(_: any): UpdateGroupResponse {
    return {};
  },

  toJSON(_: UpdateGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateGroupResponse>, I>>(base?: I): UpdateGroupResponse {
    return UpdateGroupResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateGroupResponse>, I>>(_: I): UpdateGroupResponse {
    const message = createBaseUpdateGroupResponse();
    return message;
  },
};

function createBaseActivateUserRequest(): ActivateUserRequest {
  return { id: "" };
}

export const ActivateUserRequest = {
  encode(message: ActivateUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivateUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateUserRequest();
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

  fromJSON(object: any): ActivateUserRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: ActivateUserRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActivateUserRequest>, I>>(base?: I): ActivateUserRequest {
    return ActivateUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActivateUserRequest>, I>>(object: I): ActivateUserRequest {
    const message = createBaseActivateUserRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseActivateUserResponse(): ActivateUserResponse {
  return {};
}

export const ActivateUserResponse = {
  encode(_: ActivateUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivateUserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateUserResponse();
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

  fromJSON(_: any): ActivateUserResponse {
    return {};
  },

  toJSON(_: ActivateUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ActivateUserResponse>, I>>(base?: I): ActivateUserResponse {
    return ActivateUserResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActivateUserResponse>, I>>(_: I): ActivateUserResponse {
    const message = createBaseActivateUserResponse();
    return message;
  },
};

function createBaseDeactivateUserRequest(): DeactivateUserRequest {
  return { id: "" };
}

export const DeactivateUserRequest = {
  encode(message: DeactivateUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeactivateUserRequest();
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

  fromJSON(object: any): DeactivateUserRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DeactivateUserRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeactivateUserRequest>, I>>(base?: I): DeactivateUserRequest {
    return DeactivateUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeactivateUserRequest>, I>>(object: I): DeactivateUserRequest {
    const message = createBaseDeactivateUserRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeactivateUserResponse(): DeactivateUserResponse {
  return {};
}

export const DeactivateUserResponse = {
  encode(_: DeactivateUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateUserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeactivateUserResponse();
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

  fromJSON(_: any): DeactivateUserResponse {
    return {};
  },

  toJSON(_: DeactivateUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DeactivateUserResponse>, I>>(base?: I): DeactivateUserResponse {
    return DeactivateUserResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeactivateUserResponse>, I>>(_: I): DeactivateUserResponse {
    const message = createBaseDeactivateUserResponse();
    return message;
  },
};

export interface UserSvc {
  /** Profile returns the user profile associated with the access token associated with the request. */
  Profile(request: DeepPartial<ProfileRequest>, metadata?: grpc.Metadata): Promise<ProfileResponse>;
  /** CheckEmail checks if the account is already taken. */
  CheckEmail(request: DeepPartial<CheckEmailRequest>, metadata?: grpc.Metadata): Promise<CheckEmailResponse>;
  /** List lists all users. */
  List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
  /** Get gets the details of a specific user. */
  Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
  /** Delete delete a user. */
  Delete(request: DeepPartial<DeleteRequest>, metadata?: grpc.Metadata): Promise<DeleteResponse>;
  /** UpdateGroups updates the groups of the user. */
  UpdateGroups(request: DeepPartial<UpdateGroupRequest>, metadata?: grpc.Metadata): Promise<UpdateGroupResponse>;
  ActivateUser(request: DeepPartial<ActivateUserRequest>, metadata?: grpc.Metadata): Promise<ActivateUserResponse>;
  DeactivateUser(
    request: DeepPartial<DeactivateUserRequest>,
    metadata?: grpc.Metadata,
  ): Promise<DeactivateUserResponse>;
}

export class UserSvcClientImpl implements UserSvc {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Profile = this.Profile.bind(this);
    this.CheckEmail = this.CheckEmail.bind(this);
    this.List = this.List.bind(this);
    this.Get = this.Get.bind(this);
    this.Delete = this.Delete.bind(this);
    this.UpdateGroups = this.UpdateGroups.bind(this);
    this.ActivateUser = this.ActivateUser.bind(this);
    this.DeactivateUser = this.DeactivateUser.bind(this);
  }

  Profile(request: DeepPartial<ProfileRequest>, metadata?: grpc.Metadata): Promise<ProfileResponse> {
    return this.rpc.unary(UserSvcProfileDesc, ProfileRequest.fromPartial(request), metadata);
  }

  CheckEmail(request: DeepPartial<CheckEmailRequest>, metadata?: grpc.Metadata): Promise<CheckEmailResponse> {
    return this.rpc.unary(UserSvcCheckEmailDesc, CheckEmailRequest.fromPartial(request), metadata);
  }

  List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse> {
    return this.rpc.unary(UserSvcListDesc, ListRequest.fromPartial(request), metadata);
  }

  Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse> {
    return this.rpc.unary(UserSvcGetDesc, GetRequest.fromPartial(request), metadata);
  }

  Delete(request: DeepPartial<DeleteRequest>, metadata?: grpc.Metadata): Promise<DeleteResponse> {
    return this.rpc.unary(UserSvcDeleteDesc, DeleteRequest.fromPartial(request), metadata);
  }

  UpdateGroups(request: DeepPartial<UpdateGroupRequest>, metadata?: grpc.Metadata): Promise<UpdateGroupResponse> {
    return this.rpc.unary(UserSvcUpdateGroupsDesc, UpdateGroupRequest.fromPartial(request), metadata);
  }

  ActivateUser(request: DeepPartial<ActivateUserRequest>, metadata?: grpc.Metadata): Promise<ActivateUserResponse> {
    return this.rpc.unary(UserSvcActivateUserDesc, ActivateUserRequest.fromPartial(request), metadata);
  }

  DeactivateUser(
    request: DeepPartial<DeactivateUserRequest>,
    metadata?: grpc.Metadata,
  ): Promise<DeactivateUserResponse> {
    return this.rpc.unary(UserSvcDeactivateUserDesc, DeactivateUserRequest.fromPartial(request), metadata);
  }
}

export const UserSvcDesc = { serviceName: "usersvc.UserSvc" };

export const UserSvcProfileDesc: UnaryMethodDefinitionish = {
  methodName: "Profile",
  service: UserSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ProfileRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ProfileResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const UserSvcCheckEmailDesc: UnaryMethodDefinitionish = {
  methodName: "CheckEmail",
  service: UserSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CheckEmailRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = CheckEmailResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const UserSvcListDesc: UnaryMethodDefinitionish = {
  methodName: "List",
  service: UserSvcDesc,
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

export const UserSvcGetDesc: UnaryMethodDefinitionish = {
  methodName: "Get",
  service: UserSvcDesc,
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

export const UserSvcDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: UserSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DeleteRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = DeleteResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const UserSvcUpdateGroupsDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateGroups",
  service: UserSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return UpdateGroupRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = UpdateGroupResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const UserSvcActivateUserDesc: UnaryMethodDefinitionish = {
  methodName: "ActivateUser",
  service: UserSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ActivateUserRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ActivateUserResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const UserSvcDeactivateUserDesc: UnaryMethodDefinitionish = {
  methodName: "DeactivateUser",
  service: UserSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DeactivateUserRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = DeactivateUserResponse.decode(data);
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

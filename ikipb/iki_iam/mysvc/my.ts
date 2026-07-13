/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { Passkey, User, UserDetail } from "../iam";

export const protobufPackage = "mysvc";

export interface GetMyProfileRequest {
}

export interface GetMyProfileResponse {
  user: UserDetail | undefined;
}

export interface PatchMyProfileRequest {
  givenName?: string | undefined;
  familyName?: string | undefined;
}

export interface PatchMyProfileResponse {
  user: User | undefined;
}

export interface ListMyPasskeysRequest {
}

export interface ListMyPasskeysResponse {
  passkeys: Passkey[];
}

export interface BeginPasskeyRegistrationRequest {
}

export interface BeginPasskeyRegistrationResponse {
  optionsJson: string;
  sessionId: string;
}

export interface FinishPasskeyRegistrationRequest {
  sessionId: string;
  credentialJson: string;
  name: string;
}

export interface FinishPasskeyRegistrationResponse {
  passkey: Passkey | undefined;
}

export interface DeleteMyPasskeyRequest {
  id: string;
}

export interface DeleteMyPasskeyResponse {
}

function createBaseGetMyProfileRequest(): GetMyProfileRequest {
  return {};
}

export const GetMyProfileRequest = {
  encode(_: GetMyProfileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMyProfileRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMyProfileRequest();
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

  fromJSON(_: any): GetMyProfileRequest {
    return {};
  },

  toJSON(_: GetMyProfileRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMyProfileRequest>, I>>(base?: I): GetMyProfileRequest {
    return GetMyProfileRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetMyProfileRequest>, I>>(_: I): GetMyProfileRequest {
    const message = createBaseGetMyProfileRequest();
    return message;
  },
};

function createBaseGetMyProfileResponse(): GetMyProfileResponse {
  return { user: undefined };
}

export const GetMyProfileResponse = {
  encode(message: GetMyProfileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      UserDetail.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMyProfileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMyProfileResponse();
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

  fromJSON(object: any): GetMyProfileResponse {
    return { user: isSet(object.user) ? UserDetail.fromJSON(object.user) : undefined };
  },

  toJSON(message: GetMyProfileResponse): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = UserDetail.toJSON(message.user);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMyProfileResponse>, I>>(base?: I): GetMyProfileResponse {
    return GetMyProfileResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetMyProfileResponse>, I>>(object: I): GetMyProfileResponse {
    const message = createBaseGetMyProfileResponse();
    message.user = (object.user !== undefined && object.user !== null)
      ? UserDetail.fromPartial(object.user)
      : undefined;
    return message;
  },
};

function createBasePatchMyProfileRequest(): PatchMyProfileRequest {
  return { givenName: undefined, familyName: undefined };
}

export const PatchMyProfileRequest = {
  encode(message: PatchMyProfileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.givenName !== undefined) {
      writer.uint32(10).string(message.givenName);
    }
    if (message.familyName !== undefined) {
      writer.uint32(18).string(message.familyName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PatchMyProfileRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePatchMyProfileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.givenName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): PatchMyProfileRequest {
    return {
      givenName: isSet(object.givenName) ? String(object.givenName) : undefined,
      familyName: isSet(object.familyName) ? String(object.familyName) : undefined,
    };
  },

  toJSON(message: PatchMyProfileRequest): unknown {
    const obj: any = {};
    if (message.givenName !== undefined) {
      obj.givenName = message.givenName;
    }
    if (message.familyName !== undefined) {
      obj.familyName = message.familyName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PatchMyProfileRequest>, I>>(base?: I): PatchMyProfileRequest {
    return PatchMyProfileRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PatchMyProfileRequest>, I>>(object: I): PatchMyProfileRequest {
    const message = createBasePatchMyProfileRequest();
    message.givenName = object.givenName ?? undefined;
    message.familyName = object.familyName ?? undefined;
    return message;
  },
};

function createBasePatchMyProfileResponse(): PatchMyProfileResponse {
  return { user: undefined };
}

export const PatchMyProfileResponse = {
  encode(message: PatchMyProfileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PatchMyProfileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePatchMyProfileResponse();
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

  fromJSON(object: any): PatchMyProfileResponse {
    return { user: isSet(object.user) ? User.fromJSON(object.user) : undefined };
  },

  toJSON(message: PatchMyProfileResponse): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = User.toJSON(message.user);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PatchMyProfileResponse>, I>>(base?: I): PatchMyProfileResponse {
    return PatchMyProfileResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PatchMyProfileResponse>, I>>(object: I): PatchMyProfileResponse {
    const message = createBasePatchMyProfileResponse();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseListMyPasskeysRequest(): ListMyPasskeysRequest {
  return {};
}

export const ListMyPasskeysRequest = {
  encode(_: ListMyPasskeysRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMyPasskeysRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMyPasskeysRequest();
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

  fromJSON(_: any): ListMyPasskeysRequest {
    return {};
  },

  toJSON(_: ListMyPasskeysRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ListMyPasskeysRequest>, I>>(base?: I): ListMyPasskeysRequest {
    return ListMyPasskeysRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListMyPasskeysRequest>, I>>(_: I): ListMyPasskeysRequest {
    const message = createBaseListMyPasskeysRequest();
    return message;
  },
};

function createBaseListMyPasskeysResponse(): ListMyPasskeysResponse {
  return { passkeys: [] };
}

export const ListMyPasskeysResponse = {
  encode(message: ListMyPasskeysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.passkeys) {
      Passkey.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMyPasskeysResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMyPasskeysResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.passkeys.push(Passkey.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListMyPasskeysResponse {
    return { passkeys: Array.isArray(object?.passkeys) ? object.passkeys.map((e: any) => Passkey.fromJSON(e)) : [] };
  },

  toJSON(message: ListMyPasskeysResponse): unknown {
    const obj: any = {};
    if (message.passkeys?.length) {
      obj.passkeys = message.passkeys.map((e) => Passkey.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListMyPasskeysResponse>, I>>(base?: I): ListMyPasskeysResponse {
    return ListMyPasskeysResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListMyPasskeysResponse>, I>>(object: I): ListMyPasskeysResponse {
    const message = createBaseListMyPasskeysResponse();
    message.passkeys = object.passkeys?.map((e) => Passkey.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBeginPasskeyRegistrationRequest(): BeginPasskeyRegistrationRequest {
  return {};
}

export const BeginPasskeyRegistrationRequest = {
  encode(_: BeginPasskeyRegistrationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BeginPasskeyRegistrationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBeginPasskeyRegistrationRequest();
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

  fromJSON(_: any): BeginPasskeyRegistrationRequest {
    return {};
  },

  toJSON(_: BeginPasskeyRegistrationRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<BeginPasskeyRegistrationRequest>, I>>(base?: I): BeginPasskeyRegistrationRequest {
    return BeginPasskeyRegistrationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BeginPasskeyRegistrationRequest>, I>>(_: I): BeginPasskeyRegistrationRequest {
    const message = createBaseBeginPasskeyRegistrationRequest();
    return message;
  },
};

function createBaseBeginPasskeyRegistrationResponse(): BeginPasskeyRegistrationResponse {
  return { optionsJson: "", sessionId: "" };
}

export const BeginPasskeyRegistrationResponse = {
  encode(message: BeginPasskeyRegistrationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.optionsJson !== "") {
      writer.uint32(10).string(message.optionsJson);
    }
    if (message.sessionId !== "") {
      writer.uint32(18).string(message.sessionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BeginPasskeyRegistrationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBeginPasskeyRegistrationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.optionsJson = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sessionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BeginPasskeyRegistrationResponse {
    return {
      optionsJson: isSet(object.optionsJson) ? String(object.optionsJson) : "",
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
    };
  },

  toJSON(message: BeginPasskeyRegistrationResponse): unknown {
    const obj: any = {};
    if (message.optionsJson !== "") {
      obj.optionsJson = message.optionsJson;
    }
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BeginPasskeyRegistrationResponse>, I>>(
    base?: I,
  ): BeginPasskeyRegistrationResponse {
    return BeginPasskeyRegistrationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BeginPasskeyRegistrationResponse>, I>>(
    object: I,
  ): BeginPasskeyRegistrationResponse {
    const message = createBaseBeginPasskeyRegistrationResponse();
    message.optionsJson = object.optionsJson ?? "";
    message.sessionId = object.sessionId ?? "";
    return message;
  },
};

function createBaseFinishPasskeyRegistrationRequest(): FinishPasskeyRegistrationRequest {
  return { sessionId: "", credentialJson: "", name: "" };
}

export const FinishPasskeyRegistrationRequest = {
  encode(message: FinishPasskeyRegistrationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.credentialJson !== "") {
      writer.uint32(18).string(message.credentialJson);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinishPasskeyRegistrationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinishPasskeyRegistrationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.credentialJson = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): FinishPasskeyRegistrationRequest {
    return {
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
      credentialJson: isSet(object.credentialJson) ? String(object.credentialJson) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: FinishPasskeyRegistrationRequest): unknown {
    const obj: any = {};
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.credentialJson !== "") {
      obj.credentialJson = message.credentialJson;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FinishPasskeyRegistrationRequest>, I>>(
    base?: I,
  ): FinishPasskeyRegistrationRequest {
    return FinishPasskeyRegistrationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FinishPasskeyRegistrationRequest>, I>>(
    object: I,
  ): FinishPasskeyRegistrationRequest {
    const message = createBaseFinishPasskeyRegistrationRequest();
    message.sessionId = object.sessionId ?? "";
    message.credentialJson = object.credentialJson ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseFinishPasskeyRegistrationResponse(): FinishPasskeyRegistrationResponse {
  return { passkey: undefined };
}

export const FinishPasskeyRegistrationResponse = {
  encode(message: FinishPasskeyRegistrationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.passkey !== undefined) {
      Passkey.encode(message.passkey, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinishPasskeyRegistrationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinishPasskeyRegistrationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.passkey = Passkey.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FinishPasskeyRegistrationResponse {
    return { passkey: isSet(object.passkey) ? Passkey.fromJSON(object.passkey) : undefined };
  },

  toJSON(message: FinishPasskeyRegistrationResponse): unknown {
    const obj: any = {};
    if (message.passkey !== undefined) {
      obj.passkey = Passkey.toJSON(message.passkey);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FinishPasskeyRegistrationResponse>, I>>(
    base?: I,
  ): FinishPasskeyRegistrationResponse {
    return FinishPasskeyRegistrationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FinishPasskeyRegistrationResponse>, I>>(
    object: I,
  ): FinishPasskeyRegistrationResponse {
    const message = createBaseFinishPasskeyRegistrationResponse();
    message.passkey = (object.passkey !== undefined && object.passkey !== null)
      ? Passkey.fromPartial(object.passkey)
      : undefined;
    return message;
  },
};

function createBaseDeleteMyPasskeyRequest(): DeleteMyPasskeyRequest {
  return { id: "" };
}

export const DeleteMyPasskeyRequest = {
  encode(message: DeleteMyPasskeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMyPasskeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteMyPasskeyRequest();
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

  fromJSON(object: any): DeleteMyPasskeyRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DeleteMyPasskeyRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteMyPasskeyRequest>, I>>(base?: I): DeleteMyPasskeyRequest {
    return DeleteMyPasskeyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteMyPasskeyRequest>, I>>(object: I): DeleteMyPasskeyRequest {
    const message = createBaseDeleteMyPasskeyRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteMyPasskeyResponse(): DeleteMyPasskeyResponse {
  return {};
}

export const DeleteMyPasskeyResponse = {
  encode(_: DeleteMyPasskeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMyPasskeyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteMyPasskeyResponse();
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

  fromJSON(_: any): DeleteMyPasskeyResponse {
    return {};
  },

  toJSON(_: DeleteMyPasskeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteMyPasskeyResponse>, I>>(base?: I): DeleteMyPasskeyResponse {
    return DeleteMyPasskeyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteMyPasskeyResponse>, I>>(_: I): DeleteMyPasskeyResponse {
    const message = createBaseDeleteMyPasskeyResponse();
    return message;
  },
};

export interface MySvc {
  /** Profile */
  GetMyProfile(request: DeepPartial<GetMyProfileRequest>, metadata?: grpc.Metadata): Promise<GetMyProfileResponse>;
  PatchMyProfile(
    request: DeepPartial<PatchMyProfileRequest>,
    metadata?: grpc.Metadata,
  ): Promise<PatchMyProfileResponse>;
  /** Passkeys */
  ListMyPasskeys(
    request: DeepPartial<ListMyPasskeysRequest>,
    metadata?: grpc.Metadata,
  ): Promise<ListMyPasskeysResponse>;
  BeginPasskeyRegistration(
    request: DeepPartial<BeginPasskeyRegistrationRequest>,
    metadata?: grpc.Metadata,
  ): Promise<BeginPasskeyRegistrationResponse>;
  FinishPasskeyRegistration(
    request: DeepPartial<FinishPasskeyRegistrationRequest>,
    metadata?: grpc.Metadata,
  ): Promise<FinishPasskeyRegistrationResponse>;
  DeleteMyPasskey(
    request: DeepPartial<DeleteMyPasskeyRequest>,
    metadata?: grpc.Metadata,
  ): Promise<DeleteMyPasskeyResponse>;
}

export class MySvcClientImpl implements MySvc {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetMyProfile = this.GetMyProfile.bind(this);
    this.PatchMyProfile = this.PatchMyProfile.bind(this);
    this.ListMyPasskeys = this.ListMyPasskeys.bind(this);
    this.BeginPasskeyRegistration = this.BeginPasskeyRegistration.bind(this);
    this.FinishPasskeyRegistration = this.FinishPasskeyRegistration.bind(this);
    this.DeleteMyPasskey = this.DeleteMyPasskey.bind(this);
  }

  GetMyProfile(request: DeepPartial<GetMyProfileRequest>, metadata?: grpc.Metadata): Promise<GetMyProfileResponse> {
    return this.rpc.unary(MySvcGetMyProfileDesc, GetMyProfileRequest.fromPartial(request), metadata);
  }

  PatchMyProfile(
    request: DeepPartial<PatchMyProfileRequest>,
    metadata?: grpc.Metadata,
  ): Promise<PatchMyProfileResponse> {
    return this.rpc.unary(MySvcPatchMyProfileDesc, PatchMyProfileRequest.fromPartial(request), metadata);
  }

  ListMyPasskeys(
    request: DeepPartial<ListMyPasskeysRequest>,
    metadata?: grpc.Metadata,
  ): Promise<ListMyPasskeysResponse> {
    return this.rpc.unary(MySvcListMyPasskeysDesc, ListMyPasskeysRequest.fromPartial(request), metadata);
  }

  BeginPasskeyRegistration(
    request: DeepPartial<BeginPasskeyRegistrationRequest>,
    metadata?: grpc.Metadata,
  ): Promise<BeginPasskeyRegistrationResponse> {
    return this.rpc.unary(
      MySvcBeginPasskeyRegistrationDesc,
      BeginPasskeyRegistrationRequest.fromPartial(request),
      metadata,
    );
  }

  FinishPasskeyRegistration(
    request: DeepPartial<FinishPasskeyRegistrationRequest>,
    metadata?: grpc.Metadata,
  ): Promise<FinishPasskeyRegistrationResponse> {
    return this.rpc.unary(
      MySvcFinishPasskeyRegistrationDesc,
      FinishPasskeyRegistrationRequest.fromPartial(request),
      metadata,
    );
  }

  DeleteMyPasskey(
    request: DeepPartial<DeleteMyPasskeyRequest>,
    metadata?: grpc.Metadata,
  ): Promise<DeleteMyPasskeyResponse> {
    return this.rpc.unary(MySvcDeleteMyPasskeyDesc, DeleteMyPasskeyRequest.fromPartial(request), metadata);
  }
}

export const MySvcDesc = { serviceName: "mysvc.MySvc" };

export const MySvcGetMyProfileDesc: UnaryMethodDefinitionish = {
  methodName: "GetMyProfile",
  service: MySvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetMyProfileRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetMyProfileResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MySvcPatchMyProfileDesc: UnaryMethodDefinitionish = {
  methodName: "PatchMyProfile",
  service: MySvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return PatchMyProfileRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = PatchMyProfileResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MySvcListMyPasskeysDesc: UnaryMethodDefinitionish = {
  methodName: "ListMyPasskeys",
  service: MySvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ListMyPasskeysRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ListMyPasskeysResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MySvcBeginPasskeyRegistrationDesc: UnaryMethodDefinitionish = {
  methodName: "BeginPasskeyRegistration",
  service: MySvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BeginPasskeyRegistrationRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = BeginPasskeyRegistrationResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MySvcFinishPasskeyRegistrationDesc: UnaryMethodDefinitionish = {
  methodName: "FinishPasskeyRegistration",
  service: MySvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return FinishPasskeyRegistrationRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = FinishPasskeyRegistrationResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MySvcDeleteMyPasskeyDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteMyPasskey",
  service: MySvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DeleteMyPasskeyRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = DeleteMyPasskeyResponse.decode(data);
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

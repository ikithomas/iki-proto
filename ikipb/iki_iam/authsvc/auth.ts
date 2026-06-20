/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { User } from "../iam";

export const protobufPackage = "authsvc";

export interface GoogleLoginRequest {
  idToken: string;
}

export interface GoogleLoginResponse {
  accessToken: string;
  refreshToken: string;
  user: User | undefined;
}

export interface ServiceLoginRequest {
  clientId: string;
  clientSecret: string;
}

export interface ServiceLoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface SignoutRequest {
}

export interface SignoutResponse {
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
}

export interface FinishPasskeyRegistrationResponse {
}

export interface BeginPasskeyLoginRequest {
  email: string;
}

export interface BeginPasskeyLoginResponse {
  optionsJson: string;
  sessionId: string;
}

export interface FinishPasskeyLoginRequest {
  sessionId: string;
  credentialJson: string;
}

export interface FinishPasskeyLoginResponse {
  accessToken: string;
  refreshToken: string;
  user: User | undefined;
}

export interface Passkey {
  id: string;
  ownerId: string;
  ownerName: string;
  identifier: string;
  createdAt: number;
  lastUsedAt?: number | undefined;
}

export interface ListPasskeysRequest {
  userId?: string | undefined;
}

export interface ListPasskeysResponse {
  passkeys: Passkey[];
}

export interface DeletePasskeyRequest {
  id: string;
}

export interface DeletePasskeyResponse {
}

function createBaseGoogleLoginRequest(): GoogleLoginRequest {
  return { idToken: "" };
}

export const GoogleLoginRequest = {
  encode(message: GoogleLoginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.idToken !== "") {
      writer.uint32(10).string(message.idToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GoogleLoginRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGoogleLoginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.idToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GoogleLoginRequest {
    return { idToken: isSet(object.idToken) ? String(object.idToken) : "" };
  },

  toJSON(message: GoogleLoginRequest): unknown {
    const obj: any = {};
    if (message.idToken !== "") {
      obj.idToken = message.idToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GoogleLoginRequest>, I>>(base?: I): GoogleLoginRequest {
    return GoogleLoginRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GoogleLoginRequest>, I>>(object: I): GoogleLoginRequest {
    const message = createBaseGoogleLoginRequest();
    message.idToken = object.idToken ?? "";
    return message;
  },
};

function createBaseGoogleLoginResponse(): GoogleLoginResponse {
  return { accessToken: "", refreshToken: "", user: undefined };
}

export const GoogleLoginResponse = {
  encode(message: GoogleLoginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    if (message.refreshToken !== "") {
      writer.uint32(18).string(message.refreshToken);
    }
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GoogleLoginResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGoogleLoginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessToken = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.refreshToken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): GoogleLoginResponse {
    return {
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
      refreshToken: isSet(object.refreshToken) ? String(object.refreshToken) : "",
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
    };
  },

  toJSON(message: GoogleLoginResponse): unknown {
    const obj: any = {};
    if (message.accessToken !== "") {
      obj.accessToken = message.accessToken;
    }
    if (message.refreshToken !== "") {
      obj.refreshToken = message.refreshToken;
    }
    if (message.user !== undefined) {
      obj.user = User.toJSON(message.user);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GoogleLoginResponse>, I>>(base?: I): GoogleLoginResponse {
    return GoogleLoginResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GoogleLoginResponse>, I>>(object: I): GoogleLoginResponse {
    const message = createBaseGoogleLoginResponse();
    message.accessToken = object.accessToken ?? "";
    message.refreshToken = object.refreshToken ?? "";
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseServiceLoginRequest(): ServiceLoginRequest {
  return { clientId: "", clientSecret: "" };
}

export const ServiceLoginRequest = {
  encode(message: ServiceLoginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientSecret !== "") {
      writer.uint32(18).string(message.clientSecret);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceLoginRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceLoginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clientId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.clientSecret = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServiceLoginRequest {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      clientSecret: isSet(object.clientSecret) ? String(object.clientSecret) : "",
    };
  },

  toJSON(message: ServiceLoginRequest): unknown {
    const obj: any = {};
    if (message.clientId !== "") {
      obj.clientId = message.clientId;
    }
    if (message.clientSecret !== "") {
      obj.clientSecret = message.clientSecret;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServiceLoginRequest>, I>>(base?: I): ServiceLoginRequest {
    return ServiceLoginRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServiceLoginRequest>, I>>(object: I): ServiceLoginRequest {
    const message = createBaseServiceLoginRequest();
    message.clientId = object.clientId ?? "";
    message.clientSecret = object.clientSecret ?? "";
    return message;
  },
};

function createBaseServiceLoginResponse(): ServiceLoginResponse {
  return { accessToken: "", refreshToken: "" };
}

export const ServiceLoginResponse = {
  encode(message: ServiceLoginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    if (message.refreshToken !== "") {
      writer.uint32(18).string(message.refreshToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceLoginResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceLoginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessToken = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.refreshToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServiceLoginResponse {
    return {
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
      refreshToken: isSet(object.refreshToken) ? String(object.refreshToken) : "",
    };
  },

  toJSON(message: ServiceLoginResponse): unknown {
    const obj: any = {};
    if (message.accessToken !== "") {
      obj.accessToken = message.accessToken;
    }
    if (message.refreshToken !== "") {
      obj.refreshToken = message.refreshToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServiceLoginResponse>, I>>(base?: I): ServiceLoginResponse {
    return ServiceLoginResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServiceLoginResponse>, I>>(object: I): ServiceLoginResponse {
    const message = createBaseServiceLoginResponse();
    message.accessToken = object.accessToken ?? "";
    message.refreshToken = object.refreshToken ?? "";
    return message;
  },
};

function createBaseSignoutRequest(): SignoutRequest {
  return {};
}

export const SignoutRequest = {
  encode(_: SignoutRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignoutRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignoutRequest();
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

  fromJSON(_: any): SignoutRequest {
    return {};
  },

  toJSON(_: SignoutRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SignoutRequest>, I>>(base?: I): SignoutRequest {
    return SignoutRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SignoutRequest>, I>>(_: I): SignoutRequest {
    const message = createBaseSignoutRequest();
    return message;
  },
};

function createBaseSignoutResponse(): SignoutResponse {
  return {};
}

export const SignoutResponse = {
  encode(_: SignoutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignoutResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignoutResponse();
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

  fromJSON(_: any): SignoutResponse {
    return {};
  },

  toJSON(_: SignoutResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SignoutResponse>, I>>(base?: I): SignoutResponse {
    return SignoutResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SignoutResponse>, I>>(_: I): SignoutResponse {
    const message = createBaseSignoutResponse();
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
  return { sessionId: "", credentialJson: "" };
}

export const FinishPasskeyRegistrationRequest = {
  encode(message: FinishPasskeyRegistrationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.credentialJson !== "") {
      writer.uint32(18).string(message.credentialJson);
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
    return message;
  },
};

function createBaseFinishPasskeyRegistrationResponse(): FinishPasskeyRegistrationResponse {
  return {};
}

export const FinishPasskeyRegistrationResponse = {
  encode(_: FinishPasskeyRegistrationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinishPasskeyRegistrationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinishPasskeyRegistrationResponse();
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

  fromJSON(_: any): FinishPasskeyRegistrationResponse {
    return {};
  },

  toJSON(_: FinishPasskeyRegistrationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<FinishPasskeyRegistrationResponse>, I>>(
    base?: I,
  ): FinishPasskeyRegistrationResponse {
    return FinishPasskeyRegistrationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FinishPasskeyRegistrationResponse>, I>>(
    _: I,
  ): FinishPasskeyRegistrationResponse {
    const message = createBaseFinishPasskeyRegistrationResponse();
    return message;
  },
};

function createBaseBeginPasskeyLoginRequest(): BeginPasskeyLoginRequest {
  return { email: "" };
}

export const BeginPasskeyLoginRequest = {
  encode(message: BeginPasskeyLoginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BeginPasskeyLoginRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBeginPasskeyLoginRequest();
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

  fromJSON(object: any): BeginPasskeyLoginRequest {
    return { email: isSet(object.email) ? String(object.email) : "" };
  },

  toJSON(message: BeginPasskeyLoginRequest): unknown {
    const obj: any = {};
    if (message.email !== "") {
      obj.email = message.email;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BeginPasskeyLoginRequest>, I>>(base?: I): BeginPasskeyLoginRequest {
    return BeginPasskeyLoginRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BeginPasskeyLoginRequest>, I>>(object: I): BeginPasskeyLoginRequest {
    const message = createBaseBeginPasskeyLoginRequest();
    message.email = object.email ?? "";
    return message;
  },
};

function createBaseBeginPasskeyLoginResponse(): BeginPasskeyLoginResponse {
  return { optionsJson: "", sessionId: "" };
}

export const BeginPasskeyLoginResponse = {
  encode(message: BeginPasskeyLoginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.optionsJson !== "") {
      writer.uint32(10).string(message.optionsJson);
    }
    if (message.sessionId !== "") {
      writer.uint32(18).string(message.sessionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BeginPasskeyLoginResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBeginPasskeyLoginResponse();
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

  fromJSON(object: any): BeginPasskeyLoginResponse {
    return {
      optionsJson: isSet(object.optionsJson) ? String(object.optionsJson) : "",
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
    };
  },

  toJSON(message: BeginPasskeyLoginResponse): unknown {
    const obj: any = {};
    if (message.optionsJson !== "") {
      obj.optionsJson = message.optionsJson;
    }
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BeginPasskeyLoginResponse>, I>>(base?: I): BeginPasskeyLoginResponse {
    return BeginPasskeyLoginResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BeginPasskeyLoginResponse>, I>>(object: I): BeginPasskeyLoginResponse {
    const message = createBaseBeginPasskeyLoginResponse();
    message.optionsJson = object.optionsJson ?? "";
    message.sessionId = object.sessionId ?? "";
    return message;
  },
};

function createBaseFinishPasskeyLoginRequest(): FinishPasskeyLoginRequest {
  return { sessionId: "", credentialJson: "" };
}

export const FinishPasskeyLoginRequest = {
  encode(message: FinishPasskeyLoginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.credentialJson !== "") {
      writer.uint32(18).string(message.credentialJson);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinishPasskeyLoginRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinishPasskeyLoginRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FinishPasskeyLoginRequest {
    return {
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
      credentialJson: isSet(object.credentialJson) ? String(object.credentialJson) : "",
    };
  },

  toJSON(message: FinishPasskeyLoginRequest): unknown {
    const obj: any = {};
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.credentialJson !== "") {
      obj.credentialJson = message.credentialJson;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FinishPasskeyLoginRequest>, I>>(base?: I): FinishPasskeyLoginRequest {
    return FinishPasskeyLoginRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FinishPasskeyLoginRequest>, I>>(object: I): FinishPasskeyLoginRequest {
    const message = createBaseFinishPasskeyLoginRequest();
    message.sessionId = object.sessionId ?? "";
    message.credentialJson = object.credentialJson ?? "";
    return message;
  },
};

function createBaseFinishPasskeyLoginResponse(): FinishPasskeyLoginResponse {
  return { accessToken: "", refreshToken: "", user: undefined };
}

export const FinishPasskeyLoginResponse = {
  encode(message: FinishPasskeyLoginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    if (message.refreshToken !== "") {
      writer.uint32(18).string(message.refreshToken);
    }
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinishPasskeyLoginResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinishPasskeyLoginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessToken = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.refreshToken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): FinishPasskeyLoginResponse {
    return {
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
      refreshToken: isSet(object.refreshToken) ? String(object.refreshToken) : "",
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
    };
  },

  toJSON(message: FinishPasskeyLoginResponse): unknown {
    const obj: any = {};
    if (message.accessToken !== "") {
      obj.accessToken = message.accessToken;
    }
    if (message.refreshToken !== "") {
      obj.refreshToken = message.refreshToken;
    }
    if (message.user !== undefined) {
      obj.user = User.toJSON(message.user);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FinishPasskeyLoginResponse>, I>>(base?: I): FinishPasskeyLoginResponse {
    return FinishPasskeyLoginResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FinishPasskeyLoginResponse>, I>>(object: I): FinishPasskeyLoginResponse {
    const message = createBaseFinishPasskeyLoginResponse();
    message.accessToken = object.accessToken ?? "";
    message.refreshToken = object.refreshToken ?? "";
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBasePasskey(): Passkey {
  return { id: "", ownerId: "", ownerName: "", identifier: "", createdAt: 0, lastUsedAt: undefined };
}

export const Passkey = {
  encode(message: Passkey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.ownerId !== "") {
      writer.uint32(18).string(message.ownerId);
    }
    if (message.ownerName !== "") {
      writer.uint32(26).string(message.ownerName);
    }
    if (message.identifier !== "") {
      writer.uint32(34).string(message.identifier);
    }
    if (message.createdAt !== 0) {
      writer.uint32(40).int64(message.createdAt);
    }
    if (message.lastUsedAt !== undefined) {
      writer.uint32(48).int64(message.lastUsedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Passkey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePasskey();
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

          message.ownerId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ownerName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.identifier = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.createdAt = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.lastUsedAt = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Passkey {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      ownerId: isSet(object.ownerId) ? String(object.ownerId) : "",
      ownerName: isSet(object.ownerName) ? String(object.ownerName) : "",
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      lastUsedAt: isSet(object.lastUsedAt) ? Number(object.lastUsedAt) : undefined,
    };
  },

  toJSON(message: Passkey): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.ownerId !== "") {
      obj.ownerId = message.ownerId;
    }
    if (message.ownerName !== "") {
      obj.ownerName = message.ownerName;
    }
    if (message.identifier !== "") {
      obj.identifier = message.identifier;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.lastUsedAt !== undefined) {
      obj.lastUsedAt = Math.round(message.lastUsedAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Passkey>, I>>(base?: I): Passkey {
    return Passkey.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Passkey>, I>>(object: I): Passkey {
    const message = createBasePasskey();
    message.id = object.id ?? "";
    message.ownerId = object.ownerId ?? "";
    message.ownerName = object.ownerName ?? "";
    message.identifier = object.identifier ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.lastUsedAt = object.lastUsedAt ?? undefined;
    return message;
  },
};

function createBaseListPasskeysRequest(): ListPasskeysRequest {
  return { userId: undefined };
}

export const ListPasskeysRequest = {
  encode(message: ListPasskeysRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== undefined) {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListPasskeysRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPasskeysRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListPasskeysRequest {
    return { userId: isSet(object.userId) ? String(object.userId) : undefined };
  },

  toJSON(message: ListPasskeysRequest): unknown {
    const obj: any = {};
    if (message.userId !== undefined) {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListPasskeysRequest>, I>>(base?: I): ListPasskeysRequest {
    return ListPasskeysRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListPasskeysRequest>, I>>(object: I): ListPasskeysRequest {
    const message = createBaseListPasskeysRequest();
    message.userId = object.userId ?? undefined;
    return message;
  },
};

function createBaseListPasskeysResponse(): ListPasskeysResponse {
  return { passkeys: [] };
}

export const ListPasskeysResponse = {
  encode(message: ListPasskeysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.passkeys) {
      Passkey.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListPasskeysResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPasskeysResponse();
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

  fromJSON(object: any): ListPasskeysResponse {
    return { passkeys: Array.isArray(object?.passkeys) ? object.passkeys.map((e: any) => Passkey.fromJSON(e)) : [] };
  },

  toJSON(message: ListPasskeysResponse): unknown {
    const obj: any = {};
    if (message.passkeys?.length) {
      obj.passkeys = message.passkeys.map((e) => Passkey.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListPasskeysResponse>, I>>(base?: I): ListPasskeysResponse {
    return ListPasskeysResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListPasskeysResponse>, I>>(object: I): ListPasskeysResponse {
    const message = createBaseListPasskeysResponse();
    message.passkeys = object.passkeys?.map((e) => Passkey.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDeletePasskeyRequest(): DeletePasskeyRequest {
  return { id: "" };
}

export const DeletePasskeyRequest = {
  encode(message: DeletePasskeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeletePasskeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePasskeyRequest();
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

  fromJSON(object: any): DeletePasskeyRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DeletePasskeyRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePasskeyRequest>, I>>(base?: I): DeletePasskeyRequest {
    return DeletePasskeyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeletePasskeyRequest>, I>>(object: I): DeletePasskeyRequest {
    const message = createBaseDeletePasskeyRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeletePasskeyResponse(): DeletePasskeyResponse {
  return {};
}

export const DeletePasskeyResponse = {
  encode(_: DeletePasskeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeletePasskeyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePasskeyResponse();
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

  fromJSON(_: any): DeletePasskeyResponse {
    return {};
  },

  toJSON(_: DeletePasskeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePasskeyResponse>, I>>(base?: I): DeletePasskeyResponse {
    return DeletePasskeyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeletePasskeyResponse>, I>>(_: I): DeletePasskeyResponse {
    const message = createBaseDeletePasskeyResponse();
    return message;
  },
};

export interface AuthSvc {
  /**
   * Login or signup with google.
   * If a user is not yet created, a new user account will be created associated with that email address.
   */
  GoogleLogin(request: DeepPartial<GoogleLoginRequest>, metadata?: grpc.Metadata): Promise<GoogleLoginResponse>;
  ServiceLogin(request: DeepPartial<ServiceLoginRequest>, metadata?: grpc.Metadata): Promise<ServiceLoginResponse>;
  Signout(request: DeepPartial<SignoutRequest>, metadata?: grpc.Metadata): Promise<SignoutResponse>;
  /** Passkey (WebAuthn) registration — requires an active session. */
  BeginPasskeyRegistration(
    request: DeepPartial<BeginPasskeyRegistrationRequest>,
    metadata?: grpc.Metadata,
  ): Promise<BeginPasskeyRegistrationResponse>;
  FinishPasskeyRegistration(
    request: DeepPartial<FinishPasskeyRegistrationRequest>,
    metadata?: grpc.Metadata,
  ): Promise<FinishPasskeyRegistrationResponse>;
  /** Passkey (WebAuthn) authentication. */
  BeginPasskeyLogin(
    request: DeepPartial<BeginPasskeyLoginRequest>,
    metadata?: grpc.Metadata,
  ): Promise<BeginPasskeyLoginResponse>;
  FinishPasskeyLogin(
    request: DeepPartial<FinishPasskeyLoginRequest>,
    metadata?: grpc.Metadata,
  ): Promise<FinishPasskeyLoginResponse>;
  /** List all registered passkeys, optionally filtered by user_id. */
  ListPasskeys(request: DeepPartial<ListPasskeysRequest>, metadata?: grpc.Metadata): Promise<ListPasskeysResponse>;
  /** Delete a registered passkey by its ID. */
  DeletePasskey(request: DeepPartial<DeletePasskeyRequest>, metadata?: grpc.Metadata): Promise<DeletePasskeyResponse>;
}

export class AuthSvcClientImpl implements AuthSvc {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GoogleLogin = this.GoogleLogin.bind(this);
    this.ServiceLogin = this.ServiceLogin.bind(this);
    this.Signout = this.Signout.bind(this);
    this.BeginPasskeyRegistration = this.BeginPasskeyRegistration.bind(this);
    this.FinishPasskeyRegistration = this.FinishPasskeyRegistration.bind(this);
    this.BeginPasskeyLogin = this.BeginPasskeyLogin.bind(this);
    this.FinishPasskeyLogin = this.FinishPasskeyLogin.bind(this);
    this.ListPasskeys = this.ListPasskeys.bind(this);
    this.DeletePasskey = this.DeletePasskey.bind(this);
  }

  GoogleLogin(request: DeepPartial<GoogleLoginRequest>, metadata?: grpc.Metadata): Promise<GoogleLoginResponse> {
    return this.rpc.unary(AuthSvcGoogleLoginDesc, GoogleLoginRequest.fromPartial(request), metadata);
  }

  ServiceLogin(request: DeepPartial<ServiceLoginRequest>, metadata?: grpc.Metadata): Promise<ServiceLoginResponse> {
    return this.rpc.unary(AuthSvcServiceLoginDesc, ServiceLoginRequest.fromPartial(request), metadata);
  }

  Signout(request: DeepPartial<SignoutRequest>, metadata?: grpc.Metadata): Promise<SignoutResponse> {
    return this.rpc.unary(AuthSvcSignoutDesc, SignoutRequest.fromPartial(request), metadata);
  }

  BeginPasskeyRegistration(
    request: DeepPartial<BeginPasskeyRegistrationRequest>,
    metadata?: grpc.Metadata,
  ): Promise<BeginPasskeyRegistrationResponse> {
    return this.rpc.unary(
      AuthSvcBeginPasskeyRegistrationDesc,
      BeginPasskeyRegistrationRequest.fromPartial(request),
      metadata,
    );
  }

  FinishPasskeyRegistration(
    request: DeepPartial<FinishPasskeyRegistrationRequest>,
    metadata?: grpc.Metadata,
  ): Promise<FinishPasskeyRegistrationResponse> {
    return this.rpc.unary(
      AuthSvcFinishPasskeyRegistrationDesc,
      FinishPasskeyRegistrationRequest.fromPartial(request),
      metadata,
    );
  }

  BeginPasskeyLogin(
    request: DeepPartial<BeginPasskeyLoginRequest>,
    metadata?: grpc.Metadata,
  ): Promise<BeginPasskeyLoginResponse> {
    return this.rpc.unary(AuthSvcBeginPasskeyLoginDesc, BeginPasskeyLoginRequest.fromPartial(request), metadata);
  }

  FinishPasskeyLogin(
    request: DeepPartial<FinishPasskeyLoginRequest>,
    metadata?: grpc.Metadata,
  ): Promise<FinishPasskeyLoginResponse> {
    return this.rpc.unary(AuthSvcFinishPasskeyLoginDesc, FinishPasskeyLoginRequest.fromPartial(request), metadata);
  }

  ListPasskeys(request: DeepPartial<ListPasskeysRequest>, metadata?: grpc.Metadata): Promise<ListPasskeysResponse> {
    return this.rpc.unary(AuthSvcListPasskeysDesc, ListPasskeysRequest.fromPartial(request), metadata);
  }

  DeletePasskey(request: DeepPartial<DeletePasskeyRequest>, metadata?: grpc.Metadata): Promise<DeletePasskeyResponse> {
    return this.rpc.unary(AuthSvcDeletePasskeyDesc, DeletePasskeyRequest.fromPartial(request), metadata);
  }
}

export const AuthSvcDesc = { serviceName: "authsvc.AuthSvc" };

export const AuthSvcGoogleLoginDesc: UnaryMethodDefinitionish = {
  methodName: "GoogleLogin",
  service: AuthSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GoogleLoginRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GoogleLoginResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AuthSvcServiceLoginDesc: UnaryMethodDefinitionish = {
  methodName: "ServiceLogin",
  service: AuthSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ServiceLoginRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ServiceLoginResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AuthSvcSignoutDesc: UnaryMethodDefinitionish = {
  methodName: "Signout",
  service: AuthSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SignoutRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = SignoutResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AuthSvcBeginPasskeyRegistrationDesc: UnaryMethodDefinitionish = {
  methodName: "BeginPasskeyRegistration",
  service: AuthSvcDesc,
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

export const AuthSvcFinishPasskeyRegistrationDesc: UnaryMethodDefinitionish = {
  methodName: "FinishPasskeyRegistration",
  service: AuthSvcDesc,
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

export const AuthSvcBeginPasskeyLoginDesc: UnaryMethodDefinitionish = {
  methodName: "BeginPasskeyLogin",
  service: AuthSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BeginPasskeyLoginRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = BeginPasskeyLoginResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AuthSvcFinishPasskeyLoginDesc: UnaryMethodDefinitionish = {
  methodName: "FinishPasskeyLogin",
  service: AuthSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return FinishPasskeyLoginRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = FinishPasskeyLoginResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AuthSvcListPasskeysDesc: UnaryMethodDefinitionish = {
  methodName: "ListPasskeys",
  service: AuthSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ListPasskeysRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ListPasskeysResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AuthSvcDeletePasskeyDesc: UnaryMethodDefinitionish = {
  methodName: "DeletePasskey",
  service: AuthSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DeletePasskeyRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = DeletePasskeyResponse.decode(data);
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

export class GrpcWebError extends tsProtoGlobalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}

/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { Secret, Service } from "../iam";

export const protobufPackage = "servicesvc";

export interface CreateRequest {
  name: string;
}

export interface CreateResponse {
  service: Service | undefined;
}

export interface GetRequest {
  id: string;
}

export interface GetResponse {
  service: Service | undefined;
}

export interface ListRequest {
}

export interface ListResponse {
  service: Service[];
}

export interface DeleteRequest {
  id: string;
}

export interface DeleteResponse {
}

export interface AddSecretRequest {
  id: string;
}

export interface AddSecretResponse {
  secret: Secret | undefined;
}

export interface DeactivateSecretRequest {
  id: string;
}

export interface DeactivateSecretResponse {
}

export interface DeleteSecretRequest {
  id: string;
}

export interface DeleteSecretResponse {
}

function createBaseCreateRequest(): CreateRequest {
  return { name: "" };
}

export const CreateRequest = {
  encode(message: CreateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateRequest();
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

  fromJSON(object: any): CreateRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: CreateRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateRequest>, I>>(base?: I): CreateRequest {
    return CreateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateRequest>, I>>(object: I): CreateRequest {
    const message = createBaseCreateRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCreateResponse(): CreateResponse {
  return { service: undefined };
}

export const CreateResponse = {
  encode(message: CreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.service !== undefined) {
      Service.encode(message.service, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.service = Service.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateResponse {
    return { service: isSet(object.service) ? Service.fromJSON(object.service) : undefined };
  },

  toJSON(message: CreateResponse): unknown {
    const obj: any = {};
    if (message.service !== undefined) {
      obj.service = Service.toJSON(message.service);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateResponse>, I>>(base?: I): CreateResponse {
    return CreateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateResponse>, I>>(object: I): CreateResponse {
    const message = createBaseCreateResponse();
    message.service = (object.service !== undefined && object.service !== null)
      ? Service.fromPartial(object.service)
      : undefined;
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
  return { service: undefined };
}

export const GetResponse = {
  encode(message: GetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.service !== undefined) {
      Service.encode(message.service, writer.uint32(10).fork()).ldelim();
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

          message.service = Service.decode(reader, reader.uint32());
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
    return { service: isSet(object.service) ? Service.fromJSON(object.service) : undefined };
  },

  toJSON(message: GetResponse): unknown {
    const obj: any = {};
    if (message.service !== undefined) {
      obj.service = Service.toJSON(message.service);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetResponse>, I>>(base?: I): GetResponse {
    return GetResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetResponse>, I>>(object: I): GetResponse {
    const message = createBaseGetResponse();
    message.service = (object.service !== undefined && object.service !== null)
      ? Service.fromPartial(object.service)
      : undefined;
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
  return { service: [] };
}

export const ListResponse = {
  encode(message: ListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.service) {
      Service.encode(v!, writer.uint32(10).fork()).ldelim();
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

          message.service.push(Service.decode(reader, reader.uint32()));
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
    return { service: Array.isArray(object?.service) ? object.service.map((e: any) => Service.fromJSON(e)) : [] };
  },

  toJSON(message: ListResponse): unknown {
    const obj: any = {};
    if (message.service?.length) {
      obj.service = message.service.map((e) => Service.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListResponse>, I>>(base?: I): ListResponse {
    return ListResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListResponse>, I>>(object: I): ListResponse {
    const message = createBaseListResponse();
    message.service = object.service?.map((e) => Service.fromPartial(e)) || [];
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

function createBaseAddSecretRequest(): AddSecretRequest {
  return { id: "" };
}

export const AddSecretRequest = {
  encode(message: AddSecretRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddSecretRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddSecretRequest();
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

  fromJSON(object: any): AddSecretRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: AddSecretRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddSecretRequest>, I>>(base?: I): AddSecretRequest {
    return AddSecretRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddSecretRequest>, I>>(object: I): AddSecretRequest {
    const message = createBaseAddSecretRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseAddSecretResponse(): AddSecretResponse {
  return { secret: undefined };
}

export const AddSecretResponse = {
  encode(message: AddSecretResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secret !== undefined) {
      Secret.encode(message.secret, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddSecretResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddSecretResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.secret = Secret.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddSecretResponse {
    return { secret: isSet(object.secret) ? Secret.fromJSON(object.secret) : undefined };
  },

  toJSON(message: AddSecretResponse): unknown {
    const obj: any = {};
    if (message.secret !== undefined) {
      obj.secret = Secret.toJSON(message.secret);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddSecretResponse>, I>>(base?: I): AddSecretResponse {
    return AddSecretResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddSecretResponse>, I>>(object: I): AddSecretResponse {
    const message = createBaseAddSecretResponse();
    message.secret = (object.secret !== undefined && object.secret !== null)
      ? Secret.fromPartial(object.secret)
      : undefined;
    return message;
  },
};

function createBaseDeactivateSecretRequest(): DeactivateSecretRequest {
  return { id: "" };
}

export const DeactivateSecretRequest = {
  encode(message: DeactivateSecretRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateSecretRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeactivateSecretRequest();
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

  fromJSON(object: any): DeactivateSecretRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DeactivateSecretRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeactivateSecretRequest>, I>>(base?: I): DeactivateSecretRequest {
    return DeactivateSecretRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeactivateSecretRequest>, I>>(object: I): DeactivateSecretRequest {
    const message = createBaseDeactivateSecretRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeactivateSecretResponse(): DeactivateSecretResponse {
  return {};
}

export const DeactivateSecretResponse = {
  encode(_: DeactivateSecretResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateSecretResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeactivateSecretResponse();
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

  fromJSON(_: any): DeactivateSecretResponse {
    return {};
  },

  toJSON(_: DeactivateSecretResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DeactivateSecretResponse>, I>>(base?: I): DeactivateSecretResponse {
    return DeactivateSecretResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeactivateSecretResponse>, I>>(_: I): DeactivateSecretResponse {
    const message = createBaseDeactivateSecretResponse();
    return message;
  },
};

function createBaseDeleteSecretRequest(): DeleteSecretRequest {
  return { id: "" };
}

export const DeleteSecretRequest = {
  encode(message: DeleteSecretRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSecretRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSecretRequest();
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

  fromJSON(object: any): DeleteSecretRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DeleteSecretRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteSecretRequest>, I>>(base?: I): DeleteSecretRequest {
    return DeleteSecretRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteSecretRequest>, I>>(object: I): DeleteSecretRequest {
    const message = createBaseDeleteSecretRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteSecretResponse(): DeleteSecretResponse {
  return {};
}

export const DeleteSecretResponse = {
  encode(_: DeleteSecretResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSecretResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSecretResponse();
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

  fromJSON(_: any): DeleteSecretResponse {
    return {};
  },

  toJSON(_: DeleteSecretResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteSecretResponse>, I>>(base?: I): DeleteSecretResponse {
    return DeleteSecretResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteSecretResponse>, I>>(_: I): DeleteSecretResponse {
    const message = createBaseDeleteSecretResponse();
    return message;
  },
};

export interface ServiceSvc {
  Create(request: DeepPartial<CreateRequest>, metadata?: grpc.Metadata): Promise<CreateResponse>;
  Delete(request: DeepPartial<DeleteRequest>, metadata?: grpc.Metadata): Promise<DeleteResponse>;
  Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
  List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
  /** AddSecret adds a new usable secret */
  AddSecret(request: DeepPartial<AddSecretRequest>, metadata?: grpc.Metadata): Promise<AddSecretResponse>;
  DeactivateSecret(
    request: DeepPartial<DeactivateSecretRequest>,
    metadata?: grpc.Metadata,
  ): Promise<DeactivateSecretResponse>;
  DeleteSecret(request: DeepPartial<DeleteSecretRequest>, metadata?: grpc.Metadata): Promise<DeleteSecretResponse>;
}

export class ServiceSvcClientImpl implements ServiceSvc {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Delete = this.Delete.bind(this);
    this.Get = this.Get.bind(this);
    this.List = this.List.bind(this);
    this.AddSecret = this.AddSecret.bind(this);
    this.DeactivateSecret = this.DeactivateSecret.bind(this);
    this.DeleteSecret = this.DeleteSecret.bind(this);
  }

  Create(request: DeepPartial<CreateRequest>, metadata?: grpc.Metadata): Promise<CreateResponse> {
    return this.rpc.unary(ServiceSvcCreateDesc, CreateRequest.fromPartial(request), metadata);
  }

  Delete(request: DeepPartial<DeleteRequest>, metadata?: grpc.Metadata): Promise<DeleteResponse> {
    return this.rpc.unary(ServiceSvcDeleteDesc, DeleteRequest.fromPartial(request), metadata);
  }

  Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse> {
    return this.rpc.unary(ServiceSvcGetDesc, GetRequest.fromPartial(request), metadata);
  }

  List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse> {
    return this.rpc.unary(ServiceSvcListDesc, ListRequest.fromPartial(request), metadata);
  }

  AddSecret(request: DeepPartial<AddSecretRequest>, metadata?: grpc.Metadata): Promise<AddSecretResponse> {
    return this.rpc.unary(ServiceSvcAddSecretDesc, AddSecretRequest.fromPartial(request), metadata);
  }

  DeactivateSecret(
    request: DeepPartial<DeactivateSecretRequest>,
    metadata?: grpc.Metadata,
  ): Promise<DeactivateSecretResponse> {
    return this.rpc.unary(ServiceSvcDeactivateSecretDesc, DeactivateSecretRequest.fromPartial(request), metadata);
  }

  DeleteSecret(request: DeepPartial<DeleteSecretRequest>, metadata?: grpc.Metadata): Promise<DeleteSecretResponse> {
    return this.rpc.unary(ServiceSvcDeleteSecretDesc, DeleteSecretRequest.fromPartial(request), metadata);
  }
}

export const ServiceSvcDesc = { serviceName: "servicesvc.ServiceSvc" };

export const ServiceSvcCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: ServiceSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CreateRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = CreateResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const ServiceSvcDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: ServiceSvcDesc,
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

export const ServiceSvcGetDesc: UnaryMethodDefinitionish = {
  methodName: "Get",
  service: ServiceSvcDesc,
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

export const ServiceSvcListDesc: UnaryMethodDefinitionish = {
  methodName: "List",
  service: ServiceSvcDesc,
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

export const ServiceSvcAddSecretDesc: UnaryMethodDefinitionish = {
  methodName: "AddSecret",
  service: ServiceSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AddSecretRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = AddSecretResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const ServiceSvcDeactivateSecretDesc: UnaryMethodDefinitionish = {
  methodName: "DeactivateSecret",
  service: ServiceSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DeactivateSecretRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = DeactivateSecretResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const ServiceSvcDeleteSecretDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteSecret",
  service: ServiceSvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DeleteSecretRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = DeleteSecretResponse.decode(data);
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

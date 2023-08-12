import * as jspb from 'google-protobuf'

import * as ikipb_iki_iam_iam_pb from '../../../ikipb/iki_iam/iam_pb';


export class CreateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateResponse extends jspb.Message {
  getService(): ikipb_iki_iam_iam_pb.Service | undefined;
  setService(value?: ikipb_iki_iam_iam_pb.Service): CreateResponse;
  hasService(): boolean;
  clearService(): CreateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResponse): CreateResponse.AsObject;
  static serializeBinaryToWriter(message: CreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResponse;
  static deserializeBinaryFromReader(message: CreateResponse, reader: jspb.BinaryReader): CreateResponse;
}

export namespace CreateResponse {
  export type AsObject = {
    service?: ikipb_iki_iam_iam_pb.Service.AsObject,
  }
}

export class GetRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
  static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequest;
  static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetResponse extends jspb.Message {
  getService(): ikipb_iki_iam_iam_pb.Service | undefined;
  setService(value?: ikipb_iki_iam_iam_pb.Service): GetResponse;
  hasService(): boolean;
  clearService(): GetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
  static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponse;
  static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
  export type AsObject = {
    service?: ikipb_iki_iam_iam_pb.Service.AsObject,
  }
}

export class ListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
  }
}

export class ListResponse extends jspb.Message {
  getServiceList(): Array<ikipb_iki_iam_iam_pb.Service>;
  setServiceList(value: Array<ikipb_iki_iam_iam_pb.Service>): ListResponse;
  clearServiceList(): ListResponse;
  addService(value?: ikipb_iki_iam_iam_pb.Service, index?: number): ikipb_iki_iam_iam_pb.Service;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    serviceList: Array<ikipb_iki_iam_iam_pb.Service.AsObject>,
  }
}

export class DeleteRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRequest;
  static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponse;
  static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
  export type AsObject = {
  }
}

export class AddSecretRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): AddSecretRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddSecretRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddSecretRequest): AddSecretRequest.AsObject;
  static serializeBinaryToWriter(message: AddSecretRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddSecretRequest;
  static deserializeBinaryFromReader(message: AddSecretRequest, reader: jspb.BinaryReader): AddSecretRequest;
}

export namespace AddSecretRequest {
  export type AsObject = {
    clientId: string,
  }
}

export class AddSecretResponse extends jspb.Message {
  getSecret(): ikipb_iki_iam_iam_pb.Secret | undefined;
  setSecret(value?: ikipb_iki_iam_iam_pb.Secret): AddSecretResponse;
  hasSecret(): boolean;
  clearSecret(): AddSecretResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddSecretResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddSecretResponse): AddSecretResponse.AsObject;
  static serializeBinaryToWriter(message: AddSecretResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddSecretResponse;
  static deserializeBinaryFromReader(message: AddSecretResponse, reader: jspb.BinaryReader): AddSecretResponse;
}

export namespace AddSecretResponse {
  export type AsObject = {
    secret?: ikipb_iki_iam_iam_pb.Secret.AsObject,
  }
}

export class DeactivateSecretRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeactivateSecretRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivateSecretRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivateSecretRequest): DeactivateSecretRequest.AsObject;
  static serializeBinaryToWriter(message: DeactivateSecretRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivateSecretRequest;
  static deserializeBinaryFromReader(message: DeactivateSecretRequest, reader: jspb.BinaryReader): DeactivateSecretRequest;
}

export namespace DeactivateSecretRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeactivateSecretResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivateSecretResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivateSecretResponse): DeactivateSecretResponse.AsObject;
  static serializeBinaryToWriter(message: DeactivateSecretResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivateSecretResponse;
  static deserializeBinaryFromReader(message: DeactivateSecretResponse, reader: jspb.BinaryReader): DeactivateSecretResponse;
}

export namespace DeactivateSecretResponse {
  export type AsObject = {
  }
}

export class DeleteSecretRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteSecretRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSecretRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSecretRequest): DeleteSecretRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSecretRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSecretRequest;
  static deserializeBinaryFromReader(message: DeleteSecretRequest, reader: jspb.BinaryReader): DeleteSecretRequest;
}

export namespace DeleteSecretRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteSecretResponse extends jspb.Message {
  getService(): ikipb_iki_iam_iam_pb.Service | undefined;
  setService(value?: ikipb_iki_iam_iam_pb.Service): DeleteSecretResponse;
  hasService(): boolean;
  clearService(): DeleteSecretResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSecretResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSecretResponse): DeleteSecretResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteSecretResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSecretResponse;
  static deserializeBinaryFromReader(message: DeleteSecretResponse, reader: jspb.BinaryReader): DeleteSecretResponse;
}

export namespace DeleteSecretResponse {
  export type AsObject = {
    service?: ikipb_iki_iam_iam_pb.Service.AsObject,
  }
}


import * as jspb from 'google-protobuf'

import * as ikipb_iki_iam_iam_pb from '../../../ikipb/iki_iam/iam_pb';


export class ProfileRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileRequest): ProfileRequest.AsObject;
  static serializeBinaryToWriter(message: ProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileRequest;
  static deserializeBinaryFromReader(message: ProfileRequest, reader: jspb.BinaryReader): ProfileRequest;
}

export namespace ProfileRequest {
  export type AsObject = {
  }
}

export class ProfileResponse extends jspb.Message {
  getUser(): ikipb_iki_iam_iam_pb.User | undefined;
  setUser(value?: ikipb_iki_iam_iam_pb.User): ProfileResponse;
  hasUser(): boolean;
  clearUser(): ProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileResponse): ProfileResponse.AsObject;
  static serializeBinaryToWriter(message: ProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileResponse;
  static deserializeBinaryFromReader(message: ProfileResponse, reader: jspb.BinaryReader): ProfileResponse;
}

export namespace ProfileResponse {
  export type AsObject = {
    user?: ikipb_iki_iam_iam_pb.User.AsObject,
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
  getUser(): ikipb_iki_iam_iam_pb.User | undefined;
  setUser(value?: ikipb_iki_iam_iam_pb.User): GetResponse;
  hasUser(): boolean;
  clearUser(): GetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
  static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponse;
  static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
  export type AsObject = {
    user?: ikipb_iki_iam_iam_pb.User.AsObject,
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
  getUsersList(): Array<ikipb_iki_iam_iam_pb.User>;
  setUsersList(value: Array<ikipb_iki_iam_iam_pb.User>): ListResponse;
  clearUsersList(): ListResponse;
  addUsers(value?: ikipb_iki_iam_iam_pb.User, index?: number): ikipb_iki_iam_iam_pb.User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    usersList: Array<ikipb_iki_iam_iam_pb.User.AsObject>,
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

export class ResetPasswordRequest extends jspb.Message {
  getId(): string;
  setId(value: string): ResetPasswordRequest;

  getNewPassword(): string;
  setNewPassword(value: string): ResetPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordRequest): ResetPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordRequest;
  static deserializeBinaryFromReader(message: ResetPasswordRequest, reader: jspb.BinaryReader): ResetPasswordRequest;
}

export namespace ResetPasswordRequest {
  export type AsObject = {
    id: string,
    newPassword: string,
  }
}

export class ResetPasswordResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordResponse): ResetPasswordResponse.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordResponse;
  static deserializeBinaryFromReader(message: ResetPasswordResponse, reader: jspb.BinaryReader): ResetPasswordResponse;
}

export namespace ResetPasswordResponse {
  export type AsObject = {
  }
}

export class AttachGroupRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): AttachGroupRequest;

  getGroupId(): string;
  setGroupId(value: string): AttachGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AttachGroupRequest): AttachGroupRequest.AsObject;
  static serializeBinaryToWriter(message: AttachGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachGroupRequest;
  static deserializeBinaryFromReader(message: AttachGroupRequest, reader: jspb.BinaryReader): AttachGroupRequest;
}

export namespace AttachGroupRequest {
  export type AsObject = {
    userId: string,
    groupId: string,
  }
}

export class AttachGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AttachGroupResponse): AttachGroupResponse.AsObject;
  static serializeBinaryToWriter(message: AttachGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachGroupResponse;
  static deserializeBinaryFromReader(message: AttachGroupResponse, reader: jspb.BinaryReader): AttachGroupResponse;
}

export namespace AttachGroupResponse {
  export type AsObject = {
  }
}

export class DetachGroupRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): DetachGroupRequest;

  getGroupId(): string;
  setGroupId(value: string): DetachGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetachGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DetachGroupRequest): DetachGroupRequest.AsObject;
  static serializeBinaryToWriter(message: DetachGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetachGroupRequest;
  static deserializeBinaryFromReader(message: DetachGroupRequest, reader: jspb.BinaryReader): DetachGroupRequest;
}

export namespace DetachGroupRequest {
  export type AsObject = {
    userId: string,
    groupId: string,
  }
}

export class DetachGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetachGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DetachGroupResponse): DetachGroupResponse.AsObject;
  static serializeBinaryToWriter(message: DetachGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetachGroupResponse;
  static deserializeBinaryFromReader(message: DetachGroupResponse, reader: jspb.BinaryReader): DetachGroupResponse;
}

export namespace DetachGroupResponse {
  export type AsObject = {
  }
}


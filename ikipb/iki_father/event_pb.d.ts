import * as jspb from 'google-protobuf'



export class EventUserLogin extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): EventUserLogin;

  getResult(): EventUserLogin.Result;
  setResult(value: EventUserLogin.Result): EventUserLogin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventUserLogin.AsObject;
  static toObject(includeInstance: boolean, msg: EventUserLogin): EventUserLogin.AsObject;
  static serializeBinaryToWriter(message: EventUserLogin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventUserLogin;
  static deserializeBinaryFromReader(message: EventUserLogin, reader: jspb.BinaryReader): EventUserLogin;
}

export namespace EventUserLogin {
  export type AsObject = {
    userId: number,
    result: EventUserLogin.Result,
  }

  export enum Result { 
    RESULT_UNSPECIFIED = 0,
    RESULT_SUCCESS = 1,
    RESULT_INCORRECT_CREDENTIAL = 2,
    RESULT_UNKNOWN = 3,
  }
}

export class EventUserCreate extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): EventUserCreate;

  getEmail(): string;
  setEmail(value: string): EventUserCreate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventUserCreate.AsObject;
  static toObject(includeInstance: boolean, msg: EventUserCreate): EventUserCreate.AsObject;
  static serializeBinaryToWriter(message: EventUserCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventUserCreate;
  static deserializeBinaryFromReader(message: EventUserCreate, reader: jspb.BinaryReader): EventUserCreate;
}

export namespace EventUserCreate {
  export type AsObject = {
    userId: number,
    email: string,
  }
}


import * as jspb from 'google-protobuf'



export class CanIRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CanIRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CanIRequest): CanIRequest.AsObject;
  static serializeBinaryToWriter(message: CanIRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CanIRequest;
  static deserializeBinaryFromReader(message: CanIRequest, reader: jspb.BinaryReader): CanIRequest;
}

export namespace CanIRequest {
  export type AsObject = {
  }
}

export class CanIResponse extends jspb.Message {
  getFullMethodList(): Array<string>;
  setFullMethodList(value: Array<string>): CanIResponse;
  clearFullMethodList(): CanIResponse;
  addFullMethod(value: string, index?: number): CanIResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CanIResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CanIResponse): CanIResponse.AsObject;
  static serializeBinaryToWriter(message: CanIResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CanIResponse;
  static deserializeBinaryFromReader(message: CanIResponse, reader: jspb.BinaryReader): CanIResponse;
}

export namespace CanIResponse {
  export type AsObject = {
    fullMethodList: Array<string>,
  }
}


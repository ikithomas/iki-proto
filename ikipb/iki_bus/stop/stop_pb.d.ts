import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Stop extends jspb.Message {
  getId(): string;
  setId(value: string): Stop;

  getRemoteId(): string;
  setRemoteId(value: string): Stop;

  getName(): string;
  setName(value: string): Stop;

  getLat(): number;
  setLat(value: number): Stop;

  getLong(): number;
  setLong(value: number): Stop;

  getCreatedAt(): number;
  setCreatedAt(value: number): Stop;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Stop.AsObject;
  static toObject(includeInstance: boolean, msg: Stop): Stop.AsObject;
  static serializeBinaryToWriter(message: Stop, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Stop;
  static deserializeBinaryFromReader(message: Stop, reader: jspb.BinaryReader): Stop;
}

export namespace Stop {
  export type AsObject = {
    id: string,
    remoteId: string,
    name: string,
    lat: number,
    pb_long: number,
    createdAt: number,
  }
}

export class ListRequest extends jspb.Message {
  getLanguage(): ListRequest.Language;
  setLanguage(value: ListRequest.Language): ListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
    language: ListRequest.Language,
  }

  export enum Language { 
    LANGUAGE_UNSPECIFIED = 0,
    LANGUAGE_EN = 1,
    LANGUAGE_TC = 2,
    LANGUAGE_SC = 3,
  }
}

export class ListResponse extends jspb.Message {
  getStopsList(): Array<Stop>;
  setStopsList(value: Array<Stop>): ListResponse;
  clearStopsList(): ListResponse;
  addStops(value?: Stop, index?: number): Stop;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    stopsList: Array<Stop.AsObject>,
  }
}


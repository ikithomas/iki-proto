import * as jspb from 'google-protobuf'



export class GetRequest extends jspb.Message {
  getIkiUserId(): string;
  setIkiUserId(value: string): GetRequest;

  getResolution(): number;
  setResolution(value: number): GetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
  static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequest;
  static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
  export type AsObject = {
    ikiUserId: string,
    resolution: number,
  }
}

export class Track extends jspb.Message {
  getName(): string;
  setName(value: string): Track;

  getStartDate(): number;
  setStartDate(value: number): Track;

  getType(): string;
  setType(value: string): Track;

  getPointsList(): Array<Point>;
  setPointsList(value: Array<Point>): Track;
  clearPointsList(): Track;
  addPoints(value?: Point, index?: number): Point;

  getId(): string;
  setId(value: string): Track;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Track.AsObject;
  static toObject(includeInstance: boolean, msg: Track): Track.AsObject;
  static serializeBinaryToWriter(message: Track, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Track;
  static deserializeBinaryFromReader(message: Track, reader: jspb.BinaryReader): Track;
}

export namespace Track {
  export type AsObject = {
    name: string,
    startDate: number,
    type: string,
    pointsList: Array<Point.AsObject>,
    id: string,
  }
}

export class Point extends jspb.Message {
  getLat(): number;
  setLat(value: number): Point;

  getLng(): number;
  setLng(value: number): Point;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Point.AsObject;
  static toObject(includeInstance: boolean, msg: Point): Point.AsObject;
  static serializeBinaryToWriter(message: Point, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Point;
  static deserializeBinaryFromReader(message: Point, reader: jspb.BinaryReader): Point;
}

export namespace Point {
  export type AsObject = {
    lat: number,
    lng: number,
  }
}


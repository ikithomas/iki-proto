import * as jspb from 'google-protobuf'



export class GetGpxRequest extends jspb.Message {
  getActivityId(): string;
  setActivityId(value: string): GetGpxRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGpxRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGpxRequest): GetGpxRequest.AsObject;
  static serializeBinaryToWriter(message: GetGpxRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGpxRequest;
  static deserializeBinaryFromReader(message: GetGpxRequest, reader: jspb.BinaryReader): GetGpxRequest;
}

export namespace GetGpxRequest {
  export type AsObject = {
    activityId: string,
  }
}

export class GetConciseGpxRequest extends jspb.Message {
  getActivityId(): string;
  setActivityId(value: string): GetConciseGpxRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConciseGpxRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConciseGpxRequest): GetConciseGpxRequest.AsObject;
  static serializeBinaryToWriter(message: GetConciseGpxRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConciseGpxRequest;
  static deserializeBinaryFromReader(message: GetConciseGpxRequest, reader: jspb.BinaryReader): GetConciseGpxRequest;
}

export namespace GetConciseGpxRequest {
  export type AsObject = {
    activityId: string,
  }
}

export class GetConciseGpxResponse extends jspb.Message {
  getActivityId(): string;
  setActivityId(value: string): GetConciseGpxResponse;

  getStravaId(): number;
  setStravaId(value: number): GetConciseGpxResponse;

  getStravaAthleteId(): number;
  setStravaAthleteId(value: number): GetConciseGpxResponse;

  getGpx(): Gpx | undefined;
  setGpx(value?: Gpx): GetConciseGpxResponse;
  hasGpx(): boolean;
  clearGpx(): GetConciseGpxResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConciseGpxResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetConciseGpxResponse): GetConciseGpxResponse.AsObject;
  static serializeBinaryToWriter(message: GetConciseGpxResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConciseGpxResponse;
  static deserializeBinaryFromReader(message: GetConciseGpxResponse, reader: jspb.BinaryReader): GetConciseGpxResponse;
}

export namespace GetConciseGpxResponse {
  export type AsObject = {
    activityId: string,
    stravaId: number,
    stravaAthleteId: number,
    gpx?: Gpx.AsObject,
  }
}

export class Chunk extends jspb.Message {
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): Chunk;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chunk.AsObject;
  static toObject(includeInstance: boolean, msg: Chunk): Chunk.AsObject;
  static serializeBinaryToWriter(message: Chunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chunk;
  static deserializeBinaryFromReader(message: Chunk, reader: jspb.BinaryReader): Chunk;
}

export namespace Chunk {
  export type AsObject = {
    chunk: Uint8Array | string,
  }
}

export class Gpx extends jspb.Message {
  getName(): string;
  setName(value: string): Gpx;

  getStartDate(): number;
  setStartDate(value: number): Gpx;

  getType(): string;
  setType(value: string): Gpx;

  getPointsList(): Array<Point>;
  setPointsList(value: Array<Point>): Gpx;
  clearPointsList(): Gpx;
  addPoints(value?: Point, index?: number): Point;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Gpx.AsObject;
  static toObject(includeInstance: boolean, msg: Gpx): Gpx.AsObject;
  static serializeBinaryToWriter(message: Gpx, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Gpx;
  static deserializeBinaryFromReader(message: Gpx, reader: jspb.BinaryReader): Gpx;
}

export namespace Gpx {
  export type AsObject = {
    name: string,
    startDate: number,
    type: string,
    pointsList: Array<Point.AsObject>,
  }
}

export class Point extends jspb.Message {
  getLat(): number;
  setLat(value: number): Point;

  getLon(): number;
  setLon(value: number): Point;

  getEle(): number;
  setEle(value: number): Point;

  getTime(): number;
  setTime(value: number): Point;

  getHr(): number;
  setHr(value: number): Point;

  getCad(): number;
  setCad(value: number): Point;

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
    lon: number,
    ele: number,
    time: number,
    hr: number,
    cad: number,
  }
}


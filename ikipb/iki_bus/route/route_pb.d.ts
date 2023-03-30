import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Route extends jspb.Message {
  getId(): string;
  setId(value: string): Route;

  getCo(): string;
  setCo(value: string): Route;

  getRoute(): string;
  setRoute(value: string): Route;

  getBound(): string;
  setBound(value: string): Route;

  getServiceType(): string;
  setServiceType(value: string): Route;

  getOrig(): string;
  setOrig(value: string): Route;

  getDest(): string;
  setDest(value: string): Route;

  getCreatedAt(): number;
  setCreatedAt(value: number): Route;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Route.AsObject;
  static toObject(includeInstance: boolean, msg: Route): Route.AsObject;
  static serializeBinaryToWriter(message: Route, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Route;
  static deserializeBinaryFromReader(message: Route, reader: jspb.BinaryReader): Route;
}

export namespace Route {
  export type AsObject = {
    id: string,
    co: string,
    route: string,
    bound: string,
    serviceType: string,
    orig: string,
    dest: string,
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
  getRoutesList(): Array<Route>;
  setRoutesList(value: Array<Route>): ListResponse;
  clearRoutesList(): ListResponse;
  addRoutes(value?: Route, index?: number): Route;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    routesList: Array<Route.AsObject>,
  }
}


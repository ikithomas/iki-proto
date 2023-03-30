import * as jspb from 'google-protobuf'



export class Activity extends jspb.Message {
  getId(): string;
  setId(value: string): Activity;

  getStravaId(): number;
  setStravaId(value: number): Activity;

  getStravaAthleteId(): number;
  setStravaAthleteId(value: number): Activity;

  getName(): string;
  setName(value: string): Activity;

  getType(): string;
  setType(value: string): Activity;

  getDistance(): number;
  setDistance(value: number): Activity;

  getElapsedTime(): number;
  setElapsedTime(value: number): Activity;

  getTotalElevationGain(): number;
  setTotalElevationGain(value: number): Activity;

  getStartDate(): number;
  setStartDate(value: number): Activity;

  getStartLat(): number;
  setStartLat(value: number): Activity;
  hasStartLat(): boolean;
  clearStartLat(): Activity;

  getStartLng(): number;
  setStartLng(value: number): Activity;
  hasStartLng(): boolean;
  clearStartLng(): Activity;

  getEndLat(): number;
  setEndLat(value: number): Activity;
  hasEndLat(): boolean;
  clearEndLat(): Activity;

  getEndLng(): number;
  setEndLng(value: number): Activity;
  hasEndLng(): boolean;
  clearEndLng(): Activity;

  getAverageSpeed(): number;
  setAverageSpeed(value: number): Activity;
  hasAverageSpeed(): boolean;
  clearAverageSpeed(): Activity;

  getAverageCadence(): number;
  setAverageCadence(value: number): Activity;
  hasAverageCadence(): boolean;
  clearAverageCadence(): Activity;

  getAverageTemp(): number;
  setAverageTemp(value: number): Activity;
  hasAverageTemp(): boolean;
  clearAverageTemp(): Activity;

  getAverageHeartrate(): number;
  setAverageHeartrate(value: number): Activity;
  hasAverageHeartrate(): boolean;
  clearAverageHeartrate(): Activity;

  getMaxHeartrate(): number;
  setMaxHeartrate(value: number): Activity;
  hasMaxHeartrate(): boolean;
  clearMaxHeartrate(): Activity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Activity.AsObject;
  static toObject(includeInstance: boolean, msg: Activity): Activity.AsObject;
  static serializeBinaryToWriter(message: Activity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Activity;
  static deserializeBinaryFromReader(message: Activity, reader: jspb.BinaryReader): Activity;
}

export namespace Activity {
  export type AsObject = {
    id: string,
    stravaId: number,
    stravaAthleteId: number,
    name: string,
    type: string,
    distance: number,
    elapsedTime: number,
    totalElevationGain: number,
    startDate: number,
    startLat?: number,
    startLng?: number,
    endLat?: number,
    endLng?: number,
    averageSpeed?: number,
    averageCadence?: number,
    averageTemp?: number,
    averageHeartrate?: number,
    maxHeartrate?: number,
  }

  export enum StartLatCase { 
    _START_LAT_NOT_SET = 0,
    START_LAT = 10,
  }

  export enum StartLngCase { 
    _START_LNG_NOT_SET = 0,
    START_LNG = 11,
  }

  export enum EndLatCase { 
    _END_LAT_NOT_SET = 0,
    END_LAT = 12,
  }

  export enum EndLngCase { 
    _END_LNG_NOT_SET = 0,
    END_LNG = 13,
  }

  export enum AverageSpeedCase { 
    _AVERAGE_SPEED_NOT_SET = 0,
    AVERAGE_SPEED = 14,
  }

  export enum AverageCadenceCase { 
    _AVERAGE_CADENCE_NOT_SET = 0,
    AVERAGE_CADENCE = 15,
  }

  export enum AverageTempCase { 
    _AVERAGE_TEMP_NOT_SET = 0,
    AVERAGE_TEMP = 16,
  }

  export enum AverageHeartrateCase { 
    _AVERAGE_HEARTRATE_NOT_SET = 0,
    AVERAGE_HEARTRATE = 17,
  }

  export enum MaxHeartrateCase { 
    _MAX_HEARTRATE_NOT_SET = 0,
    MAX_HEARTRATE = 18,
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
  getActivity(): Activity | undefined;
  setActivity(value?: Activity): GetResponse;
  hasActivity(): boolean;
  clearActivity(): GetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
  static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponse;
  static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
  export type AsObject = {
    activity?: Activity.AsObject,
  }
}

export class GetMineRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetMineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMineRequest): GetMineRequest.AsObject;
  static serializeBinaryToWriter(message: GetMineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMineRequest;
  static deserializeBinaryFromReader(message: GetMineRequest, reader: jspb.BinaryReader): GetMineRequest;
}

export namespace GetMineRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetMineResponse extends jspb.Message {
  getActivity(): Activity | undefined;
  setActivity(value?: Activity): GetMineResponse;
  hasActivity(): boolean;
  clearActivity(): GetMineResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMineResponse): GetMineResponse.AsObject;
  static serializeBinaryToWriter(message: GetMineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMineResponse;
  static deserializeBinaryFromReader(message: GetMineResponse, reader: jspb.BinaryReader): GetMineResponse;
}

export namespace GetMineResponse {
  export type AsObject = {
    activity?: Activity.AsObject,
  }
}

export class GetFeaturedRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetFeaturedRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeaturedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeaturedRequest): GetFeaturedRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeaturedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeaturedRequest;
  static deserializeBinaryFromReader(message: GetFeaturedRequest, reader: jspb.BinaryReader): GetFeaturedRequest;
}

export namespace GetFeaturedRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetFeaturedResponse extends jspb.Message {
  getActivity(): Activity | undefined;
  setActivity(value?: Activity): GetFeaturedResponse;
  hasActivity(): boolean;
  clearActivity(): GetFeaturedResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeaturedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeaturedResponse): GetFeaturedResponse.AsObject;
  static serializeBinaryToWriter(message: GetFeaturedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeaturedResponse;
  static deserializeBinaryFromReader(message: GetFeaturedResponse, reader: jspb.BinaryReader): GetFeaturedResponse;
}

export namespace GetFeaturedResponse {
  export type AsObject = {
    activity?: Activity.AsObject,
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
  getActivitiesList(): Array<Activity>;
  setActivitiesList(value: Array<Activity>): ListResponse;
  clearActivitiesList(): ListResponse;
  addActivities(value?: Activity, index?: number): Activity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    activitiesList: Array<Activity.AsObject>,
  }
}

export class ListMineRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMineRequest): ListMineRequest.AsObject;
  static serializeBinaryToWriter(message: ListMineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMineRequest;
  static deserializeBinaryFromReader(message: ListMineRequest, reader: jspb.BinaryReader): ListMineRequest;
}

export namespace ListMineRequest {
  export type AsObject = {
  }
}

export class ListMineResponse extends jspb.Message {
  getActivitiesList(): Array<Activity>;
  setActivitiesList(value: Array<Activity>): ListMineResponse;
  clearActivitiesList(): ListMineResponse;
  addActivities(value?: Activity, index?: number): Activity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMineResponse): ListMineResponse.AsObject;
  static serializeBinaryToWriter(message: ListMineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMineResponse;
  static deserializeBinaryFromReader(message: ListMineResponse, reader: jspb.BinaryReader): ListMineResponse;
}

export namespace ListMineResponse {
  export type AsObject = {
    activitiesList: Array<Activity.AsObject>,
  }
}

export class ListFeaturedRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeaturedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeaturedRequest): ListFeaturedRequest.AsObject;
  static serializeBinaryToWriter(message: ListFeaturedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeaturedRequest;
  static deserializeBinaryFromReader(message: ListFeaturedRequest, reader: jspb.BinaryReader): ListFeaturedRequest;
}

export namespace ListFeaturedRequest {
  export type AsObject = {
  }
}

export class ListFeaturedResponse extends jspb.Message {
  getActivitiesList(): Array<Activity>;
  setActivitiesList(value: Array<Activity>): ListFeaturedResponse;
  clearActivitiesList(): ListFeaturedResponse;
  addActivities(value?: Activity, index?: number): Activity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeaturedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeaturedResponse): ListFeaturedResponse.AsObject;
  static serializeBinaryToWriter(message: ListFeaturedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeaturedResponse;
  static deserializeBinaryFromReader(message: ListFeaturedResponse, reader: jspb.BinaryReader): ListFeaturedResponse;
}

export namespace ListFeaturedResponse {
  export type AsObject = {
    activitiesList: Array<Activity.AsObject>,
  }
}


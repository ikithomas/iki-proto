import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


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

  getStartDate(): number;
  setStartDate(value: number): Activity;

  getStats(): Stats | undefined;
  setStats(value?: Stats): Activity;
  hasStats(): boolean;
  clearStats(): Activity;

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
    startDate: number,
    stats?: Stats.AsObject,
  }
}

export class Stats extends jspb.Message {
  getStartLat(): number;
  setStartLat(value: number): Stats;

  getStartLng(): number;
  setStartLng(value: number): Stats;

  getEndLat(): number;
  setEndLat(value: number): Stats;

  getEndLng(): number;
  setEndLng(value: number): Stats;

  getDistance(): number;
  setDistance(value: number): Stats;

  getElevGain(): number;
  setElevGain(value: number): Stats;

  getElevLoss(): number;
  setElevLoss(value: number): Stats;

  getElapsedSec(): number;
  setElapsedSec(value: number): Stats;

  getMovingSec(): number;
  setMovingSec(value: number): Stats;

  getAvgCadence(): number;
  setAvgCadence(value: number): Stats;

  getAvgHeartrate(): number;
  setAvgHeartrate(value: number): Stats;

  getMinHeartrate(): number;
  setMinHeartrate(value: number): Stats;

  getMaxHeartrate(): number;
  setMaxHeartrate(value: number): Stats;

  getTrimp(): number;
  setTrimp(value: number): Stats;

  getHrZone0Sec(): number;
  setHrZone0Sec(value: number): Stats;

  getHrZone1Sec(): number;
  setHrZone1Sec(value: number): Stats;

  getHrZone2Sec(): number;
  setHrZone2Sec(value: number): Stats;

  getHrZone3Sec(): number;
  setHrZone3Sec(value: number): Stats;

  getHrZone4Sec(): number;
  setHrZone4Sec(value: number): Stats;

  getHrZone5Sec(): number;
  setHrZone5Sec(value: number): Stats;

  getHrZone0Trimp(): number;
  setHrZone0Trimp(value: number): Stats;

  getHrZone1Trimp(): number;
  setHrZone1Trimp(value: number): Stats;

  getHrZone2Trimp(): number;
  setHrZone2Trimp(value: number): Stats;

  getHrZone3Trimp(): number;
  setHrZone3Trimp(value: number): Stats;

  getHrZone4Trimp(): number;
  setHrZone4Trimp(value: number): Stats;

  getHrZone5Trimp(): number;
  setHrZone5Trimp(value: number): Stats;

  getPersonalMetric(): PersonalMetric | undefined;
  setPersonalMetric(value?: PersonalMetric): Stats;
  hasPersonalMetric(): boolean;
  clearPersonalMetric(): Stats;

  getAverageSpeed(): number;
  setAverageSpeed(value: number): Stats;

  getAverageEpSpeed(): number;
  setAverageEpSpeed(value: number): Stats;

  getAveragePace(): number;
  setAveragePace(value: number): Stats;

  getAverageEpPace(): number;
  setAverageEpPace(value: number): Stats;

  getActiveCalories(): number;
  setActiveCalories(value: number): Stats;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Stats.AsObject;
  static toObject(includeInstance: boolean, msg: Stats): Stats.AsObject;
  static serializeBinaryToWriter(message: Stats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Stats;
  static deserializeBinaryFromReader(message: Stats, reader: jspb.BinaryReader): Stats;
}

export namespace Stats {
  export type AsObject = {
    startLat: number,
    startLng: number,
    endLat: number,
    endLng: number,
    distance: number,
    elevGain: number,
    elevLoss: number,
    elapsedSec: number,
    movingSec: number,
    avgCadence: number,
    avgHeartrate: number,
    minHeartrate: number,
    maxHeartrate: number,
    trimp: number,
    hrZone0Sec: number,
    hrZone1Sec: number,
    hrZone2Sec: number,
    hrZone3Sec: number,
    hrZone4Sec: number,
    hrZone5Sec: number,
    hrZone0Trimp: number,
    hrZone1Trimp: number,
    hrZone2Trimp: number,
    hrZone3Trimp: number,
    hrZone4Trimp: number,
    hrZone5Trimp: number,
    personalMetric?: PersonalMetric.AsObject,
    averageSpeed: number,
    averageEpSpeed: number,
    averagePace: number,
    averageEpPace: number,
    activeCalories: number,
  }
}

export class PersonalMetric extends jspb.Message {
  getAge(): number;
  setAge(value: number): PersonalMetric;

  getHeight(): number;
  setHeight(value: number): PersonalMetric;

  getWeight(): number;
  setWeight(value: number): PersonalMetric;

  getMaxHeartrate(): number;
  setMaxHeartrate(value: number): PersonalMetric;

  getRestHeartrate(): number;
  setRestHeartrate(value: number): PersonalMetric;

  getVo2Max(): number;
  setVo2Max(value: number): PersonalMetric;

  getMale(): boolean;
  setMale(value: boolean): PersonalMetric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersonalMetric.AsObject;
  static toObject(includeInstance: boolean, msg: PersonalMetric): PersonalMetric.AsObject;
  static serializeBinaryToWriter(message: PersonalMetric, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersonalMetric;
  static deserializeBinaryFromReader(message: PersonalMetric, reader: jspb.BinaryReader): PersonalMetric;
}

export namespace PersonalMetric {
  export type AsObject = {
    age: number,
    height: number,
    weight: number,
    maxHeartrate: number,
    restHeartrate: number,
    vo2Max: number,
    male: boolean,
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


/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../google/protobuf/empty";

export const protobufPackage = "activity";

export interface Activity {
  id: string;
  stravaId: number;
  stravaAthleteId: number;
  name: string;
  type: string;
  startDate: number;
  stats: Stats | undefined;
}

export interface Stats {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  distance: number;
  elevGain: number;
  elevLoss: number;
  elapsedSec: number;
  movingSec: number;
  avgCadence: number;
  avgHeartrate: number;
  minHeartrate: number;
  maxHeartrate: number;
  trimp: number;
  hrZone0Sec: number;
  hrZone1Sec: number;
  hrZone2Sec: number;
  hrZone3Sec: number;
  hrZone4Sec: number;
  hrZone5Sec: number;
  hrZone0Trimp: number;
  hrZone1Trimp: number;
  hrZone2Trimp: number;
  hrZone3Trimp: number;
  hrZone4Trimp: number;
  hrZone5Trimp: number;
  personalMetric: PersonalMetric | undefined;
  averageSpeed: number;
  averageEpSpeed: number;
  averagePace: number;
  averageEpPace: number;
  activeCalories: number;
}

export interface PersonalMetric {
  age: number;
  height: number;
  weight: number;
  maxHeartrate: number;
  restHeartrate: number;
  vo2Max: number;
  male: boolean;
}

export interface GetRequest {
  id: string;
}

export interface GetResponse {
  activity: Activity | undefined;
}

export interface GetMineRequest {
  id: string;
}

export interface GetMineResponse {
  activity: Activity | undefined;
}

export interface GetFeaturedRequest {
  id: string;
}

export interface GetFeaturedResponse {
  activity: Activity | undefined;
}

export interface ListRequest {
}

export interface ListResponse {
  activities: Activity[];
}

export interface ListMineRequest {
}

export interface ListMineResponse {
  activities: Activity[];
}

export interface ListFeaturedRequest {
}

export interface ListFeaturedResponse {
  activities: Activity[];
}

function createBaseActivity(): Activity {
  return { id: "", stravaId: 0, stravaAthleteId: 0, name: "", type: "", startDate: 0, stats: undefined };
}

export const Activity = {
  encode(message: Activity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.stravaId !== 0) {
      writer.uint32(16).int64(message.stravaId);
    }
    if (message.stravaAthleteId !== 0) {
      writer.uint32(24).int64(message.stravaAthleteId);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.type !== "") {
      writer.uint32(42).string(message.type);
    }
    if (message.startDate !== 0) {
      writer.uint32(72).int64(message.startDate);
    }
    if (message.stats !== undefined) {
      Stats.encode(message.stats, writer.uint32(162).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Activity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.stravaId = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.stravaAthleteId = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.type = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.startDate = longToNumber(reader.int64() as Long);
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.stats = Stats.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Activity {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      stravaId: isSet(object.stravaId) ? Number(object.stravaId) : 0,
      stravaAthleteId: isSet(object.stravaAthleteId) ? Number(object.stravaAthleteId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? String(object.type) : "",
      startDate: isSet(object.startDate) ? Number(object.startDate) : 0,
      stats: isSet(object.stats) ? Stats.fromJSON(object.stats) : undefined,
    };
  },

  toJSON(message: Activity): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.stravaId !== 0) {
      obj.stravaId = Math.round(message.stravaId);
    }
    if (message.stravaAthleteId !== 0) {
      obj.stravaAthleteId = Math.round(message.stravaAthleteId);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.startDate !== 0) {
      obj.startDate = Math.round(message.startDate);
    }
    if (message.stats !== undefined) {
      obj.stats = Stats.toJSON(message.stats);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Activity>, I>>(base?: I): Activity {
    return Activity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Activity>, I>>(object: I): Activity {
    const message = createBaseActivity();
    message.id = object.id ?? "";
    message.stravaId = object.stravaId ?? 0;
    message.stravaAthleteId = object.stravaAthleteId ?? 0;
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    message.startDate = object.startDate ?? 0;
    message.stats = (object.stats !== undefined && object.stats !== null) ? Stats.fromPartial(object.stats) : undefined;
    return message;
  },
};

function createBaseStats(): Stats {
  return {
    startLat: 0,
    startLng: 0,
    endLat: 0,
    endLng: 0,
    distance: 0,
    elevGain: 0,
    elevLoss: 0,
    elapsedSec: 0,
    movingSec: 0,
    avgCadence: 0,
    avgHeartrate: 0,
    minHeartrate: 0,
    maxHeartrate: 0,
    trimp: 0,
    hrZone0Sec: 0,
    hrZone1Sec: 0,
    hrZone2Sec: 0,
    hrZone3Sec: 0,
    hrZone4Sec: 0,
    hrZone5Sec: 0,
    hrZone0Trimp: 0,
    hrZone1Trimp: 0,
    hrZone2Trimp: 0,
    hrZone3Trimp: 0,
    hrZone4Trimp: 0,
    hrZone5Trimp: 0,
    personalMetric: undefined,
    averageSpeed: 0,
    averageEpSpeed: 0,
    averagePace: 0,
    averageEpPace: 0,
    activeCalories: 0,
  };
}

export const Stats = {
  encode(message: Stats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startLat !== 0) {
      writer.uint32(13).float(message.startLat);
    }
    if (message.startLng !== 0) {
      writer.uint32(21).float(message.startLng);
    }
    if (message.endLat !== 0) {
      writer.uint32(29).float(message.endLat);
    }
    if (message.endLng !== 0) {
      writer.uint32(37).float(message.endLng);
    }
    if (message.distance !== 0) {
      writer.uint32(45).float(message.distance);
    }
    if (message.elevGain !== 0) {
      writer.uint32(53).float(message.elevGain);
    }
    if (message.elevLoss !== 0) {
      writer.uint32(61).float(message.elevLoss);
    }
    if (message.elapsedSec !== 0) {
      writer.uint32(64).int64(message.elapsedSec);
    }
    if (message.movingSec !== 0) {
      writer.uint32(256).int64(message.movingSec);
    }
    if (message.avgCadence !== 0) {
      writer.uint32(73).double(message.avgCadence);
    }
    if (message.avgHeartrate !== 0) {
      writer.uint32(81).double(message.avgHeartrate);
    }
    if (message.minHeartrate !== 0) {
      writer.uint32(88).int32(message.minHeartrate);
    }
    if (message.maxHeartrate !== 0) {
      writer.uint32(96).int32(message.maxHeartrate);
    }
    if (message.trimp !== 0) {
      writer.uint32(105).double(message.trimp);
    }
    if (message.hrZone0Sec !== 0) {
      writer.uint32(112).int64(message.hrZone0Sec);
    }
    if (message.hrZone1Sec !== 0) {
      writer.uint32(120).int64(message.hrZone1Sec);
    }
    if (message.hrZone2Sec !== 0) {
      writer.uint32(128).int64(message.hrZone2Sec);
    }
    if (message.hrZone3Sec !== 0) {
      writer.uint32(136).int64(message.hrZone3Sec);
    }
    if (message.hrZone4Sec !== 0) {
      writer.uint32(144).int64(message.hrZone4Sec);
    }
    if (message.hrZone5Sec !== 0) {
      writer.uint32(152).int64(message.hrZone5Sec);
    }
    if (message.hrZone0Trimp !== 0) {
      writer.uint32(161).double(message.hrZone0Trimp);
    }
    if (message.hrZone1Trimp !== 0) {
      writer.uint32(169).double(message.hrZone1Trimp);
    }
    if (message.hrZone2Trimp !== 0) {
      writer.uint32(177).double(message.hrZone2Trimp);
    }
    if (message.hrZone3Trimp !== 0) {
      writer.uint32(185).double(message.hrZone3Trimp);
    }
    if (message.hrZone4Trimp !== 0) {
      writer.uint32(193).double(message.hrZone4Trimp);
    }
    if (message.hrZone5Trimp !== 0) {
      writer.uint32(201).double(message.hrZone5Trimp);
    }
    if (message.personalMetric !== undefined) {
      PersonalMetric.encode(message.personalMetric, writer.uint32(210).fork()).ldelim();
    }
    if (message.averageSpeed !== 0) {
      writer.uint32(217).double(message.averageSpeed);
    }
    if (message.averageEpSpeed !== 0) {
      writer.uint32(225).double(message.averageEpSpeed);
    }
    if (message.averagePace !== 0) {
      writer.uint32(232).int32(message.averagePace);
    }
    if (message.averageEpPace !== 0) {
      writer.uint32(240).int32(message.averageEpPace);
    }
    if (message.activeCalories !== 0) {
      writer.uint32(248).int32(message.activeCalories);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Stats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.startLat = reader.float();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.startLng = reader.float();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.endLat = reader.float();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.endLng = reader.float();
          continue;
        case 5:
          if (tag !== 45) {
            break;
          }

          message.distance = reader.float();
          continue;
        case 6:
          if (tag !== 53) {
            break;
          }

          message.elevGain = reader.float();
          continue;
        case 7:
          if (tag !== 61) {
            break;
          }

          message.elevLoss = reader.float();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.elapsedSec = longToNumber(reader.int64() as Long);
          continue;
        case 32:
          if (tag !== 256) {
            break;
          }

          message.movingSec = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 73) {
            break;
          }

          message.avgCadence = reader.double();
          continue;
        case 10:
          if (tag !== 81) {
            break;
          }

          message.avgHeartrate = reader.double();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.minHeartrate = reader.int32();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.maxHeartrate = reader.int32();
          continue;
        case 13:
          if (tag !== 105) {
            break;
          }

          message.trimp = reader.double();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.hrZone0Sec = longToNumber(reader.int64() as Long);
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.hrZone1Sec = longToNumber(reader.int64() as Long);
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.hrZone2Sec = longToNumber(reader.int64() as Long);
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.hrZone3Sec = longToNumber(reader.int64() as Long);
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.hrZone4Sec = longToNumber(reader.int64() as Long);
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.hrZone5Sec = longToNumber(reader.int64() as Long);
          continue;
        case 20:
          if (tag !== 161) {
            break;
          }

          message.hrZone0Trimp = reader.double();
          continue;
        case 21:
          if (tag !== 169) {
            break;
          }

          message.hrZone1Trimp = reader.double();
          continue;
        case 22:
          if (tag !== 177) {
            break;
          }

          message.hrZone2Trimp = reader.double();
          continue;
        case 23:
          if (tag !== 185) {
            break;
          }

          message.hrZone3Trimp = reader.double();
          continue;
        case 24:
          if (tag !== 193) {
            break;
          }

          message.hrZone4Trimp = reader.double();
          continue;
        case 25:
          if (tag !== 201) {
            break;
          }

          message.hrZone5Trimp = reader.double();
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.personalMetric = PersonalMetric.decode(reader, reader.uint32());
          continue;
        case 27:
          if (tag !== 217) {
            break;
          }

          message.averageSpeed = reader.double();
          continue;
        case 28:
          if (tag !== 225) {
            break;
          }

          message.averageEpSpeed = reader.double();
          continue;
        case 29:
          if (tag !== 232) {
            break;
          }

          message.averagePace = reader.int32();
          continue;
        case 30:
          if (tag !== 240) {
            break;
          }

          message.averageEpPace = reader.int32();
          continue;
        case 31:
          if (tag !== 248) {
            break;
          }

          message.activeCalories = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Stats {
    return {
      startLat: isSet(object.startLat) ? Number(object.startLat) : 0,
      startLng: isSet(object.startLng) ? Number(object.startLng) : 0,
      endLat: isSet(object.endLat) ? Number(object.endLat) : 0,
      endLng: isSet(object.endLng) ? Number(object.endLng) : 0,
      distance: isSet(object.distance) ? Number(object.distance) : 0,
      elevGain: isSet(object.elevGain) ? Number(object.elevGain) : 0,
      elevLoss: isSet(object.elevLoss) ? Number(object.elevLoss) : 0,
      elapsedSec: isSet(object.elapsedSec) ? Number(object.elapsedSec) : 0,
      movingSec: isSet(object.movingSec) ? Number(object.movingSec) : 0,
      avgCadence: isSet(object.avgCadence) ? Number(object.avgCadence) : 0,
      avgHeartrate: isSet(object.avgHeartrate) ? Number(object.avgHeartrate) : 0,
      minHeartrate: isSet(object.minHeartrate) ? Number(object.minHeartrate) : 0,
      maxHeartrate: isSet(object.maxHeartrate) ? Number(object.maxHeartrate) : 0,
      trimp: isSet(object.trimp) ? Number(object.trimp) : 0,
      hrZone0Sec: isSet(object.hrZone0Sec) ? Number(object.hrZone0Sec) : 0,
      hrZone1Sec: isSet(object.hrZone1Sec) ? Number(object.hrZone1Sec) : 0,
      hrZone2Sec: isSet(object.hrZone2Sec) ? Number(object.hrZone2Sec) : 0,
      hrZone3Sec: isSet(object.hrZone3Sec) ? Number(object.hrZone3Sec) : 0,
      hrZone4Sec: isSet(object.hrZone4Sec) ? Number(object.hrZone4Sec) : 0,
      hrZone5Sec: isSet(object.hrZone5Sec) ? Number(object.hrZone5Sec) : 0,
      hrZone0Trimp: isSet(object.hrZone0Trimp) ? Number(object.hrZone0Trimp) : 0,
      hrZone1Trimp: isSet(object.hrZone1Trimp) ? Number(object.hrZone1Trimp) : 0,
      hrZone2Trimp: isSet(object.hrZone2Trimp) ? Number(object.hrZone2Trimp) : 0,
      hrZone3Trimp: isSet(object.hrZone3Trimp) ? Number(object.hrZone3Trimp) : 0,
      hrZone4Trimp: isSet(object.hrZone4Trimp) ? Number(object.hrZone4Trimp) : 0,
      hrZone5Trimp: isSet(object.hrZone5Trimp) ? Number(object.hrZone5Trimp) : 0,
      personalMetric: isSet(object.personalMetric) ? PersonalMetric.fromJSON(object.personalMetric) : undefined,
      averageSpeed: isSet(object.averageSpeed) ? Number(object.averageSpeed) : 0,
      averageEpSpeed: isSet(object.averageEpSpeed) ? Number(object.averageEpSpeed) : 0,
      averagePace: isSet(object.averagePace) ? Number(object.averagePace) : 0,
      averageEpPace: isSet(object.averageEpPace) ? Number(object.averageEpPace) : 0,
      activeCalories: isSet(object.activeCalories) ? Number(object.activeCalories) : 0,
    };
  },

  toJSON(message: Stats): unknown {
    const obj: any = {};
    if (message.startLat !== 0) {
      obj.startLat = message.startLat;
    }
    if (message.startLng !== 0) {
      obj.startLng = message.startLng;
    }
    if (message.endLat !== 0) {
      obj.endLat = message.endLat;
    }
    if (message.endLng !== 0) {
      obj.endLng = message.endLng;
    }
    if (message.distance !== 0) {
      obj.distance = message.distance;
    }
    if (message.elevGain !== 0) {
      obj.elevGain = message.elevGain;
    }
    if (message.elevLoss !== 0) {
      obj.elevLoss = message.elevLoss;
    }
    if (message.elapsedSec !== 0) {
      obj.elapsedSec = Math.round(message.elapsedSec);
    }
    if (message.movingSec !== 0) {
      obj.movingSec = Math.round(message.movingSec);
    }
    if (message.avgCadence !== 0) {
      obj.avgCadence = message.avgCadence;
    }
    if (message.avgHeartrate !== 0) {
      obj.avgHeartrate = message.avgHeartrate;
    }
    if (message.minHeartrate !== 0) {
      obj.minHeartrate = Math.round(message.minHeartrate);
    }
    if (message.maxHeartrate !== 0) {
      obj.maxHeartrate = Math.round(message.maxHeartrate);
    }
    if (message.trimp !== 0) {
      obj.trimp = message.trimp;
    }
    if (message.hrZone0Sec !== 0) {
      obj.hrZone0Sec = Math.round(message.hrZone0Sec);
    }
    if (message.hrZone1Sec !== 0) {
      obj.hrZone1Sec = Math.round(message.hrZone1Sec);
    }
    if (message.hrZone2Sec !== 0) {
      obj.hrZone2Sec = Math.round(message.hrZone2Sec);
    }
    if (message.hrZone3Sec !== 0) {
      obj.hrZone3Sec = Math.round(message.hrZone3Sec);
    }
    if (message.hrZone4Sec !== 0) {
      obj.hrZone4Sec = Math.round(message.hrZone4Sec);
    }
    if (message.hrZone5Sec !== 0) {
      obj.hrZone5Sec = Math.round(message.hrZone5Sec);
    }
    if (message.hrZone0Trimp !== 0) {
      obj.hrZone0Trimp = message.hrZone0Trimp;
    }
    if (message.hrZone1Trimp !== 0) {
      obj.hrZone1Trimp = message.hrZone1Trimp;
    }
    if (message.hrZone2Trimp !== 0) {
      obj.hrZone2Trimp = message.hrZone2Trimp;
    }
    if (message.hrZone3Trimp !== 0) {
      obj.hrZone3Trimp = message.hrZone3Trimp;
    }
    if (message.hrZone4Trimp !== 0) {
      obj.hrZone4Trimp = message.hrZone4Trimp;
    }
    if (message.hrZone5Trimp !== 0) {
      obj.hrZone5Trimp = message.hrZone5Trimp;
    }
    if (message.personalMetric !== undefined) {
      obj.personalMetric = PersonalMetric.toJSON(message.personalMetric);
    }
    if (message.averageSpeed !== 0) {
      obj.averageSpeed = message.averageSpeed;
    }
    if (message.averageEpSpeed !== 0) {
      obj.averageEpSpeed = message.averageEpSpeed;
    }
    if (message.averagePace !== 0) {
      obj.averagePace = Math.round(message.averagePace);
    }
    if (message.averageEpPace !== 0) {
      obj.averageEpPace = Math.round(message.averageEpPace);
    }
    if (message.activeCalories !== 0) {
      obj.activeCalories = Math.round(message.activeCalories);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Stats>, I>>(base?: I): Stats {
    return Stats.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Stats>, I>>(object: I): Stats {
    const message = createBaseStats();
    message.startLat = object.startLat ?? 0;
    message.startLng = object.startLng ?? 0;
    message.endLat = object.endLat ?? 0;
    message.endLng = object.endLng ?? 0;
    message.distance = object.distance ?? 0;
    message.elevGain = object.elevGain ?? 0;
    message.elevLoss = object.elevLoss ?? 0;
    message.elapsedSec = object.elapsedSec ?? 0;
    message.movingSec = object.movingSec ?? 0;
    message.avgCadence = object.avgCadence ?? 0;
    message.avgHeartrate = object.avgHeartrate ?? 0;
    message.minHeartrate = object.minHeartrate ?? 0;
    message.maxHeartrate = object.maxHeartrate ?? 0;
    message.trimp = object.trimp ?? 0;
    message.hrZone0Sec = object.hrZone0Sec ?? 0;
    message.hrZone1Sec = object.hrZone1Sec ?? 0;
    message.hrZone2Sec = object.hrZone2Sec ?? 0;
    message.hrZone3Sec = object.hrZone3Sec ?? 0;
    message.hrZone4Sec = object.hrZone4Sec ?? 0;
    message.hrZone5Sec = object.hrZone5Sec ?? 0;
    message.hrZone0Trimp = object.hrZone0Trimp ?? 0;
    message.hrZone1Trimp = object.hrZone1Trimp ?? 0;
    message.hrZone2Trimp = object.hrZone2Trimp ?? 0;
    message.hrZone3Trimp = object.hrZone3Trimp ?? 0;
    message.hrZone4Trimp = object.hrZone4Trimp ?? 0;
    message.hrZone5Trimp = object.hrZone5Trimp ?? 0;
    message.personalMetric = (object.personalMetric !== undefined && object.personalMetric !== null)
      ? PersonalMetric.fromPartial(object.personalMetric)
      : undefined;
    message.averageSpeed = object.averageSpeed ?? 0;
    message.averageEpSpeed = object.averageEpSpeed ?? 0;
    message.averagePace = object.averagePace ?? 0;
    message.averageEpPace = object.averageEpPace ?? 0;
    message.activeCalories = object.activeCalories ?? 0;
    return message;
  },
};

function createBasePersonalMetric(): PersonalMetric {
  return { age: 0, height: 0, weight: 0, maxHeartrate: 0, restHeartrate: 0, vo2Max: 0, male: false };
}

export const PersonalMetric = {
  encode(message: PersonalMetric, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.age !== 0) {
      writer.uint32(8).int32(message.age);
    }
    if (message.height !== 0) {
      writer.uint32(21).float(message.height);
    }
    if (message.weight !== 0) {
      writer.uint32(29).float(message.weight);
    }
    if (message.maxHeartrate !== 0) {
      writer.uint32(32).int32(message.maxHeartrate);
    }
    if (message.restHeartrate !== 0) {
      writer.uint32(40).int32(message.restHeartrate);
    }
    if (message.vo2Max !== 0) {
      writer.uint32(48).int32(message.vo2Max);
    }
    if (message.male === true) {
      writer.uint32(56).bool(message.male);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PersonalMetric {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePersonalMetric();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.age = reader.int32();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.height = reader.float();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.weight = reader.float();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.maxHeartrate = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.restHeartrate = reader.int32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.vo2Max = reader.int32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.male = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PersonalMetric {
    return {
      age: isSet(object.age) ? Number(object.age) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      weight: isSet(object.weight) ? Number(object.weight) : 0,
      maxHeartrate: isSet(object.maxHeartrate) ? Number(object.maxHeartrate) : 0,
      restHeartrate: isSet(object.restHeartrate) ? Number(object.restHeartrate) : 0,
      vo2Max: isSet(object.vo2Max) ? Number(object.vo2Max) : 0,
      male: isSet(object.male) ? Boolean(object.male) : false,
    };
  },

  toJSON(message: PersonalMetric): unknown {
    const obj: any = {};
    if (message.age !== 0) {
      obj.age = Math.round(message.age);
    }
    if (message.height !== 0) {
      obj.height = message.height;
    }
    if (message.weight !== 0) {
      obj.weight = message.weight;
    }
    if (message.maxHeartrate !== 0) {
      obj.maxHeartrate = Math.round(message.maxHeartrate);
    }
    if (message.restHeartrate !== 0) {
      obj.restHeartrate = Math.round(message.restHeartrate);
    }
    if (message.vo2Max !== 0) {
      obj.vo2Max = Math.round(message.vo2Max);
    }
    if (message.male === true) {
      obj.male = message.male;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PersonalMetric>, I>>(base?: I): PersonalMetric {
    return PersonalMetric.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PersonalMetric>, I>>(object: I): PersonalMetric {
    const message = createBasePersonalMetric();
    message.age = object.age ?? 0;
    message.height = object.height ?? 0;
    message.weight = object.weight ?? 0;
    message.maxHeartrate = object.maxHeartrate ?? 0;
    message.restHeartrate = object.restHeartrate ?? 0;
    message.vo2Max = object.vo2Max ?? 0;
    message.male = object.male ?? false;
    return message;
  },
};

function createBaseGetRequest(): GetRequest {
  return { id: "" };
}

export const GetRequest = {
  encode(message: GetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: GetRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetRequest>, I>>(base?: I): GetRequest {
    return GetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetRequest>, I>>(object: I): GetRequest {
    const message = createBaseGetRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetResponse(): GetResponse {
  return { activity: undefined };
}

export const GetResponse = {
  encode(message: GetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activity !== undefined) {
      Activity.encode(message.activity, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.activity = Activity.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetResponse {
    return { activity: isSet(object.activity) ? Activity.fromJSON(object.activity) : undefined };
  },

  toJSON(message: GetResponse): unknown {
    const obj: any = {};
    if (message.activity !== undefined) {
      obj.activity = Activity.toJSON(message.activity);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetResponse>, I>>(base?: I): GetResponse {
    return GetResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetResponse>, I>>(object: I): GetResponse {
    const message = createBaseGetResponse();
    message.activity = (object.activity !== undefined && object.activity !== null)
      ? Activity.fromPartial(object.activity)
      : undefined;
    return message;
  },
};

function createBaseGetMineRequest(): GetMineRequest {
  return { id: "" };
}

export const GetMineRequest = {
  encode(message: GetMineRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMineRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMineRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetMineRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: GetMineRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMineRequest>, I>>(base?: I): GetMineRequest {
    return GetMineRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetMineRequest>, I>>(object: I): GetMineRequest {
    const message = createBaseGetMineRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetMineResponse(): GetMineResponse {
  return { activity: undefined };
}

export const GetMineResponse = {
  encode(message: GetMineResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activity !== undefined) {
      Activity.encode(message.activity, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMineResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMineResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.activity = Activity.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetMineResponse {
    return { activity: isSet(object.activity) ? Activity.fromJSON(object.activity) : undefined };
  },

  toJSON(message: GetMineResponse): unknown {
    const obj: any = {};
    if (message.activity !== undefined) {
      obj.activity = Activity.toJSON(message.activity);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMineResponse>, I>>(base?: I): GetMineResponse {
    return GetMineResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetMineResponse>, I>>(object: I): GetMineResponse {
    const message = createBaseGetMineResponse();
    message.activity = (object.activity !== undefined && object.activity !== null)
      ? Activity.fromPartial(object.activity)
      : undefined;
    return message;
  },
};

function createBaseGetFeaturedRequest(): GetFeaturedRequest {
  return { id: "" };
}

export const GetFeaturedRequest = {
  encode(message: GetFeaturedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFeaturedRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFeaturedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetFeaturedRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: GetFeaturedRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetFeaturedRequest>, I>>(base?: I): GetFeaturedRequest {
    return GetFeaturedRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetFeaturedRequest>, I>>(object: I): GetFeaturedRequest {
    const message = createBaseGetFeaturedRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetFeaturedResponse(): GetFeaturedResponse {
  return { activity: undefined };
}

export const GetFeaturedResponse = {
  encode(message: GetFeaturedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activity !== undefined) {
      Activity.encode(message.activity, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFeaturedResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFeaturedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.activity = Activity.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetFeaturedResponse {
    return { activity: isSet(object.activity) ? Activity.fromJSON(object.activity) : undefined };
  },

  toJSON(message: GetFeaturedResponse): unknown {
    const obj: any = {};
    if (message.activity !== undefined) {
      obj.activity = Activity.toJSON(message.activity);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetFeaturedResponse>, I>>(base?: I): GetFeaturedResponse {
    return GetFeaturedResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetFeaturedResponse>, I>>(object: I): GetFeaturedResponse {
    const message = createBaseGetFeaturedResponse();
    message.activity = (object.activity !== undefined && object.activity !== null)
      ? Activity.fromPartial(object.activity)
      : undefined;
    return message;
  },
};

function createBaseListRequest(): ListRequest {
  return {};
}

export const ListRequest = {
  encode(_: ListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ListRequest {
    return {};
  },

  toJSON(_: ListRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ListRequest>, I>>(base?: I): ListRequest {
    return ListRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListRequest>, I>>(_: I): ListRequest {
    const message = createBaseListRequest();
    return message;
  },
};

function createBaseListResponse(): ListResponse {
  return { activities: [] };
}

export const ListResponse = {
  encode(message: ListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.activities) {
      Activity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.activities.push(Activity.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListResponse {
    return {
      activities: Array.isArray(object?.activities) ? object.activities.map((e: any) => Activity.fromJSON(e)) : [],
    };
  },

  toJSON(message: ListResponse): unknown {
    const obj: any = {};
    if (message.activities?.length) {
      obj.activities = message.activities.map((e) => Activity.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListResponse>, I>>(base?: I): ListResponse {
    return ListResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListResponse>, I>>(object: I): ListResponse {
    const message = createBaseListResponse();
    message.activities = object.activities?.map((e) => Activity.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListMineRequest(): ListMineRequest {
  return {};
}

export const ListMineRequest = {
  encode(_: ListMineRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMineRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMineRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ListMineRequest {
    return {};
  },

  toJSON(_: ListMineRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ListMineRequest>, I>>(base?: I): ListMineRequest {
    return ListMineRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListMineRequest>, I>>(_: I): ListMineRequest {
    const message = createBaseListMineRequest();
    return message;
  },
};

function createBaseListMineResponse(): ListMineResponse {
  return { activities: [] };
}

export const ListMineResponse = {
  encode(message: ListMineResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.activities) {
      Activity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMineResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMineResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.activities.push(Activity.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListMineResponse {
    return {
      activities: Array.isArray(object?.activities) ? object.activities.map((e: any) => Activity.fromJSON(e)) : [],
    };
  },

  toJSON(message: ListMineResponse): unknown {
    const obj: any = {};
    if (message.activities?.length) {
      obj.activities = message.activities.map((e) => Activity.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListMineResponse>, I>>(base?: I): ListMineResponse {
    return ListMineResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListMineResponse>, I>>(object: I): ListMineResponse {
    const message = createBaseListMineResponse();
    message.activities = object.activities?.map((e) => Activity.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListFeaturedRequest(): ListFeaturedRequest {
  return {};
}

export const ListFeaturedRequest = {
  encode(_: ListFeaturedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFeaturedRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFeaturedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ListFeaturedRequest {
    return {};
  },

  toJSON(_: ListFeaturedRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ListFeaturedRequest>, I>>(base?: I): ListFeaturedRequest {
    return ListFeaturedRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFeaturedRequest>, I>>(_: I): ListFeaturedRequest {
    const message = createBaseListFeaturedRequest();
    return message;
  },
};

function createBaseListFeaturedResponse(): ListFeaturedResponse {
  return { activities: [] };
}

export const ListFeaturedResponse = {
  encode(message: ListFeaturedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.activities) {
      Activity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFeaturedResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFeaturedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.activities.push(Activity.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListFeaturedResponse {
    return {
      activities: Array.isArray(object?.activities) ? object.activities.map((e: any) => Activity.fromJSON(e)) : [],
    };
  },

  toJSON(message: ListFeaturedResponse): unknown {
    const obj: any = {};
    if (message.activities?.length) {
      obj.activities = message.activities.map((e) => Activity.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListFeaturedResponse>, I>>(base?: I): ListFeaturedResponse {
    return ListFeaturedResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFeaturedResponse>, I>>(object: I): ListFeaturedResponse {
    const message = createBaseListFeaturedResponse();
    message.activities = object.activities?.map((e) => Activity.fromPartial(e)) || [];
    return message;
  },
};

export interface ActivitySvc {
  Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
  GetMine(request: DeepPartial<GetMineRequest>, metadata?: grpc.Metadata): Promise<GetMineResponse>;
  GetFeatured(request: DeepPartial<GetFeaturedRequest>, metadata?: grpc.Metadata): Promise<GetFeaturedResponse>;
  List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
  ListMine(request: DeepPartial<ListMineRequest>, metadata?: grpc.Metadata): Promise<ListMineResponse>;
  ListFeatured(request: DeepPartial<ListFeaturedRequest>, metadata?: grpc.Metadata): Promise<ListFeaturedResponse>;
  CalculateStats(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<Empty>;
}

export class ActivitySvcClientImpl implements ActivitySvc {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Get = this.Get.bind(this);
    this.GetMine = this.GetMine.bind(this);
    this.GetFeatured = this.GetFeatured.bind(this);
    this.List = this.List.bind(this);
    this.ListMine = this.ListMine.bind(this);
    this.ListFeatured = this.ListFeatured.bind(this);
    this.CalculateStats = this.CalculateStats.bind(this);
  }

  Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse> {
    return this.rpc.unary(ActivitySvcGetDesc, GetRequest.fromPartial(request), metadata);
  }

  GetMine(request: DeepPartial<GetMineRequest>, metadata?: grpc.Metadata): Promise<GetMineResponse> {
    return this.rpc.unary(ActivitySvcGetMineDesc, GetMineRequest.fromPartial(request), metadata);
  }

  GetFeatured(request: DeepPartial<GetFeaturedRequest>, metadata?: grpc.Metadata): Promise<GetFeaturedResponse> {
    return this.rpc.unary(ActivitySvcGetFeaturedDesc, GetFeaturedRequest.fromPartial(request), metadata);
  }

  List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse> {
    return this.rpc.unary(ActivitySvcListDesc, ListRequest.fromPartial(request), metadata);
  }

  ListMine(request: DeepPartial<ListMineRequest>, metadata?: grpc.Metadata): Promise<ListMineResponse> {
    return this.rpc.unary(ActivitySvcListMineDesc, ListMineRequest.fromPartial(request), metadata);
  }

  ListFeatured(request: DeepPartial<ListFeaturedRequest>, metadata?: grpc.Metadata): Promise<ListFeaturedResponse> {
    return this.rpc.unary(ActivitySvcListFeaturedDesc, ListFeaturedRequest.fromPartial(request), metadata);
  }

  CalculateStats(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<Empty> {
    return this.rpc.unary(ActivitySvcCalculateStatsDesc, Empty.fromPartial(request), metadata);
  }
}

export const ActivitySvcDesc = { serviceName: "activity.ActivitySvc" };

export const ActivitySvcGetDesc: UnaryMethodDefinitionish = {
  methodName: "Get",
  service: ActivitySvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const ActivitySvcGetMineDesc: UnaryMethodDefinitionish = {
  methodName: "GetMine",
  service: ActivitySvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetMineRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetMineResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const ActivitySvcGetFeaturedDesc: UnaryMethodDefinitionish = {
  methodName: "GetFeatured",
  service: ActivitySvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetFeaturedRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetFeaturedResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const ActivitySvcListDesc: UnaryMethodDefinitionish = {
  methodName: "List",
  service: ActivitySvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ListRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ListResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const ActivitySvcListMineDesc: UnaryMethodDefinitionish = {
  methodName: "ListMine",
  service: ActivitySvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ListMineRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ListMineResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const ActivitySvcListFeaturedDesc: UnaryMethodDefinitionish = {
  methodName: "ListFeatured",
  service: ActivitySvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ListFeaturedRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ListFeaturedResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const ActivitySvcCalculateStatsDesc: UnaryMethodDefinitionish = {
  methodName: "CalculateStats",
  service: ActivitySvcDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = Empty.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
      upStreamRetryCodes?: number[];
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata ?? this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata ?? {},
        ...(this.options.transport !== undefined ? { transport: this.options.transport } : {}),
        debug: this.options.debug ?? false,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message!.toObject());
          } else {
            const err = new GrpcWebError(response.statusMessage, response.status, response.trailers);
            reject(err);
          }
        },
      });
    });
  }
}

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export class GrpcWebError extends tsProtoGlobalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}

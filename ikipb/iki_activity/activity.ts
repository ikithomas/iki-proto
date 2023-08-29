/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "activity";

export interface Activity {
  id: string;
  stravaId: number;
  stravaAthleteId: number;
  name: string;
  type: string;
  startDate: number;
  stats: ActivityStats | undefined;
}

export interface ActivityStats {
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
  averageSpeed: number;
  averageEpSpeed: number;
  averagePace: number;
  averageEpPace: number;
  activeCalories: number;
}

export interface Athlete {
  id: string;
  userId: string;
  stravaId: string;
  AthleteFitness: AthleteFitness | undefined;
}

export interface AthleteFitness {
  age: number;
  height: number;
  weight: number;
  maxHeartrate: number;
  restHeartrate: number;
  vo2Max: number;
  male: boolean;
}

export interface Chunk {
  chunk: Uint8Array;
}

export interface Gpx {
  name: string;
  startDate: number;
  type: string;
  points: Point[];
}

export interface Point {
  lat: number;
  lon: number;
  ele: number;
  time: number;
  hr: number;
  cad: number;
}

export interface EventActivityUpload {
  activityId: string;
  ikiUserId: string;
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
      ActivityStats.encode(message.stats, writer.uint32(162).fork()).ldelim();
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

          message.stats = ActivityStats.decode(reader, reader.uint32());
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
      stats: isSet(object.stats) ? ActivityStats.fromJSON(object.stats) : undefined,
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
      obj.stats = ActivityStats.toJSON(message.stats);
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
    message.stats = (object.stats !== undefined && object.stats !== null)
      ? ActivityStats.fromPartial(object.stats)
      : undefined;
    return message;
  },
};

function createBaseActivityStats(): ActivityStats {
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
    averageSpeed: 0,
    averageEpSpeed: 0,
    averagePace: 0,
    averageEpPace: 0,
    activeCalories: 0,
  };
}

export const ActivityStats = {
  encode(message: ActivityStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivityStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivityStats();
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

  fromJSON(object: any): ActivityStats {
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
      averageSpeed: isSet(object.averageSpeed) ? Number(object.averageSpeed) : 0,
      averageEpSpeed: isSet(object.averageEpSpeed) ? Number(object.averageEpSpeed) : 0,
      averagePace: isSet(object.averagePace) ? Number(object.averagePace) : 0,
      averageEpPace: isSet(object.averageEpPace) ? Number(object.averageEpPace) : 0,
      activeCalories: isSet(object.activeCalories) ? Number(object.activeCalories) : 0,
    };
  },

  toJSON(message: ActivityStats): unknown {
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

  create<I extends Exact<DeepPartial<ActivityStats>, I>>(base?: I): ActivityStats {
    return ActivityStats.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActivityStats>, I>>(object: I): ActivityStats {
    const message = createBaseActivityStats();
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
    message.averageSpeed = object.averageSpeed ?? 0;
    message.averageEpSpeed = object.averageEpSpeed ?? 0;
    message.averagePace = object.averagePace ?? 0;
    message.averageEpPace = object.averageEpPace ?? 0;
    message.activeCalories = object.activeCalories ?? 0;
    return message;
  },
};

function createBaseAthlete(): Athlete {
  return { id: "", userId: "", stravaId: "", AthleteFitness: undefined };
}

export const Athlete = {
  encode(message: Athlete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    if (message.stravaId !== "") {
      writer.uint32(26).string(message.stravaId);
    }
    if (message.AthleteFitness !== undefined) {
      AthleteFitness.encode(message.AthleteFitness, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Athlete {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAthlete();
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
          if (tag !== 18) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.stravaId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.AthleteFitness = AthleteFitness.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Athlete {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
      stravaId: isSet(object.stravaId) ? String(object.stravaId) : "",
      AthleteFitness: isSet(object.AthleteFitness) ? AthleteFitness.fromJSON(object.AthleteFitness) : undefined,
    };
  },

  toJSON(message: Athlete): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.stravaId !== "") {
      obj.stravaId = message.stravaId;
    }
    if (message.AthleteFitness !== undefined) {
      obj.AthleteFitness = AthleteFitness.toJSON(message.AthleteFitness);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Athlete>, I>>(base?: I): Athlete {
    return Athlete.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Athlete>, I>>(object: I): Athlete {
    const message = createBaseAthlete();
    message.id = object.id ?? "";
    message.userId = object.userId ?? "";
    message.stravaId = object.stravaId ?? "";
    message.AthleteFitness = (object.AthleteFitness !== undefined && object.AthleteFitness !== null)
      ? AthleteFitness.fromPartial(object.AthleteFitness)
      : undefined;
    return message;
  },
};

function createBaseAthleteFitness(): AthleteFitness {
  return { age: 0, height: 0, weight: 0, maxHeartrate: 0, restHeartrate: 0, vo2Max: 0, male: false };
}

export const AthleteFitness = {
  encode(message: AthleteFitness, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AthleteFitness {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAthleteFitness();
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

  fromJSON(object: any): AthleteFitness {
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

  toJSON(message: AthleteFitness): unknown {
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

  create<I extends Exact<DeepPartial<AthleteFitness>, I>>(base?: I): AthleteFitness {
    return AthleteFitness.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AthleteFitness>, I>>(object: I): AthleteFitness {
    const message = createBaseAthleteFitness();
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

function createBaseChunk(): Chunk {
  return { chunk: new Uint8Array(0) };
}

export const Chunk = {
  encode(message: Chunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chunk.length !== 0) {
      writer.uint32(10).bytes(message.chunk);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Chunk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chunk = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Chunk {
    return { chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array(0) };
  },

  toJSON(message: Chunk): unknown {
    const obj: any = {};
    if (message.chunk.length !== 0) {
      obj.chunk = base64FromBytes(message.chunk);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Chunk>, I>>(base?: I): Chunk {
    return Chunk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Chunk>, I>>(object: I): Chunk {
    const message = createBaseChunk();
    message.chunk = object.chunk ?? new Uint8Array(0);
    return message;
  },
};

function createBaseGpx(): Gpx {
  return { name: "", startDate: 0, type: "", points: [] };
}

export const Gpx = {
  encode(message: Gpx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.startDate !== 0) {
      writer.uint32(16).int64(message.startDate);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    for (const v of message.points) {
      Point.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Gpx {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGpx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.startDate = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.type = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.points.push(Point.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Gpx {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      startDate: isSet(object.startDate) ? Number(object.startDate) : 0,
      type: isSet(object.type) ? String(object.type) : "",
      points: Array.isArray(object?.points) ? object.points.map((e: any) => Point.fromJSON(e)) : [],
    };
  },

  toJSON(message: Gpx): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.startDate !== 0) {
      obj.startDate = Math.round(message.startDate);
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.points?.length) {
      obj.points = message.points.map((e) => Point.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Gpx>, I>>(base?: I): Gpx {
    return Gpx.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Gpx>, I>>(object: I): Gpx {
    const message = createBaseGpx();
    message.name = object.name ?? "";
    message.startDate = object.startDate ?? 0;
    message.type = object.type ?? "";
    message.points = object.points?.map((e) => Point.fromPartial(e)) || [];
    return message;
  },
};

function createBasePoint(): Point {
  return { lat: 0, lon: 0, ele: 0, time: 0, hr: 0, cad: 0 };
}

export const Point = {
  encode(message: Point, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lat !== 0) {
      writer.uint32(13).float(message.lat);
    }
    if (message.lon !== 0) {
      writer.uint32(21).float(message.lon);
    }
    if (message.ele !== 0) {
      writer.uint32(29).float(message.ele);
    }
    if (message.time !== 0) {
      writer.uint32(32).int64(message.time);
    }
    if (message.hr !== 0) {
      writer.uint32(40).int32(message.hr);
    }
    if (message.cad !== 0) {
      writer.uint32(48).int32(message.cad);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Point {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.lat = reader.float();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.lon = reader.float();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.ele = reader.float();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.time = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.hr = reader.int32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.cad = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Point {
    return {
      lat: isSet(object.lat) ? Number(object.lat) : 0,
      lon: isSet(object.lon) ? Number(object.lon) : 0,
      ele: isSet(object.ele) ? Number(object.ele) : 0,
      time: isSet(object.time) ? Number(object.time) : 0,
      hr: isSet(object.hr) ? Number(object.hr) : 0,
      cad: isSet(object.cad) ? Number(object.cad) : 0,
    };
  },

  toJSON(message: Point): unknown {
    const obj: any = {};
    if (message.lat !== 0) {
      obj.lat = message.lat;
    }
    if (message.lon !== 0) {
      obj.lon = message.lon;
    }
    if (message.ele !== 0) {
      obj.ele = message.ele;
    }
    if (message.time !== 0) {
      obj.time = Math.round(message.time);
    }
    if (message.hr !== 0) {
      obj.hr = Math.round(message.hr);
    }
    if (message.cad !== 0) {
      obj.cad = Math.round(message.cad);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Point>, I>>(base?: I): Point {
    return Point.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Point>, I>>(object: I): Point {
    const message = createBasePoint();
    message.lat = object.lat ?? 0;
    message.lon = object.lon ?? 0;
    message.ele = object.ele ?? 0;
    message.time = object.time ?? 0;
    message.hr = object.hr ?? 0;
    message.cad = object.cad ?? 0;
    return message;
  },
};

function createBaseEventActivityUpload(): EventActivityUpload {
  return { activityId: "", ikiUserId: "" };
}

export const EventActivityUpload = {
  encode(message: EventActivityUpload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activityId !== "") {
      writer.uint32(10).string(message.activityId);
    }
    if (message.ikiUserId !== "") {
      writer.uint32(18).string(message.ikiUserId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventActivityUpload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventActivityUpload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.activityId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ikiUserId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventActivityUpload {
    return {
      activityId: isSet(object.activityId) ? String(object.activityId) : "",
      ikiUserId: isSet(object.ikiUserId) ? String(object.ikiUserId) : "",
    };
  },

  toJSON(message: EventActivityUpload): unknown {
    const obj: any = {};
    if (message.activityId !== "") {
      obj.activityId = message.activityId;
    }
    if (message.ikiUserId !== "") {
      obj.ikiUserId = message.ikiUserId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventActivityUpload>, I>>(base?: I): EventActivityUpload {
    return EventActivityUpload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventActivityUpload>, I>>(object: I): EventActivityUpload {
    const message = createBaseEventActivityUpload();
    message.activityId = object.activityId ?? "";
    message.ikiUserId = object.ikiUserId ?? "";
    return message;
  },
};

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

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

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

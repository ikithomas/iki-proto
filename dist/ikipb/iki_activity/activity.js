"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventActivityUpload = exports.Point = exports.Gpx = exports.Chunk = exports.AthleteFitness = exports.Athlete = exports.ActivityStats = exports.Activity = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "activity";
function createBaseActivity() {
    return { id: "", stravaId: 0, stravaAthleteId: 0, name: "", type: "", startDate: 0, stats: undefined };
}
exports.Activity = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            exports.ActivityStats.encode(message.stats, writer.uint32(162).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.stravaId = longToNumber(reader.int64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.stravaAthleteId = longToNumber(reader.int64());
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
                    message.startDate = longToNumber(reader.int64());
                    continue;
                case 20:
                    if (tag !== 162) {
                        break;
                    }
                    message.stats = exports.ActivityStats.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            stravaId: isSet(object.stravaId) ? Number(object.stravaId) : 0,
            stravaAthleteId: isSet(object.stravaAthleteId) ? Number(object.stravaAthleteId) : 0,
            name: isSet(object.name) ? String(object.name) : "",
            type: isSet(object.type) ? String(object.type) : "",
            startDate: isSet(object.startDate) ? Number(object.startDate) : 0,
            stats: isSet(object.stats) ? exports.ActivityStats.fromJSON(object.stats) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
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
            obj.stats = exports.ActivityStats.toJSON(message.stats);
        }
        return obj;
    },
    create(base) {
        return exports.Activity.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseActivity();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.stravaId = (_b = object.stravaId) !== null && _b !== void 0 ? _b : 0;
        message.stravaAthleteId = (_c = object.stravaAthleteId) !== null && _c !== void 0 ? _c : 0;
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.type = (_e = object.type) !== null && _e !== void 0 ? _e : "";
        message.startDate = (_f = object.startDate) !== null && _f !== void 0 ? _f : 0;
        message.stats = (object.stats !== undefined && object.stats !== null)
            ? exports.ActivityStats.fromPartial(object.stats)
            : undefined;
        return message;
    },
};
function createBaseActivityStats() {
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
exports.ActivityStats = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.elapsedSec = longToNumber(reader.int64());
                    continue;
                case 32:
                    if (tag !== 256) {
                        break;
                    }
                    message.movingSec = longToNumber(reader.int64());
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
                    message.hrZone0Sec = longToNumber(reader.int64());
                    continue;
                case 15:
                    if (tag !== 120) {
                        break;
                    }
                    message.hrZone1Sec = longToNumber(reader.int64());
                    continue;
                case 16:
                    if (tag !== 128) {
                        break;
                    }
                    message.hrZone2Sec = longToNumber(reader.int64());
                    continue;
                case 17:
                    if (tag !== 136) {
                        break;
                    }
                    message.hrZone3Sec = longToNumber(reader.int64());
                    continue;
                case 18:
                    if (tag !== 144) {
                        break;
                    }
                    message.hrZone4Sec = longToNumber(reader.int64());
                    continue;
                case 19:
                    if (tag !== 152) {
                        break;
                    }
                    message.hrZone5Sec = longToNumber(reader.int64());
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
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return exports.ActivityStats.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6;
        const message = createBaseActivityStats();
        message.startLat = (_a = object.startLat) !== null && _a !== void 0 ? _a : 0;
        message.startLng = (_b = object.startLng) !== null && _b !== void 0 ? _b : 0;
        message.endLat = (_c = object.endLat) !== null && _c !== void 0 ? _c : 0;
        message.endLng = (_d = object.endLng) !== null && _d !== void 0 ? _d : 0;
        message.distance = (_e = object.distance) !== null && _e !== void 0 ? _e : 0;
        message.elevGain = (_f = object.elevGain) !== null && _f !== void 0 ? _f : 0;
        message.elevLoss = (_g = object.elevLoss) !== null && _g !== void 0 ? _g : 0;
        message.elapsedSec = (_h = object.elapsedSec) !== null && _h !== void 0 ? _h : 0;
        message.movingSec = (_j = object.movingSec) !== null && _j !== void 0 ? _j : 0;
        message.avgCadence = (_k = object.avgCadence) !== null && _k !== void 0 ? _k : 0;
        message.avgHeartrate = (_l = object.avgHeartrate) !== null && _l !== void 0 ? _l : 0;
        message.minHeartrate = (_m = object.minHeartrate) !== null && _m !== void 0 ? _m : 0;
        message.maxHeartrate = (_o = object.maxHeartrate) !== null && _o !== void 0 ? _o : 0;
        message.trimp = (_p = object.trimp) !== null && _p !== void 0 ? _p : 0;
        message.hrZone0Sec = (_q = object.hrZone0Sec) !== null && _q !== void 0 ? _q : 0;
        message.hrZone1Sec = (_r = object.hrZone1Sec) !== null && _r !== void 0 ? _r : 0;
        message.hrZone2Sec = (_s = object.hrZone2Sec) !== null && _s !== void 0 ? _s : 0;
        message.hrZone3Sec = (_t = object.hrZone3Sec) !== null && _t !== void 0 ? _t : 0;
        message.hrZone4Sec = (_u = object.hrZone4Sec) !== null && _u !== void 0 ? _u : 0;
        message.hrZone5Sec = (_v = object.hrZone5Sec) !== null && _v !== void 0 ? _v : 0;
        message.hrZone0Trimp = (_w = object.hrZone0Trimp) !== null && _w !== void 0 ? _w : 0;
        message.hrZone1Trimp = (_x = object.hrZone1Trimp) !== null && _x !== void 0 ? _x : 0;
        message.hrZone2Trimp = (_y = object.hrZone2Trimp) !== null && _y !== void 0 ? _y : 0;
        message.hrZone3Trimp = (_z = object.hrZone3Trimp) !== null && _z !== void 0 ? _z : 0;
        message.hrZone4Trimp = (_0 = object.hrZone4Trimp) !== null && _0 !== void 0 ? _0 : 0;
        message.hrZone5Trimp = (_1 = object.hrZone5Trimp) !== null && _1 !== void 0 ? _1 : 0;
        message.averageSpeed = (_2 = object.averageSpeed) !== null && _2 !== void 0 ? _2 : 0;
        message.averageEpSpeed = (_3 = object.averageEpSpeed) !== null && _3 !== void 0 ? _3 : 0;
        message.averagePace = (_4 = object.averagePace) !== null && _4 !== void 0 ? _4 : 0;
        message.averageEpPace = (_5 = object.averageEpPace) !== null && _5 !== void 0 ? _5 : 0;
        message.activeCalories = (_6 = object.activeCalories) !== null && _6 !== void 0 ? _6 : 0;
        return message;
    },
};
function createBaseAthlete() {
    return { id: "", userId: "", stravaId: "", fitness: undefined };
}
exports.Athlete = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        if (message.stravaId !== "") {
            writer.uint32(26).string(message.stravaId);
        }
        if (message.fitness !== undefined) {
            exports.AthleteFitness.encode(message.fitness, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.fitness = exports.AthleteFitness.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            userId: isSet(object.userId) ? String(object.userId) : "",
            stravaId: isSet(object.stravaId) ? String(object.stravaId) : "",
            fitness: isSet(object.fitness) ? exports.AthleteFitness.fromJSON(object.fitness) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.stravaId !== "") {
            obj.stravaId = message.stravaId;
        }
        if (message.fitness !== undefined) {
            obj.fitness = exports.AthleteFitness.toJSON(message.fitness);
        }
        return obj;
    },
    create(base) {
        return exports.Athlete.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAthlete();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.userId = (_b = object.userId) !== null && _b !== void 0 ? _b : "";
        message.stravaId = (_c = object.stravaId) !== null && _c !== void 0 ? _c : "";
        message.fitness = (object.fitness !== undefined && object.fitness !== null)
            ? exports.AthleteFitness.fromPartial(object.fitness)
            : undefined;
        return message;
    },
};
function createBaseAthleteFitness() {
    return { age: 0, height: 0, weight: 0, maxHeartrate: 0, restHeartrate: 0, vo2Max: 0, male: false };
}
exports.AthleteFitness = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return exports.AthleteFitness.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseAthleteFitness();
        message.age = (_a = object.age) !== null && _a !== void 0 ? _a : 0;
        message.height = (_b = object.height) !== null && _b !== void 0 ? _b : 0;
        message.weight = (_c = object.weight) !== null && _c !== void 0 ? _c : 0;
        message.maxHeartrate = (_d = object.maxHeartrate) !== null && _d !== void 0 ? _d : 0;
        message.restHeartrate = (_e = object.restHeartrate) !== null && _e !== void 0 ? _e : 0;
        message.vo2Max = (_f = object.vo2Max) !== null && _f !== void 0 ? _f : 0;
        message.male = (_g = object.male) !== null && _g !== void 0 ? _g : false;
        return message;
    },
};
function createBaseChunk() {
    return { chunk: new Uint8Array(0) };
}
exports.Chunk = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.chunk.length !== 0) {
            writer.uint32(10).bytes(message.chunk);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(object) {
        return { chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array(0) };
    },
    toJSON(message) {
        const obj = {};
        if (message.chunk.length !== 0) {
            obj.chunk = base64FromBytes(message.chunk);
        }
        return obj;
    },
    create(base) {
        return exports.Chunk.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseChunk();
        message.chunk = (_a = object.chunk) !== null && _a !== void 0 ? _a : new Uint8Array(0);
        return message;
    },
};
function createBaseGpx() {
    return { name: "", startDate: 0, type: "", points: [] };
}
exports.Gpx = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            exports.Point.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.startDate = longToNumber(reader.int64());
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
                    message.points.push(exports.Point.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            startDate: isSet(object.startDate) ? Number(object.startDate) : 0,
            type: isSet(object.type) ? String(object.type) : "",
            points: Array.isArray(object === null || object === void 0 ? void 0 : object.points) ? object.points.map((e) => exports.Point.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.startDate !== 0) {
            obj.startDate = Math.round(message.startDate);
        }
        if (message.type !== "") {
            obj.type = message.type;
        }
        if ((_a = message.points) === null || _a === void 0 ? void 0 : _a.length) {
            obj.points = message.points.map((e) => exports.Point.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Gpx.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGpx();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.startDate = (_b = object.startDate) !== null && _b !== void 0 ? _b : 0;
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : "";
        message.points = ((_d = object.points) === null || _d === void 0 ? void 0 : _d.map((e) => exports.Point.fromPartial(e))) || [];
        return message;
    },
};
function createBasePoint() {
    return { lat: 0, lon: 0, ele: 0, time: 0, hr: 0, cad: 0 };
}
exports.Point = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.time = longToNumber(reader.int64());
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
    fromJSON(object) {
        return {
            lat: isSet(object.lat) ? Number(object.lat) : 0,
            lon: isSet(object.lon) ? Number(object.lon) : 0,
            ele: isSet(object.ele) ? Number(object.ele) : 0,
            time: isSet(object.time) ? Number(object.time) : 0,
            hr: isSet(object.hr) ? Number(object.hr) : 0,
            cad: isSet(object.cad) ? Number(object.cad) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return exports.Point.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBasePoint();
        message.lat = (_a = object.lat) !== null && _a !== void 0 ? _a : 0;
        message.lon = (_b = object.lon) !== null && _b !== void 0 ? _b : 0;
        message.ele = (_c = object.ele) !== null && _c !== void 0 ? _c : 0;
        message.time = (_d = object.time) !== null && _d !== void 0 ? _d : 0;
        message.hr = (_e = object.hr) !== null && _e !== void 0 ? _e : 0;
        message.cad = (_f = object.cad) !== null && _f !== void 0 ? _f : 0;
        return message;
    },
};
function createBaseEventActivityUpload() {
    return { activityId: "", ikiUserId: "" };
}
exports.EventActivityUpload = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.activityId !== "") {
            writer.uint32(10).string(message.activityId);
        }
        if (message.ikiUserId !== "") {
            writer.uint32(18).string(message.ikiUserId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(object) {
        return {
            activityId: isSet(object.activityId) ? String(object.activityId) : "",
            ikiUserId: isSet(object.ikiUserId) ? String(object.ikiUserId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.activityId !== "") {
            obj.activityId = message.activityId;
        }
        if (message.ikiUserId !== "") {
            obj.ikiUserId = message.ikiUserId;
        }
        return obj;
    },
    create(base) {
        return exports.EventActivityUpload.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventActivityUpload();
        message.activityId = (_a = object.activityId) !== null && _a !== void 0 ? _a : "";
        message.ikiUserId = (_b = object.ikiUserId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
const tsProtoGlobalThis = (() => {
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
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = tsProtoGlobalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin.join(""));
    }
}
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}

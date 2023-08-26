"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.ActivitySvcCalculateStatsDesc = exports.ActivitySvcListFeaturedDesc = exports.ActivitySvcListMineDesc = exports.ActivitySvcListDesc = exports.ActivitySvcGetFeaturedDesc = exports.ActivitySvcGetMineDesc = exports.ActivitySvcGetDesc = exports.ActivitySvcDesc = exports.ActivitySvcClientImpl = exports.ListFeaturedResponse = exports.ListFeaturedRequest = exports.ListMineResponse = exports.ListMineRequest = exports.ListResponse = exports.ListRequest = exports.GetFeaturedResponse = exports.GetFeaturedRequest = exports.GetMineResponse = exports.GetMineRequest = exports.GetResponse = exports.GetRequest = exports.PersonalMetric = exports.Stats = exports.Activity = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_web_1 = require("@improbable-eng/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const empty_1 = require("../../google/protobuf/empty");
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
            exports.Stats.encode(message.stats, writer.uint32(162).fork()).ldelim();
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
                    message.stats = exports.Stats.decode(reader, reader.uint32());
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
            stats: isSet(object.stats) ? exports.Stats.fromJSON(object.stats) : undefined,
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
            obj.stats = exports.Stats.toJSON(message.stats);
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
        message.stats = (object.stats !== undefined && object.stats !== null) ? exports.Stats.fromPartial(object.stats) : undefined;
        return message;
    },
};
function createBaseStats() {
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
exports.Stats = {
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
        if (message.personalMetric !== undefined) {
            exports.PersonalMetric.encode(message.personalMetric, writer.uint32(210).fork()).ldelim();
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
                case 26:
                    if (tag !== 210) {
                        break;
                    }
                    message.personalMetric = exports.PersonalMetric.decode(reader, reader.uint32());
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
            personalMetric: isSet(object.personalMetric) ? exports.PersonalMetric.fromJSON(object.personalMetric) : undefined,
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
        if (message.personalMetric !== undefined) {
            obj.personalMetric = exports.PersonalMetric.toJSON(message.personalMetric);
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
        return exports.Stats.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6;
        const message = createBaseStats();
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
        message.personalMetric = (object.personalMetric !== undefined && object.personalMetric !== null)
            ? exports.PersonalMetric.fromPartial(object.personalMetric)
            : undefined;
        message.averageSpeed = (_2 = object.averageSpeed) !== null && _2 !== void 0 ? _2 : 0;
        message.averageEpSpeed = (_3 = object.averageEpSpeed) !== null && _3 !== void 0 ? _3 : 0;
        message.averagePace = (_4 = object.averagePace) !== null && _4 !== void 0 ? _4 : 0;
        message.averageEpPace = (_5 = object.averageEpPace) !== null && _5 !== void 0 ? _5 : 0;
        message.activeCalories = (_6 = object.activeCalories) !== null && _6 !== void 0 ? _6 : 0;
        return message;
    },
};
function createBasePersonalMetric() {
    return { age: 0, height: 0, weight: 0, maxHeartrate: 0, restHeartrate: 0, vo2Max: 0, male: false };
}
exports.PersonalMetric = {
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
        return exports.PersonalMetric.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBasePersonalMetric();
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
function createBaseGetRequest() {
    return { id: "" };
}
exports.GetRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(object) {
        return { id: isSet(object.id) ? String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.GetRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetResponse() {
    return { activity: undefined };
}
exports.GetResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.activity !== undefined) {
            exports.Activity.encode(message.activity, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.activity = exports.Activity.decode(reader, reader.uint32());
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
        return { activity: isSet(object.activity) ? exports.Activity.fromJSON(object.activity) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.activity !== undefined) {
            obj.activity = exports.Activity.toJSON(message.activity);
        }
        return obj;
    },
    create(base) {
        return exports.GetResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetResponse();
        message.activity = (object.activity !== undefined && object.activity !== null)
            ? exports.Activity.fromPartial(object.activity)
            : undefined;
        return message;
    },
};
function createBaseGetMineRequest() {
    return { id: "" };
}
exports.GetMineRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(object) {
        return { id: isSet(object.id) ? String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.GetMineRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetMineRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetMineResponse() {
    return { activity: undefined };
}
exports.GetMineResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.activity !== undefined) {
            exports.Activity.encode(message.activity, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMineResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.activity = exports.Activity.decode(reader, reader.uint32());
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
        return { activity: isSet(object.activity) ? exports.Activity.fromJSON(object.activity) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.activity !== undefined) {
            obj.activity = exports.Activity.toJSON(message.activity);
        }
        return obj;
    },
    create(base) {
        return exports.GetMineResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetMineResponse();
        message.activity = (object.activity !== undefined && object.activity !== null)
            ? exports.Activity.fromPartial(object.activity)
            : undefined;
        return message;
    },
};
function createBaseGetFeaturedRequest() {
    return { id: "" };
}
exports.GetFeaturedRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(object) {
        return { id: isSet(object.id) ? String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.GetFeaturedRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetFeaturedRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetFeaturedResponse() {
    return { activity: undefined };
}
exports.GetFeaturedResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.activity !== undefined) {
            exports.Activity.encode(message.activity, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetFeaturedResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.activity = exports.Activity.decode(reader, reader.uint32());
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
        return { activity: isSet(object.activity) ? exports.Activity.fromJSON(object.activity) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.activity !== undefined) {
            obj.activity = exports.Activity.toJSON(message.activity);
        }
        return obj;
    },
    create(base) {
        return exports.GetFeaturedResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetFeaturedResponse();
        message.activity = (object.activity !== undefined && object.activity !== null)
            ? exports.Activity.fromPartial(object.activity)
            : undefined;
        return message;
    },
};
function createBaseListRequest() {
    return {};
}
exports.ListRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.ListRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseListRequest();
        return message;
    },
};
function createBaseListResponse() {
    return { activities: [] };
}
exports.ListResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.activities) {
            exports.Activity.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.activities.push(exports.Activity.decode(reader, reader.uint32()));
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
            activities: Array.isArray(object === null || object === void 0 ? void 0 : object.activities) ? object.activities.map((e) => exports.Activity.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.activities) === null || _a === void 0 ? void 0 : _a.length) {
            obj.activities = message.activities.map((e) => exports.Activity.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ListResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListResponse();
        message.activities = ((_a = object.activities) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Activity.fromPartial(e))) || [];
        return message;
    },
};
function createBaseListMineRequest() {
    return {};
}
exports.ListMineRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.ListMineRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseListMineRequest();
        return message;
    },
};
function createBaseListMineResponse() {
    return { activities: [] };
}
exports.ListMineResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.activities) {
            exports.Activity.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMineResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.activities.push(exports.Activity.decode(reader, reader.uint32()));
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
            activities: Array.isArray(object === null || object === void 0 ? void 0 : object.activities) ? object.activities.map((e) => exports.Activity.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.activities) === null || _a === void 0 ? void 0 : _a.length) {
            obj.activities = message.activities.map((e) => exports.Activity.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ListMineResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListMineResponse();
        message.activities = ((_a = object.activities) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Activity.fromPartial(e))) || [];
        return message;
    },
};
function createBaseListFeaturedRequest() {
    return {};
}
exports.ListFeaturedRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.ListFeaturedRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseListFeaturedRequest();
        return message;
    },
};
function createBaseListFeaturedResponse() {
    return { activities: [] };
}
exports.ListFeaturedResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.activities) {
            exports.Activity.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListFeaturedResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.activities.push(exports.Activity.decode(reader, reader.uint32()));
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
            activities: Array.isArray(object === null || object === void 0 ? void 0 : object.activities) ? object.activities.map((e) => exports.Activity.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.activities) === null || _a === void 0 ? void 0 : _a.length) {
            obj.activities = message.activities.map((e) => exports.Activity.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ListFeaturedResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListFeaturedResponse();
        message.activities = ((_a = object.activities) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Activity.fromPartial(e))) || [];
        return message;
    },
};
class ActivitySvcClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Get = this.Get.bind(this);
        this.GetMine = this.GetMine.bind(this);
        this.GetFeatured = this.GetFeatured.bind(this);
        this.List = this.List.bind(this);
        this.ListMine = this.ListMine.bind(this);
        this.ListFeatured = this.ListFeatured.bind(this);
        this.CalculateStats = this.CalculateStats.bind(this);
    }
    Get(request, metadata) {
        return this.rpc.unary(exports.ActivitySvcGetDesc, exports.GetRequest.fromPartial(request), metadata);
    }
    GetMine(request, metadata) {
        return this.rpc.unary(exports.ActivitySvcGetMineDesc, exports.GetMineRequest.fromPartial(request), metadata);
    }
    GetFeatured(request, metadata) {
        return this.rpc.unary(exports.ActivitySvcGetFeaturedDesc, exports.GetFeaturedRequest.fromPartial(request), metadata);
    }
    List(request, metadata) {
        return this.rpc.unary(exports.ActivitySvcListDesc, exports.ListRequest.fromPartial(request), metadata);
    }
    ListMine(request, metadata) {
        return this.rpc.unary(exports.ActivitySvcListMineDesc, exports.ListMineRequest.fromPartial(request), metadata);
    }
    ListFeatured(request, metadata) {
        return this.rpc.unary(exports.ActivitySvcListFeaturedDesc, exports.ListFeaturedRequest.fromPartial(request), metadata);
    }
    CalculateStats(request, metadata) {
        return this.rpc.unary(exports.ActivitySvcCalculateStatsDesc, empty_1.Empty.fromPartial(request), metadata);
    }
}
exports.ActivitySvcClientImpl = ActivitySvcClientImpl;
exports.ActivitySvcDesc = { serviceName: "activity.ActivitySvc" };
exports.ActivitySvcGetDesc = {
    methodName: "Get",
    service: exports.ActivitySvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.ActivitySvcGetMineDesc = {
    methodName: "GetMine",
    service: exports.ActivitySvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetMineRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetMineResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.ActivitySvcGetFeaturedDesc = {
    methodName: "GetFeatured",
    service: exports.ActivitySvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetFeaturedRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetFeaturedResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.ActivitySvcListDesc = {
    methodName: "List",
    service: exports.ActivitySvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.ListRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.ListResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.ActivitySvcListMineDesc = {
    methodName: "ListMine",
    service: exports.ActivitySvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.ListMineRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.ListMineResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.ActivitySvcListFeaturedDesc = {
    methodName: "ListFeatured",
    service: exports.ActivitySvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.ListFeaturedRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.ListFeaturedResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.ActivitySvcCalculateStatsDesc = {
    methodName: "CalculateStats",
    service: exports.ActivitySvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return empty_1.Empty.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = empty_1.Empty.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
class GrpcWebImpl {
    constructor(host, options) {
        this.host = host;
        this.options = options;
    }
    unary(methodDesc, _request, metadata) {
        var _a;
        const request = Object.assign(Object.assign({}, _request), methodDesc.requestType);
        const maybeCombinedMetadata = metadata && this.options.metadata
            ? new browser_headers_1.BrowserHeaders(Object.assign(Object.assign({}, (_a = this.options) === null || _a === void 0 ? void 0 : _a.metadata.headersMap), metadata === null || metadata === void 0 ? void 0 : metadata.headersMap))
            : metadata !== null && metadata !== void 0 ? metadata : this.options.metadata;
        return new Promise((resolve, reject) => {
            var _a;
            grpc_web_1.grpc.unary(methodDesc, Object.assign(Object.assign({ request, host: this.host, metadata: maybeCombinedMetadata !== null && maybeCombinedMetadata !== void 0 ? maybeCombinedMetadata : {} }, (this.options.transport !== undefined ? { transport: this.options.transport } : {})), { debug: (_a = this.options.debug) !== null && _a !== void 0 ? _a : false, onEnd: function (response) {
                    if (response.status === grpc_web_1.grpc.Code.OK) {
                        resolve(response.message.toObject());
                    }
                    else {
                        const err = new GrpcWebError(response.statusMessage, response.status, response.trailers);
                        reject(err);
                    }
                } }));
        });
    }
}
exports.GrpcWebImpl = GrpcWebImpl;
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
class GrpcWebError extends tsProtoGlobalThis.Error {
    constructor(message, code, metadata) {
        super(message);
        this.code = code;
        this.metadata = metadata;
    }
}
exports.GrpcWebError = GrpcWebError;

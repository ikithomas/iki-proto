"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.GpxSvcGetConciseGpxDesc = exports.GpxSvcGetGpxDesc = exports.GpxSvcDesc = exports.GpxSvcClientImpl = exports.Point = exports.Gpx = exports.Chunk = exports.GetConciseGpxResponse = exports.GetConciseGpxRequest = exports.GetGpxRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_web_1 = require("@improbable-eng/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
exports.protobufPackage = "gpx";
function createBaseGetGpxRequest() {
    return { activityId: "" };
}
exports.GetGpxRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.activityId !== "") {
            writer.uint32(10).string(message.activityId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetGpxRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.activityId = reader.string();
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
        return { activityId: isSet(object.activityId) ? String(object.activityId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.activityId !== "") {
            obj.activityId = message.activityId;
        }
        return obj;
    },
    create(base) {
        return exports.GetGpxRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetGpxRequest();
        message.activityId = (_a = object.activityId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetConciseGpxRequest() {
    return { activityId: "" };
}
exports.GetConciseGpxRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.activityId !== "") {
            writer.uint32(10).string(message.activityId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetConciseGpxRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.activityId = reader.string();
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
        return { activityId: isSet(object.activityId) ? String(object.activityId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.activityId !== "") {
            obj.activityId = message.activityId;
        }
        return obj;
    },
    create(base) {
        return exports.GetConciseGpxRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetConciseGpxRequest();
        message.activityId = (_a = object.activityId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetConciseGpxResponse() {
    return { activityId: "", stravaId: 0, stravaAthleteId: 0, gpx: undefined };
}
exports.GetConciseGpxResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.activityId !== "") {
            writer.uint32(10).string(message.activityId);
        }
        if (message.stravaId !== 0) {
            writer.uint32(16).int64(message.stravaId);
        }
        if (message.stravaAthleteId !== 0) {
            writer.uint32(24).int64(message.stravaAthleteId);
        }
        if (message.gpx !== undefined) {
            exports.Gpx.encode(message.gpx, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetConciseGpxResponse();
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
                    message.gpx = exports.Gpx.decode(reader, reader.uint32());
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
            stravaId: isSet(object.stravaId) ? Number(object.stravaId) : 0,
            stravaAthleteId: isSet(object.stravaAthleteId) ? Number(object.stravaAthleteId) : 0,
            gpx: isSet(object.gpx) ? exports.Gpx.fromJSON(object.gpx) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.activityId !== "") {
            obj.activityId = message.activityId;
        }
        if (message.stravaId !== 0) {
            obj.stravaId = Math.round(message.stravaId);
        }
        if (message.stravaAthleteId !== 0) {
            obj.stravaAthleteId = Math.round(message.stravaAthleteId);
        }
        if (message.gpx !== undefined) {
            obj.gpx = exports.Gpx.toJSON(message.gpx);
        }
        return obj;
    },
    create(base) {
        return exports.GetConciseGpxResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGetConciseGpxResponse();
        message.activityId = (_a = object.activityId) !== null && _a !== void 0 ? _a : "";
        message.stravaId = (_b = object.stravaId) !== null && _b !== void 0 ? _b : 0;
        message.stravaAthleteId = (_c = object.stravaAthleteId) !== null && _c !== void 0 ? _c : 0;
        message.gpx = (object.gpx !== undefined && object.gpx !== null) ? exports.Gpx.fromPartial(object.gpx) : undefined;
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
class GpxSvcClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.GetGpx = this.GetGpx.bind(this);
        this.GetConciseGpx = this.GetConciseGpx.bind(this);
    }
    GetGpx(request, metadata) {
        return this.rpc.invoke(exports.GpxSvcGetGpxDesc, exports.GetGpxRequest.fromPartial(request), metadata);
    }
    GetConciseGpx(request, metadata) {
        return this.rpc.unary(exports.GpxSvcGetConciseGpxDesc, exports.GetGpxRequest.fromPartial(request), metadata);
    }
}
exports.GpxSvcClientImpl = GpxSvcClientImpl;
exports.GpxSvcDesc = { serviceName: "gpx.GpxSvc" };
exports.GpxSvcGetGpxDesc = {
    methodName: "GetGpx",
    service: exports.GpxSvcDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return exports.GetGpxRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.Chunk.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.GpxSvcGetConciseGpxDesc = {
    methodName: "GetConciseGpx",
    service: exports.GpxSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetGpxRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetConciseGpxResponse.decode(data);
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
    invoke(methodDesc, _request, metadata) {
        var _a, _b, _c;
        const upStreamCodes = (_a = this.options.upStreamRetryCodes) !== null && _a !== void 0 ? _a : [];
        const DEFAULT_TIMEOUT_TIME = 3000;
        const request = Object.assign(Object.assign({}, _request), methodDesc.requestType);
        const transport = (_b = this.options.streamingTransport) !== null && _b !== void 0 ? _b : this.options.transport;
        const maybeCombinedMetadata = metadata && this.options.metadata
            ? new browser_headers_1.BrowserHeaders(Object.assign(Object.assign({}, (_c = this.options) === null || _c === void 0 ? void 0 : _c.metadata.headersMap), metadata === null || metadata === void 0 ? void 0 : metadata.headersMap))
            : metadata !== null && metadata !== void 0 ? metadata : this.options.metadata;
        return new rxjs_1.Observable((observer) => {
            const upStream = (() => {
                var _a;
                const client = grpc_web_1.grpc.invoke(methodDesc, Object.assign(Object.assign({ host: this.host, request }, (transport !== undefined ? { transport } : {})), { metadata: maybeCombinedMetadata !== null && maybeCombinedMetadata !== void 0 ? maybeCombinedMetadata : {}, debug: (_a = this.options.debug) !== null && _a !== void 0 ? _a : false, onMessage: (next) => observer.next(next), onEnd: (code, message, trailers) => {
                        if (code === 0) {
                            observer.complete();
                        }
                        else if (upStreamCodes.includes(code)) {
                            setTimeout(upStream, DEFAULT_TIMEOUT_TIME);
                        }
                        else {
                            const err = new Error(message);
                            err.code = code;
                            err.metadata = trailers;
                            observer.error(err);
                        }
                    } }));
                observer.add(() => {
                    return client.close();
                });
            });
            upStream();
        }).pipe((0, operators_1.share)());
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
class GrpcWebError extends tsProtoGlobalThis.Error {
    constructor(message, code, metadata) {
        super(message);
        this.code = code;
        this.metadata = metadata;
    }
}
exports.GrpcWebError = GrpcWebError;

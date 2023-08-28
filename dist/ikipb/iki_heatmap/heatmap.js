"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.HeatmapSvcGetDesc = exports.HeatmapSvcDesc = exports.HeatmapSvcClientImpl = exports.Point = exports.Track = exports.GetRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_web_1 = require("@improbable-eng/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
exports.protobufPackage = "heatmap";
function createBaseGetRequest() {
    return { ikiUserId: "", resolution: 0 };
}
exports.GetRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ikiUserId !== "") {
            writer.uint32(10).string(message.ikiUserId);
        }
        if (message.resolution !== 0) {
            writer.uint32(16).int64(message.resolution);
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
                    message.ikiUserId = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.resolution = longToNumber(reader.int64());
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
            ikiUserId: isSet(object.ikiUserId) ? String(object.ikiUserId) : "",
            resolution: isSet(object.resolution) ? Number(object.resolution) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ikiUserId !== "") {
            obj.ikiUserId = message.ikiUserId;
        }
        if (message.resolution !== 0) {
            obj.resolution = Math.round(message.resolution);
        }
        return obj;
    },
    create(base) {
        return exports.GetRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetRequest();
        message.ikiUserId = (_a = object.ikiUserId) !== null && _a !== void 0 ? _a : "";
        message.resolution = (_b = object.resolution) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseTrack() {
    return { name: "", startDate: 0, type: "", points: [], id: "" };
}
exports.Track = {
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
        if (message.id !== "") {
            writer.uint32(42).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTrack();
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
                case 5:
                    if (tag !== 42) {
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
        return {
            name: isSet(object.name) ? String(object.name) : "",
            startDate: isSet(object.startDate) ? Number(object.startDate) : 0,
            type: isSet(object.type) ? String(object.type) : "",
            points: Array.isArray(object === null || object === void 0 ? void 0 : object.points) ? object.points.map((e) => exports.Point.fromJSON(e)) : [],
            id: isSet(object.id) ? String(object.id) : "",
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
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.Track.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseTrack();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.startDate = (_b = object.startDate) !== null && _b !== void 0 ? _b : 0;
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : "";
        message.points = ((_d = object.points) === null || _d === void 0 ? void 0 : _d.map((e) => exports.Point.fromPartial(e))) || [];
        message.id = (_e = object.id) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBasePoint() {
    return { lat: 0, lng: 0 };
}
exports.Point = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.lat !== 0) {
            writer.uint32(13).float(message.lat);
        }
        if (message.lng !== 0) {
            writer.uint32(21).float(message.lng);
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
                    message.lng = reader.float();
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
        return { lat: isSet(object.lat) ? Number(object.lat) : 0, lng: isSet(object.lng) ? Number(object.lng) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.lat !== 0) {
            obj.lat = message.lat;
        }
        if (message.lng !== 0) {
            obj.lng = message.lng;
        }
        return obj;
    },
    create(base) {
        return exports.Point.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePoint();
        message.lat = (_a = object.lat) !== null && _a !== void 0 ? _a : 0;
        message.lng = (_b = object.lng) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
class HeatmapSvcClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Get = this.Get.bind(this);
    }
    Get(request, metadata) {
        return this.rpc.invoke(exports.HeatmapSvcGetDesc, exports.GetRequest.fromPartial(request), metadata);
    }
}
exports.HeatmapSvcClientImpl = HeatmapSvcClientImpl;
exports.HeatmapSvcDesc = { serviceName: "heatmap.HeatmapSvc" };
exports.HeatmapSvcGetDesc = {
    methodName: "Get",
    service: exports.HeatmapSvcDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return exports.GetRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.Track.decode(data);
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

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.GpxSvcGetDesc = exports.GpxSvcDesc = exports.GpxSvcClientImpl = exports.MyGpxSvcGetDesc = exports.MyGpxSvcDesc = exports.MyGpxSvcClientImpl = exports.GetResponse = exports.GetRequest = exports.GetMyRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_web_1 = require("@improbable-eng/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const activity_1 = require("../activity");
exports.protobufPackage = "gpxsvc";
function createBaseGetMyRequest() {
    return { activityId: "" };
}
exports.GetMyRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.activityId !== "") {
            writer.uint32(10).string(message.activityId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyRequest();
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
        return exports.GetMyRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetMyRequest();
        message.activityId = (_a = object.activityId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetRequest() {
    return { userId: "", activityId: "" };
}
exports.GetRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.activityId !== "") {
            writer.uint32(18).string(message.activityId);
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
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
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
        return {
            userId: isSet(object.userId) ? String(object.userId) : "",
            activityId: isSet(object.activityId) ? String(object.activityId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.activityId !== "") {
            obj.activityId = message.activityId;
        }
        return obj;
    },
    create(base) {
        return exports.GetRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.activityId = (_b = object.activityId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetResponse() {
    return { activityId: "", stravaId: 0, stravaAthleteId: 0, gpx: undefined };
}
exports.GetResponse = {
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
            activity_1.Gpx.encode(message.gpx, writer.uint32(34).fork()).ldelim();
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
                    message.gpx = activity_1.Gpx.decode(reader, reader.uint32());
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
            gpx: isSet(object.gpx) ? activity_1.Gpx.fromJSON(object.gpx) : undefined,
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
            obj.gpx = activity_1.Gpx.toJSON(message.gpx);
        }
        return obj;
    },
    create(base) {
        return exports.GetResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGetResponse();
        message.activityId = (_a = object.activityId) !== null && _a !== void 0 ? _a : "";
        message.stravaId = (_b = object.stravaId) !== null && _b !== void 0 ? _b : 0;
        message.stravaAthleteId = (_c = object.stravaAthleteId) !== null && _c !== void 0 ? _c : 0;
        message.gpx = (object.gpx !== undefined && object.gpx !== null) ? activity_1.Gpx.fromPartial(object.gpx) : undefined;
        return message;
    },
};
class MyGpxSvcClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Get = this.Get.bind(this);
    }
    Get(request, metadata) {
        return this.rpc.invoke(exports.MyGpxSvcGetDesc, exports.GetMyRequest.fromPartial(request), metadata);
    }
}
exports.MyGpxSvcClientImpl = MyGpxSvcClientImpl;
exports.MyGpxSvcDesc = { serviceName: "gpxsvc.MyGpxSvc" };
exports.MyGpxSvcGetDesc = {
    methodName: "Get",
    service: exports.MyGpxSvcDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return exports.GetMyRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = activity_1.Chunk.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
class GpxSvcClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Get = this.Get.bind(this);
    }
    Get(request, metadata) {
        return this.rpc.unary(exports.GpxSvcGetDesc, exports.GetRequest.fromPartial(request), metadata);
    }
}
exports.GpxSvcClientImpl = GpxSvcClientImpl;
exports.GpxSvcDesc = { serviceName: "gpxsvc.GpxSvc" };
exports.GpxSvcGetDesc = {
    methodName: "Get",
    service: exports.GpxSvcDesc,
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

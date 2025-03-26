"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.HealthSvcWatchDesc = exports.HealthSvcCheckDesc = exports.HealthSvcDesc = exports.HealthSvcClientImpl = exports.HealthCheckResponse = exports.HealthCheckRequest = exports.healthCheckResponse_ServingStatusToJSON = exports.healthCheckResponse_ServingStatusFromJSON = exports.HealthCheckResponse_ServingStatus = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_web_1 = require("@improbable-eng/grpc-web");
const browser_headers_1 = require("browser-headers");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
exports.protobufPackage = "health";
var HealthCheckResponse_ServingStatus;
(function (HealthCheckResponse_ServingStatus) {
    HealthCheckResponse_ServingStatus[HealthCheckResponse_ServingStatus["UNKNOWN"] = 0] = "UNKNOWN";
    HealthCheckResponse_ServingStatus[HealthCheckResponse_ServingStatus["SERVING"] = 1] = "SERVING";
    HealthCheckResponse_ServingStatus[HealthCheckResponse_ServingStatus["NOT_SERVING"] = 2] = "NOT_SERVING";
    /** SERVICE_UNKNOWN - Used only by the Watch method. */
    HealthCheckResponse_ServingStatus[HealthCheckResponse_ServingStatus["SERVICE_UNKNOWN"] = 3] = "SERVICE_UNKNOWN";
    HealthCheckResponse_ServingStatus[HealthCheckResponse_ServingStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(HealthCheckResponse_ServingStatus || (exports.HealthCheckResponse_ServingStatus = HealthCheckResponse_ServingStatus = {}));
function healthCheckResponse_ServingStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return HealthCheckResponse_ServingStatus.UNKNOWN;
        case 1:
        case "SERVING":
            return HealthCheckResponse_ServingStatus.SERVING;
        case 2:
        case "NOT_SERVING":
            return HealthCheckResponse_ServingStatus.NOT_SERVING;
        case 3:
        case "SERVICE_UNKNOWN":
            return HealthCheckResponse_ServingStatus.SERVICE_UNKNOWN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return HealthCheckResponse_ServingStatus.UNRECOGNIZED;
    }
}
exports.healthCheckResponse_ServingStatusFromJSON = healthCheckResponse_ServingStatusFromJSON;
function healthCheckResponse_ServingStatusToJSON(object) {
    switch (object) {
        case HealthCheckResponse_ServingStatus.UNKNOWN:
            return "UNKNOWN";
        case HealthCheckResponse_ServingStatus.SERVING:
            return "SERVING";
        case HealthCheckResponse_ServingStatus.NOT_SERVING:
            return "NOT_SERVING";
        case HealthCheckResponse_ServingStatus.SERVICE_UNKNOWN:
            return "SERVICE_UNKNOWN";
        case HealthCheckResponse_ServingStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.healthCheckResponse_ServingStatusToJSON = healthCheckResponse_ServingStatusToJSON;
function createBaseHealthCheckRequest() {
    return { service: "" };
}
exports.HealthCheckRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.service !== "") {
            writer.uint32(10).string(message.service);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHealthCheckRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.service = reader.string();
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
        return { service: isSet(object.service) ? String(object.service) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.service !== "") {
            obj.service = message.service;
        }
        return obj;
    },
    create(base) {
        return exports.HealthCheckRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseHealthCheckRequest();
        message.service = (_a = object.service) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseHealthCheckResponse() {
    return { status: 0 };
}
exports.HealthCheckResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHealthCheckResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.status = reader.int32();
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
        return { status: isSet(object.status) ? healthCheckResponse_ServingStatusFromJSON(object.status) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.status !== 0) {
            obj.status = healthCheckResponse_ServingStatusToJSON(message.status);
        }
        return obj;
    },
    create(base) {
        return exports.HealthCheckResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseHealthCheckResponse();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
class HealthSvcClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Check = this.Check.bind(this);
        this.Watch = this.Watch.bind(this);
    }
    Check(request, metadata) {
        return this.rpc.unary(exports.HealthSvcCheckDesc, exports.HealthCheckRequest.fromPartial(request), metadata);
    }
    Watch(request, metadata) {
        return this.rpc.invoke(exports.HealthSvcWatchDesc, exports.HealthCheckRequest.fromPartial(request), metadata);
    }
}
exports.HealthSvcClientImpl = HealthSvcClientImpl;
exports.HealthSvcDesc = { serviceName: "health.HealthSvc" };
exports.HealthSvcCheckDesc = {
    methodName: "Check",
    service: exports.HealthSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.HealthCheckRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.HealthCheckResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.HealthSvcWatchDesc = {
    methodName: "Watch",
    service: exports.HealthSvcDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return exports.HealthCheckRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.HealthCheckResponse.decode(data);
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

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.AthleteSvcGetFitnessMetricDesc = exports.AthleteSvcSetFitnessMetricDesc = exports.AthleteSvcDesc = exports.AthleteSvcClientImpl = exports.GetFitnessMetricResponse = exports.SetFitnessMetricRequest = exports.FitnessMetric = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_web_1 = require("@improbable-eng/grpc-web");
const browser_headers_1 = require("browser-headers");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const empty_1 = require("../../google/protobuf/empty");
exports.protobufPackage = "athlete";
function createBaseFitnessMetric() {
    return { age: 0, height: 0, weight: 0, maxHeartrate: 0, restHeartrate: 0, vo2Max: 0, male: false };
}
exports.FitnessMetric = {
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
        const message = createBaseFitnessMetric();
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
        return exports.FitnessMetric.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseFitnessMetric();
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
function createBaseSetFitnessMetricRequest() {
    return { fitnessMetric: undefined };
}
exports.SetFitnessMetricRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fitnessMetric !== undefined) {
            exports.FitnessMetric.encode(message.fitnessMetric, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetFitnessMetricRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fitnessMetric = exports.FitnessMetric.decode(reader, reader.uint32());
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
        return { fitnessMetric: isSet(object.fitnessMetric) ? exports.FitnessMetric.fromJSON(object.fitnessMetric) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.fitnessMetric !== undefined) {
            obj.fitnessMetric = exports.FitnessMetric.toJSON(message.fitnessMetric);
        }
        return obj;
    },
    create(base) {
        return exports.SetFitnessMetricRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseSetFitnessMetricRequest();
        message.fitnessMetric = (object.fitnessMetric !== undefined && object.fitnessMetric !== null)
            ? exports.FitnessMetric.fromPartial(object.fitnessMetric)
            : undefined;
        return message;
    },
};
function createBaseGetFitnessMetricResponse() {
    return { fitnessMetric: undefined };
}
exports.GetFitnessMetricResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fitnessMetric !== undefined) {
            exports.FitnessMetric.encode(message.fitnessMetric, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetFitnessMetricResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fitnessMetric = exports.FitnessMetric.decode(reader, reader.uint32());
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
        return { fitnessMetric: isSet(object.fitnessMetric) ? exports.FitnessMetric.fromJSON(object.fitnessMetric) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.fitnessMetric !== undefined) {
            obj.fitnessMetric = exports.FitnessMetric.toJSON(message.fitnessMetric);
        }
        return obj;
    },
    create(base) {
        return exports.GetFitnessMetricResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetFitnessMetricResponse();
        message.fitnessMetric = (object.fitnessMetric !== undefined && object.fitnessMetric !== null)
            ? exports.FitnessMetric.fromPartial(object.fitnessMetric)
            : undefined;
        return message;
    },
};
class AthleteSvcClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.SetFitnessMetric = this.SetFitnessMetric.bind(this);
        this.GetFitnessMetric = this.GetFitnessMetric.bind(this);
    }
    SetFitnessMetric(request, metadata) {
        return this.rpc.unary(exports.AthleteSvcSetFitnessMetricDesc, exports.SetFitnessMetricRequest.fromPartial(request), metadata);
    }
    GetFitnessMetric(request, metadata) {
        return this.rpc.unary(exports.AthleteSvcGetFitnessMetricDesc, empty_1.Empty.fromPartial(request), metadata);
    }
}
exports.AthleteSvcClientImpl = AthleteSvcClientImpl;
exports.AthleteSvcDesc = { serviceName: "athlete.AthleteSvc" };
exports.AthleteSvcSetFitnessMetricDesc = {
    methodName: "SetFitnessMetric",
    service: exports.AthleteSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.SetFitnessMetricRequest.encode(this).finish();
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
exports.AthleteSvcGetFitnessMetricDesc = {
    methodName: "GetFitnessMetric",
    service: exports.AthleteSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return empty_1.Empty.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetFitnessMetricResponse.decode(data);
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

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.AthleteSvcGetFitnessMetricDesc = exports.AthleteSvcSetFitnessMetricDesc = exports.AthleteSvcGetDesc = exports.AthleteSvcDesc = exports.AthleteSvcClientImpl = exports.MyAthleteSvcGetFitnessMetricDesc = exports.MyAthleteSvcSetFitnessMetricDesc = exports.MyAthleteSvcGetDesc = exports.MyAthleteSvcDesc = exports.MyAthleteSvcClientImpl = exports.GetFitnessMetricResponse = exports.GetFitnessMetricRequest = exports.SetFitnessMetricResponse = exports.SetFitnessMetricRequest = exports.GetResponse = exports.GetRequest = exports.GetMyFitnessMetricResponse = exports.GetMyFitnessMetricRequest = exports.SetMyFitnessMetricResponse = exports.SetMyFitnessMetricRequest = exports.GetMyResponse = exports.GetMyRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_web_1 = require("@improbable-eng/grpc-web");
const browser_headers_1 = require("browser-headers");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const activity_1 = require("../activity");
exports.protobufPackage = "athletesvc";
function createBaseGetMyRequest() {
    return {};
}
exports.GetMyRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyRequest();
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
        return exports.GetMyRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseGetMyRequest();
        return message;
    },
};
function createBaseGetMyResponse() {
    return { athlete: undefined };
}
exports.GetMyResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.athlete !== undefined) {
            activity_1.Athlete.encode(message.athlete, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.athlete = activity_1.Athlete.decode(reader, reader.uint32());
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
        return { athlete: isSet(object.athlete) ? activity_1.Athlete.fromJSON(object.athlete) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.athlete !== undefined) {
            obj.athlete = activity_1.Athlete.toJSON(message.athlete);
        }
        return obj;
    },
    create(base) {
        return exports.GetMyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetMyResponse();
        message.athlete = (object.athlete !== undefined && object.athlete !== null)
            ? activity_1.Athlete.fromPartial(object.athlete)
            : undefined;
        return message;
    },
};
function createBaseSetMyFitnessMetricRequest() {
    return { fitness: undefined };
}
exports.SetMyFitnessMetricRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fitness !== undefined) {
            activity_1.AthleteFitness.encode(message.fitness, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetMyFitnessMetricRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fitness = activity_1.AthleteFitness.decode(reader, reader.uint32());
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
        return { fitness: isSet(object.fitness) ? activity_1.AthleteFitness.fromJSON(object.fitness) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.fitness !== undefined) {
            obj.fitness = activity_1.AthleteFitness.toJSON(message.fitness);
        }
        return obj;
    },
    create(base) {
        return exports.SetMyFitnessMetricRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseSetMyFitnessMetricRequest();
        message.fitness = (object.fitness !== undefined && object.fitness !== null)
            ? activity_1.AthleteFitness.fromPartial(object.fitness)
            : undefined;
        return message;
    },
};
function createBaseSetMyFitnessMetricResponse() {
    return {};
}
exports.SetMyFitnessMetricResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetMyFitnessMetricResponse();
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
        return exports.SetMyFitnessMetricResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseSetMyFitnessMetricResponse();
        return message;
    },
};
function createBaseGetMyFitnessMetricRequest() {
    return {};
}
exports.GetMyFitnessMetricRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyFitnessMetricRequest();
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
        return exports.GetMyFitnessMetricRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseGetMyFitnessMetricRequest();
        return message;
    },
};
function createBaseGetMyFitnessMetricResponse() {
    return { fitness: undefined };
}
exports.GetMyFitnessMetricResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fitness !== undefined) {
            activity_1.AthleteFitness.encode(message.fitness, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyFitnessMetricResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fitness = activity_1.AthleteFitness.decode(reader, reader.uint32());
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
        return { fitness: isSet(object.fitness) ? activity_1.AthleteFitness.fromJSON(object.fitness) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.fitness !== undefined) {
            obj.fitness = activity_1.AthleteFitness.toJSON(message.fitness);
        }
        return obj;
    },
    create(base) {
        return exports.GetMyFitnessMetricResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetMyFitnessMetricResponse();
        message.fitness = (object.fitness !== undefined && object.fitness !== null)
            ? activity_1.AthleteFitness.fromPartial(object.fitness)
            : undefined;
        return message;
    },
};
function createBaseGetRequest() {
    return { userId: "" };
}
exports.GetRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
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
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { userId: isSet(object.userId) ? String(object.userId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.GetRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetResponse() {
    return { athlete: undefined };
}
exports.GetResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.athlete !== undefined) {
            activity_1.Athlete.encode(message.athlete, writer.uint32(10).fork()).ldelim();
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
                    message.athlete = activity_1.Athlete.decode(reader, reader.uint32());
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
        return { athlete: isSet(object.athlete) ? activity_1.Athlete.fromJSON(object.athlete) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.athlete !== undefined) {
            obj.athlete = activity_1.Athlete.toJSON(message.athlete);
        }
        return obj;
    },
    create(base) {
        return exports.GetResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetResponse();
        message.athlete = (object.athlete !== undefined && object.athlete !== null)
            ? activity_1.Athlete.fromPartial(object.athlete)
            : undefined;
        return message;
    },
};
function createBaseSetFitnessMetricRequest() {
    return { userId: "", fitness: undefined };
}
exports.SetFitnessMetricRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.fitness !== undefined) {
            activity_1.AthleteFitness.encode(message.fitness, writer.uint32(18).fork()).ldelim();
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
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.fitness = activity_1.AthleteFitness.decode(reader, reader.uint32());
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
            fitness: isSet(object.fitness) ? activity_1.AthleteFitness.fromJSON(object.fitness) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.fitness !== undefined) {
            obj.fitness = activity_1.AthleteFitness.toJSON(message.fitness);
        }
        return obj;
    },
    create(base) {
        return exports.SetFitnessMetricRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSetFitnessMetricRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.fitness = (object.fitness !== undefined && object.fitness !== null)
            ? activity_1.AthleteFitness.fromPartial(object.fitness)
            : undefined;
        return message;
    },
};
function createBaseSetFitnessMetricResponse() {
    return {};
}
exports.SetFitnessMetricResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetFitnessMetricResponse();
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
        return exports.SetFitnessMetricResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseSetFitnessMetricResponse();
        return message;
    },
};
function createBaseGetFitnessMetricRequest() {
    return { userId: "" };
}
exports.GetFitnessMetricRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetFitnessMetricRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
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
        return { userId: isSet(object.userId) ? String(object.userId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.GetFitnessMetricRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetFitnessMetricRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetFitnessMetricResponse() {
    return { fitness: undefined };
}
exports.GetFitnessMetricResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fitness !== undefined) {
            activity_1.AthleteFitness.encode(message.fitness, writer.uint32(10).fork()).ldelim();
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
                    message.fitness = activity_1.AthleteFitness.decode(reader, reader.uint32());
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
        return { fitness: isSet(object.fitness) ? activity_1.AthleteFitness.fromJSON(object.fitness) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.fitness !== undefined) {
            obj.fitness = activity_1.AthleteFitness.toJSON(message.fitness);
        }
        return obj;
    },
    create(base) {
        return exports.GetFitnessMetricResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetFitnessMetricResponse();
        message.fitness = (object.fitness !== undefined && object.fitness !== null)
            ? activity_1.AthleteFitness.fromPartial(object.fitness)
            : undefined;
        return message;
    },
};
class MyAthleteSvcClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Get = this.Get.bind(this);
        this.SetFitnessMetric = this.SetFitnessMetric.bind(this);
        this.GetFitnessMetric = this.GetFitnessMetric.bind(this);
    }
    Get(request, metadata) {
        return this.rpc.unary(exports.MyAthleteSvcGetDesc, exports.GetMyRequest.fromPartial(request), metadata);
    }
    SetFitnessMetric(request, metadata) {
        return this.rpc.unary(exports.MyAthleteSvcSetFitnessMetricDesc, exports.SetMyFitnessMetricRequest.fromPartial(request), metadata);
    }
    GetFitnessMetric(request, metadata) {
        return this.rpc.unary(exports.MyAthleteSvcGetFitnessMetricDesc, exports.GetMyFitnessMetricRequest.fromPartial(request), metadata);
    }
}
exports.MyAthleteSvcClientImpl = MyAthleteSvcClientImpl;
exports.MyAthleteSvcDesc = { serviceName: "athletesvc.MyAthleteSvc" };
exports.MyAthleteSvcGetDesc = {
    methodName: "Get",
    service: exports.MyAthleteSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetMyRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetMyResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MyAthleteSvcSetFitnessMetricDesc = {
    methodName: "SetFitnessMetric",
    service: exports.MyAthleteSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.SetMyFitnessMetricRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.SetMyFitnessMetricResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MyAthleteSvcGetFitnessMetricDesc = {
    methodName: "GetFitnessMetric",
    service: exports.MyAthleteSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetMyFitnessMetricRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetMyFitnessMetricResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
class AthleteSvcClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Get = this.Get.bind(this);
        this.SetFitnessMetric = this.SetFitnessMetric.bind(this);
        this.GetFitnessMetric = this.GetFitnessMetric.bind(this);
    }
    Get(request, metadata) {
        return this.rpc.unary(exports.AthleteSvcGetDesc, exports.GetRequest.fromPartial(request), metadata);
    }
    SetFitnessMetric(request, metadata) {
        return this.rpc.unary(exports.AthleteSvcSetFitnessMetricDesc, exports.SetFitnessMetricRequest.fromPartial(request), metadata);
    }
    GetFitnessMetric(request, metadata) {
        return this.rpc.unary(exports.AthleteSvcGetFitnessMetricDesc, exports.GetFitnessMetricRequest.fromPartial(request), metadata);
    }
}
exports.AthleteSvcClientImpl = AthleteSvcClientImpl;
exports.AthleteSvcDesc = { serviceName: "athletesvc.AthleteSvc" };
exports.AthleteSvcGetDesc = {
    methodName: "Get",
    service: exports.AthleteSvcDesc,
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
            const value = exports.SetFitnessMetricResponse.decode(data);
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
            return exports.GetFitnessMetricRequest.encode(this).finish();
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

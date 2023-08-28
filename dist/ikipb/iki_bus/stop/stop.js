"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.StopSvcSyncDesc = exports.StopSvcListDesc = exports.StopSvcDesc = exports.StopSvcClientImpl = exports.ListResponse = exports.ListRequest = exports.Stop = exports.listRequest_LanguageToJSON = exports.listRequest_LanguageFromJSON = exports.ListRequest_Language = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_web_1 = require("@improbable-eng/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const empty_1 = require("../../../google/protobuf/empty");
exports.protobufPackage = "stop";
var ListRequest_Language;
(function (ListRequest_Language) {
    ListRequest_Language[ListRequest_Language["LANGUAGE_UNSPECIFIED"] = 0] = "LANGUAGE_UNSPECIFIED";
    ListRequest_Language[ListRequest_Language["LANGUAGE_EN"] = 1] = "LANGUAGE_EN";
    ListRequest_Language[ListRequest_Language["LANGUAGE_TC"] = 2] = "LANGUAGE_TC";
    ListRequest_Language[ListRequest_Language["LANGUAGE_SC"] = 3] = "LANGUAGE_SC";
    ListRequest_Language[ListRequest_Language["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ListRequest_Language || (exports.ListRequest_Language = ListRequest_Language = {}));
function listRequest_LanguageFromJSON(object) {
    switch (object) {
        case 0:
        case "LANGUAGE_UNSPECIFIED":
            return ListRequest_Language.LANGUAGE_UNSPECIFIED;
        case 1:
        case "LANGUAGE_EN":
            return ListRequest_Language.LANGUAGE_EN;
        case 2:
        case "LANGUAGE_TC":
            return ListRequest_Language.LANGUAGE_TC;
        case 3:
        case "LANGUAGE_SC":
            return ListRequest_Language.LANGUAGE_SC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ListRequest_Language.UNRECOGNIZED;
    }
}
exports.listRequest_LanguageFromJSON = listRequest_LanguageFromJSON;
function listRequest_LanguageToJSON(object) {
    switch (object) {
        case ListRequest_Language.LANGUAGE_UNSPECIFIED:
            return "LANGUAGE_UNSPECIFIED";
        case ListRequest_Language.LANGUAGE_EN:
            return "LANGUAGE_EN";
        case ListRequest_Language.LANGUAGE_TC:
            return "LANGUAGE_TC";
        case ListRequest_Language.LANGUAGE_SC:
            return "LANGUAGE_SC";
        case ListRequest_Language.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.listRequest_LanguageToJSON = listRequest_LanguageToJSON;
function createBaseStop() {
    return { id: "", remoteId: "", name: "", lat: 0, long: 0, createdAt: 0 };
}
exports.Stop = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.remoteId !== "") {
            writer.uint32(18).string(message.remoteId);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.lat !== 0) {
            writer.uint32(37).float(message.lat);
        }
        if (message.long !== 0) {
            writer.uint32(45).float(message.long);
        }
        if (message.createdAt !== 0) {
            writer.uint32(48).int64(message.createdAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStop();
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
                    message.remoteId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 4:
                    if (tag !== 37) {
                        break;
                    }
                    message.lat = reader.float();
                    continue;
                case 5:
                    if (tag !== 45) {
                        break;
                    }
                    message.long = reader.float();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.createdAt = longToNumber(reader.int64());
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
            remoteId: isSet(object.remoteId) ? String(object.remoteId) : "",
            name: isSet(object.name) ? String(object.name) : "",
            lat: isSet(object.lat) ? Number(object.lat) : 0,
            long: isSet(object.long) ? Number(object.long) : 0,
            createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.remoteId !== "") {
            obj.remoteId = message.remoteId;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.lat !== 0) {
            obj.lat = message.lat;
        }
        if (message.long !== 0) {
            obj.long = message.long;
        }
        if (message.createdAt !== 0) {
            obj.createdAt = Math.round(message.createdAt);
        }
        return obj;
    },
    create(base) {
        return exports.Stop.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseStop();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.remoteId = (_b = object.remoteId) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.lat = (_d = object.lat) !== null && _d !== void 0 ? _d : 0;
        message.long = (_e = object.long) !== null && _e !== void 0 ? _e : 0;
        message.createdAt = (_f = object.createdAt) !== null && _f !== void 0 ? _f : 0;
        return message;
    },
};
function createBaseListRequest() {
    return { language: 0 };
}
exports.ListRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.language !== 0) {
            writer.uint32(8).int32(message.language);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.language = reader.int32();
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
        return { language: isSet(object.language) ? listRequest_LanguageFromJSON(object.language) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.language !== 0) {
            obj.language = listRequest_LanguageToJSON(message.language);
        }
        return obj;
    },
    create(base) {
        return exports.ListRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListRequest();
        message.language = (_a = object.language) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseListResponse() {
    return { stops: [] };
}
exports.ListResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.stops) {
            exports.Stop.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.stops.push(exports.Stop.decode(reader, reader.uint32()));
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
        return { stops: Array.isArray(object === null || object === void 0 ? void 0 : object.stops) ? object.stops.map((e) => exports.Stop.fromJSON(e)) : [] };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.stops) === null || _a === void 0 ? void 0 : _a.length) {
            obj.stops = message.stops.map((e) => exports.Stop.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ListResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListResponse();
        message.stops = ((_a = object.stops) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Stop.fromPartial(e))) || [];
        return message;
    },
};
class StopSvcClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.List = this.List.bind(this);
        this.Sync = this.Sync.bind(this);
    }
    List(request, metadata) {
        return this.rpc.unary(exports.StopSvcListDesc, exports.ListRequest.fromPartial(request), metadata);
    }
    Sync(request, metadata) {
        return this.rpc.unary(exports.StopSvcSyncDesc, empty_1.Empty.fromPartial(request), metadata);
    }
}
exports.StopSvcClientImpl = StopSvcClientImpl;
exports.StopSvcDesc = { serviceName: "stop.StopSvc" };
exports.StopSvcListDesc = {
    methodName: "List",
    service: exports.StopSvcDesc,
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
exports.StopSvcSyncDesc = {
    methodName: "Sync",
    service: exports.StopSvcDesc,
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

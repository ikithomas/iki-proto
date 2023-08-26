"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.RouteSvcSyncDesc = exports.RouteSvcListDesc = exports.RouteSvcDesc = exports.RouteSvcClientImpl = exports.ListResponse = exports.ListRequest = exports.Route = exports.listRequest_LanguageToJSON = exports.listRequest_LanguageFromJSON = exports.ListRequest_Language = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_web_1 = require("@improbable-eng/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const empty_1 = require("../../../google/protobuf/empty");
exports.protobufPackage = "route";
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
function createBaseRoute() {
    return { id: "", co: "", route: "", bound: "", serviceType: "", orig: "", dest: "", createdAt: 0 };
}
exports.Route = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.co !== "") {
            writer.uint32(18).string(message.co);
        }
        if (message.route !== "") {
            writer.uint32(26).string(message.route);
        }
        if (message.bound !== "") {
            writer.uint32(34).string(message.bound);
        }
        if (message.serviceType !== "") {
            writer.uint32(42).string(message.serviceType);
        }
        if (message.orig !== "") {
            writer.uint32(50).string(message.orig);
        }
        if (message.dest !== "") {
            writer.uint32(58).string(message.dest);
        }
        if (message.createdAt !== 0) {
            writer.uint32(64).int64(message.createdAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRoute();
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
                    message.co = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.route = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.bound = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.serviceType = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.orig = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.dest = reader.string();
                    continue;
                case 8:
                    if (tag !== 64) {
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
            co: isSet(object.co) ? String(object.co) : "",
            route: isSet(object.route) ? String(object.route) : "",
            bound: isSet(object.bound) ? String(object.bound) : "",
            serviceType: isSet(object.serviceType) ? String(object.serviceType) : "",
            orig: isSet(object.orig) ? String(object.orig) : "",
            dest: isSet(object.dest) ? String(object.dest) : "",
            createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.co !== "") {
            obj.co = message.co;
        }
        if (message.route !== "") {
            obj.route = message.route;
        }
        if (message.bound !== "") {
            obj.bound = message.bound;
        }
        if (message.serviceType !== "") {
            obj.serviceType = message.serviceType;
        }
        if (message.orig !== "") {
            obj.orig = message.orig;
        }
        if (message.dest !== "") {
            obj.dest = message.dest;
        }
        if (message.createdAt !== 0) {
            obj.createdAt = Math.round(message.createdAt);
        }
        return obj;
    },
    create(base) {
        return exports.Route.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseRoute();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.co = (_b = object.co) !== null && _b !== void 0 ? _b : "";
        message.route = (_c = object.route) !== null && _c !== void 0 ? _c : "";
        message.bound = (_d = object.bound) !== null && _d !== void 0 ? _d : "";
        message.serviceType = (_e = object.serviceType) !== null && _e !== void 0 ? _e : "";
        message.orig = (_f = object.orig) !== null && _f !== void 0 ? _f : "";
        message.dest = (_g = object.dest) !== null && _g !== void 0 ? _g : "";
        message.createdAt = (_h = object.createdAt) !== null && _h !== void 0 ? _h : 0;
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
    return { routes: [] };
}
exports.ListResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.routes) {
            exports.Route.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.routes.push(exports.Route.decode(reader, reader.uint32()));
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
        return { routes: Array.isArray(object === null || object === void 0 ? void 0 : object.routes) ? object.routes.map((e) => exports.Route.fromJSON(e)) : [] };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.routes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.routes = message.routes.map((e) => exports.Route.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ListResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListResponse();
        message.routes = ((_a = object.routes) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Route.fromPartial(e))) || [];
        return message;
    },
};
class RouteSvcClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.List = this.List.bind(this);
        this.Sync = this.Sync.bind(this);
    }
    List(request, metadata) {
        return this.rpc.unary(exports.RouteSvcListDesc, exports.ListRequest.fromPartial(request), metadata);
    }
    Sync(request, metadata) {
        return this.rpc.unary(exports.RouteSvcSyncDesc, empty_1.Empty.fromPartial(request), metadata);
    }
}
exports.RouteSvcClientImpl = RouteSvcClientImpl;
exports.RouteSvcDesc = { serviceName: "route.RouteSvc" };
exports.RouteSvcListDesc = {
    methodName: "List",
    service: exports.RouteSvcDesc,
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
exports.RouteSvcSyncDesc = {
    methodName: "Sync",
    service: exports.RouteSvcDesc,
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

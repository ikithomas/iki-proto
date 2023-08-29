"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.StravaSvcAuthzDesc = exports.StravaSvcDesc = exports.StravaSvcClientImpl = exports.AuthzResponse = exports.AuthzRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_web_1 = require("@improbable-eng/grpc-web");
const browser_headers_1 = require("browser-headers");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const activity_1 = require("../activity");
exports.protobufPackage = "stravasvc";
function createBaseAuthzRequest() {
    return { authzCode: "" };
}
exports.AuthzRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.authzCode !== "") {
            writer.uint32(10).string(message.authzCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthzRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.authzCode = reader.string();
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
        return { authzCode: isSet(object.authzCode) ? String(object.authzCode) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.authzCode !== "") {
            obj.authzCode = message.authzCode;
        }
        return obj;
    },
    create(base) {
        return exports.AuthzRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAuthzRequest();
        message.authzCode = (_a = object.authzCode) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAuthzResponse() {
    return { athlete: undefined };
}
exports.AuthzResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.athlete !== undefined) {
            activity_1.Athlete.encode(message.athlete, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthzResponse();
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
        return exports.AuthzResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseAuthzResponse();
        message.athlete = (object.athlete !== undefined && object.athlete !== null)
            ? activity_1.Athlete.fromPartial(object.athlete)
            : undefined;
        return message;
    },
};
class StravaSvcClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Authz = this.Authz.bind(this);
    }
    Authz(request, metadata) {
        return this.rpc.unary(exports.StravaSvcAuthzDesc, exports.AuthzRequest.fromPartial(request), metadata);
    }
}
exports.StravaSvcClientImpl = StravaSvcClientImpl;
exports.StravaSvcDesc = { serviceName: "stravasvc.StravaSvc" };
exports.StravaSvcAuthzDesc = {
    methodName: "Authz",
    service: exports.StravaSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.AuthzRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.AuthzResponse.decode(data);
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

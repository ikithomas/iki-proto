"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.TokenSvcAccessTokenDesc = exports.TokenSvcGetJwksetDesc = exports.TokenSvcDesc = exports.TokenSvcClientImpl = exports.AccessTokenResponse = exports.AccessTokenRequest = exports.GetJwksetResponse = exports.GetJwksetRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_web_1 = require("@improbable-eng/grpc-web");
const browser_headers_1 = require("browser-headers");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const iam_1 = require("../iam");
exports.protobufPackage = "tokensvc";
function createBaseGetJwksetRequest() {
    return {};
}
exports.GetJwksetRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetJwksetRequest();
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
        return exports.GetJwksetRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseGetJwksetRequest();
        return message;
    },
};
function createBaseGetJwksetResponse() {
    return { jwkset: new Uint8Array(0) };
}
exports.GetJwksetResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.jwkset.length !== 0) {
            writer.uint32(10).bytes(message.jwkset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetJwksetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.jwkset = reader.bytes();
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
        return { jwkset: isSet(object.jwkset) ? bytesFromBase64(object.jwkset) : new Uint8Array(0) };
    },
    toJSON(message) {
        const obj = {};
        if (message.jwkset.length !== 0) {
            obj.jwkset = base64FromBytes(message.jwkset);
        }
        return obj;
    },
    create(base) {
        return exports.GetJwksetResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetJwksetResponse();
        message.jwkset = (_a = object.jwkset) !== null && _a !== void 0 ? _a : new Uint8Array(0);
        return message;
    },
};
function createBaseAccessTokenRequest() {
    return { refreshToken: "", entityType: 0 };
}
exports.AccessTokenRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.refreshToken !== "") {
            writer.uint32(10).string(message.refreshToken);
        }
        if (message.entityType !== 0) {
            writer.uint32(16).int32(message.entityType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccessTokenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.refreshToken = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.entityType = reader.int32();
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
            refreshToken: isSet(object.refreshToken) ? String(object.refreshToken) : "",
            entityType: isSet(object.entityType) ? (0, iam_1.entityTypeFromJSON)(object.entityType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.refreshToken !== "") {
            obj.refreshToken = message.refreshToken;
        }
        if (message.entityType !== 0) {
            obj.entityType = (0, iam_1.entityTypeToJSON)(message.entityType);
        }
        return obj;
    },
    create(base) {
        return exports.AccessTokenRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAccessTokenRequest();
        message.refreshToken = (_a = object.refreshToken) !== null && _a !== void 0 ? _a : "";
        message.entityType = (_b = object.entityType) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseAccessTokenResponse() {
    return { accessToken: "" };
}
exports.AccessTokenResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accessToken !== "") {
            writer.uint32(10).string(message.accessToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccessTokenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.accessToken = reader.string();
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
        return { accessToken: isSet(object.accessToken) ? String(object.accessToken) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.accessToken !== "") {
            obj.accessToken = message.accessToken;
        }
        return obj;
    },
    create(base) {
        return exports.AccessTokenResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAccessTokenResponse();
        message.accessToken = (_a = object.accessToken) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
class TokenSvcClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.GetJwkset = this.GetJwkset.bind(this);
        this.AccessToken = this.AccessToken.bind(this);
    }
    GetJwkset(request, metadata) {
        return this.rpc.unary(exports.TokenSvcGetJwksetDesc, exports.GetJwksetRequest.fromPartial(request), metadata);
    }
    AccessToken(request, metadata) {
        return this.rpc.unary(exports.TokenSvcAccessTokenDesc, exports.AccessTokenRequest.fromPartial(request), metadata);
    }
}
exports.TokenSvcClientImpl = TokenSvcClientImpl;
exports.TokenSvcDesc = { serviceName: "tokensvc.TokenSvc" };
exports.TokenSvcGetJwksetDesc = {
    methodName: "GetJwkset",
    service: exports.TokenSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetJwksetRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetJwksetResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.TokenSvcAccessTokenDesc = {
    methodName: "AccessToken",
    service: exports.TokenSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.AccessTokenRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.AccessTokenResponse.decode(data);
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

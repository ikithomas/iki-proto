"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.AuthSvcSignoutDesc = exports.AuthSvcServiceLoginDesc = exports.AuthSvcGoogleLoginDesc = exports.AuthSvcDesc = exports.AuthSvcClientImpl = exports.SignoutResponse = exports.SignoutRequest = exports.ServiceLoginResponse = exports.ServiceLoginRequest = exports.GoogleLoginResponse = exports.GoogleLoginRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_web_1 = require("@improbable-eng/grpc-web");
const browser_headers_1 = require("browser-headers");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const iam_1 = require("../iam");
exports.protobufPackage = "authsvc";
function createBaseGoogleLoginRequest() {
    return { idToken: "" };
}
exports.GoogleLoginRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.idToken !== "") {
            writer.uint32(10).string(message.idToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGoogleLoginRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.idToken = reader.string();
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
        return { idToken: isSet(object.idToken) ? String(object.idToken) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.idToken !== "") {
            obj.idToken = message.idToken;
        }
        return obj;
    },
    create(base) {
        return exports.GoogleLoginRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGoogleLoginRequest();
        message.idToken = (_a = object.idToken) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGoogleLoginResponse() {
    return { accessToken: "", refreshToken: "", user: undefined };
}
exports.GoogleLoginResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accessToken !== "") {
            writer.uint32(10).string(message.accessToken);
        }
        if (message.refreshToken !== "") {
            writer.uint32(18).string(message.refreshToken);
        }
        if (message.user !== undefined) {
            iam_1.User.encode(message.user, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGoogleLoginResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.accessToken = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.refreshToken = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.user = iam_1.User.decode(reader, reader.uint32());
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
            accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
            refreshToken: isSet(object.refreshToken) ? String(object.refreshToken) : "",
            user: isSet(object.user) ? iam_1.User.fromJSON(object.user) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accessToken !== "") {
            obj.accessToken = message.accessToken;
        }
        if (message.refreshToken !== "") {
            obj.refreshToken = message.refreshToken;
        }
        if (message.user !== undefined) {
            obj.user = iam_1.User.toJSON(message.user);
        }
        return obj;
    },
    create(base) {
        return exports.GoogleLoginResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGoogleLoginResponse();
        message.accessToken = (_a = object.accessToken) !== null && _a !== void 0 ? _a : "";
        message.refreshToken = (_b = object.refreshToken) !== null && _b !== void 0 ? _b : "";
        message.user = (object.user !== undefined && object.user !== null) ? iam_1.User.fromPartial(object.user) : undefined;
        return message;
    },
};
function createBaseServiceLoginRequest() {
    return { clientId: "", clientSecret: "" };
}
exports.ServiceLoginRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.clientSecret !== "") {
            writer.uint32(18).string(message.clientSecret);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceLoginRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.clientSecret = reader.string();
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
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            clientSecret: isSet(object.clientSecret) ? String(object.clientSecret) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.clientId !== "") {
            obj.clientId = message.clientId;
        }
        if (message.clientSecret !== "") {
            obj.clientSecret = message.clientSecret;
        }
        return obj;
    },
    create(base) {
        return exports.ServiceLoginRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseServiceLoginRequest();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.clientSecret = (_b = object.clientSecret) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseServiceLoginResponse() {
    return { accessToken: "", refreshToken: "" };
}
exports.ServiceLoginResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accessToken !== "") {
            writer.uint32(10).string(message.accessToken);
        }
        if (message.refreshToken !== "") {
            writer.uint32(18).string(message.refreshToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceLoginResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.accessToken = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.refreshToken = reader.string();
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
            accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
            refreshToken: isSet(object.refreshToken) ? String(object.refreshToken) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accessToken !== "") {
            obj.accessToken = message.accessToken;
        }
        if (message.refreshToken !== "") {
            obj.refreshToken = message.refreshToken;
        }
        return obj;
    },
    create(base) {
        return exports.ServiceLoginResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseServiceLoginResponse();
        message.accessToken = (_a = object.accessToken) !== null && _a !== void 0 ? _a : "";
        message.refreshToken = (_b = object.refreshToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseSignoutRequest() {
    return {};
}
exports.SignoutRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignoutRequest();
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
        return exports.SignoutRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseSignoutRequest();
        return message;
    },
};
function createBaseSignoutResponse() {
    return {};
}
exports.SignoutResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignoutResponse();
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
        return exports.SignoutResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseSignoutResponse();
        return message;
    },
};
class AuthSvcClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.GoogleLogin = this.GoogleLogin.bind(this);
        this.ServiceLogin = this.ServiceLogin.bind(this);
        this.Signout = this.Signout.bind(this);
    }
    GoogleLogin(request, metadata) {
        return this.rpc.unary(exports.AuthSvcGoogleLoginDesc, exports.GoogleLoginRequest.fromPartial(request), metadata);
    }
    ServiceLogin(request, metadata) {
        return this.rpc.unary(exports.AuthSvcServiceLoginDesc, exports.ServiceLoginRequest.fromPartial(request), metadata);
    }
    Signout(request, metadata) {
        return this.rpc.unary(exports.AuthSvcSignoutDesc, exports.SignoutRequest.fromPartial(request), metadata);
    }
}
exports.AuthSvcClientImpl = AuthSvcClientImpl;
exports.AuthSvcDesc = { serviceName: "authsvc.AuthSvc" };
exports.AuthSvcGoogleLoginDesc = {
    methodName: "GoogleLogin",
    service: exports.AuthSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GoogleLoginRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GoogleLoginResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AuthSvcServiceLoginDesc = {
    methodName: "ServiceLogin",
    service: exports.AuthSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.ServiceLoginRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.ServiceLoginResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AuthSvcSignoutDesc = {
    methodName: "Signout",
    service: exports.AuthSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.SignoutRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.SignoutResponse.decode(data);
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

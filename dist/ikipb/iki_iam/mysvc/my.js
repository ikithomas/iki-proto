"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.MySvcDeleteMyPasskeyDesc = exports.MySvcFinishPasskeyRegistrationDesc = exports.MySvcBeginPasskeyRegistrationDesc = exports.MySvcListMyPasskeysDesc = exports.MySvcPatchMyProfileDesc = exports.MySvcGetMyProfileDesc = exports.MySvcDesc = exports.MySvcClientImpl = exports.DeleteMyPasskeyResponse = exports.DeleteMyPasskeyRequest = exports.FinishPasskeyRegistrationResponse = exports.FinishPasskeyRegistrationRequest = exports.BeginPasskeyRegistrationResponse = exports.BeginPasskeyRegistrationRequest = exports.ListMyPasskeysResponse = exports.ListMyPasskeysRequest = exports.PatchMyProfileResponse = exports.PatchMyProfileRequest = exports.GetMyProfileResponse = exports.GetMyProfileRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_web_1 = require("@improbable-eng/grpc-web");
const browser_headers_1 = require("browser-headers");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const iam_1 = require("../iam");
exports.protobufPackage = "mysvc";
function createBaseGetMyProfileRequest() {
    return {};
}
exports.GetMyProfileRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyProfileRequest();
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
        return exports.GetMyProfileRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseGetMyProfileRequest();
        return message;
    },
};
function createBaseGetMyProfileResponse() {
    return { user: undefined };
}
exports.GetMyProfileResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.user !== undefined) {
            iam_1.UserDetail.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyProfileResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.user = iam_1.UserDetail.decode(reader, reader.uint32());
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
        return { user: isSet(object.user) ? iam_1.UserDetail.fromJSON(object.user) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.user !== undefined) {
            obj.user = iam_1.UserDetail.toJSON(message.user);
        }
        return obj;
    },
    create(base) {
        return exports.GetMyProfileResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetMyProfileResponse();
        message.user = (object.user !== undefined && object.user !== null)
            ? iam_1.UserDetail.fromPartial(object.user)
            : undefined;
        return message;
    },
};
function createBasePatchMyProfileRequest() {
    return { givenName: undefined, familyName: undefined };
}
exports.PatchMyProfileRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.givenName !== undefined) {
            writer.uint32(10).string(message.givenName);
        }
        if (message.familyName !== undefined) {
            writer.uint32(18).string(message.familyName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePatchMyProfileRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.givenName = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.familyName = reader.string();
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
            givenName: isSet(object.givenName) ? String(object.givenName) : undefined,
            familyName: isSet(object.familyName) ? String(object.familyName) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.givenName !== undefined) {
            obj.givenName = message.givenName;
        }
        if (message.familyName !== undefined) {
            obj.familyName = message.familyName;
        }
        return obj;
    },
    create(base) {
        return exports.PatchMyProfileRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePatchMyProfileRequest();
        message.givenName = (_a = object.givenName) !== null && _a !== void 0 ? _a : undefined;
        message.familyName = (_b = object.familyName) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBasePatchMyProfileResponse() {
    return { user: undefined };
}
exports.PatchMyProfileResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.user !== undefined) {
            iam_1.User.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePatchMyProfileResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { user: isSet(object.user) ? iam_1.User.fromJSON(object.user) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.user !== undefined) {
            obj.user = iam_1.User.toJSON(message.user);
        }
        return obj;
    },
    create(base) {
        return exports.PatchMyProfileResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBasePatchMyProfileResponse();
        message.user = (object.user !== undefined && object.user !== null) ? iam_1.User.fromPartial(object.user) : undefined;
        return message;
    },
};
function createBaseListMyPasskeysRequest() {
    return {};
}
exports.ListMyPasskeysRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyPasskeysRequest();
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
        return exports.ListMyPasskeysRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseListMyPasskeysRequest();
        return message;
    },
};
function createBaseListMyPasskeysResponse() {
    return { passkeys: [] };
}
exports.ListMyPasskeysResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.passkeys) {
            iam_1.Passkey.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyPasskeysResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.passkeys.push(iam_1.Passkey.decode(reader, reader.uint32()));
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
        return { passkeys: Array.isArray(object === null || object === void 0 ? void 0 : object.passkeys) ? object.passkeys.map((e) => iam_1.Passkey.fromJSON(e)) : [] };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.passkeys) === null || _a === void 0 ? void 0 : _a.length) {
            obj.passkeys = message.passkeys.map((e) => iam_1.Passkey.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ListMyPasskeysResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListMyPasskeysResponse();
        message.passkeys = ((_a = object.passkeys) === null || _a === void 0 ? void 0 : _a.map((e) => iam_1.Passkey.fromPartial(e))) || [];
        return message;
    },
};
function createBaseBeginPasskeyRegistrationRequest() {
    return {};
}
exports.BeginPasskeyRegistrationRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeginPasskeyRegistrationRequest();
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
        return exports.BeginPasskeyRegistrationRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseBeginPasskeyRegistrationRequest();
        return message;
    },
};
function createBaseBeginPasskeyRegistrationResponse() {
    return { optionsJson: "", sessionId: "" };
}
exports.BeginPasskeyRegistrationResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.optionsJson !== "") {
            writer.uint32(10).string(message.optionsJson);
        }
        if (message.sessionId !== "") {
            writer.uint32(18).string(message.sessionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeginPasskeyRegistrationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.optionsJson = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sessionId = reader.string();
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
            optionsJson: isSet(object.optionsJson) ? String(object.optionsJson) : "",
            sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.optionsJson !== "") {
            obj.optionsJson = message.optionsJson;
        }
        if (message.sessionId !== "") {
            obj.sessionId = message.sessionId;
        }
        return obj;
    },
    create(base) {
        return exports.BeginPasskeyRegistrationResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBeginPasskeyRegistrationResponse();
        message.optionsJson = (_a = object.optionsJson) !== null && _a !== void 0 ? _a : "";
        message.sessionId = (_b = object.sessionId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseFinishPasskeyRegistrationRequest() {
    return { sessionId: "", credentialJson: "", name: "" };
}
exports.FinishPasskeyRegistrationRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sessionId !== "") {
            writer.uint32(10).string(message.sessionId);
        }
        if (message.credentialJson !== "") {
            writer.uint32(18).string(message.credentialJson);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFinishPasskeyRegistrationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sessionId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.credentialJson = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.name = reader.string();
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
            sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
            credentialJson: isSet(object.credentialJson) ? String(object.credentialJson) : "",
            name: isSet(object.name) ? String(object.name) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sessionId !== "") {
            obj.sessionId = message.sessionId;
        }
        if (message.credentialJson !== "") {
            obj.credentialJson = message.credentialJson;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
    create(base) {
        return exports.FinishPasskeyRegistrationRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseFinishPasskeyRegistrationRequest();
        message.sessionId = (_a = object.sessionId) !== null && _a !== void 0 ? _a : "";
        message.credentialJson = (_b = object.credentialJson) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseFinishPasskeyRegistrationResponse() {
    return { passkey: undefined };
}
exports.FinishPasskeyRegistrationResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.passkey !== undefined) {
            iam_1.Passkey.encode(message.passkey, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFinishPasskeyRegistrationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.passkey = iam_1.Passkey.decode(reader, reader.uint32());
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
        return { passkey: isSet(object.passkey) ? iam_1.Passkey.fromJSON(object.passkey) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.passkey !== undefined) {
            obj.passkey = iam_1.Passkey.toJSON(message.passkey);
        }
        return obj;
    },
    create(base) {
        return exports.FinishPasskeyRegistrationResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseFinishPasskeyRegistrationResponse();
        message.passkey = (object.passkey !== undefined && object.passkey !== null)
            ? iam_1.Passkey.fromPartial(object.passkey)
            : undefined;
        return message;
    },
};
function createBaseDeleteMyPasskeyRequest() {
    return { id: "" };
}
exports.DeleteMyPasskeyRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteMyPasskeyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { id: isSet(object.id) ? String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.DeleteMyPasskeyRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeleteMyPasskeyRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeleteMyPasskeyResponse() {
    return {};
}
exports.DeleteMyPasskeyResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteMyPasskeyResponse();
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
        return exports.DeleteMyPasskeyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseDeleteMyPasskeyResponse();
        return message;
    },
};
class MySvcClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.GetMyProfile = this.GetMyProfile.bind(this);
        this.PatchMyProfile = this.PatchMyProfile.bind(this);
        this.ListMyPasskeys = this.ListMyPasskeys.bind(this);
        this.BeginPasskeyRegistration = this.BeginPasskeyRegistration.bind(this);
        this.FinishPasskeyRegistration = this.FinishPasskeyRegistration.bind(this);
        this.DeleteMyPasskey = this.DeleteMyPasskey.bind(this);
    }
    GetMyProfile(request, metadata) {
        return this.rpc.unary(exports.MySvcGetMyProfileDesc, exports.GetMyProfileRequest.fromPartial(request), metadata);
    }
    PatchMyProfile(request, metadata) {
        return this.rpc.unary(exports.MySvcPatchMyProfileDesc, exports.PatchMyProfileRequest.fromPartial(request), metadata);
    }
    ListMyPasskeys(request, metadata) {
        return this.rpc.unary(exports.MySvcListMyPasskeysDesc, exports.ListMyPasskeysRequest.fromPartial(request), metadata);
    }
    BeginPasskeyRegistration(request, metadata) {
        return this.rpc.unary(exports.MySvcBeginPasskeyRegistrationDesc, exports.BeginPasskeyRegistrationRequest.fromPartial(request), metadata);
    }
    FinishPasskeyRegistration(request, metadata) {
        return this.rpc.unary(exports.MySvcFinishPasskeyRegistrationDesc, exports.FinishPasskeyRegistrationRequest.fromPartial(request), metadata);
    }
    DeleteMyPasskey(request, metadata) {
        return this.rpc.unary(exports.MySvcDeleteMyPasskeyDesc, exports.DeleteMyPasskeyRequest.fromPartial(request), metadata);
    }
}
exports.MySvcClientImpl = MySvcClientImpl;
exports.MySvcDesc = { serviceName: "mysvc.MySvc" };
exports.MySvcGetMyProfileDesc = {
    methodName: "GetMyProfile",
    service: exports.MySvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetMyProfileRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetMyProfileResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MySvcPatchMyProfileDesc = {
    methodName: "PatchMyProfile",
    service: exports.MySvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.PatchMyProfileRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.PatchMyProfileResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MySvcListMyPasskeysDesc = {
    methodName: "ListMyPasskeys",
    service: exports.MySvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.ListMyPasskeysRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.ListMyPasskeysResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MySvcBeginPasskeyRegistrationDesc = {
    methodName: "BeginPasskeyRegistration",
    service: exports.MySvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.BeginPasskeyRegistrationRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.BeginPasskeyRegistrationResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MySvcFinishPasskeyRegistrationDesc = {
    methodName: "FinishPasskeyRegistration",
    service: exports.MySvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.FinishPasskeyRegistrationRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.FinishPasskeyRegistrationResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MySvcDeleteMyPasskeyDesc = {
    methodName: "DeleteMyPasskey",
    service: exports.MySvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.DeleteMyPasskeyRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.DeleteMyPasskeyResponse.decode(data);
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

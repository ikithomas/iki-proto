"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.AuthSvcDeletePasskeyDesc = exports.AuthSvcListPasskeysDesc = exports.AuthSvcFinishPasskeyLoginDesc = exports.AuthSvcBeginPasskeyLoginDesc = exports.AuthSvcFinishPasskeyRegistrationDesc = exports.AuthSvcBeginPasskeyRegistrationDesc = exports.AuthSvcSignoutDesc = exports.AuthSvcServiceLoginDesc = exports.AuthSvcGoogleLoginDesc = exports.AuthSvcDesc = exports.AuthSvcClientImpl = exports.DeletePasskeyResponse = exports.DeletePasskeyRequest = exports.ListPasskeysResponse = exports.ListPasskeysRequest = exports.FinishPasskeyLoginResponse = exports.FinishPasskeyLoginRequest = exports.BeginPasskeyLoginResponse = exports.BeginPasskeyLoginRequest = exports.FinishPasskeyRegistrationResponse = exports.FinishPasskeyRegistrationRequest = exports.BeginPasskeyRegistrationResponse = exports.BeginPasskeyRegistrationRequest = exports.SignoutResponse = exports.SignoutRequest = exports.ServiceLoginResponse = exports.ServiceLoginRequest = exports.GoogleLoginResponse = exports.GoogleLoginRequest = exports.protobufPackage = void 0;
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
    return {};
}
exports.FinishPasskeyRegistrationResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFinishPasskeyRegistrationResponse();
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
        return exports.FinishPasskeyRegistrationResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseFinishPasskeyRegistrationResponse();
        return message;
    },
};
function createBaseBeginPasskeyLoginRequest() {
    return { email: "" };
}
exports.BeginPasskeyLoginRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeginPasskeyLoginRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.email = reader.string();
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
        return { email: isSet(object.email) ? String(object.email) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.email !== "") {
            obj.email = message.email;
        }
        return obj;
    },
    create(base) {
        return exports.BeginPasskeyLoginRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseBeginPasskeyLoginRequest();
        message.email = (_a = object.email) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseBeginPasskeyLoginResponse() {
    return { optionsJson: "", sessionId: "" };
}
exports.BeginPasskeyLoginResponse = {
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
        const message = createBaseBeginPasskeyLoginResponse();
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
        return exports.BeginPasskeyLoginResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBeginPasskeyLoginResponse();
        message.optionsJson = (_a = object.optionsJson) !== null && _a !== void 0 ? _a : "";
        message.sessionId = (_b = object.sessionId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseFinishPasskeyLoginRequest() {
    return { sessionId: "", credentialJson: "" };
}
exports.FinishPasskeyLoginRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sessionId !== "") {
            writer.uint32(10).string(message.sessionId);
        }
        if (message.credentialJson !== "") {
            writer.uint32(18).string(message.credentialJson);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFinishPasskeyLoginRequest();
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
        return obj;
    },
    create(base) {
        return exports.FinishPasskeyLoginRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseFinishPasskeyLoginRequest();
        message.sessionId = (_a = object.sessionId) !== null && _a !== void 0 ? _a : "";
        message.credentialJson = (_b = object.credentialJson) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseFinishPasskeyLoginResponse() {
    return { accessToken: "", refreshToken: "", user: undefined };
}
exports.FinishPasskeyLoginResponse = {
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
        const message = createBaseFinishPasskeyLoginResponse();
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
        return exports.FinishPasskeyLoginResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseFinishPasskeyLoginResponse();
        message.accessToken = (_a = object.accessToken) !== null && _a !== void 0 ? _a : "";
        message.refreshToken = (_b = object.refreshToken) !== null && _b !== void 0 ? _b : "";
        message.user = (object.user !== undefined && object.user !== null) ? iam_1.User.fromPartial(object.user) : undefined;
        return message;
    },
};
function createBaseListPasskeysRequest() {
    return {};
}
exports.ListPasskeysRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListPasskeysRequest();
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
        return exports.ListPasskeysRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseListPasskeysRequest();
        return message;
    },
};
function createBaseListPasskeysResponse() {
    return { passkeys: [] };
}
exports.ListPasskeysResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.passkeys) {
            iam_1.Passkey.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListPasskeysResponse();
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
        return exports.ListPasskeysResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListPasskeysResponse();
        message.passkeys = ((_a = object.passkeys) === null || _a === void 0 ? void 0 : _a.map((e) => iam_1.Passkey.fromPartial(e))) || [];
        return message;
    },
};
function createBaseDeletePasskeyRequest() {
    return { id: "" };
}
exports.DeletePasskeyRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeletePasskeyRequest();
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
        return exports.DeletePasskeyRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeletePasskeyRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeletePasskeyResponse() {
    return {};
}
exports.DeletePasskeyResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeletePasskeyResponse();
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
        return exports.DeletePasskeyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseDeletePasskeyResponse();
        return message;
    },
};
class AuthSvcClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.GoogleLogin = this.GoogleLogin.bind(this);
        this.ServiceLogin = this.ServiceLogin.bind(this);
        this.Signout = this.Signout.bind(this);
        this.BeginPasskeyRegistration = this.BeginPasskeyRegistration.bind(this);
        this.FinishPasskeyRegistration = this.FinishPasskeyRegistration.bind(this);
        this.BeginPasskeyLogin = this.BeginPasskeyLogin.bind(this);
        this.FinishPasskeyLogin = this.FinishPasskeyLogin.bind(this);
        this.ListPasskeys = this.ListPasskeys.bind(this);
        this.DeletePasskey = this.DeletePasskey.bind(this);
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
    BeginPasskeyRegistration(request, metadata) {
        return this.rpc.unary(exports.AuthSvcBeginPasskeyRegistrationDesc, exports.BeginPasskeyRegistrationRequest.fromPartial(request), metadata);
    }
    FinishPasskeyRegistration(request, metadata) {
        return this.rpc.unary(exports.AuthSvcFinishPasskeyRegistrationDesc, exports.FinishPasskeyRegistrationRequest.fromPartial(request), metadata);
    }
    BeginPasskeyLogin(request, metadata) {
        return this.rpc.unary(exports.AuthSvcBeginPasskeyLoginDesc, exports.BeginPasskeyLoginRequest.fromPartial(request), metadata);
    }
    FinishPasskeyLogin(request, metadata) {
        return this.rpc.unary(exports.AuthSvcFinishPasskeyLoginDesc, exports.FinishPasskeyLoginRequest.fromPartial(request), metadata);
    }
    ListPasskeys(request, metadata) {
        return this.rpc.unary(exports.AuthSvcListPasskeysDesc, exports.ListPasskeysRequest.fromPartial(request), metadata);
    }
    DeletePasskey(request, metadata) {
        return this.rpc.unary(exports.AuthSvcDeletePasskeyDesc, exports.DeletePasskeyRequest.fromPartial(request), metadata);
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
exports.AuthSvcBeginPasskeyRegistrationDesc = {
    methodName: "BeginPasskeyRegistration",
    service: exports.AuthSvcDesc,
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
exports.AuthSvcFinishPasskeyRegistrationDesc = {
    methodName: "FinishPasskeyRegistration",
    service: exports.AuthSvcDesc,
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
exports.AuthSvcBeginPasskeyLoginDesc = {
    methodName: "BeginPasskeyLogin",
    service: exports.AuthSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.BeginPasskeyLoginRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.BeginPasskeyLoginResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AuthSvcFinishPasskeyLoginDesc = {
    methodName: "FinishPasskeyLogin",
    service: exports.AuthSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.FinishPasskeyLoginRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.FinishPasskeyLoginResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AuthSvcListPasskeysDesc = {
    methodName: "ListPasskeys",
    service: exports.AuthSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.ListPasskeysRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.ListPasskeysResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AuthSvcDeletePasskeyDesc = {
    methodName: "DeletePasskey",
    service: exports.AuthSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.DeletePasskeyRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.DeletePasskeyResponse.decode(data);
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

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEntity_Content_Signout = exports.EventEntity_Content_Login = exports.EventEntity_Content_RefreshToken = exports.EventEntity_Content = exports.EventEntity = exports.eventEntity_Content_Signout_ResultToJSON = exports.eventEntity_Content_Signout_ResultFromJSON = exports.EventEntity_Content_Signout_Result = exports.eventEntity_Content_Login_ResultToJSON = exports.eventEntity_Content_Login_ResultFromJSON = exports.EventEntity_Content_Login_Result = exports.eventEntity_Content_RefreshToken_ResultToJSON = exports.eventEntity_Content_RefreshToken_ResultFromJSON = exports.EventEntity_Content_RefreshToken_Result = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const iam_1 = require("../iki_iam/iam");
exports.protobufPackage = "iam";
var EventEntity_Content_RefreshToken_Result;
(function (EventEntity_Content_RefreshToken_Result) {
    EventEntity_Content_RefreshToken_Result[EventEntity_Content_RefreshToken_Result["RESULT_UNSPECIFIED"] = 0] = "RESULT_UNSPECIFIED";
    EventEntity_Content_RefreshToken_Result[EventEntity_Content_RefreshToken_Result["RESULT_SUCCESS"] = 1] = "RESULT_SUCCESS";
    EventEntity_Content_RefreshToken_Result[EventEntity_Content_RefreshToken_Result["RESULT_FAILED"] = 2] = "RESULT_FAILED";
    EventEntity_Content_RefreshToken_Result[EventEntity_Content_RefreshToken_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(EventEntity_Content_RefreshToken_Result || (exports.EventEntity_Content_RefreshToken_Result = EventEntity_Content_RefreshToken_Result = {}));
function eventEntity_Content_RefreshToken_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "RESULT_UNSPECIFIED":
            return EventEntity_Content_RefreshToken_Result.RESULT_UNSPECIFIED;
        case 1:
        case "RESULT_SUCCESS":
            return EventEntity_Content_RefreshToken_Result.RESULT_SUCCESS;
        case 2:
        case "RESULT_FAILED":
            return EventEntity_Content_RefreshToken_Result.RESULT_FAILED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return EventEntity_Content_RefreshToken_Result.UNRECOGNIZED;
    }
}
exports.eventEntity_Content_RefreshToken_ResultFromJSON = eventEntity_Content_RefreshToken_ResultFromJSON;
function eventEntity_Content_RefreshToken_ResultToJSON(object) {
    switch (object) {
        case EventEntity_Content_RefreshToken_Result.RESULT_UNSPECIFIED:
            return "RESULT_UNSPECIFIED";
        case EventEntity_Content_RefreshToken_Result.RESULT_SUCCESS:
            return "RESULT_SUCCESS";
        case EventEntity_Content_RefreshToken_Result.RESULT_FAILED:
            return "RESULT_FAILED";
        case EventEntity_Content_RefreshToken_Result.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.eventEntity_Content_RefreshToken_ResultToJSON = eventEntity_Content_RefreshToken_ResultToJSON;
var EventEntity_Content_Login_Result;
(function (EventEntity_Content_Login_Result) {
    EventEntity_Content_Login_Result[EventEntity_Content_Login_Result["RESULT_UNSPECIFIED"] = 0] = "RESULT_UNSPECIFIED";
    EventEntity_Content_Login_Result[EventEntity_Content_Login_Result["RESULT_SUCCESS"] = 1] = "RESULT_SUCCESS";
    EventEntity_Content_Login_Result[EventEntity_Content_Login_Result["RESULT_FAILED"] = 2] = "RESULT_FAILED";
    EventEntity_Content_Login_Result[EventEntity_Content_Login_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(EventEntity_Content_Login_Result || (exports.EventEntity_Content_Login_Result = EventEntity_Content_Login_Result = {}));
function eventEntity_Content_Login_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "RESULT_UNSPECIFIED":
            return EventEntity_Content_Login_Result.RESULT_UNSPECIFIED;
        case 1:
        case "RESULT_SUCCESS":
            return EventEntity_Content_Login_Result.RESULT_SUCCESS;
        case 2:
        case "RESULT_FAILED":
            return EventEntity_Content_Login_Result.RESULT_FAILED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return EventEntity_Content_Login_Result.UNRECOGNIZED;
    }
}
exports.eventEntity_Content_Login_ResultFromJSON = eventEntity_Content_Login_ResultFromJSON;
function eventEntity_Content_Login_ResultToJSON(object) {
    switch (object) {
        case EventEntity_Content_Login_Result.RESULT_UNSPECIFIED:
            return "RESULT_UNSPECIFIED";
        case EventEntity_Content_Login_Result.RESULT_SUCCESS:
            return "RESULT_SUCCESS";
        case EventEntity_Content_Login_Result.RESULT_FAILED:
            return "RESULT_FAILED";
        case EventEntity_Content_Login_Result.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.eventEntity_Content_Login_ResultToJSON = eventEntity_Content_Login_ResultToJSON;
var EventEntity_Content_Signout_Result;
(function (EventEntity_Content_Signout_Result) {
    EventEntity_Content_Signout_Result[EventEntity_Content_Signout_Result["RESULT_UNSPECIFIED"] = 0] = "RESULT_UNSPECIFIED";
    EventEntity_Content_Signout_Result[EventEntity_Content_Signout_Result["RESULT_SUCCESS"] = 1] = "RESULT_SUCCESS";
    EventEntity_Content_Signout_Result[EventEntity_Content_Signout_Result["RESULT_FAILED"] = 2] = "RESULT_FAILED";
    EventEntity_Content_Signout_Result[EventEntity_Content_Signout_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(EventEntity_Content_Signout_Result || (exports.EventEntity_Content_Signout_Result = EventEntity_Content_Signout_Result = {}));
function eventEntity_Content_Signout_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "RESULT_UNSPECIFIED":
            return EventEntity_Content_Signout_Result.RESULT_UNSPECIFIED;
        case 1:
        case "RESULT_SUCCESS":
            return EventEntity_Content_Signout_Result.RESULT_SUCCESS;
        case 2:
        case "RESULT_FAILED":
            return EventEntity_Content_Signout_Result.RESULT_FAILED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return EventEntity_Content_Signout_Result.UNRECOGNIZED;
    }
}
exports.eventEntity_Content_Signout_ResultFromJSON = eventEntity_Content_Signout_ResultFromJSON;
function eventEntity_Content_Signout_ResultToJSON(object) {
    switch (object) {
        case EventEntity_Content_Signout_Result.RESULT_UNSPECIFIED:
            return "RESULT_UNSPECIFIED";
        case EventEntity_Content_Signout_Result.RESULT_SUCCESS:
            return "RESULT_SUCCESS";
        case EventEntity_Content_Signout_Result.RESULT_FAILED:
            return "RESULT_FAILED";
        case EventEntity_Content_Signout_Result.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.eventEntity_Content_Signout_ResultToJSON = eventEntity_Content_Signout_ResultToJSON;
function createBaseEventEntity() {
    return { topic: "", origin: "", entityId: "", entityName: "", entityType: 0, content: undefined };
}
exports.EventEntity = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.topic !== "") {
            writer.uint32(10).string(message.topic);
        }
        if (message.origin !== "") {
            writer.uint32(18).string(message.origin);
        }
        if (message.entityId !== "") {
            writer.uint32(26).string(message.entityId);
        }
        if (message.entityName !== "") {
            writer.uint32(34).string(message.entityName);
        }
        if (message.entityType !== 0) {
            writer.uint32(40).int32(message.entityType);
        }
        if (message.content !== undefined) {
            exports.EventEntity_Content.encode(message.content, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventEntity();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.topic = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.origin = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.entityId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.entityName = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.entityType = reader.int32();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.content = exports.EventEntity_Content.decode(reader, reader.uint32());
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
            topic: isSet(object.topic) ? String(object.topic) : "",
            origin: isSet(object.origin) ? String(object.origin) : "",
            entityId: isSet(object.entityId) ? String(object.entityId) : "",
            entityName: isSet(object.entityName) ? String(object.entityName) : "",
            entityType: isSet(object.entityType) ? (0, iam_1.entityTypeFromJSON)(object.entityType) : 0,
            content: isSet(object.content) ? exports.EventEntity_Content.fromJSON(object.content) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.topic !== "") {
            obj.topic = message.topic;
        }
        if (message.origin !== "") {
            obj.origin = message.origin;
        }
        if (message.entityId !== "") {
            obj.entityId = message.entityId;
        }
        if (message.entityName !== "") {
            obj.entityName = message.entityName;
        }
        if (message.entityType !== 0) {
            obj.entityType = (0, iam_1.entityTypeToJSON)(message.entityType);
        }
        if (message.content !== undefined) {
            obj.content = exports.EventEntity_Content.toJSON(message.content);
        }
        return obj;
    },
    create(base) {
        return exports.EventEntity.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseEventEntity();
        message.topic = (_a = object.topic) !== null && _a !== void 0 ? _a : "";
        message.origin = (_b = object.origin) !== null && _b !== void 0 ? _b : "";
        message.entityId = (_c = object.entityId) !== null && _c !== void 0 ? _c : "";
        message.entityName = (_d = object.entityName) !== null && _d !== void 0 ? _d : "";
        message.entityType = (_e = object.entityType) !== null && _e !== void 0 ? _e : 0;
        message.content = (object.content !== undefined && object.content !== null)
            ? exports.EventEntity_Content.fromPartial(object.content)
            : undefined;
        return message;
    },
};
function createBaseEventEntity_Content() {
    return { refreshToken: undefined, login: undefined, signout: undefined };
}
exports.EventEntity_Content = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.refreshToken !== undefined) {
            exports.EventEntity_Content_RefreshToken.encode(message.refreshToken, writer.uint32(10).fork()).ldelim();
        }
        if (message.login !== undefined) {
            exports.EventEntity_Content_Login.encode(message.login, writer.uint32(18).fork()).ldelim();
        }
        if (message.signout !== undefined) {
            exports.EventEntity_Content_Signout.encode(message.signout, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventEntity_Content();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.refreshToken = exports.EventEntity_Content_RefreshToken.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.login = exports.EventEntity_Content_Login.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.signout = exports.EventEntity_Content_Signout.decode(reader, reader.uint32());
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
            refreshToken: isSet(object.refreshToken)
                ? exports.EventEntity_Content_RefreshToken.fromJSON(object.refreshToken)
                : undefined,
            login: isSet(object.login) ? exports.EventEntity_Content_Login.fromJSON(object.login) : undefined,
            signout: isSet(object.signout) ? exports.EventEntity_Content_Signout.fromJSON(object.signout) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.refreshToken !== undefined) {
            obj.refreshToken = exports.EventEntity_Content_RefreshToken.toJSON(message.refreshToken);
        }
        if (message.login !== undefined) {
            obj.login = exports.EventEntity_Content_Login.toJSON(message.login);
        }
        if (message.signout !== undefined) {
            obj.signout = exports.EventEntity_Content_Signout.toJSON(message.signout);
        }
        return obj;
    },
    create(base) {
        return exports.EventEntity_Content.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseEventEntity_Content();
        message.refreshToken = (object.refreshToken !== undefined && object.refreshToken !== null)
            ? exports.EventEntity_Content_RefreshToken.fromPartial(object.refreshToken)
            : undefined;
        message.login = (object.login !== undefined && object.login !== null)
            ? exports.EventEntity_Content_Login.fromPartial(object.login)
            : undefined;
        message.signout = (object.signout !== undefined && object.signout !== null)
            ? exports.EventEntity_Content_Signout.fromPartial(object.signout)
            : undefined;
        return message;
    },
};
function createBaseEventEntity_Content_RefreshToken() {
    return { result: 0, message: "" };
}
exports.EventEntity_Content_RefreshToken = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventEntity_Content_RefreshToken();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.result = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.message = reader.string();
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
            result: isSet(object.result) ? eventEntity_Content_RefreshToken_ResultFromJSON(object.result) : 0,
            message: isSet(object.message) ? String(object.message) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.result !== 0) {
            obj.result = eventEntity_Content_RefreshToken_ResultToJSON(message.result);
        }
        if (message.message !== "") {
            obj.message = message.message;
        }
        return obj;
    },
    create(base) {
        return exports.EventEntity_Content_RefreshToken.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventEntity_Content_RefreshToken();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : 0;
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseEventEntity_Content_Login() {
    return { result: 0, message: "" };
}
exports.EventEntity_Content_Login = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventEntity_Content_Login();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.result = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.message = reader.string();
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
            result: isSet(object.result) ? eventEntity_Content_Login_ResultFromJSON(object.result) : 0,
            message: isSet(object.message) ? String(object.message) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.result !== 0) {
            obj.result = eventEntity_Content_Login_ResultToJSON(message.result);
        }
        if (message.message !== "") {
            obj.message = message.message;
        }
        return obj;
    },
    create(base) {
        return exports.EventEntity_Content_Login.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventEntity_Content_Login();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : 0;
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseEventEntity_Content_Signout() {
    return { result: 0, message: "" };
}
exports.EventEntity_Content_Signout = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventEntity_Content_Signout();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.result = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.message = reader.string();
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
            result: isSet(object.result) ? eventEntity_Content_Signout_ResultFromJSON(object.result) : 0,
            message: isSet(object.message) ? String(object.message) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.result !== 0) {
            obj.result = eventEntity_Content_Signout_ResultToJSON(message.result);
        }
        if (message.message !== "") {
            obj.message = message.message;
        }
        return obj;
    },
    create(base) {
        return exports.EventEntity_Content_Signout.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventEntity_Content_Signout();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : 0;
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}

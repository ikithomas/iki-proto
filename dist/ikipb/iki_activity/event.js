"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventActivityUpload = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "event";
function createBaseEventActivityUpload() {
    return { activityId: "", ikiUserId: "" };
}
exports.EventActivityUpload = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.activityId !== "") {
            writer.uint32(10).string(message.activityId);
        }
        if (message.ikiUserId !== "") {
            writer.uint32(18).string(message.ikiUserId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventActivityUpload();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.activityId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.ikiUserId = reader.string();
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
            activityId: isSet(object.activityId) ? String(object.activityId) : "",
            ikiUserId: isSet(object.ikiUserId) ? String(object.ikiUserId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.activityId !== "") {
            obj.activityId = message.activityId;
        }
        if (message.ikiUserId !== "") {
            obj.ikiUserId = message.ikiUserId;
        }
        return obj;
    },
    create(base) {
        return exports.EventActivityUpload.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventActivityUpload();
        message.activityId = (_a = object.activityId) !== null && _a !== void 0 ? _a : "";
        message.ikiUserId = (_b = object.ikiUserId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}

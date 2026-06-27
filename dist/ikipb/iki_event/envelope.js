"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Envelope = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const any_1 = require("../../google/protobuf/any");
exports.protobufPackage = "event";
function createBaseEnvelope() {
    return { eventId: "", eventType: "", payload: undefined };
}
exports.Envelope = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.eventId !== "") {
            writer.uint32(10).string(message.eventId);
        }
        if (message.eventType !== "") {
            writer.uint32(18).string(message.eventType);
        }
        if (message.payload !== undefined) {
            any_1.Any.encode(message.payload, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnvelope();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.eventId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.eventType = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.payload = any_1.Any.decode(reader, reader.uint32());
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
            eventId: isSet(object.eventId) ? String(object.eventId) : "",
            eventType: isSet(object.eventType) ? String(object.eventType) : "",
            payload: isSet(object.payload) ? any_1.Any.fromJSON(object.payload) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.eventId !== "") {
            obj.eventId = message.eventId;
        }
        if (message.eventType !== "") {
            obj.eventType = message.eventType;
        }
        if (message.payload !== undefined) {
            obj.payload = any_1.Any.toJSON(message.payload);
        }
        return obj;
    },
    create(base) {
        return exports.Envelope.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEnvelope();
        message.eventId = (_a = object.eventId) !== null && _a !== void 0 ? _a : "";
        message.eventType = (_b = object.eventType) !== null && _b !== void 0 ? _b : "";
        message.payload = (object.payload !== undefined && object.payload !== null)
            ? any_1.Any.fromPartial(object.payload)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}

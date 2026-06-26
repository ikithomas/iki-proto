"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketEvent_Commented = exports.TicketEvent_StateChanged = exports.TicketEvent_Updated = exports.TicketEvent_Created = exports.TicketEvent = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "ticket";
function createBaseTicketEvent() {
    return { eventTime: 0, created: undefined, updated: undefined, stateChanged: undefined, commented: undefined };
}
exports.TicketEvent = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.eventTime !== 0) {
            writer.uint32(8).int64(message.eventTime);
        }
        if (message.created !== undefined) {
            exports.TicketEvent_Created.encode(message.created, writer.uint32(18).fork()).ldelim();
        }
        if (message.updated !== undefined) {
            exports.TicketEvent_Updated.encode(message.updated, writer.uint32(26).fork()).ldelim();
        }
        if (message.stateChanged !== undefined) {
            exports.TicketEvent_StateChanged.encode(message.stateChanged, writer.uint32(34).fork()).ldelim();
        }
        if (message.commented !== undefined) {
            exports.TicketEvent_Commented.encode(message.commented, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTicketEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.eventTime = longToNumber(reader.int64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.created = exports.TicketEvent_Created.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.updated = exports.TicketEvent_Updated.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.stateChanged = exports.TicketEvent_StateChanged.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.commented = exports.TicketEvent_Commented.decode(reader, reader.uint32());
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
            eventTime: isSet(object.eventTime) ? Number(object.eventTime) : 0,
            created: isSet(object.created) ? exports.TicketEvent_Created.fromJSON(object.created) : undefined,
            updated: isSet(object.updated) ? exports.TicketEvent_Updated.fromJSON(object.updated) : undefined,
            stateChanged: isSet(object.stateChanged) ? exports.TicketEvent_StateChanged.fromJSON(object.stateChanged) : undefined,
            commented: isSet(object.commented) ? exports.TicketEvent_Commented.fromJSON(object.commented) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.eventTime !== 0) {
            obj.eventTime = Math.round(message.eventTime);
        }
        if (message.created !== undefined) {
            obj.created = exports.TicketEvent_Created.toJSON(message.created);
        }
        if (message.updated !== undefined) {
            obj.updated = exports.TicketEvent_Updated.toJSON(message.updated);
        }
        if (message.stateChanged !== undefined) {
            obj.stateChanged = exports.TicketEvent_StateChanged.toJSON(message.stateChanged);
        }
        if (message.commented !== undefined) {
            obj.commented = exports.TicketEvent_Commented.toJSON(message.commented);
        }
        return obj;
    },
    create(base) {
        return exports.TicketEvent.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTicketEvent();
        message.eventTime = (_a = object.eventTime) !== null && _a !== void 0 ? _a : 0;
        message.created = (object.created !== undefined && object.created !== null)
            ? exports.TicketEvent_Created.fromPartial(object.created)
            : undefined;
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? exports.TicketEvent_Updated.fromPartial(object.updated)
            : undefined;
        message.stateChanged = (object.stateChanged !== undefined && object.stateChanged !== null)
            ? exports.TicketEvent_StateChanged.fromPartial(object.stateChanged)
            : undefined;
        message.commented = (object.commented !== undefined && object.commented !== null)
            ? exports.TicketEvent_Commented.fromPartial(object.commented)
            : undefined;
        return message;
    },
};
function createBaseTicketEvent_Created() {
    return {
        ticketId: "",
        title: "",
        content: undefined,
        stateKey: "",
        creatorId: "",
        assigneeId: undefined,
        dueAt: undefined,
    };
}
exports.TicketEvent_Created = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ticketId !== "") {
            writer.uint32(10).string(message.ticketId);
        }
        if (message.title !== "") {
            writer.uint32(18).string(message.title);
        }
        if (message.content !== undefined) {
            writer.uint32(26).string(message.content);
        }
        if (message.stateKey !== "") {
            writer.uint32(34).string(message.stateKey);
        }
        if (message.creatorId !== "") {
            writer.uint32(42).string(message.creatorId);
        }
        if (message.assigneeId !== undefined) {
            writer.uint32(50).string(message.assigneeId);
        }
        if (message.dueAt !== undefined) {
            writer.uint32(56).int64(message.dueAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTicketEvent_Created();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ticketId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.content = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.stateKey = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.creatorId = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.assigneeId = reader.string();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.dueAt = longToNumber(reader.int64());
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
            ticketId: isSet(object.ticketId) ? String(object.ticketId) : "",
            title: isSet(object.title) ? String(object.title) : "",
            content: isSet(object.content) ? String(object.content) : undefined,
            stateKey: isSet(object.stateKey) ? String(object.stateKey) : "",
            creatorId: isSet(object.creatorId) ? String(object.creatorId) : "",
            assigneeId: isSet(object.assigneeId) ? String(object.assigneeId) : undefined,
            dueAt: isSet(object.dueAt) ? Number(object.dueAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ticketId !== "") {
            obj.ticketId = message.ticketId;
        }
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.content !== undefined) {
            obj.content = message.content;
        }
        if (message.stateKey !== "") {
            obj.stateKey = message.stateKey;
        }
        if (message.creatorId !== "") {
            obj.creatorId = message.creatorId;
        }
        if (message.assigneeId !== undefined) {
            obj.assigneeId = message.assigneeId;
        }
        if (message.dueAt !== undefined) {
            obj.dueAt = Math.round(message.dueAt);
        }
        return obj;
    },
    create(base) {
        return exports.TicketEvent_Created.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseTicketEvent_Created();
        message.ticketId = (_a = object.ticketId) !== null && _a !== void 0 ? _a : "";
        message.title = (_b = object.title) !== null && _b !== void 0 ? _b : "";
        message.content = (_c = object.content) !== null && _c !== void 0 ? _c : undefined;
        message.stateKey = (_d = object.stateKey) !== null && _d !== void 0 ? _d : "";
        message.creatorId = (_e = object.creatorId) !== null && _e !== void 0 ? _e : "";
        message.assigneeId = (_f = object.assigneeId) !== null && _f !== void 0 ? _f : undefined;
        message.dueAt = (_g = object.dueAt) !== null && _g !== void 0 ? _g : undefined;
        return message;
    },
};
function createBaseTicketEvent_Updated() {
    return { ticketId: "", title: "", content: undefined, assigneeId: undefined, dueAt: undefined };
}
exports.TicketEvent_Updated = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ticketId !== "") {
            writer.uint32(10).string(message.ticketId);
        }
        if (message.title !== "") {
            writer.uint32(18).string(message.title);
        }
        if (message.content !== undefined) {
            writer.uint32(26).string(message.content);
        }
        if (message.assigneeId !== undefined) {
            writer.uint32(34).string(message.assigneeId);
        }
        if (message.dueAt !== undefined) {
            writer.uint32(40).int64(message.dueAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTicketEvent_Updated();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ticketId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.content = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.assigneeId = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.dueAt = longToNumber(reader.int64());
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
            ticketId: isSet(object.ticketId) ? String(object.ticketId) : "",
            title: isSet(object.title) ? String(object.title) : "",
            content: isSet(object.content) ? String(object.content) : undefined,
            assigneeId: isSet(object.assigneeId) ? String(object.assigneeId) : undefined,
            dueAt: isSet(object.dueAt) ? Number(object.dueAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ticketId !== "") {
            obj.ticketId = message.ticketId;
        }
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.content !== undefined) {
            obj.content = message.content;
        }
        if (message.assigneeId !== undefined) {
            obj.assigneeId = message.assigneeId;
        }
        if (message.dueAt !== undefined) {
            obj.dueAt = Math.round(message.dueAt);
        }
        return obj;
    },
    create(base) {
        return exports.TicketEvent_Updated.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseTicketEvent_Updated();
        message.ticketId = (_a = object.ticketId) !== null && _a !== void 0 ? _a : "";
        message.title = (_b = object.title) !== null && _b !== void 0 ? _b : "";
        message.content = (_c = object.content) !== null && _c !== void 0 ? _c : undefined;
        message.assigneeId = (_d = object.assigneeId) !== null && _d !== void 0 ? _d : undefined;
        message.dueAt = (_e = object.dueAt) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
function createBaseTicketEvent_StateChanged() {
    return { ticketId: "", fromStateKey: "", toStateKey: "", stateUpdatedAt: 0 };
}
exports.TicketEvent_StateChanged = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ticketId !== "") {
            writer.uint32(10).string(message.ticketId);
        }
        if (message.fromStateKey !== "") {
            writer.uint32(18).string(message.fromStateKey);
        }
        if (message.toStateKey !== "") {
            writer.uint32(26).string(message.toStateKey);
        }
        if (message.stateUpdatedAt !== 0) {
            writer.uint32(32).int64(message.stateUpdatedAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTicketEvent_StateChanged();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ticketId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.fromStateKey = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.toStateKey = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.stateUpdatedAt = longToNumber(reader.int64());
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
            ticketId: isSet(object.ticketId) ? String(object.ticketId) : "",
            fromStateKey: isSet(object.fromStateKey) ? String(object.fromStateKey) : "",
            toStateKey: isSet(object.toStateKey) ? String(object.toStateKey) : "",
            stateUpdatedAt: isSet(object.stateUpdatedAt) ? Number(object.stateUpdatedAt) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ticketId !== "") {
            obj.ticketId = message.ticketId;
        }
        if (message.fromStateKey !== "") {
            obj.fromStateKey = message.fromStateKey;
        }
        if (message.toStateKey !== "") {
            obj.toStateKey = message.toStateKey;
        }
        if (message.stateUpdatedAt !== 0) {
            obj.stateUpdatedAt = Math.round(message.stateUpdatedAt);
        }
        return obj;
    },
    create(base) {
        return exports.TicketEvent_StateChanged.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseTicketEvent_StateChanged();
        message.ticketId = (_a = object.ticketId) !== null && _a !== void 0 ? _a : "";
        message.fromStateKey = (_b = object.fromStateKey) !== null && _b !== void 0 ? _b : "";
        message.toStateKey = (_c = object.toStateKey) !== null && _c !== void 0 ? _c : "";
        message.stateUpdatedAt = (_d = object.stateUpdatedAt) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseTicketEvent_Commented() {
    return { ticketId: "", commentId: "", content: "", authorId: "" };
}
exports.TicketEvent_Commented = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ticketId !== "") {
            writer.uint32(10).string(message.ticketId);
        }
        if (message.commentId !== "") {
            writer.uint32(18).string(message.commentId);
        }
        if (message.content !== "") {
            writer.uint32(26).string(message.content);
        }
        if (message.authorId !== "") {
            writer.uint32(34).string(message.authorId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTicketEvent_Commented();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ticketId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.commentId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.content = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.authorId = reader.string();
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
            ticketId: isSet(object.ticketId) ? String(object.ticketId) : "",
            commentId: isSet(object.commentId) ? String(object.commentId) : "",
            content: isSet(object.content) ? String(object.content) : "",
            authorId: isSet(object.authorId) ? String(object.authorId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ticketId !== "") {
            obj.ticketId = message.ticketId;
        }
        if (message.commentId !== "") {
            obj.commentId = message.commentId;
        }
        if (message.content !== "") {
            obj.content = message.content;
        }
        if (message.authorId !== "") {
            obj.authorId = message.authorId;
        }
        return obj;
    },
    create(base) {
        return exports.TicketEvent_Commented.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseTicketEvent_Commented();
        message.ticketId = (_a = object.ticketId) !== null && _a !== void 0 ? _a : "";
        message.commentId = (_b = object.commentId) !== null && _b !== void 0 ? _b : "";
        message.content = (_c = object.content) !== null && _c !== void 0 ? _c : "";
        message.authorId = (_d = object.authorId) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
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

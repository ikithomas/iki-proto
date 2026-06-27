"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTicketCommented = exports.EventTicketStateUpdated = exports.EventTicketUpdated = exports.EventTicketCreated = exports.Ticket = exports.Comment = exports.User = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "ticket";
function createBaseUser() {
    return { id: "", firstname: "", lastname: "", email: "" };
}
exports.User = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.firstname !== "") {
            writer.uint32(18).string(message.firstname);
        }
        if (message.lastname !== "") {
            writer.uint32(26).string(message.lastname);
        }
        if (message.email !== "") {
            writer.uint32(34).string(message.email);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUser();
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
                    message.firstname = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.lastname = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
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
        return {
            id: isSet(object.id) ? String(object.id) : "",
            firstname: isSet(object.firstname) ? String(object.firstname) : "",
            lastname: isSet(object.lastname) ? String(object.lastname) : "",
            email: isSet(object.email) ? String(object.email) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.firstname !== "") {
            obj.firstname = message.firstname;
        }
        if (message.lastname !== "") {
            obj.lastname = message.lastname;
        }
        if (message.email !== "") {
            obj.email = message.email;
        }
        return obj;
    },
    create(base) {
        return exports.User.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseUser();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.firstname = (_b = object.firstname) !== null && _b !== void 0 ? _b : "";
        message.lastname = (_c = object.lastname) !== null && _c !== void 0 ? _c : "";
        message.email = (_d = object.email) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseComment() {
    return { id: "", content: "", author: undefined };
}
exports.Comment = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.content !== "") {
            writer.uint32(18).string(message.content);
        }
        if (message.author !== undefined) {
            exports.User.encode(message.author, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseComment();
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
                    message.content = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.author = exports.User.decode(reader, reader.uint32());
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
            content: isSet(object.content) ? String(object.content) : "",
            author: isSet(object.author) ? exports.User.fromJSON(object.author) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.content !== "") {
            obj.content = message.content;
        }
        if (message.author !== undefined) {
            obj.author = exports.User.toJSON(message.author);
        }
        return obj;
    },
    create(base) {
        return exports.Comment.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseComment();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.content = (_b = object.content) !== null && _b !== void 0 ? _b : "";
        message.author = (object.author !== undefined && object.author !== null)
            ? exports.User.fromPartial(object.author)
            : undefined;
        return message;
    },
};
function createBaseTicket() {
    return {
        id: "",
        title: "",
        content: undefined,
        stateKey: "",
        dueAt: undefined,
        creator: undefined,
        assignee: undefined,
        comments: [],
    };
}
exports.Ticket = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
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
        if (message.dueAt !== undefined) {
            writer.uint32(40).int64(message.dueAt);
        }
        if (message.creator !== undefined) {
            exports.User.encode(message.creator, writer.uint32(50).fork()).ldelim();
        }
        if (message.assignee !== undefined) {
            exports.User.encode(message.assignee, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.comments) {
            exports.Comment.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTicket();
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
                    if (tag !== 40) {
                        break;
                    }
                    message.dueAt = longToNumber(reader.int64());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.creator = exports.User.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.assignee = exports.User.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.comments.push(exports.Comment.decode(reader, reader.uint32()));
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
            title: isSet(object.title) ? String(object.title) : "",
            content: isSet(object.content) ? String(object.content) : undefined,
            stateKey: isSet(object.stateKey) ? String(object.stateKey) : "",
            dueAt: isSet(object.dueAt) ? Number(object.dueAt) : undefined,
            creator: isSet(object.creator) ? exports.User.fromJSON(object.creator) : undefined,
            assignee: isSet(object.assignee) ? exports.User.fromJSON(object.assignee) : undefined,
            comments: Array.isArray(object === null || object === void 0 ? void 0 : object.comments) ? object.comments.map((e) => exports.Comment.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
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
        if (message.dueAt !== undefined) {
            obj.dueAt = Math.round(message.dueAt);
        }
        if (message.creator !== undefined) {
            obj.creator = exports.User.toJSON(message.creator);
        }
        if (message.assignee !== undefined) {
            obj.assignee = exports.User.toJSON(message.assignee);
        }
        if ((_a = message.comments) === null || _a === void 0 ? void 0 : _a.length) {
            obj.comments = message.comments.map((e) => exports.Comment.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Ticket.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseTicket();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.title = (_b = object.title) !== null && _b !== void 0 ? _b : "";
        message.content = (_c = object.content) !== null && _c !== void 0 ? _c : undefined;
        message.stateKey = (_d = object.stateKey) !== null && _d !== void 0 ? _d : "";
        message.dueAt = (_e = object.dueAt) !== null && _e !== void 0 ? _e : undefined;
        message.creator = (object.creator !== undefined && object.creator !== null)
            ? exports.User.fromPartial(object.creator)
            : undefined;
        message.assignee = (object.assignee !== undefined && object.assignee !== null)
            ? exports.User.fromPartial(object.assignee)
            : undefined;
        message.comments = ((_f = object.comments) === null || _f === void 0 ? void 0 : _f.map((e) => exports.Comment.fromPartial(e))) || [];
        return message;
    },
};
function createBaseEventTicketCreated() {
    return { ticket: undefined };
}
exports.EventTicketCreated = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ticket !== undefined) {
            exports.Ticket.encode(message.ticket, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventTicketCreated();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ticket = exports.Ticket.decode(reader, reader.uint32());
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
        return { ticket: isSet(object.ticket) ? exports.Ticket.fromJSON(object.ticket) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.ticket !== undefined) {
            obj.ticket = exports.Ticket.toJSON(message.ticket);
        }
        return obj;
    },
    create(base) {
        return exports.EventTicketCreated.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseEventTicketCreated();
        message.ticket = (object.ticket !== undefined && object.ticket !== null)
            ? exports.Ticket.fromPartial(object.ticket)
            : undefined;
        return message;
    },
};
function createBaseEventTicketUpdated() {
    return { ticket: undefined };
}
exports.EventTicketUpdated = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ticket !== undefined) {
            exports.Ticket.encode(message.ticket, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventTicketUpdated();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ticket = exports.Ticket.decode(reader, reader.uint32());
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
        return { ticket: isSet(object.ticket) ? exports.Ticket.fromJSON(object.ticket) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.ticket !== undefined) {
            obj.ticket = exports.Ticket.toJSON(message.ticket);
        }
        return obj;
    },
    create(base) {
        return exports.EventTicketUpdated.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseEventTicketUpdated();
        message.ticket = (object.ticket !== undefined && object.ticket !== null)
            ? exports.Ticket.fromPartial(object.ticket)
            : undefined;
        return message;
    },
};
function createBaseEventTicketStateUpdated() {
    return { ticket: "" };
}
exports.EventTicketStateUpdated = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ticket !== "") {
            writer.uint32(10).string(message.ticket);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventTicketStateUpdated();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ticket = reader.string();
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
        return { ticket: isSet(object.ticket) ? String(object.ticket) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.ticket !== "") {
            obj.ticket = message.ticket;
        }
        return obj;
    },
    create(base) {
        return exports.EventTicketStateUpdated.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseEventTicketStateUpdated();
        message.ticket = (_a = object.ticket) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseEventTicketCommented() {
    return { ticket: "" };
}
exports.EventTicketCommented = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ticket !== "") {
            writer.uint32(10).string(message.ticket);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventTicketCommented();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ticket = reader.string();
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
        return { ticket: isSet(object.ticket) ? String(object.ticket) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.ticket !== "") {
            obj.ticket = message.ticket;
        }
        return obj;
    },
    create(base) {
        return exports.EventTicketCommented.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseEventTicketCommented();
        message.ticket = (_a = object.ticket) !== null && _a !== void 0 ? _a : "";
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

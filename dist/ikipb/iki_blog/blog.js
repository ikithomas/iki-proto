"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = exports.Author = exports.Billy = exports.Series = exports.PostMetadata = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "blog";
function createBasePostMetadata() {
    return {
        id: "",
        author: undefined,
        title: "",
        preface: "",
        published: false,
        tags: [],
        category: "",
        createdAt: 0,
        updatedAt: 0,
        seriesId: undefined,
    };
}
exports.PostMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.author !== undefined) {
            exports.Author.encode(message.author, writer.uint32(18).fork()).ldelim();
        }
        if (message.title !== "") {
            writer.uint32(26).string(message.title);
        }
        if (message.preface !== "") {
            writer.uint32(34).string(message.preface);
        }
        if (message.published === true) {
            writer.uint32(40).bool(message.published);
        }
        for (const v of message.tags) {
            writer.uint32(50).string(v);
        }
        if (message.category !== "") {
            writer.uint32(58).string(message.category);
        }
        if (message.createdAt !== 0) {
            writer.uint32(64).int64(message.createdAt);
        }
        if (message.updatedAt !== 0) {
            writer.uint32(72).int64(message.updatedAt);
        }
        if (message.seriesId !== undefined) {
            writer.uint32(82).string(message.seriesId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePostMetadata();
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
                    message.author = exports.Author.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.preface = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.published = reader.bool();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.tags.push(reader.string());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.category = reader.string();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.createdAt = longToNumber(reader.int64());
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.updatedAt = longToNumber(reader.int64());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.seriesId = reader.string();
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
            author: isSet(object.author) ? exports.Author.fromJSON(object.author) : undefined,
            title: isSet(object.title) ? String(object.title) : "",
            preface: isSet(object.preface) ? String(object.preface) : "",
            published: isSet(object.published) ? Boolean(object.published) : false,
            tags: Array.isArray(object === null || object === void 0 ? void 0 : object.tags) ? object.tags.map((e) => String(e)) : [],
            category: isSet(object.category) ? String(object.category) : "",
            createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
            updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
            seriesId: isSet(object.seriesId) ? String(object.seriesId) : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.author !== undefined) {
            obj.author = exports.Author.toJSON(message.author);
        }
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.preface !== "") {
            obj.preface = message.preface;
        }
        if (message.published === true) {
            obj.published = message.published;
        }
        if ((_a = message.tags) === null || _a === void 0 ? void 0 : _a.length) {
            obj.tags = message.tags;
        }
        if (message.category !== "") {
            obj.category = message.category;
        }
        if (message.createdAt !== 0) {
            obj.createdAt = Math.round(message.createdAt);
        }
        if (message.updatedAt !== 0) {
            obj.updatedAt = Math.round(message.updatedAt);
        }
        if (message.seriesId !== undefined) {
            obj.seriesId = message.seriesId;
        }
        return obj;
    },
    create(base) {
        return exports.PostMetadata.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBasePostMetadata();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.author = (object.author !== undefined && object.author !== null)
            ? exports.Author.fromPartial(object.author)
            : undefined;
        message.title = (_b = object.title) !== null && _b !== void 0 ? _b : "";
        message.preface = (_c = object.preface) !== null && _c !== void 0 ? _c : "";
        message.published = (_d = object.published) !== null && _d !== void 0 ? _d : false;
        message.tags = ((_e = object.tags) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.category = (_f = object.category) !== null && _f !== void 0 ? _f : "";
        message.createdAt = (_g = object.createdAt) !== null && _g !== void 0 ? _g : 0;
        message.updatedAt = (_h = object.updatedAt) !== null && _h !== void 0 ? _h : 0;
        message.seriesId = (_j = object.seriesId) !== null && _j !== void 0 ? _j : undefined;
        return message;
    },
};
function createBaseSeries() {
    return { id: "", author: undefined, title: "", preface: "", category: "", createdAt: 0, updatedAt: 0 };
}
exports.Series = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.author !== undefined) {
            exports.Author.encode(message.author, writer.uint32(18).fork()).ldelim();
        }
        if (message.title !== "") {
            writer.uint32(26).string(message.title);
        }
        if (message.preface !== "") {
            writer.uint32(34).string(message.preface);
        }
        if (message.category !== "") {
            writer.uint32(42).string(message.category);
        }
        if (message.createdAt !== 0) {
            writer.uint32(48).int64(message.createdAt);
        }
        if (message.updatedAt !== 0) {
            writer.uint32(56).int64(message.updatedAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSeries();
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
                    message.author = exports.Author.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.preface = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.category = reader.string();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.createdAt = longToNumber(reader.int64());
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.updatedAt = longToNumber(reader.int64());
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
            author: isSet(object.author) ? exports.Author.fromJSON(object.author) : undefined,
            title: isSet(object.title) ? String(object.title) : "",
            preface: isSet(object.preface) ? String(object.preface) : "",
            category: isSet(object.category) ? String(object.category) : "",
            createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
            updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.author !== undefined) {
            obj.author = exports.Author.toJSON(message.author);
        }
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.preface !== "") {
            obj.preface = message.preface;
        }
        if (message.category !== "") {
            obj.category = message.category;
        }
        if (message.createdAt !== 0) {
            obj.createdAt = Math.round(message.createdAt);
        }
        if (message.updatedAt !== 0) {
            obj.updatedAt = Math.round(message.updatedAt);
        }
        return obj;
    },
    create(base) {
        return exports.Series.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseSeries();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.author = (object.author !== undefined && object.author !== null)
            ? exports.Author.fromPartial(object.author)
            : undefined;
        message.title = (_b = object.title) !== null && _b !== void 0 ? _b : "";
        message.preface = (_c = object.preface) !== null && _c !== void 0 ? _c : "";
        message.category = (_d = object.category) !== null && _d !== void 0 ? _d : "";
        message.createdAt = (_e = object.createdAt) !== null && _e !== void 0 ? _e : 0;
        message.updatedAt = (_f = object.updatedAt) !== null && _f !== void 0 ? _f : 0;
        return message;
    },
};
function createBaseBilly() {
    return { id: "", title: "", preface: "", category: "", createdAt: 0, updatedAt: 0 };
}
exports.Billy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.title !== "") {
            writer.uint32(26).string(message.title);
        }
        if (message.preface !== "") {
            writer.uint32(34).string(message.preface);
        }
        if (message.category !== "") {
            writer.uint32(42).string(message.category);
        }
        if (message.createdAt !== 0) {
            writer.uint32(48).int64(message.createdAt);
        }
        if (message.updatedAt !== 0) {
            writer.uint32(56).int64(message.updatedAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBilly();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.preface = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.category = reader.string();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.createdAt = longToNumber(reader.int64());
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.updatedAt = longToNumber(reader.int64());
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
            preface: isSet(object.preface) ? String(object.preface) : "",
            category: isSet(object.category) ? String(object.category) : "",
            createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
            updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.preface !== "") {
            obj.preface = message.preface;
        }
        if (message.category !== "") {
            obj.category = message.category;
        }
        if (message.createdAt !== 0) {
            obj.createdAt = Math.round(message.createdAt);
        }
        if (message.updatedAt !== 0) {
            obj.updatedAt = Math.round(message.updatedAt);
        }
        return obj;
    },
    create(base) {
        return exports.Billy.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseBilly();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.title = (_b = object.title) !== null && _b !== void 0 ? _b : "";
        message.preface = (_c = object.preface) !== null && _c !== void 0 ? _c : "";
        message.category = (_d = object.category) !== null && _d !== void 0 ? _d : "";
        message.createdAt = (_e = object.createdAt) !== null && _e !== void 0 ? _e : 0;
        message.updatedAt = (_f = object.updatedAt) !== null && _f !== void 0 ? _f : 0;
        return message;
    },
};
function createBaseAuthor() {
    return { id: "", ikiUserId: "", displayName: "" };
}
exports.Author = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.ikiUserId !== "") {
            writer.uint32(18).string(message.ikiUserId);
        }
        if (message.displayName !== "") {
            writer.uint32(26).string(message.displayName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthor();
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
                    message.ikiUserId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.displayName = reader.string();
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
            ikiUserId: isSet(object.ikiUserId) ? String(object.ikiUserId) : "",
            displayName: isSet(object.displayName) ? String(object.displayName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.ikiUserId !== "") {
            obj.ikiUserId = message.ikiUserId;
        }
        if (message.displayName !== "") {
            obj.displayName = message.displayName;
        }
        return obj;
    },
    create(base) {
        return exports.Author.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAuthor();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.ikiUserId = (_b = object.ikiUserId) !== null && _b !== void 0 ? _b : "";
        message.displayName = (_c = object.displayName) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBasePagination() {
    return { page: 0, pageSize: 0 };
}
exports.Pagination = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.page !== 0) {
            writer.uint32(8).int32(message.page);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int32(message.pageSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePagination();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.page = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.pageSize = reader.int32();
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
            page: isSet(object.page) ? Number(object.page) : 0,
            pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.page !== 0) {
            obj.page = Math.round(message.page);
        }
        if (message.pageSize !== 0) {
            obj.pageSize = Math.round(message.pageSize);
        }
        return obj;
    },
    create(base) {
        return exports.Pagination.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePagination();
        message.page = (_a = object.page) !== null && _a !== void 0 ? _a : 0;
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
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

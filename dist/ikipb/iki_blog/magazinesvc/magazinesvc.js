"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.MyMagazineSvcListByCategoryDesc = exports.MyMagazineSvcListDesc = exports.MyMagazineSvcDeleteDesc = exports.MyMagazineSvcGetDesc = exports.MyMagazineSvcUpdateDesc = exports.MyMagazineSvcCreateDesc = exports.MyMagazineSvcDesc = exports.MyMagazineSvcClientImpl = exports.MagazineSvcGetDesc = exports.MagazineSvcListByCategoryDesc = exports.MagazineSvcListByAuthorIdDesc = exports.MagazineSvcListDesc = exports.MagazineSvcDesc = exports.MagazineSvcClientImpl = exports.ListMyResponse = exports.ListMyByCategoryRequest = exports.ListMyRequest = exports.DeleteMyResponse = exports.DeleteMyRequest = exports.GetMyResponse = exports.GetMyRequest = exports.UpdateMyResponse = exports.UpdateMyRequest = exports.CreateMyResponse = exports.CreateMyRequest = exports.GetResponse = exports.GetRequest = exports.ListResponse = exports.ListByCategoryRequest = exports.ListByAuthorIdRequest = exports.ListRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_web_1 = require("@improbable-eng/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const blog_1 = require("../blog");
exports.protobufPackage = "magazinesvc";
function createBaseListRequest() {
    return { pagination: undefined };
}
exports.ListRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            blog_1.Pagination.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = blog_1.Pagination.decode(reader, reader.uint32());
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
        return { pagination: isSet(object.pagination) ? blog_1.Pagination.fromJSON(object.pagination) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = blog_1.Pagination.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.ListRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseListRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? blog_1.Pagination.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseListByAuthorIdRequest() {
    return { pagination: undefined, authorId: "" };
}
exports.ListByAuthorIdRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            blog_1.Pagination.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.authorId !== "") {
            writer.uint32(18).string(message.authorId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListByAuthorIdRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = blog_1.Pagination.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
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
            pagination: isSet(object.pagination) ? blog_1.Pagination.fromJSON(object.pagination) : undefined,
            authorId: isSet(object.authorId) ? String(object.authorId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = blog_1.Pagination.toJSON(message.pagination);
        }
        if (message.authorId !== "") {
            obj.authorId = message.authorId;
        }
        return obj;
    },
    create(base) {
        return exports.ListByAuthorIdRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListByAuthorIdRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? blog_1.Pagination.fromPartial(object.pagination)
            : undefined;
        message.authorId = (_a = object.authorId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseListByCategoryRequest() {
    return { pagination: undefined, category: "" };
}
exports.ListByCategoryRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            blog_1.Pagination.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.category !== "") {
            writer.uint32(18).string(message.category);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListByCategoryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = blog_1.Pagination.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.category = reader.string();
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
            pagination: isSet(object.pagination) ? blog_1.Pagination.fromJSON(object.pagination) : undefined,
            category: isSet(object.category) ? String(object.category) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = blog_1.Pagination.toJSON(message.pagination);
        }
        if (message.category !== "") {
            obj.category = message.category;
        }
        return obj;
    },
    create(base) {
        return exports.ListByCategoryRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListByCategoryRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? blog_1.Pagination.fromPartial(object.pagination)
            : undefined;
        message.category = (_a = object.category) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseListResponse() {
    return { magazines: [], series: [], totalCount: 0 };
}
exports.ListResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.magazines) {
            blog_1.Magazine.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.series) {
            blog_1.Series.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.totalCount !== 0) {
            writer.uint32(16).int64(message.totalCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.magazines.push(blog_1.Magazine.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.series.push(blog_1.Series.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.totalCount = longToNumber(reader.int64());
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
            magazines: Array.isArray(object === null || object === void 0 ? void 0 : object.magazines) ? object.magazines.map((e) => blog_1.Magazine.fromJSON(e)) : [],
            series: Array.isArray(object === null || object === void 0 ? void 0 : object.series) ? object.series.map((e) => blog_1.Series.fromJSON(e)) : [],
            totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
        };
    },
    toJSON(message) {
        var _a, _b;
        const obj = {};
        if ((_a = message.magazines) === null || _a === void 0 ? void 0 : _a.length) {
            obj.magazines = message.magazines.map((e) => blog_1.Magazine.toJSON(e));
        }
        if ((_b = message.series) === null || _b === void 0 ? void 0 : _b.length) {
            obj.series = message.series.map((e) => blog_1.Series.toJSON(e));
        }
        if (message.totalCount !== 0) {
            obj.totalCount = Math.round(message.totalCount);
        }
        return obj;
    },
    create(base) {
        return exports.ListResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseListResponse();
        message.magazines = ((_a = object.magazines) === null || _a === void 0 ? void 0 : _a.map((e) => blog_1.Magazine.fromPartial(e))) || [];
        message.series = ((_b = object.series) === null || _b === void 0 ? void 0 : _b.map((e) => blog_1.Series.fromPartial(e))) || [];
        message.totalCount = (_c = object.totalCount) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseGetRequest() {
    return { id: "" };
}
exports.GetRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetRequest();
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
        return exports.GetRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetResponse() {
    return { magazine: undefined, posts: [] };
}
exports.GetResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.magazine !== undefined) {
            blog_1.Magazine.encode(message.magazine, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.posts) {
            blog_1.PostMetadata.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.magazine = blog_1.Magazine.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.posts.push(blog_1.PostMetadata.decode(reader, reader.uint32()));
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
            magazine: isSet(object.magazine) ? blog_1.Magazine.fromJSON(object.magazine) : undefined,
            posts: Array.isArray(object === null || object === void 0 ? void 0 : object.posts) ? object.posts.map((e) => blog_1.PostMetadata.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.magazine !== undefined) {
            obj.magazine = blog_1.Magazine.toJSON(message.magazine);
        }
        if ((_a = message.posts) === null || _a === void 0 ? void 0 : _a.length) {
            obj.posts = message.posts.map((e) => blog_1.PostMetadata.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetResponse();
        message.magazine = (object.magazine !== undefined && object.magazine !== null)
            ? blog_1.Magazine.fromPartial(object.magazine)
            : undefined;
        message.posts = ((_a = object.posts) === null || _a === void 0 ? void 0 : _a.map((e) => blog_1.PostMetadata.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCreateMyRequest() {
    return { title: "", preface: "", category: "" };
}
exports.CreateMyRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.preface !== "") {
            writer.uint32(18).string(message.preface);
        }
        if (message.category !== "") {
            writer.uint32(26).string(message.category);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateMyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.preface = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.category = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            preface: isSet(object.preface) ? String(object.preface) : "",
            category: isSet(object.category) ? String(object.category) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.preface !== "") {
            obj.preface = message.preface;
        }
        if (message.category !== "") {
            obj.category = message.category;
        }
        return obj;
    },
    create(base) {
        return exports.CreateMyRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCreateMyRequest();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.preface = (_b = object.preface) !== null && _b !== void 0 ? _b : "";
        message.category = (_c = object.category) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseCreateMyResponse() {
    return { magazine: undefined };
}
exports.CreateMyResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.magazine !== undefined) {
            blog_1.Magazine.encode(message.magazine, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateMyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.magazine = blog_1.Magazine.decode(reader, reader.uint32());
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
        return { magazine: isSet(object.magazine) ? blog_1.Magazine.fromJSON(object.magazine) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.magazine !== undefined) {
            obj.magazine = blog_1.Magazine.toJSON(message.magazine);
        }
        return obj;
    },
    create(base) {
        return exports.CreateMyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreateMyResponse();
        message.magazine = (object.magazine !== undefined && object.magazine !== null)
            ? blog_1.Magazine.fromPartial(object.magazine)
            : undefined;
        return message;
    },
};
function createBaseUpdateMyRequest() {
    return { id: "", title: "", preface: "", category: "" };
}
exports.UpdateMyRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.title !== "") {
            writer.uint32(18).string(message.title);
        }
        if (message.preface !== "") {
            writer.uint32(26).string(message.preface);
        }
        if (message.category !== "") {
            writer.uint32(34).string(message.category);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateMyRequest();
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
                    message.preface = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.category = reader.string();
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
        return obj;
    },
    create(base) {
        return exports.UpdateMyRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseUpdateMyRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.title = (_b = object.title) !== null && _b !== void 0 ? _b : "";
        message.preface = (_c = object.preface) !== null && _c !== void 0 ? _c : "";
        message.category = (_d = object.category) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseUpdateMyResponse() {
    return {};
}
exports.UpdateMyResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateMyResponse();
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
        return exports.UpdateMyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseUpdateMyResponse();
        return message;
    },
};
function createBaseGetMyRequest() {
    return { id: "" };
}
exports.GetMyRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyRequest();
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
        return exports.GetMyRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetMyRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetMyResponse() {
    return { magazine: undefined, posts: [] };
}
exports.GetMyResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.magazine !== undefined) {
            blog_1.Magazine.encode(message.magazine, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.posts) {
            blog_1.PostMetadata.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.magazine = blog_1.Magazine.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.posts.push(blog_1.PostMetadata.decode(reader, reader.uint32()));
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
            magazine: isSet(object.magazine) ? blog_1.Magazine.fromJSON(object.magazine) : undefined,
            posts: Array.isArray(object === null || object === void 0 ? void 0 : object.posts) ? object.posts.map((e) => blog_1.PostMetadata.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.magazine !== undefined) {
            obj.magazine = blog_1.Magazine.toJSON(message.magazine);
        }
        if ((_a = message.posts) === null || _a === void 0 ? void 0 : _a.length) {
            obj.posts = message.posts.map((e) => blog_1.PostMetadata.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetMyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetMyResponse();
        message.magazine = (object.magazine !== undefined && object.magazine !== null)
            ? blog_1.Magazine.fromPartial(object.magazine)
            : undefined;
        message.posts = ((_a = object.posts) === null || _a === void 0 ? void 0 : _a.map((e) => blog_1.PostMetadata.fromPartial(e))) || [];
        return message;
    },
};
function createBaseDeleteMyRequest() {
    return { id: "" };
}
exports.DeleteMyRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteMyRequest();
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
        return exports.DeleteMyRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeleteMyRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeleteMyResponse() {
    return {};
}
exports.DeleteMyResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteMyResponse();
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
        return exports.DeleteMyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseDeleteMyResponse();
        return message;
    },
};
function createBaseListMyRequest() {
    return { pagination: undefined };
}
exports.ListMyRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            blog_1.Pagination.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = blog_1.Pagination.decode(reader, reader.uint32());
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
        return { pagination: isSet(object.pagination) ? blog_1.Pagination.fromJSON(object.pagination) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = blog_1.Pagination.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.ListMyRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseListMyRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? blog_1.Pagination.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseListMyByCategoryRequest() {
    return { pagination: undefined, category: "" };
}
exports.ListMyByCategoryRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            blog_1.Pagination.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.category !== "") {
            writer.uint32(18).string(message.category);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyByCategoryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = blog_1.Pagination.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.category = reader.string();
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
            pagination: isSet(object.pagination) ? blog_1.Pagination.fromJSON(object.pagination) : undefined,
            category: isSet(object.category) ? String(object.category) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = blog_1.Pagination.toJSON(message.pagination);
        }
        if (message.category !== "") {
            obj.category = message.category;
        }
        return obj;
    },
    create(base) {
        return exports.ListMyByCategoryRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListMyByCategoryRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? blog_1.Pagination.fromPartial(object.pagination)
            : undefined;
        message.category = (_a = object.category) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseListMyResponse() {
    return { magazines: [], totalCount: 0, series: [], adrian: "", billian: [] };
}
exports.ListMyResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.magazines) {
            blog_1.Magazine.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.totalCount !== 0) {
            writer.uint32(16).int64(message.totalCount);
        }
        for (const v of message.series) {
            blog_1.Series.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.adrian !== "") {
            writer.uint32(34).string(message.adrian);
        }
        writer.uint32(42).fork();
        for (const v of message.billian) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.magazines.push(blog_1.Magazine.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.totalCount = longToNumber(reader.int64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.series.push(blog_1.Series.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.adrian = reader.string();
                    continue;
                case 5:
                    if (tag === 40) {
                        message.billian.push(reader.int32());
                        continue;
                    }
                    if (tag === 42) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.billian.push(reader.int32());
                        }
                        continue;
                    }
                    break;
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
            magazines: Array.isArray(object === null || object === void 0 ? void 0 : object.magazines) ? object.magazines.map((e) => blog_1.Magazine.fromJSON(e)) : [],
            totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
            series: Array.isArray(object === null || object === void 0 ? void 0 : object.series) ? object.series.map((e) => blog_1.Series.fromJSON(e)) : [],
            adrian: isSet(object.adrian) ? String(object.adrian) : "",
            billian: Array.isArray(object === null || object === void 0 ? void 0 : object.billian) ? object.billian.map((e) => Number(e)) : [],
        };
    },
    toJSON(message) {
        var _a, _b, _c;
        const obj = {};
        if ((_a = message.magazines) === null || _a === void 0 ? void 0 : _a.length) {
            obj.magazines = message.magazines.map((e) => blog_1.Magazine.toJSON(e));
        }
        if (message.totalCount !== 0) {
            obj.totalCount = Math.round(message.totalCount);
        }
        if ((_b = message.series) === null || _b === void 0 ? void 0 : _b.length) {
            obj.series = message.series.map((e) => blog_1.Series.toJSON(e));
        }
        if (message.adrian !== "") {
            obj.adrian = message.adrian;
        }
        if ((_c = message.billian) === null || _c === void 0 ? void 0 : _c.length) {
            obj.billian = message.billian.map((e) => Math.round(e));
        }
        return obj;
    },
    create(base) {
        return exports.ListMyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseListMyResponse();
        message.magazines = ((_a = object.magazines) === null || _a === void 0 ? void 0 : _a.map((e) => blog_1.Magazine.fromPartial(e))) || [];
        message.totalCount = (_b = object.totalCount) !== null && _b !== void 0 ? _b : 0;
        message.series = ((_c = object.series) === null || _c === void 0 ? void 0 : _c.map((e) => blog_1.Series.fromPartial(e))) || [];
        message.adrian = (_d = object.adrian) !== null && _d !== void 0 ? _d : "";
        message.billian = ((_e = object.billian) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        return message;
    },
};
class MagazineSvcClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.List = this.List.bind(this);
        this.ListByAuthorId = this.ListByAuthorId.bind(this);
        this.ListByCategory = this.ListByCategory.bind(this);
        this.Get = this.Get.bind(this);
    }
    List(request, metadata) {
        return this.rpc.unary(exports.MagazineSvcListDesc, exports.ListRequest.fromPartial(request), metadata);
    }
    ListByAuthorId(request, metadata) {
        return this.rpc.unary(exports.MagazineSvcListByAuthorIdDesc, exports.ListByAuthorIdRequest.fromPartial(request), metadata);
    }
    ListByCategory(request, metadata) {
        return this.rpc.unary(exports.MagazineSvcListByCategoryDesc, exports.ListByCategoryRequest.fromPartial(request), metadata);
    }
    Get(request, metadata) {
        return this.rpc.unary(exports.MagazineSvcGetDesc, exports.GetRequest.fromPartial(request), metadata);
    }
}
exports.MagazineSvcClientImpl = MagazineSvcClientImpl;
exports.MagazineSvcDesc = { serviceName: "magazinesvc.MagazineSvc" };
exports.MagazineSvcListDesc = {
    methodName: "List",
    service: exports.MagazineSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.ListRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.ListResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MagazineSvcListByAuthorIdDesc = {
    methodName: "ListByAuthorId",
    service: exports.MagazineSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.ListByAuthorIdRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.ListResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MagazineSvcListByCategoryDesc = {
    methodName: "ListByCategory",
    service: exports.MagazineSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.ListByCategoryRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.ListResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MagazineSvcGetDesc = {
    methodName: "Get",
    service: exports.MagazineSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
class MyMagazineSvcClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Create = this.Create.bind(this);
        this.Update = this.Update.bind(this);
        this.Get = this.Get.bind(this);
        this.Delete = this.Delete.bind(this);
        this.List = this.List.bind(this);
        this.ListByCategory = this.ListByCategory.bind(this);
    }
    Create(request, metadata) {
        return this.rpc.unary(exports.MyMagazineSvcCreateDesc, exports.CreateMyRequest.fromPartial(request), metadata);
    }
    Update(request, metadata) {
        return this.rpc.unary(exports.MyMagazineSvcUpdateDesc, exports.UpdateMyRequest.fromPartial(request), metadata);
    }
    Get(request, metadata) {
        return this.rpc.unary(exports.MyMagazineSvcGetDesc, exports.GetMyRequest.fromPartial(request), metadata);
    }
    Delete(request, metadata) {
        return this.rpc.unary(exports.MyMagazineSvcDeleteDesc, exports.DeleteMyRequest.fromPartial(request), metadata);
    }
    List(request, metadata) {
        return this.rpc.unary(exports.MyMagazineSvcListDesc, exports.ListMyRequest.fromPartial(request), metadata);
    }
    ListByCategory(request, metadata) {
        return this.rpc.unary(exports.MyMagazineSvcListByCategoryDesc, exports.ListMyByCategoryRequest.fromPartial(request), metadata);
    }
}
exports.MyMagazineSvcClientImpl = MyMagazineSvcClientImpl;
exports.MyMagazineSvcDesc = { serviceName: "magazinesvc.MyMagazineSvc" };
exports.MyMagazineSvcCreateDesc = {
    methodName: "Create",
    service: exports.MyMagazineSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.CreateMyRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.CreateMyResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MyMagazineSvcUpdateDesc = {
    methodName: "Update",
    service: exports.MyMagazineSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.UpdateMyRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.UpdateMyResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MyMagazineSvcGetDesc = {
    methodName: "Get",
    service: exports.MyMagazineSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetMyRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetMyResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MyMagazineSvcDeleteDesc = {
    methodName: "Delete",
    service: exports.MyMagazineSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.DeleteMyRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.DeleteMyResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MyMagazineSvcListDesc = {
    methodName: "List",
    service: exports.MyMagazineSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.ListMyRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.ListMyResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MyMagazineSvcListByCategoryDesc = {
    methodName: "ListByCategory",
    service: exports.MyMagazineSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.ListMyByCategoryRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.ListMyResponse.decode(data);
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
class GrpcWebError extends tsProtoGlobalThis.Error {
    constructor(message, code, metadata) {
        super(message);
        this.code = code;
        this.metadata = metadata;
    }
}
exports.GrpcWebError = GrpcWebError;

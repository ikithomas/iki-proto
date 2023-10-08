"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.MyPostSvcListByTagDesc = exports.MyPostSvcListByCategoryDesc = exports.MyPostSvcListDesc = exports.MyPostSvcDeleteDesc = exports.MyPostSvcGetDesc = exports.MyPostSvcUpdateDesc = exports.MyPostSvcCreateDesc = exports.MyPostSvcDesc = exports.MyPostSvcClientImpl = exports.PostSvcGetDesc = exports.PostSvcListByTagDesc = exports.PostSvcListByCategoryDesc = exports.PostSvcListByAuthorIdDesc = exports.PostSvcListDesc = exports.PostSvcDesc = exports.PostSvcClientImpl = exports.ListMyResponse = exports.ListMyByTagRequest = exports.ListMyByCategoryRequest = exports.ListMyRequest = exports.DeleteMyResponse = exports.DeleteMyRequest = exports.GetMyResponse = exports.GetMyRequest = exports.UpdateMyResponse = exports.UpdateMyRequest = exports.CreateMyResponse = exports.CreateMyRequest = exports.GetResponse = exports.GetRequest = exports.ListResponse = exports.ListByTagRequest = exports.ListByCategoryRequest = exports.ListByAuthorIdRequest = exports.ListRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_web_1 = require("@improbable-eng/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const blog_1 = require("../blog");
exports.protobufPackage = "postsvc";
function createBaseListRequest() {
    return { page: 0, pageSize: 0 };
}
exports.ListRequest = {
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
        const message = createBaseListRequest();
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
        return exports.ListRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseListRequest();
        message.page = (_a = object.page) !== null && _a !== void 0 ? _a : 0;
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseListByAuthorIdRequest() {
    return { page: 0, pageSize: 0, authorId: "" };
}
exports.ListByAuthorIdRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.page !== 0) {
            writer.uint32(8).int32(message.page);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int32(message.pageSize);
        }
        if (message.authorId !== "") {
            writer.uint32(26).string(message.authorId);
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
                case 3:
                    if (tag !== 26) {
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
            page: isSet(object.page) ? Number(object.page) : 0,
            pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
            authorId: isSet(object.authorId) ? String(object.authorId) : "",
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
        if (message.authorId !== "") {
            obj.authorId = message.authorId;
        }
        return obj;
    },
    create(base) {
        return exports.ListByAuthorIdRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseListByAuthorIdRequest();
        message.page = (_a = object.page) !== null && _a !== void 0 ? _a : 0;
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.authorId = (_c = object.authorId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseListByCategoryRequest() {
    return { page: 0, pageSize: 0, category: "" };
}
exports.ListByCategoryRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.page !== 0) {
            writer.uint32(8).int32(message.page);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int32(message.pageSize);
        }
        if (message.category !== "") {
            writer.uint32(26).string(message.category);
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
            page: isSet(object.page) ? Number(object.page) : 0,
            pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
            category: isSet(object.category) ? String(object.category) : "",
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
        if (message.category !== "") {
            obj.category = message.category;
        }
        return obj;
    },
    create(base) {
        return exports.ListByCategoryRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseListByCategoryRequest();
        message.page = (_a = object.page) !== null && _a !== void 0 ? _a : 0;
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.category = (_c = object.category) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseListByTagRequest() {
    return { page: 0, pageSize: 0, tag: "" };
}
exports.ListByTagRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.page !== 0) {
            writer.uint32(8).int32(message.page);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int32(message.pageSize);
        }
        if (message.tag !== "") {
            writer.uint32(26).string(message.tag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListByTagRequest();
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
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.tag = reader.string();
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
            tag: isSet(object.tag) ? String(object.tag) : "",
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
        if (message.tag !== "") {
            obj.tag = message.tag;
        }
        return obj;
    },
    create(base) {
        return exports.ListByTagRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseListByTagRequest();
        message.page = (_a = object.page) !== null && _a !== void 0 ? _a : 0;
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.tag = (_c = object.tag) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseListResponse() {
    return { postMetadata: [], totalCount: 0 };
}
exports.ListResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.postMetadata) {
            blog_1.PostMetadata.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.postMetadata.push(blog_1.PostMetadata.decode(reader, reader.uint32()));
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
            postMetadata: Array.isArray(object === null || object === void 0 ? void 0 : object.postMetadata)
                ? object.postMetadata.map((e) => blog_1.PostMetadata.fromJSON(e))
                : [],
            totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.postMetadata) === null || _a === void 0 ? void 0 : _a.length) {
            obj.postMetadata = message.postMetadata.map((e) => blog_1.PostMetadata.toJSON(e));
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
        var _a, _b;
        const message = createBaseListResponse();
        message.postMetadata = ((_a = object.postMetadata) === null || _a === void 0 ? void 0 : _a.map((e) => blog_1.PostMetadata.fromPartial(e))) || [];
        message.totalCount = (_b = object.totalCount) !== null && _b !== void 0 ? _b : 0;
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
    return { postMetadata: undefined, content: "" };
}
exports.GetResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.postMetadata !== undefined) {
            blog_1.PostMetadata.encode(message.postMetadata, writer.uint32(10).fork()).ldelim();
        }
        if (message.content !== "") {
            writer.uint32(18).string(message.content);
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
                    message.postMetadata = blog_1.PostMetadata.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.content = reader.string();
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
            postMetadata: isSet(object.postMetadata) ? blog_1.PostMetadata.fromJSON(object.postMetadata) : undefined,
            content: isSet(object.content) ? String(object.content) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.postMetadata !== undefined) {
            obj.postMetadata = blog_1.PostMetadata.toJSON(message.postMetadata);
        }
        if (message.content !== "") {
            obj.content = message.content;
        }
        return obj;
    },
    create(base) {
        return exports.GetResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetResponse();
        message.postMetadata = (object.postMetadata !== undefined && object.postMetadata !== null)
            ? blog_1.PostMetadata.fromPartial(object.postMetadata)
            : undefined;
        message.content = (_a = object.content) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCreateMyRequest() {
    return { title: "", preface: "", published: false, tags: [], category: "", content: "" };
}
exports.CreateMyRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.preface !== "") {
            writer.uint32(18).string(message.preface);
        }
        if (message.published === true) {
            writer.uint32(24).bool(message.published);
        }
        for (const v of message.tags) {
            writer.uint32(34).string(v);
        }
        if (message.category !== "") {
            writer.uint32(42).string(message.category);
        }
        if (message.content !== "") {
            writer.uint32(50).string(message.content);
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
                    if (tag !== 24) {
                        break;
                    }
                    message.published = reader.bool();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.tags.push(reader.string());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.category = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.content = reader.string();
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
            published: isSet(object.published) ? Boolean(object.published) : false,
            tags: Array.isArray(object === null || object === void 0 ? void 0 : object.tags) ? object.tags.map((e) => String(e)) : [],
            category: isSet(object.category) ? String(object.category) : "",
            content: isSet(object.content) ? String(object.content) : "",
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
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
        if (message.content !== "") {
            obj.content = message.content;
        }
        return obj;
    },
    create(base) {
        return exports.CreateMyRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseCreateMyRequest();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.preface = (_b = object.preface) !== null && _b !== void 0 ? _b : "";
        message.published = (_c = object.published) !== null && _c !== void 0 ? _c : false;
        message.tags = ((_d = object.tags) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.category = (_e = object.category) !== null && _e !== void 0 ? _e : "";
        message.content = (_f = object.content) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseCreateMyResponse() {
    return { postMetadata: undefined, content: "" };
}
exports.CreateMyResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.postMetadata !== undefined) {
            blog_1.PostMetadata.encode(message.postMetadata, writer.uint32(10).fork()).ldelim();
        }
        if (message.content !== "") {
            writer.uint32(18).string(message.content);
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
                    message.postMetadata = blog_1.PostMetadata.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.content = reader.string();
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
            postMetadata: isSet(object.postMetadata) ? blog_1.PostMetadata.fromJSON(object.postMetadata) : undefined,
            content: isSet(object.content) ? String(object.content) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.postMetadata !== undefined) {
            obj.postMetadata = blog_1.PostMetadata.toJSON(message.postMetadata);
        }
        if (message.content !== "") {
            obj.content = message.content;
        }
        return obj;
    },
    create(base) {
        return exports.CreateMyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCreateMyResponse();
        message.postMetadata = (object.postMetadata !== undefined && object.postMetadata !== null)
            ? blog_1.PostMetadata.fromPartial(object.postMetadata)
            : undefined;
        message.content = (_a = object.content) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseUpdateMyRequest() {
    return { id: "", title: "", preface: "", published: false, tags: [], category: "", content: "" };
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
        if (message.published === true) {
            writer.uint32(32).bool(message.published);
        }
        for (const v of message.tags) {
            writer.uint32(42).string(v);
        }
        if (message.category !== "") {
            writer.uint32(50).string(message.category);
        }
        if (message.content !== "") {
            writer.uint32(58).string(message.content);
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
                    if (tag !== 32) {
                        break;
                    }
                    message.published = reader.bool();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.tags.push(reader.string());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.category = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.content = reader.string();
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
            published: isSet(object.published) ? Boolean(object.published) : false,
            tags: Array.isArray(object === null || object === void 0 ? void 0 : object.tags) ? object.tags.map((e) => String(e)) : [],
            category: isSet(object.category) ? String(object.category) : "",
            content: isSet(object.content) ? String(object.content) : "",
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
        if (message.content !== "") {
            obj.content = message.content;
        }
        return obj;
    },
    create(base) {
        return exports.UpdateMyRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseUpdateMyRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.title = (_b = object.title) !== null && _b !== void 0 ? _b : "";
        message.preface = (_c = object.preface) !== null && _c !== void 0 ? _c : "";
        message.published = (_d = object.published) !== null && _d !== void 0 ? _d : false;
        message.tags = ((_e = object.tags) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.category = (_f = object.category) !== null && _f !== void 0 ? _f : "";
        message.content = (_g = object.content) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseUpdateMyResponse() {
    return { postMetadata: undefined, content: "" };
}
exports.UpdateMyResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.postMetadata !== undefined) {
            blog_1.PostMetadata.encode(message.postMetadata, writer.uint32(10).fork()).ldelim();
        }
        if (message.content !== "") {
            writer.uint32(18).string(message.content);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateMyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.postMetadata = blog_1.PostMetadata.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.content = reader.string();
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
            postMetadata: isSet(object.postMetadata) ? blog_1.PostMetadata.fromJSON(object.postMetadata) : undefined,
            content: isSet(object.content) ? String(object.content) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.postMetadata !== undefined) {
            obj.postMetadata = blog_1.PostMetadata.toJSON(message.postMetadata);
        }
        if (message.content !== "") {
            obj.content = message.content;
        }
        return obj;
    },
    create(base) {
        return exports.UpdateMyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUpdateMyResponse();
        message.postMetadata = (object.postMetadata !== undefined && object.postMetadata !== null)
            ? blog_1.PostMetadata.fromPartial(object.postMetadata)
            : undefined;
        message.content = (_a = object.content) !== null && _a !== void 0 ? _a : "";
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
    return { postMetadata: undefined, content: "" };
}
exports.GetMyResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.postMetadata !== undefined) {
            blog_1.PostMetadata.encode(message.postMetadata, writer.uint32(10).fork()).ldelim();
        }
        if (message.content !== "") {
            writer.uint32(18).string(message.content);
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
                    message.postMetadata = blog_1.PostMetadata.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.content = reader.string();
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
            postMetadata: isSet(object.postMetadata) ? blog_1.PostMetadata.fromJSON(object.postMetadata) : undefined,
            content: isSet(object.content) ? String(object.content) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.postMetadata !== undefined) {
            obj.postMetadata = blog_1.PostMetadata.toJSON(message.postMetadata);
        }
        if (message.content !== "") {
            obj.content = message.content;
        }
        return obj;
    },
    create(base) {
        return exports.GetMyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetMyResponse();
        message.postMetadata = (object.postMetadata !== undefined && object.postMetadata !== null)
            ? blog_1.PostMetadata.fromPartial(object.postMetadata)
            : undefined;
        message.content = (_a = object.content) !== null && _a !== void 0 ? _a : "";
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
    return { page: 0, pageSize: 0 };
}
exports.ListMyRequest = {
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
        const message = createBaseListMyRequest();
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
        return exports.ListMyRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseListMyRequest();
        message.page = (_a = object.page) !== null && _a !== void 0 ? _a : 0;
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseListMyByCategoryRequest() {
    return { page: 0, pageSize: 0, category: "" };
}
exports.ListMyByCategoryRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.page !== 0) {
            writer.uint32(8).int32(message.page);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int32(message.pageSize);
        }
        if (message.category !== "") {
            writer.uint32(26).string(message.category);
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
            page: isSet(object.page) ? Number(object.page) : 0,
            pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
            category: isSet(object.category) ? String(object.category) : "",
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
        if (message.category !== "") {
            obj.category = message.category;
        }
        return obj;
    },
    create(base) {
        return exports.ListMyByCategoryRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseListMyByCategoryRequest();
        message.page = (_a = object.page) !== null && _a !== void 0 ? _a : 0;
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.category = (_c = object.category) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseListMyByTagRequest() {
    return { page: 0, pageSize: 0, tag: "" };
}
exports.ListMyByTagRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.page !== 0) {
            writer.uint32(8).int32(message.page);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int32(message.pageSize);
        }
        if (message.tag !== "") {
            writer.uint32(26).string(message.tag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListMyByTagRequest();
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
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.tag = reader.string();
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
            tag: isSet(object.tag) ? String(object.tag) : "",
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
        if (message.tag !== "") {
            obj.tag = message.tag;
        }
        return obj;
    },
    create(base) {
        return exports.ListMyByTagRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseListMyByTagRequest();
        message.page = (_a = object.page) !== null && _a !== void 0 ? _a : 0;
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.tag = (_c = object.tag) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseListMyResponse() {
    return { postMetadata: [], totalCount: 0 };
}
exports.ListMyResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.postMetadata) {
            blog_1.PostMetadata.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.totalCount !== 0) {
            writer.uint32(16).int64(message.totalCount);
        }
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
                    message.postMetadata.push(blog_1.PostMetadata.decode(reader, reader.uint32()));
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
            postMetadata: Array.isArray(object === null || object === void 0 ? void 0 : object.postMetadata)
                ? object.postMetadata.map((e) => blog_1.PostMetadata.fromJSON(e))
                : [],
            totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.postMetadata) === null || _a === void 0 ? void 0 : _a.length) {
            obj.postMetadata = message.postMetadata.map((e) => blog_1.PostMetadata.toJSON(e));
        }
        if (message.totalCount !== 0) {
            obj.totalCount = Math.round(message.totalCount);
        }
        return obj;
    },
    create(base) {
        return exports.ListMyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseListMyResponse();
        message.postMetadata = ((_a = object.postMetadata) === null || _a === void 0 ? void 0 : _a.map((e) => blog_1.PostMetadata.fromPartial(e))) || [];
        message.totalCount = (_b = object.totalCount) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
class PostSvcClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.List = this.List.bind(this);
        this.ListByAuthorId = this.ListByAuthorId.bind(this);
        this.ListByCategory = this.ListByCategory.bind(this);
        this.ListByTag = this.ListByTag.bind(this);
        this.Get = this.Get.bind(this);
    }
    List(request, metadata) {
        return this.rpc.unary(exports.PostSvcListDesc, exports.ListRequest.fromPartial(request), metadata);
    }
    ListByAuthorId(request, metadata) {
        return this.rpc.unary(exports.PostSvcListByAuthorIdDesc, exports.ListByAuthorIdRequest.fromPartial(request), metadata);
    }
    ListByCategory(request, metadata) {
        return this.rpc.unary(exports.PostSvcListByCategoryDesc, exports.ListByCategoryRequest.fromPartial(request), metadata);
    }
    ListByTag(request, metadata) {
        return this.rpc.unary(exports.PostSvcListByTagDesc, exports.ListByTagRequest.fromPartial(request), metadata);
    }
    Get(request, metadata) {
        return this.rpc.unary(exports.PostSvcGetDesc, exports.GetRequest.fromPartial(request), metadata);
    }
}
exports.PostSvcClientImpl = PostSvcClientImpl;
exports.PostSvcDesc = { serviceName: "postsvc.PostSvc" };
exports.PostSvcListDesc = {
    methodName: "List",
    service: exports.PostSvcDesc,
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
exports.PostSvcListByAuthorIdDesc = {
    methodName: "ListByAuthorId",
    service: exports.PostSvcDesc,
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
exports.PostSvcListByCategoryDesc = {
    methodName: "ListByCategory",
    service: exports.PostSvcDesc,
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
exports.PostSvcListByTagDesc = {
    methodName: "ListByTag",
    service: exports.PostSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.ListByTagRequest.encode(this).finish();
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
exports.PostSvcGetDesc = {
    methodName: "Get",
    service: exports.PostSvcDesc,
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
class MyPostSvcClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Create = this.Create.bind(this);
        this.Update = this.Update.bind(this);
        this.Get = this.Get.bind(this);
        this.Delete = this.Delete.bind(this);
        this.List = this.List.bind(this);
        this.ListByCategory = this.ListByCategory.bind(this);
        this.ListByTag = this.ListByTag.bind(this);
    }
    Create(request, metadata) {
        return this.rpc.unary(exports.MyPostSvcCreateDesc, exports.CreateMyRequest.fromPartial(request), metadata);
    }
    Update(request, metadata) {
        return this.rpc.unary(exports.MyPostSvcUpdateDesc, exports.UpdateMyRequest.fromPartial(request), metadata);
    }
    Get(request, metadata) {
        return this.rpc.unary(exports.MyPostSvcGetDesc, exports.GetMyRequest.fromPartial(request), metadata);
    }
    Delete(request, metadata) {
        return this.rpc.unary(exports.MyPostSvcDeleteDesc, exports.DeleteMyRequest.fromPartial(request), metadata);
    }
    List(request, metadata) {
        return this.rpc.unary(exports.MyPostSvcListDesc, exports.ListMyRequest.fromPartial(request), metadata);
    }
    ListByCategory(request, metadata) {
        return this.rpc.unary(exports.MyPostSvcListByCategoryDesc, exports.ListMyByCategoryRequest.fromPartial(request), metadata);
    }
    ListByTag(request, metadata) {
        return this.rpc.unary(exports.MyPostSvcListByTagDesc, exports.ListMyByTagRequest.fromPartial(request), metadata);
    }
}
exports.MyPostSvcClientImpl = MyPostSvcClientImpl;
exports.MyPostSvcDesc = { serviceName: "postsvc.MyPostSvc" };
exports.MyPostSvcCreateDesc = {
    methodName: "Create",
    service: exports.MyPostSvcDesc,
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
exports.MyPostSvcUpdateDesc = {
    methodName: "Update",
    service: exports.MyPostSvcDesc,
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
exports.MyPostSvcGetDesc = {
    methodName: "Get",
    service: exports.MyPostSvcDesc,
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
exports.MyPostSvcDeleteDesc = {
    methodName: "Delete",
    service: exports.MyPostSvcDesc,
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
exports.MyPostSvcListDesc = {
    methodName: "List",
    service: exports.MyPostSvcDesc,
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
exports.MyPostSvcListByCategoryDesc = {
    methodName: "ListByCategory",
    service: exports.MyPostSvcDesc,
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
exports.MyPostSvcListByTagDesc = {
    methodName: "ListByTag",
    service: exports.MyPostSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.ListMyByTagRequest.encode(this).finish();
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

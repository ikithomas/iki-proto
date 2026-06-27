"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.MyAuthorSvcProfileDesc = exports.MyAuthorSvcCreateDesc = exports.MyAuthorSvcDesc = exports.MyAuthorSvcClientImpl = exports.AuthorSvcGetDesc = exports.AuthorSvcListDesc = exports.AuthorSvcDesc = exports.AuthorSvcClientImpl = exports.ProfileResponse = exports.ProfileRequest = exports.CreateResponse = exports.CreateRequest = exports.GetResponse = exports.GetRequest = exports.ListResponse = exports.ListRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_web_1 = require("@improbable-eng/grpc-web");
const browser_headers_1 = require("browser-headers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const blog_1 = require("../blog");
exports.protobufPackage = "authorsvc";
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
function createBaseListResponse() {
    return { authors: [], totalCount: 0 };
}
exports.ListResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.authors) {
            blog_1.Author.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.authors.push(blog_1.Author.decode(reader, reader.uint32()));
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
            authors: Array.isArray(object === null || object === void 0 ? void 0 : object.authors) ? object.authors.map((e) => blog_1.Author.fromJSON(e)) : [],
            totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.authors) === null || _a === void 0 ? void 0 : _a.length) {
            obj.authors = message.authors.map((e) => blog_1.Author.toJSON(e));
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
        message.authors = ((_a = object.authors) === null || _a === void 0 ? void 0 : _a.map((e) => blog_1.Author.fromPartial(e))) || [];
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
    return { author: undefined };
}
exports.GetResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.author !== undefined) {
            blog_1.Author.encode(message.author, writer.uint32(10).fork()).ldelim();
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
                    message.author = blog_1.Author.decode(reader, reader.uint32());
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
        return { author: isSet(object.author) ? blog_1.Author.fromJSON(object.author) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.author !== undefined) {
            obj.author = blog_1.Author.toJSON(message.author);
        }
        return obj;
    },
    create(base) {
        return exports.GetResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetResponse();
        message.author = (object.author !== undefined && object.author !== null)
            ? blog_1.Author.fromPartial(object.author)
            : undefined;
        return message;
    },
};
function createBaseCreateRequest() {
    return { displayName: "" };
}
exports.CreateRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.displayName !== "") {
            writer.uint32(10).string(message.displayName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { displayName: isSet(object.displayName) ? String(object.displayName) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.displayName !== "") {
            obj.displayName = message.displayName;
        }
        return obj;
    },
    create(base) {
        return exports.CreateRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCreateRequest();
        message.displayName = (_a = object.displayName) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCreateResponse() {
    return { author: undefined };
}
exports.CreateResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.author !== undefined) {
            blog_1.Author.encode(message.author, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.author = blog_1.Author.decode(reader, reader.uint32());
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
        return { author: isSet(object.author) ? blog_1.Author.fromJSON(object.author) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.author !== undefined) {
            obj.author = blog_1.Author.toJSON(message.author);
        }
        return obj;
    },
    create(base) {
        return exports.CreateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreateResponse();
        message.author = (object.author !== undefined && object.author !== null)
            ? blog_1.Author.fromPartial(object.author)
            : undefined;
        return message;
    },
};
function createBaseProfileRequest() {
    return {};
}
exports.ProfileRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProfileRequest();
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
        return exports.ProfileRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseProfileRequest();
        return message;
    },
};
function createBaseProfileResponse() {
    return { author: undefined };
}
exports.ProfileResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.author !== undefined) {
            blog_1.Author.encode(message.author, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProfileResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.author = blog_1.Author.decode(reader, reader.uint32());
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
        return { author: isSet(object.author) ? blog_1.Author.fromJSON(object.author) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.author !== undefined) {
            obj.author = blog_1.Author.toJSON(message.author);
        }
        return obj;
    },
    create(base) {
        return exports.ProfileResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseProfileResponse();
        message.author = (object.author !== undefined && object.author !== null)
            ? blog_1.Author.fromPartial(object.author)
            : undefined;
        return message;
    },
};
class AuthorSvcClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.List = this.List.bind(this);
        this.Get = this.Get.bind(this);
    }
    List(request, metadata) {
        return this.rpc.unary(exports.AuthorSvcListDesc, exports.ListRequest.fromPartial(request), metadata);
    }
    Get(request, metadata) {
        return this.rpc.unary(exports.AuthorSvcGetDesc, exports.GetRequest.fromPartial(request), metadata);
    }
}
exports.AuthorSvcClientImpl = AuthorSvcClientImpl;
exports.AuthorSvcDesc = { serviceName: "authorsvc.AuthorSvc" };
exports.AuthorSvcListDesc = {
    methodName: "List",
    service: exports.AuthorSvcDesc,
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
exports.AuthorSvcGetDesc = {
    methodName: "Get",
    service: exports.AuthorSvcDesc,
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
class MyAuthorSvcClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Create = this.Create.bind(this);
        this.Profile = this.Profile.bind(this);
    }
    Create(request, metadata) {
        return this.rpc.unary(exports.MyAuthorSvcCreateDesc, exports.CreateRequest.fromPartial(request), metadata);
    }
    Profile(request, metadata) {
        return this.rpc.unary(exports.MyAuthorSvcProfileDesc, exports.ProfileRequest.fromPartial(request), metadata);
    }
}
exports.MyAuthorSvcClientImpl = MyAuthorSvcClientImpl;
exports.MyAuthorSvcDesc = { serviceName: "authorsvc.MyAuthorSvc" };
exports.MyAuthorSvcCreateDesc = {
    methodName: "Create",
    service: exports.MyAuthorSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.CreateRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.CreateResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.MyAuthorSvcProfileDesc = {
    methodName: "Profile",
    service: exports.MyAuthorSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.ProfileRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.ProfileResponse.decode(data);
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

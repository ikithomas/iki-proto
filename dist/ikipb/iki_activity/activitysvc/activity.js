"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.ActivitySvcCalculateStatsDesc = exports.ActivitySvcListDesc = exports.ActivitySvcGetDesc = exports.ActivitySvcDesc = exports.ActivitySvcClientImpl = exports.MyActivitySvcCalculateStatsDesc = exports.MyActivitySvcListDesc = exports.MyActivitySvcGetDesc = exports.MyActivitySvcDesc = exports.MyActivitySvcClientImpl = exports.CalculateStatsResponse = exports.CalculateStatsRequest = exports.ListResponse = exports.ListRequest = exports.GetResponse = exports.GetRequest = exports.CalculateMyStatsResponse = exports.CalculateMyStatsRequest = exports.ListMyResponse = exports.ListMyRequest = exports.GetMyResponse = exports.GetMyRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_web_1 = require("@improbable-eng/grpc-web");
const browser_headers_1 = require("browser-headers");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const activity_1 = require("../activity");
exports.protobufPackage = "activitysvc";
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
    return { activity: undefined };
}
exports.GetMyResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.activity !== undefined) {
            activity_1.Activity.encode(message.activity, writer.uint32(10).fork()).ldelim();
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
                    message.activity = activity_1.Activity.decode(reader, reader.uint32());
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
        return { activity: isSet(object.activity) ? activity_1.Activity.fromJSON(object.activity) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.activity !== undefined) {
            obj.activity = activity_1.Activity.toJSON(message.activity);
        }
        return obj;
    },
    create(base) {
        return exports.GetMyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetMyResponse();
        message.activity = (object.activity !== undefined && object.activity !== null)
            ? activity_1.Activity.fromPartial(object.activity)
            : undefined;
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
function createBaseListMyResponse() {
    return { activities: [] };
}
exports.ListMyResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.activities) {
            activity_1.Activity.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.activities.push(activity_1.Activity.decode(reader, reader.uint32()));
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
            activities: Array.isArray(object === null || object === void 0 ? void 0 : object.activities) ? object.activities.map((e) => activity_1.Activity.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.activities) === null || _a === void 0 ? void 0 : _a.length) {
            obj.activities = message.activities.map((e) => activity_1.Activity.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ListMyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListMyResponse();
        message.activities = ((_a = object.activities) === null || _a === void 0 ? void 0 : _a.map((e) => activity_1.Activity.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCalculateMyStatsRequest() {
    return {};
}
exports.CalculateMyStatsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCalculateMyStatsRequest();
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
        return exports.CalculateMyStatsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseCalculateMyStatsRequest();
        return message;
    },
};
function createBaseCalculateMyStatsResponse() {
    return {};
}
exports.CalculateMyStatsResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCalculateMyStatsResponse();
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
        return exports.CalculateMyStatsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseCalculateMyStatsResponse();
        return message;
    },
};
function createBaseGetRequest() {
    return { userId: "", id: "" };
}
exports.GetRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
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
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
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
        return { userId: isSet(object.userId) ? String(object.userId) : "", id: isSet(object.id) ? String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.GetRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetResponse() {
    return { activity: undefined };
}
exports.GetResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.activity !== undefined) {
            activity_1.Activity.encode(message.activity, writer.uint32(10).fork()).ldelim();
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
                    message.activity = activity_1.Activity.decode(reader, reader.uint32());
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
        return { activity: isSet(object.activity) ? activity_1.Activity.fromJSON(object.activity) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.activity !== undefined) {
            obj.activity = activity_1.Activity.toJSON(message.activity);
        }
        return obj;
    },
    create(base) {
        return exports.GetResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetResponse();
        message.activity = (object.activity !== undefined && object.activity !== null)
            ? activity_1.Activity.fromPartial(object.activity)
            : undefined;
        return message;
    },
};
function createBaseListRequest() {
    return { userId: "", page: 0, pageSize: 0 };
}
exports.ListRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.page !== 0) {
            writer.uint32(16).int32(message.page);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int32(message.pageSize);
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
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.page = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
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
            userId: isSet(object.userId) ? String(object.userId) : "",
            page: isSet(object.page) ? Number(object.page) : 0,
            pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
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
        var _a, _b, _c;
        const message = createBaseListRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.page = (_b = object.page) !== null && _b !== void 0 ? _b : 0;
        message.pageSize = (_c = object.pageSize) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseListResponse() {
    return { activities: [] };
}
exports.ListResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.activities) {
            activity_1.Activity.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.activities.push(activity_1.Activity.decode(reader, reader.uint32()));
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
            activities: Array.isArray(object === null || object === void 0 ? void 0 : object.activities) ? object.activities.map((e) => activity_1.Activity.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.activities) === null || _a === void 0 ? void 0 : _a.length) {
            obj.activities = message.activities.map((e) => activity_1.Activity.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ListResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListResponse();
        message.activities = ((_a = object.activities) === null || _a === void 0 ? void 0 : _a.map((e) => activity_1.Activity.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCalculateStatsRequest() {
    return { userId: "" };
}
exports.CalculateStatsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCalculateStatsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
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
        return { userId: isSet(object.userId) ? String(object.userId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.CalculateStatsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCalculateStatsRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCalculateStatsResponse() {
    return {};
}
exports.CalculateStatsResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCalculateStatsResponse();
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
        return exports.CalculateStatsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseCalculateStatsResponse();
        return message;
    },
};
class MyActivitySvcClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Get = this.Get.bind(this);
        this.List = this.List.bind(this);
        this.CalculateStats = this.CalculateStats.bind(this);
    }
    Get(request, metadata) {
        return this.rpc.unary(exports.MyActivitySvcGetDesc, exports.GetMyRequest.fromPartial(request), metadata);
    }
    List(request, metadata) {
        return this.rpc.unary(exports.MyActivitySvcListDesc, exports.ListMyRequest.fromPartial(request), metadata);
    }
    CalculateStats(request, metadata) {
        return this.rpc.unary(exports.MyActivitySvcCalculateStatsDesc, exports.CalculateMyStatsRequest.fromPartial(request), metadata);
    }
}
exports.MyActivitySvcClientImpl = MyActivitySvcClientImpl;
exports.MyActivitySvcDesc = { serviceName: "activitysvc.MyActivitySvc" };
exports.MyActivitySvcGetDesc = {
    methodName: "Get",
    service: exports.MyActivitySvcDesc,
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
exports.MyActivitySvcListDesc = {
    methodName: "List",
    service: exports.MyActivitySvcDesc,
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
exports.MyActivitySvcCalculateStatsDesc = {
    methodName: "CalculateStats",
    service: exports.MyActivitySvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.CalculateMyStatsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.CalculateMyStatsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
class ActivitySvcClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Get = this.Get.bind(this);
        this.List = this.List.bind(this);
        this.CalculateStats = this.CalculateStats.bind(this);
    }
    Get(request, metadata) {
        return this.rpc.unary(exports.ActivitySvcGetDesc, exports.GetRequest.fromPartial(request), metadata);
    }
    List(request, metadata) {
        return this.rpc.unary(exports.ActivitySvcListDesc, exports.ListRequest.fromPartial(request), metadata);
    }
    CalculateStats(request, metadata) {
        return this.rpc.unary(exports.ActivitySvcCalculateStatsDesc, exports.CalculateStatsRequest.fromPartial(request), metadata);
    }
}
exports.ActivitySvcClientImpl = ActivitySvcClientImpl;
exports.ActivitySvcDesc = { serviceName: "activitysvc.ActivitySvc" };
exports.ActivitySvcGetDesc = {
    methodName: "Get",
    service: exports.ActivitySvcDesc,
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
exports.ActivitySvcListDesc = {
    methodName: "List",
    service: exports.ActivitySvcDesc,
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
exports.ActivitySvcCalculateStatsDesc = {
    methodName: "CalculateStats",
    service: exports.ActivitySvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.CalculateStatsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.CalculateStatsResponse.decode(data);
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

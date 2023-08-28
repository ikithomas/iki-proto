"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebError = exports.GrpcWebImpl = exports.UserSvcDeactivateUserDesc = exports.UserSvcActivateUserDesc = exports.UserSvcUpdateGroupsDesc = exports.UserSvcDeleteDesc = exports.UserSvcGetDesc = exports.UserSvcListDesc = exports.UserSvcCheckEmailDesc = exports.UserSvcProfileDesc = exports.UserSvcDesc = exports.UserSvcClientImpl = exports.DeactivateUserResponse = exports.DeactivateUserRequest = exports.ActivateUserResponse = exports.ActivateUserRequest = exports.UpdateGroupResponse = exports.UpdateGroupRequest = exports.DeleteResponse = exports.DeleteRequest = exports.ListResponse = exports.ListRequest = exports.GetResponse = exports.GetRequest = exports.CheckEmailResponse = exports.CheckEmailRequest = exports.ProfileResponse = exports.ProfileRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_web_1 = require("@improbable-eng/grpc-web");
const browser_headers_1 = require("browser-headers");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const iam_1 = require("../iam");
exports.protobufPackage = "usersvc";
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
    return { user: undefined };
}
exports.ProfileResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.user !== undefined) {
            iam_1.User.encode(message.user, writer.uint32(10).fork()).ldelim();
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
                    message.user = iam_1.User.decode(reader, reader.uint32());
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
        return { user: isSet(object.user) ? iam_1.User.fromJSON(object.user) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.user !== undefined) {
            obj.user = iam_1.User.toJSON(message.user);
        }
        return obj;
    },
    create(base) {
        return exports.ProfileResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseProfileResponse();
        message.user = (object.user !== undefined && object.user !== null) ? iam_1.User.fromPartial(object.user) : undefined;
        return message;
    },
};
function createBaseCheckEmailRequest() {
    return { email: "" };
}
exports.CheckEmailRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCheckEmailRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { email: isSet(object.email) ? String(object.email) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.email !== "") {
            obj.email = message.email;
        }
        return obj;
    },
    create(base) {
        return exports.CheckEmailRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCheckEmailRequest();
        message.email = (_a = object.email) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCheckEmailResponse() {
    return { exist: false };
}
exports.CheckEmailResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.exist === true) {
            writer.uint32(8).bool(message.exist);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCheckEmailResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.exist = reader.bool();
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
        return { exist: isSet(object.exist) ? Boolean(object.exist) : false };
    },
    toJSON(message) {
        const obj = {};
        if (message.exist === true) {
            obj.exist = message.exist;
        }
        return obj;
    },
    create(base) {
        return exports.CheckEmailResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCheckEmailResponse();
        message.exist = (_a = object.exist) !== null && _a !== void 0 ? _a : false;
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
    return { user: undefined };
}
exports.GetResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.user !== undefined) {
            iam_1.User.encode(message.user, writer.uint32(10).fork()).ldelim();
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
                    message.user = iam_1.User.decode(reader, reader.uint32());
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
        return { user: isSet(object.user) ? iam_1.User.fromJSON(object.user) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.user !== undefined) {
            obj.user = iam_1.User.toJSON(message.user);
        }
        return obj;
    },
    create(base) {
        return exports.GetResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetResponse();
        message.user = (object.user !== undefined && object.user !== null) ? iam_1.User.fromPartial(object.user) : undefined;
        return message;
    },
};
function createBaseListRequest() {
    return {};
}
exports.ListRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListRequest();
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
        return exports.ListRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseListRequest();
        return message;
    },
};
function createBaseListResponse() {
    return { users: [] };
}
exports.ListResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.users) {
            iam_1.User.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.users.push(iam_1.User.decode(reader, reader.uint32()));
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
        return { users: Array.isArray(object === null || object === void 0 ? void 0 : object.users) ? object.users.map((e) => iam_1.User.fromJSON(e)) : [] };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.users) === null || _a === void 0 ? void 0 : _a.length) {
            obj.users = message.users.map((e) => iam_1.User.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ListResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListResponse();
        message.users = ((_a = object.users) === null || _a === void 0 ? void 0 : _a.map((e) => iam_1.User.fromPartial(e))) || [];
        return message;
    },
};
function createBaseDeleteRequest() {
    return { id: "" };
}
exports.DeleteRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteRequest();
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
        return exports.DeleteRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeleteRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeleteResponse() {
    return {};
}
exports.DeleteResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteResponse();
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
        return exports.DeleteResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseDeleteResponse();
        return message;
    },
};
function createBaseUpdateGroupRequest() {
    return { userId: "", groupIds: [] };
}
exports.UpdateGroupRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        for (const v of message.groupIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateGroupRequest();
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
                    message.groupIds.push(reader.string());
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
            groupIds: Array.isArray(object === null || object === void 0 ? void 0 : object.groupIds) ? object.groupIds.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if ((_a = message.groupIds) === null || _a === void 0 ? void 0 : _a.length) {
            obj.groupIds = message.groupIds;
        }
        return obj;
    },
    create(base) {
        return exports.UpdateGroupRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdateGroupRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.groupIds = ((_b = object.groupIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseUpdateGroupResponse() {
    return {};
}
exports.UpdateGroupResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateGroupResponse();
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
        return exports.UpdateGroupResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseUpdateGroupResponse();
        return message;
    },
};
function createBaseActivateUserRequest() {
    return { id: "" };
}
exports.ActivateUserRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActivateUserRequest();
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
        return exports.ActivateUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseActivateUserRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseActivateUserResponse() {
    return {};
}
exports.ActivateUserResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActivateUserResponse();
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
        return exports.ActivateUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseActivateUserResponse();
        return message;
    },
};
function createBaseDeactivateUserRequest() {
    return { id: "" };
}
exports.DeactivateUserRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeactivateUserRequest();
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
        return exports.DeactivateUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeactivateUserRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeactivateUserResponse() {
    return {};
}
exports.DeactivateUserResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeactivateUserResponse();
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
        return exports.DeactivateUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseDeactivateUserResponse();
        return message;
    },
};
class UserSvcClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Profile = this.Profile.bind(this);
        this.CheckEmail = this.CheckEmail.bind(this);
        this.List = this.List.bind(this);
        this.Get = this.Get.bind(this);
        this.Delete = this.Delete.bind(this);
        this.UpdateGroups = this.UpdateGroups.bind(this);
        this.ActivateUser = this.ActivateUser.bind(this);
        this.DeactivateUser = this.DeactivateUser.bind(this);
    }
    Profile(request, metadata) {
        return this.rpc.unary(exports.UserSvcProfileDesc, exports.ProfileRequest.fromPartial(request), metadata);
    }
    CheckEmail(request, metadata) {
        return this.rpc.unary(exports.UserSvcCheckEmailDesc, exports.CheckEmailRequest.fromPartial(request), metadata);
    }
    List(request, metadata) {
        return this.rpc.unary(exports.UserSvcListDesc, exports.ListRequest.fromPartial(request), metadata);
    }
    Get(request, metadata) {
        return this.rpc.unary(exports.UserSvcGetDesc, exports.GetRequest.fromPartial(request), metadata);
    }
    Delete(request, metadata) {
        return this.rpc.unary(exports.UserSvcDeleteDesc, exports.DeleteRequest.fromPartial(request), metadata);
    }
    UpdateGroups(request, metadata) {
        return this.rpc.unary(exports.UserSvcUpdateGroupsDesc, exports.UpdateGroupRequest.fromPartial(request), metadata);
    }
    ActivateUser(request, metadata) {
        return this.rpc.unary(exports.UserSvcActivateUserDesc, exports.ActivateUserRequest.fromPartial(request), metadata);
    }
    DeactivateUser(request, metadata) {
        return this.rpc.unary(exports.UserSvcDeactivateUserDesc, exports.DeactivateUserRequest.fromPartial(request), metadata);
    }
}
exports.UserSvcClientImpl = UserSvcClientImpl;
exports.UserSvcDesc = { serviceName: "usersvc.UserSvc" };
exports.UserSvcProfileDesc = {
    methodName: "Profile",
    service: exports.UserSvcDesc,
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
exports.UserSvcCheckEmailDesc = {
    methodName: "CheckEmail",
    service: exports.UserSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.CheckEmailRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.CheckEmailResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.UserSvcListDesc = {
    methodName: "List",
    service: exports.UserSvcDesc,
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
exports.UserSvcGetDesc = {
    methodName: "Get",
    service: exports.UserSvcDesc,
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
exports.UserSvcDeleteDesc = {
    methodName: "Delete",
    service: exports.UserSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.DeleteRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.DeleteResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.UserSvcUpdateGroupsDesc = {
    methodName: "UpdateGroups",
    service: exports.UserSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.UpdateGroupRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.UpdateGroupResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.UserSvcActivateUserDesc = {
    methodName: "ActivateUser",
    service: exports.UserSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.ActivateUserRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.ActivateUserResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.UserSvcDeactivateUserDesc = {
    methodName: "DeactivateUser",
    service: exports.UserSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.DeactivateUserRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.DeactivateUserResponse.decode(data);
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

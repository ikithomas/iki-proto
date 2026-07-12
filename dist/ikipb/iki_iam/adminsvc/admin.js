"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveUserFromGroupRequest = exports.AddUserToGroupResponse = exports.AddUserToGroupRequest = exports.ListGroupUsersResponse = exports.ListGroupUsersRequest = exports.DeleteUserResponse = exports.DeleteUserRequest = exports.GetUserResponse = exports.GetUserRequest = exports.CreateUserResponse = exports.CreateUserRequest = exports.PatchUserResponse = exports.PatchUserRequest = exports.ListUsersResponse = exports.ListUsersRequest = exports.SetGroupRolesResponse = exports.SetGroupRolesRequest = exports.DeleteGroupResponse = exports.DeleteGroupRequest = exports.PatchGroupResponse = exports.PatchGroupRequest = exports.CreateGroupResponse = exports.CreateGroupRequest = exports.GetGroupResponse = exports.GetGroupRequest = exports.ListGroupsResponse = exports.ListGroupsRequest = exports.SetRolePermissionsResponse = exports.SetRolePermissionsRequest = exports.DeleteRoleResponse = exports.DeleteRoleRequest = exports.PatchRoleResponse = exports.PatchRoleRequest = exports.CreateRoleResponse = exports.CreateRoleRequest = exports.GetRoleResponse = exports.GetRoleRequest = exports.ListRolesResponse = exports.ListRolesRequest = exports.DeletePermissionResponse = exports.DeletePermissionRequest = exports.PatchPermissionResponse = exports.PatchPermissionRequest = exports.CreatePermissionResponse = exports.CreatePermissionRequest = exports.GetPermissionResponse = exports.GetPermissionRequest = exports.ListPermissionsResponse = exports.ListPermissionsRequest = exports.protobufPackage = void 0;
exports.GrpcWebError = exports.GrpcWebImpl = exports.AdminSvcListGroupUsersDesc = exports.AdminSvcRemoveUserFromGroupDesc = exports.AdminSvcAddUserToGroupDesc = exports.AdminSvcSetGroupRolesDesc = exports.AdminSvcSetRolePermissionsDesc = exports.AdminSvcDeleteRoleDesc = exports.AdminSvcPatchRoleDesc = exports.AdminSvcCreateRoleDesc = exports.AdminSvcGetRoleDesc = exports.AdminSvcListRolesDesc = exports.AdminSvcDeleteGroupDesc = exports.AdminSvcPatchGroupDesc = exports.AdminSvcCreateGroupDesc = exports.AdminSvcGetGroupDesc = exports.AdminSvcListGroupsDesc = exports.AdminSvcDeletePermissionDesc = exports.AdminSvcPatchPermissionDesc = exports.AdminSvcCreatePermissionDesc = exports.AdminSvcGetPermissionDesc = exports.AdminSvcListPermissionsDesc = exports.AdminSvcSetUserGroupsDesc = exports.AdminSvcSetUserRolesDesc = exports.AdminSvcDeleteUserDesc = exports.AdminSvcCreateUserDesc = exports.AdminSvcPatchUserDesc = exports.AdminSvcGetUserDesc = exports.AdminSvcListUsersDesc = exports.AdminSvcDesc = exports.AdminSvcClientImpl = exports.SetUserGroupsResponse = exports.SetUserGroupsRequest = exports.SetUserRolesResponse = exports.SetUserRolesRequest = exports.RemoveUserFromGroupResponse = void 0;
/* eslint-disable */
const grpc_web_1 = require("@improbable-eng/grpc-web");
const browser_headers_1 = require("browser-headers");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const iam_1 = require("../iam");
exports.protobufPackage = "adminsvc";
function createBaseListPermissionsRequest() {
    return {};
}
exports.ListPermissionsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListPermissionsRequest();
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
        return exports.ListPermissionsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseListPermissionsRequest();
        return message;
    },
};
function createBaseListPermissionsResponse() {
    return { permissions: [] };
}
exports.ListPermissionsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.permissions) {
            iam_1.Permission.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListPermissionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.permissions.push(iam_1.Permission.decode(reader, reader.uint32()));
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
            permissions: Array.isArray(object === null || object === void 0 ? void 0 : object.permissions) ? object.permissions.map((e) => iam_1.Permission.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.permissions) === null || _a === void 0 ? void 0 : _a.length) {
            obj.permissions = message.permissions.map((e) => iam_1.Permission.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ListPermissionsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListPermissionsResponse();
        message.permissions = ((_a = object.permissions) === null || _a === void 0 ? void 0 : _a.map((e) => iam_1.Permission.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGetPermissionRequest() {
    return { id: "" };
}
exports.GetPermissionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPermissionRequest();
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
        return exports.GetPermissionRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetPermissionRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetPermissionResponse() {
    return { permission: undefined };
}
exports.GetPermissionResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.permission !== undefined) {
            iam_1.Permission.encode(message.permission, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPermissionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.permission = iam_1.Permission.decode(reader, reader.uint32());
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
        return { permission: isSet(object.permission) ? iam_1.Permission.fromJSON(object.permission) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.permission !== undefined) {
            obj.permission = iam_1.Permission.toJSON(message.permission);
        }
        return obj;
    },
    create(base) {
        return exports.GetPermissionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetPermissionResponse();
        message.permission = (object.permission !== undefined && object.permission !== null)
            ? iam_1.Permission.fromPartial(object.permission)
            : undefined;
        return message;
    },
};
function createBaseCreatePermissionRequest() {
    return { name: "", externalId: "" };
}
exports.CreatePermissionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.externalId !== "") {
            writer.uint32(18).string(message.externalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreatePermissionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.externalId = reader.string();
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
            name: isSet(object.name) ? String(object.name) : "",
            externalId: isSet(object.externalId) ? String(object.externalId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.externalId !== "") {
            obj.externalId = message.externalId;
        }
        return obj;
    },
    create(base) {
        return exports.CreatePermissionRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCreatePermissionRequest();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.externalId = (_b = object.externalId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseCreatePermissionResponse() {
    return { permission: undefined };
}
exports.CreatePermissionResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.permission !== undefined) {
            iam_1.Permission.encode(message.permission, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreatePermissionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.permission = iam_1.Permission.decode(reader, reader.uint32());
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
        return { permission: isSet(object.permission) ? iam_1.Permission.fromJSON(object.permission) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.permission !== undefined) {
            obj.permission = iam_1.Permission.toJSON(message.permission);
        }
        return obj;
    },
    create(base) {
        return exports.CreatePermissionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreatePermissionResponse();
        message.permission = (object.permission !== undefined && object.permission !== null)
            ? iam_1.Permission.fromPartial(object.permission)
            : undefined;
        return message;
    },
};
function createBasePatchPermissionRequest() {
    return { id: "", name: undefined, externalId: undefined };
}
exports.PatchPermissionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== undefined) {
            writer.uint32(18).string(message.name);
        }
        if (message.externalId !== undefined) {
            writer.uint32(26).string(message.externalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePatchPermissionRequest();
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
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.externalId = reader.string();
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
            name: isSet(object.name) ? String(object.name) : undefined,
            externalId: isSet(object.externalId) ? String(object.externalId) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.name !== undefined) {
            obj.name = message.name;
        }
        if (message.externalId !== undefined) {
            obj.externalId = message.externalId;
        }
        return obj;
    },
    create(base) {
        return exports.PatchPermissionRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePatchPermissionRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : undefined;
        message.externalId = (_c = object.externalId) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBasePatchPermissionResponse() {
    return { permission: undefined };
}
exports.PatchPermissionResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.permission !== undefined) {
            iam_1.Permission.encode(message.permission, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePatchPermissionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.permission = iam_1.Permission.decode(reader, reader.uint32());
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
        return { permission: isSet(object.permission) ? iam_1.Permission.fromJSON(object.permission) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.permission !== undefined) {
            obj.permission = iam_1.Permission.toJSON(message.permission);
        }
        return obj;
    },
    create(base) {
        return exports.PatchPermissionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBasePatchPermissionResponse();
        message.permission = (object.permission !== undefined && object.permission !== null)
            ? iam_1.Permission.fromPartial(object.permission)
            : undefined;
        return message;
    },
};
function createBaseDeletePermissionRequest() {
    return { id: "" };
}
exports.DeletePermissionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeletePermissionRequest();
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
        return exports.DeletePermissionRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeletePermissionRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeletePermissionResponse() {
    return {};
}
exports.DeletePermissionResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeletePermissionResponse();
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
        return exports.DeletePermissionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseDeletePermissionResponse();
        return message;
    },
};
function createBaseListRolesRequest() {
    return {};
}
exports.ListRolesRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListRolesRequest();
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
        return exports.ListRolesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseListRolesRequest();
        return message;
    },
};
function createBaseListRolesResponse() {
    return { roles: [] };
}
exports.ListRolesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.roles) {
            iam_1.Role.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListRolesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.roles.push(iam_1.Role.decode(reader, reader.uint32()));
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
        return { roles: Array.isArray(object === null || object === void 0 ? void 0 : object.roles) ? object.roles.map((e) => iam_1.Role.fromJSON(e)) : [] };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.roles) === null || _a === void 0 ? void 0 : _a.length) {
            obj.roles = message.roles.map((e) => iam_1.Role.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ListRolesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListRolesResponse();
        message.roles = ((_a = object.roles) === null || _a === void 0 ? void 0 : _a.map((e) => iam_1.Role.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGetRoleRequest() {
    return { id: "" };
}
exports.GetRoleRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetRoleRequest();
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
        return exports.GetRoleRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetRoleRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetRoleResponse() {
    return { role: undefined };
}
exports.GetRoleResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.role !== undefined) {
            iam_1.RoleDetail.encode(message.role, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetRoleResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.role = iam_1.RoleDetail.decode(reader, reader.uint32());
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
        return { role: isSet(object.role) ? iam_1.RoleDetail.fromJSON(object.role) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.role !== undefined) {
            obj.role = iam_1.RoleDetail.toJSON(message.role);
        }
        return obj;
    },
    create(base) {
        return exports.GetRoleResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetRoleResponse();
        message.role = (object.role !== undefined && object.role !== null)
            ? iam_1.RoleDetail.fromPartial(object.role)
            : undefined;
        return message;
    },
};
function createBaseCreateRoleRequest() {
    return { name: "" };
}
exports.CreateRoleRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateRoleRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
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
        return { name: isSet(object.name) ? String(object.name) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
    create(base) {
        return exports.CreateRoleRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCreateRoleRequest();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCreateRoleResponse() {
    return { role: undefined };
}
exports.CreateRoleResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.role !== undefined) {
            iam_1.Role.encode(message.role, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateRoleResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.role = iam_1.Role.decode(reader, reader.uint32());
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
        return { role: isSet(object.role) ? iam_1.Role.fromJSON(object.role) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.role !== undefined) {
            obj.role = iam_1.Role.toJSON(message.role);
        }
        return obj;
    },
    create(base) {
        return exports.CreateRoleResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreateRoleResponse();
        message.role = (object.role !== undefined && object.role !== null) ? iam_1.Role.fromPartial(object.role) : undefined;
        return message;
    },
};
function createBasePatchRoleRequest() {
    return { id: "", name: undefined };
}
exports.PatchRoleRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== undefined) {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePatchRoleRequest();
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
                    message.name = reader.string();
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
            name: isSet(object.name) ? String(object.name) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.name !== undefined) {
            obj.name = message.name;
        }
        return obj;
    },
    create(base) {
        return exports.PatchRoleRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePatchRoleRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBasePatchRoleResponse() {
    return { role: undefined };
}
exports.PatchRoleResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.role !== undefined) {
            iam_1.Role.encode(message.role, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePatchRoleResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.role = iam_1.Role.decode(reader, reader.uint32());
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
        return { role: isSet(object.role) ? iam_1.Role.fromJSON(object.role) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.role !== undefined) {
            obj.role = iam_1.Role.toJSON(message.role);
        }
        return obj;
    },
    create(base) {
        return exports.PatchRoleResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBasePatchRoleResponse();
        message.role = (object.role !== undefined && object.role !== null) ? iam_1.Role.fromPartial(object.role) : undefined;
        return message;
    },
};
function createBaseDeleteRoleRequest() {
    return { id: "" };
}
exports.DeleteRoleRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteRoleRequest();
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
        return exports.DeleteRoleRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeleteRoleRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeleteRoleResponse() {
    return {};
}
exports.DeleteRoleResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteRoleResponse();
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
        return exports.DeleteRoleResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseDeleteRoleResponse();
        return message;
    },
};
function createBaseSetRolePermissionsRequest() {
    return { roleId: "", permissionIds: [] };
}
exports.SetRolePermissionsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.roleId !== "") {
            writer.uint32(10).string(message.roleId);
        }
        for (const v of message.permissionIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetRolePermissionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.roleId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.permissionIds.push(reader.string());
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
            roleId: isSet(object.roleId) ? String(object.roleId) : "",
            permissionIds: Array.isArray(object === null || object === void 0 ? void 0 : object.permissionIds) ? object.permissionIds.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.roleId !== "") {
            obj.roleId = message.roleId;
        }
        if ((_a = message.permissionIds) === null || _a === void 0 ? void 0 : _a.length) {
            obj.permissionIds = message.permissionIds;
        }
        return obj;
    },
    create(base) {
        return exports.SetRolePermissionsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSetRolePermissionsRequest();
        message.roleId = (_a = object.roleId) !== null && _a !== void 0 ? _a : "";
        message.permissionIds = ((_b = object.permissionIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseSetRolePermissionsResponse() {
    return { role: undefined };
}
exports.SetRolePermissionsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.role !== undefined) {
            iam_1.RoleDetail.encode(message.role, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetRolePermissionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.role = iam_1.RoleDetail.decode(reader, reader.uint32());
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
        return { role: isSet(object.role) ? iam_1.RoleDetail.fromJSON(object.role) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.role !== undefined) {
            obj.role = iam_1.RoleDetail.toJSON(message.role);
        }
        return obj;
    },
    create(base) {
        return exports.SetRolePermissionsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseSetRolePermissionsResponse();
        message.role = (object.role !== undefined && object.role !== null)
            ? iam_1.RoleDetail.fromPartial(object.role)
            : undefined;
        return message;
    },
};
function createBaseListGroupsRequest() {
    return {};
}
exports.ListGroupsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListGroupsRequest();
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
        return exports.ListGroupsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseListGroupsRequest();
        return message;
    },
};
function createBaseListGroupsResponse() {
    return { groups: [] };
}
exports.ListGroupsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.groups) {
            iam_1.Group.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListGroupsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.groups.push(iam_1.Group.decode(reader, reader.uint32()));
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
        return { groups: Array.isArray(object === null || object === void 0 ? void 0 : object.groups) ? object.groups.map((e) => iam_1.Group.fromJSON(e)) : [] };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.groups) === null || _a === void 0 ? void 0 : _a.length) {
            obj.groups = message.groups.map((e) => iam_1.Group.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ListGroupsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListGroupsResponse();
        message.groups = ((_a = object.groups) === null || _a === void 0 ? void 0 : _a.map((e) => iam_1.Group.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGetGroupRequest() {
    return { id: "" };
}
exports.GetGroupRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetGroupRequest();
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
        return exports.GetGroupRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetGroupRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetGroupResponse() {
    return { group: undefined };
}
exports.GetGroupResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.group !== undefined) {
            iam_1.GroupDetail.encode(message.group, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.group = iam_1.GroupDetail.decode(reader, reader.uint32());
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
        return { group: isSet(object.group) ? iam_1.GroupDetail.fromJSON(object.group) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.group !== undefined) {
            obj.group = iam_1.GroupDetail.toJSON(message.group);
        }
        return obj;
    },
    create(base) {
        return exports.GetGroupResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetGroupResponse();
        message.group = (object.group !== undefined && object.group !== null)
            ? iam_1.GroupDetail.fromPartial(object.group)
            : undefined;
        return message;
    },
};
function createBaseCreateGroupRequest() {
    return { name: "" };
}
exports.CreateGroupRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateGroupRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
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
        return { name: isSet(object.name) ? String(object.name) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
    create(base) {
        return exports.CreateGroupRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCreateGroupRequest();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCreateGroupResponse() {
    return { group: undefined };
}
exports.CreateGroupResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.group !== undefined) {
            iam_1.Group.encode(message.group, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.group = iam_1.Group.decode(reader, reader.uint32());
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
        return { group: isSet(object.group) ? iam_1.Group.fromJSON(object.group) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.group !== undefined) {
            obj.group = iam_1.Group.toJSON(message.group);
        }
        return obj;
    },
    create(base) {
        return exports.CreateGroupResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreateGroupResponse();
        message.group = (object.group !== undefined && object.group !== null) ? iam_1.Group.fromPartial(object.group) : undefined;
        return message;
    },
};
function createBasePatchGroupRequest() {
    return { id: "", name: undefined };
}
exports.PatchGroupRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== undefined) {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePatchGroupRequest();
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
                    message.name = reader.string();
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
            name: isSet(object.name) ? String(object.name) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.name !== undefined) {
            obj.name = message.name;
        }
        return obj;
    },
    create(base) {
        return exports.PatchGroupRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePatchGroupRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBasePatchGroupResponse() {
    return { group: undefined };
}
exports.PatchGroupResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.group !== undefined) {
            iam_1.Group.encode(message.group, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePatchGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.group = iam_1.Group.decode(reader, reader.uint32());
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
        return { group: isSet(object.group) ? iam_1.Group.fromJSON(object.group) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.group !== undefined) {
            obj.group = iam_1.Group.toJSON(message.group);
        }
        return obj;
    },
    create(base) {
        return exports.PatchGroupResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBasePatchGroupResponse();
        message.group = (object.group !== undefined && object.group !== null) ? iam_1.Group.fromPartial(object.group) : undefined;
        return message;
    },
};
function createBaseDeleteGroupRequest() {
    return { id: "" };
}
exports.DeleteGroupRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteGroupRequest();
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
        return exports.DeleteGroupRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeleteGroupRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeleteGroupResponse() {
    return {};
}
exports.DeleteGroupResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteGroupResponse();
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
        return exports.DeleteGroupResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseDeleteGroupResponse();
        return message;
    },
};
function createBaseSetGroupRolesRequest() {
    return { groupId: "", roleIds: [] };
}
exports.SetGroupRolesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.groupId !== "") {
            writer.uint32(10).string(message.groupId);
        }
        for (const v of message.roleIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetGroupRolesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.groupId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.roleIds.push(reader.string());
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
            groupId: isSet(object.groupId) ? String(object.groupId) : "",
            roleIds: Array.isArray(object === null || object === void 0 ? void 0 : object.roleIds) ? object.roleIds.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.groupId !== "") {
            obj.groupId = message.groupId;
        }
        if ((_a = message.roleIds) === null || _a === void 0 ? void 0 : _a.length) {
            obj.roleIds = message.roleIds;
        }
        return obj;
    },
    create(base) {
        return exports.SetGroupRolesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSetGroupRolesRequest();
        message.groupId = (_a = object.groupId) !== null && _a !== void 0 ? _a : "";
        message.roleIds = ((_b = object.roleIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseSetGroupRolesResponse() {
    return { group: undefined };
}
exports.SetGroupRolesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.group !== undefined) {
            iam_1.GroupDetail.encode(message.group, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetGroupRolesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.group = iam_1.GroupDetail.decode(reader, reader.uint32());
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
        return { group: isSet(object.group) ? iam_1.GroupDetail.fromJSON(object.group) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.group !== undefined) {
            obj.group = iam_1.GroupDetail.toJSON(message.group);
        }
        return obj;
    },
    create(base) {
        return exports.SetGroupRolesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseSetGroupRolesResponse();
        message.group = (object.group !== undefined && object.group !== null)
            ? iam_1.GroupDetail.fromPartial(object.group)
            : undefined;
        return message;
    },
};
function createBaseListUsersRequest() {
    return {};
}
exports.ListUsersRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListUsersRequest();
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
        return exports.ListUsersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseListUsersRequest();
        return message;
    },
};
function createBaseListUsersResponse() {
    return { users: [] };
}
exports.ListUsersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.users) {
            iam_1.User.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListUsersResponse();
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
        return exports.ListUsersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListUsersResponse();
        message.users = ((_a = object.users) === null || _a === void 0 ? void 0 : _a.map((e) => iam_1.User.fromPartial(e))) || [];
        return message;
    },
};
function createBasePatchUserRequest() {
    return { id: "", givenName: undefined, familyName: undefined, email: undefined, active: undefined };
}
exports.PatchUserRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.givenName !== undefined) {
            writer.uint32(18).string(message.givenName);
        }
        if (message.familyName !== undefined) {
            writer.uint32(26).string(message.familyName);
        }
        if (message.email !== undefined) {
            writer.uint32(34).string(message.email);
        }
        if (message.active !== undefined) {
            writer.uint32(40).bool(message.active);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePatchUserRequest();
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
                    message.givenName = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.familyName = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.active = reader.bool();
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
            givenName: isSet(object.givenName) ? String(object.givenName) : undefined,
            familyName: isSet(object.familyName) ? String(object.familyName) : undefined,
            email: isSet(object.email) ? String(object.email) : undefined,
            active: isSet(object.active) ? Boolean(object.active) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.givenName !== undefined) {
            obj.givenName = message.givenName;
        }
        if (message.familyName !== undefined) {
            obj.familyName = message.familyName;
        }
        if (message.email !== undefined) {
            obj.email = message.email;
        }
        if (message.active !== undefined) {
            obj.active = message.active;
        }
        return obj;
    },
    create(base) {
        return exports.PatchUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBasePatchUserRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.givenName = (_b = object.givenName) !== null && _b !== void 0 ? _b : undefined;
        message.familyName = (_c = object.familyName) !== null && _c !== void 0 ? _c : undefined;
        message.email = (_d = object.email) !== null && _d !== void 0 ? _d : undefined;
        message.active = (_e = object.active) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
function createBasePatchUserResponse() {
    return { user: undefined };
}
exports.PatchUserResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.user !== undefined) {
            iam_1.User.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePatchUserResponse();
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
        return exports.PatchUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBasePatchUserResponse();
        message.user = (object.user !== undefined && object.user !== null) ? iam_1.User.fromPartial(object.user) : undefined;
        return message;
    },
};
function createBaseCreateUserRequest() {
    return { email: "", givenName: "", familyName: "" };
}
exports.CreateUserRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        if (message.givenName !== "") {
            writer.uint32(18).string(message.givenName);
        }
        if (message.familyName !== "") {
            writer.uint32(26).string(message.familyName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateUserRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.givenName = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.familyName = reader.string();
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
            email: isSet(object.email) ? String(object.email) : "",
            givenName: isSet(object.givenName) ? String(object.givenName) : "",
            familyName: isSet(object.familyName) ? String(object.familyName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.givenName !== "") {
            obj.givenName = message.givenName;
        }
        if (message.familyName !== "") {
            obj.familyName = message.familyName;
        }
        return obj;
    },
    create(base) {
        return exports.CreateUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCreateUserRequest();
        message.email = (_a = object.email) !== null && _a !== void 0 ? _a : "";
        message.givenName = (_b = object.givenName) !== null && _b !== void 0 ? _b : "";
        message.familyName = (_c = object.familyName) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseCreateUserResponse() {
    return { user: undefined };
}
exports.CreateUserResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.user !== undefined) {
            iam_1.User.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateUserResponse();
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
        return exports.CreateUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreateUserResponse();
        message.user = (object.user !== undefined && object.user !== null) ? iam_1.User.fromPartial(object.user) : undefined;
        return message;
    },
};
function createBaseGetUserRequest() {
    return { id: "" };
}
exports.GetUserRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUserRequest();
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
        return exports.GetUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetUserRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetUserResponse() {
    return { user: undefined };
}
exports.GetUserResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.user !== undefined) {
            iam_1.UserDetail.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUserResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.user = iam_1.UserDetail.decode(reader, reader.uint32());
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
        return { user: isSet(object.user) ? iam_1.UserDetail.fromJSON(object.user) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.user !== undefined) {
            obj.user = iam_1.UserDetail.toJSON(message.user);
        }
        return obj;
    },
    create(base) {
        return exports.GetUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetUserResponse();
        message.user = (object.user !== undefined && object.user !== null)
            ? iam_1.UserDetail.fromPartial(object.user)
            : undefined;
        return message;
    },
};
function createBaseDeleteUserRequest() {
    return { id: "" };
}
exports.DeleteUserRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteUserRequest();
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
        return exports.DeleteUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeleteUserRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeleteUserResponse() {
    return {};
}
exports.DeleteUserResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteUserResponse();
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
        return exports.DeleteUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseDeleteUserResponse();
        return message;
    },
};
function createBaseListGroupUsersRequest() {
    return { groupId: "" };
}
exports.ListGroupUsersRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.groupId !== "") {
            writer.uint32(10).string(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListGroupUsersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.groupId = reader.string();
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
        return { groupId: isSet(object.groupId) ? String(object.groupId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.groupId !== "") {
            obj.groupId = message.groupId;
        }
        return obj;
    },
    create(base) {
        return exports.ListGroupUsersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListGroupUsersRequest();
        message.groupId = (_a = object.groupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseListGroupUsersResponse() {
    return { users: [] };
}
exports.ListGroupUsersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.users) {
            iam_1.User.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListGroupUsersResponse();
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
        return exports.ListGroupUsersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListGroupUsersResponse();
        message.users = ((_a = object.users) === null || _a === void 0 ? void 0 : _a.map((e) => iam_1.User.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAddUserToGroupRequest() {
    return { userId: "", groupId: "" };
}
exports.AddUserToGroupRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.groupId !== "") {
            writer.uint32(18).string(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddUserToGroupRequest();
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
                    message.groupId = reader.string();
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
            groupId: isSet(object.groupId) ? String(object.groupId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.groupId !== "") {
            obj.groupId = message.groupId;
        }
        return obj;
    },
    create(base) {
        return exports.AddUserToGroupRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAddUserToGroupRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.groupId = (_b = object.groupId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseAddUserToGroupResponse() {
    return {};
}
exports.AddUserToGroupResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddUserToGroupResponse();
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
        return exports.AddUserToGroupResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseAddUserToGroupResponse();
        return message;
    },
};
function createBaseRemoveUserFromGroupRequest() {
    return { userId: "", groupId: "" };
}
exports.RemoveUserFromGroupRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.groupId !== "") {
            writer.uint32(18).string(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveUserFromGroupRequest();
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
                    message.groupId = reader.string();
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
            groupId: isSet(object.groupId) ? String(object.groupId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.groupId !== "") {
            obj.groupId = message.groupId;
        }
        return obj;
    },
    create(base) {
        return exports.RemoveUserFromGroupRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRemoveUserFromGroupRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.groupId = (_b = object.groupId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseRemoveUserFromGroupResponse() {
    return {};
}
exports.RemoveUserFromGroupResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveUserFromGroupResponse();
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
        return exports.RemoveUserFromGroupResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseRemoveUserFromGroupResponse();
        return message;
    },
};
function createBaseSetUserRolesRequest() {
    return { userId: "", roleIds: [] };
}
exports.SetUserRolesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        for (const v of message.roleIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetUserRolesRequest();
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
                    message.roleIds.push(reader.string());
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
            roleIds: Array.isArray(object === null || object === void 0 ? void 0 : object.roleIds) ? object.roleIds.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if ((_a = message.roleIds) === null || _a === void 0 ? void 0 : _a.length) {
            obj.roleIds = message.roleIds;
        }
        return obj;
    },
    create(base) {
        return exports.SetUserRolesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSetUserRolesRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.roleIds = ((_b = object.roleIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseSetUserRolesResponse() {
    return { user: undefined };
}
exports.SetUserRolesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.user !== undefined) {
            iam_1.UserDetail.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetUserRolesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.user = iam_1.UserDetail.decode(reader, reader.uint32());
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
        return { user: isSet(object.user) ? iam_1.UserDetail.fromJSON(object.user) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.user !== undefined) {
            obj.user = iam_1.UserDetail.toJSON(message.user);
        }
        return obj;
    },
    create(base) {
        return exports.SetUserRolesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseSetUserRolesResponse();
        message.user = (object.user !== undefined && object.user !== null)
            ? iam_1.UserDetail.fromPartial(object.user)
            : undefined;
        return message;
    },
};
function createBaseSetUserGroupsRequest() {
    return { userId: "", groupIds: [] };
}
exports.SetUserGroupsRequest = {
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
        const message = createBaseSetUserGroupsRequest();
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
        return exports.SetUserGroupsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSetUserGroupsRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.groupIds = ((_b = object.groupIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseSetUserGroupsResponse() {
    return { user: undefined };
}
exports.SetUserGroupsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.user !== undefined) {
            iam_1.UserDetail.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetUserGroupsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.user = iam_1.UserDetail.decode(reader, reader.uint32());
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
        return { user: isSet(object.user) ? iam_1.UserDetail.fromJSON(object.user) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.user !== undefined) {
            obj.user = iam_1.UserDetail.toJSON(message.user);
        }
        return obj;
    },
    create(base) {
        return exports.SetUserGroupsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseSetUserGroupsResponse();
        message.user = (object.user !== undefined && object.user !== null)
            ? iam_1.UserDetail.fromPartial(object.user)
            : undefined;
        return message;
    },
};
class AdminSvcClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.ListUsers = this.ListUsers.bind(this);
        this.GetUser = this.GetUser.bind(this);
        this.PatchUser = this.PatchUser.bind(this);
        this.CreateUser = this.CreateUser.bind(this);
        this.DeleteUser = this.DeleteUser.bind(this);
        this.SetUserRoles = this.SetUserRoles.bind(this);
        this.SetUserGroups = this.SetUserGroups.bind(this);
        this.ListPermissions = this.ListPermissions.bind(this);
        this.GetPermission = this.GetPermission.bind(this);
        this.CreatePermission = this.CreatePermission.bind(this);
        this.PatchPermission = this.PatchPermission.bind(this);
        this.DeletePermission = this.DeletePermission.bind(this);
        this.ListGroups = this.ListGroups.bind(this);
        this.GetGroup = this.GetGroup.bind(this);
        this.CreateGroup = this.CreateGroup.bind(this);
        this.PatchGroup = this.PatchGroup.bind(this);
        this.DeleteGroup = this.DeleteGroup.bind(this);
        this.ListRoles = this.ListRoles.bind(this);
        this.GetRole = this.GetRole.bind(this);
        this.CreateRole = this.CreateRole.bind(this);
        this.PatchRole = this.PatchRole.bind(this);
        this.DeleteRole = this.DeleteRole.bind(this);
        this.SetRolePermissions = this.SetRolePermissions.bind(this);
        this.SetGroupRoles = this.SetGroupRoles.bind(this);
        this.AddUserToGroup = this.AddUserToGroup.bind(this);
        this.RemoveUserFromGroup = this.RemoveUserFromGroup.bind(this);
        this.ListGroupUsers = this.ListGroupUsers.bind(this);
    }
    ListUsers(request, metadata) {
        return this.rpc.unary(exports.AdminSvcListUsersDesc, exports.ListUsersRequest.fromPartial(request), metadata);
    }
    GetUser(request, metadata) {
        return this.rpc.unary(exports.AdminSvcGetUserDesc, exports.GetUserRequest.fromPartial(request), metadata);
    }
    PatchUser(request, metadata) {
        return this.rpc.unary(exports.AdminSvcPatchUserDesc, exports.PatchUserRequest.fromPartial(request), metadata);
    }
    CreateUser(request, metadata) {
        return this.rpc.unary(exports.AdminSvcCreateUserDesc, exports.CreateUserRequest.fromPartial(request), metadata);
    }
    DeleteUser(request, metadata) {
        return this.rpc.unary(exports.AdminSvcDeleteUserDesc, exports.DeleteUserRequest.fromPartial(request), metadata);
    }
    SetUserRoles(request, metadata) {
        return this.rpc.unary(exports.AdminSvcSetUserRolesDesc, exports.SetUserRolesRequest.fromPartial(request), metadata);
    }
    SetUserGroups(request, metadata) {
        return this.rpc.unary(exports.AdminSvcSetUserGroupsDesc, exports.SetUserGroupsRequest.fromPartial(request), metadata);
    }
    ListPermissions(request, metadata) {
        return this.rpc.unary(exports.AdminSvcListPermissionsDesc, exports.ListPermissionsRequest.fromPartial(request), metadata);
    }
    GetPermission(request, metadata) {
        return this.rpc.unary(exports.AdminSvcGetPermissionDesc, exports.GetPermissionRequest.fromPartial(request), metadata);
    }
    CreatePermission(request, metadata) {
        return this.rpc.unary(exports.AdminSvcCreatePermissionDesc, exports.CreatePermissionRequest.fromPartial(request), metadata);
    }
    PatchPermission(request, metadata) {
        return this.rpc.unary(exports.AdminSvcPatchPermissionDesc, exports.PatchPermissionRequest.fromPartial(request), metadata);
    }
    DeletePermission(request, metadata) {
        return this.rpc.unary(exports.AdminSvcDeletePermissionDesc, exports.DeletePermissionRequest.fromPartial(request), metadata);
    }
    ListGroups(request, metadata) {
        return this.rpc.unary(exports.AdminSvcListGroupsDesc, exports.ListGroupsRequest.fromPartial(request), metadata);
    }
    GetGroup(request, metadata) {
        return this.rpc.unary(exports.AdminSvcGetGroupDesc, exports.GetGroupRequest.fromPartial(request), metadata);
    }
    CreateGroup(request, metadata) {
        return this.rpc.unary(exports.AdminSvcCreateGroupDesc, exports.CreateGroupRequest.fromPartial(request), metadata);
    }
    PatchGroup(request, metadata) {
        return this.rpc.unary(exports.AdminSvcPatchGroupDesc, exports.PatchGroupRequest.fromPartial(request), metadata);
    }
    DeleteGroup(request, metadata) {
        return this.rpc.unary(exports.AdminSvcDeleteGroupDesc, exports.DeleteGroupRequest.fromPartial(request), metadata);
    }
    ListRoles(request, metadata) {
        return this.rpc.unary(exports.AdminSvcListRolesDesc, exports.ListRolesRequest.fromPartial(request), metadata);
    }
    GetRole(request, metadata) {
        return this.rpc.unary(exports.AdminSvcGetRoleDesc, exports.GetRoleRequest.fromPartial(request), metadata);
    }
    CreateRole(request, metadata) {
        return this.rpc.unary(exports.AdminSvcCreateRoleDesc, exports.CreateRoleRequest.fromPartial(request), metadata);
    }
    PatchRole(request, metadata) {
        return this.rpc.unary(exports.AdminSvcPatchRoleDesc, exports.PatchRoleRequest.fromPartial(request), metadata);
    }
    DeleteRole(request, metadata) {
        return this.rpc.unary(exports.AdminSvcDeleteRoleDesc, exports.DeleteRoleRequest.fromPartial(request), metadata);
    }
    SetRolePermissions(request, metadata) {
        return this.rpc.unary(exports.AdminSvcSetRolePermissionsDesc, exports.SetRolePermissionsRequest.fromPartial(request), metadata);
    }
    SetGroupRoles(request, metadata) {
        return this.rpc.unary(exports.AdminSvcSetGroupRolesDesc, exports.SetGroupRolesRequest.fromPartial(request), metadata);
    }
    AddUserToGroup(request, metadata) {
        return this.rpc.unary(exports.AdminSvcAddUserToGroupDesc, exports.AddUserToGroupRequest.fromPartial(request), metadata);
    }
    RemoveUserFromGroup(request, metadata) {
        return this.rpc.unary(exports.AdminSvcRemoveUserFromGroupDesc, exports.RemoveUserFromGroupRequest.fromPartial(request), metadata);
    }
    ListGroupUsers(request, metadata) {
        return this.rpc.unary(exports.AdminSvcListGroupUsersDesc, exports.ListGroupUsersRequest.fromPartial(request), metadata);
    }
}
exports.AdminSvcClientImpl = AdminSvcClientImpl;
exports.AdminSvcDesc = { serviceName: "adminsvc.AdminSvc" };
exports.AdminSvcListUsersDesc = {
    methodName: "ListUsers",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.ListUsersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.ListUsersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AdminSvcGetUserDesc = {
    methodName: "GetUser",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetUserRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetUserResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AdminSvcPatchUserDesc = {
    methodName: "PatchUser",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.PatchUserRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.PatchUserResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AdminSvcCreateUserDesc = {
    methodName: "CreateUser",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.CreateUserRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.CreateUserResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AdminSvcDeleteUserDesc = {
    methodName: "DeleteUser",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.DeleteUserRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.DeleteUserResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AdminSvcSetUserRolesDesc = {
    methodName: "SetUserRoles",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.SetUserRolesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.SetUserRolesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AdminSvcSetUserGroupsDesc = {
    methodName: "SetUserGroups",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.SetUserGroupsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.SetUserGroupsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AdminSvcListPermissionsDesc = {
    methodName: "ListPermissions",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.ListPermissionsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.ListPermissionsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AdminSvcGetPermissionDesc = {
    methodName: "GetPermission",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetPermissionRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetPermissionResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AdminSvcCreatePermissionDesc = {
    methodName: "CreatePermission",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.CreatePermissionRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.CreatePermissionResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AdminSvcPatchPermissionDesc = {
    methodName: "PatchPermission",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.PatchPermissionRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.PatchPermissionResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AdminSvcDeletePermissionDesc = {
    methodName: "DeletePermission",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.DeletePermissionRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.DeletePermissionResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AdminSvcListGroupsDesc = {
    methodName: "ListGroups",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.ListGroupsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.ListGroupsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AdminSvcGetGroupDesc = {
    methodName: "GetGroup",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetGroupRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetGroupResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AdminSvcCreateGroupDesc = {
    methodName: "CreateGroup",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.CreateGroupRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.CreateGroupResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AdminSvcPatchGroupDesc = {
    methodName: "PatchGroup",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.PatchGroupRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.PatchGroupResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AdminSvcDeleteGroupDesc = {
    methodName: "DeleteGroup",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.DeleteGroupRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.DeleteGroupResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AdminSvcListRolesDesc = {
    methodName: "ListRoles",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.ListRolesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.ListRolesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AdminSvcGetRoleDesc = {
    methodName: "GetRole",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.GetRoleRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.GetRoleResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AdminSvcCreateRoleDesc = {
    methodName: "CreateRole",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.CreateRoleRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.CreateRoleResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AdminSvcPatchRoleDesc = {
    methodName: "PatchRole",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.PatchRoleRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.PatchRoleResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AdminSvcDeleteRoleDesc = {
    methodName: "DeleteRole",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.DeleteRoleRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.DeleteRoleResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AdminSvcSetRolePermissionsDesc = {
    methodName: "SetRolePermissions",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.SetRolePermissionsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.SetRolePermissionsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AdminSvcSetGroupRolesDesc = {
    methodName: "SetGroupRoles",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.SetGroupRolesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.SetGroupRolesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AdminSvcAddUserToGroupDesc = {
    methodName: "AddUserToGroup",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.AddUserToGroupRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.AddUserToGroupResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AdminSvcRemoveUserFromGroupDesc = {
    methodName: "RemoveUserFromGroup",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.RemoveUserFromGroupRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.RemoveUserFromGroupResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
exports.AdminSvcListGroupUsersDesc = {
    methodName: "ListGroupUsers",
    service: exports.AdminSvcDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return exports.ListGroupUsersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = exports.ListGroupUsersResponse.decode(data);
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

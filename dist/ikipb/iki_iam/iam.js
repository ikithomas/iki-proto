"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passkey = exports.Secret = exports.ServiceDetail = exports.Service = exports.GroupDetail = exports.Group = exports.RoleDetail = exports.Role = exports.Permission = exports.UserDetail = exports.User = exports.entityTypeToJSON = exports.entityTypeFromJSON = exports.EntityType = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "iam";
var EntityType;
(function (EntityType) {
    EntityType[EntityType["ENTITY_TYPE_UNSPECIFIED"] = 0] = "ENTITY_TYPE_UNSPECIFIED";
    EntityType[EntityType["ENTITY_TYPE_USER"] = 1] = "ENTITY_TYPE_USER";
    EntityType[EntityType["ENTITY_TYPE_SERVICE"] = 2] = "ENTITY_TYPE_SERVICE";
    EntityType[EntityType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(EntityType || (exports.EntityType = EntityType = {}));
function entityTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "ENTITY_TYPE_UNSPECIFIED":
            return EntityType.ENTITY_TYPE_UNSPECIFIED;
        case 1:
        case "ENTITY_TYPE_USER":
            return EntityType.ENTITY_TYPE_USER;
        case 2:
        case "ENTITY_TYPE_SERVICE":
            return EntityType.ENTITY_TYPE_SERVICE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return EntityType.UNRECOGNIZED;
    }
}
exports.entityTypeFromJSON = entityTypeFromJSON;
function entityTypeToJSON(object) {
    switch (object) {
        case EntityType.ENTITY_TYPE_UNSPECIFIED:
            return "ENTITY_TYPE_UNSPECIFIED";
        case EntityType.ENTITY_TYPE_USER:
            return "ENTITY_TYPE_USER";
        case EntityType.ENTITY_TYPE_SERVICE:
            return "ENTITY_TYPE_SERVICE";
        case EntityType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.entityTypeToJSON = entityTypeToJSON;
function createBaseUser() {
    return {
        id: "",
        email: "",
        givenName: "",
        familyName: "",
        active: false,
        lastLoginAt: undefined,
        lastActivityAt: undefined,
        scimLastSyncedAt: undefined,
    };
}
exports.User = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.email !== "") {
            writer.uint32(18).string(message.email);
        }
        if (message.givenName !== "") {
            writer.uint32(26).string(message.givenName);
        }
        if (message.familyName !== "") {
            writer.uint32(34).string(message.familyName);
        }
        if (message.active === true) {
            writer.uint32(72).bool(message.active);
        }
        if (message.lastLoginAt !== undefined) {
            writer.uint32(80).int64(message.lastLoginAt);
        }
        if (message.lastActivityAt !== undefined) {
            writer.uint32(88).int64(message.lastActivityAt);
        }
        if (message.scimLastSyncedAt !== undefined) {
            writer.uint32(96).int64(message.scimLastSyncedAt);
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
                    message.email = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.givenName = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.familyName = reader.string();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.active = reader.bool();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.lastLoginAt = longToNumber(reader.int64());
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.lastActivityAt = longToNumber(reader.int64());
                    continue;
                case 12:
                    if (tag !== 96) {
                        break;
                    }
                    message.scimLastSyncedAt = longToNumber(reader.int64());
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
            email: isSet(object.email) ? String(object.email) : "",
            givenName: isSet(object.givenName) ? String(object.givenName) : "",
            familyName: isSet(object.familyName) ? String(object.familyName) : "",
            active: isSet(object.active) ? Boolean(object.active) : false,
            lastLoginAt: isSet(object.lastLoginAt) ? Number(object.lastLoginAt) : undefined,
            lastActivityAt: isSet(object.lastActivityAt) ? Number(object.lastActivityAt) : undefined,
            scimLastSyncedAt: isSet(object.scimLastSyncedAt) ? Number(object.scimLastSyncedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.givenName !== "") {
            obj.givenName = message.givenName;
        }
        if (message.familyName !== "") {
            obj.familyName = message.familyName;
        }
        if (message.active === true) {
            obj.active = message.active;
        }
        if (message.lastLoginAt !== undefined) {
            obj.lastLoginAt = Math.round(message.lastLoginAt);
        }
        if (message.lastActivityAt !== undefined) {
            obj.lastActivityAt = Math.round(message.lastActivityAt);
        }
        if (message.scimLastSyncedAt !== undefined) {
            obj.scimLastSyncedAt = Math.round(message.scimLastSyncedAt);
        }
        return obj;
    },
    create(base) {
        return exports.User.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseUser();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.email = (_b = object.email) !== null && _b !== void 0 ? _b : "";
        message.givenName = (_c = object.givenName) !== null && _c !== void 0 ? _c : "";
        message.familyName = (_d = object.familyName) !== null && _d !== void 0 ? _d : "";
        message.active = (_e = object.active) !== null && _e !== void 0 ? _e : false;
        message.lastLoginAt = (_f = object.lastLoginAt) !== null && _f !== void 0 ? _f : undefined;
        message.lastActivityAt = (_g = object.lastActivityAt) !== null && _g !== void 0 ? _g : undefined;
        message.scimLastSyncedAt = (_h = object.scimLastSyncedAt) !== null && _h !== void 0 ? _h : undefined;
        return message;
    },
};
function createBaseUserDetail() {
    return { user: undefined, groups: [], directRoles: [], effectiveRoles: [] };
}
exports.UserDetail = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.user !== undefined) {
            exports.User.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.groups) {
            exports.Group.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.directRoles) {
            exports.Role.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.effectiveRoles) {
            exports.Role.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserDetail();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.user = exports.User.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.groups.push(exports.Group.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.directRoles.push(exports.Role.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.effectiveRoles.push(exports.Role.decode(reader, reader.uint32()));
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
            user: isSet(object.user) ? exports.User.fromJSON(object.user) : undefined,
            groups: Array.isArray(object === null || object === void 0 ? void 0 : object.groups) ? object.groups.map((e) => exports.Group.fromJSON(e)) : [],
            directRoles: Array.isArray(object === null || object === void 0 ? void 0 : object.directRoles) ? object.directRoles.map((e) => exports.Role.fromJSON(e)) : [],
            effectiveRoles: Array.isArray(object === null || object === void 0 ? void 0 : object.effectiveRoles)
                ? object.effectiveRoles.map((e) => exports.Role.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a, _b, _c;
        const obj = {};
        if (message.user !== undefined) {
            obj.user = exports.User.toJSON(message.user);
        }
        if ((_a = message.groups) === null || _a === void 0 ? void 0 : _a.length) {
            obj.groups = message.groups.map((e) => exports.Group.toJSON(e));
        }
        if ((_b = message.directRoles) === null || _b === void 0 ? void 0 : _b.length) {
            obj.directRoles = message.directRoles.map((e) => exports.Role.toJSON(e));
        }
        if ((_c = message.effectiveRoles) === null || _c === void 0 ? void 0 : _c.length) {
            obj.effectiveRoles = message.effectiveRoles.map((e) => exports.Role.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.UserDetail.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseUserDetail();
        message.user = (object.user !== undefined && object.user !== null) ? exports.User.fromPartial(object.user) : undefined;
        message.groups = ((_a = object.groups) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Group.fromPartial(e))) || [];
        message.directRoles = ((_b = object.directRoles) === null || _b === void 0 ? void 0 : _b.map((e) => exports.Role.fromPartial(e))) || [];
        message.effectiveRoles = ((_c = object.effectiveRoles) === null || _c === void 0 ? void 0 : _c.map((e) => exports.Role.fromPartial(e))) || [];
        return message;
    },
};
function createBasePermission() {
    return { id: "", name: "", externalId: "" };
}
exports.Permission = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.externalId !== "") {
            writer.uint32(26).string(message.externalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermission();
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
            name: isSet(object.name) ? String(object.name) : "",
            externalId: isSet(object.externalId) ? String(object.externalId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.externalId !== "") {
            obj.externalId = message.externalId;
        }
        return obj;
    },
    create(base) {
        return exports.Permission.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePermission();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.externalId = (_c = object.externalId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseRole() {
    return { id: "", name: "" };
}
exports.Role = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRole();
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
        return { id: isSet(object.id) ? String(object.id) : "", name: isSet(object.name) ? String(object.name) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
    create(base) {
        return exports.Role.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRole();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseRoleDetail() {
    return { role: undefined, permissions: [] };
}
exports.RoleDetail = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.role !== undefined) {
            exports.Role.encode(message.role, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.permissions) {
            exports.Permission.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRoleDetail();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.role = exports.Role.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.permissions.push(exports.Permission.decode(reader, reader.uint32()));
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
            role: isSet(object.role) ? exports.Role.fromJSON(object.role) : undefined,
            permissions: Array.isArray(object === null || object === void 0 ? void 0 : object.permissions) ? object.permissions.map((e) => exports.Permission.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.role !== undefined) {
            obj.role = exports.Role.toJSON(message.role);
        }
        if ((_a = message.permissions) === null || _a === void 0 ? void 0 : _a.length) {
            obj.permissions = message.permissions.map((e) => exports.Permission.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.RoleDetail.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRoleDetail();
        message.role = (object.role !== undefined && object.role !== null) ? exports.Role.fromPartial(object.role) : undefined;
        message.permissions = ((_a = object.permissions) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Permission.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGroup() {
    return { id: "", name: "" };
}
exports.Group = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroup();
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
        return { id: isSet(object.id) ? String(object.id) : "", name: isSet(object.name) ? String(object.name) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
    create(base) {
        return exports.Group.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGroup();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGroupDetail() {
    return { group: undefined, roles: [] };
}
exports.GroupDetail = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.group !== undefined) {
            exports.Group.encode(message.group, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.roles) {
            exports.Role.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupDetail();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.group = exports.Group.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.roles.push(exports.Role.decode(reader, reader.uint32()));
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
            group: isSet(object.group) ? exports.Group.fromJSON(object.group) : undefined,
            roles: Array.isArray(object === null || object === void 0 ? void 0 : object.roles) ? object.roles.map((e) => exports.Role.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.group !== undefined) {
            obj.group = exports.Group.toJSON(message.group);
        }
        if ((_a = message.roles) === null || _a === void 0 ? void 0 : _a.length) {
            obj.roles = message.roles.map((e) => exports.Role.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GroupDetail.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGroupDetail();
        message.group = (object.group !== undefined && object.group !== null) ? exports.Group.fromPartial(object.group) : undefined;
        message.roles = ((_a = object.roles) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Role.fromPartial(e))) || [];
        return message;
    },
};
function createBaseService() {
    return { id: "", clientId: "", name: "" };
}
exports.Service = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.clientId !== "") {
            writer.uint32(18).string(message.clientId);
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseService();
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
                    message.clientId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
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
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            name: isSet(object.name) ? String(object.name) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.clientId !== "") {
            obj.clientId = message.clientId;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
    create(base) {
        return exports.Service.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseService();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.clientId = (_b = object.clientId) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseServiceDetail() {
    return { service: undefined, secrets: [] };
}
exports.ServiceDetail = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.service !== undefined) {
            exports.Service.encode(message.service, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.secrets) {
            exports.Secret.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceDetail();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.service = exports.Service.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.secrets.push(exports.Secret.decode(reader, reader.uint32()));
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
            service: isSet(object.service) ? exports.Service.fromJSON(object.service) : undefined,
            secrets: Array.isArray(object === null || object === void 0 ? void 0 : object.secrets) ? object.secrets.map((e) => exports.Secret.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.service !== undefined) {
            obj.service = exports.Service.toJSON(message.service);
        }
        if ((_a = message.secrets) === null || _a === void 0 ? void 0 : _a.length) {
            obj.secrets = message.secrets.map((e) => exports.Secret.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ServiceDetail.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseServiceDetail();
        message.service = (object.service !== undefined && object.service !== null)
            ? exports.Service.fromPartial(object.service)
            : undefined;
        message.secrets = ((_a = object.secrets) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Secret.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSecret() {
    return { id: "", secret: "", lastUsedAt: 0, active: false };
}
exports.Secret = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.secret !== "") {
            writer.uint32(18).string(message.secret);
        }
        if (message.lastUsedAt !== 0) {
            writer.uint32(24).int64(message.lastUsedAt);
        }
        if (message.active === true) {
            writer.uint32(32).bool(message.active);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSecret();
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
                    message.secret = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.lastUsedAt = longToNumber(reader.int64());
                    continue;
                case 4:
                    if (tag !== 32) {
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
            secret: isSet(object.secret) ? String(object.secret) : "",
            lastUsedAt: isSet(object.lastUsedAt) ? Number(object.lastUsedAt) : 0,
            active: isSet(object.active) ? Boolean(object.active) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.secret !== "") {
            obj.secret = message.secret;
        }
        if (message.lastUsedAt !== 0) {
            obj.lastUsedAt = Math.round(message.lastUsedAt);
        }
        if (message.active === true) {
            obj.active = message.active;
        }
        return obj;
    },
    create(base) {
        return exports.Secret.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseSecret();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.secret = (_b = object.secret) !== null && _b !== void 0 ? _b : "";
        message.lastUsedAt = (_c = object.lastUsedAt) !== null && _c !== void 0 ? _c : 0;
        message.active = (_d = object.active) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
function createBasePasskey() {
    return {
        id: "",
        ownerId: "",
        ownerName: "",
        identifier: "",
        createdAt: 0,
        lastUsedAt: undefined,
        ownerEmail: "",
        name: "",
    };
}
exports.Passkey = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.ownerId !== "") {
            writer.uint32(18).string(message.ownerId);
        }
        if (message.ownerName !== "") {
            writer.uint32(26).string(message.ownerName);
        }
        if (message.identifier !== "") {
            writer.uint32(34).string(message.identifier);
        }
        if (message.createdAt !== 0) {
            writer.uint32(40).int64(message.createdAt);
        }
        if (message.lastUsedAt !== undefined) {
            writer.uint32(48).int64(message.lastUsedAt);
        }
        if (message.ownerEmail !== "") {
            writer.uint32(58).string(message.ownerEmail);
        }
        if (message.name !== "") {
            writer.uint32(66).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasskey();
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
                    message.ownerId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.ownerName = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.identifier = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.createdAt = longToNumber(reader.int64());
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.lastUsedAt = longToNumber(reader.int64());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.ownerEmail = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
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
            ownerId: isSet(object.ownerId) ? String(object.ownerId) : "",
            ownerName: isSet(object.ownerName) ? String(object.ownerName) : "",
            identifier: isSet(object.identifier) ? String(object.identifier) : "",
            createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
            lastUsedAt: isSet(object.lastUsedAt) ? Number(object.lastUsedAt) : undefined,
            ownerEmail: isSet(object.ownerEmail) ? String(object.ownerEmail) : "",
            name: isSet(object.name) ? String(object.name) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.ownerId !== "") {
            obj.ownerId = message.ownerId;
        }
        if (message.ownerName !== "") {
            obj.ownerName = message.ownerName;
        }
        if (message.identifier !== "") {
            obj.identifier = message.identifier;
        }
        if (message.createdAt !== 0) {
            obj.createdAt = Math.round(message.createdAt);
        }
        if (message.lastUsedAt !== undefined) {
            obj.lastUsedAt = Math.round(message.lastUsedAt);
        }
        if (message.ownerEmail !== "") {
            obj.ownerEmail = message.ownerEmail;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
    create(base) {
        return exports.Passkey.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBasePasskey();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.ownerId = (_b = object.ownerId) !== null && _b !== void 0 ? _b : "";
        message.ownerName = (_c = object.ownerName) !== null && _c !== void 0 ? _c : "";
        message.identifier = (_d = object.identifier) !== null && _d !== void 0 ? _d : "";
        message.createdAt = (_e = object.createdAt) !== null && _e !== void 0 ? _e : 0;
        message.lastUsedAt = (_f = object.lastUsedAt) !== null && _f !== void 0 ? _f : undefined;
        message.ownerEmail = (_g = object.ownerEmail) !== null && _g !== void 0 ? _g : "";
        message.name = (_h = object.name) !== null && _h !== void 0 ? _h : "";
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

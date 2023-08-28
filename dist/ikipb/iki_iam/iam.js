"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secret = exports.Service = exports.Group = exports.User = exports.entityTypeToJSON = exports.entityTypeFromJSON = exports.EntityType = exports.protobufPackage = void 0;
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
        groupOwner: false,
        groupAdmin: false,
        groupUser: false,
        roles: [],
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
        if (message.groupOwner === true) {
            writer.uint32(40).bool(message.groupOwner);
        }
        if (message.groupAdmin === true) {
            writer.uint32(48).bool(message.groupAdmin);
        }
        if (message.groupUser === true) {
            writer.uint32(56).bool(message.groupUser);
        }
        for (const v of message.roles) {
            writer.uint32(66).string(v);
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
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.groupOwner = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.groupAdmin = reader.bool();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.groupUser = reader.bool();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.roles.push(reader.string());
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
            groupOwner: isSet(object.groupOwner) ? Boolean(object.groupOwner) : false,
            groupAdmin: isSet(object.groupAdmin) ? Boolean(object.groupAdmin) : false,
            groupUser: isSet(object.groupUser) ? Boolean(object.groupUser) : false,
            roles: Array.isArray(object === null || object === void 0 ? void 0 : object.roles) ? object.roles.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
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
        if (message.groupOwner === true) {
            obj.groupOwner = message.groupOwner;
        }
        if (message.groupAdmin === true) {
            obj.groupAdmin = message.groupAdmin;
        }
        if (message.groupUser === true) {
            obj.groupUser = message.groupUser;
        }
        if ((_a = message.roles) === null || _a === void 0 ? void 0 : _a.length) {
            obj.roles = message.roles;
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
        message.groupOwner = (_e = object.groupOwner) !== null && _e !== void 0 ? _e : false;
        message.groupAdmin = (_f = object.groupAdmin) !== null && _f !== void 0 ? _f : false;
        message.groupUser = (_g = object.groupUser) !== null && _g !== void 0 ? _g : false;
        message.roles = ((_h = object.roles) === null || _h === void 0 ? void 0 : _h.map((e) => e)) || [];
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
function createBaseService() {
    return { id: "", clientId: "", secrets: [], name: "" };
}
exports.Service = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.clientId !== "") {
            writer.uint32(18).string(message.clientId);
        }
        for (const v of message.secrets) {
            exports.Secret.encode(v, writer.uint32(26).fork()).ldelim();
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
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.secrets.push(exports.Secret.decode(reader, reader.uint32()));
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
            secrets: Array.isArray(object === null || object === void 0 ? void 0 : object.secrets) ? object.secrets.map((e) => exports.Secret.fromJSON(e)) : [],
            name: isSet(object.name) ? String(object.name) : "",
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.clientId !== "") {
            obj.clientId = message.clientId;
        }
        if ((_a = message.secrets) === null || _a === void 0 ? void 0 : _a.length) {
            obj.secrets = message.secrets.map((e) => exports.Secret.toJSON(e));
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
        var _a, _b, _c, _d;
        const message = createBaseService();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.clientId = (_b = object.clientId) !== null && _b !== void 0 ? _b : "";
        message.secrets = ((_c = object.secrets) === null || _c === void 0 ? void 0 : _c.map((e) => exports.Secret.fromPartial(e))) || [];
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
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

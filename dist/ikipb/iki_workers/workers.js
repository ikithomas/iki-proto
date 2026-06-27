"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryWork = exports.CpuWork = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "workers";
function createBaseCpuWork() {
    return { length: 0 };
}
exports.CpuWork = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.length !== 0) {
            writer.uint32(8).int64(message.length);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCpuWork();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.length = longToNumber(reader.int64());
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
        return { length: isSet(object.length) ? Number(object.length) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.length !== 0) {
            obj.length = Math.round(message.length);
        }
        return obj;
    },
    create(base) {
        return exports.CpuWork.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCpuWork();
        message.length = (_a = object.length) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseMemoryWork() {
    return { length: 0 };
}
exports.MemoryWork = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.length !== 0) {
            writer.uint32(8).int64(message.length);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMemoryWork();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.length = longToNumber(reader.int64());
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
        return { length: isSet(object.length) ? Number(object.length) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.length !== 0) {
            obj.length = Math.round(message.length);
        }
        return obj;
    },
    create(base) {
        return exports.MemoryWork.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMemoryWork();
        message.length = (_a = object.length) !== null && _a !== void 0 ? _a : 0;
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

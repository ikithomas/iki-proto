import _m0 from "protobufjs/minimal";
import { EntityType } from "../iki_iam/iam";
export declare const protobufPackage = "iam";
/**
 * //////////////////////////////////////////////////////////////////////////////
 * Events
 * ////
 */
export interface EventEntity {
    type: EventEntity_EventType;
    origin: string;
    entityId: string;
    entityName: string;
    entityType: EntityType;
    content: EventEntity_Content | undefined;
}
export declare enum EventEntity_EventType {
    EVENT_TYPE_UNSPECIFIED = 0,
    EVENT_TYPE_ENTITY_REFREESH_TOKEN = 1,
    EVENT_TYPE_ENTITY_LOGIN = 2,
    EVENT_TYPE_ENTITY_SIGNOUT = 3,
    UNRECOGNIZED = -1
}
export declare function eventEntity_EventTypeFromJSON(object: any): EventEntity_EventType;
export declare function eventEntity_EventTypeToJSON(object: EventEntity_EventType): string;
export interface EventEntity_Content {
    refreshToken: EventEntity_Content_RefreshToken | undefined;
    login: EventEntity_Content_Login | undefined;
    signout: EventEntity_Content_Signout | undefined;
}
export interface EventEntity_Content_RefreshToken {
    result: EventEntity_Content_RefreshToken_Result;
    message: string;
}
export declare enum EventEntity_Content_RefreshToken_Result {
    RESULT_UNSPECIFIED = 0,
    RESULT_SUCCESS = 1,
    RESULT_FAILED = 2,
    UNRECOGNIZED = -1
}
export declare function eventEntity_Content_RefreshToken_ResultFromJSON(object: any): EventEntity_Content_RefreshToken_Result;
export declare function eventEntity_Content_RefreshToken_ResultToJSON(object: EventEntity_Content_RefreshToken_Result): string;
export interface EventEntity_Content_Login {
    result: EventEntity_Content_Login_Result;
    message: string;
}
export declare enum EventEntity_Content_Login_Result {
    RESULT_UNSPECIFIED = 0,
    RESULT_SUCCESS = 1,
    RESULT_FAILED = 2,
    UNRECOGNIZED = -1
}
export declare function eventEntity_Content_Login_ResultFromJSON(object: any): EventEntity_Content_Login_Result;
export declare function eventEntity_Content_Login_ResultToJSON(object: EventEntity_Content_Login_Result): string;
export interface EventEntity_Content_Signout {
    result: EventEntity_Content_Signout_Result;
    message: string;
}
export declare enum EventEntity_Content_Signout_Result {
    RESULT_UNSPECIFIED = 0,
    RESULT_SUCCESS = 1,
    RESULT_FAILED = 2,
    UNRECOGNIZED = -1
}
export declare function eventEntity_Content_Signout_ResultFromJSON(object: any): EventEntity_Content_Signout_Result;
export declare function eventEntity_Content_Signout_ResultToJSON(object: EventEntity_Content_Signout_Result): string;
export declare const EventEntity: {
    encode(message: EventEntity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventEntity;
    fromJSON(object: any): EventEntity;
    toJSON(message: EventEntity): unknown;
    create<I extends {
        type?: EventEntity_EventType;
        origin?: string;
        entityId?: string;
        entityName?: string;
        entityType?: EntityType;
        content?: {
            refreshToken?: {
                result?: EventEntity_Content_RefreshToken_Result;
                message?: string;
            };
            login?: {
                result?: EventEntity_Content_Login_Result;
                message?: string;
            };
            signout?: {
                result?: EventEntity_Content_Signout_Result;
                message?: string;
            };
        };
    } & {
        type?: EventEntity_EventType;
        origin?: string;
        entityId?: string;
        entityName?: string;
        entityType?: EntityType;
        content?: {
            refreshToken?: {
                result?: EventEntity_Content_RefreshToken_Result;
                message?: string;
            };
            login?: {
                result?: EventEntity_Content_Login_Result;
                message?: string;
            };
            signout?: {
                result?: EventEntity_Content_Signout_Result;
                message?: string;
            };
        } & {
            refreshToken?: {
                result?: EventEntity_Content_RefreshToken_Result;
                message?: string;
            } & {
                result?: EventEntity_Content_RefreshToken_Result;
                message?: string;
            } & { [K in Exclude<keyof I["content"]["refreshToken"], keyof EventEntity_Content_RefreshToken>]: never; };
            login?: {
                result?: EventEntity_Content_Login_Result;
                message?: string;
            } & {
                result?: EventEntity_Content_Login_Result;
                message?: string;
            } & { [K_1 in Exclude<keyof I["content"]["login"], keyof EventEntity_Content_Login>]: never; };
            signout?: {
                result?: EventEntity_Content_Signout_Result;
                message?: string;
            } & {
                result?: EventEntity_Content_Signout_Result;
                message?: string;
            } & { [K_2 in Exclude<keyof I["content"]["signout"], keyof EventEntity_Content_Signout>]: never; };
        } & { [K_3 in Exclude<keyof I["content"], keyof EventEntity_Content>]: never; };
    } & { [K_4 in Exclude<keyof I, keyof EventEntity>]: never; }>(base?: I): EventEntity;
    fromPartial<I_1 extends {
        type?: EventEntity_EventType;
        origin?: string;
        entityId?: string;
        entityName?: string;
        entityType?: EntityType;
        content?: {
            refreshToken?: {
                result?: EventEntity_Content_RefreshToken_Result;
                message?: string;
            };
            login?: {
                result?: EventEntity_Content_Login_Result;
                message?: string;
            };
            signout?: {
                result?: EventEntity_Content_Signout_Result;
                message?: string;
            };
        };
    } & {
        type?: EventEntity_EventType;
        origin?: string;
        entityId?: string;
        entityName?: string;
        entityType?: EntityType;
        content?: {
            refreshToken?: {
                result?: EventEntity_Content_RefreshToken_Result;
                message?: string;
            };
            login?: {
                result?: EventEntity_Content_Login_Result;
                message?: string;
            };
            signout?: {
                result?: EventEntity_Content_Signout_Result;
                message?: string;
            };
        } & {
            refreshToken?: {
                result?: EventEntity_Content_RefreshToken_Result;
                message?: string;
            } & {
                result?: EventEntity_Content_RefreshToken_Result;
                message?: string;
            } & { [K_5 in Exclude<keyof I_1["content"]["refreshToken"], keyof EventEntity_Content_RefreshToken>]: never; };
            login?: {
                result?: EventEntity_Content_Login_Result;
                message?: string;
            } & {
                result?: EventEntity_Content_Login_Result;
                message?: string;
            } & { [K_6 in Exclude<keyof I_1["content"]["login"], keyof EventEntity_Content_Login>]: never; };
            signout?: {
                result?: EventEntity_Content_Signout_Result;
                message?: string;
            } & {
                result?: EventEntity_Content_Signout_Result;
                message?: string;
            } & { [K_7 in Exclude<keyof I_1["content"]["signout"], keyof EventEntity_Content_Signout>]: never; };
        } & { [K_8 in Exclude<keyof I_1["content"], keyof EventEntity_Content>]: never; };
    } & { [K_9 in Exclude<keyof I_1, keyof EventEntity>]: never; }>(object: I_1): EventEntity;
};
export declare const EventEntity_Content: {
    encode(message: EventEntity_Content, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventEntity_Content;
    fromJSON(object: any): EventEntity_Content;
    toJSON(message: EventEntity_Content): unknown;
    create<I extends {
        refreshToken?: {
            result?: EventEntity_Content_RefreshToken_Result;
            message?: string;
        };
        login?: {
            result?: EventEntity_Content_Login_Result;
            message?: string;
        };
        signout?: {
            result?: EventEntity_Content_Signout_Result;
            message?: string;
        };
    } & {
        refreshToken?: {
            result?: EventEntity_Content_RefreshToken_Result;
            message?: string;
        } & {
            result?: EventEntity_Content_RefreshToken_Result;
            message?: string;
        } & { [K in Exclude<keyof I["refreshToken"], keyof EventEntity_Content_RefreshToken>]: never; };
        login?: {
            result?: EventEntity_Content_Login_Result;
            message?: string;
        } & {
            result?: EventEntity_Content_Login_Result;
            message?: string;
        } & { [K_1 in Exclude<keyof I["login"], keyof EventEntity_Content_Login>]: never; };
        signout?: {
            result?: EventEntity_Content_Signout_Result;
            message?: string;
        } & {
            result?: EventEntity_Content_Signout_Result;
            message?: string;
        } & { [K_2 in Exclude<keyof I["signout"], keyof EventEntity_Content_Signout>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof EventEntity_Content>]: never; }>(base?: I): EventEntity_Content;
    fromPartial<I_1 extends {
        refreshToken?: {
            result?: EventEntity_Content_RefreshToken_Result;
            message?: string;
        };
        login?: {
            result?: EventEntity_Content_Login_Result;
            message?: string;
        };
        signout?: {
            result?: EventEntity_Content_Signout_Result;
            message?: string;
        };
    } & {
        refreshToken?: {
            result?: EventEntity_Content_RefreshToken_Result;
            message?: string;
        } & {
            result?: EventEntity_Content_RefreshToken_Result;
            message?: string;
        } & { [K_4 in Exclude<keyof I_1["refreshToken"], keyof EventEntity_Content_RefreshToken>]: never; };
        login?: {
            result?: EventEntity_Content_Login_Result;
            message?: string;
        } & {
            result?: EventEntity_Content_Login_Result;
            message?: string;
        } & { [K_5 in Exclude<keyof I_1["login"], keyof EventEntity_Content_Login>]: never; };
        signout?: {
            result?: EventEntity_Content_Signout_Result;
            message?: string;
        } & {
            result?: EventEntity_Content_Signout_Result;
            message?: string;
        } & { [K_6 in Exclude<keyof I_1["signout"], keyof EventEntity_Content_Signout>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof EventEntity_Content>]: never; }>(object: I_1): EventEntity_Content;
};
export declare const EventEntity_Content_RefreshToken: {
    encode(message: EventEntity_Content_RefreshToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventEntity_Content_RefreshToken;
    fromJSON(object: any): EventEntity_Content_RefreshToken;
    toJSON(message: EventEntity_Content_RefreshToken): unknown;
    create<I extends {
        result?: EventEntity_Content_RefreshToken_Result;
        message?: string;
    } & {
        result?: EventEntity_Content_RefreshToken_Result;
        message?: string;
    } & { [K in Exclude<keyof I, keyof EventEntity_Content_RefreshToken>]: never; }>(base?: I): EventEntity_Content_RefreshToken;
    fromPartial<I_1 extends {
        result?: EventEntity_Content_RefreshToken_Result;
        message?: string;
    } & {
        result?: EventEntity_Content_RefreshToken_Result;
        message?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof EventEntity_Content_RefreshToken>]: never; }>(object: I_1): EventEntity_Content_RefreshToken;
};
export declare const EventEntity_Content_Login: {
    encode(message: EventEntity_Content_Login, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventEntity_Content_Login;
    fromJSON(object: any): EventEntity_Content_Login;
    toJSON(message: EventEntity_Content_Login): unknown;
    create<I extends {
        result?: EventEntity_Content_Login_Result;
        message?: string;
    } & {
        result?: EventEntity_Content_Login_Result;
        message?: string;
    } & { [K in Exclude<keyof I, keyof EventEntity_Content_Login>]: never; }>(base?: I): EventEntity_Content_Login;
    fromPartial<I_1 extends {
        result?: EventEntity_Content_Login_Result;
        message?: string;
    } & {
        result?: EventEntity_Content_Login_Result;
        message?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof EventEntity_Content_Login>]: never; }>(object: I_1): EventEntity_Content_Login;
};
export declare const EventEntity_Content_Signout: {
    encode(message: EventEntity_Content_Signout, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventEntity_Content_Signout;
    fromJSON(object: any): EventEntity_Content_Signout;
    toJSON(message: EventEntity_Content_Signout): unknown;
    create<I extends {
        result?: EventEntity_Content_Signout_Result;
        message?: string;
    } & {
        result?: EventEntity_Content_Signout_Result;
        message?: string;
    } & { [K in Exclude<keyof I, keyof EventEntity_Content_Signout>]: never; }>(base?: I): EventEntity_Content_Signout;
    fromPartial<I_1 extends {
        result?: EventEntity_Content_Signout_Result;
        message?: string;
    } & {
        result?: EventEntity_Content_Signout_Result;
        message?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof EventEntity_Content_Signout>]: never; }>(object: I_1): EventEntity_Content_Signout;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};

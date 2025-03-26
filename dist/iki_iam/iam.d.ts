import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "iam";
export declare enum EntityType {
    ENTITY_TYPE_UNSPECIFIED = 0,
    ENTITY_TYPE_USER = 1,
    ENTITY_TYPE_SERVICE = 2,
    UNRECOGNIZED = -1
}
export declare function entityTypeFromJSON(object: any): EntityType;
export declare function entityTypeToJSON(object: EntityType): string;
/** User is a human user */
export interface User {
    id: string;
    email: string;
    givenName: string;
    familyName: string;
    roles: Group[];
    active: boolean;
    lastLoginAt: number;
    lastActivityAt: number;
}
export interface Group {
    id: string;
    name: string;
}
/** Service is a microservice */
export interface Service {
    /** Internal ID of the service. */
    id: string;
    /** Client ID of the service. Used for authentication. */
    clientId: string;
    /** secret to authenticate to. */
    secrets: Secret[];
    /** Friendly name */
    name: string;
}
export interface Secret {
    id: string;
    secret: string;
    lastUsedAt: number;
    active: boolean;
}
export interface EventUserLogin {
    ikiUserId: string;
    email: string;
}
export declare const User: {
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    create<I extends {
        id?: string;
        email?: string;
        givenName?: string;
        familyName?: string;
        roles?: {
            id?: string;
            name?: string;
        }[];
        active?: boolean;
        lastLoginAt?: number;
        lastActivityAt?: number;
    } & {
        id?: string;
        email?: string;
        givenName?: string;
        familyName?: string;
        roles?: {
            id?: string;
            name?: string;
        }[] & ({
            id?: string;
            name?: string;
        } & {
            id?: string;
            name?: string;
        } & { [K in Exclude<keyof I["roles"][number], keyof Group>]: never; })[] & { [K_1 in Exclude<keyof I["roles"], keyof {
            id?: string;
            name?: string;
        }[]>]: never; };
        active?: boolean;
        lastLoginAt?: number;
        lastActivityAt?: number;
    } & { [K_2 in Exclude<keyof I, keyof User>]: never; }>(base?: I): User;
    fromPartial<I_1 extends {
        id?: string;
        email?: string;
        givenName?: string;
        familyName?: string;
        roles?: {
            id?: string;
            name?: string;
        }[];
        active?: boolean;
        lastLoginAt?: number;
        lastActivityAt?: number;
    } & {
        id?: string;
        email?: string;
        givenName?: string;
        familyName?: string;
        roles?: {
            id?: string;
            name?: string;
        }[] & ({
            id?: string;
            name?: string;
        } & {
            id?: string;
            name?: string;
        } & { [K_3 in Exclude<keyof I_1["roles"][number], keyof Group>]: never; })[] & { [K_4 in Exclude<keyof I_1["roles"], keyof {
            id?: string;
            name?: string;
        }[]>]: never; };
        active?: boolean;
        lastLoginAt?: number;
        lastActivityAt?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof User>]: never; }>(object: I_1): User;
};
export declare const Group: {
    encode(message: Group, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Group;
    fromJSON(object: any): Group;
    toJSON(message: Group): unknown;
    create<I extends {
        id?: string;
        name?: string;
    } & {
        id?: string;
        name?: string;
    } & { [K in Exclude<keyof I, keyof Group>]: never; }>(base?: I): Group;
    fromPartial<I_1 extends {
        id?: string;
        name?: string;
    } & {
        id?: string;
        name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof Group>]: never; }>(object: I_1): Group;
};
export declare const Service: {
    encode(message: Service, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Service;
    fromJSON(object: any): Service;
    toJSON(message: Service): unknown;
    create<I extends {
        id?: string;
        clientId?: string;
        secrets?: {
            id?: string;
            secret?: string;
            lastUsedAt?: number;
            active?: boolean;
        }[];
        name?: string;
    } & {
        id?: string;
        clientId?: string;
        secrets?: {
            id?: string;
            secret?: string;
            lastUsedAt?: number;
            active?: boolean;
        }[] & ({
            id?: string;
            secret?: string;
            lastUsedAt?: number;
            active?: boolean;
        } & {
            id?: string;
            secret?: string;
            lastUsedAt?: number;
            active?: boolean;
        } & { [K in Exclude<keyof I["secrets"][number], keyof Secret>]: never; })[] & { [K_1 in Exclude<keyof I["secrets"], keyof {
            id?: string;
            secret?: string;
            lastUsedAt?: number;
            active?: boolean;
        }[]>]: never; };
        name?: string;
    } & { [K_2 in Exclude<keyof I, keyof Service>]: never; }>(base?: I): Service;
    fromPartial<I_1 extends {
        id?: string;
        clientId?: string;
        secrets?: {
            id?: string;
            secret?: string;
            lastUsedAt?: number;
            active?: boolean;
        }[];
        name?: string;
    } & {
        id?: string;
        clientId?: string;
        secrets?: {
            id?: string;
            secret?: string;
            lastUsedAt?: number;
            active?: boolean;
        }[] & ({
            id?: string;
            secret?: string;
            lastUsedAt?: number;
            active?: boolean;
        } & {
            id?: string;
            secret?: string;
            lastUsedAt?: number;
            active?: boolean;
        } & { [K_3 in Exclude<keyof I_1["secrets"][number], keyof Secret>]: never; })[] & { [K_4 in Exclude<keyof I_1["secrets"], keyof {
            id?: string;
            secret?: string;
            lastUsedAt?: number;
            active?: boolean;
        }[]>]: never; };
        name?: string;
    } & { [K_5 in Exclude<keyof I_1, keyof Service>]: never; }>(object: I_1): Service;
};
export declare const Secret: {
    encode(message: Secret, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Secret;
    fromJSON(object: any): Secret;
    toJSON(message: Secret): unknown;
    create<I extends {
        id?: string;
        secret?: string;
        lastUsedAt?: number;
        active?: boolean;
    } & {
        id?: string;
        secret?: string;
        lastUsedAt?: number;
        active?: boolean;
    } & { [K in Exclude<keyof I, keyof Secret>]: never; }>(base?: I): Secret;
    fromPartial<I_1 extends {
        id?: string;
        secret?: string;
        lastUsedAt?: number;
        active?: boolean;
    } & {
        id?: string;
        secret?: string;
        lastUsedAt?: number;
        active?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof Secret>]: never; }>(object: I_1): Secret;
};
export declare const EventUserLogin: {
    encode(message: EventUserLogin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUserLogin;
    fromJSON(object: any): EventUserLogin;
    toJSON(message: EventUserLogin): unknown;
    create<I extends {
        ikiUserId?: string;
        email?: string;
    } & {
        ikiUserId?: string;
        email?: string;
    } & { [K in Exclude<keyof I, keyof EventUserLogin>]: never; }>(base?: I): EventUserLogin;
    fromPartial<I_1 extends {
        ikiUserId?: string;
        email?: string;
    } & {
        ikiUserId?: string;
        email?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof EventUserLogin>]: never; }>(object: I_1): EventUserLogin;
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

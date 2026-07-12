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
    active: boolean;
    lastLoginAt?: number | undefined;
    lastActivityAt?: number | undefined;
    scimLastSyncedAt?: number | undefined;
}
export interface UserDetail {
    user: User | undefined;
    groups: Group[];
    /** Roles assigned directly to the user (via account_iam_role). */
    directRoles: Role[];
    /** Union of all roles from group memberships and direct assignments. */
    effectiveRoles: Role[];
}
export interface Permission {
    id: string;
    name: string;
    externalId: string;
}
export interface Role {
    id: string;
    name: string;
    permissions: Permission[];
}
export interface Group {
    id: string;
    name: string;
    roles: Role[];
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
        active?: boolean;
        lastLoginAt?: number | undefined;
        lastActivityAt?: number | undefined;
        scimLastSyncedAt?: number | undefined;
    } & {
        id?: string;
        email?: string;
        givenName?: string;
        familyName?: string;
        active?: boolean;
        lastLoginAt?: number | undefined;
        lastActivityAt?: number | undefined;
        scimLastSyncedAt?: number | undefined;
    } & { [K in Exclude<keyof I, keyof User>]: never; }>(base?: I): User;
    fromPartial<I_1 extends {
        id?: string;
        email?: string;
        givenName?: string;
        familyName?: string;
        active?: boolean;
        lastLoginAt?: number | undefined;
        lastActivityAt?: number | undefined;
        scimLastSyncedAt?: number | undefined;
    } & {
        id?: string;
        email?: string;
        givenName?: string;
        familyName?: string;
        active?: boolean;
        lastLoginAt?: number | undefined;
        lastActivityAt?: number | undefined;
        scimLastSyncedAt?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof User>]: never; }>(object: I_1): User;
};
export declare const UserDetail: {
    encode(message: UserDetail, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserDetail;
    fromJSON(object: any): UserDetail;
    toJSON(message: UserDetail): unknown;
    create<I extends {
        user?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number | undefined;
            lastActivityAt?: number | undefined;
            scimLastSyncedAt?: number | undefined;
        };
        groups?: {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[];
        }[];
        directRoles?: {
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        }[];
        effectiveRoles?: {
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        }[];
    } & {
        user?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number | undefined;
            lastActivityAt?: number | undefined;
            scimLastSyncedAt?: number | undefined;
        } & {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number | undefined;
            lastActivityAt?: number | undefined;
            scimLastSyncedAt?: number | undefined;
        } & { [K in Exclude<keyof I["user"], keyof User>]: never; };
        groups?: {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[];
        }[] & ({
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[];
        } & {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[] & ({
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            } & {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[] & ({
                    id?: string;
                    name?: string;
                    externalId?: string;
                } & {
                    id?: string;
                    name?: string;
                    externalId?: string;
                } & { [K_1 in Exclude<keyof I["groups"][number]["roles"][number]["permissions"][number], keyof Permission>]: never; })[] & { [K_2 in Exclude<keyof I["groups"][number]["roles"][number]["permissions"], keyof {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[]>]: never; };
            } & { [K_3 in Exclude<keyof I["groups"][number]["roles"][number], keyof Role>]: never; })[] & { [K_4 in Exclude<keyof I["groups"][number]["roles"], keyof {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[]>]: never; };
        } & { [K_5 in Exclude<keyof I["groups"][number], keyof Group>]: never; })[] & { [K_6 in Exclude<keyof I["groups"], keyof {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[];
        }[]>]: never; };
        directRoles?: {
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        }[] & ({
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        } & {
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[] & ({
                id?: string;
                name?: string;
                externalId?: string;
            } & {
                id?: string;
                name?: string;
                externalId?: string;
            } & { [K_7 in Exclude<keyof I["directRoles"][number]["permissions"][number], keyof Permission>]: never; })[] & { [K_8 in Exclude<keyof I["directRoles"][number]["permissions"], keyof {
                id?: string;
                name?: string;
                externalId?: string;
            }[]>]: never; };
        } & { [K_9 in Exclude<keyof I["directRoles"][number], keyof Role>]: never; })[] & { [K_10 in Exclude<keyof I["directRoles"], keyof {
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        }[]>]: never; };
        effectiveRoles?: {
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        }[] & ({
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        } & {
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[] & ({
                id?: string;
                name?: string;
                externalId?: string;
            } & {
                id?: string;
                name?: string;
                externalId?: string;
            } & { [K_11 in Exclude<keyof I["effectiveRoles"][number]["permissions"][number], keyof Permission>]: never; })[] & { [K_12 in Exclude<keyof I["effectiveRoles"][number]["permissions"], keyof {
                id?: string;
                name?: string;
                externalId?: string;
            }[]>]: never; };
        } & { [K_13 in Exclude<keyof I["effectiveRoles"][number], keyof Role>]: never; })[] & { [K_14 in Exclude<keyof I["effectiveRoles"], keyof {
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        }[]>]: never; };
    } & { [K_15 in Exclude<keyof I, keyof UserDetail>]: never; }>(base?: I): UserDetail;
    fromPartial<I_1 extends {
        user?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number | undefined;
            lastActivityAt?: number | undefined;
            scimLastSyncedAt?: number | undefined;
        };
        groups?: {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[];
        }[];
        directRoles?: {
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        }[];
        effectiveRoles?: {
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        }[];
    } & {
        user?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number | undefined;
            lastActivityAt?: number | undefined;
            scimLastSyncedAt?: number | undefined;
        } & {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number | undefined;
            lastActivityAt?: number | undefined;
            scimLastSyncedAt?: number | undefined;
        } & { [K_16 in Exclude<keyof I_1["user"], keyof User>]: never; };
        groups?: {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[];
        }[] & ({
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[];
        } & {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[] & ({
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            } & {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[] & ({
                    id?: string;
                    name?: string;
                    externalId?: string;
                } & {
                    id?: string;
                    name?: string;
                    externalId?: string;
                } & { [K_17 in Exclude<keyof I_1["groups"][number]["roles"][number]["permissions"][number], keyof Permission>]: never; })[] & { [K_18 in Exclude<keyof I_1["groups"][number]["roles"][number]["permissions"], keyof {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[]>]: never; };
            } & { [K_19 in Exclude<keyof I_1["groups"][number]["roles"][number], keyof Role>]: never; })[] & { [K_20 in Exclude<keyof I_1["groups"][number]["roles"], keyof {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[]>]: never; };
        } & { [K_21 in Exclude<keyof I_1["groups"][number], keyof Group>]: never; })[] & { [K_22 in Exclude<keyof I_1["groups"], keyof {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[];
        }[]>]: never; };
        directRoles?: {
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        }[] & ({
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        } & {
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[] & ({
                id?: string;
                name?: string;
                externalId?: string;
            } & {
                id?: string;
                name?: string;
                externalId?: string;
            } & { [K_23 in Exclude<keyof I_1["directRoles"][number]["permissions"][number], keyof Permission>]: never; })[] & { [K_24 in Exclude<keyof I_1["directRoles"][number]["permissions"], keyof {
                id?: string;
                name?: string;
                externalId?: string;
            }[]>]: never; };
        } & { [K_25 in Exclude<keyof I_1["directRoles"][number], keyof Role>]: never; })[] & { [K_26 in Exclude<keyof I_1["directRoles"], keyof {
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        }[]>]: never; };
        effectiveRoles?: {
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        }[] & ({
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        } & {
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[] & ({
                id?: string;
                name?: string;
                externalId?: string;
            } & {
                id?: string;
                name?: string;
                externalId?: string;
            } & { [K_27 in Exclude<keyof I_1["effectiveRoles"][number]["permissions"][number], keyof Permission>]: never; })[] & { [K_28 in Exclude<keyof I_1["effectiveRoles"][number]["permissions"], keyof {
                id?: string;
                name?: string;
                externalId?: string;
            }[]>]: never; };
        } & { [K_29 in Exclude<keyof I_1["effectiveRoles"][number], keyof Role>]: never; })[] & { [K_30 in Exclude<keyof I_1["effectiveRoles"], keyof {
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        }[]>]: never; };
    } & { [K_31 in Exclude<keyof I_1, keyof UserDetail>]: never; }>(object: I_1): UserDetail;
};
export declare const Permission: {
    encode(message: Permission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Permission;
    fromJSON(object: any): Permission;
    toJSON(message: Permission): unknown;
    create<I extends {
        id?: string;
        name?: string;
        externalId?: string;
    } & {
        id?: string;
        name?: string;
        externalId?: string;
    } & { [K in Exclude<keyof I, keyof Permission>]: never; }>(base?: I): Permission;
    fromPartial<I_1 extends {
        id?: string;
        name?: string;
        externalId?: string;
    } & {
        id?: string;
        name?: string;
        externalId?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof Permission>]: never; }>(object: I_1): Permission;
};
export declare const Role: {
    encode(message: Role, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Role;
    fromJSON(object: any): Role;
    toJSON(message: Role): unknown;
    create<I extends {
        id?: string;
        name?: string;
        permissions?: {
            id?: string;
            name?: string;
            externalId?: string;
        }[];
    } & {
        id?: string;
        name?: string;
        permissions?: {
            id?: string;
            name?: string;
            externalId?: string;
        }[] & ({
            id?: string;
            name?: string;
            externalId?: string;
        } & {
            id?: string;
            name?: string;
            externalId?: string;
        } & { [K in Exclude<keyof I["permissions"][number], keyof Permission>]: never; })[] & { [K_1 in Exclude<keyof I["permissions"], keyof {
            id?: string;
            name?: string;
            externalId?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof Role>]: never; }>(base?: I): Role;
    fromPartial<I_1 extends {
        id?: string;
        name?: string;
        permissions?: {
            id?: string;
            name?: string;
            externalId?: string;
        }[];
    } & {
        id?: string;
        name?: string;
        permissions?: {
            id?: string;
            name?: string;
            externalId?: string;
        }[] & ({
            id?: string;
            name?: string;
            externalId?: string;
        } & {
            id?: string;
            name?: string;
            externalId?: string;
        } & { [K_3 in Exclude<keyof I_1["permissions"][number], keyof Permission>]: never; })[] & { [K_4 in Exclude<keyof I_1["permissions"], keyof {
            id?: string;
            name?: string;
            externalId?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof Role>]: never; }>(object: I_1): Role;
};
export declare const Group: {
    encode(message: Group, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Group;
    fromJSON(object: any): Group;
    toJSON(message: Group): unknown;
    create<I extends {
        id?: string;
        name?: string;
        roles?: {
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        }[];
    } & {
        id?: string;
        name?: string;
        roles?: {
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        }[] & ({
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        } & {
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[] & ({
                id?: string;
                name?: string;
                externalId?: string;
            } & {
                id?: string;
                name?: string;
                externalId?: string;
            } & { [K in Exclude<keyof I["roles"][number]["permissions"][number], keyof Permission>]: never; })[] & { [K_1 in Exclude<keyof I["roles"][number]["permissions"], keyof {
                id?: string;
                name?: string;
                externalId?: string;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["roles"][number], keyof Role>]: never; })[] & { [K_3 in Exclude<keyof I["roles"], keyof {
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, keyof Group>]: never; }>(base?: I): Group;
    fromPartial<I_1 extends {
        id?: string;
        name?: string;
        roles?: {
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        }[];
    } & {
        id?: string;
        name?: string;
        roles?: {
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        }[] & ({
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        } & {
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[] & ({
                id?: string;
                name?: string;
                externalId?: string;
            } & {
                id?: string;
                name?: string;
                externalId?: string;
            } & { [K_5 in Exclude<keyof I_1["roles"][number]["permissions"][number], keyof Permission>]: never; })[] & { [K_6 in Exclude<keyof I_1["roles"][number]["permissions"], keyof {
                id?: string;
                name?: string;
                externalId?: string;
            }[]>]: never; };
        } & { [K_7 in Exclude<keyof I_1["roles"][number], keyof Role>]: never; })[] & { [K_8 in Exclude<keyof I_1["roles"], keyof {
            id?: string;
            name?: string;
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, keyof Group>]: never; }>(object: I_1): Group;
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

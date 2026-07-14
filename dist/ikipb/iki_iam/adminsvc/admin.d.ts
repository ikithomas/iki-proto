import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Group, GroupDetail, Passkey, Permission, PermissionDetail, Role, RoleDetail, Service, ServiceDetail, User, UserDetail } from "../iam";
export declare const protobufPackage = "adminsvc";
export interface ListPermissionsRequest {
}
export interface ListPermissionsResponse {
    permissions: Permission[];
}
export interface GetPermissionRequest {
    id: string;
}
export interface GetPermissionResponse {
    permission: PermissionDetail | undefined;
}
export interface CreatePermissionRequest {
    name: string;
    externalId: string;
}
export interface CreatePermissionResponse {
    permission: Permission | undefined;
}
export interface PatchPermissionRequest {
    id: string;
    name?: string | undefined;
    externalId?: string | undefined;
}
export interface PatchPermissionResponse {
    permission: Permission | undefined;
}
export interface DeletePermissionRequest {
    id: string;
}
export interface DeletePermissionResponse {
}
export interface ListRolesRequest {
}
export interface ListRolesResponse {
    roles: Role[];
}
export interface GetRoleRequest {
    id: string;
}
export interface GetRoleResponse {
    role: RoleDetail | undefined;
}
export interface CreateRoleRequest {
    name: string;
}
export interface CreateRoleResponse {
    role: Role | undefined;
}
export interface PatchRoleRequest {
    id: string;
    name?: string | undefined;
}
export interface PatchRoleResponse {
    role: Role | undefined;
}
export interface DeleteRoleRequest {
    id: string;
}
export interface DeleteRoleResponse {
}
export interface SetRolePermissionsRequest {
    roleId: string;
    permissionIds: string[];
}
export interface SetRolePermissionsResponse {
    role: RoleDetail | undefined;
}
export interface ListGroupsRequest {
}
export interface ListGroupsResponse {
    groups: Group[];
}
export interface GetGroupRequest {
    id: string;
}
export interface GetGroupResponse {
    group: GroupDetail | undefined;
}
export interface CreateGroupRequest {
    name: string;
}
export interface CreateGroupResponse {
    group: Group | undefined;
}
export interface PatchGroupRequest {
    id: string;
    name?: string | undefined;
}
export interface PatchGroupResponse {
    group: Group | undefined;
}
export interface DeleteGroupRequest {
    id: string;
}
export interface DeleteGroupResponse {
}
export interface SetGroupRolesRequest {
    groupId: string;
    roleIds: string[];
}
export interface SetGroupRolesResponse {
    group: GroupDetail | undefined;
}
export interface ListUsersRequest {
}
export interface ListUsersResponse {
    users: User[];
}
export interface PatchUserRequest {
    id: string;
    givenName?: string | undefined;
    familyName?: string | undefined;
    email?: string | undefined;
    active?: boolean | undefined;
}
export interface PatchUserResponse {
    user: User | undefined;
}
export interface CreateUserRequest {
    email: string;
    givenName: string;
    familyName: string;
}
export interface CreateUserResponse {
    user: User | undefined;
}
export interface GetUserRequest {
    id: string;
}
export interface GetUserResponse {
    user: UserDetail | undefined;
}
export interface DeleteUserRequest {
    id: string;
}
export interface DeleteUserResponse {
}
export interface ListGroupUsersRequest {
    groupId: string;
}
export interface ListGroupUsersResponse {
    users: User[];
}
export interface AddUserToGroupRequest {
    userId: string;
    groupId: string;
}
export interface AddUserToGroupResponse {
}
export interface RemoveUserFromGroupRequest {
    userId: string;
    groupId: string;
}
export interface RemoveUserFromGroupResponse {
}
export interface SetUserRolesRequest {
    userId: string;
    roleIds: string[];
}
export interface SetUserRolesResponse {
    user: UserDetail | undefined;
}
export interface SetUserGroupsRequest {
    userId: string;
    groupIds: string[];
}
export interface SetUserGroupsResponse {
    user: UserDetail | undefined;
}
export interface ListPasskeysRequest {
    userId?: string | undefined;
}
export interface ListPasskeysResponse {
    passkeys: Passkey[];
}
export interface DeletePasskeyRequest {
    id: string;
}
export interface DeletePasskeyResponse {
}
export interface ListServicesRequest {
}
export interface ListServicesResponse {
    services: Service[];
}
export interface GetServiceRequest {
    id: string;
}
export interface GetServiceResponse {
    service: ServiceDetail | undefined;
}
export interface CreateServiceRequest {
    name: string;
}
export interface CreateServiceResponse {
    service: Service | undefined;
}
export interface DeleteServiceRequest {
    id: string;
}
export interface DeleteServiceResponse {
}
export interface AddServiceSecretRequest {
    id: string;
}
export interface AddServiceSecretResponse {
    service: ServiceDetail | undefined;
}
export interface ActivateServiceSecretRequest {
    id: string;
}
export interface ActivateServiceSecretResponse {
}
export interface DeactivateServiceSecretRequest {
    id: string;
}
export interface DeactivateServiceSecretResponse {
}
export interface DeleteServiceSecretRequest {
    id: string;
}
export interface DeleteServiceSecretResponse {
}
export declare const ListPermissionsRequest: {
    encode(_: ListPermissionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListPermissionsRequest;
    fromJSON(_: any): ListPermissionsRequest;
    toJSON(_: ListPermissionsRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): ListPermissionsRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ListPermissionsRequest;
};
export declare const ListPermissionsResponse: {
    encode(message: ListPermissionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListPermissionsResponse;
    fromJSON(object: any): ListPermissionsResponse;
    toJSON(message: ListPermissionsResponse): unknown;
    create<I extends {
        permissions?: {
            id?: string;
            name?: string;
            externalId?: string;
        }[];
    } & {
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
    } & { [K_2 in Exclude<keyof I, "permissions">]: never; }>(base?: I): ListPermissionsResponse;
    fromPartial<I_1 extends {
        permissions?: {
            id?: string;
            name?: string;
            externalId?: string;
        }[];
    } & {
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
    } & { [K_5 in Exclude<keyof I_1, "permissions">]: never; }>(object: I_1): ListPermissionsResponse;
};
export declare const GetPermissionRequest: {
    encode(message: GetPermissionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPermissionRequest;
    fromJSON(object: any): GetPermissionRequest;
    toJSON(message: GetPermissionRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): GetPermissionRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): GetPermissionRequest;
};
export declare const GetPermissionResponse: {
    encode(message: GetPermissionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPermissionResponse;
    fromJSON(object: any): GetPermissionResponse;
    toJSON(message: GetPermissionResponse): unknown;
    create<I extends {
        permission?: {
            permission?: {
                id?: string;
                name?: string;
                externalId?: string;
            };
            roles?: {
                id?: string;
                name?: string;
            }[];
            groups?: {
                id?: string;
                name?: string;
            }[];
            users?: {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            }[];
        };
    } & {
        permission?: {
            permission?: {
                id?: string;
                name?: string;
                externalId?: string;
            };
            roles?: {
                id?: string;
                name?: string;
            }[];
            groups?: {
                id?: string;
                name?: string;
            }[];
            users?: {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            }[];
        } & {
            permission?: {
                id?: string;
                name?: string;
                externalId?: string;
            } & {
                id?: string;
                name?: string;
                externalId?: string;
            } & { [K in Exclude<keyof I["permission"]["permission"], keyof Permission>]: never; };
            roles?: {
                id?: string;
                name?: string;
            }[] & ({
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_1 in Exclude<keyof I["permission"]["roles"][number], keyof Role>]: never; })[] & { [K_2 in Exclude<keyof I["permission"]["roles"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
            groups?: {
                id?: string;
                name?: string;
            }[] & ({
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_3 in Exclude<keyof I["permission"]["groups"][number], keyof Group>]: never; })[] & { [K_4 in Exclude<keyof I["permission"]["groups"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
            users?: {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            }[] & ({
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            } & {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            } & { [K_5 in Exclude<keyof I["permission"]["users"][number], keyof User>]: never; })[] & { [K_6 in Exclude<keyof I["permission"]["users"], keyof {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            }[]>]: never; };
        } & { [K_7 in Exclude<keyof I["permission"], keyof PermissionDetail>]: never; };
    } & { [K_8 in Exclude<keyof I, "permission">]: never; }>(base?: I): GetPermissionResponse;
    fromPartial<I_1 extends {
        permission?: {
            permission?: {
                id?: string;
                name?: string;
                externalId?: string;
            };
            roles?: {
                id?: string;
                name?: string;
            }[];
            groups?: {
                id?: string;
                name?: string;
            }[];
            users?: {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            }[];
        };
    } & {
        permission?: {
            permission?: {
                id?: string;
                name?: string;
                externalId?: string;
            };
            roles?: {
                id?: string;
                name?: string;
            }[];
            groups?: {
                id?: string;
                name?: string;
            }[];
            users?: {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            }[];
        } & {
            permission?: {
                id?: string;
                name?: string;
                externalId?: string;
            } & {
                id?: string;
                name?: string;
                externalId?: string;
            } & { [K_9 in Exclude<keyof I_1["permission"]["permission"], keyof Permission>]: never; };
            roles?: {
                id?: string;
                name?: string;
            }[] & ({
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_10 in Exclude<keyof I_1["permission"]["roles"][number], keyof Role>]: never; })[] & { [K_11 in Exclude<keyof I_1["permission"]["roles"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
            groups?: {
                id?: string;
                name?: string;
            }[] & ({
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_12 in Exclude<keyof I_1["permission"]["groups"][number], keyof Group>]: never; })[] & { [K_13 in Exclude<keyof I_1["permission"]["groups"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
            users?: {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            }[] & ({
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            } & {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            } & { [K_14 in Exclude<keyof I_1["permission"]["users"][number], keyof User>]: never; })[] & { [K_15 in Exclude<keyof I_1["permission"]["users"], keyof {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            }[]>]: never; };
        } & { [K_16 in Exclude<keyof I_1["permission"], keyof PermissionDetail>]: never; };
    } & { [K_17 in Exclude<keyof I_1, "permission">]: never; }>(object: I_1): GetPermissionResponse;
};
export declare const CreatePermissionRequest: {
    encode(message: CreatePermissionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePermissionRequest;
    fromJSON(object: any): CreatePermissionRequest;
    toJSON(message: CreatePermissionRequest): unknown;
    create<I extends {
        name?: string;
        externalId?: string;
    } & {
        name?: string;
        externalId?: string;
    } & { [K in Exclude<keyof I, keyof CreatePermissionRequest>]: never; }>(base?: I): CreatePermissionRequest;
    fromPartial<I_1 extends {
        name?: string;
        externalId?: string;
    } & {
        name?: string;
        externalId?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CreatePermissionRequest>]: never; }>(object: I_1): CreatePermissionRequest;
};
export declare const CreatePermissionResponse: {
    encode(message: CreatePermissionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePermissionResponse;
    fromJSON(object: any): CreatePermissionResponse;
    toJSON(message: CreatePermissionResponse): unknown;
    create<I extends {
        permission?: {
            id?: string;
            name?: string;
            externalId?: string;
        };
    } & {
        permission?: {
            id?: string;
            name?: string;
            externalId?: string;
        } & {
            id?: string;
            name?: string;
            externalId?: string;
        } & { [K in Exclude<keyof I["permission"], keyof Permission>]: never; };
    } & { [K_1 in Exclude<keyof I, "permission">]: never; }>(base?: I): CreatePermissionResponse;
    fromPartial<I_1 extends {
        permission?: {
            id?: string;
            name?: string;
            externalId?: string;
        };
    } & {
        permission?: {
            id?: string;
            name?: string;
            externalId?: string;
        } & {
            id?: string;
            name?: string;
            externalId?: string;
        } & { [K_2 in Exclude<keyof I_1["permission"], keyof Permission>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "permission">]: never; }>(object: I_1): CreatePermissionResponse;
};
export declare const PatchPermissionRequest: {
    encode(message: PatchPermissionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PatchPermissionRequest;
    fromJSON(object: any): PatchPermissionRequest;
    toJSON(message: PatchPermissionRequest): unknown;
    create<I extends {
        id?: string;
        name?: string | undefined;
        externalId?: string | undefined;
    } & {
        id?: string;
        name?: string | undefined;
        externalId?: string | undefined;
    } & { [K in Exclude<keyof I, keyof PatchPermissionRequest>]: never; }>(base?: I): PatchPermissionRequest;
    fromPartial<I_1 extends {
        id?: string;
        name?: string | undefined;
        externalId?: string | undefined;
    } & {
        id?: string;
        name?: string | undefined;
        externalId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof PatchPermissionRequest>]: never; }>(object: I_1): PatchPermissionRequest;
};
export declare const PatchPermissionResponse: {
    encode(message: PatchPermissionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PatchPermissionResponse;
    fromJSON(object: any): PatchPermissionResponse;
    toJSON(message: PatchPermissionResponse): unknown;
    create<I extends {
        permission?: {
            id?: string;
            name?: string;
            externalId?: string;
        };
    } & {
        permission?: {
            id?: string;
            name?: string;
            externalId?: string;
        } & {
            id?: string;
            name?: string;
            externalId?: string;
        } & { [K in Exclude<keyof I["permission"], keyof Permission>]: never; };
    } & { [K_1 in Exclude<keyof I, "permission">]: never; }>(base?: I): PatchPermissionResponse;
    fromPartial<I_1 extends {
        permission?: {
            id?: string;
            name?: string;
            externalId?: string;
        };
    } & {
        permission?: {
            id?: string;
            name?: string;
            externalId?: string;
        } & {
            id?: string;
            name?: string;
            externalId?: string;
        } & { [K_2 in Exclude<keyof I_1["permission"], keyof Permission>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "permission">]: never; }>(object: I_1): PatchPermissionResponse;
};
export declare const DeletePermissionRequest: {
    encode(message: DeletePermissionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeletePermissionRequest;
    fromJSON(object: any): DeletePermissionRequest;
    toJSON(message: DeletePermissionRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): DeletePermissionRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): DeletePermissionRequest;
};
export declare const DeletePermissionResponse: {
    encode(_: DeletePermissionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeletePermissionResponse;
    fromJSON(_: any): DeletePermissionResponse;
    toJSON(_: DeletePermissionResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): DeletePermissionResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): DeletePermissionResponse;
};
export declare const ListRolesRequest: {
    encode(_: ListRolesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListRolesRequest;
    fromJSON(_: any): ListRolesRequest;
    toJSON(_: ListRolesRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): ListRolesRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ListRolesRequest;
};
export declare const ListRolesResponse: {
    encode(message: ListRolesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListRolesResponse;
    fromJSON(object: any): ListRolesResponse;
    toJSON(message: ListRolesResponse): unknown;
    create<I extends {
        roles?: {
            id?: string;
            name?: string;
        }[];
    } & {
        roles?: {
            id?: string;
            name?: string;
        }[] & ({
            id?: string;
            name?: string;
        } & {
            id?: string;
            name?: string;
        } & { [K in Exclude<keyof I["roles"][number], keyof Role>]: never; })[] & { [K_1 in Exclude<keyof I["roles"], keyof {
            id?: string;
            name?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "roles">]: never; }>(base?: I): ListRolesResponse;
    fromPartial<I_1 extends {
        roles?: {
            id?: string;
            name?: string;
        }[];
    } & {
        roles?: {
            id?: string;
            name?: string;
        }[] & ({
            id?: string;
            name?: string;
        } & {
            id?: string;
            name?: string;
        } & { [K_3 in Exclude<keyof I_1["roles"][number], keyof Role>]: never; })[] & { [K_4 in Exclude<keyof I_1["roles"], keyof {
            id?: string;
            name?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "roles">]: never; }>(object: I_1): ListRolesResponse;
};
export declare const GetRoleRequest: {
    encode(message: GetRoleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetRoleRequest;
    fromJSON(object: any): GetRoleRequest;
    toJSON(message: GetRoleRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): GetRoleRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): GetRoleRequest;
};
export declare const GetRoleResponse: {
    encode(message: GetRoleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetRoleResponse;
    fromJSON(object: any): GetRoleResponse;
    toJSON(message: GetRoleResponse): unknown;
    create<I extends {
        role?: {
            role?: {
                id?: string;
                name?: string;
            };
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        };
    } & {
        role?: {
            role?: {
                id?: string;
                name?: string;
            };
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        } & {
            role?: {
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K in Exclude<keyof I["role"]["role"], keyof Role>]: never; };
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
            } & { [K_1 in Exclude<keyof I["role"]["permissions"][number], keyof Permission>]: never; })[] & { [K_2 in Exclude<keyof I["role"]["permissions"], keyof {
                id?: string;
                name?: string;
                externalId?: string;
            }[]>]: never; };
        } & { [K_3 in Exclude<keyof I["role"], keyof RoleDetail>]: never; };
    } & { [K_4 in Exclude<keyof I, "role">]: never; }>(base?: I): GetRoleResponse;
    fromPartial<I_1 extends {
        role?: {
            role?: {
                id?: string;
                name?: string;
            };
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        };
    } & {
        role?: {
            role?: {
                id?: string;
                name?: string;
            };
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        } & {
            role?: {
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_5 in Exclude<keyof I_1["role"]["role"], keyof Role>]: never; };
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
            } & { [K_6 in Exclude<keyof I_1["role"]["permissions"][number], keyof Permission>]: never; })[] & { [K_7 in Exclude<keyof I_1["role"]["permissions"], keyof {
                id?: string;
                name?: string;
                externalId?: string;
            }[]>]: never; };
        } & { [K_8 in Exclude<keyof I_1["role"], keyof RoleDetail>]: never; };
    } & { [K_9 in Exclude<keyof I_1, "role">]: never; }>(object: I_1): GetRoleResponse;
};
export declare const CreateRoleRequest: {
    encode(message: CreateRoleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateRoleRequest;
    fromJSON(object: any): CreateRoleRequest;
    toJSON(message: CreateRoleRequest): unknown;
    create<I extends {
        name?: string;
    } & {
        name?: string;
    } & { [K in Exclude<keyof I, "name">]: never; }>(base?: I): CreateRoleRequest;
    fromPartial<I_1 extends {
        name?: string;
    } & {
        name?: string;
    } & { [K_1 in Exclude<keyof I_1, "name">]: never; }>(object: I_1): CreateRoleRequest;
};
export declare const CreateRoleResponse: {
    encode(message: CreateRoleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateRoleResponse;
    fromJSON(object: any): CreateRoleResponse;
    toJSON(message: CreateRoleResponse): unknown;
    create<I extends {
        role?: {
            id?: string;
            name?: string;
        };
    } & {
        role?: {
            id?: string;
            name?: string;
        } & {
            id?: string;
            name?: string;
        } & { [K in Exclude<keyof I["role"], keyof Role>]: never; };
    } & { [K_1 in Exclude<keyof I, "role">]: never; }>(base?: I): CreateRoleResponse;
    fromPartial<I_1 extends {
        role?: {
            id?: string;
            name?: string;
        };
    } & {
        role?: {
            id?: string;
            name?: string;
        } & {
            id?: string;
            name?: string;
        } & { [K_2 in Exclude<keyof I_1["role"], keyof Role>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "role">]: never; }>(object: I_1): CreateRoleResponse;
};
export declare const PatchRoleRequest: {
    encode(message: PatchRoleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PatchRoleRequest;
    fromJSON(object: any): PatchRoleRequest;
    toJSON(message: PatchRoleRequest): unknown;
    create<I extends {
        id?: string;
        name?: string | undefined;
    } & {
        id?: string;
        name?: string | undefined;
    } & { [K in Exclude<keyof I, keyof PatchRoleRequest>]: never; }>(base?: I): PatchRoleRequest;
    fromPartial<I_1 extends {
        id?: string;
        name?: string | undefined;
    } & {
        id?: string;
        name?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof PatchRoleRequest>]: never; }>(object: I_1): PatchRoleRequest;
};
export declare const PatchRoleResponse: {
    encode(message: PatchRoleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PatchRoleResponse;
    fromJSON(object: any): PatchRoleResponse;
    toJSON(message: PatchRoleResponse): unknown;
    create<I extends {
        role?: {
            id?: string;
            name?: string;
        };
    } & {
        role?: {
            id?: string;
            name?: string;
        } & {
            id?: string;
            name?: string;
        } & { [K in Exclude<keyof I["role"], keyof Role>]: never; };
    } & { [K_1 in Exclude<keyof I, "role">]: never; }>(base?: I): PatchRoleResponse;
    fromPartial<I_1 extends {
        role?: {
            id?: string;
            name?: string;
        };
    } & {
        role?: {
            id?: string;
            name?: string;
        } & {
            id?: string;
            name?: string;
        } & { [K_2 in Exclude<keyof I_1["role"], keyof Role>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "role">]: never; }>(object: I_1): PatchRoleResponse;
};
export declare const DeleteRoleRequest: {
    encode(message: DeleteRoleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRoleRequest;
    fromJSON(object: any): DeleteRoleRequest;
    toJSON(message: DeleteRoleRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): DeleteRoleRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): DeleteRoleRequest;
};
export declare const DeleteRoleResponse: {
    encode(_: DeleteRoleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRoleResponse;
    fromJSON(_: any): DeleteRoleResponse;
    toJSON(_: DeleteRoleResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): DeleteRoleResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): DeleteRoleResponse;
};
export declare const SetRolePermissionsRequest: {
    encode(message: SetRolePermissionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetRolePermissionsRequest;
    fromJSON(object: any): SetRolePermissionsRequest;
    toJSON(message: SetRolePermissionsRequest): unknown;
    create<I extends {
        roleId?: string;
        permissionIds?: string[];
    } & {
        roleId?: string;
        permissionIds?: string[] & string[] & { [K in Exclude<keyof I["permissionIds"], keyof string[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof SetRolePermissionsRequest>]: never; }>(base?: I): SetRolePermissionsRequest;
    fromPartial<I_1 extends {
        roleId?: string;
        permissionIds?: string[];
    } & {
        roleId?: string;
        permissionIds?: string[] & string[] & { [K_2 in Exclude<keyof I_1["permissionIds"], keyof string[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof SetRolePermissionsRequest>]: never; }>(object: I_1): SetRolePermissionsRequest;
};
export declare const SetRolePermissionsResponse: {
    encode(message: SetRolePermissionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetRolePermissionsResponse;
    fromJSON(object: any): SetRolePermissionsResponse;
    toJSON(message: SetRolePermissionsResponse): unknown;
    create<I extends {
        role?: {
            role?: {
                id?: string;
                name?: string;
            };
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        };
    } & {
        role?: {
            role?: {
                id?: string;
                name?: string;
            };
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        } & {
            role?: {
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K in Exclude<keyof I["role"]["role"], keyof Role>]: never; };
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
            } & { [K_1 in Exclude<keyof I["role"]["permissions"][number], keyof Permission>]: never; })[] & { [K_2 in Exclude<keyof I["role"]["permissions"], keyof {
                id?: string;
                name?: string;
                externalId?: string;
            }[]>]: never; };
        } & { [K_3 in Exclude<keyof I["role"], keyof RoleDetail>]: never; };
    } & { [K_4 in Exclude<keyof I, "role">]: never; }>(base?: I): SetRolePermissionsResponse;
    fromPartial<I_1 extends {
        role?: {
            role?: {
                id?: string;
                name?: string;
            };
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        };
    } & {
        role?: {
            role?: {
                id?: string;
                name?: string;
            };
            permissions?: {
                id?: string;
                name?: string;
                externalId?: string;
            }[];
        } & {
            role?: {
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_5 in Exclude<keyof I_1["role"]["role"], keyof Role>]: never; };
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
            } & { [K_6 in Exclude<keyof I_1["role"]["permissions"][number], keyof Permission>]: never; })[] & { [K_7 in Exclude<keyof I_1["role"]["permissions"], keyof {
                id?: string;
                name?: string;
                externalId?: string;
            }[]>]: never; };
        } & { [K_8 in Exclude<keyof I_1["role"], keyof RoleDetail>]: never; };
    } & { [K_9 in Exclude<keyof I_1, "role">]: never; }>(object: I_1): SetRolePermissionsResponse;
};
export declare const ListGroupsRequest: {
    encode(_: ListGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupsRequest;
    fromJSON(_: any): ListGroupsRequest;
    toJSON(_: ListGroupsRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): ListGroupsRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ListGroupsRequest;
};
export declare const ListGroupsResponse: {
    encode(message: ListGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupsResponse;
    fromJSON(object: any): ListGroupsResponse;
    toJSON(message: ListGroupsResponse): unknown;
    create<I extends {
        groups?: {
            id?: string;
            name?: string;
        }[];
    } & {
        groups?: {
            id?: string;
            name?: string;
        }[] & ({
            id?: string;
            name?: string;
        } & {
            id?: string;
            name?: string;
        } & { [K in Exclude<keyof I["groups"][number], keyof Group>]: never; })[] & { [K_1 in Exclude<keyof I["groups"], keyof {
            id?: string;
            name?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "groups">]: never; }>(base?: I): ListGroupsResponse;
    fromPartial<I_1 extends {
        groups?: {
            id?: string;
            name?: string;
        }[];
    } & {
        groups?: {
            id?: string;
            name?: string;
        }[] & ({
            id?: string;
            name?: string;
        } & {
            id?: string;
            name?: string;
        } & { [K_3 in Exclude<keyof I_1["groups"][number], keyof Group>]: never; })[] & { [K_4 in Exclude<keyof I_1["groups"], keyof {
            id?: string;
            name?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "groups">]: never; }>(object: I_1): ListGroupsResponse;
};
export declare const GetGroupRequest: {
    encode(message: GetGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetGroupRequest;
    fromJSON(object: any): GetGroupRequest;
    toJSON(message: GetGroupRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): GetGroupRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): GetGroupRequest;
};
export declare const GetGroupResponse: {
    encode(message: GetGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetGroupResponse;
    fromJSON(object: any): GetGroupResponse;
    toJSON(message: GetGroupResponse): unknown;
    create<I extends {
        group?: {
            group?: {
                id?: string;
                name?: string;
            };
            roles?: {
                id?: string;
                name?: string;
            }[];
        };
    } & {
        group?: {
            group?: {
                id?: string;
                name?: string;
            };
            roles?: {
                id?: string;
                name?: string;
            }[];
        } & {
            group?: {
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K in Exclude<keyof I["group"]["group"], keyof Group>]: never; };
            roles?: {
                id?: string;
                name?: string;
            }[] & ({
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_1 in Exclude<keyof I["group"]["roles"][number], keyof Role>]: never; })[] & { [K_2 in Exclude<keyof I["group"]["roles"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
        } & { [K_3 in Exclude<keyof I["group"], keyof GroupDetail>]: never; };
    } & { [K_4 in Exclude<keyof I, "group">]: never; }>(base?: I): GetGroupResponse;
    fromPartial<I_1 extends {
        group?: {
            group?: {
                id?: string;
                name?: string;
            };
            roles?: {
                id?: string;
                name?: string;
            }[];
        };
    } & {
        group?: {
            group?: {
                id?: string;
                name?: string;
            };
            roles?: {
                id?: string;
                name?: string;
            }[];
        } & {
            group?: {
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_5 in Exclude<keyof I_1["group"]["group"], keyof Group>]: never; };
            roles?: {
                id?: string;
                name?: string;
            }[] & ({
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_6 in Exclude<keyof I_1["group"]["roles"][number], keyof Role>]: never; })[] & { [K_7 in Exclude<keyof I_1["group"]["roles"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
        } & { [K_8 in Exclude<keyof I_1["group"], keyof GroupDetail>]: never; };
    } & { [K_9 in Exclude<keyof I_1, "group">]: never; }>(object: I_1): GetGroupResponse;
};
export declare const CreateGroupRequest: {
    encode(message: CreateGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateGroupRequest;
    fromJSON(object: any): CreateGroupRequest;
    toJSON(message: CreateGroupRequest): unknown;
    create<I extends {
        name?: string;
    } & {
        name?: string;
    } & { [K in Exclude<keyof I, "name">]: never; }>(base?: I): CreateGroupRequest;
    fromPartial<I_1 extends {
        name?: string;
    } & {
        name?: string;
    } & { [K_1 in Exclude<keyof I_1, "name">]: never; }>(object: I_1): CreateGroupRequest;
};
export declare const CreateGroupResponse: {
    encode(message: CreateGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateGroupResponse;
    fromJSON(object: any): CreateGroupResponse;
    toJSON(message: CreateGroupResponse): unknown;
    create<I extends {
        group?: {
            id?: string;
            name?: string;
        };
    } & {
        group?: {
            id?: string;
            name?: string;
        } & {
            id?: string;
            name?: string;
        } & { [K in Exclude<keyof I["group"], keyof Group>]: never; };
    } & { [K_1 in Exclude<keyof I, "group">]: never; }>(base?: I): CreateGroupResponse;
    fromPartial<I_1 extends {
        group?: {
            id?: string;
            name?: string;
        };
    } & {
        group?: {
            id?: string;
            name?: string;
        } & {
            id?: string;
            name?: string;
        } & { [K_2 in Exclude<keyof I_1["group"], keyof Group>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "group">]: never; }>(object: I_1): CreateGroupResponse;
};
export declare const PatchGroupRequest: {
    encode(message: PatchGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PatchGroupRequest;
    fromJSON(object: any): PatchGroupRequest;
    toJSON(message: PatchGroupRequest): unknown;
    create<I extends {
        id?: string;
        name?: string | undefined;
    } & {
        id?: string;
        name?: string | undefined;
    } & { [K in Exclude<keyof I, keyof PatchGroupRequest>]: never; }>(base?: I): PatchGroupRequest;
    fromPartial<I_1 extends {
        id?: string;
        name?: string | undefined;
    } & {
        id?: string;
        name?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof PatchGroupRequest>]: never; }>(object: I_1): PatchGroupRequest;
};
export declare const PatchGroupResponse: {
    encode(message: PatchGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PatchGroupResponse;
    fromJSON(object: any): PatchGroupResponse;
    toJSON(message: PatchGroupResponse): unknown;
    create<I extends {
        group?: {
            id?: string;
            name?: string;
        };
    } & {
        group?: {
            id?: string;
            name?: string;
        } & {
            id?: string;
            name?: string;
        } & { [K in Exclude<keyof I["group"], keyof Group>]: never; };
    } & { [K_1 in Exclude<keyof I, "group">]: never; }>(base?: I): PatchGroupResponse;
    fromPartial<I_1 extends {
        group?: {
            id?: string;
            name?: string;
        };
    } & {
        group?: {
            id?: string;
            name?: string;
        } & {
            id?: string;
            name?: string;
        } & { [K_2 in Exclude<keyof I_1["group"], keyof Group>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "group">]: never; }>(object: I_1): PatchGroupResponse;
};
export declare const DeleteGroupRequest: {
    encode(message: DeleteGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteGroupRequest;
    fromJSON(object: any): DeleteGroupRequest;
    toJSON(message: DeleteGroupRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): DeleteGroupRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): DeleteGroupRequest;
};
export declare const DeleteGroupResponse: {
    encode(_: DeleteGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteGroupResponse;
    fromJSON(_: any): DeleteGroupResponse;
    toJSON(_: DeleteGroupResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): DeleteGroupResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): DeleteGroupResponse;
};
export declare const SetGroupRolesRequest: {
    encode(message: SetGroupRolesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetGroupRolesRequest;
    fromJSON(object: any): SetGroupRolesRequest;
    toJSON(message: SetGroupRolesRequest): unknown;
    create<I extends {
        groupId?: string;
        roleIds?: string[];
    } & {
        groupId?: string;
        roleIds?: string[] & string[] & { [K in Exclude<keyof I["roleIds"], keyof string[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof SetGroupRolesRequest>]: never; }>(base?: I): SetGroupRolesRequest;
    fromPartial<I_1 extends {
        groupId?: string;
        roleIds?: string[];
    } & {
        groupId?: string;
        roleIds?: string[] & string[] & { [K_2 in Exclude<keyof I_1["roleIds"], keyof string[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof SetGroupRolesRequest>]: never; }>(object: I_1): SetGroupRolesRequest;
};
export declare const SetGroupRolesResponse: {
    encode(message: SetGroupRolesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetGroupRolesResponse;
    fromJSON(object: any): SetGroupRolesResponse;
    toJSON(message: SetGroupRolesResponse): unknown;
    create<I extends {
        group?: {
            group?: {
                id?: string;
                name?: string;
            };
            roles?: {
                id?: string;
                name?: string;
            }[];
        };
    } & {
        group?: {
            group?: {
                id?: string;
                name?: string;
            };
            roles?: {
                id?: string;
                name?: string;
            }[];
        } & {
            group?: {
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K in Exclude<keyof I["group"]["group"], keyof Group>]: never; };
            roles?: {
                id?: string;
                name?: string;
            }[] & ({
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_1 in Exclude<keyof I["group"]["roles"][number], keyof Role>]: never; })[] & { [K_2 in Exclude<keyof I["group"]["roles"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
        } & { [K_3 in Exclude<keyof I["group"], keyof GroupDetail>]: never; };
    } & { [K_4 in Exclude<keyof I, "group">]: never; }>(base?: I): SetGroupRolesResponse;
    fromPartial<I_1 extends {
        group?: {
            group?: {
                id?: string;
                name?: string;
            };
            roles?: {
                id?: string;
                name?: string;
            }[];
        };
    } & {
        group?: {
            group?: {
                id?: string;
                name?: string;
            };
            roles?: {
                id?: string;
                name?: string;
            }[];
        } & {
            group?: {
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_5 in Exclude<keyof I_1["group"]["group"], keyof Group>]: never; };
            roles?: {
                id?: string;
                name?: string;
            }[] & ({
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_6 in Exclude<keyof I_1["group"]["roles"][number], keyof Role>]: never; })[] & { [K_7 in Exclude<keyof I_1["group"]["roles"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
        } & { [K_8 in Exclude<keyof I_1["group"], keyof GroupDetail>]: never; };
    } & { [K_9 in Exclude<keyof I_1, "group">]: never; }>(object: I_1): SetGroupRolesResponse;
};
export declare const ListUsersRequest: {
    encode(_: ListUsersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersRequest;
    fromJSON(_: any): ListUsersRequest;
    toJSON(_: ListUsersRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): ListUsersRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ListUsersRequest;
};
export declare const ListUsersResponse: {
    encode(message: ListUsersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersResponse;
    fromJSON(object: any): ListUsersResponse;
    toJSON(message: ListUsersResponse): unknown;
    create<I extends {
        users?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        }[];
    } & {
        users?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        }[] & ({
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        } & {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        } & { [K in Exclude<keyof I["users"][number], keyof User>]: never; })[] & { [K_1 in Exclude<keyof I["users"], keyof {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "users">]: never; }>(base?: I): ListUsersResponse;
    fromPartial<I_1 extends {
        users?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        }[];
    } & {
        users?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        }[] & ({
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        } & {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        } & { [K_3 in Exclude<keyof I_1["users"][number], keyof User>]: never; })[] & { [K_4 in Exclude<keyof I_1["users"], keyof {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "users">]: never; }>(object: I_1): ListUsersResponse;
};
export declare const PatchUserRequest: {
    encode(message: PatchUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PatchUserRequest;
    fromJSON(object: any): PatchUserRequest;
    toJSON(message: PatchUserRequest): unknown;
    create<I extends {
        id?: string;
        givenName?: string | undefined;
        familyName?: string | undefined;
        email?: string | undefined;
        active?: boolean | undefined;
    } & {
        id?: string;
        givenName?: string | undefined;
        familyName?: string | undefined;
        email?: string | undefined;
        active?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof PatchUserRequest>]: never; }>(base?: I): PatchUserRequest;
    fromPartial<I_1 extends {
        id?: string;
        givenName?: string | undefined;
        familyName?: string | undefined;
        email?: string | undefined;
        active?: boolean | undefined;
    } & {
        id?: string;
        givenName?: string | undefined;
        familyName?: string | undefined;
        email?: string | undefined;
        active?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof PatchUserRequest>]: never; }>(object: I_1): PatchUserRequest;
};
export declare const PatchUserResponse: {
    encode(message: PatchUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PatchUserResponse;
    fromJSON(object: any): PatchUserResponse;
    toJSON(message: PatchUserResponse): unknown;
    create<I extends {
        user?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        };
    } & {
        user?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        } & {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        } & { [K in Exclude<keyof I["user"], keyof User>]: never; };
    } & { [K_1 in Exclude<keyof I, "user">]: never; }>(base?: I): PatchUserResponse;
    fromPartial<I_1 extends {
        user?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        };
    } & {
        user?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        } & {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        } & { [K_2 in Exclude<keyof I_1["user"], keyof User>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "user">]: never; }>(object: I_1): PatchUserResponse;
};
export declare const CreateUserRequest: {
    encode(message: CreateUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserRequest;
    fromJSON(object: any): CreateUserRequest;
    toJSON(message: CreateUserRequest): unknown;
    create<I extends {
        email?: string;
        givenName?: string;
        familyName?: string;
    } & {
        email?: string;
        givenName?: string;
        familyName?: string;
    } & { [K in Exclude<keyof I, keyof CreateUserRequest>]: never; }>(base?: I): CreateUserRequest;
    fromPartial<I_1 extends {
        email?: string;
        givenName?: string;
        familyName?: string;
    } & {
        email?: string;
        givenName?: string;
        familyName?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CreateUserRequest>]: never; }>(object: I_1): CreateUserRequest;
};
export declare const CreateUserResponse: {
    encode(message: CreateUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserResponse;
    fromJSON(object: any): CreateUserResponse;
    toJSON(message: CreateUserResponse): unknown;
    create<I extends {
        user?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        };
    } & {
        user?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        } & {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        } & { [K in Exclude<keyof I["user"], keyof User>]: never; };
    } & { [K_1 in Exclude<keyof I, "user">]: never; }>(base?: I): CreateUserResponse;
    fromPartial<I_1 extends {
        user?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        };
    } & {
        user?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        } & {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        } & { [K_2 in Exclude<keyof I_1["user"], keyof User>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "user">]: never; }>(object: I_1): CreateUserResponse;
};
export declare const GetUserRequest: {
    encode(message: GetUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetUserRequest;
    fromJSON(object: any): GetUserRequest;
    toJSON(message: GetUserRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): GetUserRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): GetUserRequest;
};
export declare const GetUserResponse: {
    encode(message: GetUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetUserResponse;
    fromJSON(object: any): GetUserResponse;
    toJSON(message: GetUserResponse): unknown;
    create<I extends {
        user?: {
            user?: {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            };
            groups?: {
                id?: string;
                name?: string;
            }[];
            directRoles?: {
                id?: string;
                name?: string;
            }[];
            effectiveRoles?: {
                id?: string;
                name?: string;
            }[];
        };
    } & {
        user?: {
            user?: {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            };
            groups?: {
                id?: string;
                name?: string;
            }[];
            directRoles?: {
                id?: string;
                name?: string;
            }[];
            effectiveRoles?: {
                id?: string;
                name?: string;
            }[];
        } & {
            user?: {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            } & {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            } & { [K in Exclude<keyof I["user"]["user"], keyof User>]: never; };
            groups?: {
                id?: string;
                name?: string;
            }[] & ({
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_1 in Exclude<keyof I["user"]["groups"][number], keyof Group>]: never; })[] & { [K_2 in Exclude<keyof I["user"]["groups"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
            directRoles?: {
                id?: string;
                name?: string;
            }[] & ({
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_3 in Exclude<keyof I["user"]["directRoles"][number], keyof Role>]: never; })[] & { [K_4 in Exclude<keyof I["user"]["directRoles"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
            effectiveRoles?: {
                id?: string;
                name?: string;
            }[] & ({
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_5 in Exclude<keyof I["user"]["effectiveRoles"][number], keyof Role>]: never; })[] & { [K_6 in Exclude<keyof I["user"]["effectiveRoles"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
        } & { [K_7 in Exclude<keyof I["user"], keyof UserDetail>]: never; };
    } & { [K_8 in Exclude<keyof I, "user">]: never; }>(base?: I): GetUserResponse;
    fromPartial<I_1 extends {
        user?: {
            user?: {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            };
            groups?: {
                id?: string;
                name?: string;
            }[];
            directRoles?: {
                id?: string;
                name?: string;
            }[];
            effectiveRoles?: {
                id?: string;
                name?: string;
            }[];
        };
    } & {
        user?: {
            user?: {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            };
            groups?: {
                id?: string;
                name?: string;
            }[];
            directRoles?: {
                id?: string;
                name?: string;
            }[];
            effectiveRoles?: {
                id?: string;
                name?: string;
            }[];
        } & {
            user?: {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            } & {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            } & { [K_9 in Exclude<keyof I_1["user"]["user"], keyof User>]: never; };
            groups?: {
                id?: string;
                name?: string;
            }[] & ({
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_10 in Exclude<keyof I_1["user"]["groups"][number], keyof Group>]: never; })[] & { [K_11 in Exclude<keyof I_1["user"]["groups"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
            directRoles?: {
                id?: string;
                name?: string;
            }[] & ({
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_12 in Exclude<keyof I_1["user"]["directRoles"][number], keyof Role>]: never; })[] & { [K_13 in Exclude<keyof I_1["user"]["directRoles"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
            effectiveRoles?: {
                id?: string;
                name?: string;
            }[] & ({
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_14 in Exclude<keyof I_1["user"]["effectiveRoles"][number], keyof Role>]: never; })[] & { [K_15 in Exclude<keyof I_1["user"]["effectiveRoles"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
        } & { [K_16 in Exclude<keyof I_1["user"], keyof UserDetail>]: never; };
    } & { [K_17 in Exclude<keyof I_1, "user">]: never; }>(object: I_1): GetUserResponse;
};
export declare const DeleteUserRequest: {
    encode(message: DeleteUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserRequest;
    fromJSON(object: any): DeleteUserRequest;
    toJSON(message: DeleteUserRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): DeleteUserRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): DeleteUserRequest;
};
export declare const DeleteUserResponse: {
    encode(_: DeleteUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserResponse;
    fromJSON(_: any): DeleteUserResponse;
    toJSON(_: DeleteUserResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): DeleteUserResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): DeleteUserResponse;
};
export declare const ListGroupUsersRequest: {
    encode(message: ListGroupUsersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupUsersRequest;
    fromJSON(object: any): ListGroupUsersRequest;
    toJSON(message: ListGroupUsersRequest): unknown;
    create<I extends {
        groupId?: string;
    } & {
        groupId?: string;
    } & { [K in Exclude<keyof I, "groupId">]: never; }>(base?: I): ListGroupUsersRequest;
    fromPartial<I_1 extends {
        groupId?: string;
    } & {
        groupId?: string;
    } & { [K_1 in Exclude<keyof I_1, "groupId">]: never; }>(object: I_1): ListGroupUsersRequest;
};
export declare const ListGroupUsersResponse: {
    encode(message: ListGroupUsersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupUsersResponse;
    fromJSON(object: any): ListGroupUsersResponse;
    toJSON(message: ListGroupUsersResponse): unknown;
    create<I extends {
        users?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        }[];
    } & {
        users?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        }[] & ({
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        } & {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        } & { [K in Exclude<keyof I["users"][number], keyof User>]: never; })[] & { [K_1 in Exclude<keyof I["users"], keyof {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "users">]: never; }>(base?: I): ListGroupUsersResponse;
    fromPartial<I_1 extends {
        users?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        }[];
    } & {
        users?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        }[] & ({
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        } & {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        } & { [K_3 in Exclude<keyof I_1["users"][number], keyof User>]: never; })[] & { [K_4 in Exclude<keyof I_1["users"], keyof {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
            scimLastSyncedAt?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "users">]: never; }>(object: I_1): ListGroupUsersResponse;
};
export declare const AddUserToGroupRequest: {
    encode(message: AddUserToGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddUserToGroupRequest;
    fromJSON(object: any): AddUserToGroupRequest;
    toJSON(message: AddUserToGroupRequest): unknown;
    create<I extends {
        userId?: string;
        groupId?: string;
    } & {
        userId?: string;
        groupId?: string;
    } & { [K in Exclude<keyof I, keyof AddUserToGroupRequest>]: never; }>(base?: I): AddUserToGroupRequest;
    fromPartial<I_1 extends {
        userId?: string;
        groupId?: string;
    } & {
        userId?: string;
        groupId?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof AddUserToGroupRequest>]: never; }>(object: I_1): AddUserToGroupRequest;
};
export declare const AddUserToGroupResponse: {
    encode(_: AddUserToGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddUserToGroupResponse;
    fromJSON(_: any): AddUserToGroupResponse;
    toJSON(_: AddUserToGroupResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): AddUserToGroupResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): AddUserToGroupResponse;
};
export declare const RemoveUserFromGroupRequest: {
    encode(message: RemoveUserFromGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveUserFromGroupRequest;
    fromJSON(object: any): RemoveUserFromGroupRequest;
    toJSON(message: RemoveUserFromGroupRequest): unknown;
    create<I extends {
        userId?: string;
        groupId?: string;
    } & {
        userId?: string;
        groupId?: string;
    } & { [K in Exclude<keyof I, keyof RemoveUserFromGroupRequest>]: never; }>(base?: I): RemoveUserFromGroupRequest;
    fromPartial<I_1 extends {
        userId?: string;
        groupId?: string;
    } & {
        userId?: string;
        groupId?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof RemoveUserFromGroupRequest>]: never; }>(object: I_1): RemoveUserFromGroupRequest;
};
export declare const RemoveUserFromGroupResponse: {
    encode(_: RemoveUserFromGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveUserFromGroupResponse;
    fromJSON(_: any): RemoveUserFromGroupResponse;
    toJSON(_: RemoveUserFromGroupResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): RemoveUserFromGroupResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): RemoveUserFromGroupResponse;
};
export declare const SetUserRolesRequest: {
    encode(message: SetUserRolesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetUserRolesRequest;
    fromJSON(object: any): SetUserRolesRequest;
    toJSON(message: SetUserRolesRequest): unknown;
    create<I extends {
        userId?: string;
        roleIds?: string[];
    } & {
        userId?: string;
        roleIds?: string[] & string[] & { [K in Exclude<keyof I["roleIds"], keyof string[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof SetUserRolesRequest>]: never; }>(base?: I): SetUserRolesRequest;
    fromPartial<I_1 extends {
        userId?: string;
        roleIds?: string[];
    } & {
        userId?: string;
        roleIds?: string[] & string[] & { [K_2 in Exclude<keyof I_1["roleIds"], keyof string[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof SetUserRolesRequest>]: never; }>(object: I_1): SetUserRolesRequest;
};
export declare const SetUserRolesResponse: {
    encode(message: SetUserRolesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetUserRolesResponse;
    fromJSON(object: any): SetUserRolesResponse;
    toJSON(message: SetUserRolesResponse): unknown;
    create<I extends {
        user?: {
            user?: {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            };
            groups?: {
                id?: string;
                name?: string;
            }[];
            directRoles?: {
                id?: string;
                name?: string;
            }[];
            effectiveRoles?: {
                id?: string;
                name?: string;
            }[];
        };
    } & {
        user?: {
            user?: {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            };
            groups?: {
                id?: string;
                name?: string;
            }[];
            directRoles?: {
                id?: string;
                name?: string;
            }[];
            effectiveRoles?: {
                id?: string;
                name?: string;
            }[];
        } & {
            user?: {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            } & {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            } & { [K in Exclude<keyof I["user"]["user"], keyof User>]: never; };
            groups?: {
                id?: string;
                name?: string;
            }[] & ({
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_1 in Exclude<keyof I["user"]["groups"][number], keyof Group>]: never; })[] & { [K_2 in Exclude<keyof I["user"]["groups"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
            directRoles?: {
                id?: string;
                name?: string;
            }[] & ({
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_3 in Exclude<keyof I["user"]["directRoles"][number], keyof Role>]: never; })[] & { [K_4 in Exclude<keyof I["user"]["directRoles"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
            effectiveRoles?: {
                id?: string;
                name?: string;
            }[] & ({
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_5 in Exclude<keyof I["user"]["effectiveRoles"][number], keyof Role>]: never; })[] & { [K_6 in Exclude<keyof I["user"]["effectiveRoles"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
        } & { [K_7 in Exclude<keyof I["user"], keyof UserDetail>]: never; };
    } & { [K_8 in Exclude<keyof I, "user">]: never; }>(base?: I): SetUserRolesResponse;
    fromPartial<I_1 extends {
        user?: {
            user?: {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            };
            groups?: {
                id?: string;
                name?: string;
            }[];
            directRoles?: {
                id?: string;
                name?: string;
            }[];
            effectiveRoles?: {
                id?: string;
                name?: string;
            }[];
        };
    } & {
        user?: {
            user?: {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            };
            groups?: {
                id?: string;
                name?: string;
            }[];
            directRoles?: {
                id?: string;
                name?: string;
            }[];
            effectiveRoles?: {
                id?: string;
                name?: string;
            }[];
        } & {
            user?: {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            } & {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            } & { [K_9 in Exclude<keyof I_1["user"]["user"], keyof User>]: never; };
            groups?: {
                id?: string;
                name?: string;
            }[] & ({
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_10 in Exclude<keyof I_1["user"]["groups"][number], keyof Group>]: never; })[] & { [K_11 in Exclude<keyof I_1["user"]["groups"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
            directRoles?: {
                id?: string;
                name?: string;
            }[] & ({
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_12 in Exclude<keyof I_1["user"]["directRoles"][number], keyof Role>]: never; })[] & { [K_13 in Exclude<keyof I_1["user"]["directRoles"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
            effectiveRoles?: {
                id?: string;
                name?: string;
            }[] & ({
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_14 in Exclude<keyof I_1["user"]["effectiveRoles"][number], keyof Role>]: never; })[] & { [K_15 in Exclude<keyof I_1["user"]["effectiveRoles"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
        } & { [K_16 in Exclude<keyof I_1["user"], keyof UserDetail>]: never; };
    } & { [K_17 in Exclude<keyof I_1, "user">]: never; }>(object: I_1): SetUserRolesResponse;
};
export declare const SetUserGroupsRequest: {
    encode(message: SetUserGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetUserGroupsRequest;
    fromJSON(object: any): SetUserGroupsRequest;
    toJSON(message: SetUserGroupsRequest): unknown;
    create<I extends {
        userId?: string;
        groupIds?: string[];
    } & {
        userId?: string;
        groupIds?: string[] & string[] & { [K in Exclude<keyof I["groupIds"], keyof string[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof SetUserGroupsRequest>]: never; }>(base?: I): SetUserGroupsRequest;
    fromPartial<I_1 extends {
        userId?: string;
        groupIds?: string[];
    } & {
        userId?: string;
        groupIds?: string[] & string[] & { [K_2 in Exclude<keyof I_1["groupIds"], keyof string[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof SetUserGroupsRequest>]: never; }>(object: I_1): SetUserGroupsRequest;
};
export declare const SetUserGroupsResponse: {
    encode(message: SetUserGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetUserGroupsResponse;
    fromJSON(object: any): SetUserGroupsResponse;
    toJSON(message: SetUserGroupsResponse): unknown;
    create<I extends {
        user?: {
            user?: {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            };
            groups?: {
                id?: string;
                name?: string;
            }[];
            directRoles?: {
                id?: string;
                name?: string;
            }[];
            effectiveRoles?: {
                id?: string;
                name?: string;
            }[];
        };
    } & {
        user?: {
            user?: {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            };
            groups?: {
                id?: string;
                name?: string;
            }[];
            directRoles?: {
                id?: string;
                name?: string;
            }[];
            effectiveRoles?: {
                id?: string;
                name?: string;
            }[];
        } & {
            user?: {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            } & {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            } & { [K in Exclude<keyof I["user"]["user"], keyof User>]: never; };
            groups?: {
                id?: string;
                name?: string;
            }[] & ({
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_1 in Exclude<keyof I["user"]["groups"][number], keyof Group>]: never; })[] & { [K_2 in Exclude<keyof I["user"]["groups"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
            directRoles?: {
                id?: string;
                name?: string;
            }[] & ({
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_3 in Exclude<keyof I["user"]["directRoles"][number], keyof Role>]: never; })[] & { [K_4 in Exclude<keyof I["user"]["directRoles"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
            effectiveRoles?: {
                id?: string;
                name?: string;
            }[] & ({
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_5 in Exclude<keyof I["user"]["effectiveRoles"][number], keyof Role>]: never; })[] & { [K_6 in Exclude<keyof I["user"]["effectiveRoles"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
        } & { [K_7 in Exclude<keyof I["user"], keyof UserDetail>]: never; };
    } & { [K_8 in Exclude<keyof I, "user">]: never; }>(base?: I): SetUserGroupsResponse;
    fromPartial<I_1 extends {
        user?: {
            user?: {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            };
            groups?: {
                id?: string;
                name?: string;
            }[];
            directRoles?: {
                id?: string;
                name?: string;
            }[];
            effectiveRoles?: {
                id?: string;
                name?: string;
            }[];
        };
    } & {
        user?: {
            user?: {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            };
            groups?: {
                id?: string;
                name?: string;
            }[];
            directRoles?: {
                id?: string;
                name?: string;
            }[];
            effectiveRoles?: {
                id?: string;
                name?: string;
            }[];
        } & {
            user?: {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            } & {
                id?: string;
                email?: string;
                givenName?: string;
                familyName?: string;
                active?: boolean;
                lastLoginAt?: number;
                lastActivityAt?: number;
                scimLastSyncedAt?: number;
            } & { [K_9 in Exclude<keyof I_1["user"]["user"], keyof User>]: never; };
            groups?: {
                id?: string;
                name?: string;
            }[] & ({
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_10 in Exclude<keyof I_1["user"]["groups"][number], keyof Group>]: never; })[] & { [K_11 in Exclude<keyof I_1["user"]["groups"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
            directRoles?: {
                id?: string;
                name?: string;
            }[] & ({
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_12 in Exclude<keyof I_1["user"]["directRoles"][number], keyof Role>]: never; })[] & { [K_13 in Exclude<keyof I_1["user"]["directRoles"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
            effectiveRoles?: {
                id?: string;
                name?: string;
            }[] & ({
                id?: string;
                name?: string;
            } & {
                id?: string;
                name?: string;
            } & { [K_14 in Exclude<keyof I_1["user"]["effectiveRoles"][number], keyof Role>]: never; })[] & { [K_15 in Exclude<keyof I_1["user"]["effectiveRoles"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
        } & { [K_16 in Exclude<keyof I_1["user"], keyof UserDetail>]: never; };
    } & { [K_17 in Exclude<keyof I_1, "user">]: never; }>(object: I_1): SetUserGroupsResponse;
};
export declare const ListPasskeysRequest: {
    encode(message: ListPasskeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListPasskeysRequest;
    fromJSON(object: any): ListPasskeysRequest;
    toJSON(message: ListPasskeysRequest): unknown;
    create<I extends {
        userId?: string | undefined;
    } & {
        userId?: string | undefined;
    } & { [K in Exclude<keyof I, "userId">]: never; }>(base?: I): ListPasskeysRequest;
    fromPartial<I_1 extends {
        userId?: string | undefined;
    } & {
        userId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "userId">]: never; }>(object: I_1): ListPasskeysRequest;
};
export declare const ListPasskeysResponse: {
    encode(message: ListPasskeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListPasskeysResponse;
    fromJSON(object: any): ListPasskeysResponse;
    toJSON(message: ListPasskeysResponse): unknown;
    create<I extends {
        passkeys?: {
            id?: string;
            ownerId?: string;
            ownerName?: string;
            identifier?: string;
            createdAt?: number;
            lastUsedAt?: number;
            ownerEmail?: string;
            name?: string;
        }[];
    } & {
        passkeys?: {
            id?: string;
            ownerId?: string;
            ownerName?: string;
            identifier?: string;
            createdAt?: number;
            lastUsedAt?: number;
            ownerEmail?: string;
            name?: string;
        }[] & ({
            id?: string;
            ownerId?: string;
            ownerName?: string;
            identifier?: string;
            createdAt?: number;
            lastUsedAt?: number;
            ownerEmail?: string;
            name?: string;
        } & {
            id?: string;
            ownerId?: string;
            ownerName?: string;
            identifier?: string;
            createdAt?: number;
            lastUsedAt?: number;
            ownerEmail?: string;
            name?: string;
        } & { [K in Exclude<keyof I["passkeys"][number], keyof Passkey>]: never; })[] & { [K_1 in Exclude<keyof I["passkeys"], keyof {
            id?: string;
            ownerId?: string;
            ownerName?: string;
            identifier?: string;
            createdAt?: number;
            lastUsedAt?: number;
            ownerEmail?: string;
            name?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "passkeys">]: never; }>(base?: I): ListPasskeysResponse;
    fromPartial<I_1 extends {
        passkeys?: {
            id?: string;
            ownerId?: string;
            ownerName?: string;
            identifier?: string;
            createdAt?: number;
            lastUsedAt?: number;
            ownerEmail?: string;
            name?: string;
        }[];
    } & {
        passkeys?: {
            id?: string;
            ownerId?: string;
            ownerName?: string;
            identifier?: string;
            createdAt?: number;
            lastUsedAt?: number;
            ownerEmail?: string;
            name?: string;
        }[] & ({
            id?: string;
            ownerId?: string;
            ownerName?: string;
            identifier?: string;
            createdAt?: number;
            lastUsedAt?: number;
            ownerEmail?: string;
            name?: string;
        } & {
            id?: string;
            ownerId?: string;
            ownerName?: string;
            identifier?: string;
            createdAt?: number;
            lastUsedAt?: number;
            ownerEmail?: string;
            name?: string;
        } & { [K_3 in Exclude<keyof I_1["passkeys"][number], keyof Passkey>]: never; })[] & { [K_4 in Exclude<keyof I_1["passkeys"], keyof {
            id?: string;
            ownerId?: string;
            ownerName?: string;
            identifier?: string;
            createdAt?: number;
            lastUsedAt?: number;
            ownerEmail?: string;
            name?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "passkeys">]: never; }>(object: I_1): ListPasskeysResponse;
};
export declare const DeletePasskeyRequest: {
    encode(message: DeletePasskeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeletePasskeyRequest;
    fromJSON(object: any): DeletePasskeyRequest;
    toJSON(message: DeletePasskeyRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): DeletePasskeyRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): DeletePasskeyRequest;
};
export declare const DeletePasskeyResponse: {
    encode(_: DeletePasskeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeletePasskeyResponse;
    fromJSON(_: any): DeletePasskeyResponse;
    toJSON(_: DeletePasskeyResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): DeletePasskeyResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): DeletePasskeyResponse;
};
export declare const ListServicesRequest: {
    encode(_: ListServicesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListServicesRequest;
    fromJSON(_: any): ListServicesRequest;
    toJSON(_: ListServicesRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): ListServicesRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ListServicesRequest;
};
export declare const ListServicesResponse: {
    encode(message: ListServicesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListServicesResponse;
    fromJSON(object: any): ListServicesResponse;
    toJSON(message: ListServicesResponse): unknown;
    create<I extends {
        services?: {
            id?: string;
            clientId?: string;
            name?: string;
        }[];
    } & {
        services?: {
            id?: string;
            clientId?: string;
            name?: string;
        }[] & ({
            id?: string;
            clientId?: string;
            name?: string;
        } & {
            id?: string;
            clientId?: string;
            name?: string;
        } & { [K in Exclude<keyof I["services"][number], keyof Service>]: never; })[] & { [K_1 in Exclude<keyof I["services"], keyof {
            id?: string;
            clientId?: string;
            name?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "services">]: never; }>(base?: I): ListServicesResponse;
    fromPartial<I_1 extends {
        services?: {
            id?: string;
            clientId?: string;
            name?: string;
        }[];
    } & {
        services?: {
            id?: string;
            clientId?: string;
            name?: string;
        }[] & ({
            id?: string;
            clientId?: string;
            name?: string;
        } & {
            id?: string;
            clientId?: string;
            name?: string;
        } & { [K_3 in Exclude<keyof I_1["services"][number], keyof Service>]: never; })[] & { [K_4 in Exclude<keyof I_1["services"], keyof {
            id?: string;
            clientId?: string;
            name?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "services">]: never; }>(object: I_1): ListServicesResponse;
};
export declare const GetServiceRequest: {
    encode(message: GetServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceRequest;
    fromJSON(object: any): GetServiceRequest;
    toJSON(message: GetServiceRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): GetServiceRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): GetServiceRequest;
};
export declare const GetServiceResponse: {
    encode(message: GetServiceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceResponse;
    fromJSON(object: any): GetServiceResponse;
    toJSON(message: GetServiceResponse): unknown;
    create<I extends {
        service?: {
            service?: {
                id?: string;
                clientId?: string;
                name?: string;
            };
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[];
        };
    } & {
        service?: {
            service?: {
                id?: string;
                clientId?: string;
                name?: string;
            };
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[];
        } & {
            service?: {
                id?: string;
                clientId?: string;
                name?: string;
            } & {
                id?: string;
                clientId?: string;
                name?: string;
            } & { [K in Exclude<keyof I["service"]["service"], keyof Service>]: never; };
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
            } & { [K_1 in Exclude<keyof I["service"]["secrets"][number], keyof import("../iam").Secret>]: never; })[] & { [K_2 in Exclude<keyof I["service"]["secrets"], keyof {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[]>]: never; };
        } & { [K_3 in Exclude<keyof I["service"], keyof ServiceDetail>]: never; };
    } & { [K_4 in Exclude<keyof I, "service">]: never; }>(base?: I): GetServiceResponse;
    fromPartial<I_1 extends {
        service?: {
            service?: {
                id?: string;
                clientId?: string;
                name?: string;
            };
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[];
        };
    } & {
        service?: {
            service?: {
                id?: string;
                clientId?: string;
                name?: string;
            };
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[];
        } & {
            service?: {
                id?: string;
                clientId?: string;
                name?: string;
            } & {
                id?: string;
                clientId?: string;
                name?: string;
            } & { [K_5 in Exclude<keyof I_1["service"]["service"], keyof Service>]: never; };
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
            } & { [K_6 in Exclude<keyof I_1["service"]["secrets"][number], keyof import("../iam").Secret>]: never; })[] & { [K_7 in Exclude<keyof I_1["service"]["secrets"], keyof {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[]>]: never; };
        } & { [K_8 in Exclude<keyof I_1["service"], keyof ServiceDetail>]: never; };
    } & { [K_9 in Exclude<keyof I_1, "service">]: never; }>(object: I_1): GetServiceResponse;
};
export declare const CreateServiceRequest: {
    encode(message: CreateServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateServiceRequest;
    fromJSON(object: any): CreateServiceRequest;
    toJSON(message: CreateServiceRequest): unknown;
    create<I extends {
        name?: string;
    } & {
        name?: string;
    } & { [K in Exclude<keyof I, "name">]: never; }>(base?: I): CreateServiceRequest;
    fromPartial<I_1 extends {
        name?: string;
    } & {
        name?: string;
    } & { [K_1 in Exclude<keyof I_1, "name">]: never; }>(object: I_1): CreateServiceRequest;
};
export declare const CreateServiceResponse: {
    encode(message: CreateServiceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateServiceResponse;
    fromJSON(object: any): CreateServiceResponse;
    toJSON(message: CreateServiceResponse): unknown;
    create<I extends {
        service?: {
            id?: string;
            clientId?: string;
            name?: string;
        };
    } & {
        service?: {
            id?: string;
            clientId?: string;
            name?: string;
        } & {
            id?: string;
            clientId?: string;
            name?: string;
        } & { [K in Exclude<keyof I["service"], keyof Service>]: never; };
    } & { [K_1 in Exclude<keyof I, "service">]: never; }>(base?: I): CreateServiceResponse;
    fromPartial<I_1 extends {
        service?: {
            id?: string;
            clientId?: string;
            name?: string;
        };
    } & {
        service?: {
            id?: string;
            clientId?: string;
            name?: string;
        } & {
            id?: string;
            clientId?: string;
            name?: string;
        } & { [K_2 in Exclude<keyof I_1["service"], keyof Service>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "service">]: never; }>(object: I_1): CreateServiceResponse;
};
export declare const DeleteServiceRequest: {
    encode(message: DeleteServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteServiceRequest;
    fromJSON(object: any): DeleteServiceRequest;
    toJSON(message: DeleteServiceRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): DeleteServiceRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): DeleteServiceRequest;
};
export declare const DeleteServiceResponse: {
    encode(_: DeleteServiceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteServiceResponse;
    fromJSON(_: any): DeleteServiceResponse;
    toJSON(_: DeleteServiceResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): DeleteServiceResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): DeleteServiceResponse;
};
export declare const AddServiceSecretRequest: {
    encode(message: AddServiceSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddServiceSecretRequest;
    fromJSON(object: any): AddServiceSecretRequest;
    toJSON(message: AddServiceSecretRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): AddServiceSecretRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): AddServiceSecretRequest;
};
export declare const AddServiceSecretResponse: {
    encode(message: AddServiceSecretResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddServiceSecretResponse;
    fromJSON(object: any): AddServiceSecretResponse;
    toJSON(message: AddServiceSecretResponse): unknown;
    create<I extends {
        service?: {
            service?: {
                id?: string;
                clientId?: string;
                name?: string;
            };
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[];
        };
    } & {
        service?: {
            service?: {
                id?: string;
                clientId?: string;
                name?: string;
            };
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[];
        } & {
            service?: {
                id?: string;
                clientId?: string;
                name?: string;
            } & {
                id?: string;
                clientId?: string;
                name?: string;
            } & { [K in Exclude<keyof I["service"]["service"], keyof Service>]: never; };
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
            } & { [K_1 in Exclude<keyof I["service"]["secrets"][number], keyof import("../iam").Secret>]: never; })[] & { [K_2 in Exclude<keyof I["service"]["secrets"], keyof {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[]>]: never; };
        } & { [K_3 in Exclude<keyof I["service"], keyof ServiceDetail>]: never; };
    } & { [K_4 in Exclude<keyof I, "service">]: never; }>(base?: I): AddServiceSecretResponse;
    fromPartial<I_1 extends {
        service?: {
            service?: {
                id?: string;
                clientId?: string;
                name?: string;
            };
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[];
        };
    } & {
        service?: {
            service?: {
                id?: string;
                clientId?: string;
                name?: string;
            };
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[];
        } & {
            service?: {
                id?: string;
                clientId?: string;
                name?: string;
            } & {
                id?: string;
                clientId?: string;
                name?: string;
            } & { [K_5 in Exclude<keyof I_1["service"]["service"], keyof Service>]: never; };
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
            } & { [K_6 in Exclude<keyof I_1["service"]["secrets"][number], keyof import("../iam").Secret>]: never; })[] & { [K_7 in Exclude<keyof I_1["service"]["secrets"], keyof {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[]>]: never; };
        } & { [K_8 in Exclude<keyof I_1["service"], keyof ServiceDetail>]: never; };
    } & { [K_9 in Exclude<keyof I_1, "service">]: never; }>(object: I_1): AddServiceSecretResponse;
};
export declare const ActivateServiceSecretRequest: {
    encode(message: ActivateServiceSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateServiceSecretRequest;
    fromJSON(object: any): ActivateServiceSecretRequest;
    toJSON(message: ActivateServiceSecretRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): ActivateServiceSecretRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): ActivateServiceSecretRequest;
};
export declare const ActivateServiceSecretResponse: {
    encode(_: ActivateServiceSecretResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateServiceSecretResponse;
    fromJSON(_: any): ActivateServiceSecretResponse;
    toJSON(_: ActivateServiceSecretResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): ActivateServiceSecretResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ActivateServiceSecretResponse;
};
export declare const DeactivateServiceSecretRequest: {
    encode(message: DeactivateServiceSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateServiceSecretRequest;
    fromJSON(object: any): DeactivateServiceSecretRequest;
    toJSON(message: DeactivateServiceSecretRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): DeactivateServiceSecretRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): DeactivateServiceSecretRequest;
};
export declare const DeactivateServiceSecretResponse: {
    encode(_: DeactivateServiceSecretResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateServiceSecretResponse;
    fromJSON(_: any): DeactivateServiceSecretResponse;
    toJSON(_: DeactivateServiceSecretResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): DeactivateServiceSecretResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): DeactivateServiceSecretResponse;
};
export declare const DeleteServiceSecretRequest: {
    encode(message: DeleteServiceSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteServiceSecretRequest;
    fromJSON(object: any): DeleteServiceSecretRequest;
    toJSON(message: DeleteServiceSecretRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): DeleteServiceSecretRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): DeleteServiceSecretRequest;
};
export declare const DeleteServiceSecretResponse: {
    encode(_: DeleteServiceSecretResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteServiceSecretResponse;
    fromJSON(_: any): DeleteServiceSecretResponse;
    toJSON(_: DeleteServiceSecretResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): DeleteServiceSecretResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): DeleteServiceSecretResponse;
};
export interface AdminSvc {
    /** User management */
    ListUsers(request: DeepPartial<ListUsersRequest>, metadata?: grpc.Metadata): Promise<ListUsersResponse>;
    GetUser(request: DeepPartial<GetUserRequest>, metadata?: grpc.Metadata): Promise<GetUserResponse>;
    PatchUser(request: DeepPartial<PatchUserRequest>, metadata?: grpc.Metadata): Promise<PatchUserResponse>;
    CreateUser(request: DeepPartial<CreateUserRequest>, metadata?: grpc.Metadata): Promise<CreateUserResponse>;
    DeleteUser(request: DeepPartial<DeleteUserRequest>, metadata?: grpc.Metadata): Promise<DeleteUserResponse>;
    SetUserRoles(request: DeepPartial<SetUserRolesRequest>, metadata?: grpc.Metadata): Promise<SetUserRolesResponse>;
    SetUserGroups(request: DeepPartial<SetUserGroupsRequest>, metadata?: grpc.Metadata): Promise<SetUserGroupsResponse>;
    /** Permission management */
    ListPermissions(request: DeepPartial<ListPermissionsRequest>, metadata?: grpc.Metadata): Promise<ListPermissionsResponse>;
    GetPermission(request: DeepPartial<GetPermissionRequest>, metadata?: grpc.Metadata): Promise<GetPermissionResponse>;
    CreatePermission(request: DeepPartial<CreatePermissionRequest>, metadata?: grpc.Metadata): Promise<CreatePermissionResponse>;
    PatchPermission(request: DeepPartial<PatchPermissionRequest>, metadata?: grpc.Metadata): Promise<PatchPermissionResponse>;
    DeletePermission(request: DeepPartial<DeletePermissionRequest>, metadata?: grpc.Metadata): Promise<DeletePermissionResponse>;
    /** Group management */
    ListGroups(request: DeepPartial<ListGroupsRequest>, metadata?: grpc.Metadata): Promise<ListGroupsResponse>;
    GetGroup(request: DeepPartial<GetGroupRequest>, metadata?: grpc.Metadata): Promise<GetGroupResponse>;
    CreateGroup(request: DeepPartial<CreateGroupRequest>, metadata?: grpc.Metadata): Promise<CreateGroupResponse>;
    PatchGroup(request: DeepPartial<PatchGroupRequest>, metadata?: grpc.Metadata): Promise<PatchGroupResponse>;
    DeleteGroup(request: DeepPartial<DeleteGroupRequest>, metadata?: grpc.Metadata): Promise<DeleteGroupResponse>;
    /** Role management */
    ListRoles(request: DeepPartial<ListRolesRequest>, metadata?: grpc.Metadata): Promise<ListRolesResponse>;
    GetRole(request: DeepPartial<GetRoleRequest>, metadata?: grpc.Metadata): Promise<GetRoleResponse>;
    CreateRole(request: DeepPartial<CreateRoleRequest>, metadata?: grpc.Metadata): Promise<CreateRoleResponse>;
    PatchRole(request: DeepPartial<PatchRoleRequest>, metadata?: grpc.Metadata): Promise<PatchRoleResponse>;
    DeleteRole(request: DeepPartial<DeleteRoleRequest>, metadata?: grpc.Metadata): Promise<DeleteRoleResponse>;
    /** Role ↔ Permission bindings */
    SetRolePermissions(request: DeepPartial<SetRolePermissionsRequest>, metadata?: grpc.Metadata): Promise<SetRolePermissionsResponse>;
    /** Group ↔ Role bindings */
    SetGroupRoles(request: DeepPartial<SetGroupRolesRequest>, metadata?: grpc.Metadata): Promise<SetGroupRolesResponse>;
    /** User ↔ Group bindings */
    AddUserToGroup(request: DeepPartial<AddUserToGroupRequest>, metadata?: grpc.Metadata): Promise<AddUserToGroupResponse>;
    RemoveUserFromGroup(request: DeepPartial<RemoveUserFromGroupRequest>, metadata?: grpc.Metadata): Promise<RemoveUserFromGroupResponse>;
    ListGroupUsers(request: DeepPartial<ListGroupUsersRequest>, metadata?: grpc.Metadata): Promise<ListGroupUsersResponse>;
    /** Passkey management */
    ListPasskeys(request: DeepPartial<ListPasskeysRequest>, metadata?: grpc.Metadata): Promise<ListPasskeysResponse>;
    DeletePasskey(request: DeepPartial<DeletePasskeyRequest>, metadata?: grpc.Metadata): Promise<DeletePasskeyResponse>;
    /** Service management */
    ListServices(request: DeepPartial<ListServicesRequest>, metadata?: grpc.Metadata): Promise<ListServicesResponse>;
    GetService(request: DeepPartial<GetServiceRequest>, metadata?: grpc.Metadata): Promise<GetServiceResponse>;
    CreateService(request: DeepPartial<CreateServiceRequest>, metadata?: grpc.Metadata): Promise<CreateServiceResponse>;
    DeleteService(request: DeepPartial<DeleteServiceRequest>, metadata?: grpc.Metadata): Promise<DeleteServiceResponse>;
    AddServiceSecret(request: DeepPartial<AddServiceSecretRequest>, metadata?: grpc.Metadata): Promise<AddServiceSecretResponse>;
    ActivateServiceSecret(request: DeepPartial<ActivateServiceSecretRequest>, metadata?: grpc.Metadata): Promise<ActivateServiceSecretResponse>;
    DeactivateServiceSecret(request: DeepPartial<DeactivateServiceSecretRequest>, metadata?: grpc.Metadata): Promise<DeactivateServiceSecretResponse>;
    DeleteServiceSecret(request: DeepPartial<DeleteServiceSecretRequest>, metadata?: grpc.Metadata): Promise<DeleteServiceSecretResponse>;
}
export declare class AdminSvcClientImpl implements AdminSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    ListUsers(request: DeepPartial<ListUsersRequest>, metadata?: grpc.Metadata): Promise<ListUsersResponse>;
    GetUser(request: DeepPartial<GetUserRequest>, metadata?: grpc.Metadata): Promise<GetUserResponse>;
    PatchUser(request: DeepPartial<PatchUserRequest>, metadata?: grpc.Metadata): Promise<PatchUserResponse>;
    CreateUser(request: DeepPartial<CreateUserRequest>, metadata?: grpc.Metadata): Promise<CreateUserResponse>;
    DeleteUser(request: DeepPartial<DeleteUserRequest>, metadata?: grpc.Metadata): Promise<DeleteUserResponse>;
    SetUserRoles(request: DeepPartial<SetUserRolesRequest>, metadata?: grpc.Metadata): Promise<SetUserRolesResponse>;
    SetUserGroups(request: DeepPartial<SetUserGroupsRequest>, metadata?: grpc.Metadata): Promise<SetUserGroupsResponse>;
    ListPermissions(request: DeepPartial<ListPermissionsRequest>, metadata?: grpc.Metadata): Promise<ListPermissionsResponse>;
    GetPermission(request: DeepPartial<GetPermissionRequest>, metadata?: grpc.Metadata): Promise<GetPermissionResponse>;
    CreatePermission(request: DeepPartial<CreatePermissionRequest>, metadata?: grpc.Metadata): Promise<CreatePermissionResponse>;
    PatchPermission(request: DeepPartial<PatchPermissionRequest>, metadata?: grpc.Metadata): Promise<PatchPermissionResponse>;
    DeletePermission(request: DeepPartial<DeletePermissionRequest>, metadata?: grpc.Metadata): Promise<DeletePermissionResponse>;
    ListGroups(request: DeepPartial<ListGroupsRequest>, metadata?: grpc.Metadata): Promise<ListGroupsResponse>;
    GetGroup(request: DeepPartial<GetGroupRequest>, metadata?: grpc.Metadata): Promise<GetGroupResponse>;
    CreateGroup(request: DeepPartial<CreateGroupRequest>, metadata?: grpc.Metadata): Promise<CreateGroupResponse>;
    PatchGroup(request: DeepPartial<PatchGroupRequest>, metadata?: grpc.Metadata): Promise<PatchGroupResponse>;
    DeleteGroup(request: DeepPartial<DeleteGroupRequest>, metadata?: grpc.Metadata): Promise<DeleteGroupResponse>;
    ListRoles(request: DeepPartial<ListRolesRequest>, metadata?: grpc.Metadata): Promise<ListRolesResponse>;
    GetRole(request: DeepPartial<GetRoleRequest>, metadata?: grpc.Metadata): Promise<GetRoleResponse>;
    CreateRole(request: DeepPartial<CreateRoleRequest>, metadata?: grpc.Metadata): Promise<CreateRoleResponse>;
    PatchRole(request: DeepPartial<PatchRoleRequest>, metadata?: grpc.Metadata): Promise<PatchRoleResponse>;
    DeleteRole(request: DeepPartial<DeleteRoleRequest>, metadata?: grpc.Metadata): Promise<DeleteRoleResponse>;
    SetRolePermissions(request: DeepPartial<SetRolePermissionsRequest>, metadata?: grpc.Metadata): Promise<SetRolePermissionsResponse>;
    SetGroupRoles(request: DeepPartial<SetGroupRolesRequest>, metadata?: grpc.Metadata): Promise<SetGroupRolesResponse>;
    AddUserToGroup(request: DeepPartial<AddUserToGroupRequest>, metadata?: grpc.Metadata): Promise<AddUserToGroupResponse>;
    RemoveUserFromGroup(request: DeepPartial<RemoveUserFromGroupRequest>, metadata?: grpc.Metadata): Promise<RemoveUserFromGroupResponse>;
    ListGroupUsers(request: DeepPartial<ListGroupUsersRequest>, metadata?: grpc.Metadata): Promise<ListGroupUsersResponse>;
    ListPasskeys(request: DeepPartial<ListPasskeysRequest>, metadata?: grpc.Metadata): Promise<ListPasskeysResponse>;
    DeletePasskey(request: DeepPartial<DeletePasskeyRequest>, metadata?: grpc.Metadata): Promise<DeletePasskeyResponse>;
    ListServices(request: DeepPartial<ListServicesRequest>, metadata?: grpc.Metadata): Promise<ListServicesResponse>;
    GetService(request: DeepPartial<GetServiceRequest>, metadata?: grpc.Metadata): Promise<GetServiceResponse>;
    CreateService(request: DeepPartial<CreateServiceRequest>, metadata?: grpc.Metadata): Promise<CreateServiceResponse>;
    DeleteService(request: DeepPartial<DeleteServiceRequest>, metadata?: grpc.Metadata): Promise<DeleteServiceResponse>;
    AddServiceSecret(request: DeepPartial<AddServiceSecretRequest>, metadata?: grpc.Metadata): Promise<AddServiceSecretResponse>;
    ActivateServiceSecret(request: DeepPartial<ActivateServiceSecretRequest>, metadata?: grpc.Metadata): Promise<ActivateServiceSecretResponse>;
    DeactivateServiceSecret(request: DeepPartial<DeactivateServiceSecretRequest>, metadata?: grpc.Metadata): Promise<DeactivateServiceSecretResponse>;
    DeleteServiceSecret(request: DeepPartial<DeleteServiceSecretRequest>, metadata?: grpc.Metadata): Promise<DeleteServiceSecretResponse>;
}
export declare const AdminSvcDesc: {
    serviceName: string;
};
export declare const AdminSvcListUsersDesc: UnaryMethodDefinitionish;
export declare const AdminSvcGetUserDesc: UnaryMethodDefinitionish;
export declare const AdminSvcPatchUserDesc: UnaryMethodDefinitionish;
export declare const AdminSvcCreateUserDesc: UnaryMethodDefinitionish;
export declare const AdminSvcDeleteUserDesc: UnaryMethodDefinitionish;
export declare const AdminSvcSetUserRolesDesc: UnaryMethodDefinitionish;
export declare const AdminSvcSetUserGroupsDesc: UnaryMethodDefinitionish;
export declare const AdminSvcListPermissionsDesc: UnaryMethodDefinitionish;
export declare const AdminSvcGetPermissionDesc: UnaryMethodDefinitionish;
export declare const AdminSvcCreatePermissionDesc: UnaryMethodDefinitionish;
export declare const AdminSvcPatchPermissionDesc: UnaryMethodDefinitionish;
export declare const AdminSvcDeletePermissionDesc: UnaryMethodDefinitionish;
export declare const AdminSvcListGroupsDesc: UnaryMethodDefinitionish;
export declare const AdminSvcGetGroupDesc: UnaryMethodDefinitionish;
export declare const AdminSvcCreateGroupDesc: UnaryMethodDefinitionish;
export declare const AdminSvcPatchGroupDesc: UnaryMethodDefinitionish;
export declare const AdminSvcDeleteGroupDesc: UnaryMethodDefinitionish;
export declare const AdminSvcListRolesDesc: UnaryMethodDefinitionish;
export declare const AdminSvcGetRoleDesc: UnaryMethodDefinitionish;
export declare const AdminSvcCreateRoleDesc: UnaryMethodDefinitionish;
export declare const AdminSvcPatchRoleDesc: UnaryMethodDefinitionish;
export declare const AdminSvcDeleteRoleDesc: UnaryMethodDefinitionish;
export declare const AdminSvcSetRolePermissionsDesc: UnaryMethodDefinitionish;
export declare const AdminSvcSetGroupRolesDesc: UnaryMethodDefinitionish;
export declare const AdminSvcAddUserToGroupDesc: UnaryMethodDefinitionish;
export declare const AdminSvcRemoveUserFromGroupDesc: UnaryMethodDefinitionish;
export declare const AdminSvcListGroupUsersDesc: UnaryMethodDefinitionish;
export declare const AdminSvcListPasskeysDesc: UnaryMethodDefinitionish;
export declare const AdminSvcDeletePasskeyDesc: UnaryMethodDefinitionish;
export declare const AdminSvcListServicesDesc: UnaryMethodDefinitionish;
export declare const AdminSvcGetServiceDesc: UnaryMethodDefinitionish;
export declare const AdminSvcCreateServiceDesc: UnaryMethodDefinitionish;
export declare const AdminSvcDeleteServiceDesc: UnaryMethodDefinitionish;
export declare const AdminSvcAddServiceSecretDesc: UnaryMethodDefinitionish;
export declare const AdminSvcActivateServiceSecretDesc: UnaryMethodDefinitionish;
export declare const AdminSvcDeactivateServiceSecretDesc: UnaryMethodDefinitionish;
export declare const AdminSvcDeleteServiceSecretDesc: UnaryMethodDefinitionish;
interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
    requestStream: any;
    responseStream: any;
}
type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;
interface Rpc {
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export declare class GrpcWebImpl {
    private host;
    private options;
    constructor(host: string, options: {
        transport?: grpc.TransportFactory;
        debug?: boolean;
        metadata?: grpc.Metadata;
        upStreamRetryCodes?: number[];
    });
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
declare const tsProtoGlobalThis: any;
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
export declare class GrpcWebError extends tsProtoGlobalThis.Error {
    code: grpc.Code;
    metadata: grpc.Metadata;
    constructor(message: string, code: grpc.Code, metadata: grpc.Metadata);
}
export {};

import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { User } from "../iam";
export declare const protobufPackage = "usersvc";
export interface ProfileRequest {
}
export interface ProfileResponse {
    user: User | undefined;
}
export interface CheckEmailRequest {
    email: string;
}
export interface CheckEmailResponse {
    exist: boolean;
}
export interface GetRequest {
    id: string;
}
export interface GetResponse {
    user: User | undefined;
}
export interface ListRequest {
}
export interface ListResponse {
    users: User[];
}
export interface DeleteRequest {
    id: string;
}
export interface DeleteResponse {
}
export interface UpdateGroupRequest {
    userId: string;
    groupIds: string[];
}
export interface UpdateGroupResponse {
}
export interface ActivateUserRequest {
    id: string;
}
export interface ActivateUserResponse {
}
export interface DeactivateUserRequest {
    id: string;
}
export interface DeactivateUserResponse {
}
export declare const ProfileRequest: {
    encode(_: ProfileRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProfileRequest;
    fromJSON(_: any): ProfileRequest;
    toJSON(_: ProfileRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): ProfileRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ProfileRequest;
};
export declare const ProfileResponse: {
    encode(message: ProfileResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProfileResponse;
    fromJSON(object: any): ProfileResponse;
    toJSON(message: ProfileResponse): unknown;
    create<I extends {
        user?: {
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
        };
    } & {
        user?: {
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
            } & { [K in Exclude<keyof I["user"]["roles"][number], keyof import("../iam").Group>]: never; })[] & { [K_1 in Exclude<keyof I["user"]["roles"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
        } & { [K_2 in Exclude<keyof I["user"], keyof User>]: never; };
    } & { [K_3 in Exclude<keyof I, "user">]: never; }>(base?: I): ProfileResponse;
    fromPartial<I_1 extends {
        user?: {
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
        };
    } & {
        user?: {
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
            } & { [K_4 in Exclude<keyof I_1["user"]["roles"][number], keyof import("../iam").Group>]: never; })[] & { [K_5 in Exclude<keyof I_1["user"]["roles"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
        } & { [K_6 in Exclude<keyof I_1["user"], keyof User>]: never; };
    } & { [K_7 in Exclude<keyof I_1, "user">]: never; }>(object: I_1): ProfileResponse;
};
export declare const CheckEmailRequest: {
    encode(message: CheckEmailRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckEmailRequest;
    fromJSON(object: any): CheckEmailRequest;
    toJSON(message: CheckEmailRequest): unknown;
    create<I extends {
        email?: string;
    } & {
        email?: string;
    } & { [K in Exclude<keyof I, "email">]: never; }>(base?: I): CheckEmailRequest;
    fromPartial<I_1 extends {
        email?: string;
    } & {
        email?: string;
    } & { [K_1 in Exclude<keyof I_1, "email">]: never; }>(object: I_1): CheckEmailRequest;
};
export declare const CheckEmailResponse: {
    encode(message: CheckEmailResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckEmailResponse;
    fromJSON(object: any): CheckEmailResponse;
    toJSON(message: CheckEmailResponse): unknown;
    create<I extends {
        exist?: boolean;
    } & {
        exist?: boolean;
    } & { [K in Exclude<keyof I, "exist">]: never; }>(base?: I): CheckEmailResponse;
    fromPartial<I_1 extends {
        exist?: boolean;
    } & {
        exist?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "exist">]: never; }>(object: I_1): CheckEmailResponse;
};
export declare const GetRequest: {
    encode(message: GetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetRequest;
    fromJSON(object: any): GetRequest;
    toJSON(message: GetRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): GetRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): GetRequest;
};
export declare const GetResponse: {
    encode(message: GetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetResponse;
    fromJSON(object: any): GetResponse;
    toJSON(message: GetResponse): unknown;
    create<I extends {
        user?: {
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
        };
    } & {
        user?: {
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
            } & { [K in Exclude<keyof I["user"]["roles"][number], keyof import("../iam").Group>]: never; })[] & { [K_1 in Exclude<keyof I["user"]["roles"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
        } & { [K_2 in Exclude<keyof I["user"], keyof User>]: never; };
    } & { [K_3 in Exclude<keyof I, "user">]: never; }>(base?: I): GetResponse;
    fromPartial<I_1 extends {
        user?: {
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
        };
    } & {
        user?: {
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
            } & { [K_4 in Exclude<keyof I_1["user"]["roles"][number], keyof import("../iam").Group>]: never; })[] & { [K_5 in Exclude<keyof I_1["user"]["roles"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
        } & { [K_6 in Exclude<keyof I_1["user"], keyof User>]: never; };
    } & { [K_7 in Exclude<keyof I_1, "user">]: never; }>(object: I_1): GetResponse;
};
export declare const ListRequest: {
    encode(_: ListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListRequest;
    fromJSON(_: any): ListRequest;
    toJSON(_: ListRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): ListRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ListRequest;
};
export declare const ListResponse: {
    encode(message: ListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListResponse;
    fromJSON(object: any): ListResponse;
    toJSON(message: ListResponse): unknown;
    create<I extends {
        users?: {
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
        }[];
    } & {
        users?: {
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
        }[] & ({
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
            } & { [K in Exclude<keyof I["users"][number]["roles"][number], keyof import("../iam").Group>]: never; })[] & { [K_1 in Exclude<keyof I["users"][number]["roles"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
        } & { [K_2 in Exclude<keyof I["users"][number], keyof User>]: never; })[] & { [K_3 in Exclude<keyof I["users"], keyof {
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
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, "users">]: never; }>(base?: I): ListResponse;
    fromPartial<I_1 extends {
        users?: {
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
        }[];
    } & {
        users?: {
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
        }[] & ({
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
            } & { [K_5 in Exclude<keyof I_1["users"][number]["roles"][number], keyof import("../iam").Group>]: never; })[] & { [K_6 in Exclude<keyof I_1["users"][number]["roles"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
            active?: boolean;
            lastLoginAt?: number;
            lastActivityAt?: number;
        } & { [K_7 in Exclude<keyof I_1["users"][number], keyof User>]: never; })[] & { [K_8 in Exclude<keyof I_1["users"], keyof {
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
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, "users">]: never; }>(object: I_1): ListResponse;
};
export declare const DeleteRequest: {
    encode(message: DeleteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRequest;
    fromJSON(object: any): DeleteRequest;
    toJSON(message: DeleteRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): DeleteRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): DeleteRequest;
};
export declare const DeleteResponse: {
    encode(_: DeleteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteResponse;
    fromJSON(_: any): DeleteResponse;
    toJSON(_: DeleteResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): DeleteResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): DeleteResponse;
};
export declare const UpdateGroupRequest: {
    encode(message: UpdateGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupRequest;
    fromJSON(object: any): UpdateGroupRequest;
    toJSON(message: UpdateGroupRequest): unknown;
    create<I extends {
        userId?: string;
        groupIds?: string[];
    } & {
        userId?: string;
        groupIds?: string[] & string[] & { [K in Exclude<keyof I["groupIds"], keyof string[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof UpdateGroupRequest>]: never; }>(base?: I): UpdateGroupRequest;
    fromPartial<I_1 extends {
        userId?: string;
        groupIds?: string[];
    } & {
        userId?: string;
        groupIds?: string[] & string[] & { [K_2 in Exclude<keyof I_1["groupIds"], keyof string[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof UpdateGroupRequest>]: never; }>(object: I_1): UpdateGroupRequest;
};
export declare const UpdateGroupResponse: {
    encode(_: UpdateGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupResponse;
    fromJSON(_: any): UpdateGroupResponse;
    toJSON(_: UpdateGroupResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): UpdateGroupResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): UpdateGroupResponse;
};
export declare const ActivateUserRequest: {
    encode(message: ActivateUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateUserRequest;
    fromJSON(object: any): ActivateUserRequest;
    toJSON(message: ActivateUserRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): ActivateUserRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): ActivateUserRequest;
};
export declare const ActivateUserResponse: {
    encode(_: ActivateUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateUserResponse;
    fromJSON(_: any): ActivateUserResponse;
    toJSON(_: ActivateUserResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): ActivateUserResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ActivateUserResponse;
};
export declare const DeactivateUserRequest: {
    encode(message: DeactivateUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateUserRequest;
    fromJSON(object: any): DeactivateUserRequest;
    toJSON(message: DeactivateUserRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): DeactivateUserRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): DeactivateUserRequest;
};
export declare const DeactivateUserResponse: {
    encode(_: DeactivateUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateUserResponse;
    fromJSON(_: any): DeactivateUserResponse;
    toJSON(_: DeactivateUserResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): DeactivateUserResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): DeactivateUserResponse;
};
export interface UserSvc {
    /** Profile returns the user profile associated with the access token associated with the request. */
    Profile(request: DeepPartial<ProfileRequest>, metadata?: grpc.Metadata): Promise<ProfileResponse>;
    /** CheckEmail checks if the account is already taken. */
    CheckEmail(request: DeepPartial<CheckEmailRequest>, metadata?: grpc.Metadata): Promise<CheckEmailResponse>;
    /** List lists all users. */
    List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    /** Get gets the details of a specific user. */
    Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
    /** Delete delete a user. */
    Delete(request: DeepPartial<DeleteRequest>, metadata?: grpc.Metadata): Promise<DeleteResponse>;
    /** UpdateGroups updates the groups of the user. */
    UpdateGroups(request: DeepPartial<UpdateGroupRequest>, metadata?: grpc.Metadata): Promise<UpdateGroupResponse>;
    ActivateUser(request: DeepPartial<ActivateUserRequest>, metadata?: grpc.Metadata): Promise<ActivateUserResponse>;
    DeactivateUser(request: DeepPartial<DeactivateUserRequest>, metadata?: grpc.Metadata): Promise<DeactivateUserResponse>;
}
export declare class UserSvcClientImpl implements UserSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    Profile(request: DeepPartial<ProfileRequest>, metadata?: grpc.Metadata): Promise<ProfileResponse>;
    CheckEmail(request: DeepPartial<CheckEmailRequest>, metadata?: grpc.Metadata): Promise<CheckEmailResponse>;
    List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
    Delete(request: DeepPartial<DeleteRequest>, metadata?: grpc.Metadata): Promise<DeleteResponse>;
    UpdateGroups(request: DeepPartial<UpdateGroupRequest>, metadata?: grpc.Metadata): Promise<UpdateGroupResponse>;
    ActivateUser(request: DeepPartial<ActivateUserRequest>, metadata?: grpc.Metadata): Promise<ActivateUserResponse>;
    DeactivateUser(request: DeepPartial<DeactivateUserRequest>, metadata?: grpc.Metadata): Promise<DeactivateUserResponse>;
}
export declare const UserSvcDesc: {
    serviceName: string;
};
export declare const UserSvcProfileDesc: UnaryMethodDefinitionish;
export declare const UserSvcCheckEmailDesc: UnaryMethodDefinitionish;
export declare const UserSvcListDesc: UnaryMethodDefinitionish;
export declare const UserSvcGetDesc: UnaryMethodDefinitionish;
export declare const UserSvcDeleteDesc: UnaryMethodDefinitionish;
export declare const UserSvcUpdateGroupsDesc: UnaryMethodDefinitionish;
export declare const UserSvcActivateUserDesc: UnaryMethodDefinitionish;
export declare const UserSvcDeactivateUserDesc: UnaryMethodDefinitionish;
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

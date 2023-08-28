import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { User } from "../iam";
export declare const protobufPackage = "usersvc";
export interface ProfileRequest {
}
export interface ProfileResponse {
    user: User | undefined;
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
    groupId: string[];
}
export interface UpdateGroupResponse {
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
            groupOwner?: boolean;
            groupAdmin?: boolean;
            groupUser?: boolean;
            roles?: {
                id?: string;
                name?: string;
            }[];
        };
    } & {
        user?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            groupOwner?: boolean;
            groupAdmin?: boolean;
            groupUser?: boolean;
            roles?: {
                id?: string;
                name?: string;
            }[];
        } & {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            groupOwner?: boolean;
            groupAdmin?: boolean;
            groupUser?: boolean;
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
        } & { [K_2 in Exclude<keyof I["user"], keyof User>]: never; };
    } & { [K_3 in Exclude<keyof I, "user">]: never; }>(base?: I): ProfileResponse;
    fromPartial<I_1 extends {
        user?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            groupOwner?: boolean;
            groupAdmin?: boolean;
            groupUser?: boolean;
            roles?: {
                id?: string;
                name?: string;
            }[];
        };
    } & {
        user?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            groupOwner?: boolean;
            groupAdmin?: boolean;
            groupUser?: boolean;
            roles?: {
                id?: string;
                name?: string;
            }[];
        } & {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            groupOwner?: boolean;
            groupAdmin?: boolean;
            groupUser?: boolean;
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
        } & { [K_6 in Exclude<keyof I_1["user"], keyof User>]: never; };
    } & { [K_7 in Exclude<keyof I_1, "user">]: never; }>(object: I_1): ProfileResponse;
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
            groupOwner?: boolean;
            groupAdmin?: boolean;
            groupUser?: boolean;
            roles?: {
                id?: string;
                name?: string;
            }[];
        };
    } & {
        user?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            groupOwner?: boolean;
            groupAdmin?: boolean;
            groupUser?: boolean;
            roles?: {
                id?: string;
                name?: string;
            }[];
        } & {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            groupOwner?: boolean;
            groupAdmin?: boolean;
            groupUser?: boolean;
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
        } & { [K_2 in Exclude<keyof I["user"], keyof User>]: never; };
    } & { [K_3 in Exclude<keyof I, "user">]: never; }>(base?: I): GetResponse;
    fromPartial<I_1 extends {
        user?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            groupOwner?: boolean;
            groupAdmin?: boolean;
            groupUser?: boolean;
            roles?: {
                id?: string;
                name?: string;
            }[];
        };
    } & {
        user?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            groupOwner?: boolean;
            groupAdmin?: boolean;
            groupUser?: boolean;
            roles?: {
                id?: string;
                name?: string;
            }[];
        } & {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            groupOwner?: boolean;
            groupAdmin?: boolean;
            groupUser?: boolean;
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
            groupOwner?: boolean;
            groupAdmin?: boolean;
            groupUser?: boolean;
            roles?: {
                id?: string;
                name?: string;
            }[];
        }[];
    } & {
        users?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            groupOwner?: boolean;
            groupAdmin?: boolean;
            groupUser?: boolean;
            roles?: {
                id?: string;
                name?: string;
            }[];
        }[] & ({
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            groupOwner?: boolean;
            groupAdmin?: boolean;
            groupUser?: boolean;
            roles?: {
                id?: string;
                name?: string;
            }[];
        } & {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            groupOwner?: boolean;
            groupAdmin?: boolean;
            groupUser?: boolean;
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
        } & { [K_2 in Exclude<keyof I["users"][number], keyof User>]: never; })[] & { [K_3 in Exclude<keyof I["users"], keyof {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            groupOwner?: boolean;
            groupAdmin?: boolean;
            groupUser?: boolean;
            roles?: {
                id?: string;
                name?: string;
            }[];
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, "users">]: never; }>(base?: I): ListResponse;
    fromPartial<I_1 extends {
        users?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            groupOwner?: boolean;
            groupAdmin?: boolean;
            groupUser?: boolean;
            roles?: {
                id?: string;
                name?: string;
            }[];
        }[];
    } & {
        users?: {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            groupOwner?: boolean;
            groupAdmin?: boolean;
            groupUser?: boolean;
            roles?: {
                id?: string;
                name?: string;
            }[];
        }[] & ({
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            groupOwner?: boolean;
            groupAdmin?: boolean;
            groupUser?: boolean;
            roles?: {
                id?: string;
                name?: string;
            }[];
        } & {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            groupOwner?: boolean;
            groupAdmin?: boolean;
            groupUser?: boolean;
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
        } & { [K_7 in Exclude<keyof I_1["users"][number], keyof User>]: never; })[] & { [K_8 in Exclude<keyof I_1["users"], keyof {
            id?: string;
            email?: string;
            givenName?: string;
            familyName?: string;
            groupOwner?: boolean;
            groupAdmin?: boolean;
            groupUser?: boolean;
            roles?: {
                id?: string;
                name?: string;
            }[];
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
        groupId?: string[];
    } & {
        userId?: string;
        groupId?: string[] & string[] & { [K in Exclude<keyof I["groupId"], keyof string[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof UpdateGroupRequest>]: never; }>(base?: I): UpdateGroupRequest;
    fromPartial<I_1 extends {
        userId?: string;
        groupId?: string[];
    } & {
        userId?: string;
        groupId?: string[] & string[] & { [K_2 in Exclude<keyof I_1["groupId"], keyof string[]>]: never; };
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
export interface UserSvc {
    Profile(request: DeepPartial<ProfileRequest>, metadata?: grpc.Metadata): Promise<ProfileResponse>;
    /**
     * Adminitrator or owner only
     * list all users
     */
    List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    /**
     * Adminitrator or owner only.
     * get the details of a specific user.
     */
    Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
    /**
     * Adminitrator or owner only.
     * delete a user.
     */
    Delete(request: DeepPartial<DeleteRequest>, metadata?: grpc.Metadata): Promise<DeleteResponse>;
    /**
     * Adminitrator or owner only.
     * attach a user to a group
     */
    UpdateGroups(request: DeepPartial<UpdateGroupRequest>, metadata?: grpc.Metadata): Promise<UpdateGroupResponse>;
}
export declare class UserSvcClientImpl implements UserSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    Profile(request: DeepPartial<ProfileRequest>, metadata?: grpc.Metadata): Promise<ProfileResponse>;
    List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
    Delete(request: DeepPartial<DeleteRequest>, metadata?: grpc.Metadata): Promise<DeleteResponse>;
    UpdateGroups(request: DeepPartial<UpdateGroupRequest>, metadata?: grpc.Metadata): Promise<UpdateGroupResponse>;
}
export declare const UserSvcDesc: {
    serviceName: string;
};
export declare const UserSvcProfileDesc: UnaryMethodDefinitionish;
export declare const UserSvcListDesc: UnaryMethodDefinitionish;
export declare const UserSvcGetDesc: UnaryMethodDefinitionish;
export declare const UserSvcDeleteDesc: UnaryMethodDefinitionish;
export declare const UserSvcUpdateGroupsDesc: UnaryMethodDefinitionish;
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

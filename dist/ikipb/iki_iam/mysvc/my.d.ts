import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Passkey, User, UserDetail } from "../iam";
export declare const protobufPackage = "mysvc";
export interface GetMyProfileRequest {
}
export interface GetMyProfileResponse {
    user: UserDetail | undefined;
}
export interface PatchMyProfileRequest {
    givenName?: string | undefined;
    familyName?: string | undefined;
}
export interface PatchMyProfileResponse {
    user: User | undefined;
}
export interface ListMyPasskeysRequest {
}
export interface ListMyPasskeysResponse {
    passkeys: Passkey[];
}
export interface BeginPasskeyRegistrationRequest {
}
export interface BeginPasskeyRegistrationResponse {
    optionsJson: string;
    sessionId: string;
}
export interface FinishPasskeyRegistrationRequest {
    sessionId: string;
    credentialJson: string;
    name: string;
}
export interface FinishPasskeyRegistrationResponse {
    passkey: Passkey | undefined;
}
export interface DeleteMyPasskeyRequest {
    id: string;
}
export interface DeleteMyPasskeyResponse {
}
export declare const GetMyProfileRequest: {
    encode(_: GetMyProfileRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyProfileRequest;
    fromJSON(_: any): GetMyProfileRequest;
    toJSON(_: GetMyProfileRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): GetMyProfileRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): GetMyProfileRequest;
};
export declare const GetMyProfileResponse: {
    encode(message: GetMyProfileResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyProfileResponse;
    fromJSON(object: any): GetMyProfileResponse;
    toJSON(message: GetMyProfileResponse): unknown;
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
            } & { [K_1 in Exclude<keyof I["user"]["groups"][number], keyof import("../iam").Group>]: never; })[] & { [K_2 in Exclude<keyof I["user"]["groups"], keyof {
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
            } & { [K_3 in Exclude<keyof I["user"]["directRoles"][number], keyof import("../iam").Role>]: never; })[] & { [K_4 in Exclude<keyof I["user"]["directRoles"], keyof {
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
            } & { [K_5 in Exclude<keyof I["user"]["effectiveRoles"][number], keyof import("../iam").Role>]: never; })[] & { [K_6 in Exclude<keyof I["user"]["effectiveRoles"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
        } & { [K_7 in Exclude<keyof I["user"], keyof UserDetail>]: never; };
    } & { [K_8 in Exclude<keyof I, "user">]: never; }>(base?: I): GetMyProfileResponse;
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
            } & { [K_10 in Exclude<keyof I_1["user"]["groups"][number], keyof import("../iam").Group>]: never; })[] & { [K_11 in Exclude<keyof I_1["user"]["groups"], keyof {
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
            } & { [K_12 in Exclude<keyof I_1["user"]["directRoles"][number], keyof import("../iam").Role>]: never; })[] & { [K_13 in Exclude<keyof I_1["user"]["directRoles"], keyof {
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
            } & { [K_14 in Exclude<keyof I_1["user"]["effectiveRoles"][number], keyof import("../iam").Role>]: never; })[] & { [K_15 in Exclude<keyof I_1["user"]["effectiveRoles"], keyof {
                id?: string;
                name?: string;
            }[]>]: never; };
        } & { [K_16 in Exclude<keyof I_1["user"], keyof UserDetail>]: never; };
    } & { [K_17 in Exclude<keyof I_1, "user">]: never; }>(object: I_1): GetMyProfileResponse;
};
export declare const PatchMyProfileRequest: {
    encode(message: PatchMyProfileRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PatchMyProfileRequest;
    fromJSON(object: any): PatchMyProfileRequest;
    toJSON(message: PatchMyProfileRequest): unknown;
    create<I extends {
        givenName?: string | undefined;
        familyName?: string | undefined;
    } & {
        givenName?: string | undefined;
        familyName?: string | undefined;
    } & { [K in Exclude<keyof I, keyof PatchMyProfileRequest>]: never; }>(base?: I): PatchMyProfileRequest;
    fromPartial<I_1 extends {
        givenName?: string | undefined;
        familyName?: string | undefined;
    } & {
        givenName?: string | undefined;
        familyName?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof PatchMyProfileRequest>]: never; }>(object: I_1): PatchMyProfileRequest;
};
export declare const PatchMyProfileResponse: {
    encode(message: PatchMyProfileResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PatchMyProfileResponse;
    fromJSON(object: any): PatchMyProfileResponse;
    toJSON(message: PatchMyProfileResponse): unknown;
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
    } & { [K_1 in Exclude<keyof I, "user">]: never; }>(base?: I): PatchMyProfileResponse;
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
    } & { [K_3 in Exclude<keyof I_1, "user">]: never; }>(object: I_1): PatchMyProfileResponse;
};
export declare const ListMyPasskeysRequest: {
    encode(_: ListMyPasskeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyPasskeysRequest;
    fromJSON(_: any): ListMyPasskeysRequest;
    toJSON(_: ListMyPasskeysRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): ListMyPasskeysRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ListMyPasskeysRequest;
};
export declare const ListMyPasskeysResponse: {
    encode(message: ListMyPasskeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyPasskeysResponse;
    fromJSON(object: any): ListMyPasskeysResponse;
    toJSON(message: ListMyPasskeysResponse): unknown;
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
    } & { [K_2 in Exclude<keyof I, "passkeys">]: never; }>(base?: I): ListMyPasskeysResponse;
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
    } & { [K_5 in Exclude<keyof I_1, "passkeys">]: never; }>(object: I_1): ListMyPasskeysResponse;
};
export declare const BeginPasskeyRegistrationRequest: {
    encode(_: BeginPasskeyRegistrationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BeginPasskeyRegistrationRequest;
    fromJSON(_: any): BeginPasskeyRegistrationRequest;
    toJSON(_: BeginPasskeyRegistrationRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): BeginPasskeyRegistrationRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): BeginPasskeyRegistrationRequest;
};
export declare const BeginPasskeyRegistrationResponse: {
    encode(message: BeginPasskeyRegistrationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BeginPasskeyRegistrationResponse;
    fromJSON(object: any): BeginPasskeyRegistrationResponse;
    toJSON(message: BeginPasskeyRegistrationResponse): unknown;
    create<I extends {
        optionsJson?: string;
        sessionId?: string;
    } & {
        optionsJson?: string;
        sessionId?: string;
    } & { [K in Exclude<keyof I, keyof BeginPasskeyRegistrationResponse>]: never; }>(base?: I): BeginPasskeyRegistrationResponse;
    fromPartial<I_1 extends {
        optionsJson?: string;
        sessionId?: string;
    } & {
        optionsJson?: string;
        sessionId?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof BeginPasskeyRegistrationResponse>]: never; }>(object: I_1): BeginPasskeyRegistrationResponse;
};
export declare const FinishPasskeyRegistrationRequest: {
    encode(message: FinishPasskeyRegistrationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FinishPasskeyRegistrationRequest;
    fromJSON(object: any): FinishPasskeyRegistrationRequest;
    toJSON(message: FinishPasskeyRegistrationRequest): unknown;
    create<I extends {
        sessionId?: string;
        credentialJson?: string;
        name?: string;
    } & {
        sessionId?: string;
        credentialJson?: string;
        name?: string;
    } & { [K in Exclude<keyof I, keyof FinishPasskeyRegistrationRequest>]: never; }>(base?: I): FinishPasskeyRegistrationRequest;
    fromPartial<I_1 extends {
        sessionId?: string;
        credentialJson?: string;
        name?: string;
    } & {
        sessionId?: string;
        credentialJson?: string;
        name?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof FinishPasskeyRegistrationRequest>]: never; }>(object: I_1): FinishPasskeyRegistrationRequest;
};
export declare const FinishPasskeyRegistrationResponse: {
    encode(message: FinishPasskeyRegistrationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FinishPasskeyRegistrationResponse;
    fromJSON(object: any): FinishPasskeyRegistrationResponse;
    toJSON(message: FinishPasskeyRegistrationResponse): unknown;
    create<I extends {
        passkey?: {
            id?: string;
            ownerId?: string;
            ownerName?: string;
            identifier?: string;
            createdAt?: number;
            lastUsedAt?: number;
            ownerEmail?: string;
            name?: string;
        };
    } & {
        passkey?: {
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
        } & { [K in Exclude<keyof I["passkey"], keyof Passkey>]: never; };
    } & { [K_1 in Exclude<keyof I, "passkey">]: never; }>(base?: I): FinishPasskeyRegistrationResponse;
    fromPartial<I_1 extends {
        passkey?: {
            id?: string;
            ownerId?: string;
            ownerName?: string;
            identifier?: string;
            createdAt?: number;
            lastUsedAt?: number;
            ownerEmail?: string;
            name?: string;
        };
    } & {
        passkey?: {
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
        } & { [K_2 in Exclude<keyof I_1["passkey"], keyof Passkey>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "passkey">]: never; }>(object: I_1): FinishPasskeyRegistrationResponse;
};
export declare const DeleteMyPasskeyRequest: {
    encode(message: DeleteMyPasskeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMyPasskeyRequest;
    fromJSON(object: any): DeleteMyPasskeyRequest;
    toJSON(message: DeleteMyPasskeyRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): DeleteMyPasskeyRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): DeleteMyPasskeyRequest;
};
export declare const DeleteMyPasskeyResponse: {
    encode(_: DeleteMyPasskeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMyPasskeyResponse;
    fromJSON(_: any): DeleteMyPasskeyResponse;
    toJSON(_: DeleteMyPasskeyResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): DeleteMyPasskeyResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): DeleteMyPasskeyResponse;
};
export interface MySvc {
    /** Profile */
    GetMyProfile(request: DeepPartial<GetMyProfileRequest>, metadata?: grpc.Metadata): Promise<GetMyProfileResponse>;
    PatchMyProfile(request: DeepPartial<PatchMyProfileRequest>, metadata?: grpc.Metadata): Promise<PatchMyProfileResponse>;
    /** Passkeys */
    ListMyPasskeys(request: DeepPartial<ListMyPasskeysRequest>, metadata?: grpc.Metadata): Promise<ListMyPasskeysResponse>;
    BeginPasskeyRegistration(request: DeepPartial<BeginPasskeyRegistrationRequest>, metadata?: grpc.Metadata): Promise<BeginPasskeyRegistrationResponse>;
    FinishPasskeyRegistration(request: DeepPartial<FinishPasskeyRegistrationRequest>, metadata?: grpc.Metadata): Promise<FinishPasskeyRegistrationResponse>;
    DeleteMyPasskey(request: DeepPartial<DeleteMyPasskeyRequest>, metadata?: grpc.Metadata): Promise<DeleteMyPasskeyResponse>;
}
export declare class MySvcClientImpl implements MySvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    GetMyProfile(request: DeepPartial<GetMyProfileRequest>, metadata?: grpc.Metadata): Promise<GetMyProfileResponse>;
    PatchMyProfile(request: DeepPartial<PatchMyProfileRequest>, metadata?: grpc.Metadata): Promise<PatchMyProfileResponse>;
    ListMyPasskeys(request: DeepPartial<ListMyPasskeysRequest>, metadata?: grpc.Metadata): Promise<ListMyPasskeysResponse>;
    BeginPasskeyRegistration(request: DeepPartial<BeginPasskeyRegistrationRequest>, metadata?: grpc.Metadata): Promise<BeginPasskeyRegistrationResponse>;
    FinishPasskeyRegistration(request: DeepPartial<FinishPasskeyRegistrationRequest>, metadata?: grpc.Metadata): Promise<FinishPasskeyRegistrationResponse>;
    DeleteMyPasskey(request: DeepPartial<DeleteMyPasskeyRequest>, metadata?: grpc.Metadata): Promise<DeleteMyPasskeyResponse>;
}
export declare const MySvcDesc: {
    serviceName: string;
};
export declare const MySvcGetMyProfileDesc: UnaryMethodDefinitionish;
export declare const MySvcPatchMyProfileDesc: UnaryMethodDefinitionish;
export declare const MySvcListMyPasskeysDesc: UnaryMethodDefinitionish;
export declare const MySvcBeginPasskeyRegistrationDesc: UnaryMethodDefinitionish;
export declare const MySvcFinishPasskeyRegistrationDesc: UnaryMethodDefinitionish;
export declare const MySvcDeleteMyPasskeyDesc: UnaryMethodDefinitionish;
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

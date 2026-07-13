import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Passkey, User } from "../iam";
export declare const protobufPackage = "authsvc";
export interface GoogleLoginRequest {
    idToken: string;
}
export interface GoogleLoginResponse {
    accessToken: string;
    refreshToken: string;
    user: User | undefined;
}
export interface ServiceLoginRequest {
    clientId: string;
    clientSecret: string;
}
export interface ServiceLoginResponse {
    accessToken: string;
    refreshToken: string;
}
export interface SignoutRequest {
}
export interface SignoutResponse {
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
}
export interface BeginPasskeyLoginRequest {
    email: string;
}
export interface BeginPasskeyLoginResponse {
    optionsJson: string;
    sessionId: string;
}
export interface FinishPasskeyLoginRequest {
    sessionId: string;
    credentialJson: string;
}
export interface FinishPasskeyLoginResponse {
    accessToken: string;
    refreshToken: string;
    user: User | undefined;
}
export interface ListPasskeysRequest {
}
export interface ListPasskeysResponse {
    passkeys: Passkey[];
}
export interface DeletePasskeyRequest {
    id: string;
}
export interface DeletePasskeyResponse {
}
export declare const GoogleLoginRequest: {
    encode(message: GoogleLoginRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GoogleLoginRequest;
    fromJSON(object: any): GoogleLoginRequest;
    toJSON(message: GoogleLoginRequest): unknown;
    create<I extends {
        idToken?: string;
    } & {
        idToken?: string;
    } & { [K in Exclude<keyof I, "idToken">]: never; }>(base?: I): GoogleLoginRequest;
    fromPartial<I_1 extends {
        idToken?: string;
    } & {
        idToken?: string;
    } & { [K_1 in Exclude<keyof I_1, "idToken">]: never; }>(object: I_1): GoogleLoginRequest;
};
export declare const GoogleLoginResponse: {
    encode(message: GoogleLoginResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GoogleLoginResponse;
    fromJSON(object: any): GoogleLoginResponse;
    toJSON(message: GoogleLoginResponse): unknown;
    create<I extends {
        accessToken?: string;
        refreshToken?: string;
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
        accessToken?: string;
        refreshToken?: string;
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
    } & { [K_1 in Exclude<keyof I, keyof GoogleLoginResponse>]: never; }>(base?: I): GoogleLoginResponse;
    fromPartial<I_1 extends {
        accessToken?: string;
        refreshToken?: string;
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
        accessToken?: string;
        refreshToken?: string;
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
    } & { [K_3 in Exclude<keyof I_1, keyof GoogleLoginResponse>]: never; }>(object: I_1): GoogleLoginResponse;
};
export declare const ServiceLoginRequest: {
    encode(message: ServiceLoginRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceLoginRequest;
    fromJSON(object: any): ServiceLoginRequest;
    toJSON(message: ServiceLoginRequest): unknown;
    create<I extends {
        clientId?: string;
        clientSecret?: string;
    } & {
        clientId?: string;
        clientSecret?: string;
    } & { [K in Exclude<keyof I, keyof ServiceLoginRequest>]: never; }>(base?: I): ServiceLoginRequest;
    fromPartial<I_1 extends {
        clientId?: string;
        clientSecret?: string;
    } & {
        clientId?: string;
        clientSecret?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof ServiceLoginRequest>]: never; }>(object: I_1): ServiceLoginRequest;
};
export declare const ServiceLoginResponse: {
    encode(message: ServiceLoginResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceLoginResponse;
    fromJSON(object: any): ServiceLoginResponse;
    toJSON(message: ServiceLoginResponse): unknown;
    create<I extends {
        accessToken?: string;
        refreshToken?: string;
    } & {
        accessToken?: string;
        refreshToken?: string;
    } & { [K in Exclude<keyof I, keyof ServiceLoginResponse>]: never; }>(base?: I): ServiceLoginResponse;
    fromPartial<I_1 extends {
        accessToken?: string;
        refreshToken?: string;
    } & {
        accessToken?: string;
        refreshToken?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof ServiceLoginResponse>]: never; }>(object: I_1): ServiceLoginResponse;
};
export declare const SignoutRequest: {
    encode(_: SignoutRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignoutRequest;
    fromJSON(_: any): SignoutRequest;
    toJSON(_: SignoutRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): SignoutRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): SignoutRequest;
};
export declare const SignoutResponse: {
    encode(_: SignoutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignoutResponse;
    fromJSON(_: any): SignoutResponse;
    toJSON(_: SignoutResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): SignoutResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): SignoutResponse;
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
    encode(_: FinishPasskeyRegistrationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FinishPasskeyRegistrationResponse;
    fromJSON(_: any): FinishPasskeyRegistrationResponse;
    toJSON(_: FinishPasskeyRegistrationResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): FinishPasskeyRegistrationResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): FinishPasskeyRegistrationResponse;
};
export declare const BeginPasskeyLoginRequest: {
    encode(message: BeginPasskeyLoginRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BeginPasskeyLoginRequest;
    fromJSON(object: any): BeginPasskeyLoginRequest;
    toJSON(message: BeginPasskeyLoginRequest): unknown;
    create<I extends {
        email?: string;
    } & {
        email?: string;
    } & { [K in Exclude<keyof I, "email">]: never; }>(base?: I): BeginPasskeyLoginRequest;
    fromPartial<I_1 extends {
        email?: string;
    } & {
        email?: string;
    } & { [K_1 in Exclude<keyof I_1, "email">]: never; }>(object: I_1): BeginPasskeyLoginRequest;
};
export declare const BeginPasskeyLoginResponse: {
    encode(message: BeginPasskeyLoginResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BeginPasskeyLoginResponse;
    fromJSON(object: any): BeginPasskeyLoginResponse;
    toJSON(message: BeginPasskeyLoginResponse): unknown;
    create<I extends {
        optionsJson?: string;
        sessionId?: string;
    } & {
        optionsJson?: string;
        sessionId?: string;
    } & { [K in Exclude<keyof I, keyof BeginPasskeyLoginResponse>]: never; }>(base?: I): BeginPasskeyLoginResponse;
    fromPartial<I_1 extends {
        optionsJson?: string;
        sessionId?: string;
    } & {
        optionsJson?: string;
        sessionId?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof BeginPasskeyLoginResponse>]: never; }>(object: I_1): BeginPasskeyLoginResponse;
};
export declare const FinishPasskeyLoginRequest: {
    encode(message: FinishPasskeyLoginRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FinishPasskeyLoginRequest;
    fromJSON(object: any): FinishPasskeyLoginRequest;
    toJSON(message: FinishPasskeyLoginRequest): unknown;
    create<I extends {
        sessionId?: string;
        credentialJson?: string;
    } & {
        sessionId?: string;
        credentialJson?: string;
    } & { [K in Exclude<keyof I, keyof FinishPasskeyLoginRequest>]: never; }>(base?: I): FinishPasskeyLoginRequest;
    fromPartial<I_1 extends {
        sessionId?: string;
        credentialJson?: string;
    } & {
        sessionId?: string;
        credentialJson?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof FinishPasskeyLoginRequest>]: never; }>(object: I_1): FinishPasskeyLoginRequest;
};
export declare const FinishPasskeyLoginResponse: {
    encode(message: FinishPasskeyLoginResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FinishPasskeyLoginResponse;
    fromJSON(object: any): FinishPasskeyLoginResponse;
    toJSON(message: FinishPasskeyLoginResponse): unknown;
    create<I extends {
        accessToken?: string;
        refreshToken?: string;
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
        accessToken?: string;
        refreshToken?: string;
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
    } & { [K_1 in Exclude<keyof I, keyof FinishPasskeyLoginResponse>]: never; }>(base?: I): FinishPasskeyLoginResponse;
    fromPartial<I_1 extends {
        accessToken?: string;
        refreshToken?: string;
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
        accessToken?: string;
        refreshToken?: string;
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
    } & { [K_3 in Exclude<keyof I_1, keyof FinishPasskeyLoginResponse>]: never; }>(object: I_1): FinishPasskeyLoginResponse;
};
export declare const ListPasskeysRequest: {
    encode(_: ListPasskeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListPasskeysRequest;
    fromJSON(_: any): ListPasskeysRequest;
    toJSON(_: ListPasskeysRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): ListPasskeysRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ListPasskeysRequest;
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
export interface AuthSvc {
    /**
     * Login or signup with google.
     * If a user is not yet created, a new user account will be created associated with that email address.
     */
    GoogleLogin(request: DeepPartial<GoogleLoginRequest>, metadata?: grpc.Metadata): Promise<GoogleLoginResponse>;
    ServiceLogin(request: DeepPartial<ServiceLoginRequest>, metadata?: grpc.Metadata): Promise<ServiceLoginResponse>;
    Signout(request: DeepPartial<SignoutRequest>, metadata?: grpc.Metadata): Promise<SignoutResponse>;
    /** Passkey (WebAuthn) registration — requires an active session. */
    BeginPasskeyRegistration(request: DeepPartial<BeginPasskeyRegistrationRequest>, metadata?: grpc.Metadata): Promise<BeginPasskeyRegistrationResponse>;
    FinishPasskeyRegistration(request: DeepPartial<FinishPasskeyRegistrationRequest>, metadata?: grpc.Metadata): Promise<FinishPasskeyRegistrationResponse>;
    /** Passkey (WebAuthn) authentication. */
    BeginPasskeyLogin(request: DeepPartial<BeginPasskeyLoginRequest>, metadata?: grpc.Metadata): Promise<BeginPasskeyLoginResponse>;
    FinishPasskeyLogin(request: DeepPartial<FinishPasskeyLoginRequest>, metadata?: grpc.Metadata): Promise<FinishPasskeyLoginResponse>;
    /** List all registered passkeys, optionally filtered by user_id. */
    ListPasskeys(request: DeepPartial<ListPasskeysRequest>, metadata?: grpc.Metadata): Promise<ListPasskeysResponse>;
    /** Delete a registered passkey by its ID. */
    DeletePasskey(request: DeepPartial<DeletePasskeyRequest>, metadata?: grpc.Metadata): Promise<DeletePasskeyResponse>;
}
export declare class AuthSvcClientImpl implements AuthSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    GoogleLogin(request: DeepPartial<GoogleLoginRequest>, metadata?: grpc.Metadata): Promise<GoogleLoginResponse>;
    ServiceLogin(request: DeepPartial<ServiceLoginRequest>, metadata?: grpc.Metadata): Promise<ServiceLoginResponse>;
    Signout(request: DeepPartial<SignoutRequest>, metadata?: grpc.Metadata): Promise<SignoutResponse>;
    BeginPasskeyRegistration(request: DeepPartial<BeginPasskeyRegistrationRequest>, metadata?: grpc.Metadata): Promise<BeginPasskeyRegistrationResponse>;
    FinishPasskeyRegistration(request: DeepPartial<FinishPasskeyRegistrationRequest>, metadata?: grpc.Metadata): Promise<FinishPasskeyRegistrationResponse>;
    BeginPasskeyLogin(request: DeepPartial<BeginPasskeyLoginRequest>, metadata?: grpc.Metadata): Promise<BeginPasskeyLoginResponse>;
    FinishPasskeyLogin(request: DeepPartial<FinishPasskeyLoginRequest>, metadata?: grpc.Metadata): Promise<FinishPasskeyLoginResponse>;
    ListPasskeys(request: DeepPartial<ListPasskeysRequest>, metadata?: grpc.Metadata): Promise<ListPasskeysResponse>;
    DeletePasskey(request: DeepPartial<DeletePasskeyRequest>, metadata?: grpc.Metadata): Promise<DeletePasskeyResponse>;
}
export declare const AuthSvcDesc: {
    serviceName: string;
};
export declare const AuthSvcGoogleLoginDesc: UnaryMethodDefinitionish;
export declare const AuthSvcServiceLoginDesc: UnaryMethodDefinitionish;
export declare const AuthSvcSignoutDesc: UnaryMethodDefinitionish;
export declare const AuthSvcBeginPasskeyRegistrationDesc: UnaryMethodDefinitionish;
export declare const AuthSvcFinishPasskeyRegistrationDesc: UnaryMethodDefinitionish;
export declare const AuthSvcBeginPasskeyLoginDesc: UnaryMethodDefinitionish;
export declare const AuthSvcFinishPasskeyLoginDesc: UnaryMethodDefinitionish;
export declare const AuthSvcListPasskeysDesc: UnaryMethodDefinitionish;
export declare const AuthSvcDeletePasskeyDesc: UnaryMethodDefinitionish;
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

import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { User } from "../iam";
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
            groupOwner?: boolean;
            groupAdmin?: boolean;
            groupUser?: boolean;
            roles?: {
                id?: string;
                name?: string;
            }[];
        };
    } & {
        accessToken?: string;
        refreshToken?: string;
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
    } & { [K_3 in Exclude<keyof I, keyof GoogleLoginResponse>]: never; }>(base?: I): GoogleLoginResponse;
    fromPartial<I_1 extends {
        accessToken?: string;
        refreshToken?: string;
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
        accessToken?: string;
        refreshToken?: string;
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
    } & { [K_7 in Exclude<keyof I_1, keyof GoogleLoginResponse>]: never; }>(object: I_1): GoogleLoginResponse;
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
export interface AuthSvc {
    /**
     * Login or signup with google.
     * If a user is not yet created, a new user account will be created associated with that email address.
     */
    GoogleLogin(request: DeepPartial<GoogleLoginRequest>, metadata?: grpc.Metadata): Promise<GoogleLoginResponse>;
    ServiceLogin(request: DeepPartial<ServiceLoginRequest>, metadata?: grpc.Metadata): Promise<ServiceLoginResponse>;
    Signout(request: DeepPartial<SignoutRequest>, metadata?: grpc.Metadata): Promise<SignoutResponse>;
}
export declare class AuthSvcClientImpl implements AuthSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    GoogleLogin(request: DeepPartial<GoogleLoginRequest>, metadata?: grpc.Metadata): Promise<GoogleLoginResponse>;
    ServiceLogin(request: DeepPartial<ServiceLoginRequest>, metadata?: grpc.Metadata): Promise<ServiceLoginResponse>;
    Signout(request: DeepPartial<SignoutRequest>, metadata?: grpc.Metadata): Promise<SignoutResponse>;
}
export declare const AuthSvcDesc: {
    serviceName: string;
};
export declare const AuthSvcGoogleLoginDesc: UnaryMethodDefinitionish;
export declare const AuthSvcServiceLoginDesc: UnaryMethodDefinitionish;
export declare const AuthSvcSignoutDesc: UnaryMethodDefinitionish;
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

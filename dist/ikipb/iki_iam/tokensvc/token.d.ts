import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { EntityType } from "../iam";
export declare const protobufPackage = "tokensvc";
export interface GetJwksetRequest {
}
export interface GetJwksetResponse {
    jwkset: Uint8Array;
}
export interface AccessTokenRequest {
    refreshToken: string;
    entityType: EntityType;
}
export interface AccessTokenResponse {
    accessToken: string;
}
export declare const GetJwksetRequest: {
    encode(_: GetJwksetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetJwksetRequest;
    fromJSON(_: any): GetJwksetRequest;
    toJSON(_: GetJwksetRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): GetJwksetRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): GetJwksetRequest;
};
export declare const GetJwksetResponse: {
    encode(message: GetJwksetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetJwksetResponse;
    fromJSON(object: any): GetJwksetResponse;
    toJSON(message: GetJwksetResponse): unknown;
    create<I extends {
        jwkset?: Uint8Array;
    } & {
        jwkset?: Uint8Array;
    } & { [K in Exclude<keyof I, "jwkset">]: never; }>(base?: I): GetJwksetResponse;
    fromPartial<I_1 extends {
        jwkset?: Uint8Array;
    } & {
        jwkset?: Uint8Array;
    } & { [K_1 in Exclude<keyof I_1, "jwkset">]: never; }>(object: I_1): GetJwksetResponse;
};
export declare const AccessTokenRequest: {
    encode(message: AccessTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccessTokenRequest;
    fromJSON(object: any): AccessTokenRequest;
    toJSON(message: AccessTokenRequest): unknown;
    create<I extends {
        refreshToken?: string;
        entityType?: EntityType;
    } & {
        refreshToken?: string;
        entityType?: EntityType;
    } & { [K in Exclude<keyof I, keyof AccessTokenRequest>]: never; }>(base?: I): AccessTokenRequest;
    fromPartial<I_1 extends {
        refreshToken?: string;
        entityType?: EntityType;
    } & {
        refreshToken?: string;
        entityType?: EntityType;
    } & { [K_1 in Exclude<keyof I_1, keyof AccessTokenRequest>]: never; }>(object: I_1): AccessTokenRequest;
};
export declare const AccessTokenResponse: {
    encode(message: AccessTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccessTokenResponse;
    fromJSON(object: any): AccessTokenResponse;
    toJSON(message: AccessTokenResponse): unknown;
    create<I extends {
        accessToken?: string;
    } & {
        accessToken?: string;
    } & { [K in Exclude<keyof I, "accessToken">]: never; }>(base?: I): AccessTokenResponse;
    fromPartial<I_1 extends {
        accessToken?: string;
    } & {
        accessToken?: string;
    } & { [K_1 in Exclude<keyof I_1, "accessToken">]: never; }>(object: I_1): AccessTokenResponse;
};
export interface TokenSvc {
    GetJwkset(request: DeepPartial<GetJwksetRequest>, metadata?: grpc.Metadata): Promise<GetJwksetResponse>;
    AccessToken(request: DeepPartial<AccessTokenRequest>, metadata?: grpc.Metadata): Promise<AccessTokenResponse>;
}
export declare class TokenSvcClientImpl implements TokenSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    GetJwkset(request: DeepPartial<GetJwksetRequest>, metadata?: grpc.Metadata): Promise<GetJwksetResponse>;
    AccessToken(request: DeepPartial<AccessTokenRequest>, metadata?: grpc.Metadata): Promise<AccessTokenResponse>;
}
export declare const TokenSvcDesc: {
    serviceName: string;
};
export declare const TokenSvcGetJwksetDesc: UnaryMethodDefinitionish;
export declare const TokenSvcAccessTokenDesc: UnaryMethodDefinitionish;
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

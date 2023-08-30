import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Athlete } from "../activity";
export declare const protobufPackage = "stravasvc";
export interface AuthzRequest {
    /** authz_code is the ID used to exchange Strava token. */
    authzCode: string;
    /** scopes is a comma-delimited list of scope. */
    scopes: string;
}
export interface AuthzResponse {
    athlete: Athlete | undefined;
}
export declare const AuthzRequest: {
    encode(message: AuthzRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthzRequest;
    fromJSON(object: any): AuthzRequest;
    toJSON(message: AuthzRequest): unknown;
    create<I extends {
        authzCode?: string;
        scopes?: string;
    } & {
        authzCode?: string;
        scopes?: string;
    } & { [K in Exclude<keyof I, keyof AuthzRequest>]: never; }>(base?: I): AuthzRequest;
    fromPartial<I_1 extends {
        authzCode?: string;
        scopes?: string;
    } & {
        authzCode?: string;
        scopes?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof AuthzRequest>]: never; }>(object: I_1): AuthzRequest;
};
export declare const AuthzResponse: {
    encode(message: AuthzResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthzResponse;
    fromJSON(object: any): AuthzResponse;
    toJSON(message: AuthzResponse): unknown;
    create<I extends {
        athlete?: {
            id?: string;
            userId?: string;
            stravaId?: string;
            fitness?: {
                age?: number;
                height?: number;
                weight?: number;
                maxHeartrate?: number;
                restHeartrate?: number;
                vo2Max?: number;
                male?: boolean;
            };
        };
    } & {
        athlete?: {
            id?: string;
            userId?: string;
            stravaId?: string;
            fitness?: {
                age?: number;
                height?: number;
                weight?: number;
                maxHeartrate?: number;
                restHeartrate?: number;
                vo2Max?: number;
                male?: boolean;
            };
        } & {
            id?: string;
            userId?: string;
            stravaId?: string;
            fitness?: {
                age?: number;
                height?: number;
                weight?: number;
                maxHeartrate?: number;
                restHeartrate?: number;
                vo2Max?: number;
                male?: boolean;
            } & {
                age?: number;
                height?: number;
                weight?: number;
                maxHeartrate?: number;
                restHeartrate?: number;
                vo2Max?: number;
                male?: boolean;
            } & { [K in Exclude<keyof I["athlete"]["fitness"], keyof import("../activity").AthleteFitness>]: never; };
        } & { [K_1 in Exclude<keyof I["athlete"], keyof Athlete>]: never; };
    } & { [K_2 in Exclude<keyof I, "athlete">]: never; }>(base?: I): AuthzResponse;
    fromPartial<I_1 extends {
        athlete?: {
            id?: string;
            userId?: string;
            stravaId?: string;
            fitness?: {
                age?: number;
                height?: number;
                weight?: number;
                maxHeartrate?: number;
                restHeartrate?: number;
                vo2Max?: number;
                male?: boolean;
            };
        };
    } & {
        athlete?: {
            id?: string;
            userId?: string;
            stravaId?: string;
            fitness?: {
                age?: number;
                height?: number;
                weight?: number;
                maxHeartrate?: number;
                restHeartrate?: number;
                vo2Max?: number;
                male?: boolean;
            };
        } & {
            id?: string;
            userId?: string;
            stravaId?: string;
            fitness?: {
                age?: number;
                height?: number;
                weight?: number;
                maxHeartrate?: number;
                restHeartrate?: number;
                vo2Max?: number;
                male?: boolean;
            } & {
                age?: number;
                height?: number;
                weight?: number;
                maxHeartrate?: number;
                restHeartrate?: number;
                vo2Max?: number;
                male?: boolean;
            } & { [K_3 in Exclude<keyof I_1["athlete"]["fitness"], keyof import("../activity").AthleteFitness>]: never; };
        } & { [K_4 in Exclude<keyof I_1["athlete"], keyof Athlete>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "athlete">]: never; }>(object: I_1): AuthzResponse;
};
export interface StravaSvc {
    Authz(request: DeepPartial<AuthzRequest>, metadata?: grpc.Metadata): Promise<AuthzResponse>;
}
export declare class StravaSvcClientImpl implements StravaSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    Authz(request: DeepPartial<AuthzRequest>, metadata?: grpc.Metadata): Promise<AuthzResponse>;
}
export declare const StravaSvcDesc: {
    serviceName: string;
};
export declare const StravaSvcAuthzDesc: UnaryMethodDefinitionish;
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

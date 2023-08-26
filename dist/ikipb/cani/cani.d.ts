import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cani";
export interface CanIRequest {
}
export interface CanIResponse {
    fullMethod: string[];
}
export declare const CanIRequest: {
    encode(_: CanIRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CanIRequest;
    fromJSON(_: any): CanIRequest;
    toJSON(_: CanIRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CanIRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CanIRequest;
};
export declare const CanIResponse: {
    encode(message: CanIResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CanIResponse;
    fromJSON(object: any): CanIResponse;
    toJSON(message: CanIResponse): unknown;
    create<I extends {
        fullMethod?: string[];
    } & {
        fullMethod?: string[] & string[] & { [K in Exclude<keyof I["fullMethod"], keyof string[]>]: never; };
    } & { [K_1 in Exclude<keyof I, "fullMethod">]: never; }>(base?: I): CanIResponse;
    fromPartial<I_1 extends {
        fullMethod?: string[];
    } & {
        fullMethod?: string[] & string[] & { [K_2 in Exclude<keyof I_1["fullMethod"], keyof string[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "fullMethod">]: never; }>(object: I_1): CanIResponse;
};
export interface CanISvc {
    CanI(request: DeepPartial<CanIRequest>, metadata?: grpc.Metadata): Promise<CanIResponse>;
}
export declare class CanISvcClientImpl implements CanISvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    CanI(request: DeepPartial<CanIRequest>, metadata?: grpc.Metadata): Promise<CanIResponse>;
}
export declare const CanISvcDesc: {
    serviceName: string;
};
export declare const CanISvcCanIDesc: UnaryMethodDefinitionish;
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

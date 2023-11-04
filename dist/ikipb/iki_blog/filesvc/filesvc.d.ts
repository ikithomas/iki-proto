import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "filesvc";
export interface UploadMyRequest {
    type: string;
    name: string;
    body: Uint8Array;
}
export interface UploadMyResponse {
    url: string;
}
export declare const UploadMyRequest: {
    encode(message: UploadMyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UploadMyRequest;
    fromJSON(object: any): UploadMyRequest;
    toJSON(message: UploadMyRequest): unknown;
    create<I extends {
        type?: string;
        name?: string;
        body?: Uint8Array;
    } & {
        type?: string;
        name?: string;
        body?: Uint8Array;
    } & { [K in Exclude<keyof I, keyof UploadMyRequest>]: never; }>(base?: I): UploadMyRequest;
    fromPartial<I_1 extends {
        type?: string;
        name?: string;
        body?: Uint8Array;
    } & {
        type?: string;
        name?: string;
        body?: Uint8Array;
    } & { [K_1 in Exclude<keyof I_1, keyof UploadMyRequest>]: never; }>(object: I_1): UploadMyRequest;
};
export declare const UploadMyResponse: {
    encode(message: UploadMyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UploadMyResponse;
    fromJSON(object: any): UploadMyResponse;
    toJSON(message: UploadMyResponse): unknown;
    create<I extends {
        url?: string;
    } & {
        url?: string;
    } & { [K in Exclude<keyof I, "url">]: never; }>(base?: I): UploadMyResponse;
    fromPartial<I_1 extends {
        url?: string;
    } & {
        url?: string;
    } & { [K_1 in Exclude<keyof I_1, "url">]: never; }>(object: I_1): UploadMyResponse;
};
export interface MyFileSvc {
    Upload(request: DeepPartial<UploadMyRequest>, metadata?: grpc.Metadata): Promise<UploadMyResponse>;
}
export declare class MyFileSvcClientImpl implements MyFileSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    Upload(request: DeepPartial<UploadMyRequest>, metadata?: grpc.Metadata): Promise<UploadMyResponse>;
}
export declare const MyFileSvcDesc: {
    serviceName: string;
};
export declare const MyFileSvcUploadDesc: UnaryMethodDefinitionish;
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

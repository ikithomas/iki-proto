import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "filesvc";
export interface UploadRequest {
    type: string;
    name: string;
    body: Uint8Array;
}
export interface UploadResponse {
    url: string;
}
export declare const UploadRequest: {
    encode(message: UploadRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UploadRequest;
    fromJSON(object: any): UploadRequest;
    toJSON(message: UploadRequest): unknown;
    create<I extends {
        type?: string;
        name?: string;
        body?: Uint8Array;
    } & {
        type?: string;
        name?: string;
        body?: Uint8Array;
    } & { [K in Exclude<keyof I, keyof UploadRequest>]: never; }>(base?: I): UploadRequest;
    fromPartial<I_1 extends {
        type?: string;
        name?: string;
        body?: Uint8Array;
    } & {
        type?: string;
        name?: string;
        body?: Uint8Array;
    } & { [K_1 in Exclude<keyof I_1, keyof UploadRequest>]: never; }>(object: I_1): UploadRequest;
};
export declare const UploadResponse: {
    encode(message: UploadResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UploadResponse;
    fromJSON(object: any): UploadResponse;
    toJSON(message: UploadResponse): unknown;
    create<I extends {
        url?: string;
    } & {
        url?: string;
    } & { [K in Exclude<keyof I, "url">]: never; }>(base?: I): UploadResponse;
    fromPartial<I_1 extends {
        url?: string;
    } & {
        url?: string;
    } & { [K_1 in Exclude<keyof I_1, "url">]: never; }>(object: I_1): UploadResponse;
};
export interface MyFileSvc {
    Upload(request: DeepPartial<UploadRequest>, metadata?: grpc.Metadata): Promise<UploadResponse>;
}
export declare class MyFileSvcClientImpl implements MyFileSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    Upload(request: DeepPartial<UploadRequest>, metadata?: grpc.Metadata): Promise<UploadResponse>;
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

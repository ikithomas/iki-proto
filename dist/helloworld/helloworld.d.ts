import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
export declare const protobufPackage = "helloworld";
/** The request message containing the user's name. */
export interface HelloRequest {
    name: string;
}
/** The response message containing the greetings */
export interface HelloReply {
    message: string;
}
export declare const HelloRequest: {
    encode(message: HelloRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HelloRequest;
    fromJSON(object: any): HelloRequest;
    toJSON(message: HelloRequest): unknown;
    create<I extends {
        name?: string;
    } & {
        name?: string;
    } & { [K in Exclude<keyof I, "name">]: never; }>(base?: I): HelloRequest;
    fromPartial<I_1 extends {
        name?: string;
    } & {
        name?: string;
    } & { [K_1 in Exclude<keyof I_1, "name">]: never; }>(object: I_1): HelloRequest;
};
export declare const HelloReply: {
    encode(message: HelloReply, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HelloReply;
    fromJSON(object: any): HelloReply;
    toJSON(message: HelloReply): unknown;
    create<I extends {
        message?: string;
    } & {
        message?: string;
    } & { [K in Exclude<keyof I, "message">]: never; }>(base?: I): HelloReply;
    fromPartial<I_1 extends {
        message?: string;
    } & {
        message?: string;
    } & { [K_1 in Exclude<keyof I_1, "message">]: never; }>(object: I_1): HelloReply;
};
/** The greeting service definition. */
export interface Greeter {
    /** Sends a greeting */
    SayHello(request: DeepPartial<HelloRequest>, metadata?: grpc.Metadata): Promise<HelloReply>;
    SayHelloAgain(request: DeepPartial<HelloRequest>, metadata?: grpc.Metadata): Promise<HelloReply>;
    SayHellos(request: DeepPartial<HelloRequest>, metadata?: grpc.Metadata): Observable<HelloReply>;
}
export declare class GreeterClientImpl implements Greeter {
    private readonly rpc;
    constructor(rpc: Rpc);
    SayHello(request: DeepPartial<HelloRequest>, metadata?: grpc.Metadata): Promise<HelloReply>;
    SayHelloAgain(request: DeepPartial<HelloRequest>, metadata?: grpc.Metadata): Promise<HelloReply>;
    SayHellos(request: DeepPartial<HelloRequest>, metadata?: grpc.Metadata): Observable<HelloReply>;
}
export declare const GreeterDesc: {
    serviceName: string;
};
export declare const GreeterSayHelloDesc: UnaryMethodDefinitionish;
export declare const GreeterSayHelloAgainDesc: UnaryMethodDefinitionish;
export declare const GreeterSayHellosDesc: UnaryMethodDefinitionish;
interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
    requestStream: any;
    responseStream: any;
}
type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;
interface Rpc {
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
    invoke<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Observable<any>;
}
export declare class GrpcWebImpl {
    private host;
    private options;
    constructor(host: string, options: {
        transport?: grpc.TransportFactory;
        streamingTransport?: grpc.TransportFactory;
        debug?: boolean;
        metadata?: grpc.Metadata;
        upStreamRetryCodes?: number[];
    });
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined): Promise<any>;
    invoke<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined): Observable<any>;
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

import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
export declare const protobufPackage = "health";
export interface HealthCheckRequest {
    service: string;
}
export interface HealthCheckResponse {
    status: HealthCheckResponse_ServingStatus;
}
export declare enum HealthCheckResponse_ServingStatus {
    UNKNOWN = 0,
    SERVING = 1,
    NOT_SERVING = 2,
    /** SERVICE_UNKNOWN - Used only by the Watch method. */
    SERVICE_UNKNOWN = 3,
    UNRECOGNIZED = -1
}
export declare function healthCheckResponse_ServingStatusFromJSON(object: any): HealthCheckResponse_ServingStatus;
export declare function healthCheckResponse_ServingStatusToJSON(object: HealthCheckResponse_ServingStatus): string;
export declare const HealthCheckRequest: {
    encode(message: HealthCheckRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheckRequest;
    fromJSON(object: any): HealthCheckRequest;
    toJSON(message: HealthCheckRequest): unknown;
    create<I extends {
        service?: string;
    } & {
        service?: string;
    } & { [K in Exclude<keyof I, "service">]: never; }>(base?: I): HealthCheckRequest;
    fromPartial<I_1 extends {
        service?: string;
    } & {
        service?: string;
    } & { [K_1 in Exclude<keyof I_1, "service">]: never; }>(object: I_1): HealthCheckRequest;
};
export declare const HealthCheckResponse: {
    encode(message: HealthCheckResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheckResponse;
    fromJSON(object: any): HealthCheckResponse;
    toJSON(message: HealthCheckResponse): unknown;
    create<I extends {
        status?: HealthCheckResponse_ServingStatus;
    } & {
        status?: HealthCheckResponse_ServingStatus;
    } & { [K in Exclude<keyof I, "status">]: never; }>(base?: I): HealthCheckResponse;
    fromPartial<I_1 extends {
        status?: HealthCheckResponse_ServingStatus;
    } & {
        status?: HealthCheckResponse_ServingStatus;
    } & { [K_1 in Exclude<keyof I_1, "status">]: never; }>(object: I_1): HealthCheckResponse;
};
export interface HealthSvc {
    Check(request: DeepPartial<HealthCheckRequest>, metadata?: grpc.Metadata): Promise<HealthCheckResponse>;
    Watch(request: DeepPartial<HealthCheckRequest>, metadata?: grpc.Metadata): Observable<HealthCheckResponse>;
}
export declare class HealthSvcClientImpl implements HealthSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    Check(request: DeepPartial<HealthCheckRequest>, metadata?: grpc.Metadata): Promise<HealthCheckResponse>;
    Watch(request: DeepPartial<HealthCheckRequest>, metadata?: grpc.Metadata): Observable<HealthCheckResponse>;
}
export declare const HealthSvcDesc: {
    serviceName: string;
};
export declare const HealthSvcCheckDesc: UnaryMethodDefinitionish;
export declare const HealthSvcWatchDesc: UnaryMethodDefinitionish;
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

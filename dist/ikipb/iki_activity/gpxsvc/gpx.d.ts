import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { Chunk, Gpx } from "../activity";
export declare const protobufPackage = "gpxsvc";
export interface GetMyRequest {
    activityId: string;
}
export interface GetRequest {
    userId: string;
    activityId: string;
}
export interface GetResponse {
    activityId: string;
    stravaId: number;
    stravaAthleteId: number;
    gpx: Gpx | undefined;
}
export declare const GetMyRequest: {
    encode(message: GetMyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyRequest;
    fromJSON(object: any): GetMyRequest;
    toJSON(message: GetMyRequest): unknown;
    create<I extends {
        activityId?: string;
    } & {
        activityId?: string;
    } & { [K in Exclude<keyof I, "activityId">]: never; }>(base?: I): GetMyRequest;
    fromPartial<I_1 extends {
        activityId?: string;
    } & {
        activityId?: string;
    } & { [K_1 in Exclude<keyof I_1, "activityId">]: never; }>(object: I_1): GetMyRequest;
};
export declare const GetRequest: {
    encode(message: GetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetRequest;
    fromJSON(object: any): GetRequest;
    toJSON(message: GetRequest): unknown;
    create<I extends {
        userId?: string;
        activityId?: string;
    } & {
        userId?: string;
        activityId?: string;
    } & { [K in Exclude<keyof I, keyof GetRequest>]: never; }>(base?: I): GetRequest;
    fromPartial<I_1 extends {
        userId?: string;
        activityId?: string;
    } & {
        userId?: string;
        activityId?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof GetRequest>]: never; }>(object: I_1): GetRequest;
};
export declare const GetResponse: {
    encode(message: GetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetResponse;
    fromJSON(object: any): GetResponse;
    toJSON(message: GetResponse): unknown;
    create<I extends {
        activityId?: string;
        stravaId?: number;
        stravaAthleteId?: number;
        gpx?: {
            name?: string;
            startDate?: number;
            type?: string;
            points?: {
                lat?: number;
                lon?: number;
                ele?: number;
                time?: number;
                hr?: number;
                cad?: number;
            }[];
        };
    } & {
        activityId?: string;
        stravaId?: number;
        stravaAthleteId?: number;
        gpx?: {
            name?: string;
            startDate?: number;
            type?: string;
            points?: {
                lat?: number;
                lon?: number;
                ele?: number;
                time?: number;
                hr?: number;
                cad?: number;
            }[];
        } & {
            name?: string;
            startDate?: number;
            type?: string;
            points?: {
                lat?: number;
                lon?: number;
                ele?: number;
                time?: number;
                hr?: number;
                cad?: number;
            }[] & ({
                lat?: number;
                lon?: number;
                ele?: number;
                time?: number;
                hr?: number;
                cad?: number;
            } & {
                lat?: number;
                lon?: number;
                ele?: number;
                time?: number;
                hr?: number;
                cad?: number;
            } & { [K in Exclude<keyof I["gpx"]["points"][number], keyof import("../activity").Point>]: never; })[] & { [K_1 in Exclude<keyof I["gpx"]["points"], keyof {
                lat?: number;
                lon?: number;
                ele?: number;
                time?: number;
                hr?: number;
                cad?: number;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["gpx"], keyof Gpx>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof GetResponse>]: never; }>(base?: I): GetResponse;
    fromPartial<I_1 extends {
        activityId?: string;
        stravaId?: number;
        stravaAthleteId?: number;
        gpx?: {
            name?: string;
            startDate?: number;
            type?: string;
            points?: {
                lat?: number;
                lon?: number;
                ele?: number;
                time?: number;
                hr?: number;
                cad?: number;
            }[];
        };
    } & {
        activityId?: string;
        stravaId?: number;
        stravaAthleteId?: number;
        gpx?: {
            name?: string;
            startDate?: number;
            type?: string;
            points?: {
                lat?: number;
                lon?: number;
                ele?: number;
                time?: number;
                hr?: number;
                cad?: number;
            }[];
        } & {
            name?: string;
            startDate?: number;
            type?: string;
            points?: {
                lat?: number;
                lon?: number;
                ele?: number;
                time?: number;
                hr?: number;
                cad?: number;
            }[] & ({
                lat?: number;
                lon?: number;
                ele?: number;
                time?: number;
                hr?: number;
                cad?: number;
            } & {
                lat?: number;
                lon?: number;
                ele?: number;
                time?: number;
                hr?: number;
                cad?: number;
            } & { [K_4 in Exclude<keyof I_1["gpx"]["points"][number], keyof import("../activity").Point>]: never; })[] & { [K_5 in Exclude<keyof I_1["gpx"]["points"], keyof {
                lat?: number;
                lon?: number;
                ele?: number;
                time?: number;
                hr?: number;
                cad?: number;
            }[]>]: never; };
        } & { [K_6 in Exclude<keyof I_1["gpx"], keyof Gpx>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof GetResponse>]: never; }>(object: I_1): GetResponse;
};
export interface MyGpxSvc {
    Get(request: DeepPartial<GetMyRequest>, metadata?: grpc.Metadata): Observable<Chunk>;
}
export declare class MyGpxSvcClientImpl implements MyGpxSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    Get(request: DeepPartial<GetMyRequest>, metadata?: grpc.Metadata): Observable<Chunk>;
}
export declare const MyGpxSvcDesc: {
    serviceName: string;
};
export declare const MyGpxSvcGetDesc: UnaryMethodDefinitionish;
export interface GpxSvc {
    Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
}
export declare class GpxSvcClientImpl implements GpxSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
}
export declare const GpxSvcDesc: {
    serviceName: string;
};
export declare const GpxSvcGetDesc: UnaryMethodDefinitionish;
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

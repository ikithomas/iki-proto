import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
export declare const protobufPackage = "gpx";
export interface GetGpxRequest {
    activityId: string;
}
export interface GetConciseGpxRequest {
    activityId: string;
}
export interface GetConciseGpxResponse {
    activityId: string;
    stravaId: number;
    stravaAthleteId: number;
    gpx: Gpx | undefined;
}
export interface Chunk {
    chunk: Uint8Array;
}
export interface Gpx {
    name: string;
    startDate: number;
    type: string;
    points: Point[];
}
export interface Point {
    lat: number;
    lon: number;
    ele: number;
    time: number;
    hr: number;
    cad: number;
}
export declare const GetGpxRequest: {
    encode(message: GetGpxRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetGpxRequest;
    fromJSON(object: any): GetGpxRequest;
    toJSON(message: GetGpxRequest): unknown;
    create<I extends {
        activityId?: string;
    } & {
        activityId?: string;
    } & { [K in Exclude<keyof I, "activityId">]: never; }>(base?: I): GetGpxRequest;
    fromPartial<I_1 extends {
        activityId?: string;
    } & {
        activityId?: string;
    } & { [K_1 in Exclude<keyof I_1, "activityId">]: never; }>(object: I_1): GetGpxRequest;
};
export declare const GetConciseGpxRequest: {
    encode(message: GetConciseGpxRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetConciseGpxRequest;
    fromJSON(object: any): GetConciseGpxRequest;
    toJSON(message: GetConciseGpxRequest): unknown;
    create<I extends {
        activityId?: string;
    } & {
        activityId?: string;
    } & { [K in Exclude<keyof I, "activityId">]: never; }>(base?: I): GetConciseGpxRequest;
    fromPartial<I_1 extends {
        activityId?: string;
    } & {
        activityId?: string;
    } & { [K_1 in Exclude<keyof I_1, "activityId">]: never; }>(object: I_1): GetConciseGpxRequest;
};
export declare const GetConciseGpxResponse: {
    encode(message: GetConciseGpxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetConciseGpxResponse;
    fromJSON(object: any): GetConciseGpxResponse;
    toJSON(message: GetConciseGpxResponse): unknown;
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
            } & { [K in Exclude<keyof I["gpx"]["points"][number], keyof Point>]: never; })[] & { [K_1 in Exclude<keyof I["gpx"]["points"], keyof {
                lat?: number;
                lon?: number;
                ele?: number;
                time?: number;
                hr?: number;
                cad?: number;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["gpx"], keyof Gpx>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof GetConciseGpxResponse>]: never; }>(base?: I): GetConciseGpxResponse;
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
            } & { [K_4 in Exclude<keyof I_1["gpx"]["points"][number], keyof Point>]: never; })[] & { [K_5 in Exclude<keyof I_1["gpx"]["points"], keyof {
                lat?: number;
                lon?: number;
                ele?: number;
                time?: number;
                hr?: number;
                cad?: number;
            }[]>]: never; };
        } & { [K_6 in Exclude<keyof I_1["gpx"], keyof Gpx>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof GetConciseGpxResponse>]: never; }>(object: I_1): GetConciseGpxResponse;
};
export declare const Chunk: {
    encode(message: Chunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Chunk;
    fromJSON(object: any): Chunk;
    toJSON(message: Chunk): unknown;
    create<I extends {
        chunk?: Uint8Array;
    } & {
        chunk?: Uint8Array;
    } & { [K in Exclude<keyof I, "chunk">]: never; }>(base?: I): Chunk;
    fromPartial<I_1 extends {
        chunk?: Uint8Array;
    } & {
        chunk?: Uint8Array;
    } & { [K_1 in Exclude<keyof I_1, "chunk">]: never; }>(object: I_1): Chunk;
};
export declare const Gpx: {
    encode(message: Gpx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Gpx;
    fromJSON(object: any): Gpx;
    toJSON(message: Gpx): unknown;
    create<I extends {
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
        } & { [K in Exclude<keyof I["points"][number], keyof Point>]: never; })[] & { [K_1 in Exclude<keyof I["points"], keyof {
            lat?: number;
            lon?: number;
            ele?: number;
            time?: number;
            hr?: number;
            cad?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof Gpx>]: never; }>(base?: I): Gpx;
    fromPartial<I_1 extends {
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
        } & { [K_3 in Exclude<keyof I_1["points"][number], keyof Point>]: never; })[] & { [K_4 in Exclude<keyof I_1["points"], keyof {
            lat?: number;
            lon?: number;
            ele?: number;
            time?: number;
            hr?: number;
            cad?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof Gpx>]: never; }>(object: I_1): Gpx;
};
export declare const Point: {
    encode(message: Point, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Point;
    fromJSON(object: any): Point;
    toJSON(message: Point): unknown;
    create<I extends {
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
    } & { [K in Exclude<keyof I, keyof Point>]: never; }>(base?: I): Point;
    fromPartial<I_1 extends {
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
    } & { [K_1 in Exclude<keyof I_1, keyof Point>]: never; }>(object: I_1): Point;
};
export interface GpxSvc {
    GetGpx(request: DeepPartial<GetGpxRequest>, metadata?: grpc.Metadata): Observable<Chunk>;
    GetConciseGpx(request: DeepPartial<GetGpxRequest>, metadata?: grpc.Metadata): Promise<GetConciseGpxResponse>;
}
export declare class GpxSvcClientImpl implements GpxSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    GetGpx(request: DeepPartial<GetGpxRequest>, metadata?: grpc.Metadata): Observable<Chunk>;
    GetConciseGpx(request: DeepPartial<GetGpxRequest>, metadata?: grpc.Metadata): Promise<GetConciseGpxResponse>;
}
export declare const GpxSvcDesc: {
    serviceName: string;
};
export declare const GpxSvcGetGpxDesc: UnaryMethodDefinitionish;
export declare const GpxSvcGetConciseGpxDesc: UnaryMethodDefinitionish;
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

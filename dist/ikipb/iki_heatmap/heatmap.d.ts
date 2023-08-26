import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
export declare const protobufPackage = "heatmap";
export interface GetRequest {
    ikiUserId: string;
    /** Resolution of the activity in the heatmap */
    resolution: number;
}
export interface Track {
    name: string;
    startDate: number;
    type: string;
    points: Point[];
    id: string;
}
export interface Point {
    lat: number;
    lng: number;
}
export declare const GetRequest: {
    encode(message: GetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetRequest;
    fromJSON(object: any): GetRequest;
    toJSON(message: GetRequest): unknown;
    create<I extends {
        ikiUserId?: string;
        resolution?: number;
    } & {
        ikiUserId?: string;
        resolution?: number;
    } & { [K in Exclude<keyof I, keyof GetRequest>]: never; }>(base?: I): GetRequest;
    fromPartial<I_1 extends {
        ikiUserId?: string;
        resolution?: number;
    } & {
        ikiUserId?: string;
        resolution?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof GetRequest>]: never; }>(object: I_1): GetRequest;
};
export declare const Track: {
    encode(message: Track, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Track;
    fromJSON(object: any): Track;
    toJSON(message: Track): unknown;
    create<I extends {
        name?: string;
        startDate?: number;
        type?: string;
        points?: {
            lat?: number;
            lng?: number;
        }[];
        id?: string;
    } & {
        name?: string;
        startDate?: number;
        type?: string;
        points?: {
            lat?: number;
            lng?: number;
        }[] & ({
            lat?: number;
            lng?: number;
        } & {
            lat?: number;
            lng?: number;
        } & { [K in Exclude<keyof I["points"][number], keyof Point>]: never; })[] & { [K_1 in Exclude<keyof I["points"], keyof {
            lat?: number;
            lng?: number;
        }[]>]: never; };
        id?: string;
    } & { [K_2 in Exclude<keyof I, keyof Track>]: never; }>(base?: I): Track;
    fromPartial<I_1 extends {
        name?: string;
        startDate?: number;
        type?: string;
        points?: {
            lat?: number;
            lng?: number;
        }[];
        id?: string;
    } & {
        name?: string;
        startDate?: number;
        type?: string;
        points?: {
            lat?: number;
            lng?: number;
        }[] & ({
            lat?: number;
            lng?: number;
        } & {
            lat?: number;
            lng?: number;
        } & { [K_3 in Exclude<keyof I_1["points"][number], keyof Point>]: never; })[] & { [K_4 in Exclude<keyof I_1["points"], keyof {
            lat?: number;
            lng?: number;
        }[]>]: never; };
        id?: string;
    } & { [K_5 in Exclude<keyof I_1, keyof Track>]: never; }>(object: I_1): Track;
};
export declare const Point: {
    encode(message: Point, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Point;
    fromJSON(object: any): Point;
    toJSON(message: Point): unknown;
    create<I extends {
        lat?: number;
        lng?: number;
    } & {
        lat?: number;
        lng?: number;
    } & { [K in Exclude<keyof I, keyof Point>]: never; }>(base?: I): Point;
    fromPartial<I_1 extends {
        lat?: number;
        lng?: number;
    } & {
        lat?: number;
        lng?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof Point>]: never; }>(object: I_1): Point;
};
export interface HeatmapSvc {
    Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Observable<Track>;
}
export declare class HeatmapSvcClientImpl implements HeatmapSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Observable<Track>;
}
export declare const HeatmapSvcDesc: {
    serviceName: string;
};
export declare const HeatmapSvcGetDesc: UnaryMethodDefinitionish;
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

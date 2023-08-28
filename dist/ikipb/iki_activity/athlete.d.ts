import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../google/protobuf/empty";
export declare const protobufPackage = "athlete";
export interface FitnessMetric {
    age: number;
    height: number;
    weight: number;
    maxHeartrate: number;
    restHeartrate: number;
    vo2Max: number;
    male: boolean;
}
export interface SetFitnessMetricRequest {
    fitnessMetric: FitnessMetric | undefined;
}
export interface GetFitnessMetricResponse {
    fitnessMetric: FitnessMetric | undefined;
}
export declare const FitnessMetric: {
    encode(message: FitnessMetric, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FitnessMetric;
    fromJSON(object: any): FitnessMetric;
    toJSON(message: FitnessMetric): unknown;
    create<I extends {
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
    } & { [K in Exclude<keyof I, keyof FitnessMetric>]: never; }>(base?: I): FitnessMetric;
    fromPartial<I_1 extends {
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
    } & { [K_1 in Exclude<keyof I_1, keyof FitnessMetric>]: never; }>(object: I_1): FitnessMetric;
};
export declare const SetFitnessMetricRequest: {
    encode(message: SetFitnessMetricRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetFitnessMetricRequest;
    fromJSON(object: any): SetFitnessMetricRequest;
    toJSON(message: SetFitnessMetricRequest): unknown;
    create<I extends {
        fitnessMetric?: {
            age?: number;
            height?: number;
            weight?: number;
            maxHeartrate?: number;
            restHeartrate?: number;
            vo2Max?: number;
            male?: boolean;
        };
    } & {
        fitnessMetric?: {
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
        } & { [K in Exclude<keyof I["fitnessMetric"], keyof FitnessMetric>]: never; };
    } & { [K_1 in Exclude<keyof I, "fitnessMetric">]: never; }>(base?: I): SetFitnessMetricRequest;
    fromPartial<I_1 extends {
        fitnessMetric?: {
            age?: number;
            height?: number;
            weight?: number;
            maxHeartrate?: number;
            restHeartrate?: number;
            vo2Max?: number;
            male?: boolean;
        };
    } & {
        fitnessMetric?: {
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
        } & { [K_2 in Exclude<keyof I_1["fitnessMetric"], keyof FitnessMetric>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "fitnessMetric">]: never; }>(object: I_1): SetFitnessMetricRequest;
};
export declare const GetFitnessMetricResponse: {
    encode(message: GetFitnessMetricResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetFitnessMetricResponse;
    fromJSON(object: any): GetFitnessMetricResponse;
    toJSON(message: GetFitnessMetricResponse): unknown;
    create<I extends {
        fitnessMetric?: {
            age?: number;
            height?: number;
            weight?: number;
            maxHeartrate?: number;
            restHeartrate?: number;
            vo2Max?: number;
            male?: boolean;
        };
    } & {
        fitnessMetric?: {
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
        } & { [K in Exclude<keyof I["fitnessMetric"], keyof FitnessMetric>]: never; };
    } & { [K_1 in Exclude<keyof I, "fitnessMetric">]: never; }>(base?: I): GetFitnessMetricResponse;
    fromPartial<I_1 extends {
        fitnessMetric?: {
            age?: number;
            height?: number;
            weight?: number;
            maxHeartrate?: number;
            restHeartrate?: number;
            vo2Max?: number;
            male?: boolean;
        };
    } & {
        fitnessMetric?: {
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
        } & { [K_2 in Exclude<keyof I_1["fitnessMetric"], keyof FitnessMetric>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "fitnessMetric">]: never; }>(object: I_1): GetFitnessMetricResponse;
};
export interface AthleteSvc {
    SetFitnessMetric(request: DeepPartial<SetFitnessMetricRequest>, metadata?: grpc.Metadata): Promise<Empty>;
    GetFitnessMetric(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetFitnessMetricResponse>;
}
export declare class AthleteSvcClientImpl implements AthleteSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    SetFitnessMetric(request: DeepPartial<SetFitnessMetricRequest>, metadata?: grpc.Metadata): Promise<Empty>;
    GetFitnessMetric(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetFitnessMetricResponse>;
}
export declare const AthleteSvcDesc: {
    serviceName: string;
};
export declare const AthleteSvcSetFitnessMetricDesc: UnaryMethodDefinitionish;
export declare const AthleteSvcGetFitnessMetricDesc: UnaryMethodDefinitionish;
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

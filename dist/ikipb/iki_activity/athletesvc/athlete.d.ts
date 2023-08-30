import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Athlete, AthleteFitness } from "../activity";
export declare const protobufPackage = "athletesvc";
export interface GetMyRequest {
}
export interface GetMyResponse {
    athlete: Athlete | undefined;
}
export interface SetMyFitnessRequest {
    fitness: AthleteFitness | undefined;
}
export interface SetMyFitnessResponse {
}
export interface GetRequest {
    userId: string;
}
export interface GetResponse {
    athlete: Athlete | undefined;
}
export interface SetFitnessRequest {
    userId: string;
    fitness: AthleteFitness | undefined;
}
export interface SetFitnessResponse {
}
export declare const GetMyRequest: {
    encode(_: GetMyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyRequest;
    fromJSON(_: any): GetMyRequest;
    toJSON(_: GetMyRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): GetMyRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): GetMyRequest;
};
export declare const GetMyResponse: {
    encode(message: GetMyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyResponse;
    fromJSON(object: any): GetMyResponse;
    toJSON(message: GetMyResponse): unknown;
    create<I extends {
        athlete?: {
            id?: string;
            userId?: string;
            stravaId?: number;
            AthleteFitness?: {
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
            stravaId?: number;
            AthleteFitness?: {
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
            stravaId?: number;
            AthleteFitness?: {
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
            } & { [K in Exclude<keyof I["athlete"]["AthleteFitness"], keyof AthleteFitness>]: never; };
        } & { [K_1 in Exclude<keyof I["athlete"], keyof Athlete>]: never; };
    } & { [K_2 in Exclude<keyof I, "athlete">]: never; }>(base?: I): GetMyResponse;
    fromPartial<I_1 extends {
        athlete?: {
            id?: string;
            userId?: string;
            stravaId?: number;
            AthleteFitness?: {
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
            stravaId?: number;
            AthleteFitness?: {
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
            stravaId?: number;
            AthleteFitness?: {
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
            } & { [K_3 in Exclude<keyof I_1["athlete"]["AthleteFitness"], keyof AthleteFitness>]: never; };
        } & { [K_4 in Exclude<keyof I_1["athlete"], keyof Athlete>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "athlete">]: never; }>(object: I_1): GetMyResponse;
};
export declare const SetMyFitnessRequest: {
    encode(message: SetMyFitnessRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetMyFitnessRequest;
    fromJSON(object: any): SetMyFitnessRequest;
    toJSON(message: SetMyFitnessRequest): unknown;
    create<I extends {
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
        } & { [K in Exclude<keyof I["fitness"], keyof AthleteFitness>]: never; };
    } & { [K_1 in Exclude<keyof I, "fitness">]: never; }>(base?: I): SetMyFitnessRequest;
    fromPartial<I_1 extends {
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
        } & { [K_2 in Exclude<keyof I_1["fitness"], keyof AthleteFitness>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "fitness">]: never; }>(object: I_1): SetMyFitnessRequest;
};
export declare const SetMyFitnessResponse: {
    encode(_: SetMyFitnessResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetMyFitnessResponse;
    fromJSON(_: any): SetMyFitnessResponse;
    toJSON(_: SetMyFitnessResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): SetMyFitnessResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): SetMyFitnessResponse;
};
export declare const GetRequest: {
    encode(message: GetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetRequest;
    fromJSON(object: any): GetRequest;
    toJSON(message: GetRequest): unknown;
    create<I extends {
        userId?: string;
    } & {
        userId?: string;
    } & { [K in Exclude<keyof I, "userId">]: never; }>(base?: I): GetRequest;
    fromPartial<I_1 extends {
        userId?: string;
    } & {
        userId?: string;
    } & { [K_1 in Exclude<keyof I_1, "userId">]: never; }>(object: I_1): GetRequest;
};
export declare const GetResponse: {
    encode(message: GetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetResponse;
    fromJSON(object: any): GetResponse;
    toJSON(message: GetResponse): unknown;
    create<I extends {
        athlete?: {
            id?: string;
            userId?: string;
            stravaId?: number;
            AthleteFitness?: {
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
            stravaId?: number;
            AthleteFitness?: {
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
            stravaId?: number;
            AthleteFitness?: {
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
            } & { [K in Exclude<keyof I["athlete"]["AthleteFitness"], keyof AthleteFitness>]: never; };
        } & { [K_1 in Exclude<keyof I["athlete"], keyof Athlete>]: never; };
    } & { [K_2 in Exclude<keyof I, "athlete">]: never; }>(base?: I): GetResponse;
    fromPartial<I_1 extends {
        athlete?: {
            id?: string;
            userId?: string;
            stravaId?: number;
            AthleteFitness?: {
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
            stravaId?: number;
            AthleteFitness?: {
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
            stravaId?: number;
            AthleteFitness?: {
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
            } & { [K_3 in Exclude<keyof I_1["athlete"]["AthleteFitness"], keyof AthleteFitness>]: never; };
        } & { [K_4 in Exclude<keyof I_1["athlete"], keyof Athlete>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "athlete">]: never; }>(object: I_1): GetResponse;
};
export declare const SetFitnessRequest: {
    encode(message: SetFitnessRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetFitnessRequest;
    fromJSON(object: any): SetFitnessRequest;
    toJSON(message: SetFitnessRequest): unknown;
    create<I extends {
        userId?: string;
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
        userId?: string;
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
        } & { [K in Exclude<keyof I["fitness"], keyof AthleteFitness>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof SetFitnessRequest>]: never; }>(base?: I): SetFitnessRequest;
    fromPartial<I_1 extends {
        userId?: string;
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
        userId?: string;
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
        } & { [K_2 in Exclude<keyof I_1["fitness"], keyof AthleteFitness>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof SetFitnessRequest>]: never; }>(object: I_1): SetFitnessRequest;
};
export declare const SetFitnessResponse: {
    encode(_: SetFitnessResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetFitnessResponse;
    fromJSON(_: any): SetFitnessResponse;
    toJSON(_: SetFitnessResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): SetFitnessResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): SetFitnessResponse;
};
export interface MyAthleteSvc {
    Get(request: DeepPartial<GetMyRequest>, metadata?: grpc.Metadata): Promise<GetMyResponse>;
    SetFitness(request: DeepPartial<SetMyFitnessRequest>, metadata?: grpc.Metadata): Promise<SetMyFitnessResponse>;
}
export declare class MyAthleteSvcClientImpl implements MyAthleteSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    Get(request: DeepPartial<GetMyRequest>, metadata?: grpc.Metadata): Promise<GetMyResponse>;
    SetFitness(request: DeepPartial<SetMyFitnessRequest>, metadata?: grpc.Metadata): Promise<SetMyFitnessResponse>;
}
export declare const MyAthleteSvcDesc: {
    serviceName: string;
};
export declare const MyAthleteSvcGetDesc: UnaryMethodDefinitionish;
export declare const MyAthleteSvcSetFitnessDesc: UnaryMethodDefinitionish;
export interface AthleteSvc {
    Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
    SetFitness(request: DeepPartial<SetFitnessRequest>, metadata?: grpc.Metadata): Promise<SetFitnessResponse>;
}
export declare class AthleteSvcClientImpl implements AthleteSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
    SetFitness(request: DeepPartial<SetFitnessRequest>, metadata?: grpc.Metadata): Promise<SetFitnessResponse>;
}
export declare const AthleteSvcDesc: {
    serviceName: string;
};
export declare const AthleteSvcGetDesc: UnaryMethodDefinitionish;
export declare const AthleteSvcSetFitnessDesc: UnaryMethodDefinitionish;
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

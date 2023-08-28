import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";
export declare const protobufPackage = "stop";
export interface Stop {
    id: string;
    remoteId: string;
    name: string;
    lat: number;
    long: number;
    createdAt: number;
}
export interface ListRequest {
    language: ListRequest_Language;
}
export declare enum ListRequest_Language {
    LANGUAGE_UNSPECIFIED = 0,
    LANGUAGE_EN = 1,
    LANGUAGE_TC = 2,
    LANGUAGE_SC = 3,
    UNRECOGNIZED = -1
}
export declare function listRequest_LanguageFromJSON(object: any): ListRequest_Language;
export declare function listRequest_LanguageToJSON(object: ListRequest_Language): string;
export interface ListResponse {
    stops: Stop[];
}
export declare const Stop: {
    encode(message: Stop, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Stop;
    fromJSON(object: any): Stop;
    toJSON(message: Stop): unknown;
    create<I extends {
        id?: string;
        remoteId?: string;
        name?: string;
        lat?: number;
        long?: number;
        createdAt?: number;
    } & {
        id?: string;
        remoteId?: string;
        name?: string;
        lat?: number;
        long?: number;
        createdAt?: number;
    } & { [K in Exclude<keyof I, keyof Stop>]: never; }>(base?: I): Stop;
    fromPartial<I_1 extends {
        id?: string;
        remoteId?: string;
        name?: string;
        lat?: number;
        long?: number;
        createdAt?: number;
    } & {
        id?: string;
        remoteId?: string;
        name?: string;
        lat?: number;
        long?: number;
        createdAt?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof Stop>]: never; }>(object: I_1): Stop;
};
export declare const ListRequest: {
    encode(message: ListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListRequest;
    fromJSON(object: any): ListRequest;
    toJSON(message: ListRequest): unknown;
    create<I extends {
        language?: ListRequest_Language;
    } & {
        language?: ListRequest_Language;
    } & { [K in Exclude<keyof I, "language">]: never; }>(base?: I): ListRequest;
    fromPartial<I_1 extends {
        language?: ListRequest_Language;
    } & {
        language?: ListRequest_Language;
    } & { [K_1 in Exclude<keyof I_1, "language">]: never; }>(object: I_1): ListRequest;
};
export declare const ListResponse: {
    encode(message: ListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListResponse;
    fromJSON(object: any): ListResponse;
    toJSON(message: ListResponse): unknown;
    create<I extends {
        stops?: {
            id?: string;
            remoteId?: string;
            name?: string;
            lat?: number;
            long?: number;
            createdAt?: number;
        }[];
    } & {
        stops?: {
            id?: string;
            remoteId?: string;
            name?: string;
            lat?: number;
            long?: number;
            createdAt?: number;
        }[] & ({
            id?: string;
            remoteId?: string;
            name?: string;
            lat?: number;
            long?: number;
            createdAt?: number;
        } & {
            id?: string;
            remoteId?: string;
            name?: string;
            lat?: number;
            long?: number;
            createdAt?: number;
        } & { [K in Exclude<keyof I["stops"][number], keyof Stop>]: never; })[] & { [K_1 in Exclude<keyof I["stops"], keyof {
            id?: string;
            remoteId?: string;
            name?: string;
            lat?: number;
            long?: number;
            createdAt?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "stops">]: never; }>(base?: I): ListResponse;
    fromPartial<I_1 extends {
        stops?: {
            id?: string;
            remoteId?: string;
            name?: string;
            lat?: number;
            long?: number;
            createdAt?: number;
        }[];
    } & {
        stops?: {
            id?: string;
            remoteId?: string;
            name?: string;
            lat?: number;
            long?: number;
            createdAt?: number;
        }[] & ({
            id?: string;
            remoteId?: string;
            name?: string;
            lat?: number;
            long?: number;
            createdAt?: number;
        } & {
            id?: string;
            remoteId?: string;
            name?: string;
            lat?: number;
            long?: number;
            createdAt?: number;
        } & { [K_3 in Exclude<keyof I_1["stops"][number], keyof Stop>]: never; })[] & { [K_4 in Exclude<keyof I_1["stops"], keyof {
            id?: string;
            remoteId?: string;
            name?: string;
            lat?: number;
            long?: number;
            createdAt?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "stops">]: never; }>(object: I_1): ListResponse;
};
export interface StopSvc {
    List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    Sync(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<Empty>;
}
export declare class StopSvcClientImpl implements StopSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    Sync(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<Empty>;
}
export declare const StopSvcDesc: {
    serviceName: string;
};
export declare const StopSvcListDesc: UnaryMethodDefinitionish;
export declare const StopSvcSyncDesc: UnaryMethodDefinitionish;
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

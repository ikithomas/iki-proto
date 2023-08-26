import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";
export declare const protobufPackage = "route";
export interface Route {
    id: string;
    co: string;
    route: string;
    bound: string;
    serviceType: string;
    orig: string;
    dest: string;
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
    routes: Route[];
}
export declare const Route: {
    encode(message: Route, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Route;
    fromJSON(object: any): Route;
    toJSON(message: Route): unknown;
    create<I extends {
        id?: string;
        co?: string;
        route?: string;
        bound?: string;
        serviceType?: string;
        orig?: string;
        dest?: string;
        createdAt?: number;
    } & {
        id?: string;
        co?: string;
        route?: string;
        bound?: string;
        serviceType?: string;
        orig?: string;
        dest?: string;
        createdAt?: number;
    } & { [K in Exclude<keyof I, keyof Route>]: never; }>(base?: I): Route;
    fromPartial<I_1 extends {
        id?: string;
        co?: string;
        route?: string;
        bound?: string;
        serviceType?: string;
        orig?: string;
        dest?: string;
        createdAt?: number;
    } & {
        id?: string;
        co?: string;
        route?: string;
        bound?: string;
        serviceType?: string;
        orig?: string;
        dest?: string;
        createdAt?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof Route>]: never; }>(object: I_1): Route;
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
        routes?: {
            id?: string;
            co?: string;
            route?: string;
            bound?: string;
            serviceType?: string;
            orig?: string;
            dest?: string;
            createdAt?: number;
        }[];
    } & {
        routes?: {
            id?: string;
            co?: string;
            route?: string;
            bound?: string;
            serviceType?: string;
            orig?: string;
            dest?: string;
            createdAt?: number;
        }[] & ({
            id?: string;
            co?: string;
            route?: string;
            bound?: string;
            serviceType?: string;
            orig?: string;
            dest?: string;
            createdAt?: number;
        } & {
            id?: string;
            co?: string;
            route?: string;
            bound?: string;
            serviceType?: string;
            orig?: string;
            dest?: string;
            createdAt?: number;
        } & { [K in Exclude<keyof I["routes"][number], keyof Route>]: never; })[] & { [K_1 in Exclude<keyof I["routes"], keyof {
            id?: string;
            co?: string;
            route?: string;
            bound?: string;
            serviceType?: string;
            orig?: string;
            dest?: string;
            createdAt?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "routes">]: never; }>(base?: I): ListResponse;
    fromPartial<I_1 extends {
        routes?: {
            id?: string;
            co?: string;
            route?: string;
            bound?: string;
            serviceType?: string;
            orig?: string;
            dest?: string;
            createdAt?: number;
        }[];
    } & {
        routes?: {
            id?: string;
            co?: string;
            route?: string;
            bound?: string;
            serviceType?: string;
            orig?: string;
            dest?: string;
            createdAt?: number;
        }[] & ({
            id?: string;
            co?: string;
            route?: string;
            bound?: string;
            serviceType?: string;
            orig?: string;
            dest?: string;
            createdAt?: number;
        } & {
            id?: string;
            co?: string;
            route?: string;
            bound?: string;
            serviceType?: string;
            orig?: string;
            dest?: string;
            createdAt?: number;
        } & { [K_3 in Exclude<keyof I_1["routes"][number], keyof Route>]: never; })[] & { [K_4 in Exclude<keyof I_1["routes"], keyof {
            id?: string;
            co?: string;
            route?: string;
            bound?: string;
            serviceType?: string;
            orig?: string;
            dest?: string;
            createdAt?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "routes">]: never; }>(object: I_1): ListResponse;
};
export interface RouteSvc {
    List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    Sync(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<Empty>;
}
export declare class RouteSvcClientImpl implements RouteSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    Sync(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<Empty>;
}
export declare const RouteSvcDesc: {
    serviceName: string;
};
export declare const RouteSvcListDesc: UnaryMethodDefinitionish;
export declare const RouteSvcSyncDesc: UnaryMethodDefinitionish;
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

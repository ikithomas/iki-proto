import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Author } from "../blog";
export declare const protobufPackage = "authorsvc";
export interface ListRequest {
    page: number;
    pageSize: number;
}
export interface ListResponse {
    authors: Author[];
    totalCount: number;
}
export interface GetRequest {
    id: string;
}
export interface GetResponse {
    author: Author | undefined;
}
export interface CreateRequest {
    displayName: string;
}
export interface CreateResponse {
    author: Author | undefined;
}
export interface ProfileRequest {
}
export interface ProfileResponse {
    author: Author | undefined;
}
export declare const ListRequest: {
    encode(message: ListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListRequest;
    fromJSON(object: any): ListRequest;
    toJSON(message: ListRequest): unknown;
    create<I extends {
        page?: number;
        pageSize?: number;
    } & {
        page?: number;
        pageSize?: number;
    } & { [K in Exclude<keyof I, keyof ListRequest>]: never; }>(base?: I): ListRequest;
    fromPartial<I_1 extends {
        page?: number;
        pageSize?: number;
    } & {
        page?: number;
        pageSize?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof ListRequest>]: never; }>(object: I_1): ListRequest;
};
export declare const ListResponse: {
    encode(message: ListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListResponse;
    fromJSON(object: any): ListResponse;
    toJSON(message: ListResponse): unknown;
    create<I extends {
        authors?: {
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        }[];
        totalCount?: number;
    } & {
        authors?: {
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        }[] & ({
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        } & {
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        } & { [K in Exclude<keyof I["authors"][number], keyof Author>]: never; })[] & { [K_1 in Exclude<keyof I["authors"], keyof {
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        }[]>]: never; };
        totalCount?: number;
    } & { [K_2 in Exclude<keyof I, keyof ListResponse>]: never; }>(base?: I): ListResponse;
    fromPartial<I_1 extends {
        authors?: {
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        }[];
        totalCount?: number;
    } & {
        authors?: {
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        }[] & ({
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        } & {
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        } & { [K_3 in Exclude<keyof I_1["authors"][number], keyof Author>]: never; })[] & { [K_4 in Exclude<keyof I_1["authors"], keyof {
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        }[]>]: never; };
        totalCount?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof ListResponse>]: never; }>(object: I_1): ListResponse;
};
export declare const GetRequest: {
    encode(message: GetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetRequest;
    fromJSON(object: any): GetRequest;
    toJSON(message: GetRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): GetRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): GetRequest;
};
export declare const GetResponse: {
    encode(message: GetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetResponse;
    fromJSON(object: any): GetResponse;
    toJSON(message: GetResponse): unknown;
    create<I extends {
        author?: {
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        };
    } & {
        author?: {
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        } & {
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        } & { [K in Exclude<keyof I["author"], keyof Author>]: never; };
    } & { [K_1 in Exclude<keyof I, "author">]: never; }>(base?: I): GetResponse;
    fromPartial<I_1 extends {
        author?: {
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        };
    } & {
        author?: {
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        } & {
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        } & { [K_2 in Exclude<keyof I_1["author"], keyof Author>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "author">]: never; }>(object: I_1): GetResponse;
};
export declare const CreateRequest: {
    encode(message: CreateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateRequest;
    fromJSON(object: any): CreateRequest;
    toJSON(message: CreateRequest): unknown;
    create<I extends {
        displayName?: string;
    } & {
        displayName?: string;
    } & { [K in Exclude<keyof I, "displayName">]: never; }>(base?: I): CreateRequest;
    fromPartial<I_1 extends {
        displayName?: string;
    } & {
        displayName?: string;
    } & { [K_1 in Exclude<keyof I_1, "displayName">]: never; }>(object: I_1): CreateRequest;
};
export declare const CreateResponse: {
    encode(message: CreateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateResponse;
    fromJSON(object: any): CreateResponse;
    toJSON(message: CreateResponse): unknown;
    create<I extends {
        author?: {
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        };
    } & {
        author?: {
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        } & {
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        } & { [K in Exclude<keyof I["author"], keyof Author>]: never; };
    } & { [K_1 in Exclude<keyof I, "author">]: never; }>(base?: I): CreateResponse;
    fromPartial<I_1 extends {
        author?: {
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        };
    } & {
        author?: {
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        } & {
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        } & { [K_2 in Exclude<keyof I_1["author"], keyof Author>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "author">]: never; }>(object: I_1): CreateResponse;
};
export declare const ProfileRequest: {
    encode(_: ProfileRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProfileRequest;
    fromJSON(_: any): ProfileRequest;
    toJSON(_: ProfileRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): ProfileRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ProfileRequest;
};
export declare const ProfileResponse: {
    encode(message: ProfileResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProfileResponse;
    fromJSON(object: any): ProfileResponse;
    toJSON(message: ProfileResponse): unknown;
    create<I extends {
        author?: {
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        };
    } & {
        author?: {
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        } & {
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        } & { [K in Exclude<keyof I["author"], keyof Author>]: never; };
    } & { [K_1 in Exclude<keyof I, "author">]: never; }>(base?: I): ProfileResponse;
    fromPartial<I_1 extends {
        author?: {
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        };
    } & {
        author?: {
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        } & {
            id?: string;
            ikiUserId?: string;
            displayName?: string;
        } & { [K_2 in Exclude<keyof I_1["author"], keyof Author>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "author">]: never; }>(object: I_1): ProfileResponse;
};
export interface AuthorSvc {
    List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
}
export declare class AuthorSvcClientImpl implements AuthorSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
}
export declare const AuthorSvcDesc: {
    serviceName: string;
};
export declare const AuthorSvcListDesc: UnaryMethodDefinitionish;
export declare const AuthorSvcGetDesc: UnaryMethodDefinitionish;
export interface MyAuthorSvc {
    Create(request: DeepPartial<CreateRequest>, metadata?: grpc.Metadata): Promise<CreateResponse>;
    Profile(request: DeepPartial<ProfileRequest>, metadata?: grpc.Metadata): Promise<ProfileResponse>;
}
export declare class MyAuthorSvcClientImpl implements MyAuthorSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    Create(request: DeepPartial<CreateRequest>, metadata?: grpc.Metadata): Promise<CreateResponse>;
    Profile(request: DeepPartial<ProfileRequest>, metadata?: grpc.Metadata): Promise<ProfileResponse>;
}
export declare const MyAuthorSvcDesc: {
    serviceName: string;
};
export declare const MyAuthorSvcCreateDesc: UnaryMethodDefinitionish;
export declare const MyAuthorSvcProfileDesc: UnaryMethodDefinitionish;
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

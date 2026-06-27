import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Secret, Service } from "../iam";
export declare const protobufPackage = "servicesvc";
export interface CreateRequest {
    name: string;
}
export interface CreateResponse {
    service: Service | undefined;
}
export interface GetRequest {
    id: string;
}
export interface GetResponse {
    service: Service | undefined;
}
export interface ListRequest {
}
export interface ListResponse {
    services: Service[];
}
export interface DeleteRequest {
    id: string;
}
export interface DeleteResponse {
}
export interface AddSecretRequest {
    id: string;
}
export interface AddSecretResponse {
    secret: Secret | undefined;
}
export interface ActivateSecretRequest {
    id: string;
}
export interface ActivateSecretResponse {
}
export interface DeactivateSecretRequest {
    id: string;
}
export interface DeactivateSecretResponse {
}
export interface DeleteSecretRequest {
    id: string;
}
export interface DeleteSecretResponse {
}
export declare const CreateRequest: {
    encode(message: CreateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateRequest;
    fromJSON(object: any): CreateRequest;
    toJSON(message: CreateRequest): unknown;
    create<I extends {
        name?: string;
    } & {
        name?: string;
    } & { [K in Exclude<keyof I, "name">]: never; }>(base?: I): CreateRequest;
    fromPartial<I_1 extends {
        name?: string;
    } & {
        name?: string;
    } & { [K_1 in Exclude<keyof I_1, "name">]: never; }>(object: I_1): CreateRequest;
};
export declare const CreateResponse: {
    encode(message: CreateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateResponse;
    fromJSON(object: any): CreateResponse;
    toJSON(message: CreateResponse): unknown;
    create<I extends {
        service?: {
            id?: string;
            clientId?: string;
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[];
            name?: string;
        };
    } & {
        service?: {
            id?: string;
            clientId?: string;
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[];
            name?: string;
        } & {
            id?: string;
            clientId?: string;
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[] & ({
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            } & {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            } & { [K in Exclude<keyof I["service"]["secrets"][number], keyof Secret>]: never; })[] & { [K_1 in Exclude<keyof I["service"]["secrets"], keyof {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[]>]: never; };
            name?: string;
        } & { [K_2 in Exclude<keyof I["service"], keyof Service>]: never; };
    } & { [K_3 in Exclude<keyof I, "service">]: never; }>(base?: I): CreateResponse;
    fromPartial<I_1 extends {
        service?: {
            id?: string;
            clientId?: string;
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[];
            name?: string;
        };
    } & {
        service?: {
            id?: string;
            clientId?: string;
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[];
            name?: string;
        } & {
            id?: string;
            clientId?: string;
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[] & ({
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            } & {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            } & { [K_4 in Exclude<keyof I_1["service"]["secrets"][number], keyof Secret>]: never; })[] & { [K_5 in Exclude<keyof I_1["service"]["secrets"], keyof {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[]>]: never; };
            name?: string;
        } & { [K_6 in Exclude<keyof I_1["service"], keyof Service>]: never; };
    } & { [K_7 in Exclude<keyof I_1, "service">]: never; }>(object: I_1): CreateResponse;
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
        service?: {
            id?: string;
            clientId?: string;
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[];
            name?: string;
        };
    } & {
        service?: {
            id?: string;
            clientId?: string;
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[];
            name?: string;
        } & {
            id?: string;
            clientId?: string;
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[] & ({
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            } & {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            } & { [K in Exclude<keyof I["service"]["secrets"][number], keyof Secret>]: never; })[] & { [K_1 in Exclude<keyof I["service"]["secrets"], keyof {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[]>]: never; };
            name?: string;
        } & { [K_2 in Exclude<keyof I["service"], keyof Service>]: never; };
    } & { [K_3 in Exclude<keyof I, "service">]: never; }>(base?: I): GetResponse;
    fromPartial<I_1 extends {
        service?: {
            id?: string;
            clientId?: string;
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[];
            name?: string;
        };
    } & {
        service?: {
            id?: string;
            clientId?: string;
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[];
            name?: string;
        } & {
            id?: string;
            clientId?: string;
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[] & ({
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            } & {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            } & { [K_4 in Exclude<keyof I_1["service"]["secrets"][number], keyof Secret>]: never; })[] & { [K_5 in Exclude<keyof I_1["service"]["secrets"], keyof {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[]>]: never; };
            name?: string;
        } & { [K_6 in Exclude<keyof I_1["service"], keyof Service>]: never; };
    } & { [K_7 in Exclude<keyof I_1, "service">]: never; }>(object: I_1): GetResponse;
};
export declare const ListRequest: {
    encode(_: ListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListRequest;
    fromJSON(_: any): ListRequest;
    toJSON(_: ListRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): ListRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ListRequest;
};
export declare const ListResponse: {
    encode(message: ListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListResponse;
    fromJSON(object: any): ListResponse;
    toJSON(message: ListResponse): unknown;
    create<I extends {
        services?: {
            id?: string;
            clientId?: string;
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[];
            name?: string;
        }[];
    } & {
        services?: {
            id?: string;
            clientId?: string;
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[];
            name?: string;
        }[] & ({
            id?: string;
            clientId?: string;
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[];
            name?: string;
        } & {
            id?: string;
            clientId?: string;
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[] & ({
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            } & {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            } & { [K in Exclude<keyof I["services"][number]["secrets"][number], keyof Secret>]: never; })[] & { [K_1 in Exclude<keyof I["services"][number]["secrets"], keyof {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[]>]: never; };
            name?: string;
        } & { [K_2 in Exclude<keyof I["services"][number], keyof Service>]: never; })[] & { [K_3 in Exclude<keyof I["services"], keyof {
            id?: string;
            clientId?: string;
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[];
            name?: string;
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, "services">]: never; }>(base?: I): ListResponse;
    fromPartial<I_1 extends {
        services?: {
            id?: string;
            clientId?: string;
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[];
            name?: string;
        }[];
    } & {
        services?: {
            id?: string;
            clientId?: string;
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[];
            name?: string;
        }[] & ({
            id?: string;
            clientId?: string;
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[];
            name?: string;
        } & {
            id?: string;
            clientId?: string;
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[] & ({
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            } & {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            } & { [K_5 in Exclude<keyof I_1["services"][number]["secrets"][number], keyof Secret>]: never; })[] & { [K_6 in Exclude<keyof I_1["services"][number]["secrets"], keyof {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[]>]: never; };
            name?: string;
        } & { [K_7 in Exclude<keyof I_1["services"][number], keyof Service>]: never; })[] & { [K_8 in Exclude<keyof I_1["services"], keyof {
            id?: string;
            clientId?: string;
            secrets?: {
                id?: string;
                secret?: string;
                lastUsedAt?: number;
                active?: boolean;
            }[];
            name?: string;
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, "services">]: never; }>(object: I_1): ListResponse;
};
export declare const DeleteRequest: {
    encode(message: DeleteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRequest;
    fromJSON(object: any): DeleteRequest;
    toJSON(message: DeleteRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): DeleteRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): DeleteRequest;
};
export declare const DeleteResponse: {
    encode(_: DeleteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteResponse;
    fromJSON(_: any): DeleteResponse;
    toJSON(_: DeleteResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): DeleteResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): DeleteResponse;
};
export declare const AddSecretRequest: {
    encode(message: AddSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddSecretRequest;
    fromJSON(object: any): AddSecretRequest;
    toJSON(message: AddSecretRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): AddSecretRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): AddSecretRequest;
};
export declare const AddSecretResponse: {
    encode(message: AddSecretResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddSecretResponse;
    fromJSON(object: any): AddSecretResponse;
    toJSON(message: AddSecretResponse): unknown;
    create<I extends {
        secret?: {
            id?: string;
            secret?: string;
            lastUsedAt?: number;
            active?: boolean;
        };
    } & {
        secret?: {
            id?: string;
            secret?: string;
            lastUsedAt?: number;
            active?: boolean;
        } & {
            id?: string;
            secret?: string;
            lastUsedAt?: number;
            active?: boolean;
        } & { [K in Exclude<keyof I["secret"], keyof Secret>]: never; };
    } & { [K_1 in Exclude<keyof I, "secret">]: never; }>(base?: I): AddSecretResponse;
    fromPartial<I_1 extends {
        secret?: {
            id?: string;
            secret?: string;
            lastUsedAt?: number;
            active?: boolean;
        };
    } & {
        secret?: {
            id?: string;
            secret?: string;
            lastUsedAt?: number;
            active?: boolean;
        } & {
            id?: string;
            secret?: string;
            lastUsedAt?: number;
            active?: boolean;
        } & { [K_2 in Exclude<keyof I_1["secret"], keyof Secret>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "secret">]: never; }>(object: I_1): AddSecretResponse;
};
export declare const ActivateSecretRequest: {
    encode(message: ActivateSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateSecretRequest;
    fromJSON(object: any): ActivateSecretRequest;
    toJSON(message: ActivateSecretRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): ActivateSecretRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): ActivateSecretRequest;
};
export declare const ActivateSecretResponse: {
    encode(_: ActivateSecretResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateSecretResponse;
    fromJSON(_: any): ActivateSecretResponse;
    toJSON(_: ActivateSecretResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): ActivateSecretResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ActivateSecretResponse;
};
export declare const DeactivateSecretRequest: {
    encode(message: DeactivateSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateSecretRequest;
    fromJSON(object: any): DeactivateSecretRequest;
    toJSON(message: DeactivateSecretRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): DeactivateSecretRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): DeactivateSecretRequest;
};
export declare const DeactivateSecretResponse: {
    encode(_: DeactivateSecretResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateSecretResponse;
    fromJSON(_: any): DeactivateSecretResponse;
    toJSON(_: DeactivateSecretResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): DeactivateSecretResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): DeactivateSecretResponse;
};
export declare const DeleteSecretRequest: {
    encode(message: DeleteSecretRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSecretRequest;
    fromJSON(object: any): DeleteSecretRequest;
    toJSON(message: DeleteSecretRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): DeleteSecretRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): DeleteSecretRequest;
};
export declare const DeleteSecretResponse: {
    encode(_: DeleteSecretResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSecretResponse;
    fromJSON(_: any): DeleteSecretResponse;
    toJSON(_: DeleteSecretResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): DeleteSecretResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): DeleteSecretResponse;
};
export interface ServiceSvc {
    Create(request: DeepPartial<CreateRequest>, metadata?: grpc.Metadata): Promise<CreateResponse>;
    Delete(request: DeepPartial<DeleteRequest>, metadata?: grpc.Metadata): Promise<DeleteResponse>;
    Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
    List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    /** AddSecret adds a new usable secret */
    AddSecret(request: DeepPartial<AddSecretRequest>, metadata?: grpc.Metadata): Promise<AddSecretResponse>;
    ActivateSecret(request: DeepPartial<ActivateSecretRequest>, metadata?: grpc.Metadata): Promise<ActivateSecretResponse>;
    DeactivateSecret(request: DeepPartial<DeactivateSecretRequest>, metadata?: grpc.Metadata): Promise<DeactivateSecretResponse>;
    DeleteSecret(request: DeepPartial<DeleteSecretRequest>, metadata?: grpc.Metadata): Promise<DeleteSecretResponse>;
}
export declare class ServiceSvcClientImpl implements ServiceSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    Create(request: DeepPartial<CreateRequest>, metadata?: grpc.Metadata): Promise<CreateResponse>;
    Delete(request: DeepPartial<DeleteRequest>, metadata?: grpc.Metadata): Promise<DeleteResponse>;
    Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
    List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    AddSecret(request: DeepPartial<AddSecretRequest>, metadata?: grpc.Metadata): Promise<AddSecretResponse>;
    ActivateSecret(request: DeepPartial<ActivateSecretRequest>, metadata?: grpc.Metadata): Promise<ActivateSecretResponse>;
    DeactivateSecret(request: DeepPartial<DeactivateSecretRequest>, metadata?: grpc.Metadata): Promise<DeactivateSecretResponse>;
    DeleteSecret(request: DeepPartial<DeleteSecretRequest>, metadata?: grpc.Metadata): Promise<DeleteSecretResponse>;
}
export declare const ServiceSvcDesc: {
    serviceName: string;
};
export declare const ServiceSvcCreateDesc: UnaryMethodDefinitionish;
export declare const ServiceSvcDeleteDesc: UnaryMethodDefinitionish;
export declare const ServiceSvcGetDesc: UnaryMethodDefinitionish;
export declare const ServiceSvcListDesc: UnaryMethodDefinitionish;
export declare const ServiceSvcAddSecretDesc: UnaryMethodDefinitionish;
export declare const ServiceSvcActivateSecretDesc: UnaryMethodDefinitionish;
export declare const ServiceSvcDeactivateSecretDesc: UnaryMethodDefinitionish;
export declare const ServiceSvcDeleteSecretDesc: UnaryMethodDefinitionish;
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

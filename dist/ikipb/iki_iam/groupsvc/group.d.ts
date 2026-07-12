import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Group } from "../iam";
export declare const protobufPackage = "groupsvc";
export interface GetRequest {
    id: string;
}
export interface GetResponse {
    group: Group | undefined;
}
export interface ListRequest {
}
export interface ListResponse {
    groups: Group[];
}
export interface CreateRequest {
    name: string;
}
export interface CreateResponse {
    group: Group | undefined;
}
export interface DeleteRequest {
    id: string;
}
export interface DeleteResponse {
}
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
        group?: {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[];
        };
    } & {
        group?: {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[];
        } & {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[] & ({
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            } & {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[] & ({
                    id?: string;
                    name?: string;
                    externalId?: string;
                } & {
                    id?: string;
                    name?: string;
                    externalId?: string;
                } & { [K in Exclude<keyof I["group"]["roles"][number]["permissions"][number], keyof import("../iam").Permission>]: never; })[] & { [K_1 in Exclude<keyof I["group"]["roles"][number]["permissions"], keyof {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[]>]: never; };
            } & { [K_2 in Exclude<keyof I["group"]["roles"][number], keyof import("../iam").Role>]: never; })[] & { [K_3 in Exclude<keyof I["group"]["roles"], keyof {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[]>]: never; };
        } & { [K_4 in Exclude<keyof I["group"], keyof Group>]: never; };
    } & { [K_5 in Exclude<keyof I, "group">]: never; }>(base?: I): GetResponse;
    fromPartial<I_1 extends {
        group?: {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[];
        };
    } & {
        group?: {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[];
        } & {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[] & ({
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            } & {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[] & ({
                    id?: string;
                    name?: string;
                    externalId?: string;
                } & {
                    id?: string;
                    name?: string;
                    externalId?: string;
                } & { [K_6 in Exclude<keyof I_1["group"]["roles"][number]["permissions"][number], keyof import("../iam").Permission>]: never; })[] & { [K_7 in Exclude<keyof I_1["group"]["roles"][number]["permissions"], keyof {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[]>]: never; };
            } & { [K_8 in Exclude<keyof I_1["group"]["roles"][number], keyof import("../iam").Role>]: never; })[] & { [K_9 in Exclude<keyof I_1["group"]["roles"], keyof {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[]>]: never; };
        } & { [K_10 in Exclude<keyof I_1["group"], keyof Group>]: never; };
    } & { [K_11 in Exclude<keyof I_1, "group">]: never; }>(object: I_1): GetResponse;
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
        groups?: {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[];
        }[];
    } & {
        groups?: {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[];
        }[] & ({
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[];
        } & {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[] & ({
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            } & {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[] & ({
                    id?: string;
                    name?: string;
                    externalId?: string;
                } & {
                    id?: string;
                    name?: string;
                    externalId?: string;
                } & { [K in Exclude<keyof I["groups"][number]["roles"][number]["permissions"][number], keyof import("../iam").Permission>]: never; })[] & { [K_1 in Exclude<keyof I["groups"][number]["roles"][number]["permissions"], keyof {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[]>]: never; };
            } & { [K_2 in Exclude<keyof I["groups"][number]["roles"][number], keyof import("../iam").Role>]: never; })[] & { [K_3 in Exclude<keyof I["groups"][number]["roles"], keyof {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[]>]: never; };
        } & { [K_4 in Exclude<keyof I["groups"][number], keyof Group>]: never; })[] & { [K_5 in Exclude<keyof I["groups"], keyof {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[];
        }[]>]: never; };
    } & { [K_6 in Exclude<keyof I, "groups">]: never; }>(base?: I): ListResponse;
    fromPartial<I_1 extends {
        groups?: {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[];
        }[];
    } & {
        groups?: {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[];
        }[] & ({
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[];
        } & {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[] & ({
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            } & {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[] & ({
                    id?: string;
                    name?: string;
                    externalId?: string;
                } & {
                    id?: string;
                    name?: string;
                    externalId?: string;
                } & { [K_7 in Exclude<keyof I_1["groups"][number]["roles"][number]["permissions"][number], keyof import("../iam").Permission>]: never; })[] & { [K_8 in Exclude<keyof I_1["groups"][number]["roles"][number]["permissions"], keyof {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[]>]: never; };
            } & { [K_9 in Exclude<keyof I_1["groups"][number]["roles"][number], keyof import("../iam").Role>]: never; })[] & { [K_10 in Exclude<keyof I_1["groups"][number]["roles"], keyof {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[]>]: never; };
        } & { [K_11 in Exclude<keyof I_1["groups"][number], keyof Group>]: never; })[] & { [K_12 in Exclude<keyof I_1["groups"], keyof {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[];
        }[]>]: never; };
    } & { [K_13 in Exclude<keyof I_1, "groups">]: never; }>(object: I_1): ListResponse;
};
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
        group?: {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[];
        };
    } & {
        group?: {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[];
        } & {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[] & ({
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            } & {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[] & ({
                    id?: string;
                    name?: string;
                    externalId?: string;
                } & {
                    id?: string;
                    name?: string;
                    externalId?: string;
                } & { [K in Exclude<keyof I["group"]["roles"][number]["permissions"][number], keyof import("../iam").Permission>]: never; })[] & { [K_1 in Exclude<keyof I["group"]["roles"][number]["permissions"], keyof {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[]>]: never; };
            } & { [K_2 in Exclude<keyof I["group"]["roles"][number], keyof import("../iam").Role>]: never; })[] & { [K_3 in Exclude<keyof I["group"]["roles"], keyof {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[]>]: never; };
        } & { [K_4 in Exclude<keyof I["group"], keyof Group>]: never; };
    } & { [K_5 in Exclude<keyof I, "group">]: never; }>(base?: I): CreateResponse;
    fromPartial<I_1 extends {
        group?: {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[];
        };
    } & {
        group?: {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[];
        } & {
            id?: string;
            name?: string;
            roles?: {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[] & ({
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            } & {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[] & ({
                    id?: string;
                    name?: string;
                    externalId?: string;
                } & {
                    id?: string;
                    name?: string;
                    externalId?: string;
                } & { [K_6 in Exclude<keyof I_1["group"]["roles"][number]["permissions"][number], keyof import("../iam").Permission>]: never; })[] & { [K_7 in Exclude<keyof I_1["group"]["roles"][number]["permissions"], keyof {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[]>]: never; };
            } & { [K_8 in Exclude<keyof I_1["group"]["roles"][number], keyof import("../iam").Role>]: never; })[] & { [K_9 in Exclude<keyof I_1["group"]["roles"], keyof {
                id?: string;
                name?: string;
                permissions?: {
                    id?: string;
                    name?: string;
                    externalId?: string;
                }[];
            }[]>]: never; };
        } & { [K_10 in Exclude<keyof I_1["group"], keyof Group>]: never; };
    } & { [K_11 in Exclude<keyof I_1, "group">]: never; }>(object: I_1): CreateResponse;
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
export interface GroupSvc {
    Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
    List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    Create(request: DeepPartial<CreateRequest>, metadata?: grpc.Metadata): Promise<CreateResponse>;
    Delete(request: DeepPartial<DeleteRequest>, metadata?: grpc.Metadata): Promise<DeleteResponse>;
}
export declare class GroupSvcClientImpl implements GroupSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
    List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    Create(request: DeepPartial<CreateRequest>, metadata?: grpc.Metadata): Promise<CreateResponse>;
    Delete(request: DeepPartial<DeleteRequest>, metadata?: grpc.Metadata): Promise<DeleteResponse>;
}
export declare const GroupSvcDesc: {
    serviceName: string;
};
export declare const GroupSvcGetDesc: UnaryMethodDefinitionish;
export declare const GroupSvcListDesc: UnaryMethodDefinitionish;
export declare const GroupSvcCreateDesc: UnaryMethodDefinitionish;
export declare const GroupSvcDeleteDesc: UnaryMethodDefinitionish;
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

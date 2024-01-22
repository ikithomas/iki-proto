import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Magazine, Pagination, PostMetadata, Series } from "../blog";
export declare const protobufPackage = "magazinesvc";
export interface ListRequest {
    pagination: Pagination | undefined;
}
export interface ListByAuthorIdRequest {
    pagination: Pagination | undefined;
    authorId: string;
}
export interface ListByCategoryRequest {
    pagination: Pagination | undefined;
    category: string;
}
export interface ListResponse {
    magazines: Magazine[];
    series: Series[];
    totalCount: number;
}
export interface GetRequest {
    id: string;
}
export interface GetResponse {
    magazine: Magazine | undefined;
    posts: PostMetadata[];
}
export interface CreateMyRequest {
    title: string;
    preface: string;
    category: string;
}
export interface CreateMyResponse {
    magazine: Magazine | undefined;
}
export interface UpdateMyRequest {
    id: string;
    title: string;
    preface: string;
    category: string;
}
export interface UpdateMyResponse {
}
export interface GetMyRequest {
    id: string;
}
export interface GetMyResponse {
    magazine: Magazine | undefined;
    posts: PostMetadata[];
}
export interface DeleteMyRequest {
    id: string;
}
export interface DeleteMyResponse {
}
export interface ListMyRequest {
    pagination: Pagination | undefined;
}
export interface ListMyByCategoryRequest {
    pagination: Pagination | undefined;
    category: string;
}
export interface ListMyResponse {
    magazines: Magazine[];
    totalCount: number;
    series: Series[];
    adrian: string;
    billian: number[];
}
export declare const ListRequest: {
    encode(message: ListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListRequest;
    fromJSON(object: any): ListRequest;
    toJSON(message: ListRequest): unknown;
    create<I extends {
        pagination?: {
            page?: number;
            pageSize?: number;
        };
    } & {
        pagination?: {
            page?: number;
            pageSize?: number;
        } & {
            page?: number;
            pageSize?: number;
        } & { [K in Exclude<keyof I["pagination"], keyof Pagination>]: never; };
    } & { [K_1 in Exclude<keyof I, "pagination">]: never; }>(base?: I): ListRequest;
    fromPartial<I_1 extends {
        pagination?: {
            page?: number;
            pageSize?: number;
        };
    } & {
        pagination?: {
            page?: number;
            pageSize?: number;
        } & {
            page?: number;
            pageSize?: number;
        } & { [K_2 in Exclude<keyof I_1["pagination"], keyof Pagination>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "pagination">]: never; }>(object: I_1): ListRequest;
};
export declare const ListByAuthorIdRequest: {
    encode(message: ListByAuthorIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListByAuthorIdRequest;
    fromJSON(object: any): ListByAuthorIdRequest;
    toJSON(message: ListByAuthorIdRequest): unknown;
    create<I extends {
        pagination?: {
            page?: number;
            pageSize?: number;
        };
        authorId?: string;
    } & {
        pagination?: {
            page?: number;
            pageSize?: number;
        } & {
            page?: number;
            pageSize?: number;
        } & { [K in Exclude<keyof I["pagination"], keyof Pagination>]: never; };
        authorId?: string;
    } & { [K_1 in Exclude<keyof I, keyof ListByAuthorIdRequest>]: never; }>(base?: I): ListByAuthorIdRequest;
    fromPartial<I_1 extends {
        pagination?: {
            page?: number;
            pageSize?: number;
        };
        authorId?: string;
    } & {
        pagination?: {
            page?: number;
            pageSize?: number;
        } & {
            page?: number;
            pageSize?: number;
        } & { [K_2 in Exclude<keyof I_1["pagination"], keyof Pagination>]: never; };
        authorId?: string;
    } & { [K_3 in Exclude<keyof I_1, keyof ListByAuthorIdRequest>]: never; }>(object: I_1): ListByAuthorIdRequest;
};
export declare const ListByCategoryRequest: {
    encode(message: ListByCategoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListByCategoryRequest;
    fromJSON(object: any): ListByCategoryRequest;
    toJSON(message: ListByCategoryRequest): unknown;
    create<I extends {
        pagination?: {
            page?: number;
            pageSize?: number;
        };
        category?: string;
    } & {
        pagination?: {
            page?: number;
            pageSize?: number;
        } & {
            page?: number;
            pageSize?: number;
        } & { [K in Exclude<keyof I["pagination"], keyof Pagination>]: never; };
        category?: string;
    } & { [K_1 in Exclude<keyof I, keyof ListByCategoryRequest>]: never; }>(base?: I): ListByCategoryRequest;
    fromPartial<I_1 extends {
        pagination?: {
            page?: number;
            pageSize?: number;
        };
        category?: string;
    } & {
        pagination?: {
            page?: number;
            pageSize?: number;
        } & {
            page?: number;
            pageSize?: number;
        } & { [K_2 in Exclude<keyof I_1["pagination"], keyof Pagination>]: never; };
        category?: string;
    } & { [K_3 in Exclude<keyof I_1, keyof ListByCategoryRequest>]: never; }>(object: I_1): ListByCategoryRequest;
};
export declare const ListResponse: {
    encode(message: ListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListResponse;
    fromJSON(object: any): ListResponse;
    toJSON(message: ListResponse): unknown;
    create<I extends {
        magazines?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        }[];
        series?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        }[];
        totalCount?: number;
    } & {
        magazines?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        }[] & ({
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & { [K in Exclude<keyof I["magazines"][number]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & { [K_1 in Exclude<keyof I["magazines"][number], keyof Magazine>]: never; })[] & { [K_2 in Exclude<keyof I["magazines"], keyof {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        }[]>]: never; };
        series?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        }[] & ({
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & { [K_3 in Exclude<keyof I["series"][number]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & { [K_4 in Exclude<keyof I["series"][number], keyof Series>]: never; })[] & { [K_5 in Exclude<keyof I["series"], keyof {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        }[]>]: never; };
        totalCount?: number;
    } & { [K_6 in Exclude<keyof I, keyof ListResponse>]: never; }>(base?: I): ListResponse;
    fromPartial<I_1 extends {
        magazines?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        }[];
        series?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        }[];
        totalCount?: number;
    } & {
        magazines?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        }[] & ({
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & { [K_7 in Exclude<keyof I_1["magazines"][number]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & { [K_8 in Exclude<keyof I_1["magazines"][number], keyof Magazine>]: never; })[] & { [K_9 in Exclude<keyof I_1["magazines"], keyof {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        }[]>]: never; };
        series?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        }[] & ({
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & { [K_10 in Exclude<keyof I_1["series"][number]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & { [K_11 in Exclude<keyof I_1["series"][number], keyof Series>]: never; })[] & { [K_12 in Exclude<keyof I_1["series"], keyof {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        }[]>]: never; };
        totalCount?: number;
    } & { [K_13 in Exclude<keyof I_1, keyof ListResponse>]: never; }>(object: I_1): ListResponse;
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
        magazine?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        };
        posts?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[];
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        }[];
    } & {
        magazine?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & { [K in Exclude<keyof I["magazine"]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & { [K_1 in Exclude<keyof I["magazine"], keyof Magazine>]: never; };
        posts?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[];
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        }[] & ({
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[];
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        } & {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & { [K_2 in Exclude<keyof I["posts"][number]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[] & string[] & { [K_3 in Exclude<keyof I["posts"][number]["tags"], keyof string[]>]: never; };
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        } & { [K_4 in Exclude<keyof I["posts"][number], keyof PostMetadata>]: never; })[] & { [K_5 in Exclude<keyof I["posts"], keyof {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[];
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        }[]>]: never; };
    } & { [K_6 in Exclude<keyof I, keyof GetResponse>]: never; }>(base?: I): GetResponse;
    fromPartial<I_1 extends {
        magazine?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        };
        posts?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[];
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        }[];
    } & {
        magazine?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & { [K_7 in Exclude<keyof I_1["magazine"]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & { [K_8 in Exclude<keyof I_1["magazine"], keyof Magazine>]: never; };
        posts?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[];
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        }[] & ({
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[];
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        } & {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & { [K_9 in Exclude<keyof I_1["posts"][number]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[] & string[] & { [K_10 in Exclude<keyof I_1["posts"][number]["tags"], keyof string[]>]: never; };
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        } & { [K_11 in Exclude<keyof I_1["posts"][number], keyof PostMetadata>]: never; })[] & { [K_12 in Exclude<keyof I_1["posts"], keyof {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[];
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        }[]>]: never; };
    } & { [K_13 in Exclude<keyof I_1, keyof GetResponse>]: never; }>(object: I_1): GetResponse;
};
export declare const CreateMyRequest: {
    encode(message: CreateMyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateMyRequest;
    fromJSON(object: any): CreateMyRequest;
    toJSON(message: CreateMyRequest): unknown;
    create<I extends {
        title?: string;
        preface?: string;
        category?: string;
    } & {
        title?: string;
        preface?: string;
        category?: string;
    } & { [K in Exclude<keyof I, keyof CreateMyRequest>]: never; }>(base?: I): CreateMyRequest;
    fromPartial<I_1 extends {
        title?: string;
        preface?: string;
        category?: string;
    } & {
        title?: string;
        preface?: string;
        category?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CreateMyRequest>]: never; }>(object: I_1): CreateMyRequest;
};
export declare const CreateMyResponse: {
    encode(message: CreateMyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateMyResponse;
    fromJSON(object: any): CreateMyResponse;
    toJSON(message: CreateMyResponse): unknown;
    create<I extends {
        magazine?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        };
    } & {
        magazine?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & { [K in Exclude<keyof I["magazine"]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & { [K_1 in Exclude<keyof I["magazine"], keyof Magazine>]: never; };
    } & { [K_2 in Exclude<keyof I, "magazine">]: never; }>(base?: I): CreateMyResponse;
    fromPartial<I_1 extends {
        magazine?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        };
    } & {
        magazine?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & { [K_3 in Exclude<keyof I_1["magazine"]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & { [K_4 in Exclude<keyof I_1["magazine"], keyof Magazine>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "magazine">]: never; }>(object: I_1): CreateMyResponse;
};
export declare const UpdateMyRequest: {
    encode(message: UpdateMyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMyRequest;
    fromJSON(object: any): UpdateMyRequest;
    toJSON(message: UpdateMyRequest): unknown;
    create<I extends {
        id?: string;
        title?: string;
        preface?: string;
        category?: string;
    } & {
        id?: string;
        title?: string;
        preface?: string;
        category?: string;
    } & { [K in Exclude<keyof I, keyof UpdateMyRequest>]: never; }>(base?: I): UpdateMyRequest;
    fromPartial<I_1 extends {
        id?: string;
        title?: string;
        preface?: string;
        category?: string;
    } & {
        id?: string;
        title?: string;
        preface?: string;
        category?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof UpdateMyRequest>]: never; }>(object: I_1): UpdateMyRequest;
};
export declare const UpdateMyResponse: {
    encode(_: UpdateMyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMyResponse;
    fromJSON(_: any): UpdateMyResponse;
    toJSON(_: UpdateMyResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): UpdateMyResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): UpdateMyResponse;
};
export declare const GetMyRequest: {
    encode(message: GetMyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyRequest;
    fromJSON(object: any): GetMyRequest;
    toJSON(message: GetMyRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): GetMyRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): GetMyRequest;
};
export declare const GetMyResponse: {
    encode(message: GetMyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMyResponse;
    fromJSON(object: any): GetMyResponse;
    toJSON(message: GetMyResponse): unknown;
    create<I extends {
        magazine?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        };
        posts?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[];
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        }[];
    } & {
        magazine?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & { [K in Exclude<keyof I["magazine"]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & { [K_1 in Exclude<keyof I["magazine"], keyof Magazine>]: never; };
        posts?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[];
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        }[] & ({
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[];
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        } & {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & { [K_2 in Exclude<keyof I["posts"][number]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[] & string[] & { [K_3 in Exclude<keyof I["posts"][number]["tags"], keyof string[]>]: never; };
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        } & { [K_4 in Exclude<keyof I["posts"][number], keyof PostMetadata>]: never; })[] & { [K_5 in Exclude<keyof I["posts"], keyof {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[];
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        }[]>]: never; };
    } & { [K_6 in Exclude<keyof I, keyof GetMyResponse>]: never; }>(base?: I): GetMyResponse;
    fromPartial<I_1 extends {
        magazine?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        };
        posts?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[];
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        }[];
    } & {
        magazine?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & { [K_7 in Exclude<keyof I_1["magazine"]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & { [K_8 in Exclude<keyof I_1["magazine"], keyof Magazine>]: never; };
        posts?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[];
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        }[] & ({
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[];
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        } & {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & { [K_9 in Exclude<keyof I_1["posts"][number]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[] & string[] & { [K_10 in Exclude<keyof I_1["posts"][number]["tags"], keyof string[]>]: never; };
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        } & { [K_11 in Exclude<keyof I_1["posts"][number], keyof PostMetadata>]: never; })[] & { [K_12 in Exclude<keyof I_1["posts"], keyof {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[];
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        }[]>]: never; };
    } & { [K_13 in Exclude<keyof I_1, keyof GetMyResponse>]: never; }>(object: I_1): GetMyResponse;
};
export declare const DeleteMyRequest: {
    encode(message: DeleteMyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMyRequest;
    fromJSON(object: any): DeleteMyRequest;
    toJSON(message: DeleteMyRequest): unknown;
    create<I extends {
        id?: string;
    } & {
        id?: string;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): DeleteMyRequest;
    fromPartial<I_1 extends {
        id?: string;
    } & {
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): DeleteMyRequest;
};
export declare const DeleteMyResponse: {
    encode(_: DeleteMyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMyResponse;
    fromJSON(_: any): DeleteMyResponse;
    toJSON(_: DeleteMyResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): DeleteMyResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): DeleteMyResponse;
};
export declare const ListMyRequest: {
    encode(message: ListMyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyRequest;
    fromJSON(object: any): ListMyRequest;
    toJSON(message: ListMyRequest): unknown;
    create<I extends {
        pagination?: {
            page?: number;
            pageSize?: number;
        };
    } & {
        pagination?: {
            page?: number;
            pageSize?: number;
        } & {
            page?: number;
            pageSize?: number;
        } & { [K in Exclude<keyof I["pagination"], keyof Pagination>]: never; };
    } & { [K_1 in Exclude<keyof I, "pagination">]: never; }>(base?: I): ListMyRequest;
    fromPartial<I_1 extends {
        pagination?: {
            page?: number;
            pageSize?: number;
        };
    } & {
        pagination?: {
            page?: number;
            pageSize?: number;
        } & {
            page?: number;
            pageSize?: number;
        } & { [K_2 in Exclude<keyof I_1["pagination"], keyof Pagination>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "pagination">]: never; }>(object: I_1): ListMyRequest;
};
export declare const ListMyByCategoryRequest: {
    encode(message: ListMyByCategoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyByCategoryRequest;
    fromJSON(object: any): ListMyByCategoryRequest;
    toJSON(message: ListMyByCategoryRequest): unknown;
    create<I extends {
        pagination?: {
            page?: number;
            pageSize?: number;
        };
        category?: string;
    } & {
        pagination?: {
            page?: number;
            pageSize?: number;
        } & {
            page?: number;
            pageSize?: number;
        } & { [K in Exclude<keyof I["pagination"], keyof Pagination>]: never; };
        category?: string;
    } & { [K_1 in Exclude<keyof I, keyof ListMyByCategoryRequest>]: never; }>(base?: I): ListMyByCategoryRequest;
    fromPartial<I_1 extends {
        pagination?: {
            page?: number;
            pageSize?: number;
        };
        category?: string;
    } & {
        pagination?: {
            page?: number;
            pageSize?: number;
        } & {
            page?: number;
            pageSize?: number;
        } & { [K_2 in Exclude<keyof I_1["pagination"], keyof Pagination>]: never; };
        category?: string;
    } & { [K_3 in Exclude<keyof I_1, keyof ListMyByCategoryRequest>]: never; }>(object: I_1): ListMyByCategoryRequest;
};
export declare const ListMyResponse: {
    encode(message: ListMyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyResponse;
    fromJSON(object: any): ListMyResponse;
    toJSON(message: ListMyResponse): unknown;
    create<I extends {
        magazines?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        }[];
        totalCount?: number;
        series?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        }[];
        adrian?: string;
        billian?: number[];
    } & {
        magazines?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        }[] & ({
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & { [K in Exclude<keyof I["magazines"][number]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & { [K_1 in Exclude<keyof I["magazines"][number], keyof Magazine>]: never; })[] & { [K_2 in Exclude<keyof I["magazines"], keyof {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        }[]>]: never; };
        totalCount?: number;
        series?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        }[] & ({
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & { [K_3 in Exclude<keyof I["series"][number]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & { [K_4 in Exclude<keyof I["series"][number], keyof Series>]: never; })[] & { [K_5 in Exclude<keyof I["series"], keyof {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        }[]>]: never; };
        adrian?: string;
        billian?: number[] & number[] & { [K_6 in Exclude<keyof I["billian"], keyof number[]>]: never; };
    } & { [K_7 in Exclude<keyof I, keyof ListMyResponse>]: never; }>(base?: I): ListMyResponse;
    fromPartial<I_1 extends {
        magazines?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        }[];
        totalCount?: number;
        series?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        }[];
        adrian?: string;
        billian?: number[];
    } & {
        magazines?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        }[] & ({
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & { [K_8 in Exclude<keyof I_1["magazines"][number]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & { [K_9 in Exclude<keyof I_1["magazines"][number], keyof Magazine>]: never; })[] & { [K_10 in Exclude<keyof I_1["magazines"], keyof {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        }[]>]: never; };
        totalCount?: number;
        series?: {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        }[] & ({
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            } & { [K_11 in Exclude<keyof I_1["series"][number]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        } & { [K_12 in Exclude<keyof I_1["series"][number], keyof Series>]: never; })[] & { [K_13 in Exclude<keyof I_1["series"], keyof {
            id?: string;
            author?: {
                id?: string;
                ikiUserId?: string;
                displayName?: string;
            };
            title?: string;
            preface?: string;
            category?: string;
            createdAt?: number;
            updatedAt?: number;
        }[]>]: never; };
        adrian?: string;
        billian?: number[] & number[] & { [K_14 in Exclude<keyof I_1["billian"], keyof number[]>]: never; };
    } & { [K_15 in Exclude<keyof I_1, keyof ListMyResponse>]: never; }>(object: I_1): ListMyResponse;
};
/**
 * //////////////////////////////////////////////////////////////////////////////
 * Magazine Service
 * ////
 */
export interface MagazineSvc {
    List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    ListByAuthorId(request: DeepPartial<ListByAuthorIdRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    ListByCategory(request: DeepPartial<ListByCategoryRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
}
export declare class MagazineSvcClientImpl implements MagazineSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    ListByAuthorId(request: DeepPartial<ListByAuthorIdRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    ListByCategory(request: DeepPartial<ListByCategoryRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
}
export declare const MagazineSvcDesc: {
    serviceName: string;
};
export declare const MagazineSvcListDesc: UnaryMethodDefinitionish;
export declare const MagazineSvcListByAuthorIdDesc: UnaryMethodDefinitionish;
export declare const MagazineSvcListByCategoryDesc: UnaryMethodDefinitionish;
export declare const MagazineSvcGetDesc: UnaryMethodDefinitionish;
/**
 * //////////////////////////////////////////////////////////////////////////////
 * MyMagazine Service
 * ////
 */
export interface MyMagazineSvc {
    Create(request: DeepPartial<CreateMyRequest>, metadata?: grpc.Metadata): Promise<CreateMyResponse>;
    Update(request: DeepPartial<UpdateMyRequest>, metadata?: grpc.Metadata): Promise<UpdateMyResponse>;
    Get(request: DeepPartial<GetMyRequest>, metadata?: grpc.Metadata): Promise<GetMyResponse>;
    Delete(request: DeepPartial<DeleteMyRequest>, metadata?: grpc.Metadata): Promise<DeleteMyResponse>;
    List(request: DeepPartial<ListMyRequest>, metadata?: grpc.Metadata): Promise<ListMyResponse>;
    ListByCategory(request: DeepPartial<ListMyByCategoryRequest>, metadata?: grpc.Metadata): Promise<ListMyResponse>;
}
export declare class MyMagazineSvcClientImpl implements MyMagazineSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    Create(request: DeepPartial<CreateMyRequest>, metadata?: grpc.Metadata): Promise<CreateMyResponse>;
    Update(request: DeepPartial<UpdateMyRequest>, metadata?: grpc.Metadata): Promise<UpdateMyResponse>;
    Get(request: DeepPartial<GetMyRequest>, metadata?: grpc.Metadata): Promise<GetMyResponse>;
    Delete(request: DeepPartial<DeleteMyRequest>, metadata?: grpc.Metadata): Promise<DeleteMyResponse>;
    List(request: DeepPartial<ListMyRequest>, metadata?: grpc.Metadata): Promise<ListMyResponse>;
    ListByCategory(request: DeepPartial<ListMyByCategoryRequest>, metadata?: grpc.Metadata): Promise<ListMyResponse>;
}
export declare const MyMagazineSvcDesc: {
    serviceName: string;
};
export declare const MyMagazineSvcCreateDesc: UnaryMethodDefinitionish;
export declare const MyMagazineSvcUpdateDesc: UnaryMethodDefinitionish;
export declare const MyMagazineSvcGetDesc: UnaryMethodDefinitionish;
export declare const MyMagazineSvcDeleteDesc: UnaryMethodDefinitionish;
export declare const MyMagazineSvcListDesc: UnaryMethodDefinitionish;
export declare const MyMagazineSvcListByCategoryDesc: UnaryMethodDefinitionish;
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

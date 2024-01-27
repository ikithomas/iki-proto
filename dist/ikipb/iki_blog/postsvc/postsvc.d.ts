import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { PostMetadata } from "../blog";
export declare const protobufPackage = "postsvc";
export interface ListRequest {
    page: number;
    pageSize: number;
}
export interface ListByAuthorIdRequest {
    page: number;
    pageSize: number;
    authorId: string;
}
export interface ListByCategoryRequest {
    page: number;
    pageSize: number;
    category: string;
}
export interface ListByTagRequest {
    page: number;
    pageSize: number;
    tag: string;
}
export interface ListResponse {
    postMetadata: PostMetadata[];
    totalCount: number;
}
export interface GetRequest {
    id: string;
}
export interface GetResponse {
    postMetadata: PostMetadata | undefined;
    content: string;
}
export interface CreateMyRequest {
    title: string;
    preface: string;
    published: boolean;
    tags: string[];
    category: string;
    content: string;
    magazineId?: string | undefined;
}
export interface CreateMyResponse {
    postMetadata: PostMetadata | undefined;
    content: string;
}
export interface UpdateMyRequest {
    id: string;
    title: string;
    preface: string;
    published: boolean;
    tags: string[];
    category: string;
    content: string;
    magazineId?: string | undefined;
}
export interface UpdateMyResponse {
}
export interface GetMyRequest {
    id: string;
}
export interface GetMyResponse {
    postMetadata: PostMetadata | undefined;
    content: string;
}
export interface DeleteMyRequest {
    id: string;
}
export interface DeleteMyResponse {
}
export interface ListMyRequest {
    page: number;
    pageSize: number;
}
export interface ListMyByCategoryRequest {
    page: number;
    pageSize: number;
    category: string;
}
export interface ListMyByTagRequest {
    page: number;
    pageSize: number;
    tag: string;
}
export interface ListMyResponse {
    postMetadata: PostMetadata[];
    totalCount: number;
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
export declare const ListByAuthorIdRequest: {
    encode(message: ListByAuthorIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListByAuthorIdRequest;
    fromJSON(object: any): ListByAuthorIdRequest;
    toJSON(message: ListByAuthorIdRequest): unknown;
    create<I extends {
        page?: number;
        pageSize?: number;
        authorId?: string;
    } & {
        page?: number;
        pageSize?: number;
        authorId?: string;
    } & { [K in Exclude<keyof I, keyof ListByAuthorIdRequest>]: never; }>(base?: I): ListByAuthorIdRequest;
    fromPartial<I_1 extends {
        page?: number;
        pageSize?: number;
        authorId?: string;
    } & {
        page?: number;
        pageSize?: number;
        authorId?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof ListByAuthorIdRequest>]: never; }>(object: I_1): ListByAuthorIdRequest;
};
export declare const ListByCategoryRequest: {
    encode(message: ListByCategoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListByCategoryRequest;
    fromJSON(object: any): ListByCategoryRequest;
    toJSON(message: ListByCategoryRequest): unknown;
    create<I extends {
        page?: number;
        pageSize?: number;
        category?: string;
    } & {
        page?: number;
        pageSize?: number;
        category?: string;
    } & { [K in Exclude<keyof I, keyof ListByCategoryRequest>]: never; }>(base?: I): ListByCategoryRequest;
    fromPartial<I_1 extends {
        page?: number;
        pageSize?: number;
        category?: string;
    } & {
        page?: number;
        pageSize?: number;
        category?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof ListByCategoryRequest>]: never; }>(object: I_1): ListByCategoryRequest;
};
export declare const ListByTagRequest: {
    encode(message: ListByTagRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListByTagRequest;
    fromJSON(object: any): ListByTagRequest;
    toJSON(message: ListByTagRequest): unknown;
    create<I extends {
        page?: number;
        pageSize?: number;
        tag?: string;
    } & {
        page?: number;
        pageSize?: number;
        tag?: string;
    } & { [K in Exclude<keyof I, keyof ListByTagRequest>]: never; }>(base?: I): ListByTagRequest;
    fromPartial<I_1 extends {
        page?: number;
        pageSize?: number;
        tag?: string;
    } & {
        page?: number;
        pageSize?: number;
        tag?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof ListByTagRequest>]: never; }>(object: I_1): ListByTagRequest;
};
export declare const ListResponse: {
    encode(message: ListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListResponse;
    fromJSON(object: any): ListResponse;
    toJSON(message: ListResponse): unknown;
    create<I extends {
        postMetadata?: {
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
        totalCount?: number;
    } & {
        postMetadata?: {
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
            } & { [K in Exclude<keyof I["postMetadata"][number]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[] & string[] & { [K_1 in Exclude<keyof I["postMetadata"][number]["tags"], keyof string[]>]: never; };
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        } & { [K_2 in Exclude<keyof I["postMetadata"][number], keyof PostMetadata>]: never; })[] & { [K_3 in Exclude<keyof I["postMetadata"], keyof {
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
        totalCount?: number;
    } & { [K_4 in Exclude<keyof I, keyof ListResponse>]: never; }>(base?: I): ListResponse;
    fromPartial<I_1 extends {
        postMetadata?: {
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
        totalCount?: number;
    } & {
        postMetadata?: {
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
            } & { [K_5 in Exclude<keyof I_1["postMetadata"][number]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[] & string[] & { [K_6 in Exclude<keyof I_1["postMetadata"][number]["tags"], keyof string[]>]: never; };
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        } & { [K_7 in Exclude<keyof I_1["postMetadata"][number], keyof PostMetadata>]: never; })[] & { [K_8 in Exclude<keyof I_1["postMetadata"], keyof {
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
        totalCount?: number;
    } & { [K_9 in Exclude<keyof I_1, keyof ListResponse>]: never; }>(object: I_1): ListResponse;
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
        postMetadata?: {
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
        };
        content?: string;
    } & {
        postMetadata?: {
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
            } & { [K in Exclude<keyof I["postMetadata"]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[] & string[] & { [K_1 in Exclude<keyof I["postMetadata"]["tags"], keyof string[]>]: never; };
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        } & { [K_2 in Exclude<keyof I["postMetadata"], keyof PostMetadata>]: never; };
        content?: string;
    } & { [K_3 in Exclude<keyof I, keyof GetResponse>]: never; }>(base?: I): GetResponse;
    fromPartial<I_1 extends {
        postMetadata?: {
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
        };
        content?: string;
    } & {
        postMetadata?: {
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
            } & { [K_4 in Exclude<keyof I_1["postMetadata"]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[] & string[] & { [K_5 in Exclude<keyof I_1["postMetadata"]["tags"], keyof string[]>]: never; };
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        } & { [K_6 in Exclude<keyof I_1["postMetadata"], keyof PostMetadata>]: never; };
        content?: string;
    } & { [K_7 in Exclude<keyof I_1, keyof GetResponse>]: never; }>(object: I_1): GetResponse;
};
export declare const CreateMyRequest: {
    encode(message: CreateMyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateMyRequest;
    fromJSON(object: any): CreateMyRequest;
    toJSON(message: CreateMyRequest): unknown;
    create<I extends {
        title?: string;
        preface?: string;
        published?: boolean;
        tags?: string[];
        category?: string;
        content?: string;
        magazineId?: string | undefined;
    } & {
        title?: string;
        preface?: string;
        published?: boolean;
        tags?: string[] & string[] & { [K in Exclude<keyof I["tags"], keyof string[]>]: never; };
        category?: string;
        content?: string;
        magazineId?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof CreateMyRequest>]: never; }>(base?: I): CreateMyRequest;
    fromPartial<I_1 extends {
        title?: string;
        preface?: string;
        published?: boolean;
        tags?: string[];
        category?: string;
        content?: string;
        magazineId?: string | undefined;
    } & {
        title?: string;
        preface?: string;
        published?: boolean;
        tags?: string[] & string[] & { [K_2 in Exclude<keyof I_1["tags"], keyof string[]>]: never; };
        category?: string;
        content?: string;
        magazineId?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof CreateMyRequest>]: never; }>(object: I_1): CreateMyRequest;
};
export declare const CreateMyResponse: {
    encode(message: CreateMyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateMyResponse;
    fromJSON(object: any): CreateMyResponse;
    toJSON(message: CreateMyResponse): unknown;
    create<I extends {
        postMetadata?: {
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
        };
        content?: string;
    } & {
        postMetadata?: {
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
            } & { [K in Exclude<keyof I["postMetadata"]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[] & string[] & { [K_1 in Exclude<keyof I["postMetadata"]["tags"], keyof string[]>]: never; };
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        } & { [K_2 in Exclude<keyof I["postMetadata"], keyof PostMetadata>]: never; };
        content?: string;
    } & { [K_3 in Exclude<keyof I, keyof CreateMyResponse>]: never; }>(base?: I): CreateMyResponse;
    fromPartial<I_1 extends {
        postMetadata?: {
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
        };
        content?: string;
    } & {
        postMetadata?: {
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
            } & { [K_4 in Exclude<keyof I_1["postMetadata"]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[] & string[] & { [K_5 in Exclude<keyof I_1["postMetadata"]["tags"], keyof string[]>]: never; };
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        } & { [K_6 in Exclude<keyof I_1["postMetadata"], keyof PostMetadata>]: never; };
        content?: string;
    } & { [K_7 in Exclude<keyof I_1, keyof CreateMyResponse>]: never; }>(object: I_1): CreateMyResponse;
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
        published?: boolean;
        tags?: string[];
        category?: string;
        content?: string;
        magazineId?: string | undefined;
    } & {
        id?: string;
        title?: string;
        preface?: string;
        published?: boolean;
        tags?: string[] & string[] & { [K in Exclude<keyof I["tags"], keyof string[]>]: never; };
        category?: string;
        content?: string;
        magazineId?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof UpdateMyRequest>]: never; }>(base?: I): UpdateMyRequest;
    fromPartial<I_1 extends {
        id?: string;
        title?: string;
        preface?: string;
        published?: boolean;
        tags?: string[];
        category?: string;
        content?: string;
        magazineId?: string | undefined;
    } & {
        id?: string;
        title?: string;
        preface?: string;
        published?: boolean;
        tags?: string[] & string[] & { [K_2 in Exclude<keyof I_1["tags"], keyof string[]>]: never; };
        category?: string;
        content?: string;
        magazineId?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof UpdateMyRequest>]: never; }>(object: I_1): UpdateMyRequest;
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
        postMetadata?: {
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
        };
        content?: string;
    } & {
        postMetadata?: {
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
            } & { [K in Exclude<keyof I["postMetadata"]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[] & string[] & { [K_1 in Exclude<keyof I["postMetadata"]["tags"], keyof string[]>]: never; };
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        } & { [K_2 in Exclude<keyof I["postMetadata"], keyof PostMetadata>]: never; };
        content?: string;
    } & { [K_3 in Exclude<keyof I, keyof GetMyResponse>]: never; }>(base?: I): GetMyResponse;
    fromPartial<I_1 extends {
        postMetadata?: {
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
        };
        content?: string;
    } & {
        postMetadata?: {
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
            } & { [K_4 in Exclude<keyof I_1["postMetadata"]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[] & string[] & { [K_5 in Exclude<keyof I_1["postMetadata"]["tags"], keyof string[]>]: never; };
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        } & { [K_6 in Exclude<keyof I_1["postMetadata"], keyof PostMetadata>]: never; };
        content?: string;
    } & { [K_7 in Exclude<keyof I_1, keyof GetMyResponse>]: never; }>(object: I_1): GetMyResponse;
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
        page?: number;
        pageSize?: number;
    } & {
        page?: number;
        pageSize?: number;
    } & { [K in Exclude<keyof I, keyof ListMyRequest>]: never; }>(base?: I): ListMyRequest;
    fromPartial<I_1 extends {
        page?: number;
        pageSize?: number;
    } & {
        page?: number;
        pageSize?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof ListMyRequest>]: never; }>(object: I_1): ListMyRequest;
};
export declare const ListMyByCategoryRequest: {
    encode(message: ListMyByCategoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyByCategoryRequest;
    fromJSON(object: any): ListMyByCategoryRequest;
    toJSON(message: ListMyByCategoryRequest): unknown;
    create<I extends {
        page?: number;
        pageSize?: number;
        category?: string;
    } & {
        page?: number;
        pageSize?: number;
        category?: string;
    } & { [K in Exclude<keyof I, keyof ListMyByCategoryRequest>]: never; }>(base?: I): ListMyByCategoryRequest;
    fromPartial<I_1 extends {
        page?: number;
        pageSize?: number;
        category?: string;
    } & {
        page?: number;
        pageSize?: number;
        category?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof ListMyByCategoryRequest>]: never; }>(object: I_1): ListMyByCategoryRequest;
};
export declare const ListMyByTagRequest: {
    encode(message: ListMyByTagRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyByTagRequest;
    fromJSON(object: any): ListMyByTagRequest;
    toJSON(message: ListMyByTagRequest): unknown;
    create<I extends {
        page?: number;
        pageSize?: number;
        tag?: string;
    } & {
        page?: number;
        pageSize?: number;
        tag?: string;
    } & { [K in Exclude<keyof I, keyof ListMyByTagRequest>]: never; }>(base?: I): ListMyByTagRequest;
    fromPartial<I_1 extends {
        page?: number;
        pageSize?: number;
        tag?: string;
    } & {
        page?: number;
        pageSize?: number;
        tag?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof ListMyByTagRequest>]: never; }>(object: I_1): ListMyByTagRequest;
};
export declare const ListMyResponse: {
    encode(message: ListMyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMyResponse;
    fromJSON(object: any): ListMyResponse;
    toJSON(message: ListMyResponse): unknown;
    create<I extends {
        postMetadata?: {
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
        totalCount?: number;
    } & {
        postMetadata?: {
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
            } & { [K in Exclude<keyof I["postMetadata"][number]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[] & string[] & { [K_1 in Exclude<keyof I["postMetadata"][number]["tags"], keyof string[]>]: never; };
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        } & { [K_2 in Exclude<keyof I["postMetadata"][number], keyof PostMetadata>]: never; })[] & { [K_3 in Exclude<keyof I["postMetadata"], keyof {
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
        totalCount?: number;
    } & { [K_4 in Exclude<keyof I, keyof ListMyResponse>]: never; }>(base?: I): ListMyResponse;
    fromPartial<I_1 extends {
        postMetadata?: {
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
        totalCount?: number;
    } & {
        postMetadata?: {
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
            } & { [K_5 in Exclude<keyof I_1["postMetadata"][number]["author"], keyof import("../blog").Author>]: never; };
            title?: string;
            preface?: string;
            published?: boolean;
            tags?: string[] & string[] & { [K_6 in Exclude<keyof I_1["postMetadata"][number]["tags"], keyof string[]>]: never; };
            category?: string;
            createdAt?: number;
            updatedAt?: number;
            magazineId?: string;
        } & { [K_7 in Exclude<keyof I_1["postMetadata"][number], keyof PostMetadata>]: never; })[] & { [K_8 in Exclude<keyof I_1["postMetadata"], keyof {
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
        totalCount?: number;
    } & { [K_9 in Exclude<keyof I_1, keyof ListMyResponse>]: never; }>(object: I_1): ListMyResponse;
};
export interface PostSvc {
    List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    ListByAuthorId(request: DeepPartial<ListByAuthorIdRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    ListByCategory(request: DeepPartial<ListByCategoryRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    ListByTag(request: DeepPartial<ListByTagRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
}
export declare class PostSvcClientImpl implements PostSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    List(request: DeepPartial<ListRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    ListByAuthorId(request: DeepPartial<ListByAuthorIdRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    ListByCategory(request: DeepPartial<ListByCategoryRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    ListByTag(request: DeepPartial<ListByTagRequest>, metadata?: grpc.Metadata): Promise<ListResponse>;
    Get(request: DeepPartial<GetRequest>, metadata?: grpc.Metadata): Promise<GetResponse>;
}
export declare const PostSvcDesc: {
    serviceName: string;
};
export declare const PostSvcListDesc: UnaryMethodDefinitionish;
export declare const PostSvcListByAuthorIdDesc: UnaryMethodDefinitionish;
export declare const PostSvcListByCategoryDesc: UnaryMethodDefinitionish;
export declare const PostSvcListByTagDesc: UnaryMethodDefinitionish;
export declare const PostSvcGetDesc: UnaryMethodDefinitionish;
export interface MyPostSvc {
    Create(request: DeepPartial<CreateMyRequest>, metadata?: grpc.Metadata): Promise<CreateMyResponse>;
    Update(request: DeepPartial<UpdateMyRequest>, metadata?: grpc.Metadata): Promise<UpdateMyResponse>;
    Get(request: DeepPartial<GetMyRequest>, metadata?: grpc.Metadata): Promise<GetMyResponse>;
    Delete(request: DeepPartial<DeleteMyRequest>, metadata?: grpc.Metadata): Promise<DeleteMyResponse>;
    List(request: DeepPartial<ListMyRequest>, metadata?: grpc.Metadata): Promise<ListMyResponse>;
    ListByCategory(request: DeepPartial<ListMyByCategoryRequest>, metadata?: grpc.Metadata): Promise<ListMyResponse>;
    ListByTag(request: DeepPartial<ListMyByTagRequest>, metadata?: grpc.Metadata): Promise<ListMyResponse>;
}
export declare class MyPostSvcClientImpl implements MyPostSvc {
    private readonly rpc;
    constructor(rpc: Rpc);
    Create(request: DeepPartial<CreateMyRequest>, metadata?: grpc.Metadata): Promise<CreateMyResponse>;
    Update(request: DeepPartial<UpdateMyRequest>, metadata?: grpc.Metadata): Promise<UpdateMyResponse>;
    Get(request: DeepPartial<GetMyRequest>, metadata?: grpc.Metadata): Promise<GetMyResponse>;
    Delete(request: DeepPartial<DeleteMyRequest>, metadata?: grpc.Metadata): Promise<DeleteMyResponse>;
    List(request: DeepPartial<ListMyRequest>, metadata?: grpc.Metadata): Promise<ListMyResponse>;
    ListByCategory(request: DeepPartial<ListMyByCategoryRequest>, metadata?: grpc.Metadata): Promise<ListMyResponse>;
    ListByTag(request: DeepPartial<ListMyByTagRequest>, metadata?: grpc.Metadata): Promise<ListMyResponse>;
}
export declare const MyPostSvcDesc: {
    serviceName: string;
};
export declare const MyPostSvcCreateDesc: UnaryMethodDefinitionish;
export declare const MyPostSvcUpdateDesc: UnaryMethodDefinitionish;
export declare const MyPostSvcGetDesc: UnaryMethodDefinitionish;
export declare const MyPostSvcDeleteDesc: UnaryMethodDefinitionish;
export declare const MyPostSvcListDesc: UnaryMethodDefinitionish;
export declare const MyPostSvcListByCategoryDesc: UnaryMethodDefinitionish;
export declare const MyPostSvcListByTagDesc: UnaryMethodDefinitionish;
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

import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "blog";
export interface PostMetadata {
    id: string;
    author: Author | undefined;
    title: string;
    preface: string;
    published: boolean;
    tags: string[];
    category: string;
    createdAt: number;
    updatedAt: number;
    seriesId?: string | undefined;
}
export interface Series {
    id: string;
    author: Author | undefined;
    title: string;
    preface: string;
    category: string;
    createdAt: number;
    updatedAt: number;
}
export interface Billy {
    id: string;
    title: string;
    preface: string;
    category: string;
    createdAt: number;
    updatedAt: number;
}
export interface Author {
    id: string;
    ikiUserId: string;
    displayName: string;
}
export interface Pagination {
    page: number;
    pageSize: number;
}
export declare const PostMetadata: {
    encode(message: PostMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PostMetadata;
    fromJSON(object: any): PostMetadata;
    toJSON(message: PostMetadata): unknown;
    create<I extends {
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
        seriesId?: string | undefined;
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
        } & { [K in Exclude<keyof I["author"], keyof Author>]: never; };
        title?: string;
        preface?: string;
        published?: boolean;
        tags?: string[] & string[] & { [K_1 in Exclude<keyof I["tags"], keyof string[]>]: never; };
        category?: string;
        createdAt?: number;
        updatedAt?: number;
        seriesId?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof PostMetadata>]: never; }>(base?: I): PostMetadata;
    fromPartial<I_1 extends {
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
        seriesId?: string | undefined;
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
        } & { [K_3 in Exclude<keyof I_1["author"], keyof Author>]: never; };
        title?: string;
        preface?: string;
        published?: boolean;
        tags?: string[] & string[] & { [K_4 in Exclude<keyof I_1["tags"], keyof string[]>]: never; };
        category?: string;
        createdAt?: number;
        updatedAt?: number;
        seriesId?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof PostMetadata>]: never; }>(object: I_1): PostMetadata;
};
export declare const Series: {
    encode(message: Series, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Series;
    fromJSON(object: any): Series;
    toJSON(message: Series): unknown;
    create<I extends {
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
        } & { [K in Exclude<keyof I["author"], keyof Author>]: never; };
        title?: string;
        preface?: string;
        category?: string;
        createdAt?: number;
        updatedAt?: number;
    } & { [K_1 in Exclude<keyof I, keyof Series>]: never; }>(base?: I): Series;
    fromPartial<I_1 extends {
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
        } & { [K_2 in Exclude<keyof I_1["author"], keyof Author>]: never; };
        title?: string;
        preface?: string;
        category?: string;
        createdAt?: number;
        updatedAt?: number;
    } & { [K_3 in Exclude<keyof I_1, keyof Series>]: never; }>(object: I_1): Series;
};
export declare const Billy: {
    encode(message: Billy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Billy;
    fromJSON(object: any): Billy;
    toJSON(message: Billy): unknown;
    create<I extends {
        id?: string;
        title?: string;
        preface?: string;
        category?: string;
        createdAt?: number;
        updatedAt?: number;
    } & {
        id?: string;
        title?: string;
        preface?: string;
        category?: string;
        createdAt?: number;
        updatedAt?: number;
    } & { [K in Exclude<keyof I, keyof Billy>]: never; }>(base?: I): Billy;
    fromPartial<I_1 extends {
        id?: string;
        title?: string;
        preface?: string;
        category?: string;
        createdAt?: number;
        updatedAt?: number;
    } & {
        id?: string;
        title?: string;
        preface?: string;
        category?: string;
        createdAt?: number;
        updatedAt?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof Billy>]: never; }>(object: I_1): Billy;
};
export declare const Author: {
    encode(message: Author, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Author;
    fromJSON(object: any): Author;
    toJSON(message: Author): unknown;
    create<I extends {
        id?: string;
        ikiUserId?: string;
        displayName?: string;
    } & {
        id?: string;
        ikiUserId?: string;
        displayName?: string;
    } & { [K in Exclude<keyof I, keyof Author>]: never; }>(base?: I): Author;
    fromPartial<I_1 extends {
        id?: string;
        ikiUserId?: string;
        displayName?: string;
    } & {
        id?: string;
        ikiUserId?: string;
        displayName?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof Author>]: never; }>(object: I_1): Author;
};
export declare const Pagination: {
    encode(message: Pagination, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pagination;
    fromJSON(object: any): Pagination;
    toJSON(message: Pagination): unknown;
    create<I extends {
        page?: number;
        pageSize?: number;
    } & {
        page?: number;
        pageSize?: number;
    } & { [K in Exclude<keyof I, keyof Pagination>]: never; }>(base?: I): Pagination;
    fromPartial<I_1 extends {
        page?: number;
        pageSize?: number;
    } & {
        page?: number;
        pageSize?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof Pagination>]: never; }>(object: I_1): Pagination;
};
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
export {};

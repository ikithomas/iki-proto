import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "workers";
/** User is a human user */
export interface CpuWork {
    length: number;
}
export interface MemoryWork {
    length: number;
}
export declare const CpuWork: {
    encode(message: CpuWork, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CpuWork;
    fromJSON(object: any): CpuWork;
    toJSON(message: CpuWork): unknown;
    create<I extends {
        length?: number;
    } & {
        length?: number;
    } & { [K in Exclude<keyof I, "length">]: never; }>(base?: I): CpuWork;
    fromPartial<I_1 extends {
        length?: number;
    } & {
        length?: number;
    } & { [K_1 in Exclude<keyof I_1, "length">]: never; }>(object: I_1): CpuWork;
};
export declare const MemoryWork: {
    encode(message: MemoryWork, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MemoryWork;
    fromJSON(object: any): MemoryWork;
    toJSON(message: MemoryWork): unknown;
    create<I extends {
        length?: number;
    } & {
        length?: number;
    } & { [K in Exclude<keyof I, "length">]: never; }>(base?: I): MemoryWork;
    fromPartial<I_1 extends {
        length?: number;
    } & {
        length?: number;
    } & { [K_1 in Exclude<keyof I_1, "length">]: never; }>(object: I_1): MemoryWork;
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

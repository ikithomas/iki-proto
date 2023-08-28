import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "event";
export interface EventActivityUpload {
    activityId: string;
    ikiUserId: string;
}
export declare const EventActivityUpload: {
    encode(message: EventActivityUpload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventActivityUpload;
    fromJSON(object: any): EventActivityUpload;
    toJSON(message: EventActivityUpload): unknown;
    create<I extends {
        activityId?: string;
        ikiUserId?: string;
    } & {
        activityId?: string;
        ikiUserId?: string;
    } & { [K in Exclude<keyof I, keyof EventActivityUpload>]: never; }>(base?: I): EventActivityUpload;
    fromPartial<I_1 extends {
        activityId?: string;
        ikiUserId?: string;
    } & {
        activityId?: string;
        ikiUserId?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof EventActivityUpload>]: never; }>(object: I_1): EventActivityUpload;
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

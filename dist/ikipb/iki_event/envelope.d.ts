import _m0 from "protobufjs/minimal";
import { Any } from "../../google/protobuf/any";
export declare const protobufPackage = "event";
export interface Envelope {
    eventId: string;
    eventType: string;
    payload: Any | undefined;
}
export declare const Envelope: {
    encode(message: Envelope, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Envelope;
    fromJSON(object: any): Envelope;
    toJSON(message: Envelope): unknown;
    create<I extends {
        eventId?: string;
        eventType?: string;
        payload?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
    } & {
        eventId?: string;
        eventType?: string;
        payload?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & { [K in Exclude<keyof I["payload"], keyof Any>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof Envelope>]: never; }>(base?: I): Envelope;
    fromPartial<I_1 extends {
        eventId?: string;
        eventType?: string;
        payload?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
    } & {
        eventId?: string;
        eventType?: string;
        payload?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & { [K_2 in Exclude<keyof I_1["payload"], keyof Any>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof Envelope>]: never; }>(object: I_1): Envelope;
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

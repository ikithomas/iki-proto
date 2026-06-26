import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "ticket";
export interface TicketEvent {
    eventTime: number;
    created?: TicketEvent_Created | undefined;
    updated?: TicketEvent_Updated | undefined;
    stateChanged?: TicketEvent_StateChanged | undefined;
    commented?: TicketEvent_Commented | undefined;
}
export interface TicketEvent_Created {
    ticketId: string;
    title: string;
    content?: string | undefined;
    stateKey: string;
    creatorId: string;
    assigneeId?: string | undefined;
    dueAt?: number | undefined;
}
export interface TicketEvent_Updated {
    ticketId: string;
    title: string;
    content?: string | undefined;
    assigneeId?: string | undefined;
    dueAt?: number | undefined;
}
export interface TicketEvent_StateChanged {
    ticketId: string;
    fromStateKey: string;
    toStateKey: string;
    stateUpdatedAt: number;
}
export interface TicketEvent_Commented {
    ticketId: string;
    commentId: string;
    content: string;
    authorId: string;
}
export declare const TicketEvent: {
    encode(message: TicketEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TicketEvent;
    fromJSON(object: any): TicketEvent;
    toJSON(message: TicketEvent): unknown;
    create<I extends {
        eventTime?: number;
        created?: {
            ticketId?: string;
            title?: string;
            content?: string | undefined;
            stateKey?: string;
            creatorId?: string;
            assigneeId?: string | undefined;
            dueAt?: number | undefined;
        };
        updated?: {
            ticketId?: string;
            title?: string;
            content?: string | undefined;
            assigneeId?: string | undefined;
            dueAt?: number | undefined;
        };
        stateChanged?: {
            ticketId?: string;
            fromStateKey?: string;
            toStateKey?: string;
            stateUpdatedAt?: number;
        };
        commented?: {
            ticketId?: string;
            commentId?: string;
            content?: string;
            authorId?: string;
        };
    } & {
        eventTime?: number;
        created?: {
            ticketId?: string;
            title?: string;
            content?: string | undefined;
            stateKey?: string;
            creatorId?: string;
            assigneeId?: string | undefined;
            dueAt?: number | undefined;
        } & {
            ticketId?: string;
            title?: string;
            content?: string | undefined;
            stateKey?: string;
            creatorId?: string;
            assigneeId?: string | undefined;
            dueAt?: number | undefined;
        } & { [K in Exclude<keyof I["created"], keyof TicketEvent_Created>]: never; };
        updated?: {
            ticketId?: string;
            title?: string;
            content?: string | undefined;
            assigneeId?: string | undefined;
            dueAt?: number | undefined;
        } & {
            ticketId?: string;
            title?: string;
            content?: string | undefined;
            assigneeId?: string | undefined;
            dueAt?: number | undefined;
        } & { [K_1 in Exclude<keyof I["updated"], keyof TicketEvent_Updated>]: never; };
        stateChanged?: {
            ticketId?: string;
            fromStateKey?: string;
            toStateKey?: string;
            stateUpdatedAt?: number;
        } & {
            ticketId?: string;
            fromStateKey?: string;
            toStateKey?: string;
            stateUpdatedAt?: number;
        } & { [K_2 in Exclude<keyof I["stateChanged"], keyof TicketEvent_StateChanged>]: never; };
        commented?: {
            ticketId?: string;
            commentId?: string;
            content?: string;
            authorId?: string;
        } & {
            ticketId?: string;
            commentId?: string;
            content?: string;
            authorId?: string;
        } & { [K_3 in Exclude<keyof I["commented"], keyof TicketEvent_Commented>]: never; };
    } & { [K_4 in Exclude<keyof I, keyof TicketEvent>]: never; }>(base?: I): TicketEvent;
    fromPartial<I_1 extends {
        eventTime?: number;
        created?: {
            ticketId?: string;
            title?: string;
            content?: string | undefined;
            stateKey?: string;
            creatorId?: string;
            assigneeId?: string | undefined;
            dueAt?: number | undefined;
        };
        updated?: {
            ticketId?: string;
            title?: string;
            content?: string | undefined;
            assigneeId?: string | undefined;
            dueAt?: number | undefined;
        };
        stateChanged?: {
            ticketId?: string;
            fromStateKey?: string;
            toStateKey?: string;
            stateUpdatedAt?: number;
        };
        commented?: {
            ticketId?: string;
            commentId?: string;
            content?: string;
            authorId?: string;
        };
    } & {
        eventTime?: number;
        created?: {
            ticketId?: string;
            title?: string;
            content?: string | undefined;
            stateKey?: string;
            creatorId?: string;
            assigneeId?: string | undefined;
            dueAt?: number | undefined;
        } & {
            ticketId?: string;
            title?: string;
            content?: string | undefined;
            stateKey?: string;
            creatorId?: string;
            assigneeId?: string | undefined;
            dueAt?: number | undefined;
        } & { [K_5 in Exclude<keyof I_1["created"], keyof TicketEvent_Created>]: never; };
        updated?: {
            ticketId?: string;
            title?: string;
            content?: string | undefined;
            assigneeId?: string | undefined;
            dueAt?: number | undefined;
        } & {
            ticketId?: string;
            title?: string;
            content?: string | undefined;
            assigneeId?: string | undefined;
            dueAt?: number | undefined;
        } & { [K_6 in Exclude<keyof I_1["updated"], keyof TicketEvent_Updated>]: never; };
        stateChanged?: {
            ticketId?: string;
            fromStateKey?: string;
            toStateKey?: string;
            stateUpdatedAt?: number;
        } & {
            ticketId?: string;
            fromStateKey?: string;
            toStateKey?: string;
            stateUpdatedAt?: number;
        } & { [K_7 in Exclude<keyof I_1["stateChanged"], keyof TicketEvent_StateChanged>]: never; };
        commented?: {
            ticketId?: string;
            commentId?: string;
            content?: string;
            authorId?: string;
        } & {
            ticketId?: string;
            commentId?: string;
            content?: string;
            authorId?: string;
        } & { [K_8 in Exclude<keyof I_1["commented"], keyof TicketEvent_Commented>]: never; };
    } & { [K_9 in Exclude<keyof I_1, keyof TicketEvent>]: never; }>(object: I_1): TicketEvent;
};
export declare const TicketEvent_Created: {
    encode(message: TicketEvent_Created, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TicketEvent_Created;
    fromJSON(object: any): TicketEvent_Created;
    toJSON(message: TicketEvent_Created): unknown;
    create<I extends {
        ticketId?: string;
        title?: string;
        content?: string | undefined;
        stateKey?: string;
        creatorId?: string;
        assigneeId?: string | undefined;
        dueAt?: number | undefined;
    } & {
        ticketId?: string;
        title?: string;
        content?: string | undefined;
        stateKey?: string;
        creatorId?: string;
        assigneeId?: string | undefined;
        dueAt?: number | undefined;
    } & { [K in Exclude<keyof I, keyof TicketEvent_Created>]: never; }>(base?: I): TicketEvent_Created;
    fromPartial<I_1 extends {
        ticketId?: string;
        title?: string;
        content?: string | undefined;
        stateKey?: string;
        creatorId?: string;
        assigneeId?: string | undefined;
        dueAt?: number | undefined;
    } & {
        ticketId?: string;
        title?: string;
        content?: string | undefined;
        stateKey?: string;
        creatorId?: string;
        assigneeId?: string | undefined;
        dueAt?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof TicketEvent_Created>]: never; }>(object: I_1): TicketEvent_Created;
};
export declare const TicketEvent_Updated: {
    encode(message: TicketEvent_Updated, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TicketEvent_Updated;
    fromJSON(object: any): TicketEvent_Updated;
    toJSON(message: TicketEvent_Updated): unknown;
    create<I extends {
        ticketId?: string;
        title?: string;
        content?: string | undefined;
        assigneeId?: string | undefined;
        dueAt?: number | undefined;
    } & {
        ticketId?: string;
        title?: string;
        content?: string | undefined;
        assigneeId?: string | undefined;
        dueAt?: number | undefined;
    } & { [K in Exclude<keyof I, keyof TicketEvent_Updated>]: never; }>(base?: I): TicketEvent_Updated;
    fromPartial<I_1 extends {
        ticketId?: string;
        title?: string;
        content?: string | undefined;
        assigneeId?: string | undefined;
        dueAt?: number | undefined;
    } & {
        ticketId?: string;
        title?: string;
        content?: string | undefined;
        assigneeId?: string | undefined;
        dueAt?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof TicketEvent_Updated>]: never; }>(object: I_1): TicketEvent_Updated;
};
export declare const TicketEvent_StateChanged: {
    encode(message: TicketEvent_StateChanged, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TicketEvent_StateChanged;
    fromJSON(object: any): TicketEvent_StateChanged;
    toJSON(message: TicketEvent_StateChanged): unknown;
    create<I extends {
        ticketId?: string;
        fromStateKey?: string;
        toStateKey?: string;
        stateUpdatedAt?: number;
    } & {
        ticketId?: string;
        fromStateKey?: string;
        toStateKey?: string;
        stateUpdatedAt?: number;
    } & { [K in Exclude<keyof I, keyof TicketEvent_StateChanged>]: never; }>(base?: I): TicketEvent_StateChanged;
    fromPartial<I_1 extends {
        ticketId?: string;
        fromStateKey?: string;
        toStateKey?: string;
        stateUpdatedAt?: number;
    } & {
        ticketId?: string;
        fromStateKey?: string;
        toStateKey?: string;
        stateUpdatedAt?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof TicketEvent_StateChanged>]: never; }>(object: I_1): TicketEvent_StateChanged;
};
export declare const TicketEvent_Commented: {
    encode(message: TicketEvent_Commented, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TicketEvent_Commented;
    fromJSON(object: any): TicketEvent_Commented;
    toJSON(message: TicketEvent_Commented): unknown;
    create<I extends {
        ticketId?: string;
        commentId?: string;
        content?: string;
        authorId?: string;
    } & {
        ticketId?: string;
        commentId?: string;
        content?: string;
        authorId?: string;
    } & { [K in Exclude<keyof I, keyof TicketEvent_Commented>]: never; }>(base?: I): TicketEvent_Commented;
    fromPartial<I_1 extends {
        ticketId?: string;
        commentId?: string;
        content?: string;
        authorId?: string;
    } & {
        ticketId?: string;
        commentId?: string;
        content?: string;
        authorId?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof TicketEvent_Commented>]: never; }>(object: I_1): TicketEvent_Commented;
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

import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "ticket";
export interface User {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
}
export interface Comment {
    id: string;
    content: string;
    author: User | undefined;
}
export interface Ticket {
    id: string;
    title: string;
    content?: string | undefined;
    stateKey: string;
    dueAt?: number | undefined;
    creator: User | undefined;
    assignee?: User | undefined;
    comments: Comment[];
}
export interface EventTicketCreated {
    ticket: Ticket | undefined;
}
export interface EventTicketUpdated {
    ticket: Ticket | undefined;
}
export interface EventTicketStateUpdated {
    ticketId: string;
}
export interface EventTicketCommented {
    ticketId: string;
    comment: Comment | undefined;
}
export declare const User: {
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    create<I extends {
        id?: string;
        firstname?: string;
        lastname?: string;
        email?: string;
    } & {
        id?: string;
        firstname?: string;
        lastname?: string;
        email?: string;
    } & { [K in Exclude<keyof I, keyof User>]: never; }>(base?: I): User;
    fromPartial<I_1 extends {
        id?: string;
        firstname?: string;
        lastname?: string;
        email?: string;
    } & {
        id?: string;
        firstname?: string;
        lastname?: string;
        email?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof User>]: never; }>(object: I_1): User;
};
export declare const Comment: {
    encode(message: Comment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Comment;
    fromJSON(object: any): Comment;
    toJSON(message: Comment): unknown;
    create<I extends {
        id?: string;
        content?: string;
        author?: {
            id?: string;
            firstname?: string;
            lastname?: string;
            email?: string;
        };
    } & {
        id?: string;
        content?: string;
        author?: {
            id?: string;
            firstname?: string;
            lastname?: string;
            email?: string;
        } & {
            id?: string;
            firstname?: string;
            lastname?: string;
            email?: string;
        } & { [K in Exclude<keyof I["author"], keyof User>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof Comment>]: never; }>(base?: I): Comment;
    fromPartial<I_1 extends {
        id?: string;
        content?: string;
        author?: {
            id?: string;
            firstname?: string;
            lastname?: string;
            email?: string;
        };
    } & {
        id?: string;
        content?: string;
        author?: {
            id?: string;
            firstname?: string;
            lastname?: string;
            email?: string;
        } & {
            id?: string;
            firstname?: string;
            lastname?: string;
            email?: string;
        } & { [K_2 in Exclude<keyof I_1["author"], keyof User>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof Comment>]: never; }>(object: I_1): Comment;
};
export declare const Ticket: {
    encode(message: Ticket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Ticket;
    fromJSON(object: any): Ticket;
    toJSON(message: Ticket): unknown;
    create<I extends {
        id?: string;
        title?: string;
        content?: string | undefined;
        stateKey?: string;
        dueAt?: number | undefined;
        creator?: {
            id?: string;
            firstname?: string;
            lastname?: string;
            email?: string;
        };
        assignee?: {
            id?: string;
            firstname?: string;
            lastname?: string;
            email?: string;
        };
        comments?: {
            id?: string;
            content?: string;
            author?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
        }[];
    } & {
        id?: string;
        title?: string;
        content?: string | undefined;
        stateKey?: string;
        dueAt?: number | undefined;
        creator?: {
            id?: string;
            firstname?: string;
            lastname?: string;
            email?: string;
        } & {
            id?: string;
            firstname?: string;
            lastname?: string;
            email?: string;
        } & { [K in Exclude<keyof I["creator"], keyof User>]: never; };
        assignee?: {
            id?: string;
            firstname?: string;
            lastname?: string;
            email?: string;
        } & {
            id?: string;
            firstname?: string;
            lastname?: string;
            email?: string;
        } & { [K_1 in Exclude<keyof I["assignee"], keyof User>]: never; };
        comments?: {
            id?: string;
            content?: string;
            author?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
        }[] & ({
            id?: string;
            content?: string;
            author?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
        } & {
            id?: string;
            content?: string;
            author?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            } & {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            } & { [K_2 in Exclude<keyof I["comments"][number]["author"], keyof User>]: never; };
        } & { [K_3 in Exclude<keyof I["comments"][number], keyof Comment>]: never; })[] & { [K_4 in Exclude<keyof I["comments"], keyof {
            id?: string;
            content?: string;
            author?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I, keyof Ticket>]: never; }>(base?: I): Ticket;
    fromPartial<I_1 extends {
        id?: string;
        title?: string;
        content?: string | undefined;
        stateKey?: string;
        dueAt?: number | undefined;
        creator?: {
            id?: string;
            firstname?: string;
            lastname?: string;
            email?: string;
        };
        assignee?: {
            id?: string;
            firstname?: string;
            lastname?: string;
            email?: string;
        };
        comments?: {
            id?: string;
            content?: string;
            author?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
        }[];
    } & {
        id?: string;
        title?: string;
        content?: string | undefined;
        stateKey?: string;
        dueAt?: number | undefined;
        creator?: {
            id?: string;
            firstname?: string;
            lastname?: string;
            email?: string;
        } & {
            id?: string;
            firstname?: string;
            lastname?: string;
            email?: string;
        } & { [K_6 in Exclude<keyof I_1["creator"], keyof User>]: never; };
        assignee?: {
            id?: string;
            firstname?: string;
            lastname?: string;
            email?: string;
        } & {
            id?: string;
            firstname?: string;
            lastname?: string;
            email?: string;
        } & { [K_7 in Exclude<keyof I_1["assignee"], keyof User>]: never; };
        comments?: {
            id?: string;
            content?: string;
            author?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
        }[] & ({
            id?: string;
            content?: string;
            author?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
        } & {
            id?: string;
            content?: string;
            author?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            } & {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            } & { [K_8 in Exclude<keyof I_1["comments"][number]["author"], keyof User>]: never; };
        } & { [K_9 in Exclude<keyof I_1["comments"][number], keyof Comment>]: never; })[] & { [K_10 in Exclude<keyof I_1["comments"], keyof {
            id?: string;
            content?: string;
            author?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
        }[]>]: never; };
    } & { [K_11 in Exclude<keyof I_1, keyof Ticket>]: never; }>(object: I_1): Ticket;
};
export declare const EventTicketCreated: {
    encode(message: EventTicketCreated, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTicketCreated;
    fromJSON(object: any): EventTicketCreated;
    toJSON(message: EventTicketCreated): unknown;
    create<I extends {
        ticket?: {
            id?: string;
            title?: string;
            content?: string | undefined;
            stateKey?: string;
            dueAt?: number | undefined;
            creator?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
            assignee?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
            comments?: {
                id?: string;
                content?: string;
                author?: {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                };
            }[];
        };
    } & {
        ticket?: {
            id?: string;
            title?: string;
            content?: string | undefined;
            stateKey?: string;
            dueAt?: number | undefined;
            creator?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
            assignee?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
            comments?: {
                id?: string;
                content?: string;
                author?: {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                };
            }[];
        } & {
            id?: string;
            title?: string;
            content?: string | undefined;
            stateKey?: string;
            dueAt?: number | undefined;
            creator?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            } & {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            } & { [K in Exclude<keyof I["ticket"]["creator"], keyof User>]: never; };
            assignee?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            } & {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            } & { [K_1 in Exclude<keyof I["ticket"]["assignee"], keyof User>]: never; };
            comments?: {
                id?: string;
                content?: string;
                author?: {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                };
            }[] & ({
                id?: string;
                content?: string;
                author?: {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                };
            } & {
                id?: string;
                content?: string;
                author?: {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                } & {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                } & { [K_2 in Exclude<keyof I["ticket"]["comments"][number]["author"], keyof User>]: never; };
            } & { [K_3 in Exclude<keyof I["ticket"]["comments"][number], keyof Comment>]: never; })[] & { [K_4 in Exclude<keyof I["ticket"]["comments"], keyof {
                id?: string;
                content?: string;
                author?: {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                };
            }[]>]: never; };
        } & { [K_5 in Exclude<keyof I["ticket"], keyof Ticket>]: never; };
    } & { [K_6 in Exclude<keyof I, "ticket">]: never; }>(base?: I): EventTicketCreated;
    fromPartial<I_1 extends {
        ticket?: {
            id?: string;
            title?: string;
            content?: string | undefined;
            stateKey?: string;
            dueAt?: number | undefined;
            creator?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
            assignee?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
            comments?: {
                id?: string;
                content?: string;
                author?: {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                };
            }[];
        };
    } & {
        ticket?: {
            id?: string;
            title?: string;
            content?: string | undefined;
            stateKey?: string;
            dueAt?: number | undefined;
            creator?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
            assignee?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
            comments?: {
                id?: string;
                content?: string;
                author?: {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                };
            }[];
        } & {
            id?: string;
            title?: string;
            content?: string | undefined;
            stateKey?: string;
            dueAt?: number | undefined;
            creator?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            } & {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            } & { [K_7 in Exclude<keyof I_1["ticket"]["creator"], keyof User>]: never; };
            assignee?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            } & {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            } & { [K_8 in Exclude<keyof I_1["ticket"]["assignee"], keyof User>]: never; };
            comments?: {
                id?: string;
                content?: string;
                author?: {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                };
            }[] & ({
                id?: string;
                content?: string;
                author?: {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                };
            } & {
                id?: string;
                content?: string;
                author?: {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                } & {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                } & { [K_9 in Exclude<keyof I_1["ticket"]["comments"][number]["author"], keyof User>]: never; };
            } & { [K_10 in Exclude<keyof I_1["ticket"]["comments"][number], keyof Comment>]: never; })[] & { [K_11 in Exclude<keyof I_1["ticket"]["comments"], keyof {
                id?: string;
                content?: string;
                author?: {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                };
            }[]>]: never; };
        } & { [K_12 in Exclude<keyof I_1["ticket"], keyof Ticket>]: never; };
    } & { [K_13 in Exclude<keyof I_1, "ticket">]: never; }>(object: I_1): EventTicketCreated;
};
export declare const EventTicketUpdated: {
    encode(message: EventTicketUpdated, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTicketUpdated;
    fromJSON(object: any): EventTicketUpdated;
    toJSON(message: EventTicketUpdated): unknown;
    create<I extends {
        ticket?: {
            id?: string;
            title?: string;
            content?: string | undefined;
            stateKey?: string;
            dueAt?: number | undefined;
            creator?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
            assignee?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
            comments?: {
                id?: string;
                content?: string;
                author?: {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                };
            }[];
        };
    } & {
        ticket?: {
            id?: string;
            title?: string;
            content?: string | undefined;
            stateKey?: string;
            dueAt?: number | undefined;
            creator?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
            assignee?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
            comments?: {
                id?: string;
                content?: string;
                author?: {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                };
            }[];
        } & {
            id?: string;
            title?: string;
            content?: string | undefined;
            stateKey?: string;
            dueAt?: number | undefined;
            creator?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            } & {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            } & { [K in Exclude<keyof I["ticket"]["creator"], keyof User>]: never; };
            assignee?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            } & {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            } & { [K_1 in Exclude<keyof I["ticket"]["assignee"], keyof User>]: never; };
            comments?: {
                id?: string;
                content?: string;
                author?: {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                };
            }[] & ({
                id?: string;
                content?: string;
                author?: {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                };
            } & {
                id?: string;
                content?: string;
                author?: {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                } & {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                } & { [K_2 in Exclude<keyof I["ticket"]["comments"][number]["author"], keyof User>]: never; };
            } & { [K_3 in Exclude<keyof I["ticket"]["comments"][number], keyof Comment>]: never; })[] & { [K_4 in Exclude<keyof I["ticket"]["comments"], keyof {
                id?: string;
                content?: string;
                author?: {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                };
            }[]>]: never; };
        } & { [K_5 in Exclude<keyof I["ticket"], keyof Ticket>]: never; };
    } & { [K_6 in Exclude<keyof I, "ticket">]: never; }>(base?: I): EventTicketUpdated;
    fromPartial<I_1 extends {
        ticket?: {
            id?: string;
            title?: string;
            content?: string | undefined;
            stateKey?: string;
            dueAt?: number | undefined;
            creator?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
            assignee?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
            comments?: {
                id?: string;
                content?: string;
                author?: {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                };
            }[];
        };
    } & {
        ticket?: {
            id?: string;
            title?: string;
            content?: string | undefined;
            stateKey?: string;
            dueAt?: number | undefined;
            creator?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
            assignee?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
            comments?: {
                id?: string;
                content?: string;
                author?: {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                };
            }[];
        } & {
            id?: string;
            title?: string;
            content?: string | undefined;
            stateKey?: string;
            dueAt?: number | undefined;
            creator?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            } & {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            } & { [K_7 in Exclude<keyof I_1["ticket"]["creator"], keyof User>]: never; };
            assignee?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            } & {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            } & { [K_8 in Exclude<keyof I_1["ticket"]["assignee"], keyof User>]: never; };
            comments?: {
                id?: string;
                content?: string;
                author?: {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                };
            }[] & ({
                id?: string;
                content?: string;
                author?: {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                };
            } & {
                id?: string;
                content?: string;
                author?: {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                } & {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                } & { [K_9 in Exclude<keyof I_1["ticket"]["comments"][number]["author"], keyof User>]: never; };
            } & { [K_10 in Exclude<keyof I_1["ticket"]["comments"][number], keyof Comment>]: never; })[] & { [K_11 in Exclude<keyof I_1["ticket"]["comments"], keyof {
                id?: string;
                content?: string;
                author?: {
                    id?: string;
                    firstname?: string;
                    lastname?: string;
                    email?: string;
                };
            }[]>]: never; };
        } & { [K_12 in Exclude<keyof I_1["ticket"], keyof Ticket>]: never; };
    } & { [K_13 in Exclude<keyof I_1, "ticket">]: never; }>(object: I_1): EventTicketUpdated;
};
export declare const EventTicketStateUpdated: {
    encode(message: EventTicketStateUpdated, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTicketStateUpdated;
    fromJSON(object: any): EventTicketStateUpdated;
    toJSON(message: EventTicketStateUpdated): unknown;
    create<I extends {
        ticketId?: string;
    } & {
        ticketId?: string;
    } & { [K in Exclude<keyof I, "ticketId">]: never; }>(base?: I): EventTicketStateUpdated;
    fromPartial<I_1 extends {
        ticketId?: string;
    } & {
        ticketId?: string;
    } & { [K_1 in Exclude<keyof I_1, "ticketId">]: never; }>(object: I_1): EventTicketStateUpdated;
};
export declare const EventTicketCommented: {
    encode(message: EventTicketCommented, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTicketCommented;
    fromJSON(object: any): EventTicketCommented;
    toJSON(message: EventTicketCommented): unknown;
    create<I extends {
        ticketId?: string;
        comment?: {
            id?: string;
            content?: string;
            author?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
        };
    } & {
        ticketId?: string;
        comment?: {
            id?: string;
            content?: string;
            author?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
        } & {
            id?: string;
            content?: string;
            author?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            } & {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            } & { [K in Exclude<keyof I["comment"]["author"], keyof User>]: never; };
        } & { [K_1 in Exclude<keyof I["comment"], keyof Comment>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof EventTicketCommented>]: never; }>(base?: I): EventTicketCommented;
    fromPartial<I_1 extends {
        ticketId?: string;
        comment?: {
            id?: string;
            content?: string;
            author?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
        };
    } & {
        ticketId?: string;
        comment?: {
            id?: string;
            content?: string;
            author?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            };
        } & {
            id?: string;
            content?: string;
            author?: {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            } & {
                id?: string;
                firstname?: string;
                lastname?: string;
                email?: string;
            } & { [K_3 in Exclude<keyof I_1["comment"]["author"], keyof User>]: never; };
        } & { [K_4 in Exclude<keyof I_1["comment"], keyof Comment>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof EventTicketCommented>]: never; }>(object: I_1): EventTicketCommented;
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

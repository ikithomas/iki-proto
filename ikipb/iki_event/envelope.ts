/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Any } from "../../google/protobuf/any";

export const protobufPackage = "event";

export interface Envelope {
  eventId: string;
  eventType: string;
  payload: Any | undefined;
}

function createBaseEnvelope(): Envelope {
  return { eventId: "", eventType: "", payload: undefined };
}

export const Envelope = {
  encode(message: Envelope, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== "") {
      writer.uint32(10).string(message.eventId);
    }
    if (message.eventType !== "") {
      writer.uint32(18).string(message.eventType);
    }
    if (message.payload !== undefined) {
      Any.encode(message.payload, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Envelope {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnvelope();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.eventId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.eventType = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payload = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Envelope {
    return {
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      eventType: isSet(object.eventType) ? String(object.eventType) : "",
      payload: isSet(object.payload) ? Any.fromJSON(object.payload) : undefined,
    };
  },

  toJSON(message: Envelope): unknown {
    const obj: any = {};
    if (message.eventId !== "") {
      obj.eventId = message.eventId;
    }
    if (message.eventType !== "") {
      obj.eventType = message.eventType;
    }
    if (message.payload !== undefined) {
      obj.payload = Any.toJSON(message.payload);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Envelope>, I>>(base?: I): Envelope {
    return Envelope.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Envelope>, I>>(object: I): Envelope {
    const message = createBaseEnvelope();
    message.eventId = object.eventId ?? "";
    message.eventType = object.eventType ?? "";
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Any.fromPartial(object.payload)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

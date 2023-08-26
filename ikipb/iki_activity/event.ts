/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "event";

export interface EventActivityUpload {
  activityId: string;
  ikiUserId: string;
}

function createBaseEventActivityUpload(): EventActivityUpload {
  return { activityId: "", ikiUserId: "" };
}

export const EventActivityUpload = {
  encode(message: EventActivityUpload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activityId !== "") {
      writer.uint32(10).string(message.activityId);
    }
    if (message.ikiUserId !== "") {
      writer.uint32(18).string(message.ikiUserId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventActivityUpload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventActivityUpload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.activityId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ikiUserId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventActivityUpload {
    return {
      activityId: isSet(object.activityId) ? String(object.activityId) : "",
      ikiUserId: isSet(object.ikiUserId) ? String(object.ikiUserId) : "",
    };
  },

  toJSON(message: EventActivityUpload): unknown {
    const obj: any = {};
    if (message.activityId !== "") {
      obj.activityId = message.activityId;
    }
    if (message.ikiUserId !== "") {
      obj.ikiUserId = message.ikiUserId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventActivityUpload>, I>>(base?: I): EventActivityUpload {
    return EventActivityUpload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventActivityUpload>, I>>(object: I): EventActivityUpload {
    const message = createBaseEventActivityUpload();
    message.activityId = object.activityId ?? "";
    message.ikiUserId = object.ikiUserId ?? "";
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

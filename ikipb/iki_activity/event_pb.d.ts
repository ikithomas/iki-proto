import * as jspb from 'google-protobuf'



export class EventActivityUpload extends jspb.Message {
  getActivityId(): string;
  setActivityId(value: string): EventActivityUpload;

  getIkiUserId(): string;
  setIkiUserId(value: string): EventActivityUpload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventActivityUpload.AsObject;
  static toObject(includeInstance: boolean, msg: EventActivityUpload): EventActivityUpload.AsObject;
  static serializeBinaryToWriter(message: EventActivityUpload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventActivityUpload;
  static deserializeBinaryFromReader(message: EventActivityUpload, reader: jspb.BinaryReader): EventActivityUpload;
}

export namespace EventActivityUpload {
  export type AsObject = {
    activityId: string,
    ikiUserId: string,
  }
}


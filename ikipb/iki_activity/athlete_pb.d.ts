import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class FitnessMetric extends jspb.Message {
  getAge(): number;
  setAge(value: number): FitnessMetric;

  getHeight(): number;
  setHeight(value: number): FitnessMetric;

  getWeight(): number;
  setWeight(value: number): FitnessMetric;

  getMaxHeartrate(): number;
  setMaxHeartrate(value: number): FitnessMetric;

  getRestHeartrate(): number;
  setRestHeartrate(value: number): FitnessMetric;

  getVo2Max(): number;
  setVo2Max(value: number): FitnessMetric;

  getMale(): boolean;
  setMale(value: boolean): FitnessMetric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FitnessMetric.AsObject;
  static toObject(includeInstance: boolean, msg: FitnessMetric): FitnessMetric.AsObject;
  static serializeBinaryToWriter(message: FitnessMetric, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FitnessMetric;
  static deserializeBinaryFromReader(message: FitnessMetric, reader: jspb.BinaryReader): FitnessMetric;
}

export namespace FitnessMetric {
  export type AsObject = {
    age: number,
    height: number,
    weight: number,
    maxHeartrate: number,
    restHeartrate: number,
    vo2Max: number,
    male: boolean,
  }
}

export class SetFitnessMetricRequest extends jspb.Message {
  getFitnessMetric(): FitnessMetric | undefined;
  setFitnessMetric(value?: FitnessMetric): SetFitnessMetricRequest;
  hasFitnessMetric(): boolean;
  clearFitnessMetric(): SetFitnessMetricRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetFitnessMetricRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetFitnessMetricRequest): SetFitnessMetricRequest.AsObject;
  static serializeBinaryToWriter(message: SetFitnessMetricRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetFitnessMetricRequest;
  static deserializeBinaryFromReader(message: SetFitnessMetricRequest, reader: jspb.BinaryReader): SetFitnessMetricRequest;
}

export namespace SetFitnessMetricRequest {
  export type AsObject = {
    fitnessMetric?: FitnessMetric.AsObject,
  }
}

export class GetFitnessMetricResponse extends jspb.Message {
  getFitnessMetric(): FitnessMetric | undefined;
  setFitnessMetric(value?: FitnessMetric): GetFitnessMetricResponse;
  hasFitnessMetric(): boolean;
  clearFitnessMetric(): GetFitnessMetricResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFitnessMetricResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFitnessMetricResponse): GetFitnessMetricResponse.AsObject;
  static serializeBinaryToWriter(message: GetFitnessMetricResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFitnessMetricResponse;
  static deserializeBinaryFromReader(message: GetFitnessMetricResponse, reader: jspb.BinaryReader): GetFitnessMetricResponse;
}

export namespace GetFitnessMetricResponse {
  export type AsObject = {
    fitnessMetric?: FitnessMetric.AsObject,
  }
}


import * as jspb from 'google-protobuf'



export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  getEmail(): string;
  setEmail(value: string): User;

  getGivenName(): string;
  setGivenName(value: string): User;

  getFamilyName(): string;
  setFamilyName(value: string): User;

  getGroupOwner(): boolean;
  setGroupOwner(value: boolean): User;

  getGroupAdmin(): boolean;
  setGroupAdmin(value: boolean): User;

  getGroupUser(): boolean;
  setGroupUser(value: boolean): User;

  getRolesList(): Array<string>;
  setRolesList(value: Array<string>): User;
  clearRolesList(): User;
  addRoles(value: string, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    email: string,
    givenName: string,
    familyName: string,
    groupOwner: boolean,
    groupAdmin: boolean,
    groupUser: boolean,
    rolesList: Array<string>,
  }
}

export class Group extends jspb.Message {
  getId(): string;
  setId(value: string): Group;

  getName(): string;
  setName(value: string): Group;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Group.AsObject;
  static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
  static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Group;
  static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
}

export namespace Group {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class Service extends jspb.Message {
  getId(): string;
  setId(value: string): Service;

  getSecretList(): Array<Secret>;
  setSecretList(value: Array<Secret>): Service;
  clearSecretList(): Service;
  addSecret(value?: Secret, index?: number): Secret;

  getName(): string;
  setName(value: string): Service;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Service.AsObject;
  static toObject(includeInstance: boolean, msg: Service): Service.AsObject;
  static serializeBinaryToWriter(message: Service, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Service;
  static deserializeBinaryFromReader(message: Service, reader: jspb.BinaryReader): Service;
}

export namespace Service {
  export type AsObject = {
    id: string,
    secretList: Array<Secret.AsObject>,
    name: string,
  }
}

export class Secret extends jspb.Message {
  getId(): string;
  setId(value: string): Secret;

  getSecret(): string;
  setSecret(value: string): Secret;

  getLastUsed(): number;
  setLastUsed(value: number): Secret;

  getActive(): boolean;
  setActive(value: boolean): Secret;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Secret.AsObject;
  static toObject(includeInstance: boolean, msg: Secret): Secret.AsObject;
  static serializeBinaryToWriter(message: Secret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Secret;
  static deserializeBinaryFromReader(message: Secret, reader: jspb.BinaryReader): Secret;
}

export namespace Secret {
  export type AsObject = {
    id: string,
    secret: string,
    lastUsed: number,
    active: boolean,
  }
}


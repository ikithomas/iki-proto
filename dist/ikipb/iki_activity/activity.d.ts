import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "activity";
export interface Activity {
    id: string;
    stravaId: number;
    stravaAthleteId: number;
    name: string;
    type: string;
    startDate: number;
    stats: ActivityStats | undefined;
}
export interface ActivityStats {
    startLat: number;
    startLng: number;
    endLat: number;
    endLng: number;
    distance: number;
    elevGain: number;
    elevLoss: number;
    elapsedSec: number;
    movingSec: number;
    avgCadence: number;
    avgHeartrate: number;
    minHeartrate: number;
    maxHeartrate: number;
    trimp: number;
    hrZone0Sec: number;
    hrZone1Sec: number;
    hrZone2Sec: number;
    hrZone3Sec: number;
    hrZone4Sec: number;
    hrZone5Sec: number;
    hrZone0Trimp: number;
    hrZone1Trimp: number;
    hrZone2Trimp: number;
    hrZone3Trimp: number;
    hrZone4Trimp: number;
    hrZone5Trimp: number;
    averageSpeed: number;
    averageEpSpeed: number;
    averagePace: number;
    averageEpPace: number;
    activeCalories: number;
    runningSec: number;
    walkingSec: number;
}
export interface Athlete {
    id: string;
    userId: string;
    stravaId: string;
    fitness: AthleteFitness | undefined;
}
export interface AthleteFitness {
    age: number;
    height: number;
    weight: number;
    maxHeartrate: number;
    restHeartrate: number;
    vo2Max: number;
    male: boolean;
}
export interface Chunk {
    chunk: Uint8Array;
}
export interface Gpx {
    name: string;
    startDate: number;
    type: string;
    points: Point[];
}
export interface Point {
    lat: number;
    lon: number;
    ele: number;
    time: number;
    hr: number;
    cad: number;
}
export interface EventActivityUpload {
    activityId: string;
    ikiUserId: string;
}
export declare const Activity: {
    encode(message: Activity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Activity;
    fromJSON(object: any): Activity;
    toJSON(message: Activity): unknown;
    create<I extends {
        id?: string;
        stravaId?: number;
        stravaAthleteId?: number;
        name?: string;
        type?: string;
        startDate?: number;
        stats?: {
            startLat?: number;
            startLng?: number;
            endLat?: number;
            endLng?: number;
            distance?: number;
            elevGain?: number;
            elevLoss?: number;
            elapsedSec?: number;
            movingSec?: number;
            avgCadence?: number;
            avgHeartrate?: number;
            minHeartrate?: number;
            maxHeartrate?: number;
            trimp?: number;
            hrZone0Sec?: number;
            hrZone1Sec?: number;
            hrZone2Sec?: number;
            hrZone3Sec?: number;
            hrZone4Sec?: number;
            hrZone5Sec?: number;
            hrZone0Trimp?: number;
            hrZone1Trimp?: number;
            hrZone2Trimp?: number;
            hrZone3Trimp?: number;
            hrZone4Trimp?: number;
            hrZone5Trimp?: number;
            averageSpeed?: number;
            averageEpSpeed?: number;
            averagePace?: number;
            averageEpPace?: number;
            activeCalories?: number;
            runningSec?: number;
            walkingSec?: number;
        };
    } & {
        id?: string;
        stravaId?: number;
        stravaAthleteId?: number;
        name?: string;
        type?: string;
        startDate?: number;
        stats?: {
            startLat?: number;
            startLng?: number;
            endLat?: number;
            endLng?: number;
            distance?: number;
            elevGain?: number;
            elevLoss?: number;
            elapsedSec?: number;
            movingSec?: number;
            avgCadence?: number;
            avgHeartrate?: number;
            minHeartrate?: number;
            maxHeartrate?: number;
            trimp?: number;
            hrZone0Sec?: number;
            hrZone1Sec?: number;
            hrZone2Sec?: number;
            hrZone3Sec?: number;
            hrZone4Sec?: number;
            hrZone5Sec?: number;
            hrZone0Trimp?: number;
            hrZone1Trimp?: number;
            hrZone2Trimp?: number;
            hrZone3Trimp?: number;
            hrZone4Trimp?: number;
            hrZone5Trimp?: number;
            averageSpeed?: number;
            averageEpSpeed?: number;
            averagePace?: number;
            averageEpPace?: number;
            activeCalories?: number;
            runningSec?: number;
            walkingSec?: number;
        } & {
            startLat?: number;
            startLng?: number;
            endLat?: number;
            endLng?: number;
            distance?: number;
            elevGain?: number;
            elevLoss?: number;
            elapsedSec?: number;
            movingSec?: number;
            avgCadence?: number;
            avgHeartrate?: number;
            minHeartrate?: number;
            maxHeartrate?: number;
            trimp?: number;
            hrZone0Sec?: number;
            hrZone1Sec?: number;
            hrZone2Sec?: number;
            hrZone3Sec?: number;
            hrZone4Sec?: number;
            hrZone5Sec?: number;
            hrZone0Trimp?: number;
            hrZone1Trimp?: number;
            hrZone2Trimp?: number;
            hrZone3Trimp?: number;
            hrZone4Trimp?: number;
            hrZone5Trimp?: number;
            averageSpeed?: number;
            averageEpSpeed?: number;
            averagePace?: number;
            averageEpPace?: number;
            activeCalories?: number;
            runningSec?: number;
            walkingSec?: number;
        } & { [K in Exclude<keyof I["stats"], keyof ActivityStats>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof Activity>]: never; }>(base?: I): Activity;
    fromPartial<I_1 extends {
        id?: string;
        stravaId?: number;
        stravaAthleteId?: number;
        name?: string;
        type?: string;
        startDate?: number;
        stats?: {
            startLat?: number;
            startLng?: number;
            endLat?: number;
            endLng?: number;
            distance?: number;
            elevGain?: number;
            elevLoss?: number;
            elapsedSec?: number;
            movingSec?: number;
            avgCadence?: number;
            avgHeartrate?: number;
            minHeartrate?: number;
            maxHeartrate?: number;
            trimp?: number;
            hrZone0Sec?: number;
            hrZone1Sec?: number;
            hrZone2Sec?: number;
            hrZone3Sec?: number;
            hrZone4Sec?: number;
            hrZone5Sec?: number;
            hrZone0Trimp?: number;
            hrZone1Trimp?: number;
            hrZone2Trimp?: number;
            hrZone3Trimp?: number;
            hrZone4Trimp?: number;
            hrZone5Trimp?: number;
            averageSpeed?: number;
            averageEpSpeed?: number;
            averagePace?: number;
            averageEpPace?: number;
            activeCalories?: number;
            runningSec?: number;
            walkingSec?: number;
        };
    } & {
        id?: string;
        stravaId?: number;
        stravaAthleteId?: number;
        name?: string;
        type?: string;
        startDate?: number;
        stats?: {
            startLat?: number;
            startLng?: number;
            endLat?: number;
            endLng?: number;
            distance?: number;
            elevGain?: number;
            elevLoss?: number;
            elapsedSec?: number;
            movingSec?: number;
            avgCadence?: number;
            avgHeartrate?: number;
            minHeartrate?: number;
            maxHeartrate?: number;
            trimp?: number;
            hrZone0Sec?: number;
            hrZone1Sec?: number;
            hrZone2Sec?: number;
            hrZone3Sec?: number;
            hrZone4Sec?: number;
            hrZone5Sec?: number;
            hrZone0Trimp?: number;
            hrZone1Trimp?: number;
            hrZone2Trimp?: number;
            hrZone3Trimp?: number;
            hrZone4Trimp?: number;
            hrZone5Trimp?: number;
            averageSpeed?: number;
            averageEpSpeed?: number;
            averagePace?: number;
            averageEpPace?: number;
            activeCalories?: number;
            runningSec?: number;
            walkingSec?: number;
        } & {
            startLat?: number;
            startLng?: number;
            endLat?: number;
            endLng?: number;
            distance?: number;
            elevGain?: number;
            elevLoss?: number;
            elapsedSec?: number;
            movingSec?: number;
            avgCadence?: number;
            avgHeartrate?: number;
            minHeartrate?: number;
            maxHeartrate?: number;
            trimp?: number;
            hrZone0Sec?: number;
            hrZone1Sec?: number;
            hrZone2Sec?: number;
            hrZone3Sec?: number;
            hrZone4Sec?: number;
            hrZone5Sec?: number;
            hrZone0Trimp?: number;
            hrZone1Trimp?: number;
            hrZone2Trimp?: number;
            hrZone3Trimp?: number;
            hrZone4Trimp?: number;
            hrZone5Trimp?: number;
            averageSpeed?: number;
            averageEpSpeed?: number;
            averagePace?: number;
            averageEpPace?: number;
            activeCalories?: number;
            runningSec?: number;
            walkingSec?: number;
        } & { [K_2 in Exclude<keyof I_1["stats"], keyof ActivityStats>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof Activity>]: never; }>(object: I_1): Activity;
};
export declare const ActivityStats: {
    encode(message: ActivityStats, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActivityStats;
    fromJSON(object: any): ActivityStats;
    toJSON(message: ActivityStats): unknown;
    create<I extends {
        startLat?: number;
        startLng?: number;
        endLat?: number;
        endLng?: number;
        distance?: number;
        elevGain?: number;
        elevLoss?: number;
        elapsedSec?: number;
        movingSec?: number;
        avgCadence?: number;
        avgHeartrate?: number;
        minHeartrate?: number;
        maxHeartrate?: number;
        trimp?: number;
        hrZone0Sec?: number;
        hrZone1Sec?: number;
        hrZone2Sec?: number;
        hrZone3Sec?: number;
        hrZone4Sec?: number;
        hrZone5Sec?: number;
        hrZone0Trimp?: number;
        hrZone1Trimp?: number;
        hrZone2Trimp?: number;
        hrZone3Trimp?: number;
        hrZone4Trimp?: number;
        hrZone5Trimp?: number;
        averageSpeed?: number;
        averageEpSpeed?: number;
        averagePace?: number;
        averageEpPace?: number;
        activeCalories?: number;
        runningSec?: number;
        walkingSec?: number;
    } & {
        startLat?: number;
        startLng?: number;
        endLat?: number;
        endLng?: number;
        distance?: number;
        elevGain?: number;
        elevLoss?: number;
        elapsedSec?: number;
        movingSec?: number;
        avgCadence?: number;
        avgHeartrate?: number;
        minHeartrate?: number;
        maxHeartrate?: number;
        trimp?: number;
        hrZone0Sec?: number;
        hrZone1Sec?: number;
        hrZone2Sec?: number;
        hrZone3Sec?: number;
        hrZone4Sec?: number;
        hrZone5Sec?: number;
        hrZone0Trimp?: number;
        hrZone1Trimp?: number;
        hrZone2Trimp?: number;
        hrZone3Trimp?: number;
        hrZone4Trimp?: number;
        hrZone5Trimp?: number;
        averageSpeed?: number;
        averageEpSpeed?: number;
        averagePace?: number;
        averageEpPace?: number;
        activeCalories?: number;
        runningSec?: number;
        walkingSec?: number;
    } & { [K in Exclude<keyof I, keyof ActivityStats>]: never; }>(base?: I): ActivityStats;
    fromPartial<I_1 extends {
        startLat?: number;
        startLng?: number;
        endLat?: number;
        endLng?: number;
        distance?: number;
        elevGain?: number;
        elevLoss?: number;
        elapsedSec?: number;
        movingSec?: number;
        avgCadence?: number;
        avgHeartrate?: number;
        minHeartrate?: number;
        maxHeartrate?: number;
        trimp?: number;
        hrZone0Sec?: number;
        hrZone1Sec?: number;
        hrZone2Sec?: number;
        hrZone3Sec?: number;
        hrZone4Sec?: number;
        hrZone5Sec?: number;
        hrZone0Trimp?: number;
        hrZone1Trimp?: number;
        hrZone2Trimp?: number;
        hrZone3Trimp?: number;
        hrZone4Trimp?: number;
        hrZone5Trimp?: number;
        averageSpeed?: number;
        averageEpSpeed?: number;
        averagePace?: number;
        averageEpPace?: number;
        activeCalories?: number;
        runningSec?: number;
        walkingSec?: number;
    } & {
        startLat?: number;
        startLng?: number;
        endLat?: number;
        endLng?: number;
        distance?: number;
        elevGain?: number;
        elevLoss?: number;
        elapsedSec?: number;
        movingSec?: number;
        avgCadence?: number;
        avgHeartrate?: number;
        minHeartrate?: number;
        maxHeartrate?: number;
        trimp?: number;
        hrZone0Sec?: number;
        hrZone1Sec?: number;
        hrZone2Sec?: number;
        hrZone3Sec?: number;
        hrZone4Sec?: number;
        hrZone5Sec?: number;
        hrZone0Trimp?: number;
        hrZone1Trimp?: number;
        hrZone2Trimp?: number;
        hrZone3Trimp?: number;
        hrZone4Trimp?: number;
        hrZone5Trimp?: number;
        averageSpeed?: number;
        averageEpSpeed?: number;
        averagePace?: number;
        averageEpPace?: number;
        activeCalories?: number;
        runningSec?: number;
        walkingSec?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof ActivityStats>]: never; }>(object: I_1): ActivityStats;
};
export declare const Athlete: {
    encode(message: Athlete, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Athlete;
    fromJSON(object: any): Athlete;
    toJSON(message: Athlete): unknown;
    create<I extends {
        id?: string;
        userId?: string;
        stravaId?: string;
        fitness?: {
            age?: number;
            height?: number;
            weight?: number;
            maxHeartrate?: number;
            restHeartrate?: number;
            vo2Max?: number;
            male?: boolean;
        };
    } & {
        id?: string;
        userId?: string;
        stravaId?: string;
        fitness?: {
            age?: number;
            height?: number;
            weight?: number;
            maxHeartrate?: number;
            restHeartrate?: number;
            vo2Max?: number;
            male?: boolean;
        } & {
            age?: number;
            height?: number;
            weight?: number;
            maxHeartrate?: number;
            restHeartrate?: number;
            vo2Max?: number;
            male?: boolean;
        } & { [K in Exclude<keyof I["fitness"], keyof AthleteFitness>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof Athlete>]: never; }>(base?: I): Athlete;
    fromPartial<I_1 extends {
        id?: string;
        userId?: string;
        stravaId?: string;
        fitness?: {
            age?: number;
            height?: number;
            weight?: number;
            maxHeartrate?: number;
            restHeartrate?: number;
            vo2Max?: number;
            male?: boolean;
        };
    } & {
        id?: string;
        userId?: string;
        stravaId?: string;
        fitness?: {
            age?: number;
            height?: number;
            weight?: number;
            maxHeartrate?: number;
            restHeartrate?: number;
            vo2Max?: number;
            male?: boolean;
        } & {
            age?: number;
            height?: number;
            weight?: number;
            maxHeartrate?: number;
            restHeartrate?: number;
            vo2Max?: number;
            male?: boolean;
        } & { [K_2 in Exclude<keyof I_1["fitness"], keyof AthleteFitness>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof Athlete>]: never; }>(object: I_1): Athlete;
};
export declare const AthleteFitness: {
    encode(message: AthleteFitness, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AthleteFitness;
    fromJSON(object: any): AthleteFitness;
    toJSON(message: AthleteFitness): unknown;
    create<I extends {
        age?: number;
        height?: number;
        weight?: number;
        maxHeartrate?: number;
        restHeartrate?: number;
        vo2Max?: number;
        male?: boolean;
    } & {
        age?: number;
        height?: number;
        weight?: number;
        maxHeartrate?: number;
        restHeartrate?: number;
        vo2Max?: number;
        male?: boolean;
    } & { [K in Exclude<keyof I, keyof AthleteFitness>]: never; }>(base?: I): AthleteFitness;
    fromPartial<I_1 extends {
        age?: number;
        height?: number;
        weight?: number;
        maxHeartrate?: number;
        restHeartrate?: number;
        vo2Max?: number;
        male?: boolean;
    } & {
        age?: number;
        height?: number;
        weight?: number;
        maxHeartrate?: number;
        restHeartrate?: number;
        vo2Max?: number;
        male?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof AthleteFitness>]: never; }>(object: I_1): AthleteFitness;
};
export declare const Chunk: {
    encode(message: Chunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Chunk;
    fromJSON(object: any): Chunk;
    toJSON(message: Chunk): unknown;
    create<I extends {
        chunk?: Uint8Array;
    } & {
        chunk?: Uint8Array;
    } & { [K in Exclude<keyof I, "chunk">]: never; }>(base?: I): Chunk;
    fromPartial<I_1 extends {
        chunk?: Uint8Array;
    } & {
        chunk?: Uint8Array;
    } & { [K_1 in Exclude<keyof I_1, "chunk">]: never; }>(object: I_1): Chunk;
};
export declare const Gpx: {
    encode(message: Gpx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Gpx;
    fromJSON(object: any): Gpx;
    toJSON(message: Gpx): unknown;
    create<I extends {
        name?: string;
        startDate?: number;
        type?: string;
        points?: {
            lat?: number;
            lon?: number;
            ele?: number;
            time?: number;
            hr?: number;
            cad?: number;
        }[];
    } & {
        name?: string;
        startDate?: number;
        type?: string;
        points?: {
            lat?: number;
            lon?: number;
            ele?: number;
            time?: number;
            hr?: number;
            cad?: number;
        }[] & ({
            lat?: number;
            lon?: number;
            ele?: number;
            time?: number;
            hr?: number;
            cad?: number;
        } & {
            lat?: number;
            lon?: number;
            ele?: number;
            time?: number;
            hr?: number;
            cad?: number;
        } & { [K in Exclude<keyof I["points"][number], keyof Point>]: never; })[] & { [K_1 in Exclude<keyof I["points"], keyof {
            lat?: number;
            lon?: number;
            ele?: number;
            time?: number;
            hr?: number;
            cad?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof Gpx>]: never; }>(base?: I): Gpx;
    fromPartial<I_1 extends {
        name?: string;
        startDate?: number;
        type?: string;
        points?: {
            lat?: number;
            lon?: number;
            ele?: number;
            time?: number;
            hr?: number;
            cad?: number;
        }[];
    } & {
        name?: string;
        startDate?: number;
        type?: string;
        points?: {
            lat?: number;
            lon?: number;
            ele?: number;
            time?: number;
            hr?: number;
            cad?: number;
        }[] & ({
            lat?: number;
            lon?: number;
            ele?: number;
            time?: number;
            hr?: number;
            cad?: number;
        } & {
            lat?: number;
            lon?: number;
            ele?: number;
            time?: number;
            hr?: number;
            cad?: number;
        } & { [K_3 in Exclude<keyof I_1["points"][number], keyof Point>]: never; })[] & { [K_4 in Exclude<keyof I_1["points"], keyof {
            lat?: number;
            lon?: number;
            ele?: number;
            time?: number;
            hr?: number;
            cad?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof Gpx>]: never; }>(object: I_1): Gpx;
};
export declare const Point: {
    encode(message: Point, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Point;
    fromJSON(object: any): Point;
    toJSON(message: Point): unknown;
    create<I extends {
        lat?: number;
        lon?: number;
        ele?: number;
        time?: number;
        hr?: number;
        cad?: number;
    } & {
        lat?: number;
        lon?: number;
        ele?: number;
        time?: number;
        hr?: number;
        cad?: number;
    } & { [K in Exclude<keyof I, keyof Point>]: never; }>(base?: I): Point;
    fromPartial<I_1 extends {
        lat?: number;
        lon?: number;
        ele?: number;
        time?: number;
        hr?: number;
        cad?: number;
    } & {
        lat?: number;
        lon?: number;
        ele?: number;
        time?: number;
        hr?: number;
        cad?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof Point>]: never; }>(object: I_1): Point;
};
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

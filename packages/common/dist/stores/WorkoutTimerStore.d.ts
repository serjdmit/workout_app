import dayjs from "dayjs";
export declare class WorkoutTimerStore {
    startTime: dayjs.Dayjs;
    isRunning: boolean;
    seconds: number;
    measure(): void;
    startTimer(): void;
    stopTimer(): void;
    get display(): string;
    get percent(): string;
}

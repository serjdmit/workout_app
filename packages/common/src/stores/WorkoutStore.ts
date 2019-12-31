import { observable } from "mobx";
import { RootStore } from "./RootStore";

type WorkoutDay = "a" | "b";

interface WorkoutHistory {
    [key: string]: Array<{
        excercise: string;
        value: number;
    }>;
}

interface CurrentExcercise {
    weight: number;
    reps: number;
    numSets: number;
    excercise: string;
    sets: string[];
}

export class WorkoutStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @observable currentSquat: number;
    @observable currentBenchPress: number;
    @observable currentOverheadPress: number;
    @observable currentDeadlift: number;
    @observable currentBarbellRow: number;

    @observable lastWorkoutType: WorkoutDay;
    @observable currentExcercises: CurrentExcercise[] = [];
    @observable history: WorkoutHistory;
}

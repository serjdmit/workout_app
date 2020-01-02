import { computed, observable } from "mobx";
import { persist } from "mobx-persist";
import { RootStore } from "./RootStore";

type WorkoutDay = "a" | "b";

interface WorkoutHistory {
    [key: string]: CurrentExercise[];
}

export interface CurrentExercise {
    weight: number;
    reps: number;
    numSets: number;
    exercise: string;
    sets: string[];
}

export class WorkoutStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @persist @observable currentSquat: number = 20;
    @persist @observable currentBenchPress: number = 20;
    @persist @observable currentOverheadPress: number = 20;
    @persist @observable currentDeadlift: number = 30;
    @persist @observable currentBarbellRow: number = 30;

    @persist @observable lastWorkoutType: WorkoutDay;
    @persist("list")
    @observable
    currentExercises: CurrentExercise[] = [];

    @computed get hasCurrentWorkout(): boolean {
        return !!this.currentExercises.length;
    }

    @persist("object") @observable history: WorkoutHistory = {};
}

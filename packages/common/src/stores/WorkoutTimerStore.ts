import dayjs from "dayjs";
import { action, computed, observable } from "mobx";
import { persist } from "mobx-persist";

const padZero = (number: number) => {
    if (number >= 10) {
        return number;
    }

    return `0${number}`;
};

export class WorkoutTimerStore {
    @persist("object") @observable startTime = dayjs();
    @persist @observable isRunning = false;
    @persist @observable seconds = 0;

    @action measure() {
        if (!this.isRunning) return;

        this.seconds = dayjs().diff(this.startTime, "second");

        setTimeout(() => this.measure(), 1000);
    }

    @action startTimer() {
        this.isRunning = true;
        this.startTime = dayjs();
        this.measure();
    }

    @action stopTimer() {
        this.isRunning = false;
        this.seconds = 0;
    }

    @computed get display() {
        const minutes = Math.floor(this.seconds / 60);
        const seconds = this.seconds % 60;
        return `${padZero(minutes)}:${padZero(seconds)}`;
    }

    @computed get percent() {
        return `${Math.min(100, this.seconds / 180) * 100}%`;
    }
}

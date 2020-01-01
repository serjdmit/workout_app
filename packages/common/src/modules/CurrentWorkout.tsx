import { observer } from "mobx-react-lite";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { RootStoreContext } from "../stores/RootStore";
import { WorkoutCard } from "../ui/WorkoutCard";
import { WorkoutTimer } from "../ui/WorkoutTimer";

interface Props {}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        padding: 10
    }
});

export const CurrentWorkout: React.FC<Props> = observer(() => {
    const rootStore = React.useContext(RootStoreContext);

    React.useEffect(() => {
        return () => {
            rootStore.workoutTimerStore.stopTimer();
        };
    }, []);

    return (
        <View style={styles.container}>
            {rootStore.workoutStore.currentExcercises.map(e => {
                return (
                    <WorkoutCard
                        onSetPress={setIndex => {
                            rootStore.workoutTimerStore.startTimer();
                            const value = e.sets[setIndex];

                            let newValue: string;

                            if (value === "") {
                                newValue = `${e.reps}`;
                            } else if (value === "0") {
                                rootStore.workoutTimerStore.stopTimer();
                                newValue = "";
                            } else {
                                newValue = `${parseInt(value) - 1}`;
                            }

                            e.sets[setIndex] = newValue;
                        }}
                        key={e.excercise}
                        sets={e.sets}
                        excercise={e.excercise}
                        repsAndWeight={`${e.numSets}x${e.reps} ${e.weight}`}
                    />
                );
            })}
            {rootStore.workoutTimerStore.isRunning ? (
                <WorkoutTimer
                    percent={rootStore.workoutTimerStore.percent}
                    currentTime={rootStore.workoutTimerStore.display}
                    onXPress={() => rootStore.workoutTimerStore.stopTimer()}
                />
            ) : null}
        </View>
    );
});

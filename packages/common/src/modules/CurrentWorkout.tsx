import { observer } from "mobx-react-lite";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { RootStoreContext } from "../stores/RootStore";
import { WorkoutCard } from "../ui/WorkoutCard";

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

    return (
        <View style={styles.container}>
            {rootStore.workoutStore.currentExcercises.map(e => {
                return (
                    <WorkoutCard
                        onSetPress={setIndex => {
                            const value = e.sets[setIndex];

                            let newValue: string;

                            if (value === "") {
                                newValue = `${e.reps}`;
                            } else if (value === "0") {
                                newValue = "0";
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
        </View>
    );
});

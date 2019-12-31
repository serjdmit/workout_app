import { observer } from "mobx-react-lite";
import * as React from "react";
import { Button, Text, View } from "react-native";
import { RootStoreContext } from "../stores/RootStore";

interface Props {}

export const WorkoutHistory: React.FC<Props> = observer(() => {
    const rootStore = React.useContext(RootStoreContext);

    return (
        <View>
            <Text>WorkoutHistory page</Text>
            <Button
                title="create workout"
                onPress={() => {
                    rootStore.workoutStore.currentExcercises.push(
                        {
                            excercise: "Squat",
                            numSets: 5,
                            reps: 5,
                            sets: ["", "", "", "", ""],
                            weight: 140
                        },
                        {
                            excercise: "Bench Press",
                            numSets: 5,
                            reps: 5,
                            sets: ["5", "5", "5", "5", "5"],
                            weight: 80
                        },

                        {
                            excercise: "Deadlift",
                            numSets: 1,
                            reps: 5,
                            sets: ["5", "X", "X", "X", "X"],
                            weight: 140
                        }
                    );
                    rootStore.routerStore.screen = "CurrentWorkout";
                }}
            />
        </View>
    );
});

import { observer } from "mobx-react-lite";
import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { RouteComponentProps } from "react-router";
import { RootStoreContext } from "../stores/RootStore";
import { HistoryCard } from "../ui/HistoryCard";

interface Props extends RouteComponentProps {}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row"
    }
});

export const WorkoutHistory: React.FC<Props> = observer(({ history }) => {
    const rootStore = React.useContext(RootStoreContext);

    const rows: JSX.Element[][] = [];

    Object.entries(rootStore.workoutStore.history).forEach(([dt, v], i) => {
        const hc = <HistoryCard key={dt} header={dt} currentExercises={v} />;
        if (i % 2 === 0) {
            rows.push([hc]);
        } else {
            rows[rows.length - 1].push(hc);
        }
    });

    return (
        <View>
            <Text>WorkoutHistory page</Text>
            <Button
                title="create workout"
                onPress={() => {
                    rootStore.workoutStore.currentExercises.push(
                        {
                            exercise: "Squat",
                            numSets: 5,
                            reps: 5,
                            sets: ["", "", "", "", ""],
                            weight: 140
                        },
                        {
                            exercise: "Bench Press",
                            numSets: 5,
                            reps: 5,
                            sets: ["5", "5", "5", "5", "5"],
                            weight: 80
                        },

                        {
                            exercise: "Deadlift",
                            numSets: 1,
                            reps: 5,
                            sets: ["5", "X", "X", "X", "X"],
                            weight: 140
                        }
                    );
                    history.push("/current-workout");
                }}
            />
            {rows.map((row, index) => (
                <View key={index} style={styles.row}>
                    {row}
                </View>
            ))}
        </View>
    );
});

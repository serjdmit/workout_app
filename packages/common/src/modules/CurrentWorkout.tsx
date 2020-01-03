import dayjs from "dayjs";
import { observer } from "mobx-react-lite";
import * as React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import { RouteComponentProps } from "react-router-dom";
import { RootStoreContext } from "../stores/RootStore";
import { WorkoutCard } from "../ui/WorkoutCard";
import { WorkoutTimer } from "../ui/WorkoutTimer";

interface Props
    extends RouteComponentProps<{
        year?: string;
        month?: string;
        day?: string;
    }> {}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(23, 23, 23)"
    },
    scrollContainer: {
        padding: 30,
        marginBottom: 20
    },
    buttonShadowLight: {
        borderRadius: 20,
        shadowColor: "rgb(100, 100, 100)",
        shadowOffset: { width: -9, height: -9 },
        shadowRadius: 16,
        shadowOpacity: 0.3
    },
    heading: {
        marginHorizontal: "auto",
        padding: 40,
        paddingBottom: 20,
        fontSize: 24,
        color: "#fff",
        fontFamily: "'lucida grande', tahoma, verdana, arial, sans-serif"
    },
    button: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 9, height: 9 },
        shadowRadius: 16,
        shadowOpacity: 1,
        height: 60,
        width: "100%",
        padding: 20
    },
    buttonText: {
        fontSize: 18,
        fontFamily: "tahoma, verdana, arial, sans-serif",
        fontWeight: "bold",
        color: "#fff"
    }
});

export const CurrentWorkout: React.FC<Props> = observer(
    ({
        history,
        match: {
            params: { day, month, year }
        }
    }) => {
        const rootStore = React.useContext(RootStoreContext);

        React.useEffect(() => {
            return () => {
                rootStore.workoutTimerStore.stopTimer();
            };
        }, []);

        const isCurrentWorkout = !year && !month && !day;
        const dataKey = `${year}-${month}-${day}`;

        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Current Workout</Text>
                <ScrollView
                    keyboardShouldPersistTaps="always"
                    contentContainerStyle={styles.scrollContainer}
                >
                    {(isCurrentWorkout
                        ? rootStore.workoutStore.currentExercises
                        : rootStore.workoutStore.history[dataKey]
                    ).map(e => {
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
                                key={e.exercise}
                                sets={e.sets}
                                exercise={e.exercise}
                                repsAndWeight={`${e.numSets}x${e.reps} ${e.weight}`}
                            />
                        );
                    })}
                    <View style={styles.buttonShadowLight}>
                        <TouchableHighlight
                            style={styles.button}
                            onPress={() => {
                                if (isCurrentWorkout) {
                                    rootStore.workoutStore.history[
                                        dayjs().format("YYYY-MM-DD")
                                    ] = rootStore.workoutStore.currentExercises;
                                    rootStore.workoutStore.currentExercises = [];
                                }
                                history.push("/");
                            }}
                        >
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
                {rootStore.workoutTimerStore.isRunning ? (
                    <WorkoutTimer
                        percent={rootStore.workoutTimerStore.percent}
                        currentTime={rootStore.workoutTimerStore.display}
                        onXPress={() => rootStore.workoutTimerStore.stopTimer()}
                    />
                ) : null}
            </View>
        );
    }
);

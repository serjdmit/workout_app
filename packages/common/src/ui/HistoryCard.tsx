import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CurrentExercise } from "../stores/WorkoutStore";
import { Card } from "./Сard";

interface Props {
    header: string;
    currentExercises: CurrentExercise[];
    onPress: () => void;
}

const styles = StyleSheet.create({
    data: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text: {
        lineHeight: 25,
        fontSize: 18,
        fontFamily: "'lucida grande', tahoma, verdana, arial, sans-serif",
        color: "#fff"
    },
    heading: {
        fontWeight: "bold",
        color: "#999",
        marginBottom: 15,
        fontFamily: "tahoma, verdana, arial, sans-serif"
    }
});

const exerciseShortName = {
    Squat: "SQ",
    Deadlift: "DL",
    "Bench Press": "BP",
    "Overhead Press": "OHP",
    "Barbell Row": "ROW"
};

export const HistoryCard: React.FC<Props> = ({
    header,
    currentExercises,
    onPress
}) => {
    return (
        <Card onPress={onPress}>
            <Text style={[styles.text, styles.heading]}>{header}</Text>
            {currentExercises.map(ce => {
                return (
                    <View key={ce.exercise} style={styles.data}>
                        <Text style={styles.text}>
                            {`${
                                exerciseShortName[
                                    ce.exercise as keyof typeof exerciseShortName
                                ]
                            }`}{" "}
                        </Text>
                        <Text style={styles.text}>
                            {`${ce.numSets}x${ce.reps} ${ce.weight}`}
                        </Text>
                    </View>
                );
            })}
        </Card>
    );
};

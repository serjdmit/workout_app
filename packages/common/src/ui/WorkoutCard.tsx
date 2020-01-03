import { observer } from "mobx-react-lite";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card } from "./Сard";

interface Props {
    exercise: string;
    repsAndWeight: string;
    sets: string[];
    onSetPress: (index: number) => void;
}

const styles = StyleSheet.create({
    cardContainer: {
        shadowColor: "rgb(100, 100, 100)",
        shadowOffset: { width: -9, height: -9 },
        shadowRadius: 16,
        shadowOpacity: 0.3,
        marginBottom: 20,
        borderRadius: 20,
        paddingTop: 5
    },
    card: {
        backgroundColor: "rgb(23, 23, 23)"
    },
    topRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    topRowText: {
        fontSize: 18,
        marginBottom: 10,
        color: "#fff",
        fontFamily: "'lucida grande', tahoma, verdana, arial, sans-serif"
    },
    bottomRowText: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10
    },
    circle: {
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "#222",
        cursor: "pointer",
        shadowColor: "#000",
        shadowOffset: { width: 9, height: 9 },
        shadowRadius: 9,
        shadowOpacity: 1
    },
    circleShadow: {
        borderRadius: 25,
        shadowColor: "rgb(100, 100, 100)",
        shadowOffset: { width: -9, height: -9 },
        shadowRadius: 16,
        shadowOpacity: 0.3
    },
    circleGreen: {
        shadowColor: "#2d5039"
    },
    circleRed: {
        shadowColor: "#2d5039"
    },
    circleText: {
        fontFamily: "'lucida grande', tahoma, verdana, arial, sans-serif",
        fontSize: 20,
        color: "#fff"
    }
});

export const WorkoutCard: React.FC<Props> = observer(
    ({ exercise, repsAndWeight, sets, onSetPress }) => {
        return (
            <View style={styles.cardContainer}>
                <Card>
                    <View style={styles.topRow}>
                        <Text style={styles.topRowText}>{exercise}</Text>
                        <Text style={styles.topRowText}>{repsAndWeight}</Text>
                    </View>
                    <View style={styles.bottomRowText}>
                        {sets.map((set, index) => {
                            if (set === "X") {
                                return (
                                    <View style={styles.circleShadow}>
                                        <View style={styles.circle}>
                                            <Text
                                                style={styles.circleText}
                                                key={set + index}
                                            >
                                                X
                                            </Text>
                                        </View>
                                    </View>
                                );
                            }
                            if (set === "") {
                                return (
                                    <View style={styles.circleShadow}>
                                        <TouchableOpacity
                                            onPress={() => onSetPress(index)}
                                            style={styles.circle}
                                            key={set + index}
                                        />
                                    </View>
                                );
                            }
                            return (
                                <View style={styles.circleShadow}>
                                    <TouchableOpacity
                                        onPress={() => onSetPress(index)}
                                        style={styles.circle}
                                        key={set + index}
                                    >
                                        <Text style={styles.circleText}>
                                            {set}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        })}
                    </View>
                </Card>
            </View>
        );
    }
);

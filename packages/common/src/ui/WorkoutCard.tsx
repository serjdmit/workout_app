import { observer } from "mobx-react-lite";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
    excercise: string;
    repsAndWeight: string;
    sets: string[];
    onSetPress: (index: number) => void;
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 3,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        flexDirection: "column",
        padding: 10,
        marginBottom: 10
    },
    topRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    topRowText: {
        fontSize: 18,
        fontFamily: "sans-serif"
    },
    bottomRowText: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15
    },
    circle: {
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "#08A642",
        cursor: "pointer"
    },
    circleText: {
        fontFamily: "sans-serif",
        fontSize: 20,
        color: "#fff"
    },
    darkText: {
        color: "#aaa"
    },
    gray: {
        backgroundColor: "#ccc"
    },
    lightGray: {
        backgroundColor: "#ddd"
    }
});

export const WorkoutCard: React.FC<Props> = observer(
    ({ excercise, repsAndWeight, sets, onSetPress }) => {
        return (
            <View style={styles.card}>
                <View style={styles.topRow}>
                    <Text style={styles.topRowText}>{excercise}</Text>
                    <Text style={styles.topRowText}>{repsAndWeight}</Text>
                </View>
                <View style={styles.bottomRowText}>
                    {sets.map((set, index) => {
                        if (set === "X") {
                            return (
                                <View style={[styles.circle, styles.lightGray]}>
                                    <Text
                                        style={[
                                            styles.circleText,
                                            styles.darkText
                                        ]}
                                        key={set + index}
                                    >
                                        X
                                    </Text>
                                </View>
                            );
                        }
                        if (set === "") {
                            return (
                                <TouchableOpacity
                                    onPress={() => onSetPress(index)}
                                    style={[styles.circle, styles.gray]}
                                    key={set + index}
                                />
                            );
                        }
                        return (
                            <TouchableOpacity
                                onPress={() => onSetPress(index)}
                                style={styles.circle}
                                key={set + index}
                            >
                                <Text style={styles.circleText}>{set}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        );
    }
);

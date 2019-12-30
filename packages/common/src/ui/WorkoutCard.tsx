import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
    excercise: string;
    repsAndWeight: string;
    sets: string[];
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
        padding: 10
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
        justifyContent: "space-evenly",
        marginTop: 15
    },
    circle: {
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "#08A642"
    },
    circleText: {
        fontFamily: "sans-serif",
        fontSize: 20,
        color: "#fff"
    },
    darkText: {
        color: "#18261D"
    },
    gray: {
        backgroundColor: "#ccc"
    },
    red: {
        backgroundColor: "#D42B3C"
    }
});

export const WorkoutCard: React.FC<Props> = ({
    excercise,
    repsAndWeight,
    sets
}) => {
    return (
        <View style={styles.card}>
            <View style={styles.topRow}>
                <Text style={styles.topRowText}>{excercise}</Text>
                <Text style={styles.topRowText}>{repsAndWeight}</Text>
            </View>
            <View style={styles.bottomRowText}>
                {sets.map((set, index) => {
                    if (set === "") {
                        return (
                            <View style={[styles.circle, styles.gray]}>
                                <Text key={set + index}></Text>
                            </View>
                        );
                    }
                    if (set === "X") {
                        return (
                            <View style={[styles.circle, styles.red]}>
                                <Text
                                    style={[styles.circleText]}
                                    key={set + index}
                                >
                                    X
                                </Text>
                            </View>
                        );
                    }
                    return (
                        <View style={styles.circle} key={set + index}>
                            <Text style={styles.circleText}>{set}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

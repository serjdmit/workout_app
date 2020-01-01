import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
    onXPress: () => void;
    currentTime: string;
    percent: string;
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0,
        bottom: 0,
        height: 50,
        width: "100%",
        backgroundColor: "#375D32"
    },
    row: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        paddingHorizontal: 30
    },
    text: {
        color: "#fff",
        fontSize: 18
    },
    x: {
        fontSize: 20,
        color: "#000"
    },
    line: {
        height: 3,
        backgroundColor: "#ccc"
    }
});

export const WorkoutTimer: React.FC<Props> = ({
    onXPress,
    currentTime,
    percent
}) => {
    return (
        <View style={styles.container}>
            <View style={[styles.line, { width: percent }]} />
            <View style={styles.row}>
                <Text style={styles.text}>{currentTime}</Text>
                <TouchableOpacity onPress={onXPress}>
                    <Text style={styles.x}>X</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

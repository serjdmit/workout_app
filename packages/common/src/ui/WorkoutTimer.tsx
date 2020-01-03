import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
    onXPress: () => void;
    currentTime: string;
    percent: string;
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: "rgb(0, 0, 0)",
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0
    },
    row: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        paddingHorizontal: 20
    },
    text: {
        color: "#fff",
        fontSize: 18,
        fontFamily: "'lucida grande', tahoma, verdana, arial, sans-serif"
    },
    x: {
        fontSize: 20,
        color: "#fff",
        fontFamily: "'lucida grande', tahoma, verdana, arial, sans-serif"
    },
    line: {
        height: 5,
        backgroundColor: "#fff"
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

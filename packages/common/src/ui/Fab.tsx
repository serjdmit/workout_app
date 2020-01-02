import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
    onPress: () => void;
}

const styles = StyleSheet.create({
    fab: {
        width: 40,
        height: 40,
        backgroundColor: "blue",
        position: "absolute",
        bottom: 20,
        right: 20,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3
    },
    text: {
        fontSize: 18,
        color: "#fff",
        lineHeight: "1"
    }
});

export const Fab: React.FC<Props> = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.fab} onPress={onPress}>
            <Text style={styles.text}>+</Text>
        </TouchableOpacity>
    );
};

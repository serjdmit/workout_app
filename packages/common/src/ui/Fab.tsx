import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
    onPress: () => void;
}

const styles = StyleSheet.create({
    fab: {
        width: 40,
        height: 40,
        backgroundColor: "rgb(23, 23, 23)",
        position: "absolute",
        bottom: 20,
        right: 20,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "rgb(100, 100, 100)",
        shadowOffset: { width: -9, height: -9 },
        shadowRadius: 16,
        shadowOpacity: 0.3
    },
    text: {
        fontWeight: "bold",
        fontSize: 16,
        fontFamily: "tahoma, verdana, arial, sans-serif",
        margin: "auto",
        paddingBottom: 2,
        color: "#fff"
    },
    cardShadow: {
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 9, height: 9 },
        shadowRadius: 16,
        shadowOpacity: 1,
        width: "100%",
        height: "100%"
    }
});

export const Fab: React.FC<Props> = ({ onPress }) => {
    return (
        <View style={styles.fab}>
            <TouchableOpacity style={styles.cardShadow} onPress={onPress}>
                <Text style={styles.text}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

import React from "react";
import { StyleSheet, View } from "react-native";
import { Routes } from "./Routes";

export const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Routes />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    wrapper: {
        flex: 1,
        backgroundColor: "rgb(23, 23, 23)",
        maxWidth: "420px",
        maxHeight: "820px",
        width: "100%"
    }
});

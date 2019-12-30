import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export const App = () => {
    const [count, setCount] = useState(0);
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Hello world</Text>
            <Text style={styles.instructions}>welcome to react</Text>
            <Text style={styles.instructions}>{count}</Text>
            <Button title="increment" onPress={() => setCount(count + 1)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center"
    }
});

export default App;

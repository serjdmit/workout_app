import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { CounterStoreContext } from "./stores/CounterStore";

export const App = observer(() => {
    const counterStore = useContext(CounterStoreContext);
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Hello world</Text>
            <Text style={styles.instructions}>welcome to react</Text>
            <Text style={styles.instructions}>{counterStore.count}</Text>
            <Button title="increment" onPress={() => counterStore.count++} />
        </View>
    );
});

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

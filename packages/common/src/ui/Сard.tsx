import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface Props {
    onPress?: () => void;
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        backgroundColor: "rgb(23, 23, 23)",
        shadowColor: "#000",
        shadowOffset: { width: 9, height: 9 },
        shadowRadius: 16,
        shadowOpacity: 1,
        flexDirection: "column",
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    cardShadow: {
        borderRadius: 20,
        shadowColor: "rgb(100, 100, 100)",
        shadowOffset: { width: -9, height: -9 },
        shadowRadius: 16,
        shadowOpacity: 0.3
    }
});

export const Card: React.FC<Props> = ({ children, onPress }) => {
    if (onPress) {
        return (
            <View style={styles.cardShadow}>
                <TouchableOpacity style={styles.card} onPress={onPress}>
                    {children}
                </TouchableOpacity>
            </View>
        );
    }
    return <View style={styles.card}>{children}</View>;
};

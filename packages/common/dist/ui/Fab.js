"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
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
exports.Fab = function (_a) {
    var onPress = _a.onPress;
    return (React.createElement(react_native_1.View, { style: styles.fab },
        React.createElement(react_native_1.TouchableOpacity, { style: styles.cardShadow, onPress: onPress },
            React.createElement(react_native_1.Text, { style: styles.text }, "+"))));
};

"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_lite_1 = require("mobx-react-lite");
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var _ard_1 = require("./\u0421ard");
var styles = react_native_1.StyleSheet.create({
    cardContainer: {
        shadowColor: "rgb(100, 100, 100)",
        shadowOffset: { width: -9, height: -9 },
        shadowRadius: 16,
        shadowOpacity: 0.3,
        marginBottom: 20,
        borderRadius: 20,
        paddingTop: 5
    },
    card: {
        backgroundColor: "rgb(23, 23, 23)"
    },
    topRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    topRowText: {
        fontSize: 18,
        marginBottom: 10,
        color: "#fff",
        fontFamily: "'lucida grande', tahoma, verdana, arial, sans-serif"
    },
    bottomRowText: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10
    },
    circle: {
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "#222",
        cursor: "pointer",
        shadowColor: "#000",
        shadowOffset: { width: 9, height: 9 },
        shadowRadius: 9,
        shadowOpacity: 1
    },
    circleShadow: {
        borderRadius: 25,
        shadowColor: "rgb(100, 100, 100)",
        shadowOffset: { width: -9, height: -9 },
        shadowRadius: 16,
        shadowOpacity: 0.3
    },
    circleGreen: {
        shadowColor: "#2d5039"
    },
    circleRed: {
        shadowColor: "#2d5039"
    },
    circleText: {
        fontFamily: "'lucida grande', tahoma, verdana, arial, sans-serif",
        fontSize: 20,
        color: "#fff"
    }
});
exports.WorkoutCard = mobx_react_lite_1.observer(function (_a) {
    var exercise = _a.exercise, repsAndWeight = _a.repsAndWeight, sets = _a.sets, onSetPress = _a.onSetPress;
    return (React.createElement(react_native_1.View, { style: styles.cardContainer },
        React.createElement(_ard_1.Card, null,
            React.createElement(react_native_1.View, { style: styles.topRow },
                React.createElement(react_native_1.Text, { style: styles.topRowText }, exercise),
                React.createElement(react_native_1.Text, { style: styles.topRowText }, repsAndWeight)),
            React.createElement(react_native_1.View, { style: styles.bottomRowText }, sets.map(function (set, index) {
                if (set === "X") {
                    return (React.createElement(react_native_1.View, { style: styles.circleShadow },
                        React.createElement(react_native_1.View, { style: styles.circle },
                            React.createElement(react_native_1.Text, { style: styles.circleText, key: set + index }, "X"))));
                }
                if (set === "") {
                    return (React.createElement(react_native_1.View, { style: styles.circleShadow },
                        React.createElement(react_native_1.TouchableOpacity, { onPress: function () { return onSetPress(index); }, style: styles.circle, key: set + index })));
                }
                return (React.createElement(react_native_1.View, { style: styles.circleShadow },
                    React.createElement(react_native_1.TouchableOpacity, { onPress: function () { return onSetPress(index); }, style: styles.circle, key: set + index },
                        React.createElement(react_native_1.Text, { style: styles.circleText }, set))));
            })))));
});

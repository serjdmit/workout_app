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
    card: {
        borderRadius: 3,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        flexDirection: "column",
        padding: 10
    },
    topRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    topRowText: {
        fontSize: 18,
        fontFamily: "sans-serif"
    },
    bottomRowText: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 15
    },
    circle: {
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "#08A642"
    },
    circleText: {
        fontFamily: "sans-serif",
        fontSize: 20,
        color: "#fff"
    },
    darkText: {
        color: "#18261D"
    },
    gray: {
        backgroundColor: "#ccc"
    },
    red: {
        backgroundColor: "#D42B3C"
    }
});
exports.WorkoutCard = function (_a) {
    var excercise = _a.excercise, repsAndWeight = _a.repsAndWeight, sets = _a.sets;
    return (React.createElement(react_native_1.View, { style: styles.card },
        React.createElement(react_native_1.View, { style: styles.topRow },
            React.createElement(react_native_1.Text, { style: styles.topRowText }, excercise),
            React.createElement(react_native_1.Text, { style: styles.topRowText }, repsAndWeight)),
        React.createElement(react_native_1.View, { style: styles.bottomRowText }, sets.map(function (set, index) {
            if (set === "") {
                return (React.createElement(react_native_1.View, { style: [styles.circle, styles.gray] },
                    React.createElement(react_native_1.Text, { key: set + index })));
            }
            if (set === "X") {
                return (React.createElement(react_native_1.View, { style: [styles.circle, styles.red] },
                    React.createElement(react_native_1.Text, { style: [styles.circleText], key: set + index }, "X")));
            }
            return (React.createElement(react_native_1.View, { style: styles.circle, key: set + index },
                React.createElement(react_native_1.Text, { style: styles.circleText }, set)));
        }))));
};

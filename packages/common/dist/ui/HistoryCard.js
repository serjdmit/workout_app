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
var _ard_1 = require("./\u0421ard");
var styles = react_native_1.StyleSheet.create({
    data: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text: {
        lineHeight: 25,
        fontSize: 18,
        fontFamily: "'lucida grande', tahoma, verdana, arial, sans-serif",
        color: "#fff"
    },
    heading: {
        fontWeight: "bold",
        color: "#999",
        marginBottom: 15,
        fontFamily: "tahoma, verdana, arial, sans-serif"
    }
});
var exerciseShortName = {
    Squat: "SQ",
    Deadlift: "DL",
    "Bench Press": "BP",
    "Overhead Press": "OHP",
    "Barbell Row": "ROW"
};
exports.HistoryCard = function (_a) {
    var header = _a.header, currentExercises = _a.currentExercises, onPress = _a.onPress;
    return (React.createElement(_ard_1.Card, { onPress: onPress },
        React.createElement(react_native_1.Text, { style: [styles.text, styles.heading] }, header),
        currentExercises.map(function (ce) {
            return (React.createElement(react_native_1.View, { key: ce.exercise, style: styles.data },
                React.createElement(react_native_1.Text, { style: styles.text }, "" + exerciseShortName[ce.exercise],
                    " "),
                React.createElement(react_native_1.Text, { style: styles.text }, ce.numSets + "x" + ce.reps + " " + ce.weight)));
        })));
};

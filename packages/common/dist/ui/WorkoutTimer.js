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
    container: {
        position: "absolute",
        left: 0,
        bottom: 0,
        height: 50,
        width: "100%",
        backgroundColor: "#375D32"
    },
    row: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        paddingHorizontal: 30
    },
    text: {
        color: "#fff",
        fontSize: 18
    },
    x: {
        fontSize: 20,
        color: "#000"
    },
    line: {
        height: 3,
        backgroundColor: "#ccc"
    }
});
exports.WorkoutTimer = function (_a) {
    var onXPress = _a.onXPress, currentTime = _a.currentTime, percent = _a.percent;
    return (React.createElement(react_native_1.View, { style: styles.container },
        React.createElement(react_native_1.View, { style: [styles.line, { width: percent }] }),
        React.createElement(react_native_1.View, { style: styles.row },
            React.createElement(react_native_1.Text, { style: styles.text }, currentTime),
            React.createElement(react_native_1.TouchableOpacity, { onPress: onXPress },
                React.createElement(react_native_1.Text, { style: styles.x }, "X")))));
};

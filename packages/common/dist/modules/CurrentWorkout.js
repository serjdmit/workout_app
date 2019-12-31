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
var RootStore_1 = require("../stores/RootStore");
var WorkoutCard_1 = require("../ui/WorkoutCard");
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        padding: 10
    }
});
exports.CurrentWorkout = mobx_react_lite_1.observer(function () {
    var rootStore = React.useContext(RootStore_1.RootStoreContext);
    return (React.createElement(react_native_1.View, { style: styles.container }, rootStore.workoutStore.currentExcercises.map(function (e) {
        return (React.createElement(WorkoutCard_1.WorkoutCard, { onSetPress: function (setIndex) {
                var value = e.sets[setIndex];
                var newValue;
                if (value === "") {
                    newValue = "" + e.reps;
                }
                else if (value === "0") {
                    newValue = "0";
                }
                else {
                    newValue = "" + (parseInt(value) - 1);
                }
                e.sets[setIndex] = newValue;
            }, key: e.excercise, sets: e.sets, excercise: e.excercise, repsAndWeight: e.numSets + "x" + e.reps + " " + e.weight }));
    })));
});

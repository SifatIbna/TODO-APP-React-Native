import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = ({ addGoalHandler, visible, calcelGoalAdditionHandler }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoal = () => {
    addGoalHandler(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          value={enteredGoal}
          onChangeText={goalHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="red"
              onPress={calcelGoalAdditionHandler}
            />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoal} />
          </View>
        </View>
        {/* Or you can use this syntaxt ()=>{addGoalHandler(enteredGoal)} */}
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    margin: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;

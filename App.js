import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setMode] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals([
      ...courseGoals,
      { id: (Math.random() + 1).toString(), value: enteredGoal },
    ]);
    setMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const calcelGoalAdditionHandler = () => {
    setMode(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setMode(true)} />
      <GoalInput
        visible={isAddMode}
        addGoalHandler={addGoalHandler}
        calcelGoalAdditionHandler={calcelGoalAdditionHandler}
      />
      {/* FlatList is more optimized becuase it doesnot render all the content of a long listItem */}
      {/* // It only render the amount of item that fits in a screen */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            data={itemData.item.value}
          />
        )}
      />
      {/* <ScrollView>
        {courseGoals.map((goal, idx) => (
          <View style={styles.listItem}>
            <Text key={idx + 1}>{goal}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});

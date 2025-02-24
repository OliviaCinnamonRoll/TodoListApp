import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import MainScreen from "./screens/MainScreen";
import TodoList from "./components/TodoList";
import todos from "./data/todos/todos"; 


export default function App() {
  const [tasks, setTasks] = useState(todos); // ✅ 这里使用 todos 作为初始任务

  const addTask = (text) => {
    const newTask = { id: Date.now().toString(), text, done: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <View style={styles.container}>
      <MainScreen addTask={addTask} />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
});


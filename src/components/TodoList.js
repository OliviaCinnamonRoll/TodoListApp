import React from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import TodoItem from "./TodoItem"; 

const TodoList = ({ tasks, setTasks }) => {
  const toggleTask = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, done: !task.done } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <SafeAreaView>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem task={item} toggleTask={toggleTask} deleteTask={deleteTask} />
        )}
      />
    </SafeAreaView>
  );
};

export default TodoList;




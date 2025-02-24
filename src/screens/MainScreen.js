import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";
import TodoList from "../components/TodoList"; // ✅ 正确的路径

const MainScreen = ({ addTask }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTask = () => {
    if (newTodo.trim()) {
      addTask(newTodo);
      setNewTodo(""); // 清空输入框
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Nuevo TODO"
        value={newTodo}
        onChangeText={setNewTodo}
        autoCapitalize="words" // 每个单词首字母大写
        clearButtonMode="while-editing" // 在 iOS 上显示清除按钮
        returnKeyType="done"
        onSubmitEditing={handleAddTask} // 回车键触发任务添加
      />
      <Button title="Añadir" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    marginRight: 10,
    padding: 8,
  },
});

export default MainScreen;
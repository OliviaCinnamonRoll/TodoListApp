import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const TodoItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <View style={styles.container}>
      {/* ✅ 点击任务，切换完成状态 */}
      <TouchableOpacity onPress={() => toggleTask(task.id)}>
        <Text style={[styles.text, task.done && styles.textDone]}>
          {task.text}
        </Text>
      </TouchableOpacity>
      {/* ✅ 删除任务 */}
      <TouchableOpacity onPress={() => deleteTask(task.id)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 16,
  },
  textDone: {
    textDecorationLine: "line-through", // ✅ 任务完成后加删除线
    color: "#aaa",
  },
  deleteButton: {
    backgroundColor: "red",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteText: {
    color: "white",
  },
});

export default TodoItem;


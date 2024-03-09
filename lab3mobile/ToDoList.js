import React from 'react';
import { Text, View } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Tasks:</Text>
      <View>
        {tasks.map((task) => (
          <Text key={task.id} style={{ textDecorationLine: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </Text>
        ))}
      </View>
    </View>
  );
}

export default ToDoList;

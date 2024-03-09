import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import ToDoList from './ToDoList';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Do laundry', completed: false },
    { id: 2, title: 'Go to gym', completed: false },
    { id: 3, title: 'Walk dog', completed: false }
  ]);
  const [newTask, setNewTask] = useState('');
  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObj = {
        id: tasks.length + 1,
        title: newTask,
        completed: false
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask(''); 
    }
  };

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>My To Do List</Text>
      <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10, paddingHorizontal: 10 }}
          onChangeText={(text) => setNewTask(text)}
          placeholder="Enter task"
          value={newTask}
        />
        {/* Button */}
        <Button title="Add Task" onPress={addTask} />
      </View>
      <ToDoList tasks={tasks} />
    </View>
  );
}

export default App;

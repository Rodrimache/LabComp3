import { useState } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addTask = (task) => {
    const newTask = { id: nextId, text: task, completed: false };
    setTasks([...tasks, newTask]);
    setNextId(nextId + 1);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => (
      i === index ? { ...task, completed: !task.completed } : task
    ));
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>Lista de tareas</h1>
      <AddTask addTask={addTask} />
      <TaskList 
        tasks={tasks} 
        toggleTaskCompletion={toggleTaskCompletion} 
        deleteTask={deleteTask} 
      />
    </div>
  );
}

export default App;



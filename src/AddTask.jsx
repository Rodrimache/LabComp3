import { useState } from 'react';
import PropTypes from 'prop-types';

function AddTask({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-task">Agregar tarea:</label>
      <input 
        id="new-task"
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Agregar tareas" 
      />
      <button type="submit">Agregar tarea</button>
    </form>
  );
}

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default AddTask;



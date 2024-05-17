import PropTypes from 'prop-types';

function TaskItem({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <li>
      <span 
        onClick={toggleTaskCompletion} 
        style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'gray' : 'black' }}
      >
        {task.text}
      </span>
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskItem;


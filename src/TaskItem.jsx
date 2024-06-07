import PropTypes from 'prop-types';

function TaskItem({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <li>
      <span 
        role="button"
        tabIndex={0}
        onClick={toggleTaskCompletion}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleTaskCompletion();
          }
        }}
        style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'gray' : 'black', cursor: 'pointer' }}
        aria-pressed={task.completed}
      >
        {task.text}
      </span>
      <button onClick={deleteTask} aria-label={`Delete task ${task.text}`}>Delete</button>
    </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired, 
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskItem;



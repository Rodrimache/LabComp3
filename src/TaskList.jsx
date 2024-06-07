import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {

  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          toggleTaskCompletion={() => toggleTaskCompletion(index)} 
          deleteTask={() => deleteTask(index)} 
        />
      ))}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, 
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskList;


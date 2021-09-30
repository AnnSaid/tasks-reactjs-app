import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <p className="task-name">
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </p>
      <div class="date-time">
        <p className="task-time">{task.day}</p>
        <p className="task-clock">{task.time} am </p>
      </div>
    </div>
  );
};

export default Task;

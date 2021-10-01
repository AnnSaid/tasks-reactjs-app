import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import checklist from "./img/checklist.svg";
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Task1",
      day: "2021-08-31",
      time: "10:20",
      reminder: true,
    },
    {
      id: 2,
      text: "Task2",
      day: "2021-08-31",
      time: "10:20",
      reminder: false,
    },
    {
      id: 3,
      text: "Task3",
      day: "2021-08-31",
      time: "10:20",
      reminder: true,
    },
    {
      id: 4,
      text: "Task4",
      day: "2021-08-31",
      time: "10:20",
      reminder: true,
    },
    {
      id: 5,
      text: "Task 5",
      day: "2021-08-31",
      time: "10:20",
      reminder: false,
    },
  ]);
  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="main">
      <div className="top-intro">
        <h1 className="page-title">Tasks App using ReactJS with Hooks</h1>
      </div>
      <div className="container">
        <Header
          title="My Tasks"
          onAddT={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          <div class="no-tasks">
            <img src={checklist} alt="No Tasks" className="checklist-img" />
            <p className="no-task-msg">No Tasks ... Start adding your tasks</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

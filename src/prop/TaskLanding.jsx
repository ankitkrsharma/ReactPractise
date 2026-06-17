import React, { createContext, useState } from "react";
import Dashboard from "./Dashboard";



export const AppContext = createContext();

export default function TaskLanding() {
  const [managerName] = useState("Ankit");

  const [tasks, setTasks] = useState([
    { id: 1, title: "JAVA", status: "Pending" },
    { id: 2, title: "JS", status: "In Progress" },
    { id: 3, title: "React", status: "Completed" },
    { id: 4, title: "C++", status: "Pending" }
  ]);

  const [selectedFilter, setSelectedFilter] = useState("All");
  const [newTask, setNewTask] = useState("");
  const [summaryCount, setSummaryCount] = useState(tasks.length);

  const addTask = () => {
    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      title: newTask,
      status: "Pending"
    };

    const updatedTasks = [...tasks, task];

    setTasks(updatedTasks);
    setSummaryCount(updatedTasks.length);
    setNewTask("");
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    );

    setTasks(updatedTasks);
    setSummaryCount(updatedTasks.length);
  };

  const updateStatus = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        if (task.status === "Pending") {
          return { ...task, status: "In Progress" };
        }

        if (task.status === "In Progress") {
          return { ...task, status: "Completed" };
        }
      }

      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <AppContext.Provider
      value={{
        managerName,
        summaryCount,
        tasks,
        selectedFilter,
        setSelectedFilter,
        deleteTask,
        updateStatus
      }}
    >
      <div>
        <h2>TaskFlow Dashboard</h2>

        <input
          type="text"
          placeholder="Enter Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <button onClick={addTask}>Add Task</button>

        <Dashboard />
      </div>
    </AppContext.Provider>
  );
}
import React, { useContext } from "react";
import { AppContext } from "./TaskLanding";
import TaskCard from "./TaskCard";

export default function TaskList() {
  const {
    tasks,
    selectedFilter
  } = useContext(AppContext);

  const filteredTasks =
    selectedFilter === "All"
      ? tasks
      : tasks.filter(
          (task) => task.status === selectedFilter
        );

  return (
    <div>
      <h3>Task List</h3>

      {filteredTasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          status={task.status}
        />
      ))}
    </div>
  );
}
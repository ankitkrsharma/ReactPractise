import React, { useContext } from "react";
import { AppContext } from "./TaskLanding";

export default function TaskCard({
  id,
  title,
  status
}) {
  const {
    deleteTask,
    updateStatus
  } = useContext(AppContext);

  return (
    <div>
      <p>Task: {title}</p>
      <p>Status: {status}</p>

      <button onClick={() => updateStatus(id)}>
        {status === "Pending"
          ? "Mark as In Progress"
          : status === "In Progress"
          ? "Mark as Completed"
          : "Completed"}
      </button>

      <button onClick={() => deleteTask(id)}>
        Delete
      </button>

      <hr />
    </div>
  );
}
import React, { useContext } from "react";
import { AppContext } from "./TaskLanding";

export default function TaskFilter() {
  const {
    selectedFilter,
    setSelectedFilter
  } = useContext(AppContext);

  return (
    <div>
      <h3>Current Filter: {selectedFilter}</h3>

      <button onClick={() => setSelectedFilter("All")}>
        All
      </button>

      <button onClick={() => setSelectedFilter("Pending")}>
        Pending
      </button>

      <button onClick={() => setSelectedFilter("In Progress")}>
        In Progress
      </button>

      <button onClick={() => setSelectedFilter("Completed")}>
        Completed
      </button>
    </div>
  );
}
import React from "react";
import WelcomeBanner from "./WelcomeBanner";
import TaskFilter from "./TaskFilter";
import TaskList from "./TaskList";

export default function Dashboard() {
  return (
    <div>
      <WelcomeBanner />
      <TaskFilter />
      <TaskList />
    </div>
  );
}   
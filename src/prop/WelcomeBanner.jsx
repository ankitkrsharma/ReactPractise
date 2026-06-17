import React, { useContext } from "react";
import { AppContext } from "./TaskLanding";

export default function WelcomeBanner() {
  const { managerName, summaryCount } =
    useContext(AppContext);

  return (
    <div>
      <h2>Welcome {managerName}</h2>
      <p>Total Tasks: {summaryCount}</p>
    </div>
  );
}
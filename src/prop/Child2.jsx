import React, { useContext } from "react";
import { AppContext } from "./Parent";

export default function Child2() {
  const { data, darkMode } = useContext(AppContext);

  return (
    <div className={`allchild child2 ${darkMode ? "dark" : "light"}`}>
      <h3>I am the Child2 component</h3>

      <p>Data received from App component: {data}</p>

      <p>
        Current Theme: {darkMode ? "Dark" : "Light"}
      </p>
    </div>
  );
}
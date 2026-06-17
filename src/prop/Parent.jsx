import React, { createContext, useState } from "react";
import Child from "./Child";
import "./Parent.css";

export const AppContext = createContext();

export default function Parent() {
  const [data, setData] = useState("Hello from App component");
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <AppContext.Provider value={{ data, darkMode }}>
      <div className={`allchild app ${darkMode ? "dark" : "light"}`}>
        <button onClick={toggleTheme}>
          Toggle Theme
        </button>

        <Child />
      </div>
    </AppContext.Provider>
  );
}
import React, { useRef, useState } from "react";

export default function App() {
  const colorRef = useRef();
  const [bgColor, setBgColor] = useState("white");

  const changeColor = () => {
    setBgColor(colorRef.current.value);
  };

  return (
    <div style={{ border: "3px solid black" , padding: "20px" }}>
      <input
        type="text"
        placeholder="Enter color"
        ref={colorRef}
      />

      <div
        style={{
          width: "300px",
          height: "80px",
          backgroundColor: bgColor,
          border: "2px solid black",
          marginTop: "20px",
        }}
      ></div>

      <button
        onClick={changeColor}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
        }}
      >
        Change BGC
      </button>
    </div>
  );
}
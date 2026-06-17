import React, { useState } from "react";
import RestaurantInfo from "./RestaurantInfo";

export default function FoodOrderApp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Online Food Order App</h2>

      <h3>Selected Items: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>

      <button
        onClick={() => setCount(count > 0 ? count - 1 : 0)}
      >
        -
      </button>

      <hr />

      <RestaurantInfo />
    </div>
  );
}
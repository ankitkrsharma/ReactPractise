import React, { useCallback, useState } from "react";
import Child from "./Child";
export default function Parent() {
  const [count, setCount] = useState(0);


  // Child component will re-render after clicking Increment Button Everytime
  // const handleClick = ()=> console.log("Clicked")







  // Child component will not re-render after clinking Increment Button
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}
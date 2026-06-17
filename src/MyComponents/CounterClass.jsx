import { useState } from "react";

function CounterFun(props) {
  // component available or not
  const [isCompAv, setIsCompAv] = useState(true);

  const handleCompAv = () => {
    setIsCompAv(!isCompAv);
  };

  // using function in useState
  const [count, setCount] = useState(() => {
    console.log("value is added");
    return 0;
  });

  const [message, setMessage] = useState("");

  // handle the string in input
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  // Function to increment count
  const handleIncrement = () => {
    setCount(count + 2);
  };

  // Function to decrement count
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>{props.Programtype}</div>
      <div>Count is {count}</div>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <input
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={handleChange}
      />

      <button onClick={handleCompAv}>
        {isCompAv ? "Click on Comp" : "No show"}
      </button>
    </>
  );
}

export default CounterFun;
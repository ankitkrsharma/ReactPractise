import { counterStore } from "./counterStore";

function MyCounter() {
  const { count, increment, decrement } = counterStore();

  const handlePlusClick = () => {
    increment();
  };

  const handleMinusClick = () => {
    decrement();
  };

  return (
    <>
      <div>Counter with Zustand</div>

      <div>Count is - {count}</div>

      <button onClick={handlePlusClick}>Plus +</button>

      <button onClick={handleMinusClick}>Minus -</button>
    </>
  );
}

export default MyCounter;
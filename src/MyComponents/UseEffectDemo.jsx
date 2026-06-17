import { useState, useEffect } from "react"
export const UseEffectDemo=() => {
    const[count, setCount] = useState(0)
    useEffect(() => {
        console.log("Run the useEffect", count)
        return() => {
            console.log("Cleanup", count)
        }
    }, [count])
    return (
      <>
        <h3>Count {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment the counter</button>
      </>
    )
}
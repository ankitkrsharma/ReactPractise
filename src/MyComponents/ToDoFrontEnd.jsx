import { useEffect, useState } from "react";

const ToDoFrontEnd = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [editInput, setEditInput] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:8080/tasks");
    const data = await response.json();
    setTasks(data);
  };

  const addTask = async () => {
    await fetch("http://localhost:8080/addtasks", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tasks: taskInput,
      }),
    });

    setTaskInput("");
    await fetchTasks();
  };



  const editTask = async () => {
    await fetch("https://localhost:8080/update", {
      method: "PUT", headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        tasks: taskInput,
      }),
    });



    setTaskInput("");
    setEditId(null);
    await fetchTasks();
  }

  return (
    <div>
      <h1>To Do List</h1>

      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />

      <button onClick={addTask}>
        Add Task
      </button>

      {tasks.map((task) => (
        <div key={task.id}>{task.id}-
          {task.tasks}
          <button onClick={()=>setEditId(task.id)}>x</button>
        </div>
      ))}


      {
        (editId)?<div> Edit Window 

          <form name="edit">
            <input id="edit" type ="text" value={editInput} onChange={(e)=>setEditInput(e.target.value)}>
            </input>
            <input type="submit" onClick={editTask}>
            </input>

          </form>
        </div>:<div></div>
      }




    </div>
  );
};

export default ToDoFrontEnd;
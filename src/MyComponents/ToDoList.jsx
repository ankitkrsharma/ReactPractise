import { useState } from "react";
import "./ToDoList.css";
export const ToDoList = () => {
    const [toDoItem, setToDoItem] = useState(
        [
            {
                taskID: 1,
                taskName: "Learn React"
            },
            {
                taskID: 2,
                taskName: "Learn JS"
            }


        ]


    );
    const [taskInput, setTaskInput] = useState("");
    const [taskEditInput, setTaskEditInput] = useState("");

    const [editID, setEditID] = useState(null);


    const addTask = () => {
        event.preventDefault()

        if (taskInput.trim() === "") return;

        const newTask = {
            taskID: toDoItem.length + 1,
            taskName: taskInput,
        };
        console.log(taskInput);

        setToDoItem([...toDoItem, newTask]);
        setTaskInput("");
    };

    const deleteTask = (id) => {
        setToDoItem(
            toDoItem.filter((task) => task.taskID !== id)
        );
    };

    const editTask = () => {


        if (taskEditInput.trim() === "") return


        setToDoItem(
            toDoItem.map((item) => ((item.taskID === editID) ? { ...item, taskName: taskEditInput } : item))
        )

        setTaskEditInput("");
        setEditID(null)
    }







    return (
        <>
            <div className="todo-container">
                <h1 className="todo-title">To Do List</h1>

                {toDoItem.map((item) => {
                    return (
                        <div key={item.taskID} className="task-item">
                            <span>
                                {item.taskID} - {item.taskName}
                            </span>

                            <div className="btn-group">
                                <button
                                    className="edit-btn"
                                    onClick={() => setEditID(item.taskID)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() => deleteTask(item.taskID)}
                                >
                                    X
                                </button>
                            </div>
                        </div>
                    );
                })}

                <form id="form">
                    <div className="add-task-box">
                        <p className="section-title">Add New Task</p>

                        <label htmlFor="task">Enter Here</label>

                        <input
                            className="input-field"
                            type="text"
                            id="task"
                            value={taskInput}
                            onChange={(e) => setTaskInput(e.target.value)}
                        />

                        <input
                            className="submit-btn"
                            type="submit"
                            onClick={addTask}
                        />
                    </div>
                </form>

                {editID ? (
                    <div className="edit-box">
                        <p>Edit Enabled for Task {editID}</p>

                        <label htmlFor="edit">Edit Here</label>

                        <input
                            className="input-field"
                            id="edit"
                            type="text"
                            onChange={(e) => setTaskEditInput(e.target.value)}
                        />

                        <input
                            className="submit-btn"
                            type="submit"
                            onClick={editTask}
                        />
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </>
    );
}
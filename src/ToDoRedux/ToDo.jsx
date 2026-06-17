import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addTodo,
  deleteTodo,
  updateTodo,
} from "./Action";

export default function Todo() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
    if (text === "") return;

    if (editId) {
      dispatch(updateTodo(editId, text));
      setEditId(null);
    } else {
      dispatch(addTodo(text));
    }

    setText("");
  };

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setText(todo.text);
  };

  return (
    <div className="container">
      <h1>TO-DO LIST</h1>

      <input
        type="text"
        placeholder="Enter Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editId ? "Update" : "Add"}
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}

            <button onClick={() => handleEdit(todo)}>
              Edit
            </button>

            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
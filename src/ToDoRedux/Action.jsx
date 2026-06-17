export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
 const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: text,
  };
};

 const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

 const updateTodo = (id, text) => {
  return {
    type: UPDATE_TODO,
    payload: {
      id,
      text,
    },
  };
};
export {addTodo,deleteTodo,updateTodo};
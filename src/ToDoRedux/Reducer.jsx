import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from "./Action";

const initialState = {
  todos: [],
};

const reducer = (
  state = initialState,
  action
) => {

  switch (action.type) {

    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
          },
        ],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(
          (todo) =>
            todo.id !== action.payload
        ),
      };

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(
          (todo) =>
            todo.id === action.payload.id
              ? {
                  ...todo,
                  text:
                    action.payload.text,
                }
              : todo
        ),
      };

    default:
      return state;
  }
};

export default reducer;
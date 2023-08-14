import todoReducer from "./todo.reducer";

describe("todoReducer", () => {
  const initialState = {
    todos: []
  };

  it("should return the initial state when no action is provided", () => {
    expect(todoReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle ADD_TODO action", () => {
    const newTodo = {
      id: 1,
      text: "Finish reading the book"
    };
    const action = {
      type: "ADD_TODO",
      payload: newTodo
    };
    const expectedState = {
      todos: [{ id: 1, text: "Finish reading the book", completed: false }]
    };
    expect(todoReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle TOGGLE_TODO action", () => {
    const initialStateWithTodo = {
      todos: [{ id: 1, text: "Finish reading the book", completed: false }]
    };
    const action = {
      type: "TOGGLE_TODO",
      payload: { id: 1 }
    };
    const expectedState = {
      todos: [{ id: 1, text: "Finish reading the book", completed: true }]
    };
    expect(todoReducer(initialStateWithTodo, action)).toEqual(expectedState);
  });

  it("should not modify state when toggling a non-existent todo", () => {
    const initialStateWithTodo = {
      todos: [{ id: 1, text: "Finish reading the book", completed: false }]
    };
    const action = {
      type: "TOGGLE_TODO",
      payload: { id: 2 }
    };
    expect(todoReducer(initialStateWithTodo, action)).toEqual(
      initialStateWithTodo
    );
  });
});

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  text: string;
}

interface TodosState {
  list: Todo[];
}

const initialState: TodosState = { list: [] };

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.list.push({ id: Date.now(), text: action.payload });
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;

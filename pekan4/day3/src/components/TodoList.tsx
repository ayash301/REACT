import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../features/todos/todosSlice";
import { RootState, AppDispatch } from "../app/store";

const TodoList: React.FC = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state: RootState) => state.todos.list);
  const dispatch: AppDispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div className="text-center p-5">
      <h2 className="text-2xl mb-3">Todo List</h2>
      <div className="mb-3">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tambah todo..."
          className="border px-2 py-1 rounded"
        />
        <button
          onClick={handleAdd}
          className="ml-2 px-3 py-1 bg-indigo-500 text-white rounded"
        >
          Tambah
        </button>
      </div>
      <ul className="list-disc list-inside">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-center items-center gap-2">
            {todo.text}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-red-500"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

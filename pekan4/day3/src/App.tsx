import React from "react";
import Counter from "./components/Counter";
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import "./App.css";

const App: React.FC = () => {
 return (
  <div className="container">
    <h1>Evaluasi</h1>
    <section>
      <Counter />
    </section>
    <section>
      <TodoList />
    </section>
    <section>
      <UserList />
    </section>
  </div>
);
}

export default App;

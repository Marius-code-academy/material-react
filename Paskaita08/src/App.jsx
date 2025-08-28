import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoContainer from "./components/TodoContainer/TodoContainer";
import TodoFooter from "./components/TodoFooter/TodoFooter";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function toggleTodo(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        const updatedTodoObject = {
          ...todo,
          isCompleted: !todo.isCompleted,
        };

        return updatedTodoObject;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  function removeTodos(ids) {
    setTodos(todos.filter((todo) => !ids.includes(todo.id)));
  }

  function clearCompleted() {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  }

  const sortedTodos = todos.toSorted((a, b) => a.isCompleted - b.isCompleted);
  const leftCount = todos.filter((todo) => !todo.isCompleted).length;

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <TodoContainer todos={sortedTodos} toggleTodo={toggleTodo} removeTodos={removeTodos} />
      <TodoFooter leftCount={leftCount} clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;

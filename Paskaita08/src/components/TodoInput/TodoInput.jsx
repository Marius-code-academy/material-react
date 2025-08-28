import { useState } from "react";

function TodoInput({ addTodo }) {
  const [todoValue, setTodoValue] = useState("");

  function handleAdd() {
    const newTodo = {
      text: todoValue,
      isCompleted: false,
      id: Date.now(),
    };

    addTodo(newTodo);
    setTodoValue("");
  }

  return (
    <div>
      <input type="text" value={todoValue} onChange={(e) => setTodoValue(e.target.value)} />
      <button disabled={todoValue.length === 0} onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default TodoInput;

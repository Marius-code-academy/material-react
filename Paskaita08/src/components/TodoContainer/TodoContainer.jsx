function TodoContainer({ todos, toggleTodo, removeTodos }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input onChange={() => toggleTodo(todo.id)} type="checkbox" value={todo.isCompleted} />
          <span>{todo.text}</span>
          <button onClick={() => removeTodos([todo.id])}>X</button>
        </div>
      ))}
    </div>
  );
}

export default TodoContainer;

function TodoFooter({ leftCount, clearCompleted }) {
  return (
    <div>
      <p>{leftCount} tasks left</p>
      <button onClick={clearCompleted}>Clear completed</button>
    </div>
  );
}

export default TodoFooter;

import TodoItem from "./TodoItem";

function TodoList({ items }) {
  const Items = items.map((item) => <TodoItem key={item.id} item={item} />);

  // Safeguards
  if (items.length === 0) return <p>No items to show...</p>;

  return <ul className="todo-list">{Items}</ul>;
}

export default TodoList;

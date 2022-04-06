import TodoItem from "./TodoItem";

function TodoList({ list }) {
  const TodoItems = list.map((item) => <TodoItem key={item.id} item={item} />);

  // Safeguards
  if (list.length === 0) return <p>No items to show...</p>;

  return <ul className="todo-list">{TodoItems}</ul>;
}

export default TodoList;

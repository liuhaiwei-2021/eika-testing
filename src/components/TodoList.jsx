//file packages
import TodoItem from "./TodoItem";

export default function TodoList({ items }) {
	//properties
	const Items = items.map((item) => <TodoItem key={item.id} item={item} />);

	// Safeguards
	if (items.length === 0) return <p>No items to show...</p>;

	return <ul className="todo-list">{Items}</ul>;
}

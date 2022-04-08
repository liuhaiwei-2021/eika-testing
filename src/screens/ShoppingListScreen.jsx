//NPM packages
import { useState, useContext } from "react";

import { TodosContext } from "../states/TodosContext";
import TodoList from "../components/TodoList";
import Sorter from "../components/Sorter";

export default function ShoppingListScreen({ setShowModal }) {
	//properties
	const { list } = useContext(TodosContext);
	const completedItems = list.filter((item) => item.completed === true);
	const unCompletedItems = list.filter((item) => item.completed === false);

	//local state
	const [showCompleted, setShowCompleted] = useState(false);

	//properties
	const toggleLabel = showCompleted ? "Hide" : "View";

	return (
		<div className="shopping-list" data-testid="shopping-list">
			<h1>Shopping List</h1>
			<Sorter />
			<TodoList items={unCompletedItems} />

			<button className="btn-add" onClick={() => setShowModal(true)}>
				Add a new item
			</button>

			<button className="toggle" onClick={() => setShowCompleted(!showCompleted)}>
				{/*  UI # Add a  new task button  should rendered */}
				<div className="toggle-icon" data-testid="toggle-icon">
					<img src={`/assets/icons/${toggleLabel}.svg`} alt="icon" />
				</div>
				{toggleLabel} completed items
			</button>

			{showCompleted && <TodoList items={completedItems} />}
		</div>
	);
}

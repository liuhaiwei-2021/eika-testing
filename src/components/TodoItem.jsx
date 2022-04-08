import { useState, useContext } from "react";

import { TodosContext } from "../states/TodosContext";

function TodoItem({ item }) {
	const { toggleCompleted } = useContext(TodosContext);

	const { id, name, price, completed, imageURL } = item;
	const [checked, setChecked] = useState(false);

	return (
		<li className={item.completed ? "completed" : "uncompleted"}>
			<div className="item-check-name">
				<input
					className="item-check"
					checked={completed}
					onChange={() => setChecked(!checked)}
					onClick={() => toggleCompleted(id)}
					type="checkbox"
				/>
				<span data-testid="item" className="item-name">
					{name}
				</span>
			</div>

			<div className="item-price-img">
				<span className="item-price">{price}:-</span>
				<img className="item-img" src={imageURL} alt="item-img" />
			</div>
		</li>
	);
}

export default TodoItem;

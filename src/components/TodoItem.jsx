//NPM packages
import { useState, useContext } from "react";
// file packages
import { TodosContext } from "../states/TodosContext";

export default function TodoItem({ item }) {
	//properties
	const { toggleCompleted } = useContext(TodosContext);
	const { id, name, price, completed, imageURL } = item;

	//local state
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

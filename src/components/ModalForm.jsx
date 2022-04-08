// NPM packges
import { useState, useContext } from "react";

import form from "../data/form.json";
import validateName from "../scripts/validateName";
import validatePrice from "../scripts/validatePrice";
import { TodosContext } from "../states/TodosContext";
import InputField from "./InputField";

export default function ModalForm({ modalState }) {
	const { addItem } = useContext(TodosContext);
	//local state
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [showModal, setShowModal] = modalState;

	if (showModal === false) return null;

	//Methods
	function onSubmit(e) {
		e.preventDefault();

		addItem(name, price);
		setShowModal(false);
	}

	function resetForm() {
		setName("");
		setPrice("");
		setShowModal(false);
	}

	return (
		<div className="modal" data-testid="modal-form">
			<form className="modal-content" onSubmit={(e) => onSubmit(e)}>
				<h2>Create an item</h2>
				<InputField
					settings={form.name}
					state={[name, setName]}
					validation={validateName}
				/>
				<InputField
					settings={form.price}
					state={[price, setPrice]}
					validation={validatePrice}
				/>

				<button className="btn-add" data-testid="create-btn">
					Submit
				</button>
				<button className="btn-cancel" onClick={resetForm}>
					Cancel
				</button>
			</form>
		</div>
	);
}

// NPM packges
import { useState, useContext } from "react";

import { TodosContext } from "../states/TodosContext";

export default function ModalForm({ modalState }) {
  const { addItem } = useContext(TodosContext);
  //local state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [showModal, setShowModal] = modalState;

  //safeguard
  if (showModal === false) return null;

  //Methods
  function onSubmit(e) {
    e.preventDefault();
    addItem(name, price);
    setName("");
    setPrice("");
    setShowModal(false);
  }

  return (
    <div className="modal">
      <form className="modal-content" onSubmit={(e) => onSubmit(e)}>
        <h2>Create an item</h2>

        <label htmlFor="name">Name</label>
        <input
          className="name"
          type="text"
          placeholder="EX: Chair"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="price">Price</label>
        <input
          className="price"
          type="number"
          placeholder="EX: 599"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button className="btn-add">Create</button>
        <button className="btn-cancel" onClick={() => setShowModal(false)}>
          Cancel
        </button>
      </form>
    </div>
  );
}

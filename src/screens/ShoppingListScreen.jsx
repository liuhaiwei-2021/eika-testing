import { useState } from "react";

import TodoList from "../components/TodoList";
import Sorter from "../components/Sorter";

function ShoppingListScreen({ list, setList, setShowModal, toggleCompleted }) {
  const completedItems = list.filter((item) => item.completed === true);
  const unCompletedItems = list.filter((item) => item.completed === false);
  const [showCompleted, setShowCompleted] = useState(false);
  const toggleLabel = showCompleted ? "Hide" : "View";

  return (
    <div className="shopping-list">
      <h1>Shopping List</h1>

      <Sorter list={list} setList={setList} />
      <TodoList list={unCompletedItems} toggleCompleted={toggleCompleted} />

      <button className="btn-add" onClick={() => setShowModal(true)}>
        Add a new item
      </button>
      <button onClick={() => setShowCompleted(!showCompleted)}>
        {toggleLabel} completed items
      </button>
      {showCompleted && (
        <TodoList list={completedItems} toggleCompleted={toggleCompleted} />
      )}
    </div>
  );
}

export default ShoppingListScreen;

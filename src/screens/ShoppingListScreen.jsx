import { useState, useContext } from "react";

import { TodosContext } from "../states/TodosContext";
import TodoList from "../components/TodoList";
import Sorter from "../components/Sorter";

function ShoppingListScreen({ setShowModal }) {
  const { list } = useContext(TodosContext);

  const completedItems = list.filter((item) => item.completed === true);
  const unCompletedItems = list.filter((item) => item.completed === false);

  const [showCompleted, setShowCompleted] = useState(false);
  const toggleLabel = showCompleted ? "Hide" : "View";

  return (
    <div className="shopping-list">
      <h1>Shopping List</h1>
      <Sorter />
      <TodoList items={unCompletedItems} />

      <button className="btn-add" onClick={() => setShowModal(true)}>
        Add a new item
      </button>

      <button onClick={() => setShowCompleted(!showCompleted)}>
        {toggleLabel} completed items
      </button>

      {showCompleted && <TodoList items={completedItems} />}
    </div>
  );
}

export default ShoppingListScreen;

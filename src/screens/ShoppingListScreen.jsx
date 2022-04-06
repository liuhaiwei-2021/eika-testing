import TodoList from "../components/TodoList";
import Sorter from "../components/Sorter";

function ShoppingListScreen({ list, setShowModal }) {
  const completedItems = list.filter((item) => item.isCompleted === true);
  const unCompletedItems = list.filter((item) => item.isCompleted === false);
  console.log(completedItems);
  return (
    <div className="shopping-list">
      <h1>Shopping List</h1>

      <Sorter />
      <TodoList list={unCompletedItems} />

      <button className="btn-add" onClick={() => setShowModal(true)}>
        Add a new item
      </button>

      <TodoList list={completedItems} />
    </div>
  );
}

export default ShoppingListScreen;

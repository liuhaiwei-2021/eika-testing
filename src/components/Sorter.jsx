import { useContext } from "react";

import { TodosContext } from "../states/TodosContext";

function Sorter() {
  const { list, updateList } = useContext(TodosContext);
  // Methods
  function sortByName() {
    const clonedList = [...list];
    const sortedList = clonedList.sort((a, b) => {
      const productA = a.name.toUpperCase();
      const productB = b.name.toUpperCase();

      return productA > productB ? 1 : -1;
    });

    updateList(sortedList);
  }

  function sortByPrice() {
    const clonedList = [...list];
    clonedList.sort((a, b) => a.price - b.price);
    updateList(clonedList);
  }
  return (
    <div className="sort">
      <span>SortBy:</span>
      <button onClick={sortByName}>Name</button>
      <button onClick={sortByPrice}>Price</button>
    </div>
  );
}

export default Sorter;

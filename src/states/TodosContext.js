import { createContext, useState, useEffect } from "react";
export const TodosContext = createContext();

const TodosContextProvider = (props) => {
  const [list, setList] = useState([]);
  // Properties
  const storageKey = "todo-list";

  // Methods

  function loadData() {
    const rawData = localStorage.getItem(storageKey);
    const parsedData = JSON.parse(rawData) || [];

    updateList(parsedData);
  }

  function saveData() {
    const data = JSON.stringify(list);
    localStorage.setItem(storageKey, data);
  }
  useEffect(() => loadData(), []);
  useEffect(() => saveData(), [list]);

  function addItem(name, price) {
    const newItem = {
      id: list.length,
      name: name,
      price: price,
      imageURL: "/assets/images/image-default.svg",
      completed: false,
    };

    setList([...list, newItem]);
  }

  const updateList = (newList) => {
    setList(newList);
  };

  // toggle item completed property
  const toggleCompleted = (id) => {
    let newList = list.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
        return item;
      } else {
        return item;
      }
    });
    setList(newList);
  };

  const values = { list, addItem, updateList, toggleCompleted };

  return <TodosContext.Provider value={values}>{props.children}</TodosContext.Provider>;
};

export default TodosContextProvider;

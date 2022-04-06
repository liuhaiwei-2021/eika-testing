//NPM packages
import { useEffect, useState } from "react";

//project files
import ModalForm from "./components/ModalForm";
import WelcomeScreen from "./screens/WelcomeScreen";
import ShoppingListScreen from "./screens/ShoppingListScreen";
import "./App.css";

function App() {
  //local state
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Properties
  const storageKey = "todo-list";

  // Methods
  useEffect(() => loadData(storageKey, setList), []);
  useEffect(() => saveData(storageKey, list), [list]);

  function loadData(key, setter) {
    const rawData = localStorage.getItem(key);
    const parsedData = JSON.parse(rawData) || [];

    setter(parsedData);
  }

  function saveData(key, getter) {
    const data = JSON.stringify(getter);
    localStorage.setItem(key, data);
  }

  function onAddItem(name, price) {
    const newItem = {
      id: list.length,
      name: name,
      price: price,
      imageURL: "",
      isCompleted: false,
    };

    setList([...list, newItem]);
  }

  return (
    <div className="App">
      <div className="content">
        {list.length === 0 && <WelcomeScreen setShowModal={setShowModal} />}
        {list.length > 0 && (
          <ShoppingListScreen list={list} setShowModal={setShowModal} />
        )}

        <ModalForm
          modalState={[showModal, setShowModal]}
          onAddItem={onAddItem}
        />
      </div>
    </div>
  );
}

export default App;

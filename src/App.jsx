//NPM packages
import { useState, useContext } from "react";

//project files
import ModalForm from "./components/ModalForm";
import WelcomeScreen from "./screens/WelcomeScreen";
import ShoppingListScreen from "./screens/ShoppingListScreen";
import { TodosContext } from "./states/TodosContext";
import "./App.css";
import Header from "./components/Header";

function App() {
	//local state
	const { list } = useContext(TodosContext);
	const [showModal, setShowModal] = useState(false);

	return (
		<div className="App">
			<Header />
			<div className="content">
				{list.length === 0 && <WelcomeScreen setShowModal={setShowModal} />}
				{list.length > 0 && <ShoppingListScreen setShowModal={setShowModal} />}

				<ModalForm modalState={[showModal, setShowModal]} />
			</div>
		</div>
	);
}

export default App;

//NPM packages
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
//file packages
import { TodosContext } from "../states/TodosContext";
import ShoppingListScreen from "./ShoppingListScreen";

test("#6 toggle button should be rendered", () => {
	//Arrange
	const list = [
		{
			id: 1,
			name: name,
			price: 100,
			imageURL: "",
			completed: false,
		},
		{
			id: 1,
			name: name,
			price: 100,
			imageURL: "",
			completed: true,
		},
	];
	render(
		<TodosContext.Provider value={{ list }}>
			<ShoppingListScreen />
		</TodosContext.Provider>
	);
	//Act
	const buttonElement = screen.getByTestId("toggle-icon");
	//Assert
	expect(buttonElement).toBeInTheDocument();
});

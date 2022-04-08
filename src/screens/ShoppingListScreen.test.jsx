import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TodosContext } from "../states/TodosContext";

import ShoppingListScreen from "./ShoppingListScreen";

test("toggle button should be rendered", () => {
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
	const buttonElement = screen.getByTestId("toggle-icon");
	expect(buttonElement).toBeInTheDocument();
});

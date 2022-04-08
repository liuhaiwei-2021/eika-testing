//NPM packages
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
//file packages
import { TodosContext } from "./states/TodosContext";
import App from "./App";

test("header should be rendered", () => {
	//Arrange
	const list = [];
	render(
		<TodosContext.Provider value={{ list }}>
			<App />
		</TodosContext.Provider>
	);
	//Act
	const headerElement = screen.getByTestId("header");
	//Assert
	expect(headerElement).toBeInTheDocument();
});

test("welcome screen should be render if list.length is 0", () => {
	const list = [];
	render(
		<TodosContext.Provider value={{ list }}>
			<App />
		</TodosContext.Provider>
	);
	const welcomeElement = screen.getByTestId("welcome");
	expect(welcomeElement).toBeInTheDocument();
});

test("shopping list screen  should be render if list.length more than 0", () => {
	//Arrange
	const list = [
		{
			id: 1,
			name: name,
			price: 100,
			imageURL: "",
			completed: false,
		},
	];
	render(
		<TodosContext.Provider value={{ list }}>
			<App />
		</TodosContext.Provider>
	);
	//Act
	const shoppingElement = screen.getByTestId("shopping-list");
	//Assert
	expect(shoppingElement).toBeInTheDocument();
});

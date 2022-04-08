//NPM Packages
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
//file packages
import { TodosContext } from "../states/TodosContext";
import WelcomeScreen from "./WelcomeScreen";

test("#4 illustration should be rendered", () => {
	//Arrange
	const list = [];
	render(
		<TodosContext.Provider value={{ list }}>
			<WelcomeScreen />
		</TodosContext.Provider>
	);
	//Act
	const imgElement = screen.getByRole("illustration");
	//Assert
	expect(imgElement).toBeInTheDocument();
});

test("#5 create a task button  should rendered ", () => {
	//Arrange
	const list = [];
	render(
		<TodosContext.Provider value={{ list }}>
			<WelcomeScreen />
		</TodosContext.Provider>
	);
	//Act
	const buttonElement = screen.getByText(/Add a new task/i);
	//Assert
	expect(buttonElement).toBeInTheDocument();
});

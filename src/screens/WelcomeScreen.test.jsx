import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TodosContext } from "../states/TodosContext";

import WelcomeScreen from "./WelcomeScreen";

test("illustration should be rendered", () => {
	const list = [];
	render(
		<TodosContext.Provider value={{ list }}>
			<WelcomeScreen />
		</TodosContext.Provider>
	);
	const imgElement = screen.getByRole("illustration");
	expect(imgElement).toBeInTheDocument();
});

test("click create a task button  should open the modal form ", () => {
	const list = [];

	render(
		<TodosContext.Provider value={{ list }}>
			<WelcomeScreen />
		</TodosContext.Provider>
	);
	const buttonElement = screen.getByText(/Add a new task/i);

	expect(buttonElement).toBeInTheDocument();
});

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

test("create a task button  should rendered ", () => {
	const list = [];
	render(
		<TodosContext.Provider value={{ list }}>
			<WelcomeScreen />
		</TodosContext.Provider>
	);

	const buttonElement = screen.getByText(/Add a new task/i);

	expect(buttonElement).toBeInTheDocument();
});

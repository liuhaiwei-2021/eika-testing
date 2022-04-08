import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TodosContext } from "../states/TodosContext";

import ModalForm from "./ModalForm";

test("create button should be rendered", () => {
	const addItem = jest.fn();
	const modalState = [true, () => {}];
	render(
		<TodosContext.Provider value={{ addItem }}>
			<ModalForm modalState={modalState} />
		</TodosContext.Provider>
	);
	const buttonElement = screen.getByTestId("create-btn");
	fireEvent.click(buttonElement);
	expect(buttonElement).toBeInTheDocument();
});

test("modalState is true modalform should be rendered", () => {
	const addItem = jest.fn();
	const modalState = [true, () => {}];
	render(
		<TodosContext.Provider value={{ addItem }}>
			<ModalForm modalState={modalState} />
		</TodosContext.Provider>
	);
	const buttonElement = screen.getByTestId("create-btn");
	expect(buttonElement).toBeInTheDocument();
});

test("modalState is false modalform should be rendered", () => {
	const addItem = jest.fn();
	const modalState = [false, () => {}];
	render(
		<TodosContext.Provider value={{ addItem }}>
			<ModalForm modalState={modalState} />
		</TodosContext.Provider>
	);
	const buttonElement = screen.queryByText("submit");
	expect(buttonElement).not.toBeInTheDocument();
});

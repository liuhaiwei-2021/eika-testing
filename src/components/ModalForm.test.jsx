import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TodosContext } from "../states/TodosContext";

import ModalForm from "./ModalForm";

test("#7 modalState is true modalform should be rendered", () => {
	//Arrange
	const addItem = jest.fn();
	const modalState = [true, () => {}];
	render(
		<TodosContext.Provider value={{ addItem }}>
			<ModalForm modalState={modalState} />
		</TodosContext.Provider>
	);
	//Act
	const formElement = screen.getByTestId("modal-form");
	//Assert
	expect(formElement).toBeInTheDocument();
});

test("#8 modalState is false modalform should not be rendered", () => {
	//Arrange
	const addItem = jest.fn();
	const modalState = [false, () => {}];
	render(
		<TodosContext.Provider value={{ addItem }}>
			<ModalForm modalState={modalState} />
		</TodosContext.Provider>
	);
	//Act
	const formElement = screen.getByTestId("modal-form");
	//Assert
	expect(formElement).not.toBeInTheDocument();
});

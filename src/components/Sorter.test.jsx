//NPM packages
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
//file packages
import { TodosContext } from "../states/TodosContext";
import Sorter from "./Sorter";

test("#9 SortBy element should be rendered", () => {
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
	const updateList = jest.fn();
	render(
		<TodosContext.Provider value={{ list, updateList }}>
			<Sorter />
		</TodosContext.Provider>
	);
	//Act
	const sortByElement = screen.getByText(/SortBy:/i);
	//Assert
	expect(sortByElement).toBeInTheDocument();
});

test("#10 Click name button should call updateList", () => {
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
	const updateList = jest.fn();

	render(
		<TodosContext.Provider value={{ list, updateList }}>
			<Sorter />
		</TodosContext.Provider>
	);
	//Act
	const sortByNameButton = screen.getByText(/name/i);
	fireEvent.click(sortByNameButton);
	//Assert
	expect(updateList).toBeCalled();
});

import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TodosContext } from "../states/TodosContext";
import Sorter from "./Sorter";

test("SortBy element should be rendered", () => {
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
	const sortByElement = screen.getByText(/SortBy:/i);
	expect(sortByElement).toBeInTheDocument();
});

test("Click name button should call updateList", () => {
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
	const sortByNameButton = screen.getByText(/name/i);
	fireEvent.click(sortByNameButton);
	expect(updateList).toBeCalled();
});

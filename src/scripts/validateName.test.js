// Project files
import validateName from "./validateName";

test("Should pass if everything is ok", () => {
	// Arrange
	const testValidName = "table";
	const resultData = "table";
	const resultError = "";

	// Act
	const validation = validateName(testValidName);

	// Assert
	expect(validation.data).toBe(resultData);
	expect(validation.error).toBe(resultError);
});

test("Should fail if text is empty", () => {
	// Arrange
	const testOneEmptySpace = "";
	const resultData = "";
	const resultError = "The product name must not be empty";

	// Act
	const validation = validateName(testOneEmptySpace);

	// Assert
	expect(validation.data).toBe(resultData);
	expect(validation.error).toBe(resultError);
});

test("Should fail if we send multiple invisible spaces", () => {
	// Arrange
	const testMutipleEmptySpaces = "   ";
	const resultData = "";
	const resultError = "The product name must not be empty";

	// Act
	const validation = validateName(testMutipleEmptySpaces);

	// Assert
	expect(validation.data).toBe(resultData);
	expect(validation.error).toBe(resultError);
});

test("Should pass if send a text with empty spaces on the side", () => {
	// Arrange
	const testValidNameWith3Spaces = "   table   ";
	const resultData = "table";
	const resultError = "";

	// Act
	const validation = validateName(testValidNameWith3Spaces);

	// Assert
	expect(validation.data).toBe(resultData);
	expect(validation.error).toBe(resultError);
});

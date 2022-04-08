// Project files
import validatePrice from "./validatePrice";

test("Should fail if text is empty", () => {
  // Arrange
  const testEmptyText = "";
  const resultData = "";
  const resultError = "The price must cost more than 0";

  // Act
  const validation = validatePrice(testEmptyText);

  // Assert
  expect(validation.data).toBe(resultData);
  expect(validation.error).toBe(resultError);
});

test("Should fail if price is 0 because no product cost 0", () => {
  // Arrange (setup)
  const testPriceZero = "0";
  const resultData = "";
  const resultError = "The price must cost more than 0";

  // Act (action)
  const validation = validatePrice(testPriceZero);

  // Assert (confirmation)
  expect(validation.data).toBe(resultData);
  expect(validation.error).toBe(resultError);
});

test("Should fail if price is negative because products should cost more than 1", () => {
  // Arrange
  const testNegativePrice = "-1";
  const resultData = "";
  const resultError = "The price must cost more than 0";

  // Act
  const validation = validatePrice(testNegativePrice);

  // Assert
  expect(validation.data).toBe(resultData);
  expect(validation.error).toBe(resultError);
});

// Should pass if you send a positive price
test("Should pass if you send a positive price", () => {
  // Arrange
  const testCorrectPrice = "499";
  const resultData = 499;
  const resultError = "";

  // Act
  const validation = validatePrice(testCorrectPrice);

  // Assert
  expect(validation.data).toBe(resultData);
  expect(validation.error).toBe(resultError);
});


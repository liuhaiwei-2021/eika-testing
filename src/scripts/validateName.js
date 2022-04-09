export default function validateName(string) {
	const parsedString = string.trim();
	//logic #4 Should pass if send a text with empty spaces on the side
	const validation = parsedString.length > 0;

	const data = validation ? parsedString : "";
	const error = validation ? "" : "The product name must not be empty";
	// logic #2 Should fail if text is empty
	//logic #3 Should fail if we send multiple invisible spaces

	return { data: data, error: error };
}
// logic #1 Should pass if everything is ok

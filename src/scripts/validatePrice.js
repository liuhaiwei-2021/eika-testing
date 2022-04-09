export default function validatePrice(number) {
	const parseNumber = Number(number.trim());
	const validation = parseNumber > 0;

	const data = validation ? parseNumber : "";
	const error = validation ? "" : "The price must cost more than 0";
	//logic #5 Should fail if text is empty
	//logic #6 Should fail if price is 0 because no product cost 0
	//logic #7 Should fail if price is negative because products
	return { data: data, error: error };
}

//logic #8 Should pass if you send a positive price

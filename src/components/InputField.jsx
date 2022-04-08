//NPM packages
import { useState } from "react";

export default function InputField({ settings, state, validation }) {
	const { autoFocus, label, max, min, placeholder, required, type } = settings;
	const [getter, setter] = state;

	// Local state
	const [errorMessage, setErrorMessage] = useState("");

	// Methods
	function onValidate(callback, setState, setError) {
		// Safeguard
		if (callback === undefined) return;

		const result = callback(getter);

		setState(result.data);
		setError(result.error);
	}

	return (
		<label className="input-field">
			{label}
			<input
				autoFocus={autoFocus}
				onBlur={() => onValidate(validation, setter, setErrorMessage)}
				onChange={(event) => setter(event.target.value)}
				max={max}
				min={min}
				placeholder={placeholder}
				required={required}
				type={type}
				value={getter}
			/>
			<small className="error">{errorMessage}</small>
		</label>
	);
}

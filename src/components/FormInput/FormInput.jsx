import { useState } from 'react';
import './FormInput.scss';

const FormInput = (props) => {
	// Notice I'm using `useState` at a minimum and deriving other variables based on the state to keep things simple
	const inputValue = props.value;
	const [inputTouched, setInputTouched] = useState(false);
	const inputIsValid = inputValue.trim() !== '';
	const inputIsInvalid = !inputIsValid && inputTouched;

	const handleBlur = () => {
		setInputTouched(true);
	}

	const handleFocus = () => {
		setInputTouched(false);
	}

	return (
		<>
			<div className="form-input">
				<label className="form-input__label" htmlFor={props.id}>{props.label}</label>
				<input
					className="form-input__field"
					id={props.id}
					name={props.id}
					onBlur={handleBlur}
					onChange={props.onChange}
					onFocus={handleFocus}
					type={props.type}
					value={inputValue}
				/>
			</div>
			{inputIsInvalid && <p className="form-input__error">Please enter a {props.id}</p>}
		</>
	)
}

export default FormInput;

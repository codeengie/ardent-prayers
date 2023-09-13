import { useState } from 'react';
import './FormInput.scss';

const FormInput = (props) => {
	const [inputValue, setInputValue] = useState('');
	const [inputTouched, setInputTouched] = useState(false);
	const inputIsValid = inputValue.trim() !== '';
	const inputIsInvalid = !inputIsValid && inputTouched;

	const handleBlur = () => {
		setInputTouched(true);
	}

	const handleChange = event => {
		setInputValue(event.target.value);
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
					onBlur={handleBlur}
					onChange={handleChange}
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

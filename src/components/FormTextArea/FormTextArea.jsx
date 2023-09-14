import { useState } from 'react';
import './FormTextArea.scss';

const FormTextArea = (props) => {
	const [boxValue, setBoxValue] = useState('');
	const [boxTouched, setBoxTouched] = useState(false);
	const boxIsValid = boxValue.trim() !== '';
	const boxIsInvalid = !boxIsValid && boxTouched;
	const [boxCounter, setBoxCounter] = useState(0);

	const handleBlur = () => {
		setBoxTouched(true);
	}

	const handleChange = event => {
		let boxValue = event.target.value;

		setBoxValue(boxValue);
		setBoxCounter(boxValue.length);
	}

	const handleFocus = () => {
		setBoxTouched(false);
	}

	return (
		<>
			<div className="form-textarea">
				<label className="form-textarea__label" htmlFor={props.id}>{props.label}</label>
				<textarea
					className="form-textarea__box"
					id={props.id}
					maxLength={props.maxCount}
					onBlur={handleBlur}
					onChange={handleChange}
					onFocus={handleFocus}
					value={boxValue}>
				</textarea>
				<div className="form-textarea__counter">{`${boxCounter}/${props.maxCount}`}</div>
			</div>
			{boxIsInvalid && <p className="form-textarea__error">Please enter a message</p>}
		</>
	)
}

export default FormTextArea;

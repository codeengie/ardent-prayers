import { useState } from 'react';
import './FormTextArea.scss';

const FormTextArea = (props) => {
	const boxValue = props.value;
	const [boxTouched, setBoxTouched] = useState(false);
	const boxIsValid = boxValue.trim() !== '';
	const boxIsInvalid = !boxIsValid && boxTouched;

	const handleBlur = () => {
		setBoxTouched(true);
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
					name={props.id}
					onBlur={handleBlur}
					onChange={props.onChange}
					onFocus={handleFocus}
					value={boxValue}>
				</textarea>
				<div className="form-textarea__counter">{`${boxValue.length}/${props.maxCount}`}</div>
			</div>
			{boxIsInvalid && <p className="form-textarea__error">Please enter a message</p>}
		</>
	)
}

export default FormTextArea;

import './FormTextArea.scss';

const FormTextArea = (props) => {
	return (
		<>
			<div className="form-textarea">
				<label className="form-textarea__label" htmlFor={props.id}>{props.label}</label>
				<textarea
					className="form-textarea__box"
					id={props.id}
					maxLength={props.maxCount}
					name={props.id}
					onBlur={props.onBlur}
					onChange={props.onChange}
					onFocus={props.onFocus}
					value={props.value}>
				</textarea>
				<div className="form-textarea__counter">{`${props.value.length}/${props.maxCount}`}</div>
			</div>
			{props.hasError && <p className="form-textarea__error">Please enter a message</p>}
		</>
	)
}

export default FormTextArea;

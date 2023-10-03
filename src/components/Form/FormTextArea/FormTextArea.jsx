import './FormTextArea.scss';

const FormTextArea = (props) => {
	const hasError = props.hasError ? 'form__field form__field--error' : 'form__field';

	return (
		<div className={hasError}>
			<div className="form__wrap">
				<label className="form__label" htmlFor={props.id}>{props.label}</label>
				<textarea
					className="form__textarea"
					id={props.id}
					maxLength={props.maxCount}
					name={props.id}
					onBlur={props.onBlur}
					onChange={props.onChange}
					onFocus={props.onFocus}
					value={props.value}>
				</textarea>
				<div className="form__counter">{`${props.value.length}/${props.maxCount}`}</div>
			</div>
			<p className="form__message">Please enter a {props.id}</p>
		</div>
	)
}

export default FormTextArea;

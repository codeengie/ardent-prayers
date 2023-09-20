import './FormInput.scss';

const FormInput = (props) => {
	return (
		<>
			<div className="form-input">
				<label className="form-input__label" htmlFor={props.id}>{props.label}</label>
				<input
					className="form-input__field"
					id={props.id}
					name={props.id}
					onBlur={props.onBlur}
					onChange={props.onChange}
					onFocus={props.onFocus}
					type={props.type}
					value={props.value}
				/>
			</div>
			{props.hasError && <p className="form-input__error">Please enter a {props.id}</p>}
		</>
	)
}

export default FormInput;

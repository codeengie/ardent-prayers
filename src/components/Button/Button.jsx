import './Button.scss';

const Button = (props) => {
	return (
		<button
			className={`${props.cName} button`}
			disabled={props.disableButton}
			type="button">{props.text}</button>
	)
}

export default Button;

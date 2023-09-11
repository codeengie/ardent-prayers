import './Button.scss';

const Button = (props) => {
	return (
		<button
			className={`${props.cName} button`}
			disabled={props.disableButton}
			onClick={props.onClick}
			type="button"><span className="button__text">{props.text}</span></button>
	)
}

export default Button;

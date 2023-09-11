import './CallToAction.scss';
import Button from '../Button/Button.jsx';

const CallToAction = () => {
	const handleClick = (event) => {
		event.preventDefault();
		console.log('Open Prayer Request Form');
	}

	return (
		<div className="cta">
			<Button
				cName="cta__button"
				onClick={handleClick}
				text="New Prayer"/>
		</div>
	)
}

export default CallToAction;

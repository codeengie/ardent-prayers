import './Card.scss';
import Button from '../Button/Button.jsx';

const Card = (props) => {
	return (
		<div className="card">
			<h1 className="card__name">{props.data.name}</h1>
			<h2 className="card__title">{props.data.title}</h2>
			<p className="card__message">{props.data.message}</p>
			<Button cName="card__button" text="Pray"/>
		</div>
	)
}

export default Card;

import './Card.scss';
import Button from '../Button/Button.jsx';
import Counter from '../Counter/Counter.jsx';

const Card = (props) => {
	return (
		<div className="card">
			<h1 className="card__name">{props.data.name}</h1>
			<h2 className="card__title">{props.data.title}</h2>
			<p className="card__message">{props.data.message}</p>
			<Counter cName="card__counter" count={props.data.count}/>
			<Button cName="card__button" text="Pray"/>
		</div>
	)
}

export default Card;

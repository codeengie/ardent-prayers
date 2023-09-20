import './Card.scss';
import Button from '../Button/Button.jsx';
import Counter from '../Counter/Counter.jsx';

const Card = (props) => {
	// Local storage is a string, so I'm converting it into a boolean
	const isPrayed = localStorage.getItem(`prayed_${props.id}`) === 'true';

	const prayed = () => {
		localStorage.setItem(`prayed_${props.id}`, 'true');
	}

	return (
		<div className="card">
			<h1 className="card__name">{props.data.name}</h1>
			<h2 className="card__title">{props.data.title}</h2>
			<p className="card__message">{props.data.message}</p>
			<Counter cName="card__counter" count={props.data.count}/>
			<Button
				cName="card__button"
				disableButton={isPrayed}
				onClick={prayed}
				text="Pray"
			/>
		</div>
	)
}

export default Card;

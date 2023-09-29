import { useContext, useRef } from 'react';
import './Card.scss';
import Button from '../Button/Button.jsx';
import Counter from '../Counter/Counter.jsx';
import PrayersContext from '../../store/prayers-context.jsx';

const Card = (props) => {
	// Local storage is a string, so I'm converting it into a boolean
	const isPrayed = localStorage.getItem(`prayed_${props.data.PrayerId}`) === 'true';
	const ctx = useContext(PrayersContext);
	const countRef = useRef(null);

	const setPrayer = async () => {
		// Get the current prayer counter element
		const domElement = countRef.current;
		const extractedCount = parseInt(domElement.innerText.match(/\d+/g));

		await ctx.updatePrayerCount(props.data.PrayerId, props.data.CreatedDate, extractedCount);

		// Set localStorage for current prayer card
		localStorage.setItem(`prayed_${props.data.PrayerId}`, 'true');
	}

	return (
		<div className="card">
			<h1 className="card__name">{props.data.Name}</h1>
			<h2 className="card__title">{props.data.Title}</h2>
			<p className="card__message">{props.data.Message}</p>
			<Counter cName="card__counter" count={props.data.PrayerCount} forwardedRef={countRef}/>
			<Button
				cName="card__button"
				disableButton={isPrayed}
				onClick={setPrayer}
				text="Pray"
			/>
		</div>
	)
}

export default Card;

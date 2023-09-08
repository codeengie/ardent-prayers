import './Counter.scss';
// import prayingHands from '../../assets/images/praying_hands.svg'

const Counter = (props) => {

	return (
		<div className={`${props.cName} counter`}>
			<span className="counter__icon"></span>
			{props.count !== 0 && <p className="counter__count">{`${props.count} Prayed`}</p>}
			<span className="counter__icon counter__icon--flip"></span>
		</div>
	)
}

export default Counter;

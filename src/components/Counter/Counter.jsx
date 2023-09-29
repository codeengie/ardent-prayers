import './Counter.scss';

const Counter = (props) => {

	return (
		<div className={`${props.cName} counter`} ref={props.forwardedRef}>
			<span className="counter__icon"></span>
			{props.count !== 0 && <p className="counter__count">{`${props.count} Prayed`}</p>}
			<span className="counter__icon counter__icon--flip"></span>
		</div>
	)
}

export default Counter;

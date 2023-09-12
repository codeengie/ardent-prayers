import './Backdrop.scss';

const Backdrop = () => {
	const toggleClass = 'backdrop backdrop--show'; // 'backdrop backdrop--show'

	return (
		<div className={toggleClass}></div>
	)
}

export default Backdrop;

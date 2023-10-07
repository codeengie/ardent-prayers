import './LoaderLine.scss';

const LoaderLine = (props) => {
	const customClass = props.className ? `loader-line ${props.className}` : 'loader-line';

	return (
		<div className={customClass}></div>
	);
};

export default LoaderLine;

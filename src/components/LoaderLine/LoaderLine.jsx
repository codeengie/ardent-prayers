import './LoaderLine.scss';

const LoaderLine = (props) => {
	const customClass = props.className ? `${props.className} loader-line` : 'loader-line';

	return (
		<div className={customClass}></div>
	);
};

export default LoaderLine;

import './SkeletonLoader.scss';

const SkeletonLoader = (props) => {
	const skeletons = [];

	// Create as many skeleton as required by count props
	for (let i = 0; i < props.count; i++) {
		skeletons.push(
			<div className="skeleton" key={i}>
				<span className="skeleton__hidden" aria-hidden="false">Loading... Please wait.</span>
				<h3 className="skeleton__title" aria-hidden="true"></h3>
				<h4 className="skeleton__subtitle" aria-hidden="true"></h4>
				<p className="skeleton__body" aria-hidden="true"></p>
				<span className="skeleton__count"></span>
				<span className="skeleton__button"></span>
			</div>
		);
	}

	return (
		skeletons
	);
};

export default SkeletonLoader;

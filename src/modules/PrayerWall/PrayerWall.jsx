import './PrayerWall.scss';
import Card from '../../components/Card/Card.jsx';
import { useContext } from 'react';
import PrayersContext from '../../store/prayers-context.jsx';
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader.jsx';

const PrayerWall = () => {
	const ctx = useContext(PrayersContext);
	let content = '';

	// Output prayer requests
	if (ctx.prayers.length > 0) {
		// Sort prayers in descending order
		const sortedPrayers = ctx.prayers.sort((a, b) => new Date(a.CreatedDate) - new Date(b.CreatedDate)).reverse();

		content = sortedPrayers.map(prayer =>
			<Card
				key={prayer.PrayerId}
				data={prayer}
			/>
		);
	}

	// Display an error message if unable to fetch prayer requests
	if (ctx.error) {
		content = <p>{ctx.error}</p>
	}

	// Display loader while fetching prayer requests
	if (ctx.isLoading) {
		content = <SkeletonLoader count="4"/>
	}

	return (
		<div className="prayer-wall">
			<h1 className="prayer-wall__title">Prayer Wall</h1>
			<div className="prayer-wall__content">
				{content}
			</div>
		</div>
	)
}

export default PrayerWall;

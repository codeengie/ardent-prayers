import './PrayerWall.scss';
import Card from '../../components/Card/Card.jsx';
import { useContext } from 'react';
import PrayersContext from '../../store/prayers-context.jsx';
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader.jsx';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const PrayerWall = () => {
	const ctx = useContext(PrayersContext);
	let content = '';
	const skeletonCount = 10;
	const skeletons = [];

	// Output prayer requests
	if (Array.isArray(ctx.prayers) && ctx.prayers.length > 0) {
		// Sort prayers in descending order
		const sortedPrayers = ctx.prayers.sort((a, b) => new Date(a.CreatedDate) - new Date(b.CreatedDate)).reverse();

		content = sortedPrayers.map(prayer =>
			<Card
				key={prayer.PrayerId}
				className="prayer-wall__brick"
				data={prayer}
			/>
		);
	} else {
		content = <p className="prayer-wall__error">{ctx.prayers}</p>
	}

	// Display an error message if unable to fetch prayer requests
	if (ctx.error) {
		content = <p className="prayer-wall_error">{ctx.error}</p>
	}

	// Display loader while fetching prayer requests
	if (ctx.isLoading) {
		for (let i = 0; i < skeletonCount; i++) {
			skeletons.push(<SkeletonLoader key={i} className="prayer-wall__brick" count="1"/>);
		}

		content = skeletons;
	}

	return (
		<div className="prayer-wall">
			<h1 className="prayer-wall__title">Prayer Wall</h1>
			<ResponsiveMasonry
				columnsCountBreakPoints={{ 768: 2, 992: 3, 1200: 4 }}
			>
				<Masonry
					className="prayer-wall__masonry"
					gutter="10px"
				>
					{content}
				</Masonry>
			</ResponsiveMasonry>
		</div>
	)
}

export default PrayerWall;

import './PrayerWall.scss';
import Card from '../../components/Card/Card.jsx';
import { useContext } from 'react';
import PrayersContext from '../../store/prayers-context.jsx';

const PrayerWall = () => {
	const ctx = useContext(PrayersContext);
	let content = '';

	// Output prayer requests
	if (ctx.prayers.length > 0) {
		content = ctx.prayers.map(prayer => <Card key={prayer.PrayerId} id={prayer.PrayerId} data={prayer}/>);
	}

	// Display error if unable to fetch requests
	if (ctx.error) {
		content = <p>{ctx.error}</p>
	}

	// Display loader while fetch data
	if (ctx.isLoading) {
		content = <p>Loading...</p>
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

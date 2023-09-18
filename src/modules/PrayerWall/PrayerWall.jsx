import './PrayerWall.scss';
import Card from '../../components/Card/Card.jsx';

const PrayerWall = () => {
	let content = null;
	// Pseudo data @todo Remove once API is implemented
	const prayers = [
		{
			id: 'd9dc055b-65cf-4b46-a299-42bd273cdeeb',
			name: 'Cheno Urizar',
			title: 'Unemployed And In Need Of Work',
			message: 'Vitae congue eu consequat ac felis. Ullamcorper a lacus vestibulum sed arcu non odio. Eros in cursus turpis massa tincidunt dui ut ornare lectus. Velit laoreet id donec ultrices. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Sed enim ut sem viverra aliquet eget. Massa placerat duis ultricies lacus sed. Maecenas pharetra convallis posuere morbi leo urna molestie.',
			count: 5
		},
		{
			id: '817f6cc5-a58d-426c-8b08-04d8996f41ce',
			name: 'Anonymous',
			title: 'Healing',
			message: 'Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla. In fermentum posuere urna nec tincidunt praesent.',
			count: 1
		},
		{
			id: '4125520d-3e84-473f-837d-fc897a70129d',
			name: 'Anonymous',
			title: 'Anxiety',
			message: 'Augue mauris augue neque gravida in. Id velit ut tortor pretium viverra suspendisse potenti nullam ac.',
			count: 0
		},
		{
			id: '913d44bc-6774-4602-b0a3-3cf955e9c3d6',
			name: 'Anonymous',
			title: 'Losing Faith',
			message: 'Augue mauris augue neque gravida in. Id velit ut tortor pretium viverra suspendisse potenti nullam ac.',
			count: 12
		}
	];

// Output prayer requests
	if (prayers.length > 0) {
		content = prayers.map(prayer => <Card key={prayer.id} data={prayer}/>);
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

import React, { useCallback, useEffect, useState } from 'react';

const PrayersContext = React.createContext({
	error: null,
	isLoading: false,
	prayers: []
});

export const PrayersContextProvider = (props) => {
	const [isLoading, setIsLoading] = useState(false);
	const [prayers, setPrayers] = useState([]);
	const [error, setError] = useState(null);

	const connectToApi = async (type = 'GET', id = null, date = null, count = null) => {
		const settings = {
			method: type/*,
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': import.meta.env.VITE_API_KEY
			}*/
		};
		let apiUrl = `${import.meta.env.VITE_API_URL}/prayers`;

		if (type === 'GET') {
			setIsLoading(true);
		}

		if (id) {
			apiUrl += `?id=${id}&date=${date}&count=${count}`;
		}

		setError(null);

		try {
			const response = await fetch(apiUrl, settings);

			if (!response.ok) {
				new Error(`Request failed with status: ${response.status}`);
			}

			if (!id) {
				return await response.json();
			}

		} catch (error) {
			setError(error.message);
			console.log('Error:', error.message);

		} finally {
			setIsLoading(false);
		}
	};

	const fetchPrayers = useCallback(async () => {
		const data = await connectToApi();
		setPrayers(JSON.parse(data.body));
	}, []);

	/**
	 * Updates the prayer count on a single prayer item
	 * @param id - UUID of the prayer you want to update
	 * @param date - The date the prayer was requested
	 * @param count - Number of times the prayer has been prayed for
	 * @returns {Promise<void>}
	 */
	const updatePrayerCount = async (id, date, count) => {
		const newCount = count + 1;
		/**
		 * Initially I was trying to update the prayer count by finding the prayer's index in the array but
		 * when I invoked setState it would not update or render. I was trying to avoid copying the entire
		 * array in general for performance reasons but there are other ways of mitigating the hit by
		 * limiting results or only rendering prayers in the user's viewport. For now this will do!
		 */
		const updatedPrayer = prayers.map(
			prayer => prayer.PrayerId === id ? {...prayer, PrayerCount: newCount } : prayer);

		// Send new count to API
		await connectToApi('PUT', id, date, newCount);
		setPrayers(updatedPrayer);
	};

	useEffect(() => {
		fetchPrayers();
		console.log('Fetch Prayers');
	}, [fetchPrayers]);

	return <PrayersContext.Provider value={{error: error, isLoading: isLoading, prayers: prayers, updatePrayerCount}}>{props.children}</PrayersContext.Provider>
}

export default PrayersContext;

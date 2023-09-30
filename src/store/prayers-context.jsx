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
				return response.json();
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
		 * @todo Emulate what you did in postNewPrayer by using `prev` hook
		 */
		const updatedPrayer = prayers.map(
			prayer => prayer.PrayerId === id ? {...prayer, PrayerCount: newCount } : prayer);

		// Send new count to API
		await connectToApi('PUT', id, date, newCount);
		setPrayers(updatedPrayer);
	};

	// Post new prayer request
	const postNewPrayer = async (data) => {
		const settings = {
			method: 'POST',
			body: JSON.stringify(data)
		}

		try {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/prayers`, settings);

			if (!response.ok) {
				new Error(`Prayer request was not posted: ${response.status}`);
			}

			// Await operator is required otherwise you'll be getting a Promise object which you cant process
			const postData = await response.json();

			// Add the new prayer to the store
			setPrayers(prevPrayers => [...prevPrayers, JSON.parse(postData.body)]);

			// Return the statusCode
			return postData.statusCode;

		} catch (error) {
			console.log(`Error: ${error.message}`);
		}
	}

	useEffect(() => {
		fetchPrayers();
		console.log('Fetch Prayers');
	}, [fetchPrayers]);

	return <PrayersContext.Provider value={{error: error, isLoading: isLoading, prayers: prayers, updatePrayerCount, postNewPrayer}}>{props.children}</PrayersContext.Provider>
}

export default PrayersContext;

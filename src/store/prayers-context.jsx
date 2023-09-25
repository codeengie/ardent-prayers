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

	const fetchPrayers = useCallback(async () => {
		const settings = {
			method: 'GET'/*,
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': import.meta.env.VITE_API_KEY
            }*/
		};

		setIsLoading(true);
		setError(null);

		try {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/prayers`, settings);

			if (!response.ok) {
				new Error(`Request failed with status: ${response.status}`);
			}

			const data = await response.json();
			setPrayers(JSON.parse(data.body));
		} catch (error) {
			setError(error.message);
			console.log('Error:', error.message);
		}
		setIsLoading(false);
	}, []);

	const updatePrayerCount = (id) => {
		/**
		 * Initially I was trying to update the prayer count by finding the prayer's index in the array but
		 * when I invoked setState it would not update or render. I was trying to avoid copying the entire
		 * array in general for performance reasons but there are other ways of mitigating the hit by
		 * limiting results or only rendering prayers in the user's viewport. For now this will do!
		 */
		const updatedPrayer = prayers.map(
			prayer => prayer.PrayerId === id ? {...prayer, Count: prayer.Count + 1 } : prayer);

		setPrayers(updatedPrayer);
	}

	useEffect(() => {
		fetchPrayers();
	}, [fetchPrayers]);

	return <PrayersContext.Provider value={{error: error, isLoading: isLoading, prayers: prayers, updatePrayerCount}}>{props.children}</PrayersContext.Provider>
}

export default PrayersContext;

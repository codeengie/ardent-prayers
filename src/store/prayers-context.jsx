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
			console.log('Error:', error.message)
		}
		setIsLoading(false);
	}, []);

	useEffect(() => {
		fetchPrayers();
	}, [fetchPrayers]);

	return <PrayersContext.Provider value={{error: error, isLoading: isLoading, prayers: prayers}}>{props.children}</PrayersContext.Provider>
}

export default PrayersContext;

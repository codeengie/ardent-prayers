import { lazy } from 'react';
import { ModalContextProvider } from './store/modal-context.jsx';
import './App.scss'
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import PrayerWall from './modules/PrayerWall/PrayerWall.jsx';
import CallToAction from './components/CallToAction/CallToAction.jsx';
import Backdrop from './components/Backdrop/Backdrop.jsx';
import { PrayersContextProvider } from './store/prayers-context.jsx';

/**
 * Lazy load component(s)
 *
 * I'm lazy loading PostPrayer component to improve my PageSpeed score in mobile. I'm getting hit hard because I'm
 * using Recaptcha. The report shows Recaptcha as the culprit.
 */
const PostPrayer = lazy(() => import('./components/PostPrayer/PostPrayer.jsx'));

const App = () => {
	return (
		<>
			<Header/>
			<Hero/>
			<PrayersContextProvider>
				<main role="main">
					<PrayerWall/>
				</main>
				<ModalContextProvider>
					<CallToAction/>
					<Footer/>
					<PostPrayer/>
					<Backdrop/>
				</ModalContextProvider>
			</PrayersContextProvider>
		</>
	)
}

export default App

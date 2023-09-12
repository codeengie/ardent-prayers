//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.scss'
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import PrayerWall from './components/modules/PrayerWall/PrayerWall.jsx';
import CallToAction from './components/CallToAction/CallToAction.jsx';
import Backdrop from './components/Backdrop/Backdrop.jsx';

function App() {
	return (
		<>
			<Header/>
			<Hero/>
			<main role="main">
				<PrayerWall/>
			</main>
			<CallToAction/>
			<Footer/>
			<Backdrop/>
		</>
	)
}

export default App

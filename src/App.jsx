//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.scss'
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import PrayerWall from './components/modules/PrayerWall/PrayerWall.jsx';

function App() {
	return (
		<>
			<Header/>
			<Hero/>
			<main role="main">
				<PrayerWall/>
			</main>
			<Footer/>
		</>
	)
}

export default App

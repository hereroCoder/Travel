import Navbar from './components/pages/Navbar'
import Gallery from './components/pages/Gallery'
import Destinations from './components/pages/Destinations'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Footer from './components/pages/Footer'
import BackGround from './components/BackGround'
import { Route, Routes } from 'react-router-dom'

function App() {
	return (
		<>
			
			<Navbar />
			<div className='container'>
			<BackGround />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/destinations' element={<Destinations />} />
					<Route path='/about' element={<About />} />
					<Route path='/gallery' element={<Gallery />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
				<Footer />
			</div>
		</>
	)
}

export default App

import React from 'react'
import './components/fonts.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import MyTripNatureTravel from './components/MyTripNatureTravel'

const App = () => {
	return (
		<div
			className="bg-black text-white min-h-screen"
			style={{ fontFamily: 'TerminaTest, system-ui, sans-serif' }}
		>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={(
						<>
							<Hero />
							<About />
						</>
					)}
				/>
				<Route path="/mytrip" element={<MyTripNatureTravel />} />
			</Routes>
		</div>
	)
}

export default App
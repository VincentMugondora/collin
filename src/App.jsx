import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import MyTripNatureTravel from './components/MyTripNatureTravel'
import Process from './components/Process'
import Result from './components/Result'
import './components/fonts.css'

function App() {
  return (
    <div className="app" style={{ fontFamily: 'TerminaTest, system-ui, sans-serif' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <MyTripNatureTravel />
            <Process />
            <Result />
          </>
        } />
      </Routes>
    </div>
  )
}

export default App
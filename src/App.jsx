import React from 'react'
import './components/fonts.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className='bg-black text-white ' style={{ fontFamily: 'TerminaTest, system-ui, sans-serif', }}>
    <Navbar />
    <Hero />
    </div>
  )
}

export default App
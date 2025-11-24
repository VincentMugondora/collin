import React from 'react'
import './components/fonts.css'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='bg-black text-white ' style={{ fontFamily: 'TerminaTest, system-ui, sans-serif', }}>
    <Navbar />
    </div>
  )
}

export default App
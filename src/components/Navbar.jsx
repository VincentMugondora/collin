import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-evenly'>
        <div>
            <img src="/logo.jpg" alt="" />
        </div>
        <div>
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Projects</h1>
            <h1>Contact</h1>
        </div>
    </div>
  )
}

export default Navbar
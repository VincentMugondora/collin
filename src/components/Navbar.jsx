import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-[60px] py-1.5'>
        <div>
            <img src="/logo.jpg" alt="" />
        </div>
        <div className='flex'>
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Projects</h1>
            <h1>Contact</h1>
        </div>
    </div>
  )
}

export default Navbar
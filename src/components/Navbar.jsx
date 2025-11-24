import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='flex justify-between px-[60px] py-1.5'>
        <div>
            <img src="/logo.jpg" alt="" />
        </div>
        <div className='flex justify-between items-center gap-[30vw]'>
            <div className='flex gap-2 items-center'>
                <h1>Home</h1>
                <h1>About</h1>
                <h1>Projects</h1>
                <h1>Contact</h1>
            </div>
            <div className='flex gap-2 items-center'>
                <FaLinkedinIn />
                <MdEmail />
                <MdOutlineLightMode />
            </div>
        </div>
    </div>
  )
}

export default Navbar
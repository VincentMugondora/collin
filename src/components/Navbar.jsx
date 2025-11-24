import React, { useState } from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdOutlineLightMode } from "react-icons/md";
import { SiBehance } from "react-icons/si";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className="w-full bg-black text-white" style={{ fontFamily: 'TerminaTest, system-ui, sans-serif' }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 relative">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="leading-[0.85] select-none">
              <div className="font-black tracking-tight leading-none text-[22px] sm:text-[26px]">COLLIN</div>
              <div className="font-black tracking-tight leading-none text-[22px] sm:text-[26px]">MANYANE</div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-12">
            <ul className="flex items-center gap-8 text-sm">
              <li>
                <a href="#" className="text-orange-500 border-b border-orange-500 pb-0.5">Home</a>
              </li>
              <li>
                <a href="#" className="relative inline-block pr-6 text-white/80 hover:text-white transition">
                  My Projects
                  <span className="absolute -top-2 right-0 bg-orange-500 text-[10px] px-1.5 py-0.5 rounded-sm leading-none text-white">NEW</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition">Services</a>
              </li>
            </ul>

            <div className="flex items-center gap-5 text-white/80">
              <a href="#" aria-label="Behance" className="hover:text-white transition"><SiBehance size={16} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition"><FaLinkedinIn size={16} /></a>
              <a href="mailto:" aria-label="Email" className="hover:text-white transition"><MdEmail size={18} /></a>
              <button aria-label="Toggle Theme" className="hover:text-white transition"><MdOutlineLightMode size={18} /></button>
            </div>
          </div>

          <button onClick={() => setOpen(!open)} aria-label="Menu" className="md:hidden p-2 rounded hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20">
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-black/95 border-t border-white/10">
            <ul className="flex flex-col px-4 py-4 gap-3 text-sm">
              <li><a href="#" className="text-orange-500 border-b border-orange-500 pb-0.5">Home</a></li>
              <li>
                <a href="#" className="relative inline-block pr-6 text-white/80 hover:text-white">
                  My Projects
                  <span className="absolute -top-2 right-0 bg-orange-500 text-[10px] px-1.5 py-0.5 rounded-sm text-white leading-none">NEW</span>
                </a>
              </li>
              <li><a href="#" className="text-white/80 hover:text-white">Services</a></li>
              <li className="pt-2">
                <div className="flex items-center gap-5 text-white/80">
                  <a href="#" aria-label="Behance" className="hover:text-white"><SiBehance size={18} /></a>
                  <a href="#" aria-label="LinkedIn" className="hover:text-white"><FaLinkedinIn size={18} /></a>
                  <a href="mailto:" aria-label="Email" className="hover:text-white"><MdEmail size={20} /></a>
                  <button aria-label="Toggle Theme" className="hover:text-white"><MdOutlineLightMode size={20} /></button>
                </div>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
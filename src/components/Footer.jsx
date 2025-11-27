import React from 'react';
import { FaLinkedinIn, FaBehance } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-black tracking-tight mb-4">COLLIN MANYANE</h3>
            <p className="text-sm text-white/70 mb-6">
              I'm a passionate product designer with a keen eye for detail and a love for creating intuitive user experiences. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-orange-500 transition-colors">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" className="text-white hover:text-orange-500 transition-colors">
                <FaBehance size={18} />
              </a>
              <a href="mailto:your.email@example.com" className="text-white hover:text-orange-500 transition-colors">
                <MdEmail size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-white text-sm mb-4">EXPLORE</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-white/70 hover:text-orange-500 transition-colors">Home</a></li>
                  <li><a href="#" className="text-sm text-white/70 hover:text-orange-500 transition-colors">About</a></li>
                  <li><a href="#" className="text-sm text-white/70 hover:text-orange-500 transition-colors">Work</a></li>
                  <li><a href="#" className="text-sm text-white/70 hover:text-orange-500 transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-white text-sm mb-4">SERVICES</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-white/70 hover:text-orange-500 transition-colors">UI/UX Design</a></li>
                  <li><a href="#" className="text-sm text-white/70 hover:text-orange-500 transition-colors">Product Design</a></li>
                  <li><a href="#" className="text-sm text-white/70 hover:text-orange-500 transition-colors">Branding</a></li>
                  <li><a href="#" className="text-sm text-white/70 hover:text-orange-500 transition-colors">Web Design</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-white text-sm mb-4">CONTACT</h4>
                <ul className="space-y-2">
                  <li className="text-sm text-white/70">collin@example.com</li>
                  <li className="text-sm text-white/70">+1 234 567 8900</li>
                  <li className="text-sm text-white/70 mt-4">Harare, Zimbabwe</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-white/50 mb-4 sm:mb-0">© 2023 Collin Manyane. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-white/70 hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/70 hover:text-orange-500 transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-white/70 hover:text-orange-500 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { FaLinkedinIn, FaBehance, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Left Column - About */}
          <div className="space-y-6">
            <h3 className="text-3xl font-black tracking-tight">COLLIN MANYANE</h3>
            <p className="text-base text-white/80 leading-relaxed">
              I'm a passionate product designer with a keen eye for detail and a love for creating intuitive user experiences. Let's build something amazing together.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <FaBehance size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="mailto:collin@example.com" className="text-white hover:text-yellow-400 transition-colors">
                <MdEmail size={22} />
              </a>
            </div>
          </div>
          
          {/* Middle Column - Navigation */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-6">EXPLORE</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-base text-white/80 hover:text-yellow-400 transition-colors">Home</a></li>
                <li><a href="#" className="text-base text-white/80 hover:text-yellow-400 transition-colors">About</a></li>
                <li><a href="#" className="text-base text-white/80 hover:text-yellow-400 transition-colors">Work</a></li>
                <li><a href="#" className="text-base text-white/80 hover:text-yellow-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">SERVICES</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-base text-white/80 hover:text-yellow-400 transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="text-base text-white/80 hover:text-yellow-400 transition-colors">Product Design</a></li>
                <li><a href="#" className="text-base text-white/80 hover:text-yellow-400 transition-colors">Branding</a></li>
                <li><a href="#" className="text-base text-white/80 hover:text-yellow-400 transition-colors">Web Design</a></li>
              </ul>
            </div>
          </div>
          
          {/* Right Column - Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">CONTACT</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <span className="text-yellow-400">•</span>
                <a href="mailto:collin@example.com" className="text-base text-white/80 hover:text-yellow-400 transition-colors">collin@example.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-yellow-400">•</span>
                <a href="tel:+12345678900" className="text-base text-white/80 hover:text-yellow-400 transition-colors">+1 234 567 8900</a>
              </li>
              <li className="flex items-start space-x-3 pt-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span className="text-base text-white/80">Harare, Zimbabwe</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60 mb-4 md:mb-0">© 2023 Collin Manyane. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="text-sm text-white/60 hover:text-yellow-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/60 hover:text-yellow-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-white/60 hover:text-yellow-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

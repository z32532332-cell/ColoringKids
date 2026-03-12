import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Coloring Pages', href: '#' },
    { name: 'Digital Coloring', href: '#' },
    { name: 'Learning Games', href: '#' },
    { name: 'Membership', href: '#' },
  ];
 
  return (
    
    <div className="relative h-screen ">
      {/* Background Image with Clouds */}
<div className="absolute inset-0 bg-yellow-300">
  <img src="/images/clauds.jpg" alt="clouds" className="w-full h-full object-cover" />
 
</div>
      {/* Navbar - transparent */}
      <nav className="absolute top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            {/*
            <div className="flex items-center">
              <span className="text-3xl font-bold">
                <span className="text-red-500">Happy</span>{' '}
                <span className="text-green-500">Kids</span>{' '}
                <span className="text-blue-500">Coloring</span>
              </span>
            </div>
            */}
            <div className="flex items-center ml-15 mt-4">
        <img 
         src="/images/happy-color.png"        // put your logo in public folder
       alt="Happy Kids Coloring"
       className="h-30 w-40" // height fixed, width auto to maintain aspect ratio
     />
      </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-white px-3 py-2 rounded-full text-sm lg:text-base font-medium hover:bg-purple-500 transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#"
                className="group relative bg-orange-500 hover:bg-orange-400 text-white text-1xl font-black px-2 py-1 rounded-full shadow-[0_8px_0_rgb(194,65,12)] transition-all active:translate-y-1 active:shadow-none flex items-center gap-3 mx-auto md:mx-0"
              >
                Start Free Trial
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-blue-800 hover:text-purple-600 focus:outline-none"
              >
                {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button> 
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden  transition-all duration-300 ease-in-out transform${isOpen ? 'translate-y-0 opacity-100' 
    : '-translate-y-2 opacity-0 pointer-events-none'}`}>
          <div className="px-2 pt-2 pb-4 space-y-2 bg-white bg-opacity-90 backdrop-blur-sm rounded-b-2xl shadow-inner">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-black hover:text-purple-600 px-4 py-3 rounded-xl text-base font-medium hover:bg-purple-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#"
              className="block bg-orange-400 text-white text-center px-4 py-3 rounded-xl text-base font-bold hover:bg-orange-500 transition-colors mt-4"
              onClick={() => setIsOpen(false)}
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-5">
        <h1 className="font-kids text-5xl md:text-6xl font-bold text-purple-800 mb-4">
          Let's Color the World!
        </h1>
        <p className="font-kids text-xl md:text-2xl text-purple-700 max-w-2xl mb-8">
          Discover thousands of printable coloring pages, digital art tools, and fun learning games for kids of all ages.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#"
            className="group relative bg-orange-500 hover:bg-orange-400 text-white text-2xl font-black px-10 py-5 rounded-full shadow-[0_8px_0_rgb(194,65,12)] transition-all active:translate-y-1 active:shadow-none flex items-center gap-3 mx-auto md:mx-0"
          >
            
            Start Coloring Now
          </a>
          <a
            href="#"
            className="group relative bg-blue-700 hover:bg-blue-400 text-white text-2xl font-black px-21 py-5 rounded-full shadow-[0_8px_0_rgb(1,0,72)] transition-all active:translate-y-1 active:shadow-none flex items-center gap-3 mx-auto md:mx-0"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Optional scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-800 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-800 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
    
  );
};

export default Header;
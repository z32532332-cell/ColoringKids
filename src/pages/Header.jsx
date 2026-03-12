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
            <div className="flex items-center">
              <span className="text-3xl font-bold">
                <span className="text-red-500">Happy</span>{' '}
                <span className="text-green-500">Kids</span>{' '}
                <span className="text-blue-500">Coloring</span>
              </span>
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
                className="bg-orange-400 text-white px-6 py-2 rounded-full text-sm lg:text-base font-bold hover:bg-orange-500 transition-colors shadow-md hover:shadow-lg ml-2"
              >
                Start Free Trial
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-purple-600 focus:outline-none"
              >
                {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button> 
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
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
        <h1 className="text-5xl md:text-6xl font-bold text-purple-800 mb-4">
          Let's Color the World!
        </h1>
        <p className="text-xl md:text-2xl text-purple-700 max-w-2xl mb-8">
          Discover thousands of printable coloring pages, digital art tools, and fun learning games for kids of all ages.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#"
            className="bg-orange-400 text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-orange-500 transition-colors shadow-lg"
          >
            Start Coloring Now
          </a>
          <a
            href="#"
            className="bg-white text-purple-700 px-8 py-3 rounded-full text-lg font-bold hover:bg-purple-100 transition-colors shadow-lg"
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
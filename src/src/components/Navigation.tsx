'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Recommendations', href: '#recommendations' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-opacity-80 bg-white dark:bg-opacity-80 dark:bg-[#071026] backdrop-blur-md z-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 items-center h-16">
          {/* Logo / Left */}
          <div className="col-start-1">
            <motion.a href="#home" whileHover={{ scale: 1.03 }} className="text-lg font-semibold text-gray-900 dark:text-white">
              Rahul Malhotra
            </motion.a>
          </div>

          {/* Centered Menu */}
          <div className="col-start-2 justify-self-center">
            <div className="hidden md:flex space-x-8 items-center">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-[color:var(--accent-2)] dark:text-gray-300 dark:hover:text-[color:var(--accent)] uppercase tracking-wide"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right CTA / Mobile button */}
          <div className="col-start-3 justify-self-end flex items-center gap-4">
            <div className="hidden md:block">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center px-4 py-2 bg-[color:var(--accent-2)] text-white rounded-full text-sm font-medium shadow-sm hover:opacity-95"
              >
                Contact
              </motion.a>
            </div>

            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (<path d="M6 18L18 6M6 6l12 12" />) : (<path d="M4 6h16M4 12h16M4 18h16" />)}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="md:hidden mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a key={item.name} href={item.href} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[color:var(--accent-2)] dark:text-gray-300" onClick={() => setIsOpen(false)}>
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { useFocusTrap } from '../hooks/useFocusTrap';

interface NavbarProps {
    theme: string;
    toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useFocusTrap(menuRef, isMenuOpen);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#expertise', label: 'Expertise' },
        { href: '#insights', label: 'Insights' },
        { href: '#projects', label: 'Projects' },
        { href: '#achievements', label: 'Results' },
        { href: '#services', label: 'Services' },
        { href: '#publications', label: 'Features' },
        { href: '#blog', label: 'Blog' },
        { href: '#gallery', label: 'Gallery' },
    ];
    
    const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (!href) return;

        setIsMenuOpen(false); // Start closing animation

        // Wait for animation to finish, then scroll
        setTimeout(() => {
            if (href === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const targetElement = document.querySelector(href);
                targetElement?.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300); // This duration must match the CSS transition duration
    };

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // If the mobile menu is open, use the robust handler
        if (isMenuOpen) {
            handleMobileLinkClick(e);
        }
        // Otherwise (on desktop), allow the default link behavior to scroll to top
    };

    return (
        <>
            <nav id="navbar" className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        <div className="flex items-center">
                            <a href="#" onClick={handleLogoClick} className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                                Amit Mishra
                            </a>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                 <a key={link.href} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition duration-300">
                                    {link.label}
                                 </a>
                            ))}
                            <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none transition-colors duration-300" aria-label="Toggle theme">
                                {theme === 'light' ? <i className="fas fa-moon text-xl"></i> : <i className="fas fa-sun text-xl"></i>}
                            </button>
                            <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
                                Contact
                            </a>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none transition-colors duration-300 mr-4" aria-label="Toggle theme">
                                {theme === 'light' ? <i className="fas fa-moon text-xl"></i> : <i className="fas fa-sun text-xl"></i>}
                            </button>
                             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 dark:text-gray-200 focus:outline-none" aria-label="Open menu" aria-expanded={isMenuOpen}>
                                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <div ref={menuRef} className={`fixed inset-0 z-40 bg-white dark:bg-gray-900 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                <div className="flex flex-col items-center justify-center h-full pt-20">
                    {navLinks.map((link) => (
                         <a key={link.href} href={link.href} onClick={handleMobileLinkClick} className="py-4 text-2xl text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition duration-300">
                            {link.label}
                         </a>
                    ))}
                    <a href="#contact" onClick={handleMobileLinkClick} className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-xl hover:bg-blue-700 transition duration-300">
                        Contact
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
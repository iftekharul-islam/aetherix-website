'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Logo from '../global/Logo';
import MobileLogo from '../global/MobileLogo';

const Navbar = ({ isHomePage }) => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const dropdownRef = useRef(null);
    const pathname = usePathname();

    // Handle click outside dropdown
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsServicesOpen(false);
        }
    };

    // Handle scroll effect
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
    };

    // Set up event listeners
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        if (isServicesOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isServicesOpen]);

    // Check if path is active
    const isActive = (path) => {
        return pathname === path;
    };

    // Close mobile menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Navbar links data
    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/services', label: 'Services' },
        { path: '/blogs', label: 'Blog' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <nav
            className={`fixed w-full top-0 z-[999] transition-all duration-700 ease-out ${
                isHomePage
                    ? isScrolled
                        ? 'bg-[#002a57]/95 backdrop-blur-xl shadow-2xl'
                        : 'bg-transparent'
                    : 'bg-[#002a57]/95 backdrop-blur-xl shadow-2xl'
            }`}
        >
            <div className='container'>
                <div className='flex items-center justify-between h-16 md:h-20'>
                    {/* Logo */}
                    <div className='flex-shrink-0 transform transition-all duration-500 hover:scale-105'>
                        <div className='hidden md:block'>
                            <Logo />
                        </div>
                        <div className='md:hidden'>
                            <MobileLogo />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex items-center space-x-2'>
                        {navLinks.map((link, index) => {
                            const active = isActive(link.path);
                            const baseColor =
                                isScrolled || !isHomePage ? 'text-gray-200' : 'text-white';

                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`group relative px-5 py-2.5 text-sm uppercase tracking-wider font-medium rounded-full transition-all duration-500 ease-out transform hover:scale-105 focus:outline-none focus:scale-105 ${
                                        active 
                                            ? 'text-white bg-gradient-to-r from-white/25 to-white/15 shadow-lg backdrop-blur-sm' 
                                            : `${baseColor} hover:text-white hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10 hover:shadow-md hover:backdrop-blur-sm`
                                    }`}
                                    style={{
                                        animationDelay: `${index * 100}ms`
                                    }}
                                >
                                    <span className="relative z-10">{link.label}</span>
                                    
                                    {/* Animated background */}
                                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-white/30 to-white/20 opacity-0 transition-all duration-500 ease-out transform scale-75 ${
                                        active ? 'opacity-100 scale-100' : 'group-hover:opacity-100 group-hover:scale-100 group-focus:opacity-100 group-focus:scale-100'
                                    }`} />
                                    
                                    {/* Glow effect */}
                                    <div className={`absolute inset-0 rounded-full bg-white/10 blur-md opacity-0 transition-all duration-500 ease-out ${
                                        active ? 'opacity-100' : 'group-hover:opacity-100 group-focus:opacity-100'
                                    }`} />
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='md:hidden'>
                        <button
                            className='p-3 rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 ease-out hover:bg-white/20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 focus:scale-110 active:scale-95'
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label='Toggle menu'
                        >
                            <svg className='w-6 h-6 transition-all duration-300 ease-out' fill='none' stroke='white' viewBox='0 0 24 24'>
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M6 18L18 6M6 6l12 12'
                                        className="animate-in spin-in-180 duration-300"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M4 6h16M4 12h16M4 18h16'
                                        className="animate-in fade-in duration-300"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-500 ease-out overflow-hidden ${
                        isMenuOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
                    }`}
                >
                    <div className='px-3 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl mt-4'>
                        {navLinks.map((link, index) => {
                            const active = isActive(link.path);
                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`group relative block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ease-out transform hover:scale-102 focus:outline-none focus:scale-102 ${
                                        active
                                            ? 'bg-gradient-to-r from-gray-100 to-gray-50 text-gray-900 shadow-lg'
                                            : 'text-gray-700 hover:text-gray-900 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-25 hover:shadow-md'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                        transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                                        opacity: isMenuOpen ? 1 : 0,
                                        transition: `all 0.5s ease-out ${index * 100}ms`
                                    }}
                                >
                                    <span className="relative z-10">{link.label}</span>
                                    
                                    {/* Animated background */}
                                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 transition-all duration-300 ease-out transform scale-95 ${
                                        active ? 'opacity-100 scale-100' : 'group-hover:opacity-100 group-hover:scale-100 group-focus:opacity-100 group-focus:scale-100'
                                    }`} />
                                    
                                    {/* Sliding indicator */}
                                    <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full transition-all duration-300 ease-out ${
                                        active ? 'opacity-100 scale-100' : 'opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100'
                                    }`} />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
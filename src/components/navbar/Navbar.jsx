'use client';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            className={`fixed w-full top-0 z-[999] transition-all duration-500 ease-out ${
                isHomePage
                    ? isScrolled
                        ? 'bg-[#002a57] shadow-lg backdrop-blur-sm bg-opacity-90'
                        : 'bg-transparent'
                    : 'bg-[#002a57] shadow-lg'
            }`}
        >
            <div className='container'>
                <div className='flex items-center justify-between h-16 md:h-20'>
                    {/* Logo */}
                    <div className='flex-shrink-0'>
                        <div className='hidden md:block'>
                            <Logo />
                        </div>
                        <div className='md:hidden'>
                            <MobileLogo />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex items-center space-x-1'>
                        {navLinks.map((link) => {
                            const active = isActive(link.path);
                            const baseColor =
                                isScrolled || !isHomePage ? 'text-gray-200' : 'text-white';
                            const hoverColor = 'text-white';

                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`group relative px-4 py-2 text-sm uppercase tracking-wider font-medium ${
                                        active ? 'text-white' : `${baseColor} hover:${hoverColor}`
                                    } transition-colors duration-300`}
                                >
                                    {link.label}
                                    <span
                                        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
                                            active ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                    ></span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='md:hidden'>
                        <button
                            className='p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white'
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label='Toggle menu'
                        >
                            <svg className='w-6 h-6' fill='none' stroke='white' viewBox='0 0 24 24'>
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                ) : (
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M4 6h16M4 12h16M4 18h16'
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className='px-2 pt-2 pb-4 space-y-1 bg-white rounded-lg shadow-xl mt-2'>
                        {navLinks.map((link) => {
                            const active = isActive(link.path);
                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`group block px-3 py-2 rounded-md text-base font-medium relative overflow-hidden ${
                                        active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                    <span
                                        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gray-900 transition-all duration-300 ${
                                            active ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                    ></span>
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

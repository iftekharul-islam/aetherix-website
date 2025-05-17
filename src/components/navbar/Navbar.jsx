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

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsServicesOpen(false);
        }
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        if (isServicesOpen) document.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isServicesOpen]);

    const isActive = (path) => {
        return pathname === path
            ? 'text-tsRed font-bold'
            : isScrolled || !isHomePage
            ? 'text-tsBlack hover:text-tsRed'
            : 'text-white hover:text-tsRed';
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);
    return (
        <nav
            className={`transition-all duration-300 ease-in-out w-full sticky md:fixed top-0 z-[999] ${
                isHomePage
                    ? isScrolled
                        ? 'bg-white shadow-md'
                        : 'bg-transparent '
                    : 'bg-white shadow-md'
            }`}
        >
            <div
                className={`transition-all duration-300 ease-in-out container ${
                    isScrolled ? 'py-[10px]' : 'py-[12px] md:py-[30px]'
                }`}
            >
                <div className='flex items-center justify-between h-16 mx-1 md:mx-0'>
                    <div className='hidden md:flex'>
                        <Logo />
                    </div>
                    <div className='md:hidden'>
                        <MobileLogo />
                    </div>

                    {/* Desktop Menu */}
                    <div className='hidden md:flex items-center space-x-6'>
                        <Link href='/' className={`${isActive('/')} px-3 py-2 uppercase`}>
                            Home
                        </Link>
                        <Link href='/about' className={`${isActive('/about')} px-3 py-2 uppercase`}>
                            About
                        </Link>
                        <Link
                            href='/services'
                            className={`${isActive('/services')} px-3 py-2 uppercase`}
                        >
                            Services
                        </Link>
                        <Link href='/blogs' className={`${isActive('/blog')} px-3 py-2 uppercase`}>
                            Blog
                        </Link>
                        <Link
                            href='/contact'
                            className={`${isActive('/contact')} px-3 py-2 uppercase`}
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className='md:hidden focus:outline-none'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu (overlayed) */}
                {isMenuOpen && (
                    <div className='md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 rounded-b-lg py-2'>
                        <Link
                            href='/'
                            className='block px-4 py-2 hover:bg-gray-100'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href='/about'
                            className='block px-4 py-2 hover:bg-gray-100'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <div className='px-4 py-2'>
                            <button
                                className='flex items-center w-full hover:bg-gray-100 px-2 py-1 rounded'
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                            >
                                Services
                                <FontAwesomeIcon
                                    icon={faCaretDown}
                                    className={`ml-2 transition-transform ${
                                        isServicesOpen ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            {isServicesOpen && (
                                <div className='pl-4 mt-1'>
                                    <Link
                                        href='/services/service1'
                                        className='block px-2 py-1 hover:bg-gray-100 rounded'
                                        onClick={() => {
                                            setIsServicesOpen(false);
                                            setIsMenuOpen(false);
                                        }}
                                    >
                                        Service 1
                                    </Link>
                                    <Link
                                        href='/services/service2'
                                        className='block px-2 py-1 hover:bg-gray-100 rounded'
                                        onClick={() => {
                                            setIsServicesOpen(false);
                                            setIsMenuOpen(false);
                                        }}
                                    >
                                        Service 2
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link
                            href='/blogs'
                            className='block px-4 py-2 hover:bg-gray-100'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Blog
                        </Link>
                        <Link
                            href='/contact'
                            className='block px-4 py-2 hover:bg-gray-100'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

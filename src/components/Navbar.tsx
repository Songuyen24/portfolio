import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#202028] border-b-4 border-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-white font-bold text-xl tracking-wider hover:text-[var(--primary)] transition-none pixel-text-shadow">
                            PORTFOLIO
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-300 hover:text-white hover:bg-[var(--primary)] px-4 py-2 text-sm font-medium transition-none border-4 border-transparent hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none"
                                >
                                    {item.toUpperCase()}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button className="text-gray-300 hover:text-white p-2 border-2 border-transparent hover:border-white">
                            <span className="sr-only">Open menu</span>
                            <div className="space-y-1">
                                <div className="w-6 h-1 bg-white"></div>
                                <div className="w-6 h-1 bg-white"></div>
                                <div className="w-6 h-1 bg-white"></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

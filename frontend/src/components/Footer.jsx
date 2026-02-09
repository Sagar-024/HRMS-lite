import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-auto border-t border-stone-200 bg-gradient-to-r from-stone-50 to-white shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.08)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

                {/* Main Content */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

                    {/* Left: Made with love */}
                    <div className="flex items-center gap-2 text-sm sm:text-base text-stone-600">
                        <span className="hidden sm:inline">Crafted with</span>
                        <span className="sm:hidden">Made with</span>
                        <span className="text-red-500 animate-pulse text-lg">❤️</span>
                        <span className="hidden sm:inline">by</span>
                        <span className="font-semibold text-stone-800">Sagar Kharal</span>
                    </div>

                    {/* Right: Role + LinkedIn */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        <span className="text-xs sm:text-sm text-stone-500">
                            Full-Stack Developer
                        </span>
                        <span className="hidden sm:inline text-stone-300">|</span>
                        <a
                            href="https://linkedin.com/in/sagarkharal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-stone-400 hover:text-blue-600 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Optional Copyright */}
                <div className="hidden sm:block mt-6 pt-4 border-t border-stone-100 text-center">
                    <p className="text-xs text-stone-400">
                        © 2026 HRMS Lite. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

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
                        <span className=" ">by</span>
                        <span className="font-semibold text-stone-800">Sagar Kharal</span>
                    </div>

                    {/* Right: Role */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        <span className="text-xs sm:text-sm text-stone-500">
                            Full-Stack Developer
                        </span>
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

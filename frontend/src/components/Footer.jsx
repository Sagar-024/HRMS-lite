import React from 'react';

const Footer = () => {
    return (
        <footer className="relative mt-auto bg-white">
            {/* Subtle top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Main Footer Content */}
                <div className="py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                        {/* Left: Brand & Description - 5 cols */}
                        <div className="lg:col-span-5">
                            <div className="space-y-3">
                                <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
                                    HRMS <span className="font-light text-gray-400">Lite</span>
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                                    Modern workforce management system designed for efficiency and simplicity.
                                </p>
                            </div>
                        </div>

                        {/* Center: Creator - 4 cols */}
                        <div className="lg:col-span-4 flex justify-center">
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-br from-gray-50 to-white border border-gray-200/60 shadow-[0_2px_8px_rgba(0,_0,_0,_0.04)]">
                                <span className="text-sm text-gray-500">Designed by</span>
                                <span className="text-sm font-semibold text-gray-900">Sagar Kharal</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                            </div>
                        </div>

                        {/* Right: Links - 3 cols */}
                        <div className="lg:col-span-3 flex items-center justify-center lg:justify-end gap-3">

                            {/* Portfolio Link */}
                            <a
                                href="https://agency-landing-page-blush-nine.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-[0_1px_3px_rgba(0,_0,_0,_0.06)] hover:shadow-[0_8px_16px_rgba(0,_0,_0,_0.1)] hover:-translate-y-0.5"
                            >
                                <span className="text-sm font-medium text-gray-700">More Work</span>
                                <svg
                                    className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-0.5 transition-all"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>

                            {/* LinkedIn - PREMIUM ICON */}
                            <a
                                href="https://www.linkedin.com/in/sagar-kharal/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#0A66C2] to-[#004182] shadow-[0_4px_12px_rgba(10,_102,_194,_0.25)] hover:shadow-[0_8px_20px_rgba(10,_102,_194,_0.35)] transition-all duration-300 hover:scale-105"
                                aria-label="Connect on LinkedIn"
                            >
                                {/* LinkedIn Icon - Premium version */}
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>

                                {/* Shine effect on hover */}
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="relative border-t border-gray-100">
                    <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

                        {/* Copyright */}
                        <p className="text-xs text-gray-400 tracking-wide">
                            © 2025 HRMS Lite. All rights reserved.
                        </p>

                        {/* Tech Stack Badge (optional flex) */}
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                            <span>Built with</span>
                            <div className="flex items-center gap-1.5">
                                <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-600 font-medium">React</span>
                                <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-600 font-medium">Tailwind</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

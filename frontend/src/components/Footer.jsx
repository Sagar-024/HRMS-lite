import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 py-5">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 text-sm">

                    <p className="text-gray-600 text-center sm:text-left">
                        Made with <span className="text-red-500">❤️</span> by{' '}
                        <span className="font-semibold text-gray-800">Sagar Kharal</span>
                    </p>

                    <div className="flex items-center gap-3">
                        <a
                            href="https://agency-landing-page-blush-nine.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            View Parallax →
                        </a>
                        <span className="text-gray-300">•</span>
                        <a
                            href="https://www.linkedin.com/in/sagar-kharal/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

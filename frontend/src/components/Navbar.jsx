import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = ({ onMenuClick }) => {
    return (
        <header className="sticky top-0 z-40 flex items-center justify-between p-4 lg:hidden bg-white/80 backdrop-blur-md border-b border-stone-200">
            <button
                onClick={onMenuClick}
                className="p-2 -ml-2 rounded-lg hover:bg-stone-100 text-stone-600 transition-colors"
                aria-label="Open menu"
            >
                <Menu className="w-6 h-6" />
            </button>
        </header>
    );
};

export default Navbar;

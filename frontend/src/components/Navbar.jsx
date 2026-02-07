import React from 'react';

const Navbar = () => {
    return (
        <header className="h-24 flex items-center justify-end px-12 sticky top-0 z-40 bg-paper/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-sm text-stone-500">
                <span>Oct 24, 2026</span>
                <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                <span>Bengaluru, IN</span>
            </div>
        </header>
    );
};

export default Navbar;

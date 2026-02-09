import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Calendar, User } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
    const navItems = [
        { name: 'Dashboard', path: '/', icon: LayoutDashboard },
        { name: 'Employees', path: '/employees', icon: Users },
        { name: 'Attendance', path: '/attendance', icon: Calendar },
    ];

    return (
        <aside
            className={`
                fixed top-0 bottom-0 left-0 z-50 w-64 bg-white border-r border-stone-200 flex flex-col
                transition-transform duration-300 ease-in-out shadow-[2px_0_8px_rgba(0,_0,_0,_0.05),_4px_0_16px_rgba(0,_0,_0,_0.03)]
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                lg:translate-x-0 lg:static
            `}
        >
            {/* Brand */}
            <div className="px-6 py-8 border-b border-stone-100">
                <h1 className="font-serif text-3xl font-semibold text-ink leading-none tracking-tight">
                    HRMS
                    <span className="block italic text-stone-400 font-normal text-2xl mt-1">
                        Lite.
                    </span>
                </h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-6 space-y-1">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={() => onClose && onClose()}
                        className={({ isActive }) => `
                            flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                            ${isActive
                                ? 'bg-stone-900 text-white shadow-md'
                                : 'text-stone-500 hover:bg-stone-100 hover:text-ink'
                            }
                        `}
                    >
                        <item.icon
                            size={20}
                            strokeWidth={2}
                        />
                        <span>{item.name}</span>
                    </NavLink>
                ))}
            </nav>

            {/* User Section */}
            <div className="p-4 m-4 mt-auto rounded-xl bg-stone-50 border border-stone-100">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-stone-400 shadow-sm">
                        <User size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-ink truncate">
                            Admin
                        </p>
                        <p className="text-xs text-stone-500 truncate">
                            System User
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

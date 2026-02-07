import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    CalendarCheck,
    Settings,
    LogOut,
    UserCircle
} from 'lucide-react';

const Sidebar = () => {
    const navItems = [
        { path: '/', label: 'Overview', icon: LayoutDashboard },
        { path: '/employees', label: 'Employees', icon: Users },
        { path: '/attendance', label: 'Attendance', icon: CalendarCheck },
    ];

    return (
        <aside className="w-64 bg-surface h-screen fixed left-0 top-0 border-r border-stone-100 flex flex-col z-20 shadow-soft">
            {/* Logo Section */}
            <div className="p-6 border-b border-stone-50">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center shadow-lg shadow-brand/20">
                        <span className="text-white font-bold text-lg">H</span>
                    </div>
                    <span className="font-bold text-xl text-ink tracking-tight">HRMS<span className="text-brand">Lite</span></span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-1">
                {navItems.map(({ path, label, icon: Icon }) => (
                    <NavLink
                        key={path}
                        to={path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                ? 'bg-brand-50 text-brand border-l-4 border-brand'
                                : 'text-stone-500 hover:bg-stone-50 hover:text-ink'
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <Icon
                                    size={22}
                                    className={`transition-colors ${isActive ? 'text-brand' : 'text-stone-400 group-hover:text-ink'}`}
                                    strokeWidth={isActive ? 2.5 : 2}
                                />
                                <span className={`font-medium ${isActive ? 'font-semibold' : ''}`}>{label}</span>
                            </>
                        )}
                    </NavLink>
                ))}
            </nav>

            {/* User Profile Section */}
            <div className="p-4 m-4 bg-stone-50 rounded-xl border border-stone-100">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
                        <UserCircle size={28} className="text-stone-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-ink truncate">Admin User</p>
                        <p className="text-xs text-stone-500 truncate">admin@company.com</p>
                    </div>
                    <button className="p-1.5 hover:bg-white rounded-lg text-stone-400 hover:text-danger transition-colors">
                        <LogOut size={16} />
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

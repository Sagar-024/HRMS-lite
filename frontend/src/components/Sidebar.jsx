import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Calendar, User } from 'lucide-react';

const Sidebar = () => {
    const navItems = [
        { name: 'Dashboard', path: '/', icon: LayoutDashboard },
        { name: 'Employees', path: '/employees', icon: Users },
        { name: 'Attendance', path: '/attendance', icon: Calendar },
    ];

    return (
        <aside className="w-64 bg-white border-r border-stone-200/60 flex flex-col h-screen sticky top-0 shadow-sm">
            {/* Logo / Brand */}
            <div className="p-6 border-b border-stone-200/60">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-violet-600 flex items-center justify-center shadow-md">
                        <span className="text-white font-display font-bold text-xl">H</span>
                    </div>
                    <div>
                        <h2 className="font-display font-bold text-xl text-ink tracking-tight">HRMS</h2>
                        <p className="text-xs font-semibold text-ink-lighter uppercase tracking-wider">Lite</p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === '/'}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                    ? 'bg-gradient-to-r from-brand-50 to-violet-50 text-brand-700 shadow-sm border border-brand-100'
                                    : 'text-ink-light hover:bg-stone-50 hover:text-ink'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <Icon
                                        size={20}
                                        strokeWidth={2.5}
                                        className={isActive ? 'text-brand-600' : 'text-ink-lighter group-hover:text-ink-light'}
                                    />
                                    <span className="font-semibold text-sm">{item.name}</span>
                                </>
                            )}
                        </NavLink>
                    );
                })}
            </nav>

            {/* User Profile */}
            <div className="p-4 border-t border-stone-200/60">
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-stone-50 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center shadow-sm">
                        <User size={18} strokeWidth={2.5} className="text-stone-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm text-ink truncate">Admin User</p>
                        <p className="text-xs text-ink-lighter truncate">admin@hrms.com</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

import React from 'react';
import useStore from '../store/useStore';
import {
    Users,
    UserCheck,
    UserX,
    Clock,
    TrendingUp,
    TrendingDown,
    Activity
} from 'lucide-react';
import { motion } from 'framer-motion';

const StatCard = ({ label, value, subtext, icon: Icon, color, trend }) => {
    const configs = {
        blue: {
            gradient: 'from-brand-50 to-brand-100/50',
            iconBg: 'bg-gradient-to-br from-brand-500 to-brand-600',
            iconColor: 'text-white',
            border: 'border-brand-200/50',
            trendBg: 'bg-brand-50',
            trendText: 'text-brand-700'
        },
        green: {
            gradient: 'from-success-50 to-emerald-100/50',
            iconBg: 'bg-gradient-to-br from-success-500 to-emerald-600',
            iconColor: 'text-white',
            border: 'border-success-200/50',
            trendBg: 'bg-success-50',
            trendText: 'text-success-700'
        },
        red: {
            gradient: 'from-danger-50 to-rose-100/50',
            iconBg: 'bg-gradient-to-br from-danger-500 to-rose-600',
            iconColor: 'text-white',
            border: 'border-danger-200/50',
            trendBg: 'bg-danger-50',
            trendText: 'text-danger-700'
        },
        violet: {
            gradient: 'from-violet-50 to-purple-100/50',
            iconBg: 'bg-gradient-to-br from-violet-500 to-purple-600',
            iconColor: 'text-white',
            border: 'border-violet-200/50',
            trendBg: 'bg-violet-50',
            trendText: 'text-violet-700'
        }
    };

    const style = configs[color] || configs.blue;

    return (
        <motion.div
            className={`relative overflow-hidden rounded-2xl shadow-card hover:shadow-hover border ${style.border} transition-all duration-300 group`}
            whileHover={{ y: -2, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient}`} />

            {/* Content */}
            <div className="relative p-6 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start mb-4">
                    {/* Icon with refined shadow */}
                    <div className={`p-3.5 rounded-xl ${style.iconBg} ${style.iconColor} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={24} strokeWidth={2.5} />
                    </div>

                    {/* Trend Indicator */}
                    {trend && (
                        <div className={`flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 rounded-full ${style.trendBg} ${style.trendText}`}>
                            {trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                            <span>{trend === 'up' ? '+12%' : '-2%'}</span>
                        </div>
                    )}
                </div>

                <div>
                    {/* Value */}
                    <h3 className="text-4xl font-display font-bold text-ink tracking-tight mb-2">
                        {value}
                    </h3>

                    {/* Label */}
                    <p className="text-xs font-bold text-ink-light uppercase tracking-wider mb-1.5">
                        {label}
                    </p>

                    {/* Subtext with icon */}
                    <div className="flex items-center gap-1.5 text-xs font-medium text-ink-lighter">
                        <Activity size={12} className="opacity-60" />
                        <span>{subtext}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const DashboardCards = () => {
    const { employees, attendance, loading } = useStore();

    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-40 bg-gradient-to-br from-stone-50 to-stone-100 rounded-2xl animate-pulse shadow-soft" />
                ))}
            </div>
        );
    }

    // Calculate Metrics
    const totalEmployees = employees.length;
    const today = new Date().toISOString().split('T')[0];
    const todayRecords = attendance.filter(a => a.date && a.date.startsWith(today));
    const presentCount = todayRecords.filter(a => a.status === 'Present').length;
    const absentCount = todayRecords.filter(a => a.status === 'Absent').length;

    const attendanceRate = totalEmployees > 0
        ? Math.round((presentCount / totalEmployees) * 100)
        : 0;

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <StatCard
                label="Total Employees"
                value={totalEmployees}
                subtext={employees.length > 0 ? '+2 new this month' : 'No data yet'}
                icon={Users}
                color="blue"
                trend="up"
            />
            <StatCard
                label="Present Today"
                value={presentCount}
                subtext="Checked in on time"
                icon={UserCheck}
                color="green"
                trend="up"
            />
            <StatCard
                label="Absent / Leave"
                value={absentCount}
                subtext="Requires attention"
                icon={UserX}
                color="red"
                trend="down"
            />
            <StatCard
                label="Attendance Rate"
                value={`${attendanceRate}%`}
                subtext="Daily active workforce"
                icon={Clock}
                color="violet"
            />
        </section>
    );
};

export default DashboardCards;

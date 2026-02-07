import React from 'react';
import useStore from '../store/useStore';
import {
    Users,
    UserCheck,
    UserX,
    Clock,
    TrendingUp,
    TrendingDown
} from 'lucide-react';

const StatCard = ({ label, value, subtext, icon: Icon, color, trend }) => {
    // Map basic colors to Tailwind classes
    const colorStyles = {
        blue: { bg: 'bg-blue-50', text: 'text-brand', icon: 'text-brand' },
        green: { bg: 'bg-green-50', text: 'text-success', icon: 'text-success' },
        red: { bg: 'bg-red-50', text: 'text-danger', icon: 'text-danger' },
        stone: { bg: 'bg-stone-50', text: 'text-stone-600', icon: 'text-stone-500' },
    };

    const style = colorStyles[color] || colorStyles.blue;

    return (
        <div className="bg-surface p-6 rounded-xl shadow-card flex flex-col justify-between h-full border border-transparent hover:border-blue-100 transition-all duration-200">
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg ${style.bg} ${style.icon}`}>
                    <Icon size={28} strokeWidth={2.5} />
                </div>
                {trend && (
                    <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${trend === 'up' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                        {trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                        <span>{trend === 'up' ? '+12%' : '-2%'}</span>
                    </div>
                )}
            </div>

            <div>
                <h3 className="text-3xl font-bold text-ink mb-1 tracking-tight">{value}</h3>
                <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">{label}</p>
                <p className="text-xs text-stone-400 font-medium italic">{subtext}</p>
            </div>
        </div>
    );
};

const DashboardCards = () => {
    const { employees, attendance, loading } = useStore();

    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-40 bg-white rounded-xl shadow-soft animate-pulse"></div>
                ))}
            </div>
        );
    }

    // Calculate Metrics
    const totalEmployees = employees.length;

    // Get today's attendance
    const today = new Date().toISOString().split('T')[0];
    const todayRecords = attendance.filter(a => a.date && a.date.startsWith(today));

    const presentCount = todayRecords.filter(a => a.status === 'Present').length;
    const absentCount = todayRecords.filter(a => a.status === 'Absent').length;

    // Calculate attendance percentage
    const attendanceRate = totalEmployees > 0
        ? Math.round((presentCount / totalEmployees) * 100)
        : 0;

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 x gap-6">
            <StatCard
                label="Total Employees"
                value={totalEmployees}
                subtext={`${employees.length > 0 ? '+2 new this month' : 'No employees yet'}`}
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
                subtext="Total not active"
                icon={UserX}
                color="red"
                trend="down"
            />
            <StatCard
                label="Attendance Rate"
                value={`${attendanceRate}%`}
                subtext="Daily active workforce"
                icon={Clock}
                color="stone"
            />
        </section>
    );
};

export default DashboardCards;

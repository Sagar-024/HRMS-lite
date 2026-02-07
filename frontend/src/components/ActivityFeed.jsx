import React from 'react';
import useStore from '../store/useStore';
import { CheckCircle, XCircle, UserPlus, Clock } from 'lucide-react';

const ActivityItem = ({ icon: Icon, color, bg, title, time, user }) => (
    <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-stone-50 transition-colors cursor-default group">
        {/* Avatar / Icon Container */}
        <div className="relative">
            <div className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center text-white shadow-sm z-10 relative`}>
                <Icon size={18} strokeWidth={2.5} />
            </div>
            <div className="absolute inset-0 bg-white rounded-full scale-110 opacity-0 group-hover:opacity-20 transition-opacity"></div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 py-0.5">
            <p className="text-sm font-medium text-ink leading-none mb-1.5">
                {title}
            </p>
            <div className="flex items-center gap-2">
                {user && (
                    <span className="flex items-center gap-1.5 px-1.5 py-0.5 rounded-md bg-white border border-stone-100 text-xs text-stone-600 font-medium">
                        <div className="w-4 h-4 rounded-full bg-stone-200 flex items-center justify-center text-[8px] font-bold text-stone-500">
                            {user.charAt(0)}
                        </div>
                        {user}
                    </span>
                )}
                <span className="text-xs text-stone-400">{time}</span>
            </div>
        </div>
    </div>
);

const ActivityFeed = () => {
    const { attendance, employees } = useStore();

    // Derive recent activity from real data
    // 1. New Employees (limit 2)
    const recentEmployees = [...employees].reverse().slice(0, 3).map(emp => ({
        type: 'new_employee',
        data: emp,
        time: 'Recently' // We don't have createdAt in frontend store for employees yet, simplified
    }));

    // 2. Recent Attendance (limit 5)
    // We need to sort attendance by date/time (assuming array order is somewhat time-based or we use date)
    // For now, just take the raw list reverse
    const recentAttendance = [...attendance].reverse().slice(0, 5).map(att => ({
        type: 'attendance',
        data: att,
        time: 'Today' // Simplified
    }));

    const activities = [...recentEmployees, ...recentAttendance].slice(0, 6);

    return (
        <div className="bg-surface rounded-xl shadow-card p-6 h-full border border-stone-100">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-ink tracking-tight">Recent Activity</h3>
                <button className="text-xs font-semibold text-brand hover:text-brand-600 uppercase tracking-wider">View All</button>
            </div>

            <div className="space-y-1">
                {/* Fallback if empty */}
                {activities.length === 0 && (
                    <p className="text-stone-400 text-sm italic text-center py-8">No recent activity</p>
                )}

                {activities.map((item, idx) => {
                    if (item.type === 'new_employee') {
                        return (
                            <ActivityItem
                                key={`emp-${idx}`}
                                icon={UserPlus}
                                color="text-white"
                                bg="bg-brand"
                                title={`New employee joined: ${item.data.fullName}`}
                                user={item.data.fullName}
                                time="Just now"
                            />
                        );
                    } else {
                        const isPresent = item.data.status === 'Present';
                        return (
                            <ActivityItem
                                key={`att-${idx}`}
                                icon={isPresent ? CheckCircle : XCircle}
                                color="text-white"
                                bg={isPresent ? "bg-success" : "bg-danger"}
                                title={`Marked ${item.data.status}`}
                                user={item.data.employeeId}
                                time={new Date(item.data.date).toLocaleDateString()}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default ActivityFeed;

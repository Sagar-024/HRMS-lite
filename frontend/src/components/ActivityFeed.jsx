import React from 'react';
import useStore from '../store/useStore';
import { CheckCircle, XCircle, UserPlus, Clock, ChevronRight, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const ActivityItem = ({ icon: Icon, colorScheme, title, time, user, index }) => {
    const schemes = {
        blue: 'bg-gradient-to-br from-brand-500 to-brand-600',
        green: 'bg-gradient-to-br from-success-500 to-emerald-600',
        red: 'bg-gradient-to-br from-danger-500 to-rose-600',
        violet: 'bg-gradient-to-br from-violet-500 to-purple-600'
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08, type: "spring", stiffness: 100 }}
            className="flex items-start gap-4 p-4 rounded-xl hover:bg-stone-50/50 transition-all duration-200 group cursor-default relative overflow-hidden border border-transparent hover:border-stone-100"
        >
            {/* Subtle hover shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />

            {/* Icon */}
            <div className={`relative flex-shrink-0 w-11 h-11 rounded-xl ${schemes[colorScheme]} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200`}>
                <Icon size={18} strokeWidth={2.5} />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 pt-0.5">
                <div className="flex justify-between items-start mb-1.5">
                    <p className="text-sm font-semibold text-ink leading-tight group-hover:text-brand-600 transition-colors">
                        {title}
                    </p>
                    <span className="text-[10px] uppercase font-bold text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full tracking-wide flex-shrink-0 ml-2">
                        {time}
                    </span>
                </div>

                {user && (
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-stone-50 border border-stone-100/50 w-fit">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center text-[9px] font-black text-stone-600 shadow-sm">
                            {user.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-xs font-semibold text-stone-600">
                            {user}
                        </span>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

const ActivityFeed = () => {
    const { attendance, employees } = useStore();

    const recentEmployees = [...employees].reverse().slice(0, 3).map(emp => ({
        type: 'new_employee',
        data: emp,
        time: 'New'
    }));

    const recentAttendance = [...attendance].reverse().slice(0, 5).map(att => ({
        type: 'attendance',
        data: att,
        time: 'Today'
    }));

    const activities = [...recentEmployees, ...recentAttendance].slice(0, 6);

    return (
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-card border border-stone-200/50 overflow-hidden h-full flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-gradient-to-b from-stone-50/50 to-white">
                <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-gradient-to-br from-violet-50 to-purple-50 text-violet-600 rounded-lg">
                        <Activity size={18} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-lg font-display font-bold text-ink tracking-tight">Live Activity</h3>
                </div>
                <button className="text-xs font-bold text-violet-600 hover:text-violet-700 hover:bg-violet-50 px-3 py-1.5 rounded-lg transition-all flex items-center gap-1">
                    View All
                    <ChevronRight size={14} />
                </button>
            </div>

            {/* Scrollable List */}
            <div className="p-4 space-y-1 overflow-y-auto flex-1 custom-scrollbar">
                {activities.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-48 text-stone-400 gap-3">
                        <Activity size={32} className="opacity-20" />
                        <p className="text-sm font-medium">No recent activity</p>
                    </div>
                )}

                {activities.map((item, idx) => {
                    if (item.type === 'new_employee') {
                        return (
                            <ActivityItem
                                key={`emp-${idx}`}
                                index={idx}
                                icon={UserPlus}
                                colorScheme="violet"
                                title="New Team Member"
                                user={item.data.fullName}
                                time={item.time}
                            />
                        );
                    } else {
                        const isPresent = item.data.status === 'Present';
                        return (
                            <ActivityItem
                                key={`att-${idx}`}
                                index={idx}
                                icon={isPresent ? Clock : XCircle}
                                colorScheme={isPresent ? "green" : "red"}
                                title={isPresent ? "Clocked In" : "Marked Absent"}
                                user={item.data.employeeId}
                                time="Just now"
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default ActivityFeed;

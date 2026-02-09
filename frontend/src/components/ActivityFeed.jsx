import React from 'react';
import useStore from '../store/useStore';
import { CheckCircle, XCircle, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';

const ActivityItem = React.memo(({ icon: Icon, bg, title, time, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
            delay: index * 0.06,
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1]
        }}
        className="flex items-start gap-4 group cursor-default"
        role="listitem"
        aria-label={`${title} - ${time}`}
        tabIndex={0}
        style={{
            padding: '16px 0',
            borderBottom: '1px solid #F4F4F5',
            transition: 'background 0.2s ease'
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.background = '#FAFAFA';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
        }}
    >
        {/* Avatar - Rounded */}
        <div
            className="flex-shrink-0 flex items-center justify-center overflow-hidden"
            style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: bg,
                border: '2px solid #FFFFFF',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.12)'
            }}
        >
            <Icon size={18} strokeWidth={2.5} className="text-white" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 pt-1">
            <p
                className="antialiased"
                style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    lineHeight: 1.4,
                    color: '#0A0A0A',
                    marginBottom: '4px'
                }}
            >
                {title}
            </p>
            <p
                className="antialiased"
                style={{
                    fontSize: '13px',
                    fontWeight: 400,
                    color: '#A1A1AA'
                }}
            >
                {time}
            </p>
        </div>
    </motion.div>
));

ActivityItem.displayName = 'ActivityItem';

const ActivityFeed = React.memo(() => {
    const { attendance, employees, loading } = useStore();

    const recentEmployees = [...employees].reverse().slice(0, 2).map(emp => ({
        type: 'new_employee',
        data: emp,
        time: 'Just now'
    }));

    const recentAttendance = [...attendance].reverse().slice(0, 4).map(att => {
        const date = new Date(att.date);
        const isToday = date.toDateString() === new Date().toDateString();
        const timeStr = isToday
            ? `Today at ${date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`
            : date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

        return {
            type: 'attendance',
            data: att,
            time: timeStr
        };
    });

    const activities = [...recentEmployees, ...recentAttendance].slice(0, 6);

    // Loading skeleton
    if (loading) {
        return (
            <div
                className="bg-white h-full card-inset overflow-hidden p-5 sm:p-6 lg:p-7"
                style={{
                    border: '1px solid #E4E4E7',
                    borderRadius: '12px'
                }}
            >
                <div className="flex items-center justify-between mb-8 pb-6" style={{ borderBottom: '1.5px solid #F4F4F5' }}>
                    <div style={{ width: '140px', height: '20px', background: '#F4F4F5', borderRadius: '4px' }} />
                </div>
                {[1, 2, 3, 4].map(i => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0.4 }}
                        animate={{ opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                        className="flex items-start gap-4"
                        style={{ padding: '16px 0', borderBottom: '1px solid #F4F4F5' }}
                    >
                        <div style={{ width: '40px', height: '40px', background: '#F4F4F5', borderRadius: '8px' }} />
                        <div className="flex-1">
                            <div style={{ width: '70%', height: '16px', background: '#F4F4F5', borderRadius: '4px', marginBottom: '8px' }} />
                            <div style={{ width: '40%', height: '12px', background: '#F4F4F5', borderRadius: '4px' }} />
                        </div>
                    </motion.div>
                ))}
            </div>
        );
    }

    return (
        <div
            className="card h-full p-6 sm:p-8"
            role="region"
            aria-label="Recent Activity Feed"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-6" style={{ borderBottom: '1.5px solid #F4F4F5' }}>
                <h3
                    className="antialiased text-base sm:text-lg font-bold"
                    style={{
                        color: '#0A0A0A',
                        letterSpacing: '-0.01em'
                    }}
                >
                    Recent Activity
                </h3>
            </div>

            {/* Activity List */}
            <div role="list" aria-label="Activity items">
                {activities.length === 0 && (
                    <p
                        className="text-center antialiased"
                        style={{
                            fontSize: '14px',
                            color: '#A1A1AA',
                            padding: '32px 0'
                        }}
                    >
                        No recent activity
                    </p>
                )}

                {activities.map((item, idx) => {
                    if (item.type === 'new_employee') {
                        return (
                            <ActivityItem
                                key={`emp-${idx}`}
                                index={idx}
                                icon={UserPlus}
                                bg="#2563EB"
                                title={`${item.data.fullName} joined the team`}
                                time={item.time}
                            />
                        );
                    } else {
                        const isPresent = item.data.status === 'Present';
                        return (
                            <ActivityItem
                                key={`att-${idx}`}
                                index={idx}
                                icon={isPresent ? CheckCircle : XCircle}
                                bg={isPresent ? "#059669" : "#DC2626"}
                                title={`${item.data.employeeId} marked ${item.data.status.toLowerCase()}`}
                                time={item.time}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
});

ActivityFeed.displayName = 'ActivityFeed';

export default ActivityFeed;

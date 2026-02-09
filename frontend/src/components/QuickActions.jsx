import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus, Calendar, FileText, Settings, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ActionCard = React.memo(({ title, icon: Icon, desc, onClick, index }) => {
    return (
        <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                delay: index * 0.08,
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1]
            }}
            onClick={onClick}
            aria-label={`${title}: ${desc}`}
            className="group w-full text-left flex items-start justify-between relative card p-8 hover:border-stone-300"
            whileHover={{ y: -2 }}
        >
            <div className="flex items-start gap-4 flex-1">
                {/* Icon */}
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg border border-stone-100 bg-stone-50 text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300">
                    <Icon
                        size={22}
                        strokeWidth={2}
                    />
                </div>

                {/* Content */}
                <div className="flex-1">
                    <h4 className="font-bold text-base text-ink mb-1 group-hover:text-brand transition-colors duration-300">
                        {title}
                    </h4>
                    <p className="text-sm text-stone-500 leading-normal">
                        {desc}
                    </p>
                </div>
            </div>

            {/* Arrow */}
            <div className="text-stone-300 group-hover:text-brand transition-colors duration-300 transform group-hover:translate-x-1">
                <ArrowRight size={20} strokeWidth={2} />
            </div>
        </motion.button>
    );
});

ActionCard.displayName = 'ActionCard';

const QuickActions = React.memo(() => {
    const navigate = useNavigate();

    return (
        <div>
            <h3
                className="antialiased mb-6"
                style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#0A0A0A',
                    letterSpacing: '-0.01em'
                }}
            >
                Quick Actions
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <ActionCard
                    index={0}
                    title="Add Employee"
                    icon={UserPlus}
                    desc="Onboard a new team member"
                    onClick={() => navigate('/employees')}
                />
                <ActionCard
                    index={1}
                    title="Mark Attendance"
                    icon={Calendar}
                    desc="Log daily attendance"
                    onClick={() => navigate('/attendance')}
                />
                <ActionCard
                    index={2}
                    title="Generate Report"
                    icon={FileText}
                    desc="Export activity summary"
                    onClick={() => { }}
                />
                <ActionCard
                    index={3}
                    title="System Settings"
                    icon={Settings}
                    desc="Configure preferences"
                    onClick={() => { }}
                />
            </div>
        </div>
    );
});

QuickActions.displayName = 'QuickActions';

export default QuickActions;

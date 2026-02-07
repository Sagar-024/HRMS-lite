import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus, Calendar, FileText, Settings, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ActionCard = ({ title, icon: Icon, desc, variant, onClick }) => {
    const variants = {
        primary: {
            container: 'bg-gradient-to-br from-coral-500 to-coral-600 text-white shadow-lg hover:shadow-xl',
            icon: 'bg-white/20 backdrop-blur-sm',
            iconColor: 'text-white',
            textColor: 'text-white',
            descColor: 'text-white/90',
            chevronColor: 'text-white/70'
        },
        secondary: {
            container: 'bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-lg hover:shadow-xl',
            icon: 'bg-white/20 backdrop-blur-sm',
            iconColor: 'text-white',
            textColor: 'text-white',
            descColor: 'text-white/90',
            chevronColor: 'text-white/70'
        },
        tertiary: {
            container: 'bg-white border border-stone-200/80 hover:border-violet-200 shadow-soft hover:shadow-card',
            icon: 'bg-gradient-to-br from-violet-50 to-purple-50',
            iconColor: 'text-violet-600',
            textColor: 'text-ink',
            descColor: 'text-ink-light',
            chevronColor: 'text-stone-400'
        },
        quaternary: {
            container: 'bg-white border border-stone-200/80 hover:border-stone-300 shadow-soft hover:shadow-card',
            icon: 'bg-gradient-to-br from-stone-50 to-stone-100',
            iconColor: 'text-stone-600',
            textColor: 'text-ink',
            descColor: 'text-ink-light',
            chevronColor: 'text-stone-400'
        }
    };

    const style = variants[variant] || variants.tertiary;
    const isPrimary = variant === 'primary' || variant === 'secondary';

    return (
        <motion.button
            onClick={onClick}
            className={`group w-full p-6 rounded-2xl text-left flex items-start gap-5 relative overflow-hidden transition-all duration-300 ${style.container}`}
            whileHover={{ scale: 1.02, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Decorative Background Pattern for Primary/Secondary */}
            {isPrimary && (
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Icon size={120} strokeWidth={0.5} />
                </div>
            )}

            {/* Icon */}
            <div className={`relative z-10 p-3.5 rounded-xl ${style.icon} group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={24} strokeWidth={2.5} className={style.iconColor} />
            </div>

            {/* Content */}
            <div className="flex-1 relative z-10">
                <div className="flex items-start justify-between mb-2">
                    <h4 className={`font-display font-bold text-xl ${style.textColor}`}>
                        {title}
                    </h4>
                    <ChevronRight
                        size={20}
                        className={`${style.chevronColor} transform transition-transform duration-300 group-hover:translate-x-1`}
                    />
                </div>
                <p className={`text-sm leading-relaxed font-medium ${style.descColor}`}>
                    {desc}
                </p>
            </div>
        </motion.button>
    );
};

const QuickActions = () => {
    const navigate = useNavigate();

    return (
        <section>
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-display font-bold text-ink tracking-tight">
                    Quick Actions
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <ActionCard
                    title="Add Employee"
                    icon={UserPlus}
                    desc="Onboard a new team member to the system."
                    variant="primary"
                    onClick={() => navigate('/employees')}
                />
                <ActionCard
                    title="Mark Attendance"
                    icon={Calendar}
                    desc="Log daily attendance for employees."
                    variant="secondary"
                    onClick={() => navigate('/attendance')}
                />
                <ActionCard
                    title="Reports"
                    icon={FileText}
                    desc="Export monthly activity summaries."
                    variant="tertiary"
                    onClick={() => { }}
                />
                <ActionCard
                    title="Settings"
                    icon={Settings}
                    desc="Configure system preferences."
                    variant="quaternary"
                    onClick={() => { }}
                />
            </div>
        </section>
    );
};

export default QuickActions;

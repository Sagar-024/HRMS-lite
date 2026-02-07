import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus, Calendar, FileText, Settings, ChevronRight } from 'lucide-react';

const ActionCard = ({ title, icon: Icon, desc, color, onClick }) => {
    // Map colors
    const colors = {
        coral: 'bg-coral text-white',
        blue: 'bg-brand text-white',
        indigo: 'bg-indigo-500 text-white',
        stone: 'bg-stone-500 text-white'
    };

    return (
        <button
            onClick={onClick}
            className="group w-full bg-surface p-5 rounded-xl shadow-card hover:shadow-hover border border-transparent hover:border-blue-100 transition-all duration-200 text-left flex items-start gap-4"
        >
            <div className={`p-3 rounded-lg ${colors[color]} shadow-md group-hover:scale-110 transition-transform duration-200`}>
                <Icon size={24} strokeWidth={2} />
            </div>
            <div className="flex-1">
                <h4 className="font-bold text-ink text-lg group-hover:text-brand transition-colors flex items-center justify-between">
                    {title}
                    <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all text-stone-400" />
                </h4>
                <p className="text-sm text-stone-500 mt-1 leading-relaxed">{desc}</p>
            </div>
        </button>
    );
};

const QuickActions = () => {
    const navigate = useNavigate();

    return (
        <section>
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-ink tracking-tight">Quick Actions</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ActionCard
                    title="Add Employee"
                    icon={UserPlus}
                    desc="Onboard a new team member to the system."
                    color="coral"
                    onClick={() => navigate('/employees')}
                />
                <ActionCard
                    title="Mark Attendance"
                    icon={Calendar}
                    desc="Log daily attendance for employees."
                    color="blue"
                    onClick={() => navigate('/attendance')}
                />
                {/* Placeholders for future features to fill grid */}
                <ActionCard
                    title="Generate Report"
                    icon={FileText}
                    desc="Export monthly activity summary."
                    color="indigo"
                    onClick={() => { }} // No-op for now
                />
                <ActionCard
                    title="System Settings"
                    icon={Settings}
                    desc="Configure global preferences."
                    color="stone"
                    onClick={() => { }} // No-op for now
                />
            </div>
        </section>
    );
};

export default QuickActions;

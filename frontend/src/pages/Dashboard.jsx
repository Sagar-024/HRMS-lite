import React, { useEffect } from 'react';
import useStore from '../store/useStore';
import { motion } from 'framer-motion';

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 80, damping: 20 }
    }
};

const Dashboard = () => {
    const { fetchData } = useStore();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const userName = "Admin";
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric'
    });

    return (
        <motion.div
            className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Atmospheric Background Elements */}
            <div className="fixed top-0 left-0 w-full h-96 bg-gradient-to-b from-brand-50/40 via-violet-50/20 to-transparent -z-10 pointer-events-none" />
            <div className="fixed top-[-150px] right-[-150px] w-[600px] h-[600px] bg-gradient-radial from-violet-100/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

            {/* Header Section */}
            <motion.div
                variants={itemVariants}
                className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200/60"
            >
                <div className="space-y-3">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-ink tracking-tight text-balance">
                        {greeting}, <span className="gradient-text">{userName}</span>
                    </h1>
                    <p className="text-base md:text-lg text-ink-light font-medium max-w-2xl leading-relaxed">
                        Your daily command center for workforce management and analytics.
                    </p>
                </div>

                {/* Date Badge */}
                <div className="bg-white/90 backdrop-blur-sm px-5 py-3.5 rounded-2xl shadow-card border border-stone-200/50 min-w-[160px]">
                    <div className="text-xs font-bold uppercase tracking-wider text-ink-lighter mb-1 text-center">
                        Today
                    </div>
                    <div className="text-base font-display font-bold text-ink text-center">
                        {currentDate}
                    </div>
                </div>
            </motion.div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Metrics Row - Full Width */}
                <div className="lg:col-span-12">
                    <motion.div variants={itemVariants}>
                        <DashboardCardsWithData />
                    </motion.div>
                </div>

                {/* Left Column: Actions & Placeholder */}
                <div className="lg:col-span-8 space-y-8">
                    <motion.div variants={itemVariants}>
                        <QuickActionsWithRouting />
                    </motion.div>

                    {/* Analytics Placeholder */}
                    <motion.div
                        variants={itemVariants}
                        className="relative bg-white rounded-2xl shadow-card border border-stone-200/50 p-8 min-h-[320px] flex flex-col items-center justify-center text-center overflow-hidden group"
                    >
                        {/* Subtle gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-stone-50/50 to-transparent -z-10" />

                        {/* Decorative chart bars */}
                        <div className="flex items-end gap-2 h-32 mb-6 opacity-20 group-hover:opacity-30 transition-opacity">
                            {[35, 65, 42, 85, 60, 90, 45, 58, 78, 55].map((h, i) => (
                                <div
                                    key={i}
                                    className="w-6 bg-gradient-to-t from-brand-500 to-violet-400 rounded-t-lg"
                                    style={{ height: `${h}%` }}
                                />
                            ))}
                        </div>

                        <h4 className="text-xl font-display font-bold text-ink-light mb-2">
                            Analytics Dashboard
                        </h4>
                        <p className="text-sm text-ink-lighter font-medium">
                            Performance insights and metrics visualization coming soon
                        </p>
                    </motion.div>
                </div>

                {/* Right Column: Activity Feed - Sticky */}
                <motion.div
                    className="lg:col-span-4 lg:sticky lg:top-8 h-fit max-h-[calc(100vh-8rem)]"
                    variants={itemVariants}
                >
                    <ActivityFeedWithData />
                </motion.div>
            </div>
        </motion.div>
    );
};

// Wrapper components
import DashboardCards from '../components/DashboardCards';
import QuickActions from '../components/QuickActions';
import ActivityFeed from '../components/ActivityFeed';

const DashboardCardsWithData = () => <DashboardCards />;
const QuickActionsWithRouting = () => <QuickActions />;
const ActivityFeedWithData = () => <ActivityFeed />;

export default Dashboard;

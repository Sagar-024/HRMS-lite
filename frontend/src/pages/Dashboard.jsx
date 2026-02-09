import React, { useEffect, useState, useMemo } from 'react';
import useStore from '../store/useStore';
import { motion } from 'framer-motion';
import DashboardCards from '../components/DashboardCards';
import QuickActions from '../components/QuickActions';
import ActivityFeed from '../components/ActivityFeed';

const Dashboard = () => {
    const { fetchData } = useStore();
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        fetchData();
        // Update date every minute
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 60000);
        return () => clearInterval(interval);
    }, [fetchData]);

    // Format date as "Feb 07, 2026" - memoized for performance
    const formattedDate = useMemo(() => {
        return currentDate.toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric'
        });
    }, [currentDate]);

    return (
        <div className="min-h-screen p-6 md:p-10 lg:p-16">
            {/* Header Content */}
            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                role="banner"
                className="mb-12"
            >
                <h1
                    className="antialiased"
                    style={{
                        fontFamily: "'Instrument Serif', Georgia, serif",
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 500,
                        lineHeight: 0.95,
                        color: '#0A0A0A',
                        marginBottom: '0',
                        letterSpacing: '-0.04em'
                    }}
                >
                    Operations
                    <br />
                    <span style={{
                        fontStyle: 'italic',
                        color: '#A1A1AA',
                        fontWeight: 400
                    }}>
                        Overview.
                    </span>
                </h1>
                <p
                    className="antialiased"
                    style={{
                        fontSize: '17px',
                        fontWeight: 400,
                        color: '#71717A',
                        maxWidth: '560px',
                        lineHeight: 1.7,
                        marginTop: '20px'
                    }}
                >
                    Manage your team's daily activities, track attendance, and oversee workforce distribution from a central command.
                </p>
            </motion.header>

            <div className="flex flex-col gap-8 lg:gap-12">
                {/* Stats - Full Width */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <DashboardCards />
                </motion.div>

                {/* Split View: Actions & Feed */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left Column - 8/12 - Quick Actions */}
                    <div className="col-span-1 lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <QuickActions />
                        </motion.div>
                    </div>

                    {/* Right Column - 4/12 - Feed */}
                    <motion.div
                        className="col-span-1 lg:col-span-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <ActivityFeed />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

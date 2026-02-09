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

            {/* Header Section with Dashed Grid Background (Top Right Fade) */}
            <div className="relative mb-16">
                {/* Dashed Top Right Fade Grid */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #a1a1aa 1px, transparent 1px),
                            linear-gradient(to bottom, #a1a1aa 1px, transparent 1px)
                        `,
                        backgroundSize: "20px 20px",
                        backgroundPosition: "0 0, 0 0",
                        maskImage: `
                            repeating-linear-gradient(
                                to right,
                                black 0px,
                                black 3px,
                                transparent 3px,
                                transparent 8px
                            ),
                            repeating-linear-gradient(
                                to bottom,
                                black 0px,
                                black 3px,
                                transparent 3px,
                                transparent 8px
                            ),
                            radial-gradient(ellipse 65% 70% at 100% 0%, #000 35%, transparent 75%)
                        `,
                        WebkitMaskImage: `
                            repeating-linear-gradient(
                                to right,
                                black 0px,
                                black 3px,
                                transparent 3px,
                                transparent 8px
                            ),
                            repeating-linear-gradient(
                                to bottom,
                                black 0px,
                                black 3px,
                                transparent 3px,
                                transparent 8px
                            ),
                            radial-gradient(ellipse 65% 70% at 100% 0%, #000 35%, transparent 75%)
                        `,
                        maskComposite: "intersect",
                        WebkitMaskComposite: "source-in",
                    }}
                />

                {/* Header Content */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    role="banner"
                    className="relative z-10"
                    style={{
                        paddingBottom: '40px'
                    }}
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
            </div>

            {/* Diagonal Striped Separator */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="mb-16"
                style={{
                    height: '6px',
                    width: '100%',
                    transformOrigin: 'left',
                    backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 2px, #71717A 2px, #71717A 4px)",
                }}
            />

            {/* Main Content Grid with Dashed Grid Background */}
            <div
                className="relative mt-0 py-8 lg:py-12"
            >
                {/* Dashed Grid Background */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #a1a1aa 1px, transparent 1px),
                            linear-gradient(to bottom, #a1a1aa 1px, transparent 1px)
                        `,
                        backgroundSize: "20px 20px",
                        backgroundPosition: "0 0, 0 0",
                        maskImage: `
                            repeating-linear-gradient(
                                to right,
                                black 0px,
                                black 3px,
                                transparent 3px,
                                transparent 8px
                            ),
                            repeating-linear-gradient(
                                to bottom,
                                black 0px,
                                black 3px,
                                transparent 3px,
                                transparent 8px
                            )
                        `,
                        WebkitMaskImage: `
                            repeating-linear-gradient(
                                to right,
                                black 0px,
                                black 3px,
                                transparent 3px,
                                transparent 8px
                            ),
                            repeating-linear-gradient(
                                to bottom,
                                black 0px,
                                black 3px,
                                transparent 3px,
                                transparent 8px
                            )
                        `,
                        maskComposite: "intersect",
                        WebkitMaskComposite: "source-in",
                    }}
                />

                {/* Subtle gradient overlay for depth */}
                <motion.div
                    className="absolute inset-0 z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    style={{
                        background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.02) 0%, transparent 50%, rgba(168, 85, 247, 0.02) 100%)',
                        pointerEvents: 'none'
                    }}
                />

                {/* Content */}
                <div className="flex flex-col gap-8 lg:gap-12 relative z-10">
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
        </div>
    );
};

export default Dashboard;

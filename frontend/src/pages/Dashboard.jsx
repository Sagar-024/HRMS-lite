import React, { useEffect } from 'react';
import useStore from '../store/useStore';

const Dashboard = () => {
    const { fetchData, employees } = useStore();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const userName = "Admin"; // Placeholder, could be dynamic later
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

    return (
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            {/* Header / Intro */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-100 pb-6">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-ink mb-2 tracking-tight">
                        {greeting}, <span className="text-brand">{userName}</span>
                    </h1>
                    <p className="text-stone-500 font-medium">
                        Here's what's happening with your team today.
                    </p>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-stone-100 text-sm font-medium text-stone-500">
                    {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
            </div>

            {/* Dashboard Grid - Bento Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* Metrics Row - Spans Full Width */}
                <div className="lg:col-span-12">
                    <DashboardCardsWithData />
                </div>

                {/* Left Column: Actions & Charts (Future) */}
                <div className="lg:col-span-8 space-y-6">
                    <QuickActionsWithRouting />

                    {/* Placeholder for future Chart/Graph */}
                    <div className="bg-surface p-6 rounded-xl shadow-card border border-transparent min-h-[200px] flex items-center justify-center text-stone-400 italic bg-stone-50/50">
                        Analytics Chart Placeholder
                    </div>
                </div>

                {/* Right Column: Feed */}
                <div className="lg:col-span-4 self-start">
                    <ActivityFeedWithData />
                </div>
            </div>
        </div>
    );
};

// Wrapper components to handle Specific imports cleanly
import DashboardCards from '../components/DashboardCards';
import QuickActions from '../components/QuickActions';
import ActivityFeed from '../components/ActivityFeed';

const DashboardCardsWithData = () => <DashboardCards />;
const QuickActionsWithRouting = () => <QuickActions />;
const ActivityFeedWithData = () => <ActivityFeed />;

export default Dashboard;

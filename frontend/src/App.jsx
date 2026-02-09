import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Attendance from './pages/Attendance';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <Router>
            <div className="min-h-screen bg-paper font-sans text-ink selection:bg-stone-200">
                <div className="flex relative">
                    <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

                    <main className="flex-1 min-h-screen flex flex-col transition-all w-full">
                        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

                        {/* Mobile Overlay */}
                        {isSidebarOpen && (
                            <div
                                className="fixed inset-0 bg-black/20 z-40 lg:hidden"
                                onClick={() => setIsSidebarOpen(false)}
                            />
                        )}

                        {/* Routing Content */}
                        <div className="p-4 lg:p-8">
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/employees" element={<Employees />} />
                                <Route path="/attendance" element={<Attendance />} />
                                {/* Fallback */}
                                <Route path="*" element={<Navigate to="/" replace />} />
                            </Routes>
                        </div>

                    </main>
                </div>
            </div>
        </Router>
    );
}

export default App;

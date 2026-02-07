import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Attendance from './pages/Attendance';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-paper font-sans text-ink selection:bg-stone-200">
                <div className="flex">
                    <Sidebar />

                    <main className="flex-1 md:ml-72 min-h-screen flex flex-col px-8 md:px-12 pb-12 transition-all">
                        <Navbar />

                        {/* Routing Content */}
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/employees" element={<Employees />} />
                            <Route path="/attendance" element={<Attendance />} />
                            {/* Fallback */}
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>

                    </main>
                </div>
            </div>
        </Router>
    );
}

export default App;

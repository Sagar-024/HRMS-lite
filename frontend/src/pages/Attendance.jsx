import React from 'react';
import AttendanceForm from '../components/AttendanceForm';
import AttendanceTable from '../components/AttendanceTable';

const Attendance = () => {
    return (
        <div className="max-w-6xl w-full mx-auto">
            <div className="mb-10 border-b border-stone-200 pb-6">
                <h1 className="font-serif text-4xl text-ink">Daily Logs</h1>
                <p className="text-stone-500 mt-2">Track presence, absence, and leave requests.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left: Form (Span 4) */}
                <div className="lg:col-span-4">
                    <AttendanceForm />
                </div>

                {/* Right: Table (Span 8) */}
                <div className="lg:col-span-8">
                    <AttendanceTable />
                </div>
            </div>
        </div>
    );
};

export default Attendance;

import React, { useState } from 'react';
import useStore from '../store/useStore';
import { Search, Calendar, Filter } from 'lucide-react';

const AttendanceTable = () => {
    const { attendance, loading } = useStore();
    const [filterId, setFilterId] = useState('');

    // Filter logic
    const filteredAttendance = attendance.filter(record =>
        record.employeeId.toLowerCase().includes(filterId.toLowerCase())
    );

    if (loading && attendance.length === 0) {
        return (
            <div className="bg-surface rounded-xl shadow-card p-8 text-center border border-stone-100">
                <div className="animate-spin w-8 h-8 border-4 border-brand border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-stone-400 font-medium">Loading attendance logs...</p>
            </div>
        );
    }

    return (
        <div className="bg-surface rounded-xl shadow-card border border-stone-100 overflow-hidden">
            {/* Header & Filter */}
            <div className="px-6 py-5 border-b border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-blue-50 text-brand rounded-lg">
                        <Calendar size={20} />
                    </div>
                    <h3 className="font-bold text-lg text-ink">Attendance Logs</h3>
                </div>

                {/* Search Input */}
                <div className="relative w-full sm:w-64">
                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                    <input
                        type="text"
                        placeholder="Filter by Employee ID..."
                        value={filterId}
                        onChange={(e) => setFilterId(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-stone-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none text-sm transition-all"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-stone-50/50 border-b border-stone-100">
                            <th className="px-6 py-4 text-xs font-bold text-stone-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-4 text-xs font-bold text-stone-500 uppercase tracking-wider">Employee ID</th>
                            <th className="px-6 py-4 text-xs font-bold text-stone-500 uppercase tracking-wider text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-50">
                        {filteredAttendance.length > 0 ? (
                            filteredAttendance.map((record) => (
                                <tr key={record._id} className="hover:bg-blue-50/30 transition-colors group">
                                    <td className="px-6 py-4 text-sm text-ink font-medium">
                                        {record.date ? new Date(record.date).toLocaleDateString() : 'N/A'}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-stone-500 font-mono group-hover:text-brand transition-colors">
                                        {record.employeeId}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${record.status === 'Present'
                                            ? 'bg-green-50 text-success border-green-100'
                                            : 'bg-red-50 text-danger border-red-100'
                                            }`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${record.status === 'Present' ? 'bg-success' : 'bg-danger'}`}></span>
                                            {record.status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="px-6 py-12 text-center text-stone-400">
                                    <div className="flex flex-col items-center gap-2">
                                        <Filter size={32} className="text-stone-200" />
                                        <p>No records found matching "{filterId}"</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Footer / Pagination Placeholder */}
            <div className="px-6 py-3 border-t border-stone-100 bg-stone-50/30 flex justify-between items-center text-xs text-stone-400">
                <span>Showing {filteredAttendance.length} records</span>
                {/* Pagination controls would go here */}
            </div>
        </div>
    );
};

export default AttendanceTable;

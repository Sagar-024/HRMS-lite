import React, { useState } from 'react';
import useStore from '../store/useStore';
import { Search, Calendar, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-stone-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none text-sm transition-all shadow-sm"
                        aria-label="Filter attendance by Employee ID"
                    />
                </div>
            </div>

            {/* Table */}
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-stone-50/50 border-b border-stone-100">
                            <th className="px-6 py-4 text-xs font-bold text-stone-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-4 text-xs font-bold text-stone-500 uppercase tracking-wider">Employee ID</th>
                            <th className="px-6 py-4 text-xs font-bold text-stone-500 uppercase tracking-wider text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-50">
                        <AnimatePresence mode='popLayout'>
                            {filteredAttendance.length > 0 ? (
                                filteredAttendance.map((record, index) => (
                                    <motion.tr
                                        key={record._id}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        transition={{ delay: index * 0.03 }}
                                        className="hover:bg-blue-50/30 transition-colors group"
                                    >
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
                                    </motion.tr>
                                ))
                            ) : (
                                <motion.tr
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <td colSpan="3" className="px-6 py-12 text-center text-stone-400">
                                        <div className="flex flex-col items-center gap-2">
                                            <Filter size={32} className="text-stone-200" />
                                            <p>No records found matching "{filterId}"</p>
                                        </div>
                                    </td>
                                </motion.tr>
                            )}
                        </AnimatePresence>
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden p-4 space-y-4 bg-stone-50/30">
                <AnimatePresence mode='popLayout'>
                    {filteredAttendance.length > 0 ? (
                        filteredAttendance.map((record, index) => (
                            <motion.div
                                key={record._id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ delay: index * 0.03 }}
                                className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm relative overflow-hidden"
                            >
                                {/* Header: Date + Status */}
                                <div className="flex justify-between items-center mb-4 pb-3 border-b border-stone-100">
                                    <div className="flex items-center gap-2 text-stone-500">
                                        <Calendar size={14} />
                                        <span className="text-sm font-semibold text-ink">
                                            {record.date ? new Date(record.date).toLocaleDateString(undefined, {
                                                month: 'short', day: 'numeric', year: 'numeric'
                                            }) : 'N/A'}
                                        </span>
                                    </div>
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${record.status === 'Present'
                                        ? 'bg-green-50 text-success border-green-100'
                                        : 'bg-red-50 text-danger border-red-100'
                                        }`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${record.status === 'Present' ? 'bg-success' : 'bg-danger'}`}></span>
                                        {record.status}
                                    </span>
                                </div>

                                {/* Body: Employee ID */}
                                <div>
                                    <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-1.5">Employee ID</p>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded bg-stone-100 flex items-center justify-center text-stone-400 font-mono text-xs">
                                            ID
                                        </div>
                                        <p className="text-base font-mono font-medium text-stone-700">{record.employeeId}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm text-center"
                        >
                            <div className="flex flex-col items-center gap-3">
                                <Filter size={32} className="text-stone-300" />
                                <p className="text-stone-500 font-medium">No records found matching "{filterId}"</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-stone-100 bg-stone-50/30 flex justify-between items-center text-xs text-stone-400">
                <span>Showing {filteredAttendance.length} records</span>
            </div>
        </div>
    );
};

export default AttendanceTable;

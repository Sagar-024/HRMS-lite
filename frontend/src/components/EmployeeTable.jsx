import React from 'react';
import useStore from '../store/useStore';
import { Trash2, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EmployeeTable = () => {
    const { employees, removeEmployee, loading } = useStore();

    if (loading && employees.length === 0) {
        return (
            <div className="bg-surface rounded-xl shadow-card p-8 text-center border border-stone-100">
                <div className="animate-spin w-8 h-8 border-4 border-brand border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-stone-400 font-medium">Loading employee directory...</p>
            </div>
        );
    }

    return (
        <div className="bg-surface rounded-xl shadow-card border border-stone-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-stone-100 flex items-center justify-between">
                <h3 className="font-bold text-lg text-ink">Employee Directory</h3>
                <span className="bg-blue-50 text-brand text-xs font-bold px-2 py-1 rounded-full">{employees.length} Total</span>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-stone-50/50 border-b border-stone-100">
                            <th className="px-6 py-4 text-xs font-bold text-stone-500 uppercase tracking-wider">Employee ID</th>
                            <th className="px-6 py-4 text-xs font-bold text-stone-500 uppercase tracking-wider">Full Name</th>
                            <th className="px-6 py-4 text-xs font-bold text-stone-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-4 text-xs font-bold text-stone-500 uppercase tracking-wider">Department</th>
                            <th className="px-6 py-4 text-xs font-bold text-stone-500 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-50">
                        <AnimatePresence>
                            {employees.map((emp, index) => (
                                <motion.tr
                                    key={emp._id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
                                    transition={{ delay: index * 0.05 }}
                                    className="hover:bg-blue-50/30 transition-colors group"
                                >
                                    <td className="px-6 py-4 text-sm text-stone-500 font-mono group-hover:text-brand transition-colors">
                                        {emp.employeeId}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-ink font-bold flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
                                            <User size={16} />
                                        </div>
                                        {emp.fullName}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-stone-600">{emp.email}</td>
                                    <td className="px-6 py-4 text-sm text-stone-600">
                                        <span className="bg-stone-100 text-stone-600 px-2 py-1 rounded text-xs font-medium border border-stone-200">
                                            {emp.department}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button
                                            onClick={() => removeEmployee(emp._id)}
                                            className="p-2 text-stone-400 hover:text-danger hover:bg-red-50 rounded-lg transition-all"
                                            title="Delete Employee"
                                            aria-label={`Remove ${emp.fullName}`}
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </motion.tr>
                            ))}
                        </AnimatePresence>

                        {employees.length === 0 && !loading && (
                            <tr>
                                <td colSpan="5" className="px-6 py-12 text-center text-stone-400 italic">
                                    No employees found. Add one to get started.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden p-4 space-y-4 bg-stone-50/30">
                <AnimatePresence>
                    {employees.map((emp, index) => (
                        <motion.div
                            key={emp._id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, height: 0, scale: 0.95 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm relative overflow-hidden"
                        >
                            {/* Top Row: Avatar, Name, Delete */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 border border-stone-200">
                                        <User size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-ink text-base">{emp.fullName}</h4>
                                        <p className="text-xs font-mono text-stone-400">{emp.employeeId}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeEmployee(emp._id)}
                                    className="p-2 -mr-2 -mt-2 text-stone-400 hover:text-danger hover:bg-red-50 rounded-lg transition-all"
                                    aria-label="Delete"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>

                            {/* Info Grid */}
                            <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                                <div className="col-span-2">
                                    <p className="text-xs text-stone-400 font-bold uppercase tracking-wider mb-1">Email</p>
                                    <p className="text-stone-700 break-all">{emp.email}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-stone-400 font-bold uppercase tracking-wider mb-1">Department</p>
                                    <span className="inline-block bg-stone-100 text-stone-600 px-2 py-1 rounded text-xs font-medium border border-stone-200">
                                        {emp.department}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {employees.length === 0 && !loading && (
                    <div className="text-center py-12 text-stone-400 italic">
                        No employees found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default EmployeeTable;

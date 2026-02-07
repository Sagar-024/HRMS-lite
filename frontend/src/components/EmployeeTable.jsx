import React from 'react';
import useStore from '../store/useStore';

const EmployeeTable = () => {
    const { employees, removeEmployee, loading } = useStore();

    if (loading && employees.length === 0) {
        return <div className="p-8 text-center text-stone-400 italic">Loading Personnel...</div>;
    }

    return (
        <div className="bg-white rounded-lg border border-stone-200 shadow-subtle overflow-hidden">
            <div className="px-6 py-4 border-b border-stone-100 flex justify-between items-center">
                <h3 className="font-serif text-lg text-ink">Directory</h3>
                <span className="text-xs text-stone-400 font-medium">{employees.length} Records</span>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-stone-50 border-b border-stone-200">
                            <th className="px-6 py-3 text-xs font-bold text-stone-500 uppercase tracking-wider">ID</th>
                            <th className="px-6 py-3 text-xs font-bold text-stone-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-xs font-bold text-stone-500 uppercase tracking-wider">Dept</th>
                            <th className="px-6 py-3 text-xs font-bold text-stone-500 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                        {employees.map((emp) => (
                            <tr key={emp._id} className="hover:bg-stone-50/50 transition-colors">
                                <td className="px-6 py-4 text-sm text-stone-600 font-mono">{emp.employeeId}</td>
                                <td className="px-6 py-4 text-sm text-ink font-medium">
                                    {emp.name}
                                    <div className="text-xs text-stone-400 font-normal">{emp.email}</div>
                                </td>
                                <td className="px-6 py-4 text-sm text-stone-500">
                                    <span className="inline-flex items-center px-2 py-1 rounded bg-stone-100 text-xs font-medium text-stone-600">
                                        {emp.department}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button
                                        onClick={() => removeEmployee(emp._id)}
                                        className="text-red-500 hover:text-red-700 text-xs font-medium uppercase tracking-wide"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {employees.length === 0 && !loading && (
                            <tr><td colSpan="4" className="text-center py-8 text-stone-400 italic">No records found</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeTable;

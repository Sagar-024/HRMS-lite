import React, { useState } from 'react';
import useStore from '../store/useStore';

const EmployeeForm = () => {
    const { addEmployee, loading } = useStore();
    const [formData, setFormData] = useState({
        employeeId: '',
        fullName: '', // Changed from 'name' to 'fullName' to match Backend Schema
        email: '',
        department: 'Engineering'
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addEmployee(formData);
            alert("Employee Added Successfully");
            setFormData({
                employeeId: '',
                fullName: '',
                email: '',
                department: 'Engineering'
            });
        } catch (error) {
            alert("Failed to add employee: " + error.message);
        }
    };

    return (
        <div className="bg-white p-8 rounded-lg border border-stone-200 shadow-subtle">
            <h3 className="font-serif text-xl text-ink mb-6">New Personnel Entry</h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Employee ID</label>
                    <input
                        type="text"
                        placeholder="EMP-000"
                        value={formData.employeeId}
                        onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 px-4 py-2.5 rounded text-ink focus:outline-none focus:border-stone-400 transition-colors placeholder-stone-300"
                        required
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Full Name</label>
                    <input
                        type="text"
                        placeholder="e.g. John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 px-4 py-2.5 rounded text-ink focus:outline-none focus:border-stone-400 transition-colors placeholder-stone-300"
                        required
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Email Address</label>
                    <input
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 px-4 py-2.5 rounded text-ink focus:outline-none focus:border-stone-400 transition-colors placeholder-stone-300"
                        required
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Department</label>
                    <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 px-4 py-2.5 rounded text-ink focus:outline-none focus:border-stone-400 transition-colors cursor-pointer"
                    >
                        <option>Engineering</option>
                        <option>Design</option>
                        <option>HR</option>
                        <option>Marketing</option>
                    </select>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-ink text-white font-medium py-3 rounded hover:bg-stone-800 transition-colors disabled:opacity-50"
                    >
                        {loading ? 'Adding...' : 'Add Employee'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EmployeeForm;

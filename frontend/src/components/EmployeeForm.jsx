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
        <div className="card p-6 lg:p-8">
            <h3 className="font-serif text-xl text-ink mb-6">New Personnel Entry</h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Employee ID</label>
                    <input
                        type="text"
                        placeholder="EMP-000"
                        value={formData.employeeId}
                        onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
                        className="input-field"
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
                        className="input-field"
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
                        className="input-field"
                        required
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Department</label>
                    <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="input-field cursor-pointer"
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
                        className="w-full bg-ink text-white font-medium py-3 rounded shadow-[0_4px_8px_rgba(0,_0,_0,_0.12)] hover:shadow-[0_6px_16px_rgba(0,_0,_0,_0.16)] hover:-translate-y-0.5 active:shadow-[0_2px_4px_rgba(0,_0,_0,_0.1)] active:translate-y-0 transition-all duration-300 disabled:opacity-50"
                    >
                        {loading ? 'Adding...' : 'Add Employee'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EmployeeForm;

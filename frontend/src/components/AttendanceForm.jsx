import React, { useState } from 'react';
import useStore from '../store/useStore';

const AttendanceForm = () => {
    const { addAttendance, loading } = useStore();
    const [formData, setFormData] = useState({
        employeeId: '',
        date: '',
        status: 'Present'
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addAttendance(formData);
            alert("Attendance Logged");
            setFormData({ ...formData, employeeId: '' }); // Clear ID but keep date/status as convenience
        } catch (error) {
            alert("Failed to log attendance: " + error.message);
        }
    };

    return (
        <div className="card p-6 lg:p-8">
            <h3 className="font-serif text-xl text-ink mb-6">Log Attendance</h3>

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
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Date</label>
                    <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="input-field"
                        required
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Status</label>
                    <div className="grid grid-cols-2 gap-4">
                        <label className="cursor-pointer">
                            <input
                                type="radio"
                                name="status"
                                value="Present"
                                checked={formData.status === 'Present'}
                                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                className="peer sr-only"
                            />
                            <div className="text-center py-2.5 rounded border border-stone-200 bg-stone-50 text-stone-500 peer-checked:bg-green-50 peer-checked:text-green-700 peer-checked:border-green-200 transition-all font-medium text-sm">
                                Present
                            </div>
                        </label>
                        <label className="cursor-pointer">
                            <input
                                type="radio"
                                name="status"
                                value="Absent"
                                checked={formData.status === 'Absent'}
                                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                className="peer sr-only"
                            />
                            <div className="text-center py-2.5 rounded border border-stone-200 bg-stone-50 text-stone-500 peer-checked:bg-red-50 peer-checked:text-red-700 peer-checked:border-red-200 transition-all font-medium text-sm">
                                Absent
                            </div>
                        </label>
                    </div>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-ink text-white font-medium py-3 rounded shadow-[0_4px_8px_rgba(0,_0,_0,_0.12)] hover:shadow-[0_6px_16px_rgba(0,_0,_0,_0.16)] hover:-translate-y-0.5 active:shadow-[0_2px_4px_rgba(0,_0,_0,_0.1)] active:translate-y-0 transition-all duration-300 disabled:opacity-50"
                    >
                        {loading ? 'Logging...' : 'Mark Attendance'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AttendanceForm;

import React from 'react';
import EmployeeForm from '../components/EmployeeForm';
import EmployeeTable from '../components/EmployeeTable';

const Employees = () => {
    return (
        <div className="max-w-6xl w-full mx-auto">
            <div className="mb-10 border-b border-stone-200 pb-6">
                <h1 className="font-serif text-4xl text-ink">Personnel</h1>
                <p className="text-stone-500 mt-2">Manage employee records and department assignments.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left: Form (Span 4) */}
                <div className="lg:col-span-4">
                    <EmployeeForm />
                </div>

                {/* Right: Table (Span 8) */}
                <div className="lg:col-span-8">
                    <EmployeeTable />
                </div>
            </div>
        </div>
    );
};

export default Employees;

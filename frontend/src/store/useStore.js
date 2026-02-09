import { create } from "zustand";
import {
  getEmployees as apiGetEmployees,
  addEmployee as apiAddEmployee,
  deleteEmployee as apiDeleteEmployee,
  updateEmployee as apiUpdateEmployee,
  markAttendance as apiMarkAttendance,
  getAllAttendance as apiGetAllAttendance,
} from "../services/api";

const useStore = create((set, get) => ({
  // State
  employees: [],
  attendance: [],
  loading: false,
  error: null,

  // Actions
  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      const [emps, atts] = await Promise.all([
        apiGetEmployees(),
        apiGetAllAttendance(),
      ]);
      set({ employees: emps, attendance: atts, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  addEmployee: async (employeeData) => {
    set({ loading: true, error: null });
    try {
      const newEmployee = await apiAddEmployee(employeeData);
      set((state) => ({
        employees: [...state.employees, newEmployee],
        loading: false,
      }));
    } catch (err) {
      const message = err.response?.data?.message || err.message;
      set({ error: message, loading: false });
      const error = new Error(message);
      throw error;
    }
  },

  removeEmployee: async (id) => {
    set({ loading: true, error: null });
    try {
      await apiDeleteEmployee(id);
      set((state) => ({
        employees: state.employees.filter((e) => e._id !== id), // MongoDB uses _id
        loading: false,
      }));
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  editEmployee: async (id, updatedData) => {
    set({ loading: true, error: null });
    try {
      const updated = await apiUpdateEmployee(id, updatedData);
      set((state) => ({
        employees: state.employees.map((e) => (e._id === id ? updated : e)),
        loading: false,
      }));
    } catch (err) {
      const message = err.response?.data?.message || err.message;
      set({ error: message, loading: false });
      throw new Error(message);
    }
  },

  addAttendance: async (recordData) => {
    set({ loading: true, error: null });
    try {
      const newRecord = await apiMarkAttendance(recordData);
      set((state) => ({
        attendance: [newRecord, ...state.attendance],
        loading: false,
      }));
    } catch (err) {
      const message = err.response?.data?.message || err.message;
      set({ error: message, loading: false });
      throw new Error(message);
    }
  },
}));

export default useStore;

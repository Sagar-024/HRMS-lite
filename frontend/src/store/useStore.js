import { create } from "zustand";
import {
  getEmployees,
  addEmployee,
  deleteEmployee,
  markAttendance,
  getAllAttendance,
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
        getEmployees(),
        getAllAttendance(),
      ]);
      set({ employees: emps, attendance: atts, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  addEmployee: async (employeeData) => {
    set({ loading: true, error: null });
    try {
      const newEmployee = await addEmployee(employeeData);
      set((state) => ({
        employees: [...state.employees, newEmployee],
        loading: false,
      }));
    } catch (err) {
      set({ error: err.message, loading: false });
      throw err; // Re-throw so components can handle success/fail UI
    }
  },

  removeEmployee: async (id) => {
    set({ loading: true, error: null });
    try {
      await deleteEmployee(id);
      set((state) => ({
        employees: state.employees.filter((e) => e._id !== id), // MongoDB uses _id
        loading: false,
      }));
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  addAttendance: async (recordData) => {
    set({ loading: true, error: null });
    try {
      const newRecord = await markAttendance(recordData);
      set((state) => ({
        attendance: [newRecord, ...state.attendance],
        loading: false,
      }));
    } catch (err) {
      set({ error: err.message, loading: false });
      throw err;
    }
  },
}));

export default useStore;

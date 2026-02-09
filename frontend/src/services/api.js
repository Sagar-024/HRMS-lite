import axios from "axios";

// Use the environment variable for API URL, defaulting to the Railway production endpoint.
const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://hrms-lite-production-6226.up.railway.app";

// Create axios instance with the full URL
const api = axios.create({
  baseURL: `${API_URL}/api/`,
});

// Employees
export const getEmployees = async () => {
  const response = await api.get("employees");
  return response.data;
};

export const addEmployee = async (data) => {
  const response = await api.post("employees", data);
  return response.data;
};

export const deleteEmployee = async (id) => {
  const response = await api.delete(`employees/${id}`);
  return response.data;
};

export const updateEmployee = async (id, data) => {
  const response = await api.put(`employees/${id}`, data);
  return response.data;
};

// Attendance
export const markAttendance = async (data) => {
  const response = await api.post("attendance", data);
  return response.data;
};

export const getAttendanceByEmployee = async (empId) => {
  const response = await api.get(`attendance/${empId}`);
  return response.data;
};

export const getAllAttendance = async () => {
  const response = await api.get("attendance");
  return response.data;
};

export default api;

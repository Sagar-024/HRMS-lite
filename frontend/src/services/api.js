import axios from "axios";

// Use relative path so Vite proxy handles it
const api = axios.create({
  baseURL: "/api", // Proxy will send this to http://localhost:5000/api
});

// Employees
export const getEmployees = async () => {
  const response = await api.get("/employees");
  return response.data;
};

export const addEmployee = async (data) => {
  const response = await api.post("/employees", data);
  return response.data;
};

export const deleteEmployee = async (id) => {
  const response = await api.delete(`/employees/${id}`);
  return response.data;
};

// Attendance
export const markAttendance = async (data) => {
  const response = await api.post("/attendance", data);
  return response.data;
};

export const getAttendanceByEmployee = async (empId) => {
  const response = await api.get(`/attendance/${empId}`);
  return response.data;
};

export const getAllAttendance = async () => {
  const response = await api.get("/attendance");
  return response.data;
};

export default api;

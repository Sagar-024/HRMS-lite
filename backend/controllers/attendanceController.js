import Attendance from "../models/Attendance.js";
import Employee from "../models/Employee.js";

// @desc    Mark attendance for an employee
// @route   POST /api/attendance
// @access  Public
export const markAttendance = async (req, res) => {
  try {
    const { employeeId, date, status } = req.body;

    // Validate employee exists
    const employee = await Employee.findOne({ employeeId });
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // Check if attendance already marked for this date
    // Normalize date to ignore time for the check (optional, depending on requirements)
    // For simplicity, we trust the client sends a unique date-employee combo or DB unique index handles it
    // The model has unique compound index: { employeeId: 1, date: 1 }

    const attendance = await Attendance.create({
      employeeId,
      date,
      status,
    });

    res.status(201).json(attendance);
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ message: "Attendance already marked for this date" });
    }
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get attendance records for a specific employee
// @route   GET /api/attendance/:employeeId
// @access  Public
export const getAttendanceByEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const records = await Attendance.find({ employeeId }).sort({ date: -1 });

    if (!records) {
      return res.status(404).json({ message: "No attendance records found" });
    }

    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all attendance records (optional filter options can be added)
// @route   GET /api/attendance
// @access  Public
export const getAllAttendance = async (req, res) => {
  try {
    const records = await Attendance.find({}).sort({ date: -1 });
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

import express from "express";
import {
  markAttendance,
  getAllAttendance,
  getAttendanceByEmployee,
} from "../controllers/attendanceController.js";

const router = express.Router();

router.route("/").post(markAttendance).get(getAllAttendance);

router.route("/:employeeId").get(getAttendanceByEmployee);

export default router;

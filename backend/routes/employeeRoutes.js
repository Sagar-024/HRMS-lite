import express from "express";
import {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  deleteEmployee,
} from "../controllers/employeeController.js";

const router = express.Router();

router.route("/").post(createEmployee).get(getAllEmployees);

router.route("/:id").get(getEmployeeById).delete(deleteEmployee);

export default router;

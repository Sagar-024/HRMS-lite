import Employee from "../models/Employee.js";

// @desc    Create a new employee
// @route   POST /api/employees
// @access  Public
export const createEmployee = async (req, res) => {
  try {
    const { employeeId, fullName, email, department } = req.body;

    // Check if employee already exists
    const existingEmployee = await Employee.findOne({
      $or: [{ employeeId }, { email }],
    });
    if (existingEmployee) {
      return res
        .status(400)
        .json({ message: "Employee with this ID or Email already exists" });
    }

    const employee = await Employee.create({
      employeeId,
      fullName,
      email,
      department,
    });

    res.status(201).json(employee);
  } catch (error) {
    // Distinguish between validation errors (400) and Server errors (500)
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ message: messages.join(", ") });
    }
    // Duplicate Key
    if (error.code === 11000) {
      return res.status(400).json({ message: "Duplicate field value entered" });
    }
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all employees
// @route   GET /api/employees
// @access  Public
export const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single employee by ID
// @route   GET /api/employees/:id
// @access  Public
export const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete employee
// @route   DELETE /api/employees/:id
// @access  Public
export const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (employee) {
      await employee.deleteOne();
      res.json({ message: "Employee removed" });
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// @desc    Update employee
// @route   PUT /api/employees/:id
// @access  Public
export const updateEmployee = async (req, res) => {
  try {
    const { employeeId, fullName, email, department } = req.body;
    const employee = await Employee.findById(req.params.id);

    if (employee) {
      employee.employeeId = employeeId || employee.employeeId;
      employee.fullName = fullName || employee.fullName;
      employee.email = email || employee.email;
      employee.department = department || employee.department;

      const updatedEmployee = await employee.save();
      res.json(updatedEmployee);
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

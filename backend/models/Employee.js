import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      required: [true, "Employee ID is required"],
      unique: true,
      trim: true,
      uppercase: true,
      validate: {
        validator: function (v) {
          return /^[A-Z0-9-]+$/.test(v);
        },
        message:
          "Employee ID must contain only uppercase letters, numbers, and hyphens",
      },
    },

    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [100, "Name cannot exceed 100 characters"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: function (v) {
          return /^\S+@\S+\.\S+$/.test(v);
        },
        message: "Please provide a valid email",
      },
    },

    department: {
      type: String,
      required: [true, "Department is required"],
      enum: [
        "HR",
        "Engineering",
        "Sales",
        "Marketing",
        "Finance",
        "Operations",
      ],
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    collection: "employees",
  },
);

// Redundant indexes removed since unique:true creates them automatically
export default mongoose.model("Employee", employeeSchema);

import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      required: [true, "Employee ID is required"],
      ref: "Employee",
    },

    date: {
      type: Date,
      required: [true, "Date is required"],
    },

    status: {
      type: String,
      required: [true, "Status is required"],
      enum: ["Present", "Absent"],
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    collection: "attendance",
  },
);

attendanceSchema.index({ employeeId: 1, date: 1 }, { unique: true });
attendanceSchema.index({ employeeId: 1 });
attendanceSchema.index({ date: -1 });

export default mongoose.model("Attendance", attendanceSchema);

// backend/routes/studentRoutes.js
import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { requireRole } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Example: GET /api/student/dashboard
router.get(
  "/dashboard",
  protect,
  requireRole("student"),
  async (req, res) => {
    // Here, backend team can plug real data: attendance, assessments, etc.
    res.json({
      message: "Student dashboard data",
      user: req.user,
    });
  }
);

export default router;

// backend/routes/adminRoutes.js
import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { requireRole } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get(
  "/dashboard",
  protect,
  requireRole("admin"),
  async (req, res) => {
    res.json({
      message: "Admin dashboard data",
      user: req.user,
    });
  }
);

// Example: admin can list all users later
// router.get("/users", protect, requireRole("admin"), ...)

export default router;

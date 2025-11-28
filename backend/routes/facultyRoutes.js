// backend/routes/facultyRoutes.js
import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { requireRole } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get(
  "/dashboard",
  protect,
  requireRole("faculty"),
  async (req, res) => {
    res.json({
      message: "Faculty dashboard data",
      user: req.user,
    });
  }
);

export default router;

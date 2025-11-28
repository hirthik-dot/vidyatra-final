// backend/controllers/authController.js
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

// For now we implement only login (admin can create users from DB or future API)
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1) Check user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Invalid email or password (user not found)" });
    }

    // 2) Check password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Invalid email or password (wrong password)" });
    }

    // 3) Generate token
    const token = generateToken(user);

    // 4) Send back role so frontend can redirect to /student /faculty /admin
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

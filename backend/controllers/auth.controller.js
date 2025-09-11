import { AuthUser } from "../models/authuser.model.js";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


export const registerUser = async (req, res) => {
  try {
    const { name, email, address, phone, password } = req.body;

    const existing = await AuthUser.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAuth = await AuthUser.create({
      name,
      email,
      address,
      phone,
      password: hashedPassword,
    });

    const userData = await User.create({ authRef: newAuth._id });

    res.status(201).json({
      message: "Registered successfully",
      authUser: newAuth._id,
      user: userData._id,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await AuthUser.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "default_secret_key",
      { expiresIn: "7d" }
    );

    
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: false, // true in production with HTTPS
        sameSite: "lax",
        max_age:7 * 24 * 60 * 60
      })
      .status(200)
      .json({
        message: "Login successful",
        authUser: user._id,
        token,
      });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const getMe = async (req, res) => {
  try {
    const user = req.user; 
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({
      name: user.name,
      email: user.email,
      id: user._id,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

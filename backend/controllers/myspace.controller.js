import { AuthUser } from '../models/authuser.model.js';
import Order from '../models/order.model.js'; 

export const getMySpace = async (req, res) => {
  try {
    const userId = req.user.id; 
    const user = await AuthUser.findById(userId).select('-password');

    if (!user) return res.status(404).json({ message: "User not found" });

    const orders = await Order.find({ userId }).populate('items.fruitId');

    res.status(200).json({ user, orders });
  } catch (error) {
    console.error("Error in getMySpace:", error);
    res.status(500).json({ error: "Server error" });
  }
};

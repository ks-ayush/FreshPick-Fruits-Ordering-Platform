import { Cart } from '../models/cart.model.js';
import Fruit from '../models/fruits.model.js'; 

export const addToCart = async (req, res) => {
  const { fruitId, quantity } = req.body;
  const userId = req.user.id;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const index = cart.items.findIndex(item => item.fruitId.toString() === fruitId);

    if (index > -1) {
      cart.items[index].quantity += quantity;
    } else {
      cart.items.push({ fruitId, quantity });
    }

    await cart.save();
    res.status(200).json({ message: 'Item added to cart successfully', cart });
  } catch (err) {
    console.error('Error adding to cart:', err);
    res.status(500).json({ error: 'Server error' });
  }
};


export const viewCart = async (req, res) => {
  const userId = req.user.id;

  try {
    let cart = await Cart.findOne({ userId }).populate('items.fruitId');

    
    if (!cart) {
      return res.status(200).json({ userId, items: [] });
    }

    res.status(200).json(cart);
  } catch (err) {
    console.error('Error fetching cart:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Remove item from cart
export const removeFromCart = async (req, res) => {
  const userId = req.user.id;
  const { fruitId } = req.body;

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = cart.items.filter(item => item.fruitId.toString() !== fruitId);
    await cart.save();

    res.status(200).json({ message: 'Item removed from cart', cart });
  } catch (err) {
    console.error('Error removing from cart:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

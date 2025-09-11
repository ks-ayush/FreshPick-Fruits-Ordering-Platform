import mongoose from 'mongoose';
import Fruit from '../models/fruits.model.js';

const cartItemSchema = new mongoose.Schema({
  fruitId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Fruit', 
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  }
});

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true,
    ref: 'User'
  },
  items: [cartItemSchema]
});

export const Cart = mongoose.model('Cart', cartSchema);

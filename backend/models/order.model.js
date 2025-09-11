// models/order.model.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'AuthUser' },
  items: [
    {
      fruitId: { type: mongoose.Schema.Types.ObjectId, ref: 'Fruit' },
      quantity: Number,
    },
  ],
  status: {
    type: String,
    enum: ['Placed', 'Shipped', 'Delivered'],
    default: 'Placed',
  },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);
export default Order;

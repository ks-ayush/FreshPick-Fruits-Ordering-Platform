import mongoose from 'mongoose';

const fruitSchema = new mongoose.Schema({
  name: String,
  price: Number,
  instock: Number,
  category: String,
});

const Fruit = mongoose.model('Fruit', fruitSchema); // No third arg needed
export default Fruit;

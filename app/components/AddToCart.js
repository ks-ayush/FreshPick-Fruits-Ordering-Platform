import axios from 'axios';

export const addToCart = async (fruitId, quantity = 1) => {
  try {
    const response = await axios.post(
      'http://localhost:5500/api/cart/add',
      { fruitId, quantity },
      { withCredentials: true } // important for sending cookies
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Add to cart failed' };
  }
};

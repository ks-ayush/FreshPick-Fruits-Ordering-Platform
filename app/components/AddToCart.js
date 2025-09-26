import axios from 'axios';

export const AddToCart = async (fruitId, quantity = 1) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cart/add`,
      { fruitId, quantity },
      { withCredentials: true } 
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Add to cart failed' };
  }
};

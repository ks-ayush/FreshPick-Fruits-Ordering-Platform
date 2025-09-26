'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const Cart = () => {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  
  const fetchUserAndCart = async () => {
    try {
      const userRes = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/me`, {
        withCredentials: true,
      });
      setUser(userRes.data);

      const cartRes = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cart/view`, {
        withCredentials: true,
      });
      setCartItems(cartRes.data.items || []);
    } catch (err) {
      // console.error('Error fetching user/cart:', err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserAndCart();
  }, []);

  
  const handleOrderNow = async () => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/order/create`, {}, {
        withCredentials: true,
      });
      // alert('🎉 Order placed successfully!');
      toast.success('Order placed successfully!');
      setCartItems([]);
      router.push('/Myspace'); 
    } catch (err) {
      // console.error('Order failed:', err);
      // alert('❌ Failed to place order. Please try again.');
      toast.error('Failed to place order. Please try again.');
    }
  };

  
  if (loading) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }

  
  if (!user) {
    return (
      <main className="text-center mt-10 min-h-screen pt-24">
        <h2 className="text-2xl">
          Please{' '}
          <a href="/Login" className="text-blue-500 underline">
            Login
          </a>{' '}
          to view your cart.
        </h2>
      </main>
    );
  }

  const handleDelete = async (fruitId) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cart/remove`,
        { fruitId },
        { withCredentials: true }
      );
      setCartItems(cartItems.filter(item => item.fruitId._id !== fruitId));
    } catch (err) {
      // console.error('Error removing item:', err);
      alert('❌ Failed to remove item. Please try again.');
    }
  };

  const totalPrice = cartItems.reduce((sum, item) => {
    const price = item.fruitId?.price || 0;
    return sum + price * item.quantity;
  }, 0);


  
  return (
    <main className="p-4 min-h-screen ">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">User: {user.name}</h1>
        <h2 className="text-lg mt-1 ">Email: {user.email}</h2>
      </div>

      <h2 className="text-center text-3xl mt-10 mb-4 font-bold">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center mt-4 text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="mt-6 flex flex-col items-center gap-4">
            {cartItems.map((item, index) => {
              const price = item.fruitId?.price || 0;
              const itemTotal = price * item.quantity;
              return (
                <div
                  key={index}
                  className="border p-4 w-full max-w-md rounded shadow bg-white flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-xl font-bold text-green-800">
                      {item.fruitId?.name || 'Unknown Fruit'}
                    </h3>
                    <p className="text-gray-600">Price: ₹{price}</p>
                    <p className="text-amber-600 font-medium">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-blue-700 font-semibold">
                      Item Total: ₹{itemTotal}
                    </p>
                    {item.fruitId?.image && (
                      <img
                        src={item.fruitId.image}
                        alt={item.fruitId.name}
                        className="mt-2 h-24 w-24 object-cover rounded"
                      />
                    )}
                  </div>

                  
                  <button
                    onClick={() => handleDelete(item.fruitId._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>

         
          <div className="text-center mt-6">
            <h3 className="text-2xl font-bold text-green-700">
              Total: ₹{totalPrice}
            </h3>
          </div>


          <div className="text-center mt-6">
            <button
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-6 py-2 rounded"
              onClick={handleOrderNow}
            >
              🛍️ Order Now
            </button>
          </div>
        </>
      )}
    </main>
  );
};

export default Cart;

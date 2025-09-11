'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:5500';

const MySpace = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserAndOrders = async () => {
      try {
        const userRes = await axios.get(`${API_BASE}/api/auth/me`, {
          withCredentials: true,
        });
        setUser(userRes.data);

        const ordersRes = await axios.get(`${API_BASE}/api/myspace`, {
          withCredentials: true,
        });
        setOrders(ordersRes.data.orders || []);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserAndOrders();
  }, []);

  if (loading) return <div className="text-center mt-10 text-xl">Loading...</div>;

  if (!user) {
    return (
      <main className="text-center mt-20 min-h-screen">
        <h2 className="text-2xl">
          Please <a href="/Login" className="text-blue-500 underline">Login</a> to view your profile and orders.
        </h2>
      </main>
    );
  }

  return (
    <main className="p-6 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-green-600">Welcome, {user.name}</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Personal Info</h2>
        <p><strong>Email:</strong> {user.email}</p>
        {user.address && <p><strong>Address:</strong> {user.address}</p>}
        {user.phone && <p><strong>Phone:</strong> {user.phone}</p>}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Your Orders</h2>
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <ul className="space-y-6">
            {orders.map((order) => {
              
              const orderTotal = order.items.reduce((sum, item) => {
                const price = item.fruitId?.price || 0;
                return sum + price * item.quantity;
              }, 0);

              return (
                <li key={order._id} className="border p-4 rounded shadow bg-white text-black">
                  <p><strong>Status:</strong> {order.status}</p>
                  <p><strong>Ordered At:</strong> {new Date(order.createdAt).toLocaleString()}</p>
                  
                  <ul className="mt-3 space-y-1 text-sm text-gray-700">
                    {order.items.map((item) => {
                      const price = item.fruitId?.price || 0;
                      const itemTotal = price * item.quantity;
                      return (
                        <li key={item._id} className="flex justify-between">
                          <span>
                             {item.fruitId?.name || "Unknown Fruit"}  
                            — Qty: {item.quantity} × ₹{price}
                          </span>
                          <span className="font-semibold text-blue-600">₹{itemTotal}</span>
                        </li>
                      );
                    })}
                  </ul>

                  
                  <div className="mt-3 text-right">
                    <p className="text-lg font-bold text-green-700">
                      Total: ₹{orderTotal}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
};

export default MySpace;

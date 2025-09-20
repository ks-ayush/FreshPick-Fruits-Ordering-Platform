"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';



const Signin = () => {
  const router=useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/register`, formData);
      // alert("✅ Registration successful!");
      // console.log(res.data);
      toast.success("Registration successful!");
      router.push("/Login");
    } catch (error) {
      // console.error("❌ Registration error:", error.response?.data || error.message);
      // alert("❌ Registration failed. See console for details.");
      toast.error("User already registered.");
    }
  };

  return (
    <main>
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign Up Now!</h1>
              <p className="py-6">
                Start buying your favorite fruits made from freshly picked fruits from the farm.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <label className="label">Name</label>
                  <input type="text" name="name" className="input" placeholder="Name" onChange={handleChange} />

                  <label className="label">Email</label>
                  <input type="email" name="email" className="input" placeholder="Email" onChange={handleChange} />

                  <label className="label">Password</label>
                  <input type="password" name="password" className="input" placeholder="Password" onChange={handleChange} />

                  <label className="label">Address</label>
                  <input type="text" name="address" className="input" placeholder="Address" onChange={handleChange} />

                  
                  <label className="label">Phone</label>
                  <input type="text" name="phone" className="input" placeholder="Phone" onChange={handleChange} /> 

                  <button type="submit" className="btn btn-neutral mt-4">Sign Up</button>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signin;

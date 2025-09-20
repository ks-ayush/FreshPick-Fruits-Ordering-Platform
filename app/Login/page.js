'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';


// const API_BASE = process.env.NEXT_PUBLIC_API_BASE ;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const router = useRouter();


  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/me`, {
          withCredentials: true,
        });
        if (res.data) {
          setIsLoggedIn(true);
        }
      } catch (err) {
        setIsLoggedIn(false);
      } finally {
        setCheckingAuth(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/logout`, {}, {
        withCredentials: true // important for sending cookies
      });

      setIsLoggedIn(false);

      // Redirect to login
      router.push("/Login");
    } catch (error) {
      // console.error("Logout failed:", error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );

      

      // alert('Login Successful!');
      toast.success('Login Successful!');
      setIsLoggedIn(true);
      router.push('/Myspace');
    } catch (error) {
      // console.error('Login failed ❌', error);
      // alert('Login failed. Please check your credentials.');
      toast.error('Login failed. Please check your credentials.');
    }
  };

  if (checkingAuth) {
    return <div className="text-center mt-10 text-lg min-h-screen">Checking login status...</div>;
  }

  if (isLoggedIn) {
    return (
      <main className='min-h-screen flex flex-col '>
        <div className="text-center mt-20 ">
          <h2 className="text-2xl font-semibold">✅ You're already logged in!</h2>
          <button
            className="btn btn-primary mt-4 mb-6"
            onClick={() => router.push('/Myspace')}
          >
            Go to MySpace
          </button>
        </div>

        <div className='text-center mt-20'>
          <button
            className="btn btn-primary mt-4 mb-6"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

      </main>


    );
  }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Start buying your favorite fruits made from freshly picked fruits from the farm.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4" onClick={handleLogin}>
                  Login
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

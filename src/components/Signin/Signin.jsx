import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEnvelope, FaLock, FaUserCircle } from 'react-icons/fa';
import { Player } from '@lottiefiles/react-lottie-player';
import LoginAnimation from '../../assets/LoginAnimation.json';
import { Link } from 'react-router-dom';
import Button from '../pre-component/Button.jsx';
import ButtonGradient from "../../assets/svg/ButtonGradient";
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import { useForm } from 'react-hook-form';
const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  
  return (
    <>
      <Header />
      <div className="min-h-screen font-poppins flex flex-col lg:flex-row bg-[#0000003a]">
        {/* Left Section - Graphic and Welcome Text */}
        <div className="flex-1 flex flex-col items-center text-white relative p-6 h-screen neon-border">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#566fdf] to-[purple] tracking-wider mt-20 text-center drop-shadow-lg" data-aos="fade-down">
            Welcome
          </h1>
          <p className="text-sm pt-2 mb-5 sm:text-[20px]">
  Introducing Microservices Foundation
</p>

          <Player autoplay loop src={LoginAnimation} style={{ height: '250px', width: '250px' }} data-aos="zoom-in" />
        </div>

        {/* Right Section - Login Form */}
        <div className="mt-10 flex-1 flex justify-center items-center p-6 h-screen neon-border">
          <div className="max-w-sm w-full p-8 rounded-2xl shadow-xl bg-white transform transition-transform hover:scale-105" data-aos="zoom-in">
            <h1 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#566fdf] to-[purple]" data-aos="fade-down">
              Sign In
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email Input */}
              <div className="mb-4">
                <label className="block text-[#1a1a2e] text-sm font-semibold mb-1" htmlFor="email">
                  Email
                </label>
                <div className="flex items-center border border-[#1a1a2e] rounded-lg w-full py-2 px-3 shadow-sm neon-border">
                  <FaEnvelope className="text-[#1a1a2e] mr-2" />
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Enter a valid email address',
                      },
                    })}
                    className={`flex-grow appearance-none outline-none bg-transparent text-gray-800 placeholder-gray-400 focus:ring-0 ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label className="block text-[#1a1a2e] text-sm font-semibold mb-1" htmlFor="password">
                  Password
                </label>
                <div className="flex items-center border border-[#1a1a2e] rounded-lg w-full py-2 px-3 shadow-sm neon-border">
                  <FaLock className="text-[#1a1a2e] mr-2" />
                  <input
                    type="password"
                    id="password"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters',
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
                      },
                    })}
                     className={`flex-grow appearance-none outline-none bg-transparent text-gray-800 placeholder-gray-400 focus:ring-0 ${errors.password ? 'border-red-500' : ''}`}
                    placeholder="Enter your password"
                  />
                </div>
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
              </div>

              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    {...register('rememberMe')}
                    className="mr-2 text-[#1a1a2e] focus:ring-[#1a1a2e] rounded"
                  />
                  <label htmlFor="rememberMe" className="text-sm text-gray-700">
                    Remember Me
                  </label>
                </div>
                <div>
                  <a href="/forgot-password" className="text-sm text-[#1a1a2e] hover:text-[#007f85] transition-colors duration-300">
                    Forgot Password?
                  </a>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-center mb-4">
                <Button>
                  <span className="text-black">Sign In</span>
                </Button>
              </div>
              <ButtonGradient />
            </form>

            <div className="mt-4 text-center text-gray-600">
              <p>No Account? <span className="text-[#1a1a2e] font-semibold">Register Here!</span></p>
              <p className="text-sm mt-1">Registration takes less than a minute but gives you access to your free online account!</p>
              <Link to="/signup" 
              className="inline-block mt-2 text-[#4842a3] hover:text-[#aab0b1] font-bold transition-colors duration-300">
                Register <FaUserCircle className="inline-block ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
  



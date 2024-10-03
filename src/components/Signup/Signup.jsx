import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import { Player } from '@lottiefiles/react-lottie-player';
import Button from '../pre-component/Button.jsx';
import LoginAnimation from '../../assets/LoginAnimation.json'; // Assuming the correct path to the Lottie file
import './Styles.css';
import ButtonGradient from "../../assets/svg/ButtonGradient";

const Signup = () => {
  // State Management
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '', isAgreed: '' });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '', confirmPassword: '', isAgreed: '' };

    // Email validation
    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    // Terms and conditions validation
    if (!isAgreed) {
      newErrors.isAgreed = 'You must agree to the Terms of Use and Privacy Policy';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Email:', email);
      console.log('Password:', password);
      // Continue with form submission or API call
    }
  };

  return (
    <>
      <Header /> {/* Adding Header component */}
      <div className="mt-16 min-h-screen bg-transparent flex items-center justify-center py-10">
        <div className="flex w-full max-w-7xl bg-transparent rounded-3xl shadow-[10px] overflow-hidden neon-border-purple"> 
          {/* Neon border applied to this main div */}

          {/* Left Section with Lottie Animation */}
          <div className="hidden md:flex w-1/2 bg-[#ffffff0e] p-12 flex-col justify-center items-center">
            <Player autoplay loop src={LoginAnimation} style={{ height: '220px', width: '220px' }} />
            <h2 className="text-3xl font-bold text-white mt-6">Empower Your Services</h2>
            <p className="text-white mt-4 text-center leading-relaxed">
              ServiceBricks ensures top-level security and privacy for your data. We will never share or sell your personal information.
            </p>
          </div>

          {/* Right Section with Form */}
          <div className="w-full md:w-1/2 p-10 bg-white">
            <h1 className="text-3xl font-bold text-[#1a1a2ec0] mb-2 text-center">Register Your Free Account!</h1>
            <h2 className="text-3xl font-bold text-[#1a1a2ec2] mb-8 text-center">Create an Account</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="email">
                  Email
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg w-full py-3 px-4 shadow-sm bg-transparent neon-border">
                  <FaEnvelope className="text-gray-400 mr-3" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow outline-none text-gray-700 focus:ring-0 focus:outline-none bg-transparent placeholder-gray-400"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="password">
                  Password
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg w-full py-3 px-4 shadow-sm bg-transparent neon-border">
                  <FaLock className="text-gray-400 mr-3" />
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex-grow outline-none text-gray-700 focus:ring-0 focus:outline-none bg-transparent placeholder-gray-400"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password}</p>}
              </div>

              {/* Confirm Password Input */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg w-full py-3 px-4 shadow-sm bg-transparent neon-border">
                  <FaLock className="text-gray-400 mr-3" />
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="flex-grow outline-none text-gray-700 focus:ring-0 focus:outline-none bg-transparent placeholder-gray-400"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-2">{errors.confirmPassword}</p>}
              </div>

              {/* Checkbox for Terms and Conditions */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  checked={isAgreed}
                  onChange={() => setIsAgreed(!isAgreed)}
                  className="mr-2"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to the <a href="#" className="text-[#009ca0]">Terms of Use</a> and <a href="#" className="text-[#009ca0]">Privacy Policy</a>
                </label>
              </div>
              {errors.isAgreed && <p className="text-red-500 text-sm mt-2">{errors.isAgreed}</p>}

              {/* Submit Button */}
              <div className="flex justify-center">
                <Button
                  className="w-40 "
                >
                 <span className='text-black'> Sign Up</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ButtonGradient />

      <Footer /> {/* Adding Footer component */}
    </>
  );
};

export default Signup;

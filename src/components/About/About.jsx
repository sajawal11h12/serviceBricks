import React, { useEffect, useRef } from "react";
import ButtonGradient from "../../assets/svg/ButtonGradient";
import { service1, service2, service3, check } from "../../assets";
import micro from "../../assets/HoloLogo.png";
import micro1 from "../../assets/micro.jpg";
import Heading from "../pre-component/Heading";
import { GradientLight } from "../design/Benefits";
import ClipPath from "../../assets/svg/ClipPath";

import AOS from "aos";
import "aos/dist/aos.css";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Section from "../pre-component/Section";
import Button from "../pre-component/Button";

  
function About() {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration
      once: true,    // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="overflow-hidden">

    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
    
    <Header />

    <div className="absolute top-0  w-full aspect-square bg-radial-gradient from-[#341947] to-[#28206C]/0 to-70% pointer-events-none" />
  
    <Section
    className="pt-[5rem] -mt-[5.25rem]"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="hero"
    >
      <div className="relative z-1 max-w-[62rem] 
       mx-10 sm:mx-10   md:mx-28 lg:mx-56 xl:mx-72 text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        <h1
          className="h1 mb-6 text-[40px]"
          data-aos="fade-left" // Changed AOS animation type
          data-aos-delay="7000" // Optional delay for the h1
          data-aos-duration="1000" // Optional duration for the h1
        >
     </h1>
    <Heading
          tag="Owned and Maintained by"
          title="HOLO MODULAR"
        />


        <p 
          className=" mb-6 -mt-10 text-sm"
          data-aos="fade-left" // Changed AOS animation type
          data-aos-delay="7000" // Optional delay for the h1
          data-aos-duration="1000" // Optional duration for the h1
        >Our goal is to develop new and innovative technologies to compliment an augmented and virtual reality world.
    
        </p>
        <Button>
          visit Our Website
        </Button>
        <div className="flex  flex-col justify-center items-center mt-10 mb-10"
        >
<Heading
          tag=""
          title="open source software"
        />
        <p className="-mt-5  md:-mt-12 font-extralight text-justify sm:text-justify md:text-center text-lg">
        ServiceBricks is FREE, open-source, enterprise-grade software that enables developers to build and deploy microservices-based applications. It is available under the MIT permissive software license.
        </p>

    </div>
    </div>

      <div className="flex -mt-16 md:-mt-24 items-center justify-center min-h-screen   ">
      <div className=" mx-5 sm:mx-5 md:mx-28 w-full border-gray-300 border-2 p-4  shadow-xl rounded-lg">
        <h1 className=" text-xl md:text-2xl font-bold text-center  mb-4">The MIT License (MIT)</h1>
        <p className="text-gray-200 text-xs md:text-sm mb-4">Copyright © 2024 HoloModular LLC</p>
        
        <p className="text-gray-200 text-justify text-sm sm:text-sm md:text-base font-thin mb-4">
          Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        </p>

        <p className="text-gray-200 font-thin text-sm sm:text-sm md:text-base text-justify mb-4">
          The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        </p>

        <p className="text-gray-200 text-justify  text-sm sm:text-sm md:text-base mb-4">
          THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
      </div>
      
    </div>


<div className="mx-4 md:mx-16 lg:mx-24 border-t-2 border-gray-700">
  <h1 className="text-3xl font-extrabold text-center pt-4 text-gray-100">Impressum</h1>
  
  <div className="flex flex-col md:flex-row justify-between items-start mt-6">
    <div className="mb-6 flex flex-col items-center md:items-start">
      <img src={micro} alt="logo" className="h-14 w-auto mb-2" />
      <h2 className="text-xl font-semibold text-gray-200">Company:</h2>
      <p className="text-gray-300">HoloModular LLC</p>
    </div>
    
    <div className="mb-6 mt-6 md:mt-0 md:ml-8">
      <h2 className="text-xl font-semibold text-gray-200">Corporate Address:</h2>
      <p className="text-gray-300">5620 Crest Creek Dr</p>
      <p className="text-gray-300">Jacksonville, FL 32258</p>
    </div>
    
    <div className="mb-6 mt-6 md:mt-0 md:ml-8">
      <h2 className="text-xl font-semibold text-gray-200">Contact:</h2>
      <p className="text-gray-300">
        Email: <a href="mailto:Support@HoloModular.com" className="text-purple-600 hover:underline">Support@HoloModular.com</a>
      </p>
      <p className="text-gray-300">
        Website: <a href="https://HoloModular.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">HoloModular.com</a>
      </p>
    </div>
    
    <div className="mb-6 mt-6 md:mt-0 md:ml-8">
      <h2 className="text-xl font-semibold text-gray-200">Company Registration:</h2>
      <p className="text-gray-300">State of Florida, USA</p>
    </div>
  </div>

  <div className="flex flex-col items-center mt-6">
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-gray-200">Managing Director:</h2>
      <p className="text-gray-300">Danny Logsdon, CEO</p>
    </div>
  </div>
</div>
     




    </Section>
    </div>
    <Footer/>
    <ButtonGradient />
    
        </div>
    
  )
}

export default About

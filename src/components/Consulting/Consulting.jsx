import React, { useEffect, useRef } from "react";
import ButtonGradient from "../../assets/svg/ButtonGradient";
import { service1, service2, service3, check } from "../../assets";
import micro from "../../assets/services/documentation.webp";
import micro1 from "../../assets/micro.jpg";

import AOS from "aos";
import "aos/dist/aos.css";import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Section from "../pre-component/Section";
import Button from "../pre-component/Button";

function Consulting() {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration
      once: true,    // Whether animation should happen only once
    });
  }, []);

  return (
    <div>

<div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">

<Header />
<Section
className="pt-[12rem] -mt-[5.25rem]"
crosses
crossesOffset="lg:translate-y-[5.25rem]"
customPaddings
id="hero"
>
  <div className="relative z-1 max-w-[62rem]  mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
    <h1
      className="h1 mb-6 text-[40px]"
      data-aos="fade-left" // Changed AOS animation type
      data-aos-delay="7000" // Optional delay for the h1
      data-aos-duration="1000" // Optional duration for the h1
    >
Experts in Design    </h1>
    <p 
      className=" mb-6 text-sm"
      data-aos="fade-left" // Changed AOS animation type
      data-aos-delay="7000" // Optional delay for the h1
      data-aos-duration="1000" // Optional duration for the h1
    >
     See how our team of experts can help you design and implement a microservices architecture that meets your unique needs.


    </p>
    <div className="flex justify-center items-center mb-28"
          data-aos="fade-left" // Changed AOS animation type
          data-aos-delay="7000" // Optional delay for the h1
          data-aos-duration="1000" // Optional duration for the h1
    >
</div>
</div>

        
</Section>
</div>
<Footer/>
<ButtonGradient />

    </div>
  )
}

export default Consulting

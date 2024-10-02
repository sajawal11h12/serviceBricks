import React, { useEffect, useRef } from "react";
import ButtonGradient from "../../assets/svg/ButtonGradient";
import { service1, service2, service3, check } from "../../assets";
import micro from "../../assets/services/documentation.webp";
import micro1 from "../../assets/concept.jpg";
import { smallSphere, stars } from "../../assets";

import AOS from "aos";
import "aos/dist/aos.css";import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Section from "../pre-component/Section";
import Button from "../pre-component/Button";

function Documentation() {
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
  <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
      
    <h1
      className="h1 mb-6 text-[40px]"
      data-aos="fade-left" // Changed AOS animation type
      data-aos-delay="7000" // Optional delay for the h1
      data-aos-duration="1000" // Optional duration for the h1
    >
Documentation
    </h1>
    <p 
      className=" mb-6 text-sm"
      data-aos="fade-left" // Changed AOS animation type
      data-aos-delay="7000" // Optional delay for the h1
      data-aos-duration="1000" // Optional duration for the h1
    >
      We have comprehensive online documentation for the platform, including architecture diagrams, guides on using all components and developing your own microservices.



    </p>
    <div className="flex justify-center items-center mb-28"
          data-aos="fade-left" // Changed AOS animation type
          data-aos-delay="7000" // Optional delay for the h1
          data-aos-duration="1000" // Optional duration for the h1
    >
  <Button>View Docmentation Repo </Button>
</div>
</div>

          <div className="relative z-1 mx-20 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className= " w-800px h-full  object-cover  md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={micro1}
              />
</div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Build Your Own Microservices</h4>
              <p className="body-2 mb-[3rem] text-n-3">
              Servicebricks using AI to help you build microservices faster.
              </p>
              <ul className="body-2">
                <ul>
  <li className="flex items-start py-4 border-t border-n-6">
    <img width={24} height={24} src={check} />
    <p className="ml-4">Explore our pre-built microservices to kickstart your project.</p>
  </li>
  <li className="flex items-start py-4 border-t border-n-6">
    <img width={24} height={24} src={check} />
    <p className="ml-4">Access comprehensive online documentation for guidance.</p>
  </li>
  <li className="flex items-start py-4 border-t border-n-6">
    <img width={24} height={24} src={check} />
    <p className="ml-4">Start developing your own microservices easily.</p>
  </li>
  <li className="flex items-start py-4 border-t border-n-6">
    <img width={24} height={24} src={check} />
    <p className="ml-4">Enhance your applications with our tools today.</p>
  </li>
</ul>

              </ul>
            </div>
        
                  </div>

        
</Section>
</div>
<Footer/>
<ButtonGradient />

    </div>
  )
}

export default Documentation

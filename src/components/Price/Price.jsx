import React, { useEffect, useRef } from "react";
import ButtonGradient from "../../assets/svg/ButtonGradient";
import './price.css'; 
import AOS from "aos";
import "aos/dist/aos.css";import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Section from "../pre-component/Section";
import { smallSphere, stars } from "../../assets";
import Heading from "../pre-component/Heading";
import PricingList from "../pre-component/PricingList";
import { LeftLine, RightLine } from "../design/Pricing";
import Button from "../pre-component/Button";
import { Gradient } from "../design/Roadmap";
import { gradient } from "../../assets";

function Price() {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration
      once: true,    // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">

      <Header />
      <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
    
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>
        <div className="relative z-1 max-w-[62rem] -mt-20  md:-mt-20 lg:-mt-40  mx-10 sm:mx-10   md:mx-28 lg:mx-56 xl:mx-72 text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1
            className="md:h1 mb-6 text-[20px] sm:text-[20px]  md:text-[40px]"
            data-aos="fade-left" // Changed AOS animation type
            data-aos-delay="7000" // Optional delay for the h1
            data-aos-duration="1000" // Optional duration for the h1
          >
Code Generation Subscription Plans
          </h1>
          <p 
            className=" mb-6 text-sm text-justify sm:text-justify md:text-center
            "
            data-aos="fade-left" // Changed AOS animation type
            data-aos-delay="7000" // Optional delay for the h1
            data-aos-duration="1000" // Optional duration for the h1
          >
          ServiceBricks is open source and is completely free to use for commercial purposes, but it can takes days, if not weeks, to build a new microservice from scratch. Use our online tools to quickly build new application foundations in seconds with the help of artificial intelligence.
          </p>
    </div>

    <Section className="" id="pricing">
      <div className="container -mt-20 relative z-2">
        

        <Heading
          tag="Get started with Servicebricks"
          title="open source, use forever"
        />
        <div className="flex justify-center items-center mb-28">
  <Button>Get Started with Free!</Button>
</div>

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
      </div>
    </Section>

    <div className="mx-6 flex flex-col  items-center justify-center">
      <h2 className="text-center text-white underline my-7 text-3xl">
      Compare Plans
      </h2>
      <div class="container  flex items-center justify-center   my-4">
      
        <table class="   shadow-md  overflow-hidden ">
            <thead class="border-b">
                <tr>
                    <th class="p-4  text-left">Feature</th>
                    <th class="p-4  text-left">Free</th>
                    <th class="p-4  text-left">Individual/Non-Profit</th>
                    <th class="p-4  text-left">Business</th>
                    <th class="p-4  text-left">Enterprise</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b">
                    <td class="p-4 ">Open Source</td>
                    <td class="p-4 text-center text-green-500">✓</td>
                    <td class="p-4 text-center text-green-500">✓</td>
                    <td class="p-4 text-center text-green-500">✓</td>
                    <td class="p-4 text-center text-green-500">✓</td>
                  
                </tr>
                <tr class="border-b">
                    <td class="p-4 ">Build Your Own Microservices</td>
                    <td class="p-4 text-center text-green-500">✓</td>
                    <td class="p-4 text-center text-green-500">✓</td>
                  
                    <td class="p-4 text-center text-green-500">✓</td>
                    <td class="p-4 text-center text-green-500">✓</td>
                </tr>
                <tr class="border-b">
                    <td class="p-4 ">Online Discussion Boards</td>
                                      <td class="p-4 text-center text-green-500">✓</td>

                    <td class="p-4 text-center text-green-500">✓</td>
                    <td class="p-4 text-center text-green-500">✓</td>
                    <td class="p-4 text-center text-green-500">✓</td>
                </tr>
                <tr class="border-b">
                    <td class="p-4 ">User Licenses</td>
                    <td class="p-4 text-center">Unlimited</td>
                    <td class="p-4 text-center">Unlimited</td>
                    <td class="p-4 text-center">up to 20</td>
                    <td class="p-4 text-center">Unlimited</td>
                </tr>
                <tr class="border-b">
                    <td class="p-4 ">Online Generation Tools</td>
                    <td class="p-4 text-center"></td>
                    <td class="p-4 text-center"></td>
                    <td class="p-4 text-center text-green-500">✓</td>
                    <td class="p-4 text-center text-green-500">✓</td>
                </tr>
                <tr class="border-b">
                    <td class="p-4 ">Full Source Code</td>
                    <td class="p-4 text-center"></td>
                    <td class="p-4 text-center text-green-500">✓</td>
                    <td class="p-4 text-center text-green-500">✓</td>
                    <td class="p-4 text-center text-green-500">✓</td>
                </tr>
                <tr class="border-b">
                    <td class="p-4 ">All Database Providers / Unit and Integration Tests</td>
                    <td class="p-4 text-center"></td>
                    <td class="p-4 text-center"></td>
                    <td class="p-4 text-center text-green-500">✓</td>
                    <td class="p-4 text-center text-green-500">✓</td>
                </tr>
                <tr class="border-b">
                    <td class="p-4 ">Email Support</td>
                    <td class="p-4 text-center"></td>
                    <td class="p-4 text-center text-green-500">✓</td>
                    <td class="p-4 text-center text-green-500">✓</td>
                    <td class="p-4 text-center text-green-500">✓</td>
                </tr>
                <tr class="border-b">
                    <td class="p-4 ">Strategic Direction / Features / Updates</td>
                    <td class="p-4 text-center"></td>
                    <td class="p-4 text-center"></td>
                    <td class="p-4 text-center"></td>
                    <td class="p-4 text-center text-green-500">✓</td>
                </tr>
  
            </tbody>
            <div>
            
            </div>
        </table>
    </div>
    </div>

        </Section>
<Footer/>
<ButtonGradient />

    </div>
  )
}

export default Price

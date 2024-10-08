import React from "react";
import "../Css/contact.css";
import Accordion from "../Conditions/Accordian";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { socials } from "../../constants";
import bricksLogo from "../../assets/bricksLogo.png";
import {Link} from "react-router-dom"
import line from "../../assets/Bg-Vector.webp"

function FAQs() {
  return (
    <>
      <Header />
      <div className=" text-white mt-28">
        <div className="text-center py-6">
          <h1 className="text-purple-600 text-xl animated-text">FAQ's</h1>
          <h1 className="text-6xl  font-bold animated-heading">
            Frequently Asked Questions
          </h1>
        </div>
        <div class="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 ">
            <Accordion title=" What am I buying?">
              <div>
                <p className="my-3 pt-5 text-gray-300 ">
                  ServiceBricks is open source software and is free to use for
                  commercial purposes. Our plans allow you access to our online
                  tools{" "}
                </p>
                <p className="my-3 pt-5 ">
                  The subscription plans above are for:
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    Using our online tools with artificial intelligence
                    integration
                  </li>
                  <li>
                    Code generation for all supported database providers with
                    unit and integration tests
                  </li>
                  <li>
                    Email support to help your development team with any
                    technical issues
                  </li>
                </ul>
                <p className="my-3 pt-5 ">
                  We work closely with our enterprise customers strategically
                  for new product features.
                </p>{" "}
              </div>
            </Accordion>

            <Accordion title="Can I use the Cache, Logging, Notification and Security microservices if I don't purchase a subscription?">
              <div>
                <p className="my-3 pt-5 text-gray-300 ">Yes!</p>
                <p className="my-3 pt-5 ">
                  These microservices are released open source via the MIT
                  license, the same as ServiceBricks. They are available from
                  the public NuGet feed.
                </p>{" "}
              </div>
            </Accordion>

            <Accordion title="Is this a subscription or a perpetual license?">
              <div>
                <p className="my-3 pt-5 text-gray-300 ">
                  You are purchasing a monthly subscription for the use of our
                  tools.
                </p>
                <p className="my-3 pt-5 ">
                  Any created source code is yours to own.
                </p>{" "}
              </div>
            </Accordion>

            <Accordion title="What are User Licenses?">
              <div>
                <p className="my-3 pt-5 text-gray-300 ">
                  User licenses are needed for for each user of the website.
                  Each user will need their own email address to access our
                  features.
                </p>
                <p className="my-3 pt-5 ">
                  Any user of our website tools must purchase a user license.
                </p>{" "}
              </div>
            </Accordion>

            <Accordion title="How can I purchase?">
              <div>
                <p className="my-3 pt-5 text-gray-300 ">Coming Soon!</p>
                <p className="my-3 pt-5 ">
                  We are getting ready for our first major release and will be
                  launching our subscription plans soon.
                </p>{" "}
              </div>
            </Accordion>

            <Accordion title="What if I have other questions?">
              <div>
                <p className="my-3 pt-5 text-gray-300 ">
                  Just send us an email at Support@HoloModular.com and we will
                  be happy to help!
                </p>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
      <div   
     className="border-t-2 border-gray-400"
       >
      <section
        // crosses 
       className="px-0 md:px-16 !py-0">
     <div style={{ backgroundImage: `url(${line})` }} 
     >
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-4 sm:pt-16 pt-6
        "
        >
          <div className="flex flex-col items-start mb-8">
            <img
              src={bricksLogo}
              alt="hoobank"
              className="h-20 flex self-center object-contain"
            />
            <p className="text-gray-300 mt-3 mx-0 max-w-[312px] text-center">
              A new way to make the micro service reliable and secure.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white text-center">
              Useful Links
            </h4>
            <ul className="list-none mt-4">
                <li  className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-color-1 cursor-pointer mb-4 text-center" to="">
    <Link to="/documentation">            Documentation</Link>
                </li>
                <li  className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-color-1 cursor-pointer mb-4 text-center" to="">
   <Link to="/getstarted">             Get Started
</Link>                </li>
                
                <li  className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-color-1 cursor-pointer mb-4 text-center" to="">
 <Link to="/price">               Pricing
  </Link>              </li>
                <li  className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-color-1 cursor-pointer mb-4 text-center" to="">
 <Link to="/features">               Features
 </Link>               </li>
                
                <li  className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-color-1 cursor-pointer mb-4 text-center" >
<Link to="/about">                About
   </Link>             </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white text-center">
              Useful Links
            </h4>
            <ul className="list-none mt-4">
                <li  className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-color-1 cursor-pointer mb-4 text-center" to="">
    <Link to="/News">           Latest News</Link>
                </li>
                <li  className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-color-1 cursor-pointer mb-4 text-center" to="">
   <Link to="/Faqs">             FAQs
</Link>                </li>
                
                <li  className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-color-1 cursor-pointer mb-4 text-center" to="">
 <Link to="/Policy">               Privacy Policy
  </Link>              </li>
                <li  className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-color-1 cursor-pointer mb-4 text-center" to="">
 <Link to="/conditions">               Term & conditions
 </Link>               </li>
                
               </ul>
        
          </div>
        

          <div className="flex flex-col items-center">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white text-center">
              Community
            </h4>
            <ul className="list-none mt-4">
              {['Help Center', 'Partners', 'Suggestions', 'Blog', 'Newsletters'].map((link, index) => (
                <li key={index} className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-color-1 cursor-pointer mb-4 text-center">
                  {link}
                </li>
              ))}
            </ul>
          </div>

         </section>


        <div className="mx-4">
          <div className="container flex flex-col sm:flex-row sm:justify-between border-t-2 border-gray-500 justify-center items-center gap-5 pt-4">
            <p className="caption text-n-4 lg:block text-center">
              Copyright Ⓒ 2024 Holo Modular LLC. All Rights Reserved.
            </p>

            <ul className="flex gap-5 flex-wrap justify-center">
              {socials.map((item) => (
                <Link
                  key={item.id}
                  to={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-color-1 justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                >
                  <img src={item.iconUrl} width={16} height={16} alt={item.title} className="text-color-1" />
                </Link>
              ))}
            </ul>
            </div>          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default FAQs;

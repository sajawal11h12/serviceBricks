import React from "react";
import Section from "../pre-component/Section";
import { socials } from "../../constants";
import bricksLogo  from "../../assets/bricksLogo.png";

const Footer = () => {
  return (
<>
 
<Section crosses className="!px-0 !py-0 ">
<section className={`flex justify-center items-center mx-28 sm:pt-16 pt-6 flex-col`}>
    <div className={`flex justify-center items-start md:flex-row flex-col mb-8 w-full`}>
      <div className=" flex flex-col items- justify-start mr-10">
        <img
          src={bricksLogo}
          alt="hoobank"
          className="h-20 object-contain"
        />
        <p className={` text-gray-300 mt-3  mx-6 max-w-[312px]`}>
          A new way to make the micro service  reliable and secure.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
      <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
  <h4 className="font-poppins text-center font-medium text-[18px] leading-[27px] text-white">
    Useful Links
  </h4>
  <ul className="list-none text-center mt-4">
    <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-secondary cursor-pointer mb-4">
     Documentation
    </li>
    <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-secondary cursor-pointer mb-4">
      Get Started
    </li>
    <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-secondary cursor-pointer mb-4">
      Features
    </li>
    <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-secondary cursor-pointer mb-4">
      Pricing
    </li>
    <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-secondary cursor-pointer mb-0">
About
    </li>
  </ul>
</div>

<div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
  <h4 className="font-poppins font-medium text-center text-[18px] leading-[27px] text-white">
    Community
  </h4>
  <ul className="list-none text-center mt-4">
    <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-secondary cursor-pointer mb-4">
      Help Center
    </li>
    <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-secondary cursor-pointer mb-4">
Partners    </li>
    <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-secondary cursor-pointer mb-4">
      Suggestions
    </li>
    <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-secondary cursor-pointer mb-4">
     Blog
    </li>
    <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-secondary cursor-pointer mb-0">
Newsletters
    </li>
  </ul>
</div>

<div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
  <h4 className="font-poppins text-center font-medium text-[18px] leading-[27px] text-white">
    Partners
  </h4>
  <ul className="list-none mt-4 text-center">
    <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-secondary cursor-pointer mb-4">
Our Partner
    </li>
    <li className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-secondary cursor-pointer mb-4">
Become a Partner
    </li>
    
  </ul>
</div>

     
      </div>
    </div>
     </section>
<div className="mx-16">
      <div className="container flex sm:justify-between border-t-2  border-gray-500 justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block pt-4">
        Copyright Ⓒ 2024 Holo Modular LLC. All Rights Reserved.
       </p>

        <ul className="flex gap-5 flex-wrap pt-4">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
      </div>
    </Section>

    </>  );
};

export default Footer;

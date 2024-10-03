
import React from "react";
import Section from "../pre-component/Section";
import { socials } from "../../constants";
import bricksLogo from "../../assets/bricksLogo.png";

const Footer = () => {
  return (
    <>
      <Section crosses className="px-0 md:px-16 !py-0">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-4 sm:pt-16 pt-6">
          <div className="flex flex-col items-start mb-8">
            <img
              src={bricksLogo}
              alt="hoobank"
              className="h-20 object-contain"
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
              {['Documentation', 'Get Started', 'Features', 'Pricing', 'About'].map((link, index) => (
                <li key={index} className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-secondary cursor-pointer mb-4 text-center">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white text-center">
              Community
            </h4>
            <ul className="list-none mt-4">
              {['Help Center', 'Partners', 'Suggestions', 'Blog', 'Newsletters'].map((link, index) => (
                <li key={index} className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-secondary cursor-pointer mb-4 text-center">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white text-center">
              Partners
            </h4>
            <ul className="list-none mt-4">
              {['Our Partner', 'Become a Partner'].map((link, index) => (
                <li key={index} className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300 hover:text-secondary cursor-pointer mb-4 text-center">
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
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                >
                  <img src={item.iconUrl} width={16} height={16} alt={item.title} />
                </a>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Footer;

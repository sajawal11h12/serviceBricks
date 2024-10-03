import React, { useEffect } from "react";
import { companyLogos } from "../../constants";
import mongodb from '../../assets/mongodb.png';
import oracle from '../../assets/oracle.png';
import ele from '../../assets/ele.png';
import sql from '../../assets/sql.png';
import sqllite from '../../assets/sqllite.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CompanyLogos = ({ className }) => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Reduced duration for animations
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className={className}>
     <div className="bg-[#00000065] h-auto sm:h-40 flex flex-col sm:flex-row items-center justify-between w-full rounded-3xl p-4" data-aos="fade-up">
  <h1 className="text-left text-2xl sm:text-3xl font-bold font-mono">
    Open Source
  </h1>

  <div className="hidden sm:block h-32 w-[1px] bg-[#7f31a3] mx-4"></div> {/* Vertical line only visible on larger screens */}

  <h5 className="text-[#ffffff6c] text-center mt-4 sm:mt-0 text-sm sm:text-base">
    ServiceBricks is FREE to use for commercial purposes.<br /> It is available under the MIT license.
  </h5>
</div>


      <div className="flex mt-28 justify-around items-center">
        <img src={mongodb} width={134} height={28} alt="MongoDB Logo" className="transition-transform duration-700 hover:scale-110" data-aos="zoom-in" />
        <img src={ele} width={134} height={28} alt="Elephant Logo" className="transition-transform duration-700 hover:scale-110" data-aos="zoom-in" />
        <img src={oracle} width={134} height={28} alt="Oracle Logo" className="transition-transform duration-700 hover:scale-110" data-aos="zoom-in" />
        <img src={sql} width={70} height={28} alt="SQL Logo" className="transition-transform duration-700 hover:scale-110" data-aos="zoom-in" />
        <img src={sqllite} width={70} height={28} alt="SQLite Logo" className="transition-transform duration-700 hover:scale-110" data-aos="zoom-in" />
      </div>
    </div>
  );
};

export default CompanyLogos;

import React, { useEffect } from "react";
import ButtonGradient from "../../assets/svg/ButtonGradient";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Section from "../pre-component/Section";
import Button from "../pre-component/Button";
import Heading from "../pre-component/Heading";
import re from '../../assets/re.png'; // Assuming the correct path to the re.png file

function Consulting() {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration
      once: true,    // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
      <div className="relative pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        {/* Background with blur */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-md"
          style={{ backgroundImage: `url(${re})` }} // Background image with blur
        />
        {/* Content goes on top of blurred background */}
        <div className="relative z-10">
          <Header />

          <Section
            className="pt-[10rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="hero"
          >
            <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[3.25rem]">
              <h1
                className="h1 mb-6 text-[40px]"
                data-aos="fade-up" // Changed AOS animation type
                data-aos-delay="7000" // Optional delay for the h1
                data-aos-duration="1000" // Optional duration for the h1
              >
                Consulting Services
              </h1>

              <p
                className="mb-6 text-lg"
                data-aos="fade-up" // Changed AOS animation type
                data-aos-delay="7000" // Optional delay for the h1
                data-aos-duration="1000" // Optional duration for the h1
              >
                How Can We Help You?
              </p>

              <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center my-8">
                <p
                  className="w-auto sm:w-full md:w-1/2 mb-2 text-justify flex self-start mx-3 md:mx-10"
                  data-aos="fade-right" // Changed AOS animation type
                  data-aos-delay="7000" // Optional delay for the h1
                  data-aos-duration="1000" // Optional duration for the h1
                >
                  Our expert consultants work closely with your team to understand your unique challenges and goals, providing tailored solutions that streamline development, enhance scalability, and improve overall efficiency. Whether you're looking to optimize existing systems or implement new microservices from the ground up, we provide the expertise and support you need.
                </p>
                <p
                  className="w-auto sm:w-full md:w-1/2 mb-2 text-justify flex self-start mx-3 md:mx-10"
                  data-aos="fade-left" // Changed AOS animation type
                  data-aos-delay="7000" // Optional delay for the h1
                  data-aos-duration="1000" // Optional duration for the h1
                >
                  We guide you through best practices, architectural design, and implementation strategies, ensuring a seamless transition and long-term success. Partner with us and discover how ServiceBricks can transform your approach to software development, driving innovation and business growth.
                </p>
              </div>

              <div>
                <p className="font-bold">
                  Contact our sales staff at{" "}
                  <Link className="text-purple-500" href="mailto:@HoloModular.com">
                    Support@HoloModular.com
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center pb-8">
              <Heading
                tag="Consulting Services"
                title="Experts in Design"
              />

              <p className="text-lg -mt-8 pb-7 font-thin">
                See how our team of experts can help you design and implement a microservices architecture that meets your unique needs.
              </p>
              <Button>
                Get in Touch
              </Button>
            </div>
          </Section>
        </div>
      </div>
      <Footer />
      <ButtonGradient />
    </div>
  );
}

export default Consulting;

import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { benefits } from '../../constants'; // Importing the benefits data
import Arrow from '../../assets/svg/Arrow'; // Importing the Arrow component
import { GradientLight } from '../design/Benefits'; // Importing GradientLight for card effects
import ClipPath from '../../assets/svg/ClipPath'; // Importing ClipPath for additional effects
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles
import Button from '../pre-component/Button';
import { Gradient } from '../design/Services';
import ButtonGradient from '../../assets/svg/ButtonGradient';

const Feature = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Duration of animations
      once: false, // Allow animations to happen multiple times
    });

    // Refresh AOS on scroll
    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="container mx-auto py-10">
        <h1 className="text-center text-5xl p-14 font-light">Our Features</h1>
        <div className="flex flex-wrap gap-10 justify-center">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[22rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`, // Background image for the card
              }}
              key={item.id}
              data-aos="fade-up" // AOS animation attribute
              data-aos-delay={item.delay || 0} // Optional delay for animations
            >
              <div className="relative z-2 flex flex-col h-[350px] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl} // Icon for the card
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }} // Clip path for additional styling
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl} // Image for the card
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>

        {/* Add your heading and paragraph here */}
        <div className="p-36 rounded-3xl text-center mt-16 px-6 border-2 border-[#80808067]">
          <h1 className="text-4xl font-bold text-[#e4e0e0] mb-6">
            Ready to Get Started?
          </h1>
          <p className="text-lg text-[#e4e0e0] mb-8">
            View all of our examples and complete source code online.
          </p>
          <Button className="">
            Get Started
          </Button>
          <ButtonGradient />
        </div>

        <Gradient />

        {/* New section for Learn More About Microservices with embedded video */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-[#e4e0e0] mb-4">Learn More About Microservices</h2>
          <iframe
            width="760"
            height="315"
            src="https://www.youtube.com/embed/v64uxLwpfPg "
            title="Learn More About Microservices"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mx-auto " // Centering the video
          ></iframe>
        </div>




        {/* New section for Building Microservices with AI */}
<div className="bg-[#1a1a2e] text-center py-16 mt-16 rounded-lg shadow-lg">
  <h2 className="text-4xl font-bold text-[#e4e0e0] mb-4">
    Build Microservices Online with Artificial Intelligence
  </h2>
  <p className="text-lg text-[#e4e0e0] mb-8 max-w-2xl mx-auto">
    Use our online tools to create microservices quickly and easily in just a few seconds. Try completely free!
  </p>
  <div className="flex justify-center gap-6">
    <Button>
      Register
    </Button>
    <Button >
      Sign In
    </Button>
  </div>
</div>


      </div>
      <Footer />
    </div>
  );
};

export default Feature;

import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { benefits } from '../../constants'; // Importing the benefits data
import Arrow from '../../assets/svg/Arrow'; // Importing the Arrow component
import { GradientLight } from '../design/Benefits'; // Importing GradientLight for card effects
import ClipPath from '../../assets/svg/ClipPath'; // Importing ClipPath for additional effects
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles

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
        <h1 className="text-center text-3xl font-bold mb-10">Our Features</h1>
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
      </div>
      <Footer />
    </div>
  );
};

export default Feature;

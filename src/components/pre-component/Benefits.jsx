import { benefits } from "../../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../../assets/svg/Arrow";
import { GradientLight } from "../design/Benefits";
import ClipPath from "../../assets/svg/ClipPath";
import Button from "./Button";
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react'; // Import useEffect

const Benefits = () => {
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
    <Section id="features">
      <p className="font-bold text-center text-[60px]">Our Advance Features</p>
      <div className="container relative z-2">
        <h1 className="text-lg text-[#ffffff86] mt-10 text-center mb-28">
          Explore Smarter, Not Harder with Servicebricks
        </h1>

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
              data-aos="fade-up" // Add AOS animation
              data-aos-delay={item.delay || 0} // Optional delay for staggered animations
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
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
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
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
      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button>Explore more</Button>
      </div>
    </Section>
  );
};

export default Benefits;

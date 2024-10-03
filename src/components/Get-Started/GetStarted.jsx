import React , {useEffect} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Section from "../pre-component/Section";
import Heading from "../pre-component/Heading";
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonGradient from "../../assets/svg/ButtonGradient";
import Button from "../pre-component/Button";
import Arrow from '../../assets/svg/Arrow'; // Importing the Arrow component
import { GradientLight } from '../design/Benefits'; // Importing GradientLight for card effects
import ClipPath from '../../assets/svg/ClipPath';
import micro from "../../assets/services/documentation.webp";
import  { benefitImage2} from '../../assets'
import a1 from '../../assets/benefits/CacheMicroservice.webp';
import a2 from '../../assets/benefits/LoggingMicroservice.webp';
import a3 from '../../assets/benefits/NotificationMicroservice.webp';
import a4 from '../../assets/benefits/SecurityMicroservice.webp';
import aa1 from '../../assets/benefits/card-1.svg';
import { brainwaveSymbol, check, service2 } from "../../assets";
import { collabApps, collabContent, collabText } from "../../constants";
import brickslogomini from '../../assets/brickslogomini.png'
import { LeftCurve, RightCurve } from "../design/Collaboration";

function GetStarted() {
    useEffect(() => {
        AOS.init({
          duration: 3000, // Animation duration
          once: true,    // Whether animation should happen only once
        });
      }, []);
      const svgString = `<svg preserveAspectRatio="none" width="384" height="366" viewBox="0 0 384 366" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path vector-effect="non-scaling-stroke" d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V334C383 351.121 369.121 365 352 365H32C14.8792 365 1 351.121 1 334V32C1 14.8792 14.8792 1 32 1Z" stroke="white" stroke-opacity="0.15" stroke-width="2"/>
      <path vector-effect="non-scaling-stroke" d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V334C383 351.121 369.121 365 352 365H32C14.8792 365 1 351.121 1 334V32C1 14.8792 14.8792 1 32 1Z" stroke="url(#paint0_linear_333_9188)" stroke-opacity="0.85" stroke-width="2"/>
      <defs>
        <linearGradient id="paint0_linear_333_9188" x1="192" y1="0" x2="192" y2="366" gradientUnits="userSpaceOnUse">
          <stop stop-color="#33CEFF"/>
          <stop offset="0.562842" stop-color="#D633FF" stop-opacity="0"/>
        </linearGradient>
      </defs>
    </svg>`;
  
    // Encode the SVG
    const encodedSvg = encodeURIComponent(svgString);
    const backgroundImage = `url('data:image/svg+xml;charset=utf-8,${encodedSvg}')`;
  
    // Define the style
    const style = {
      backgroundImage,
    };    
  return (
    <div className="overflow-hidden">

    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
    
    <Header />

    <Section
    className="pt-[5rem] -mt-[5.25rem]"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="features"    >
              <div className="relative z-1 max-w-[62rem]   mx-10 sm:mx-10   md:mx-28 lg:mx-56 xl:mx-72 text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        <h1
          className="md:h1 mb-6 text-[20px] sm:text-[20px]  md:text-[40px]"
          data-aos="fade-left" // Changed AOS animation type
          data-aos-delay="7000" // Optional delay for the h1
          data-aos-duration="1000" // Optional duration for the h1
        >
     </h1>
    <Heading
          tag=""
          title="Example Applications"
        />


        <p 
          className=" mb-6 text-sm text-justify sm:text-justify md:text-center
"
          data-aos="fade-left" // Changed AOS animation type
          data-aos-delay="7000" // Optional delay for the h1
          data-aos-duration="1000" // Optional duration for the h1
        >Explore all of our example applications. From single, monolithic web applications (great for testing) to containerized, multi-web application deployments. These examples contain the basic building blocks needed to create and scale your own foundations quickly.

        </p>
        <Button>
         veiw example repo
        </Button>
</div>
<div className='border-2 p-8 mb-16 border-gray-600 rounded-3xl mx-4 sm:mx-4 md:mx-20 lg:mx-28'>
<div className='flex justify-center items-center flex-col'>
    <h2 className=' text-2xl sm:text-2xl md:text-4xl text-gray-200'>
    Build Microservices Online with Artificial Intelligence
    </h2>
    <p className='text-base sm:text-base md:text-xl font-grotesk text-gray-300 mb-4'>
    Use our online tools to create microservices quickly and easily in just a few seconds. Try completely free!
    </p>
    
    <Button>
         Regester Now
        </Button>
</div>

<div className='flex flex-col items-center pt-5 justify-center'>
    <h2 className='text-xl sm:text-xl md:text-2xl text-gray-200 my-2'>
    Pre-Built Microservices
    </h2>
    <p className='text-sm font-extralight my-2'>
    Use our online tools to create microservices quickly and easily in just a few seconds. Try completely free!
    </p>
    

    <div className='flex flex-col sm:flex-col md:flex-row my-5  pt-5'>


    {/* <div
              className="block mx-10 relative my-5 p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[22rem]"
              style={style}
              data-aos="fade-up" // AOS animation attribute
            >
              <div className="relative z-2 flex flex-col sm:w-64 lg:w-auto h-[250px] p-0 md:p-[2.4rem] pointer-events-none">
                <h5 className="mb-1 text-lg md:text-xl md:mb-4">Cache Microservice</h5> 
                <p className=" mb-1 lg:mb-4  text-n-3">Generic key/value pair data storage with an expiration process to delete expired data.</p> 
                <div className="flex items-center mt-3 lg:mt-10">
                  
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    View Cache Repo
                  </p>
                  <Arrow /> 
                </div>
              </div>
              {true && <GradientLight />} 

              
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }} // Clip path for additional styling
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  
                    <img
                      src={a1} // Image for the card
                      width={380}
                      height={362}
                      className="w-full h-full object-cover"
                    />
                  
                </div>
              </div>

              <ClipPath /> 
            </div> 
 */}

{/*                  */}
{/* 
            <div
              className="block mx-10 relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[22rem]"
              style={style}
              data-aos="fade-up" // AOS animation attribute
            >
              <div className="relative z-2 flex flex-col sm:w-64 lg:w-auto h-[250px] p-8 md:p-[2.4rem] pointer-events-none">
                <h5 className="mb-1 text-lg md:text-xl md:mb-4">Notification Microservice</h5> 
                <p className="mb-1 lg:mb-4  text-n-3">Notification and delivery of emails and SMS messages.</p> 
                <div className="flex items-center mt-auto">
                  
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    View Notification Repo
                  </p>
                  <Arrow /> 
                </div>
              </div>
              {true && <GradientLight />} 

              
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }} // Clip path for additional styling
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  
                    <img
                      src={a3} // Image for the card
                      width={380}
                      height={362}
                      className="w-full h-full object-cover"
                    />
                  
                </div>
              </div>

              <ClipPath /> 
            </div>
 */}
</div>






{/* <div className='flex flex-col sm:flex-col md:flex-row my-5'> */}



{/* <div
          className="block mx-10 relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[22rem]"
          style={style}
          data-aos="fade-up" // AOS animation attribute
        >
          <div className="relative z-2 flex flex-col h-[250px] p-[2.4rem] pointer-events-none">
            <h5 className="h5 mb-5">Logging Microservice</h5> 
            <p className="body-2 mb-6  text-n-3">Service-scoped or centralized application logging with web request and response auditing.</p> 
            <div className="flex items-center mt-auto">
              
              <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                View Logging Repo
              </p>
              <Arrow /> 
            </div>
          </div>
         
          
          <div
            className="absolute inset-0.5 bg-n-8"
            style={{ clipPath: "url(#benefits)" }} // Clip path for additional styling
          >
            <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
              
                <img
                  src={a2} // Image for the card
                  width={380}
                  height={362}
                  className="w-full h-full object-cover"
                />
              
            </div>
          </div>

          <ClipPath /> 
        </div> */}

{/*                  */}
{/* 
        <div
          className="block mx-10 relative  p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[22rem]"
          style={style}
          data-aos="fade-up" // AOS animation attribute
        >
          <div className="relative z-2 flex flex-col h-[250px] p-[2.4rem] pointer-events-none">
            <h5 className="h5 mb-5">Security Microservice</h5> 
            <p className="body-2 mb-6  text-n-3">Authentication, authorization, and application security with JWT bearer token support for multi-application deployments.</p> 
            <div className="flex items-center mt-auto">
              
              <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                View Security Repo
              </p>
              <Arrow /> 
            </div>
          </div>
         
          
          <div
            className="absolute inset-0.5 bg-n-8"
            style={{ clipPath: "url(#benefits)" }} // Clip path for additional styling
          >
            <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
              
                <img
                  src={a4} // Image for the card
                  width={380}
                  height={362}
                  className="w-full h-full object-cover"
                />
              
            </div>
          </div>

          <ClipPath /> 
        </div> */}

{/* </div> */}

<div className="flex flex-col sm:flex-col md:flex-row flex-wrap  justify-center gap-5 my-5 pt-5">
  
  {/* Card 1 - Cache Microservice */}
  <div
    className="block mx-5 relative p-0.5 bg-no-repeat bg-[length:100%_100%]  w-full sm:w-80 md:w-1/2 lg:w-[22rem]"
    style={style}
    data-aos="fade-up"
  >
    <div className="relative z-2 flex flex-col h-[250px] p-4 md:p-[2.4rem] pointer-events-none">
      <h5 className="mb-1 text-lg md:text-xl md:mb-4">Cache Microservice</h5>
      <p className="mb-1 lg:mb-4 text-n-3">Generic key/value pair data storage with an expiration process to delete expired data.</p>
      <div className="flex items-center mt-3 lg:mt-10">
        <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
          View Cache Repo
        </p>
        <Arrow />
      </div>
    </div>
    {true && <GradientLight />}
    <div className="absolute inset-0.5 bg-n-8" style={{ clipPath: "url(#benefits)" }}>
      <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
        <img src={a1} width={380} height={362} className="w-full h-full object-cover" />
      </div>
    </div>
    <ClipPath />
  </div>

  {/* Card 2 - Notification Microservice */}
  <div
    className="block mx-5 relative p-0.5 bg-no-repeat bg-[length:100%_100%] w-full sm:w-80 md:w-1/2 lg:w-[22rem]"
    style={style}
    data-aos="fade-up"
  >
    <div className="relative z-2 flex flex-col h-[250px] p-4 md:p-[2.4rem] pointer-events-none">
      <h5 className="mb-1 text-lg md:text-xl md:mb-4">Notification Microservice</h5>
      <p className="mb-1 lg:mb-4 text-n-3">Notification and delivery of emails and SMS messages.</p>
      <div className="flex items-center mt-auto">
        <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
          View Notification Repo
        </p>
        <Arrow />
      </div>
    </div>
    {true && <GradientLight />}
    <div className="absolute inset-0.5 bg-n-8" style={{ clipPath: "url(#benefits)" }}>
      <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
        <img src={a3} width={380} height={362} className="w-full h-full object-cover" />
      </div>
    </div>
    <ClipPath />
  </div>

  {/* Card 3 - Logging Microservice */}
  <div
    className="block mx-5 relative p-0.5 bg-no-repeat bg-[length:100%_100%] w-full sm:w-80 md:w-1/2 lg:w-[22rem]"
    style={style}
    data-aos="fade-up"
  >
    <div className="relative z-2 flex flex-col h-[250px] p-4 md:p-[2.4rem] pointer-events-none">
      <h5 className="-mt-0 sm:-mt-0 md:-mt-4 lg:-mt-0 mb-1">Logging Microservice</h5>
      <p className="mb-1 lg:mb-4 text-justify text-n-3">Service-scoped or centralized application logging with web request and response auditing.</p>
      <div className="flex items-center mt-auto">
        <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
          View Logging Repo
        </p>
        <Arrow />
      </div>
    </div>
    <div className="absolute inset-0.5 bg-n-8" style={{ clipPath: "url(#benefits)" }}>
      <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
        <img src={a2} width={380} height={362} className="w-full h-full object-cover" />
      </div>
    </div>
    <ClipPath />
  </div>

  {/* Card 4 - Security Microservice */}
  <div
      className="block mx-5 relative p-0.5 bg-no-repeat bg-[length:100%_100%] w-full sm:w-80 md:w-1/2 lg:w-[22rem]"
      style={style}
    data-aos="fade-up"
  >
    <div className="relative z-2 flex flex-col h-[250px] p-4 md:p-[2.4rem] pointer-events-none">
      <h5 className="mb-1 -mt-0 sm:-mt-0 md:-mt-5 lg:-mt-0 text-lg md:text-xl md:mb-3">Security Microservice</h5>
      <p className="mb-1 lg:mb-4 text-justify text-n-3">Application security with JWT bearer token support for multi-application deployment.</p>
      <div className="flex items-center mt-auto">
        <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
          View Security Repo
        </p>
        <Arrow />
      </div>
    </div>
    <div className="absolute inset-0.5 bg-n-8" style={{ clipPath: "url(#benefits)" }}>
      <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
        <img src={a4} width={380} height={362} className="w-full h-full object-cover" />
      </div>
    </div>
    <ClipPath />
  </div>

</div>

</div>




   </div>

  
  
  
  
  
   
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8" data-aos="fade-right">
          Database Providers Supported
                 </h2>

                 <ul className="max-w-[22rem] mb-10 md:mb-14">
          <li className="flex items-start py-4 border-t border-n-6">
    <img width={24} height={24} src={check} />
    <p className="ml-4">Azure Data Tables</p>
  </li>
  <li className="flex items-start py-4 border-t border-n-6">
    <img width={24} height={24} src={check} />
    <p className="ml-4">Azure Cosmos DB</p>
  </li>
  <li className="flex items-start py-4 border-t border-n-6">
    <img width={24} height={24} src={check} />
    <p className="ml-4">Azure Sql</p>
  </li>
  <li className="flex items-start py-4 border-t border-n-6">
    <img width={24} height={24} src={check} />
    <p className="ml-4">Entity Framework Core</p>
  </li>
  <li className="flex items-start py-4 border-t border-n-6">
    <img width={24} height={24} src={check} />
    <p className="ml-4">In Memory</p>
  </li>
  <li className="flex items-start py-4 border-t border-n-6">
    <img width={24} height={24} src={check} />
    <p className="ml-4">Microsoft Sql Server</p>
  </li>
  <li className="flex items-start py-4 border-t border-n-6">
    <img width={24} height={24} src={check} />
    <p className="ml-4">MongoDB</p>
  </li>
  <li className="flex items-start py-4 border-t border-n-6">
    <img width={24} height={24} src={check} />
    <p className="ml-4">Postgres</p>
  </li>
  <li className="flex items-start py-4 border-t border-n-6">
    <img width={24} height={24} src={check} />
    <p className="ml-4">Sqlite</p>
  </li>
  <li className="flex items-start py-4 border-t border-n-6">
    <img width={24} height={24} src={check} />
    <p className="ml-4">More to come!</p>
  </li>
          </ul>
        <Button data-aos="fade-right" className='my-8'>Try it now</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4" data-aos="fade-left">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
          Exposes a storage platform-agnostic model and repository-based API, supporting both relational (SQL) and document (NoSQL) databases. Switch storage providers without impacting microservice operations.
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brickslogomini}
                    width={50}
                    height={50}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45}`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
   



  
   </Section>
    <Footer/>
    <ButtonGradient />
  
    </div>
    </div>

  )
}

export default GetStarted

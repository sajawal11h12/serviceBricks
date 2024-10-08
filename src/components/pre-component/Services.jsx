import Section from "./Section";
import Heading from "./Heading";
import service4 from '../../assets/service4.png'
import { service1, service2, service3, check } from "../../assets";
import AI from '../../assets/AI.png'
import colab3 from '../../assets/colab3.jpg'
import { brainwaveServices, brainwaveServicesIcons } from "../../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "../design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          text="Servicebricks unlocks the potential of AI-powered applications"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-[800px] h-full object-cover md:object-right blur-2xl md:blur-none"

                width={800}
                alt="Smartest AI"
                height={730}
                src={service4}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
              Servicebricks using AI to help you build microservices faster.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

           
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 blur- ">
                <img
                  src={AI}
                  className=" padding h-full w-full object-cover ml-60 blur-md "
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

  <div className="absolute inset-0 flex flex-col mt-52  bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className=" text-2xl ">Architectural Excellence</h4>
                <p className="  body-2 mb-[1rem] text-n-3">
                We provide the core architectural patterns, implementation, standardization, and governance for your microservices foundation.
                  
                </p>
                <div className="flex flex-col items-start mt-10 space-y-10">
  <h1 className="flex items-center">
    <img width={24} height={24} src={check} alt="tick" className="mr-2" />
    Switch between storage providers with zero impact.
  </h1>
  
  {/* Horizontal line */}
  <div className="w-[500px] h-[1px] bg-[#80808042]"></div>
  
  <h1 className="flex items-center">
    <img width={24} height={24} src={check} alt="tick" className="mr-2" />
    Use a consistent API for both relational and document DB.
  </h1>
</div>


              </div>

             
            </div>
           
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Pre-Built Microservices</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                Get started using our pre-built microservices and examples. Build new microservices and applications quickly using a robust foundation.
                </p>
                <h1 className="body-2  text-n-3">Independent teams work in parallel, speeding up the overall process.</h1>
                <h1 className="body-2  text-n-3"> Microservices foster teamwork across diverse engineering groups.</h1>
                

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className=" relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={colab3}
                  className=" w-full h-full object-cover " 
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;

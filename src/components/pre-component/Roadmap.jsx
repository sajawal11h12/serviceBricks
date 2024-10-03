import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../../constants";
import { check2, grid, loading1 } from "../../assets";
import { Gradient } from "../design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="What we’re working on" />
      <h1 className="font-extralight text-[#ffffff5e] text-2xl text-center mb-8">
        Pre-Built Microservices
      </h1>

      <div className="relative grid gap-4 md:grid-cols-2 md:gap-3 md:pb-[5rem]">
        {roadmap
          .filter((item, index) => index !== 2) // Exclude the third card (index starts at 0)
          .map((item, index) => {
            const status = item.status === "done" ? "Done" : "In progress";
            const isFourthCard = index === 3; // Identifying the fourth card

            return (
              <div
                className={`md:flex even:md:translate-y-[2.5rem] p-0.25 rounded-[1rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                } ${
                  isFourthCard ? "transform scale-90" : "" // Decrease the size of the fourth card
                }`}
                key={item.id}
              >
                <div className="relative p-4 bg-n-8 rounded-[1rem] overflow-hidden xl:p-6">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      className="w-[220px]"
                      src={grid}
                      width={220}
                      height={220}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[rem] mb-6 md:mb-10">
                      <div className="flex items-center px-3 py-1 bg-n-1 rounded text-n-8">
                        <img
                          className="mr-2"
                          src={item.status === "done" ? check2 : loading1}
                          width={12}
                          height={12}
                          alt={status}
                        />
                        <div className="tagline text-sm">{status}</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <img
                        className={`w-[${isFourthCard ? '200px' : '300px'}] h-[${
                          isFourthCard ? '200px' : '300px'
                        }] object-cover mx-auto`} // Adjust the image size for the fourth card
                        src={item.imageUrl}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="h4 mb-2 text-[1rem]">{item.title}</h4>
                    <p className="body-2 text-n-4 text-sm">{item.text}</p>
                    <Button className="mt-12">View logging Repo</Button>
                  </div>
                </div>
              </div>
            );
          })}

        <Gradient />
      </div>

      <div className="flex justify-center mt-8 md:mt-10 xl:mt-12">
        <Button href="/roadmap">Get Started</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;

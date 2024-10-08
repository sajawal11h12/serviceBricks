import { check } from "../../assets";
import { pricing } from "../../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
         className="w-[14rem] max-lg:w-full h-full px-2 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-12 odd:py-6 odd:my-2"
        >
          <h4 className="h4 mb-4  text-[#db89db88]">{item.title}</h4>

          <p className="body-2 min-h-[1.5rem] sm:min-h-[1.5rem] md:min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          <div className="flex items-center h-[3rem] sm:h-[3.2rem] md:h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="md:h3">$</div>
                <div className=" text-[3rem] sm:text-[3rem] md:text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
            white={!!item.price}
          >
            {item.price ? "Comming soon!" : "Contact us"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;


import { useLocation, Link } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import bricksLogo from "../../assets/bricksLogo.png";
import { navigation } from "../../constants";
import Button from "../pre-component/Button";
import MenuSvg from "../../assets/svg/MenuSvg";
import { HamburgerMenu } from "../design/Header";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation().pathname; // Get the current pathname
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link className="block w-[12rem] xl:mr-8" to="/">
          <img src={bricksLogo} width={150} height={40} alt="Bricks" />
        </Link>

        <nav
          className={`${
            openNavigation ? "flex overflow-scroll overflow-x-hidden" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase transition-all duration-300 lg:text-xs lg:font-semibold px-4 py-6 md:py-8 lg:-mr-0.25 lg:leading-5 xl:px-3 group ${
                  item.onlyMobile ? "lg:hidden" : ""
                } ${
                  pathname === item.url
                    ? "text-color-1" 
                    : "text-n-1 hover:text-color-1" 
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <Link
          to="/signup"
          className="button hidden lg:flex  mr-8 text-[white] justify-evenly"
        >
          Register
        </Link>
        <Button className="hidden lg:flex">
          <Link to="/login">Sign in</Link>
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;

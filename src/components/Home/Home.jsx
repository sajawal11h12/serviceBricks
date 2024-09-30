import React from 'react'
import ButtonGradient from "../../assets/svg/ButtonGradient";
import Benefits from "../pre-component/Benefits";
import Collaboration from "../pre-component/Collaboration";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../pre-component/Hero";
import Pricing from "../pre-component/Pricing";
import Roadmap from "../pre-component/Roadmap";
import Services from "../pre-component/Services";

function Home() {
  return (
    <div>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </div>
  )
}

export default Home

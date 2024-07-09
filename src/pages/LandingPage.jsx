import React from "react";
import "@/assets/css/index.css";
import Banner from "../components/landingPage/Banner";
import Features from "../components/landingPage/Features";
import ArtWorks from "../components/landingPage/ArtWorks";
import Testimonials from "../components/landingPage/Testimonials";

const LandingPage = () => {
  return (
    <div className="">
      <Banner />
      <Features />
      <ArtWorks />
      <Testimonials />
    </div>
  );
};

export default LandingPage;

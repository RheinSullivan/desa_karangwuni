// React
import React from "react";
// Componnents
import Header from "../landingpages/Header";
import Navbar from "../landingpages/Navbar";
import Home from "../landingpages/Home";
import Travel from "../landingpages/Travel";
import Information from "../landingpages/Information";
import About from "../landingpages/About";
import TravelExplore from "../landingpages/TravelExplore";
import Culture from "../landingpages/Culture";
import Gallery from "../landingpages/Gallery";
import Explore from "../landingpages/Explore";
import Contact from "../landingpages/Contact";
import Footer from "../landingpages/Footer";
import ScrollTop from "./ScrollTop";

const LandingPage = () => {
  return (
    <div className="z-10 overflow-hidden bg-white bg-cover bg-no-repeat dark:bg-darkcustom">
      {/* Components Header */}
      <Header />
      {/* Components Navbar */}
      <Navbar />
      {/* Components  Hero*/}
      <Home />
      {/* Components Information */}
      <Information />
      {/* Components About */}
      <About />
      {/* Components Travel */}
      <Travel />
      {/* Components Travel Explore */}
      <TravelExplore />
      {/* Components Culture */}
      <Culture />
      {/* Components Galerry */}
      <Gallery />
      {/* Components Explore */}
      <Explore />
      {/* Components Contact */}
      <Contact />
      {/* Components Footer */}
      <Footer />

      <div className="mb-5 lg:mb-2">
        <ScrollTop />
      </div>
    </div>
  );
};

export default LandingPage;

// React
import React, { useState } from "react";
// Image Components
import Jawa from "../assets/image/adat-jawa.jpg";
import Sunda from "../assets/image/adat-sunda.jpg";
import Bali from "../assets/image/bali.jpg";
import Bendungan from "../assets/image/bendungan.jpg";
import Hutan from "../assets/image/jembatan-hutan.jpg";
// React Icons
import { FaRedhat, FaWater } from "react-icons/fa";
import { RiShirtFill } from "react-icons/ri";
import { GiColombianStatue, GiForestCamp } from "react-icons/gi";
import { IoArrowForward } from "react-icons/io5";
// React Multi Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Culture = () => {
  const responsives = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const dataOffers = [
    { icon: <FaRedhat />, image: Jawa, text: "Adat Jawa" },
    { icon: <RiShirtFill />, image: Sunda, text: "Adat Sunda" },
    { icon: <GiColombianStatue />, image: Bali, text: "Adat Bali" },
    { icon: <FaWater />, image: Bendungan, text: "Bendungan Air" },
    { icon: <GiForestCamp />, image: Hutan, text: "Alam yang indah" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      className="bg-site bg-cover pb-16 dark:bg-sitepagedark"
      id="culture"
    >
      <div data-aos="fade-down">
        <div className="mx-auto max-w-[1320px] py-24">
          <div className="mx-3 flex flex-col items-center lg:mx-0">
            <div className="relative mb-5 flex w-fit items-center justify-center px-5 py-2">
              <span className="absolute bottom-0 left-0 right-0 top-0 rounded-md bg-green/50 px-6 py-3 shadow shadow-black backdrop-blur-sm dark:bg-sky-600/50"></span>
              <h6 className="relative z-10 text-2xl font-semibold text-white dark:text-black">
                Ragam Kebudayaan
              </h6>
            </div>
            <h3 className="py-4 pb-16 text-center text-xl font-bold text-white dark:text-black lg:w-4/5 lg:text-4xl">
              Ayo jelajahi bersama ragam kebudayaan di desa kami!
            </h3>
          </div>
          <div className="py-8">
            <Carousel
              responsive={responsives}
              autoPlay={true}
              itemClass="pb-6 px-2"
              className="z-10"
            >
              {dataOffers.map((offer, index) => (
                <div
                  key={offer.image}
                  className="group relative rounded-lg p-8"
                  style={{
                    backgroundImage:
                      hoveredIndex == index ? `url(${offer.image})` : "none",
                    backgroundColor:
                      hoveredIndex == index ? "transparent" : "#10121e",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 rounded-[8px] bg-darkcustom/15" />
                  )}
                  <div className="relative rounded-lg py-8 text-shadow-sm">
                    <span
                      className={`text-7xl ${hoveredIndex === index ? "text-sky-600 dark:text-green" : "text-green dark:text-sky-600"}`}
                    >
                      {offer.icon}
                    </span>
                    <p className="py-4 text-xl font-bold text-sky-600 group-hover:text-green dark:text-green dark:group-hover:text-sky-600">
                      {offer.text}
                    </p>
                    <p className="leading-7 text-white">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </div>
                  <div className="absolute -bottom-5 right-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button className="rounded-full bg-green/50 p-2 text-white backdrop-blur-sm dark:bg-sky-600/50 dark:text-black">
                      <IoArrowForward className="text-xl" />
                    </button>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;

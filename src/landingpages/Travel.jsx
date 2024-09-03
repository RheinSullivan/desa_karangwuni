// React
import React from "react";
// React Icons
import { BsFillSendArrowDownFill } from "react-icons/bs";
// React Multi Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// Image Components
import kopiGincuImage from "../assets/image/kopigincu.jpg";
import setuSedongImage from "../assets/image/setu-sedong.jpeg";
import jembatanCigantungImage from "../assets/image/jembatan-cigantung1.jpeg";
// React
import { Link } from "react-scroll";

const Travel = () => {
  const handleSlideChange = () => {};

  const responsives = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const Explores = ({ id, image, travel, ticket }) => {
    return (
      <div className="group relative overflow-hidden rounded-[10px] shadow shadow-black">
        <img
          className="h-[350px] w-full rounded-[10px] object-cover transition-opacity duration-500 ease-in-out group-hover:scale-150"
          src={image}
          alt={travel}
        />
        <span className="absolute right-5 top-2 my-2 whitespace-pre rounded-lg bg-green/60 px-3 text-sm font-bold uppercase leading-8 text-white shadow shadow-darkcustom backdrop-blur-sm group-hover:bg-sky-600 group-hover:text-darkcustom dark:bg-sky-600/60 dark:text-black">
          {ticket}
        </span>
        <div className="absolute bottom-0 flex w-full flex-col items-start justify-center bg-green/50 px-4 py-3 backdrop-blur-[2px] transition-all duration-500 group-hover:bg-darkcustom/0 group-hover:backdrop-blur-0 dark:bg-sky-600/50">
          <h1 className="flex flex-col text-lg font-bold text-black group-hover:text-sky-600 dark:text-white dark:group-hover:text-green">
            Wisata ke
            <span className="text-xl italic text-white group-hover:text-black dark:text-black dark:group-hover:text-white">
              {travel}
            </span>
          </h1>
          <div className="absolute -top-5 right-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Link to={id} smooth={true} spy={true} offset={-400}>
              <button className="rounded-full bg-sky-600 p-2 text-white group-hover:bg-green group-hover:text-black dark:bg-green dark:text-black dark:group-hover:bg-sky-600 dark:group-hover:text-white">
                <BsFillSendArrowDownFill className="text-xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const dataTravels = [
    {
      id: "danau",
      image: setuSedongImage,
      travel: "Setu Sedong",
      ticket: "2 Tiket",
    },
    {
      id: "mangga",
      image: jembatanCigantungImage,
      travel: "Jembatan Cigantung",
      ticket: "0 Tiket",
    },
    {
      id: "hutan",
      image: kopiGincuImage,
      travel: "Kopi Gincu",
      ticket: "10 Tiket",
    },
    {
      id: "sawah",
      image: setuSedongImage,
      travel: "Setu Sedong",
      ticket: "2 Tiket",
    },
    {
      id: "taman",
      image: jembatanCigantungImage,
      travel: "Jembatan Cigantung",
      ticket: "0 Tiket",
    },
    {
      id: "airterjun",
      image: kopiGincuImage,
      travel: "Kopi Gincu",
      ticket: "10 Tiket",
    },
  ];

  return (
    <section className="bg-sky-600 dark:bg-green" id="travel">
      <div data-aos="fade-down">
        <div
          className="max-[1320px] container mx-auto"
          data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="100"
          aos-delay="300"
        >
          <div className="py-16 pt-20">
            <div className="flex flex-col items-center">
              <div className="relative mb-2 flex w-fit items-center justify-center px-5 py-2">
                <span className="z-10">
                  <h5 className="relative text-2xl font-bold text-white dark:text-black">
                    Eksplor Wisata Disini!
                  </h5>
                </span>
                <span className="z-8 absolute h-full w-full rounded-lg bg-green shadow shadow-black dark:bg-sky-600"></span>
              </div>
              <h2 className="py-4 pb-8 text-center text-xl font-bold text-white dark:text-black lg:text-4xl">
                Ayo berpetualang bersama kami, di Desa Karangwuni!
              </h2>
            </div>
            <div className="my-10 py-8 text-start">
              <Carousel
                infinite
                autoPlay
                autoPlaySpeed={3000}
                responsive={responsives}
                afterChange={handleSlideChange}
                itemClass="pb-6 px-2"
                className="z10"
              >
                {dataTravels.map((item, index) => (
                  <Explores
                    id={item.id}
                    image={item.image}
                    travel={item.travel}
                    ticket={item.ticket}
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travel;

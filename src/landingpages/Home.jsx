// React
import React, { useState, useRef, useEffect } from "react";
// React Type Animation
import { TypeAnimation } from "react-type-animation";
// React Scroll
import { Link } from "react-scroll";
// Framer Moton
import { motion } from "framer-motion";
// React Iacons
import {
  FcCalendar,
  FcConferenceCall,
  FcServices,
  FcShop,
  FcAlarmClock,
} from "react-icons/fc";
import { GiWaterfall, GiSuspensionBridge, GiCoffeeCup } from "react-icons/gi";
import { IoTicketSharp } from "react-icons/io5";
// React Multi Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// Next Theme
import { useTheme } from "next-themes";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { theme } = useTheme();

  const handleSlideChange = (_, state) => {
    setCurrentSlide(state.currentSlide);
  };

  const timeInputRef = useRef(null);
  const dateInputRef = useRef(null);

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;
    const formattedDate = now.toISOString().split("T")[0];

    if (timeInputRef.current) {
      timeInputRef.current.value = formattedTime;
    }
    if (dateInputRef.current) {
      dateInputRef.current.value = formattedDate;
    }
  }, []);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const data = [
    {
      title: "Setu Sedong",
      icon: <GiWaterfall />,
      desc: "Setu ini berfungsi menampung air hujan dan sungai sebagai pengairan daerah pertanian sekitar Kec. Sedong.",
    },
    {
      title: "Jembatan Cigantung",
      icon: <GiSuspensionBridge />,
      desc: "Jembatan penghubung antar Cirebon-Kuningan, terletak di bagian Lojikaum-Kalimati Dusun 3 Desa Karangwuni.",
    },
    {
      title: "Kopi Gincu",
      icon: <GiCoffeeCup />,
      desc: "Sebuah cafe berkonsep alam yang berada di perkebunan mangga gedong gincu.",
    },
    {
      title: "Setu Sedong",
      icon: <GiWaterfall />,
      desc: "Setu ini berfungsi menampung air hujan dan sungai sebagai pengairan daerah pertanian sekitar Kec. Sedong.",
    },
    {
      title: "Jembatan Cigantung",
      icon: <GiSuspensionBridge />,
      desc: "Jembatan penghubung antar Cirebon-Kuningan, terletak di bagian Lojikaum-Kalimati Dusun 3 Desa Karangwuni.",
    },
    {
      title: "Kopi Gincu",
      icon: <GiCoffeeCup />,
      desc: "Sebuah cafe berkonsep alam yang berada di perkebunan mangga gedong gincu.",
    },
  ];

  return (
    <section
      id="home"
      className="mt-36 bg-page bg-cover dark:bg-pagedark lg:mt-28"
    >
      <div
        data-aos="fade-down"
        data-aos-duration="3000"
        data-aos-delay="300"
        className="relative mx-3 lg:mx-16 lg:h-[80vh]"
      >
        <div className="py-20 text-outline-black dark:text-outline-white">
          <div className="relative z-10 mx-auto flex h-[390px] max-w-[1320px] flex-col items-center justify-center pt-16 lg:h-full lg:px-5 lg:pt-0">
            <span className="relative mt-10 flex flex-col text-center text-3xl font-bold text-white dark:text-black lg:mt-5 lg:text-6xl">
              Desa Karangwuni
              <div className="absolute -left-10 -top-[138px] z-10 mt-[115px] w-fit -rotate-[15deg] rounded-md bg-green px-[6px] text-[10px] text-white shadow-lg shadow-black hover:bg-sky-600 dark:bg-white dark:text-black dark:hover:bg-green lg:-left-10 lg:right-0 lg:mt-[115px] lg:px-2 lg:py-3 lg:text-sm">
                Wilujeng Sumping
              </div>
            </span>
            <h5 className="my-5 text-lg font-bold text-white dark:text-black lg:text-2xl">
              Wisata: {""}
              <TypeAnimation
                sequence={[
                  "Setu Sedong",
                  2000,
                  "Kopi Gincu",
                  2000,
                  "Jembatan Cigantung",
                  2000,
                ]}
                speed={50}
                className="text-green"
                wrapper="span"
                repeat={Infinity}
              />
            </h5>
            <p className="mx-3 mb-10 mt-3 text-justify text-base font-semibold text-white dark:text-black lg:mx-36 lg:my-2 lg:text-center lg:text-xl">
              Desa Karangwuni yang terletak di daerah Kecamatan Sedong,
              Kabupaten Cirebon, provinsi Jawa Barat, Indonesia. Dengan jumlah
              penduduk 5.288 diantara lainnya Laki-Laki berjumlah 2.673 dan
              Perempuan 2615. Desa Karangwuni sendiri menyediakan beberapa
              wisata alam, dan tempat untuk berkumpul, yang sangat indah,
              nyaman, dan tenang.
            </p>
            <div className="mt-5 flex flex-col justify-center text-center text-lg font-bold italic text-white dark:text-red lg:flex-row lg:text-2xl">
              <p className="mx-2">Rhein Sullivan : </p>
              <span className="text-red dark:text-black">
                Universitas Muhammadiyah Cirebon
              </span>
            </div>
          </div>
        </div>
        <div className="my-10 w-full items-center justify-between rounded-lg bg-darkcustom/70 p-6 shadow-lg backdrop-blur-sm dark:bg-slate-400/70 lg:my-0 lg:flex">
          <div className="mr-2 flex w-full items-center border-b py-2 pr-2 lg:border-r">
            <FcAlarmClock className="mr-2 text-3xl text-green dark:text-sky-600" />
            <div className="flex w-full flex-col text-white dark:text-black">
              <p className="text-sm">Waktu</p>
              <input
                ref={timeInputRef}
                className="bg-transparent focus:outline-none"
                type="time"
              />
            </div>
          </div>
          <div className="mr-2 flex w-full items-center border-b py-2 pr-2 lg:border-r">
            <FcShop className="mr-2 text-3xl text-sky-600 dark:text-sky-600" />
            <div className="flex w-full flex-col text-white dark:text-black">
              <p className="text-sm">Wisata</p>
              <select className="bg-transparent focus:outline-none">
                <option value="" className="bg-darkcustom dark:bg-white">
                  Setu Sedong
                </option>
                <option value="" className="bg-darkcustom dark:bg-white">
                  Jembatan Cigantung
                </option>
                <option value="" className="bg-darkcustom dark:bg-white">
                  Kopi Gincu
                </option>
              </select>
            </div>
          </div>
          <div className="mr-2 flex w-full items-center border-b py-2 pr-2 lg:border-r">
            <FcCalendar className="mr-2 text-3xl" />
            <div className="flex w-full flex-col text-white dark:text-black">
              <p className="text-sm">Tanggal</p>
              <input
                ref={dateInputRef}
                className="bg-transparent focus:outline-none"
                type="date"
              />
            </div>
          </div>
          <div className="mr-2 flex w-full items-center border-b py-2 pr-2 lg:border-r">
            <FcConferenceCall className="mr-2 text-3xl text-white dark:text-black" />
            <div className="flex w-full flex-col text-white dark:text-black">
              <p className="text-sm">Jumlah Tiket</p>
              <input
                className="bg-transparent focus:outline-none"
                type="number"
                min="0"
              />
            </div>
          </div>
          <div className="group mt-5 flex flex-col items-center gap-2 lg:ml-3 lg:mt-0">
            <button className="flex w-full items-center justify-center gap-2 rounded-lg border-none bg-green px-6 py-4 text-base font-bold text-white outline-none group-hover:bg-white group-hover:text-green dark:bg-sky-600 dark:text-black">
              <IoTicketSharp
                size={20}
                className="text-black group-hover:text-sky-600 dark:text-white"
              />
              Pesan
            </button>
          </div>
        </div>
        <div className="-mx-9 mt-16 rounded">
          <div className="max-[1320px] relative z-10 mx-auto px-6">
            <Carousel
              infinite
              autoPlay
              autoPlaySpeed={3000}
              responsive={responsive}
              afterChange={handleSlideChange}
              itemClass="px-2"
            >
              {data.map((item, index) => (
                <div className="group" key={index}>
                  <div
                    className={`mx-3 flex cursor-pointer flex-col items-center justify-center gap-4 rounded-lg p-8 text-center ${
                      currentSlide % data.length === index
                        ? "bg-green/70 text-white backdrop-blur-sm dark:bg-sky-600/70 dark:text-black"
                        : "bg-sky-600/70 text-darkcustom backdrop-blur-sm group-hover:bg-darkcustom/70 group-hover:text-sky-600 group-hover:backdrop-blur-sm dark:bg-green/70 dark:text-white dark:hover:bg-white dark:group-hover:text-green"
                    }`}
                  >
                    <h1
                      className={`my-2 text-lg font-bold italic ${currentSlide % data.length === index ? "text-black dark:text-white" : "text-white group-hover:text-green dark:text-black dark:group-hover:text-sky-600"}`}
                    >
                      {item.title}
                    </h1>
                    <span
                      className={`text-7xl ${currentSlide % data.length === index ? "text-white dark:text-black" : "text-black group-hover:text-sky-600 dark:text-white dark:group-hover:text-green"}`}
                    >
                      {item.icon}
                    </span>
                    <h2
                      className={`my-2 text-sm ${currentSlide % data.length === index ? "text-black dark:text-white" : "text-white group-hover:text-green dark:text-black dark:group-hover:text-sky-600"}`}
                    >
                      {item.desc}
                    </h2>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="absolute -bottom-[100px] flex w-full cursor-pointer items-center justify-center md:-bottom-[130px] lg:-bottom-[460px] xl:-bottom-[490px]">
          <Link
            to="information"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-170}
          >
            <div className="flex h-[50px] w-[28px] items-start justify-center rounded-3xl border-4 border-white p-2 dark:border-black">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 1.5,
                }}
                className="h-2 w-3 rounded-full bg-white dark:bg-black"
              />
            </div>
          </Link>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="mt-20 lg:mt-96"
      >
        <path
          className={`transition-all duration-500 ${theme === "dark" ? "svg-dark-fill" : "svg-light-fill"}`}
          d="M0,128L60,133.3C120,139,240,149,360,165.3C480,181,600,203,720,197.3C840,192,960,160,1080,144C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Home;

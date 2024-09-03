// React
import React from "react";
// Image Component
import Kades from "../assets/image/kades.png";
import Ornamen1 from "../assets/image/ornamen1.png";
import Ornamen2 from "../assets/image/ornamen2.png";
// Framer Motion
import { motion } from "framer-motion";
// NextJS Themes
import { useTheme } from "next-themes";

const About = () => {
  const { theme } = useTheme();

  return (
    <section
      className="flex flex-col items-center justify-center bg-site bg-cover dark:bg-sitedark"
      id="about"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          className={`transition-all duration-500 ${theme === "dark" ? "svg-dark-fill" : "svg-light-fill"}`}
          fill-opacity="1"
          d="M0,224L40,213.3C80,203,160,181,240,165.3C320,149,400,139,480,154.7C560,171,640,213,720,224C800,235,880,213,960,213.3C1040,213,1120,235,1200,218.7C1280,203,1360,149,1400,122.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <div data-aos="fade-down">
        <div className="flex w-full items-center justify-center lg:mb-10">
          <div className="mx-2 flex items-center justify-around lg:mx-10">
            <motion.img
              className="h-auto w-20 object-contain lg:w-24"
              src={Ornamen1}
              alt="Hiasan Batik Mega Mendung"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.6 }}
            />
            <motion.h1
              className="mx-1 mt-4 text-center text-xl font-bold text-green shadow-black text-shadow-sm dark:text-sky-600 lg:mx-5 lg:mt-6 lg:text-3xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.8 }}
              style={{ paddingTop: "4px", paddingBottom: "4px" }}
            >
              Tentang Desa Karangwuni
            </motion.h1>
            <motion.img
              className="h-auto w-20 object-contain lg:w-24"
              src={Ornamen2}
              alt="Hiasan Batik Mega Mendung"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.6 }}
            />
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 px-4 lg:grid-cols-2 lg:gap-12 lg:px-16">
          <div className="flex w-full items-center justify-center">
            <div className="relative w-full rounded-lg p-2 lg:w-[550px]">
              <img
                className="h-auto w-full rounded-lg object-cover"
                src={Kades}
                alt="Ketua Desa Karangwuni"
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-4 text-justify text-white text-outline-black dark:text-black dark:text-outline-white lg:-ml-5">
            <h2 className="mb-2 text-left text-3xl font-bold tracking-wide lg:text-4xl">
              Kepala Desa Karangwuni
            </h2>
            <h3 className="mb-4 text-left text-3xl font-bold italic tracking-wide">
              Bpk. SUHEDI
            </h3>
            <p className="mb-2 text-left text-sm tracking-wide lg:text-xl">
              <strong>Visi:</strong>{" "}
              <span className="font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
                minus magnam necessitatibus? Impedit sed maxime perspiciatis
                excepturi earum praesentium! Iure unde deleniti, accusamus earum
                molestias impedit numquam nulla nemo esse!
              </span>
            </p>
            <p className="mb-2 text-left text-sm tracking-wide lg:text-xl">
              <strong>Misi:</strong>{" "}
              <span className="font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
                minus magnam necessitatibus? Impedit sed maxime perspiciatis
                excepturi earum praesentium! Iure unde deleniti, accusamus earum
                molestias impedit numquam nulla nemo esse!
              </span>
            </p>
            <ul className="ml-8 list-decimal text-sm font-semibold lg:text-xl">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          className={`transition-all duration-500 ${theme === "dark" ? "svg-dark2-fill" : "svg-light2-fill"}`}
          fill-opacity="1"
          d="M0,224L40,213.3C80,203,160,181,240,165.3C320,149,400,139,480,154.7C560,171,640,213,720,224C800,235,880,213,960,213.3C1040,213,1120,235,1200,218.7C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default About;

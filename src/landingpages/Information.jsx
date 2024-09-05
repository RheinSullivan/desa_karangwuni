// React
import React from "react";
// React Icons
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
// React Circular Progressbar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// Image Component
import Pedesaan from "../assets/image/pedesaan.jpg";
import Pesawahan from "../assets/image/sawah.jpg";

const categories = [
  { text: "Memancing Bersama", tilt: "-rotate-6" },
  { text: "Bersosialisai Bersama", tilt: "rotate-6" },
  { text: "Ngopi Bro", tilt: "rotate-0" },
  { text: "Pentas Seni", tilt: "rotate-0" },
  { text: "Gotong Royong", tilt: "rotate-6" },
  { text: "Menikmati Alam", tilt: "-rotate-6" },
];

const Information = () => {
  const Section = ({ title, text, children, image, reverse, desc }) => {
    return (
      <div
        className="mx-auto mb-32 mt-16 max-w-[1320px] px-3"
        id="information"
        data-aos="fade-down"
      >
        <div
          className={`items-center justify-between gap-8 lg:flex ${reverse ? "flex-row-reverse" : ""}`}
        >
          <div className="lg:w-1/2">
            <h6 className="mb-10 w-fit rounded-md bg-green px-5 py-2 font-bold text-white dark:bg-sky-600 dark:text-black lg:text-xl">
              {title}
            </h6>
            <h3 className="pb-8 text-2xl font-bold leading-tight lg:text-4xl">
              {text}
            </h3>
            <p>{desc}</p>
            <div className="mt-6">{children}</div>
          </div>
          <div className="flex justify-center lg:w-1/2 lg:justify-end">
            <img
              src={image}
              alt=""
              className={`h-[400px] w-full rounded-t-[300px] object-cover lg:ml-5 ${reverse ? "lg:rounded-none lg:rounded-r-[300px]" : "lg:rounded-none lg:rounded-l-[300px]"}`}
            />
          </div>
        </div>
      </div>
    );
  };

  const Card = ({ text, tilt }) => {
    return (
      <div
        className={`gap-2rounded-lg flex w-fit transform cursor-pointer items-center bg-darkcustom p-2 text-sm transition-transform hover:scale-105 dark:bg-white lg:p-4 ${tilt}`}
      >
        <IoCheckmarkDoneCircleSharp className="mr-2 text-xl text-sky-600 dark:text-green" />
        <span className="font-bold text-white dark:text-black">{text}</span>
      </div>
    );
  };

  const ProgressBar = ({ value, text }) => {
    return (
      <div className="flex flex-col items-center">
        <div className="w-28">
          <CircularProgressbar
            value={value}
            text={`${value}%`}
            styles={buildStyles({
              pathColor: "#FFA500",
              textColor: "#fffff",
              trailColor: "#9d9e9d",
              backgroundColor: "#f8f8f8",
            })}
          />
        </div>
        <p className="mt-2 font-bold">{text}</p>
      </div>
    );
  };

  return (
    <div className="my-16">
      <Section
        image={Pedesaan}
        text="Desa kami adalah desa yang paling menyenangkan, dengan perjalanan dan petualangan seru"
        title="Selamat datang di Desa Karangwuni"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eos quas quis, odio ratione distinctio suscipit dolore ipsa nesciunt, autem est molestiae sed nam aperiam quisquam nihil sit veniam ipsum."
      >
        <div className="mb-16 mt-10 grid justify-start gap-y-5 text-white dark:text-black lg:mx-16 lg:mb-0 lg:grid-cols-2 lg:justify-normal">
          {categories.map((category) => (
            <Card
              key={category.text}
              text={category.text}
              tilt={category.tilt}
            />
          ))}
        </div>
      </Section>

      <Section
        image={Pesawahan}
        text="Masih banyak kesempatan untuk menikmati keindahan alam dan wisata disini"
        title="Selamat menikmati keindahan alam desa kami"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque suscipit sapiente excepturi facilis labore sint? Corporis perspiciatis laboriosam a deserunt fuga voluptates. Atque voluptate, ea quis reiciendis dolore recusandae, voluptatem animi soluta natus id, dolorum dolor aperiam enim maxime perspiciatis sapiente et numquam laudantium beatae deserunt nostrum. Animi dicta impedit reiciendis tenetur maxime. Tempore ipsam aliquam consequatur velit expedita. Odit natus obcaecati nesciunt deserunt odio fugiat rerum, autem suscipit error sequi nobis quam id consectetur magnam quos aut. Obcaecati, maiores facilis corporis pariatur corrupti sunt. Aliquid, modi vitae rerum nulla quis aperiam iusto natus dolore provident eos ipsam molestiae voluptas!"
        reverse
      >
        <div className="my-12 flex items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center gap-4 rounded-lg bg-white p-8 shadow-md shadow-black dark:bg-darkcustom lg:flex-row lg:gap-16">
            <ProgressBar value={80} text="Kepuasan Wisatawan" />
            <ProgressBar value={50} text="Rate Wisatawan" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Information;

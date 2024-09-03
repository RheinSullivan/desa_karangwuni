// React
import React from "react";
// React Icons
import { MdHealthAndSafety, MdOfflineShare } from "react-icons/md";
import { GiCoffeeCup, GiKevlarVest } from "react-icons/gi";
// Image Components
import Taman from "../assets/image/taman2.jpg";

const Explore = () => {
  const dataExplore = [
    {
      text: "Tetap patuhi aturan",
      icons: <GiKevlarVest size={60} />,
      desc: "Selalu patuhi aturan yang diberikan komando, atau pada papan informasi.",
    },
    {
      text: "Jangan lupa ngopi",
      icons: <GiCoffeeCup size={60} />,
      desc: "Nikmati suasana dengan secangkir Kopi Gincu, yang sangat nikmat.",
    },
    {
      text: "Share sebanyaknya pengalaman wisata disini",
      icons: <MdOfflineShare size={60} />,
      desc: "Share sebanyak mungkin, ajak berlibur teman, saudara, keluarga, atau kerabat lainnya.",
    },
  ];

  return (
    <section id="explore" className="my-20">
      <div className="px-3">
        <div className="relative z-10 mx-5 -mb-24 max-w-[1320px] rounded-[10px] bg-green bg-sitepagedark bg-cover bg-no-repeat lg:mx-auto lg:mb-20">
          <div className="items-center justify-between px-4 py-8 lg:flex lg:p-16">
            <div className="mb-4 flex items-center gap-4 lg:mb-0">
              <MdHealthAndSafety size={50} className="text-white" />
              <div className="text-white">
                <p className="text-xs lg:text-sm">
                  Siap berpetualang dan menikmati alam
                </p>
                <h4 className="text-lg font-bold lg:text-4xl">
                  Kesempatan besar untuk berpetualang & berwisata
                </h4>
              </div>
            </div>
            <button className="rounded-lg bg-green px-3 py-2 text-sm font-bold text-black shadow dark:bg-sky-600 dark:text-white lg:px-8 lg:py-4 lg:text-lg">
              Jelajahi Lebih Jauh
            </button>
          </div>
        </div>
        <div className="lg:-mt-44 lg:flex">
          <img
            className="h-[350px] w-full rounded-t-lg object-cover lg:h-auto lg:w-1/2 lg:rounded-l-lg"
            src={Taman}
            alt="Gambar Sementara"
          />
          <div className="rounded-b-lg bg-gray-300 dark:bg-[#0b0c14] lg:w-1/2 lg:rounded-r-lg lg:p-20">
            <div className="mx-3 flex flex-col lg:mx-0">
              <div className="relative mt-10 flex w-fit items-center justify-center px-8 py-2 lg:mt-16">
                <span className="absolute z-10 h-full w-full rounded-md bg-green/30 dark:bg-sky-600/30" />
                <h6 className="relative font-semibold text-sky-600 dark:text-green">
                  Peringatan!!!
                </h6>
              </div>
              <h3 className="py-4 pb-8 text-3xl font-bold lg:text-5xl">
                Tetap patuhi keselamatan yang dianjurkan!
              </h3>
            </div>
            <div className="pt-8l mx-3 flex flex-col gap-4 pb-10 lg:mx-0 lg:pb-0">
              {dataExplore.map((data) => (
                <div key={data.text} className="flex items-center gap-4">
                  <span className="rounded-md bg-green p-4 text-white dark:bg-sky-600">
                    {data.icons}
                  </span>
                  <span className="lg:w-2/3">
                    <p className="pb-2 text-xl font-bold">{data.text}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 lg:text-base">
                      {data.desc}
                    </p>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;

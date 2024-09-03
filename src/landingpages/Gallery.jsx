// React
import React from "react";
// Image Components
import SetuSedong from "../assets/image/setu-sedong-senja.jpeg";
import JembatanCigantung from "../assets/image/jembatan-cigantung.jpeg";
import KopiGincu from "../assets/image/kopigincu.jpg";

// Data for cards
const dataCard = [
  {
    src: SetuSedong,
    alt: "Setu Sedong",
    title: "Setu Sedong Galeri",
    description: "Foto-foto wisatawan di wisata Setu Sedong",
  },
  {
    src: JembatanCigantung,
    alt: "Jembatan Cigantung",
    title: "Jembatan Cigantung Galeri",
    description: "Foto-foto wisatawan di wisata Jembatan Cigantung",
  },
  {
    src: KopiGincu,
    alt: "Kopi Gincu",
    title: "Kopi Gincu Galeri",
    description: "Foto-foto wisatawan di wisata Kopi Gincu",
  },
];

const Gallery = () => {
  return (
    <section className="section-gallery mx-4 my-20" id="gallery">
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-10 lg:flex-row">
          <div className="mb-10 flex flex-1 flex-col gap-y-1 lg:mb-0">
            <div>
              <h2 className="h2 font-bold leading-tight text-sky-600 dark:text-green">
                Galeri Kunjungan <br />
                Wisatawan
              </h2>
              <p className="mb-10 max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates commodi suscipit culpa pariatur dolor fuga fugiat
                officiis perferendis! Fugit, dolorem?
              </p>
              <button className="btn btn-sm font-semibold text-black hover:text-gray-300 dark:text-white dark:hover:text-darkcustom">
                Liat Semua Foto!
              </button>
            </div>
            <div className="group relative mt-[43px] overflow-hidden rounded-xl border-green/80 hover:border-[3px] dark:border-sky-600/80">
              <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-darkcustom/70" />
              <img
                className="aspect-[16/9] h-auto w-full object-cover transition-all duration-500 group-hover:scale-125"
                src={dataCard[0].src}
                alt={dataCard[0].alt}
              />
              <div className="ml absolute -bottom-full left-8 text-sm z-50 transition-all duration-500 group-hover:bottom-24">
                <span className="text-gradient italic">
                  {dataCard[0].title}
                </span>
              </div>
              <div className="ml absolute -bottom-full left-8 text-sm z-50 transition-all duration-700 group-hover:bottom-5">
                <span className="text-3xl text-white">
                  {dataCard[0].description}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-y-10">
            {dataCard.slice(1).map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border-green/80 hover:border-[3px] dark:border-sky-600/80"
              >
                <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-darkcustom/70" />
                <img
                  className="aspect-[16/9] h-auto w-full object-cover transition-all duration-500 group-hover:scale-125"
                  src={item.src}
                  alt={item.alt}
                />
                <div className="ml absolute -bottom-full left-8 text-sm z-50 transition-all duration-500 group-hover:bottom-24">
                  <span className="text-gradient italic">{item.title}</span>
                </div>
                <div className="ml absolute -bottom-full left-8 text-sm z-50 transition-all duration-700 group-hover:bottom-5">
                  <span className="text-3xl text-white">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

// React
import React, { useRef, useState } from "react";
// React Multi Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// Image Components
import SetuSedong from "../assets/videos/setu-sedong.mp4";
import Danau from "../assets/image/test-image.jpg";
import Mangga from "../assets/image/mangga.jpg";
import Hutan from "../assets/image/hutan.jpg";
import Sawah from "../assets/image/sawaah.jpg";
import Taman from "../assets/image/taman1.jpg";
import airTerjun from "../assets/image/air-terjun.jpg";
import Accordion from "../components/Accordion";
// React Icons
import { FaPlay } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiHeartsFill } from "react-icons/ri";
import { GiVideoCamera, GiSandsOfTime } from "react-icons/gi";
import {
  FcCompactCamera,
  FcVoicePresentation,
  FcMoneyTransfer,
} from "react-icons/fc";
import { MdKeyboardDoubleArrowRight, MdStarRate } from "react-icons/md";

const TravelExplore = () => {
  const dataTravels = [
    {
      id: "danau",
      image: Danau,
      name: "Danau Ngopi",
      title: "TERSEDIA",
      address: "Jln. Hashirama vs Madara, Blok Uchiha Desa Konoha",
      gallery: "20",
      price: "両 10.00",
      time: "1 Jam",
      available: "12",
    },
    {
      id: "mangga",
      image: Mangga,
      name: "Mangga Gincu",
      title: "TERSEDIA",
      address: "Jln. Minato & Kushina vs Kyuubi, Blok Uzumaki Desa Konoha",
      gallery: "5",
      price: "両 10.00",
      time: "1 Jam",
      available: "15",
    },
    {
      id: "hutan",
      image: Hutan,
      name: "Desa Tiktok",
      title: "BAHAYA",
      address: "Jln. Naruto Ekor 1 vs Sasuke Segel",
      gallery: "2",
      price: "両 10.00",
      time: "1 Jam",
      available: "0",
    },
    {
      id: "sawah",
      image: Sawah,
      name: "Kirigakure",
      title: "TERSEDIA",
      address: "Jln. Khisame vs Mighto Guy",
      gallery: "20",
      price: "両 10.00",
      time: "1 Jam",
      available: "30",
    },
    {
      id: "taman",
      image: Taman,
      name: "Taman Ngeteh",
      title: "TERSEDIA",
      address: "Jln. Hashirama vs Madara, Blok Uchiha Desa Konoha",
      gallery: "20",
      price: "両 10.00",
      time: "1 Jam",
      available: "2",
    },
    {
      id: "airterjun",
      image: airTerjun,
      name: "Air Terjun Tobirama",
      title: "No Uchiha",
      address: "Jln. Hashirama vs Madara, Blok Uchiha Desa Konoha",
      gallery: "20",
      price: "両 10.00",
      time: "1 Jam",
      available: "10",
    },
  ];

  const Travels = ({
    id,
    image,
    name,
    title,
    address,
    gallery,
    price,
    time,
    available,
  }) => {
    return (
      <div>
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            className="hoverImg travel-image rounded-t-lg"
            src={image}
            alt={name}
          />
          <div className="absolute left-4 top-4 flex justify-between">
            <p className="rounded-md bg-green/50 px-3 py-2 text-sm font-semibold text-white backdrop-blur-sm dark:bg-sky-600/50 dark:text-black">
              {title}
            </p>
            <button className="ml-32 rounded-md bg-gray-400/50 px-2 py-2 backdrop-blur-sm dark:bg-gray-800/50">
              <RiHeartsFill className="text-xl text-red" />
            </button>
          </div>
        </div>
        <div className="relative rounded-b-lg border border-gray-200 dark:border-gray-900">
          <div className="absolute -top-5 h-5 w-full rounded-t-[20px] bg-white dark:bg-darkcustom" />
          <div className="px-6">
            <div className="relative flex items-center justify-between gap-4">
              <span className="flex justify-center">
                {[...Array(5)].map((_, index) => (
                  <MdStarRate className="text-xl text-orange-500" key={index} />
                ))}
              </span>
              <span className="absolute -top-8 right-0 z-10 flex gap-2 rounded-lg bg-white px-4 py-1 shadow-sm dark:bg-darkcustom">
                <div className="relative">
                  <FcCompactCamera size={24} />
                  <button className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-green text-xs text-white dark:bg-sky-600 dark:text-black">
                    {gallery}
                  </button>
                </div>
                <GiVideoCamera size={24} />
              </span>
            </div>
            <h4 className="py-2 text-xl font-semibold hover:text-sky-600 dark:hover:text-green">
              {name}
            </h4>
            <span className="flex items-center gap-2">
              <FaMapLocationDot
                size={30}
                className="text-xl text-sky-600 dark:text-green"
              />
              <p className="ml-1 text-sm text-gray-400">{address}</p>
            </span>
            <span className="mr-3 flex py-4 text-gray-400">
              <FcMoneyTransfer className="text-xl" />
              <span className="ml-2">Mulai dari</span>
              <p className="ml-2 text-sky-600 dark:text-green">{price}</p>
            </span>
            <div className="flex justify-between border-t py-2">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <GiSandsOfTime className="text-sky-600 dark:text-green" />{" "}
                  {time}
                </span>
                <span className="flex items-center gap-1">
                  <FcVoicePresentation className="text-sky-600 dark:text-green" />
                  {available}
                </span>
              </div>
              <a href="#" className="flex items-center gap-2 text-sm">
                Jelajahi, bro! <MdKeyboardDoubleArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

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

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section data-aos="fade-down" id="travel">
      <div>
        <div className="mx-auto mb-10 flex max-w-[1320px] flex-col rounded-lg bg-gray-200 shadow-lg dark:bg-black lg:-mt-20 lg:flex-row">
          <div className="relative z-10 -mt-24 w-full cursor-pointer px-3 lg:mt-0 lg:w-1/2 lg:px-0">
            <video
              ref={videoRef}
              className="h-64 w-full rounded-md object-cover lg:h-full"
              src={SetuSedong}
            ></video>
            <div className="absolute inset-0 flex items-center justify-center">
              {!isPlaying && (
                <button
                  onClick={handlePlayPause}
                  className="animate-pulse rounded-full bg-green p-8 text-white dark:bg-sky-600 dark:text-black"
                >
                  <FaPlay size={30} />
                </button>
              )}
            </div>
          </div>
          <div className="w-full px-3 py-24 lg:w-1/2 lg:px-12">
            <div className="relative flex w-fit items-center justify-center px-5 py-2">
              <span className="absolute h-full w-full rounded-md bg-green/50 dark:bg-sky-600/50" />
              <h6 className="relative font-semibold text-black dark:text-white">
                Penjelasan Wisata
              </h6>
            </div>
            <h3 className="mb-5 py-4 pb-8 text-3xl font-bold lg:text-5xl">
              Detail asal usul wisata
            </h3>
            <Accordion />
          </div>
        </div>
      </div>
      <section className="container mx-auto py-12" data-aos="fade-down">
        <div className="flex flex-col items-center lg:items-start">
          <div className="relative mb-5 flex w-fit items-center justify-center px-5 py-2">
            <span className="absolute bottom-0 left-0 right-0 top-0 rounded-md bg-green px-6 py-3 shadow shadow-black dark:bg-sky-600"></span>
            <h6 className="relative z-10 text-2xl font-semibold text-white dark:text-black">
              Uchiha, Konohagakure
            </h6>
          </div>
          <h3 className="py-4 pb-20 text-center text-2xl font-bold text-black dark:text-white lg:w-4/5 lg:text-start lg:text-3xl">
            Selamat datang di blok Uchiha, desa Konohagakure. Berhati-hatilah
            dengan Sharingan!
          </h3>
        </div>
        <div>
          <Carousel
            infinite
            responsive={responsives}
            autoPlay={true}
            className="z-10"
            itemClass="px-2 pb-4"
          >
            {dataTravels.map((travel, index) => (
              <div id={travel.id}>
                <Travels
                  key={index}
                  id={travel.id}
                  image={travel.image}
                  name={travel.name}
                  title={travel.title}
                  address={travel.address}
                  gallery={travel.gallery}
                  price={travel.price}
                  time={travel.time}
                  available={travel.available}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </section>
  );
};

export default TravelExplore;

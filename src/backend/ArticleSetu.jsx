import React, { useState, useEffect } from "react";
import Navbar from "../landingpages/Navbar";
// React Router
import { Link, useNavigate } from "react-router-dom";
// React Scroll
import { Link as ScrollLink } from "react-scroll";
import { AiFillLike } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import Logo from "../assets/logo-desa-karangwuni.png";

const ArticleSetu = () => {
  const initialLikes = 0;
  const initialViews = 0;
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [views, setViews] = useState(initialViews);
  const [wordCount, setWordCount] = useState(0);
  const [imageCount, setImageCount] = useState(0);

  useEffect(() => {
    const textContent = document.querySelector("article")?.innerText || "";
    const imageElements = document.querySelectorAll("article img");
    const calculatedWordCount = textContent.split(/\s+/).length;
    const calculatedImageCount = imageElements.length;

    setWordCount(calculatedWordCount);
    setImageCount(calculatedImageCount);

    setViews((prevViews) => {
      const newViews = prevViews + 1;
      localStorage.setItem("views", newViews);
      return newViews;
    });
  }, []);

  const handleLike = () => {
    if (isLiked) {
      setLikes((prevLikes) => prevLikes - 1);
    } else {
      setLikes((prevLikes) => prevLikes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <section className="flex flex-col items-center justify-center lg:min-w-[64rem]">
      <div className="container mx-auto">
        <Navbar />
        <article>
          <div className="mx-2 mt-5 max-w-prose">
            <ol className="text-sm text-white">
              <li className="inline">
                <Link to="travel">
                  Travel
                  <span className="px-2 text-sky-600">/</span>
                  <span className="text-sky-600">Setu Sedong</span>
                </Link>
              </li>
            </ol>
            <h1 className="mt-0 text-4xl font-extrabold text-white">
              Wisata 1 : Setu Sedong
            </h1>
            <div className="mb-6 mt-1 text-lg text-sky-600">
              <div className="flex flex-row flex-wrap items-center">
                <span>{wordCount} Kata</span>
                <span className="px-3">·</span>
                <span>{imageCount} Gambar</span>
                <span className="px-3">·</span>
                <span>{likes}</span>
                <span
                  className={`inline-block cursor-pointer align-text-bottom ${isLiked ? "text-red" : "text-white"}`}
                  onClick={handleLike}
                >
                  <AiFillLike />
                </span>
                <span className="px-3">·</span>
                <span>{views}</span>
                <span className="inline-block align-text-bottom">
                  <FaEye />
                </span>
                <span className="px-3">·</span>
                <span className="grid grid-cols-2">
                  <button
                    className="rounded-md border border-white px-2 py-[3px] text-sm text-white hover:border-red hover:text-red"
                    onClick={handleLike}
                  >
                    <span className="inline-block align-text-bottom">
                      <span
                        className={`relative block pr-2 ${isLiked ? "text-red" : "text-white"}`}
                      >
                        <AiFillLike />
                      </span>
                    </span>
                    <span>Like</span>
                  </button>
                </span>
              </div>
              <div className="flex-warp flex flex-row items-center">
                <div className="mr-2 mt-3">
                  <Link to="travel" className="flex">
                    <button className="rounded-md border border-white px-2 py-[2px] text-sm text-white hover:border-red hover:text-red">
                      Wisata
                    </button>
                  </Link>
                </div>
              </div>
              <div className="my-5 flex">
                <img
                  src={Logo}
                  alt="Logo Desa Karangwuni"
                  width={"112px"}
                  title="Logo Desa Karangwuni"
                  className="!mb-0 !mt-0 w-28 cursor-pointer rounded-full ltr:mr-4 rtl:ml-4"
                />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ArticleSetu;

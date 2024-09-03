// React
import React from "react";
// React Icons
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="fixed z-50 w-full bg-white py-2 text-black dark:bg-darkcustom">
      <div
        className="container mx-auto flex flex-col items-center justify-between space-y-2 text-base md:flex-row md:space-y-0 lg:text-base"
        data-aos="fade-down"
        data-aos-duration="3000"
        data-aos-delay="300"
      >
        <div className="mx-5 flex flex-col items-center text-base text-black dark:text-white md:flex-row md:space-x-5 lg:ml-10">
          <span className="mr-3 flex items-center space-x-1">
            <span className="mr-1">
              <BsTelephoneFill />
            </span>
            <span className="mr-5">+6289666145666</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="mr-1">
              <MdEmail />
            </span>
            <span><a href="mailto:#?subject=Subject%20of%20the%20email&body=Fill%20the%20message%20here">desa.karangwuni@contoh.com</a></span>
          </span>
        </div>
        <div className="flex items-center space-x-2 text-base text-black dark:text-white lg:mr-3">
          <span className="mr-5">Hubungi Kami:</span>
          <a className="px-2 hover:text-sky-600 dark:hover:text-green" href="#">
            <FaFacebook />
          </a>
          <a className="px-2 hover:text-sky-600 dark:hover:text-green" href="#">
            <AiFillInstagram />
          </a>
          <a className="px-2 hover:text-sky-600 dark:hover:text-green" href="#">
            <FaTiktok />
          </a>
          <a className="px-2 hover:text-sky-600 dark:hover:text-green" href="#">
            <FaXTwitter />
          </a>
          <a className="px-2 hover:text-sky-600 dark:hover:text-green" href="#">
            <FaYoutube />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-white pb-12 pt-24 dark:bg-darkcustom">
      <div className="container mx-12 lg:mx-0">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full px-4 font-medium text-gray-600 dark:text-gray-400 md:w-1/3">
            <h2 className="mb-5 text-2xl font-bold uppercase text-black dark:text-white lg:text-4xl">
              Desa Karangwuni
            </h2>
            <h3 className="mb-2 text-lg font-bold text-green dark:text-sky-600 lg:text-2xl">
              Hubungi Kami
            </h3>
            <div className="text-sm lg:text-base">
              <a href="mailto:#?subject=Subject%20of%20the%20email&body=Fill%20the%20message%20here">
                desa.karangwuni@contoh.com
              </a>
              <p>+6289666145666</p>
              <a href="https://maps.app.goo.gl/51oQX9uMwvnpnzEk8">
                <p>4HGP+V4Q, Karangwuni, Kec. Sedong</p>
                <p>Kab. Cirebon, Jawa Barat 45189</p>
              </a>
            </div>
          </div>
          <div className="mb-10 mt-[60px] w-full pl-4 md:w-1/3 lg:pl-52">
            <h3 className="mb-3 font-semibold text-black dark:text-white lg:text-2xl">
              Support By :
            </h3>
            <ul className="text-gray-600 dark:text-gray-400">
              <li>
                <a
                  href="https://rheinsullivan.my.id/"
                  className="inline-block text-sm italic hover:text-red lg:text-base"
                >
                  Moh. Rifki Ramadhan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary inline-block text-sm lg:text-base"
                >
                  HM. Djajuli, MM
                </a>
              </li>
              <li>
                <a
                  href="https://kelompok37karangwuni.vercel.app/"
                  className="hover:text-primary inline-block text-sm lg:text-base"
                >
                  Kelompok KKM : 37
                </a>
              </li>
              <li>
                <a
                  href="https://umc.ac.id/"
                  className="hover:text-primary inline-block text-sm lg:text-base"
                >
                  UMC 2024
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-10 mt-14 w-full pl-3 md:w-1/3 lg:pl-72">
            <h3 className="mb-3 font-semibold text-black dark:text-white lg:text-2xl">
              Tautan :
            </h3>
            <ul className="text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  smooth={true}
                  spy={true}
                  offset={-150}
                  to="home"
                  className="hover:text-primary inline-block text-sm lg:text-base"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  smooth={true}
                  spy={true}
                  offset={-60}
                  to="information"
                  className="hover:text-primary inline-block text-sm lg:text-base"
                >
                  Informasi
                </Link>
              </li>
              <li>
                <Link
                  smooth={true}
                  spy={true}
                  offset={-60}
                  to="about"
                  className="hover:text-primary inline-block text-sm lg:text-base"
                >
                  Profil
                </Link>
              </li>
              <li>
                <Link
                  smooth={true}
                  spy={true}
                  offset={-60}
                  to="travel"
                  className="hover:text-primary inline-block text-sm lg:text-base"
                >
                  Wisata
                </Link>
              </li>
              <li>
                <Link
                  smooth={true}
                  spy={true}
                  offset={-60}
                  to="culture"
                  className="hover:text-primary inline-block text-sm lg:text-base"
                >
                  Budaya
                </Link>
              </li>
              <li>
                <Link
                  smooth={true}
                  spy={true}
                  offset={-60}
                  to="gallery"
                  className="hover:text-primary inline-block text-sm lg:text-base"
                >
                  Galeri
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full border-t border-gray-600 pt-5">
          <div className="mb-5 flex items-center justify-center lg:items-end lg:justify-end">
            <a
              href="#"
              target="_blank"
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full text-lg text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              <FaFacebookF /> <title>Facebook</title>
            </a>

            <a
              href="#"
              target="_blank"
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full text-lg text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              <BiLogoInstagramAlt />
              <title>Instagram</title>
            </a>

            <a
              href="#"
              target="_blank"
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full text-lg text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              <FaTiktok />
              <title>TikTok</title>
            </a>
            <a
              href="#"
              target="_blank"
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full text-lg text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              <FaXTwitter />
              <title>Twitter</title>
            </a>
            <a
              href="#"
              target="_blank"
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full text-lg text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              <title>LinkedIn</title>
              <FaYoutube />
            </a>
          </div>
          <p className="text-center text-sm font-medium text-gray-600 dark:text-gray-400">
            Copyright &#169; 2024{" "}
            <a
              href="https://rheinsullivan.my.id/"
              target="_blank"
              className="text-primary font-bold"
            >
              <span className="font-bold italic text-red">Rhein Sullivan </span>
              All right recevied.
            </a>{" "}
            Mahasiswa
            <a
              href="https://umc.ac.id/"
              target="_blank"
              className="font-bold text-red"
            >
              {" "}
              Universitas Muhammadiyah Cirebon
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

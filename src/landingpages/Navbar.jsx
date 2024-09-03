import { useState, useEffect, useRef } from "react";
// Image
import Logo from "../assets/logo-desa-karangwuni.png";
// React Scroll
import { Link } from "react-scroll";
// React Icons
import { GiTreasureMap } from "react-icons/gi";
import { MdClose, MdMenuOpen } from "react-icons/md";
// Toggle Dark Mode
import ToggleSwitch from "../components/ToggleSwitch";
// NextJS Themes
import { useTheme } from "next-themes";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null); // Reference to dropdown
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`fixed top-24 z-50 flex h-20 w-full items-center justify-between bg-sky-600 shadow-lg shadow-black/50 md:top-16 lg:top-10 ${
        isDarkMode ? "dark:bg-green" : ""
      } lg:top-10`}
    >
      <div
        className="container mx-auto flex w-full items-center justify-between lg:px-3"
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="3000"
        aos-delay="300"
      >
        <div className="mx-5 flex items-center gap-x-2">
          <a
            href="https://rheinsullivan.my.id/"
            className="flex items-center gap-x-2"
          >
            <img
              className="w-[65px] lg:w-16"
              src={Logo}
              alt="Logo Desa Karangwuni"
              title="Website by : Rhein Sullivan"
            />
            <div className="-mr-7 ml-1">
              <h1
                className={`hidden text-xl font-bold uppercase ${
                  isDarkMode ? "text-black" : "text-white"
                } md:block`}
              >
                Desa Karangwuni
              </h1>
              <p
                className={`hidden text-sm tracking-[1px] ${
                  isDarkMode ? "text-white" : "text-black"
                } md:block`}
              >
                Kec. Sedong, Kab. Cirebon
              </p>
              {dropdown && (
                <div
                  ref={dropdownRef} // Attach ref here
                  className={`absolute top-16 ml-32 w-full rounded-md ${
                    isDarkMode ? "bg-green" : "bg-sky-600"
                  } transition-all md:top-20 md:ml-80 lg:hidden`}
                >
                  <div className="mb-5 flex w-full flex-col items-start gap-4">
                    <ul className="flex w-full cursor-pointer flex-col justify-center">
                      <Link
                        activeClass={isDarkMode ? "dark-active" : "active"}
                        smooth={true}
                        spy={true}
                        offset={-60}
                        className={`flex h-10 items-center border-b ${
                          isDarkMode ? "border-green" : "border-sky-600"
                        } px-5 text-lg font-bold leading-normal ${
                          isDarkMode ? "text-gray-800" : "text-gray-300"
                        }`}
                        to="home"
                      >
                        Beranda
                      </Link>
                      <Link
                        activeClass={isDarkMode ? "dark-active" : "active"}
                        smooth={true}
                        spy={true}
                        offset={-60}
                        className={`flex h-10 items-center border-b ${
                          isDarkMode ? "border-green" : "border-sky-600"
                        } px-5 text-lg font-bold leading-normal ${
                          isDarkMode ? "text-gray-800" : "text-gray-300"
                        }`}
                        to="information"
                      >
                        Informasi
                      </Link>
                      <Link
                        activeClass={isDarkMode ? "dark-active" : "active"}
                        smooth={true}
                        spy={true}
                        offset={-60}
                        className={`flex h-10 items-center border-b ${
                          isDarkMode ? "border-green" : "border-sky-600"
                        } px-5 text-lg font-bold leading-normal ${
                          isDarkMode ? "text-gray-800" : "text-gray-300"
                        }`}
                        to="about"
                      >
                        Profil
                      </Link>
                      <Link
                        activeClass={isDarkMode ? "dark-active" : "active"}
                        smooth={true}
                        spy={true}
                        offset={-60}
                        className={`flex h-10 items-center border-b ${
                          isDarkMode ? "border-green" : "border-sky-600"
                        } px-5 text-lg font-bold leading-normal ${
                          isDarkMode ? "text-gray-800" : "text-gray-300"
                        }`}
                        to="travel"
                      >
                        Wisata
                      </Link>
                      <Link
                        activeClass={isDarkMode ? "dark-active" : "active"}
                        smooth={true}
                        spy={true}
                        offset={-60}
                        className={`flex h-10 items-center border-b ${
                          isDarkMode ? "border-green" : "border-sky-600"
                        } px-5 text-lg font-bold leading-normal ${
                          isDarkMode ? "text-gray-800" : "text-gray-300"
                        }`}
                        to="culture"
                      >
                        Budaya
                      </Link>
                      <Link
                        activeClass={isDarkMode ? "dark-active" : "active"}
                        smooth={true}
                        spy={true}
                        offset={-60}
                        className={`flex h-10 items-center border-b ${
                          isDarkMode ? "border-green" : "border-sky-600"
                        } px-5 text-lg font-bold leading-normal ${
                          isDarkMode ? "text-gray-800" : "text-gray-300"
                        }`}
                        to="gallery"
                      >
                        Galeri
                      </Link>
                      <Link
                        activeClass={isDarkMode ? "dark-active" : "active"}
                        smooth={true}
                        spy={true}
                        offset={-60}
                        className={`flex h-10 items-center border-b ${
                          isDarkMode ? "border-green" : "border-sky-600"
                        } px-5 text-lg font-bold leading-normal ${
                          isDarkMode ? "text-gray-800" : "text-gray-300"
                        }`}
                        to="contact"
                      >
                        Kontak
                      </Link>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </a>
        </div>
        <div className="mx-5 flex md:mx-1 lg:hidden">
          <div className="flex lg:hidden">
            <button
              className={`mr-5 flex h-10 w-10 items-center justify-center rounded-full ${
                isDarkMode
                  ? "text-white hover:text-black"
                  : "text-black hover:text-white"
              }`}
            >
              <ToggleSwitch size={30} />
            </button>
            <Link
              to="maps"
              activeClass={isDarkMode ? "dark-active" : "active"}
              smooth={true}
              spy={true}
              offset={-150}
              className={`leading-normal ${
                isDarkMode ? "text-gray-800" : "text-gray-300"
              }`}
            >
              <button
                className={`mr-2 flex h-10 w-10 items-center justify-center rounded-full ${
                  isDarkMode
                    ? "text-black hover:text-white"
                    : "text-white hover:text-black"
                }`}
              >
                <GiTreasureMap size={30} />
              </button>
            </Link>
          </div>
          {dropdown ? (
            <div
              onClick={showDropdown}
              className={`cursor-pointer text-4xl ${
                isDarkMode ? "text-black" : "text-white"
              }`}
            >
              <MdClose />
            </div>
          ) : (
            <div
              onClick={showDropdown}
              className={`cursor-pointer text-4xl ${
                isDarkMode ? "text-black" : "text-white"
              }`}
            >
              <MdMenuOpen />
            </div>
          )}
        </div>
        <ul className="hidden cursor-pointer items-center gap-x-4 lg:flex xl:gap-8">
          <Link
            activeClass={isDarkMode ? "dark-active" : "active"}
            smooth={true}
            spy={true}
            offset={-150}
            className={`leading-normal ${
              isDarkMode ? "text-gray-800" : "text-gray-300"
            }`}
            to="home"
          >
            Beranda
          </Link>
          <Link
            activeClass={isDarkMode ? "dark-active" : "active"}
            smooth={true}
            spy={true}
            offset={-150}
            className={`leading-normal ${
              isDarkMode ? "text-gray-800" : "text-gray-300"
            }`}
            to="information"
          >
            Informasi
          </Link>
          <Link
            activeClass={isDarkMode ? "dark-active" : "active"}
            smooth={true}
            spy={true}
            offset={190}
            className={`leading-normal ${
              isDarkMode ? "text-gray-800" : "text-gray-300"
            }`}
            to="about"
          >
            Profil
          </Link>
          <Link
            activeClass={isDarkMode ? "dark-active" : "active"}
            smooth={true}
            spy={true}
            offset={-60}
            className={`leading-normal ${
              isDarkMode ? "text-gray-800" : "text-gray-300"
            }`}
            to="travel"
          >
            Wisata
          </Link>
          <Link
            activeClass={isDarkMode ? "dark-active" : "active"}
            smooth={true}
            spy={true}
            offset={-60}
            className={`leading-normal ${
              isDarkMode ? "text-gray-800" : "text-gray-300"
            }`}
            to="culture"
          >
            Budaya
          </Link>
          <Link
            activeClass={isDarkMode ? "dark-active" : "active"}
            smooth={true}
            spy={true}
            offset={-150}
            className={`leading-normal ${
              isDarkMode ? "text-gray-800" : "text-gray-300"
            }`}
            to="gallery"
          >
            Galeri
          </Link>
          <Link
            activeClass={isDarkMode ? "dark-active" : "active"}
            smooth={true}
            spy={true}
            offset={0}
            className={`leading-normal ${
              isDarkMode ? "text-gray-800" : "text-gray-300"
            }`}
            to="contact"
          >
            Kontak
          </Link>
        </ul>
        <div className="hidden gap-4 lg:flex">
          <button
            className={`mr-5 flex h-10 w-10 items-center justify-center rounded-full ${
              isDarkMode
                ? "text-white hover:text-black"
                : "text-black hover:text-white"
            }`}
          >
            <ToggleSwitch size={32} />
          </button>
          <Link
            to="maps"
            activeClass={isDarkMode ? "dark-active" : "active"}
            smooth={true}
            spy={true}
            offset={-150}
            className={`leading-normal ${
              isDarkMode ? "text-gray-800" : "text-gray-300"
            }`}
          >
            <button
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                isDarkMode
                  ? "text-black hover:text-white"
                  : "text-white hover:text-black"
              }`}
            >
              <GiTreasureMap size={32} />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// React
import { useEffect, useState } from "react";
// Loading Spinner
import { ThreeCircles } from "react-loader-spinner";
// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Landing PAge
import LandingPage from "./components/LandingPage";
// AOS CSS
import AOS from "aos";
import "aos/dist/aos.css";
// React Tyoe Animation
import { TypeAnimation } from "react-type-animation";

function App() {
  // Loading
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 7000);
    // AOS
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    // Router
    <Router>
      {loading ? (
        <div className="flex h-[100vh] flex-col items-center justify-center bg-white dark:bg-darkcustom">
          <ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="#63ab45"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
          <h2 className="mt-16 text-lg font-bold text-black dark:text-white">
            <TypeAnimation
              sequence={["Wilujeng Sumping...", 1000, "Selamat Datang...", 1000]}
              speed={1}
              wrapper="span"
              repeat={Infinity}
            />
          </h2>
        </div>
      ) : (
        <div className="z-10 overflow-hidden">
          <Routes>
            {/* Path Landing Page */}
            <Route path="/" exact element={<LandingPage />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;

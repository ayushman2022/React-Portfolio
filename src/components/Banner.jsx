import bannerImage from "../assets/mainimage.png";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Java Developer", "Software Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex items-center text-black"
    >
      <div className="w-full flex justify-center">
        <div className="w-2/3 ms-10">
          <h3 className="text-2xl font-semibold">Hi, I'm</h3>
          <h1 className="mt-2 text-5xl font-bold">AYUSHMAN CHOUBEY</h1>
          <h2 className="text-3xl">
            And a <span className="font-bold" ref={el}></span>
          </h2>
          <p className="mt-2 text-1xl">
            With expertise in web development, Java development, and database
            management. Experienced in frontend technologies such as React,
            MySQL, and Java. Strong problem-solving abilities and a desire to
            innovate are the driving forces behind consistent project success
            and effective solutions.
          </p>
          <div className="icons space-x-5 flex mt-1">
            <a
              href="https://www.linkedin.com/in/ayushmanchoubey/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-orange-400 animate-pulse w-12 h-12 rounded-full flex justify-center items-center bg-gray-900"
            >
              <i class="fa-brands text-2xl text-white fa-linkedin-in"></i>
            </a>

            <a
              href="https://github.com/ayushman2022"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-orange-400 animate-pulse w-12 h-12 rounded-full flex justify-center items-center bg-gray-900"
            >
              <i class="fa-brands text-2xl text-white fa-github"></i>
            </a>
          </div>

          <br />
          <a
            className="px-3 py-2 bg-orange-500 rounded-full shadow-lg font-semibold text-1xl"
            href="mailto:choubey.ayushman13@gmail.com"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="w-full flex mt-4 justify-center">
        <img className="rounded-full shadow w-fit" src={bannerImage} />
      </div>
    </div>
  );
};

export default Banner;

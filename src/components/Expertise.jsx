import React from "react";
import bannerBg from "../assets/banner_wallpaper.svg";

const Expertise = () => {
  return (
    <>
      <div id="expertise" className="py-14">
        <h1 className="text-center p-6 mb-12 text-4xl bg-slate-300 font-bold">
          My Expertise
        </h1>

        <div style={{
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: "cover",
        }}
        className=" items-center flex py-12">
          {/* 1st div left part*/}
          <div className="flex justify-center">
            <div className="w-2/3 text-center space-y-4">
              <h1 className="text-3xl font-semibold">I Have Worked On These Technologies</h1>
              <p>
              "Take a closer look at the Skills And Projects and evaluate its features, functionality, and design to make a well-informed decision"
              </p>
              {/* <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg font-semibold text-1xl">
                Hire Me
              </button> */}
            </div>
          </div>

          {/* 2nd div right part */}
          <div className="flex justify-end">
            <div className="flex justify-center w-2/3 h-fit space-x-3 flex-wrap">
              <p className="bg-slate-300 w-fit mt-2 px-3 py-2 rounded-full">
                Core Java
              </p>
              <p className="bg-slate-300 w-fit mt-2 px-3 py-2 rounded-full">
                Data Structure
              </p>
              <p className="bg-slate-300 w-fit mt-2 px-3 py-2 rounded-full">SQL</p>
              <p className="bg-slate-300 w-fit mt-2 px-3 py-2 rounded-full">
                ReactJs
              </p>
              <p className="bg-slate-300 w-fit mt-2 px-3 py-2 rounded-full">Html</p>
              <p className="bg-slate-300 w-fit mt-2 px-3 py-2 rounded-full">
                TailwindCss
              </p>
              <p className="bg-slate-300 w-fit mt-2 px-3 py-2 rounded-full">
                Git & Github
              </p>
              <p className="bg-slate-300 w-fit mt-2 px-3 py-2 rounded-full">
                Java Swing
              </p>
              <p className="bg-slate-300 w-fit mt-2 px-3 py-2 rounded-full">
                HTML
              </p>
              <p className="bg-slate-300 w-fit mt-2 px-3 py-2 rounded-full">
                Cascading Style System(CSS)
              </p>
              <p className="bg-slate-300 w-fit mt-2 px-3 py-2 rounded-full">
                APIs
              </p>
              <p className="bg-slate-300 w-fit mt-2 px-3 py-2 rounded-full">
                Software Development LifeCycle(SDLC)
              </p>
              <p className="bg-slate-300 w-fit mt-2 px-3 py-2 rounded-full">Agile</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;

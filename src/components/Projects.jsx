import React, { useState } from "react";

const Projects = () => {
  const [project, setProject] = useState({
    title1: "Swigato",
    desc1:
      "A food ordering website built with React.js provides an interactive and user-friendly interface for users to browse, select, and order food from various restaurants.",

    title2: "Bank Management",
    desc2:
      "The Bank Management Application is a comprehensive software solution designed to streamline and manage the operations of a bank. Developed using Java and Swing.",

    title3: "Email-Sender",
    desc3:
      "An Email Sender Application built using Spring Boot is a web-based or standalone application that enables users to send emails programmatically through a simple interface.",

    title4: "MDT App",
    desc4:
      "The Mobile Diagnostic Tool (MDT) App is designed to provide comprehensive information about your mobile device in one place.",

    title5: "Calculator",
    desc5:
      "This is basically a mini-project to refresh my concepts.It helps you to do arithmetic operations.",

    title6: "Upcoming",
    desc6:
      "",
  });
  return (
    <>
      <div id="projects" className="Main-Container ">
        <h1 className="text-center p-6 mb-14 text-4xl bg-slate-300 font-bold">
          Projects
        </h1>

        <div className="project-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-10">
          <div className="project1 hover:bg-slate-200 transition space-y-5 shadow-lg rounded-xl p-5 text-center bg-slate-100">
            <i class="fa-solid text-5xl fa-utensils"></i>
            <h1 className="text-2xl font-semibold">{project.title1}</h1>
            <p>{project.desc1}</p>
            <a
              href="https://swigato-food-ordering-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 py-2 rounded-full mt-4 bg-orange-500 text-1xl font-semibold">
                View
              </button>
            </a>
          </div>

          <div className="project2 hover:bg-slate-200 transition space-y-5 shadow-lg rounded-xl p-5 text-center bg-slate-100">
            <i class="fa-solid text-5xl fa-building-columns"></i>
            <h1 className="text-2xl font-semibold">{project.title2}</h1>
            <p>{project.desc2}</p>
            <a
              href="https://github.com/ayushman2022/Bank_Management_System"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 py-2 rounded-full mt-4 bg-orange-500 text-1xl font-semibold">
                View
              </button>
            </a>
          </div>

          <div className="project3 hover:bg-slate-200 transition space-y-5 shadow-lg rounded-xl p-5 text-center bg-slate-100">
            <i class="fa-solid text-5xl fa-envelope-open-text"></i>
            <h1 className="text-2xl font-semibold">{project.title3}</h1>
            <p>{project.desc3}</p>
            <a
              href="https://github.com/ayushman2022/Email_Sender"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 py-2 rounded-full mt-4 bg-orange-500 text-1xl font-semibold">
                View
              </button>
            </a>
          </div>

          <div className="project4 hover:bg-slate-200 transition space-y-5 shadow-lg rounded-xl p-5 text-center bg-slate-100">
            <i class="fa-solid text-5xl fa-mobile-screen-button"></i>
            <h1 className="text-2xl font-semibold">{project.title4}</h1>
            <p>{project.desc4}</p>
            <a
              href="https://github.com/ayushman2022/MDT_App"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 py-2 rounded-full mt-4 bg-orange-500 text-1xl font-semibold">
                View
              </button>
            </a>
          </div>
          <div className="project5 hover:bg-slate-200 transition space-y-5 shadow-lg rounded-xl p-5 text-center bg-slate-100">
          <i class="fa-solid text-5xl fa-calculator"></i>
            <h1 className="text-2xl font-semibold">{project.title5}</h1>
            <p>{project.desc5}</p>
            <a
              href="https://github.com/ayushman2022/Calculator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 py-2 rounded-full mt-4 bg-orange-500 text-1xl font-semibold">
                View
              </button>
            </a>
          </div>

          <div className="project6 hover:bg-slate-200 transition space-y-5 shadow-lg rounded-xl p-5 text-center bg-slate-100">
            <i class="fa-solid text-5xl fa-utensils"></i>
            <h1 className="text-2xl font-semibold">{project.title6}</h1>
            <p>{project.desc6}</p>
            <a
              href="https://swigato-food-ordering-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 py-2 rounded-full mt-4 bg-orange-500 text-1xl font-semibold">
                View
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

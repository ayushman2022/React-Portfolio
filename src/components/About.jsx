import {useState} from "react";
import Image from "../assets/ayushmann.png";

const About = () => {
  const[data, setData] = useState({
    image:Image,
    title:"Software and Java Developer",
    desc1: `A Java and Software Developer with extensive experience in object-oriented programming(OOPs) and software development life
                cycle (SDLC) processes. I have hands-on experience with Java
                development. Alongside Java. Throughout my academic career and
                personal projects, I've created web applications and front-end
                projects that demonstrate my ability to design, develop, and
                deploy software solutions.`,
    desc2: `I've built dynamic web pages with Reactjs, HTML, CSS, and JavaScript, integrated databases like
                MySQL, and implemented Java-based APIs with JDBC for database
                connectivity. I am available for any kind of job opportunity that suits my skills and interests.`,

  })
  return (
    <>
      <div id="about" className="Main-Container py-12 ">
        <h1 className="text-center p-6 mb-14 text-4xl bg-slate-300 font-bold">
          About Me
        </h1>

        {/* Image */}
        <div className="flex items-center">
          <div className="w-full flex justify-center">
            
            <img
              className="rounded-3xl shadow w-fit"
              src={data.image}
              alt="Ayushman"
            />
          </div>

          {/* Description */}
          <div className="w-full flex justify-center">
            <div className="space-y-5 w-2/3">
              <h1 className="text-4xl font-semibold">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
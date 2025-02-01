import React from "react";
import { Slide, Fade } from "react-awesome-reveal";
import { FaLaptopCode, FaPaintBrush, FaBatteryFull, FaCode, FaProjectDiagram, FaHeart } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-900 text-yellow-200 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <Slide direction="down">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
            <span className="text-yellow-400">About </span>
            <span className="text-gray-300">Me</span>
          </h2>
        </Slide>

        {/* Introduction Section */}
        <Slide direction="up">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-justify mb-10">
            Hi, I'm <span className="text-yellow-400 font-semibold">Ismail Hossen</span>, a passionate React-based frontend web developer. I thrive on crafting clean, functional, and user-friendly web experiences. My journey in web development has been a blend of creativity and technical problem-solving, and I continually strive to enhance my skills while delivering impactful designs and applications.
          </p>
        </Slide>

        {/* Focus Areas Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {/* Web Development */}
          <Fade direction="left">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <FaLaptopCode className="text-yellow-500 text-5xl mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-yellow-300 mb-3 text-center">
                Web Development
              </h3>
              <p className="text-gray-300 text-base text-justify">
                Building responsive and interactive websites is my forte. Leveraging technologies like React, I aim to create seamless user experiences that are both visually appealing and functionally robust.
              </p>
            </div>
          </Fade>

          {/* Design */}
          <Fade duration={1000} delay={200}>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <FaPaintBrush className="text-yellow-500 text-5xl mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-yellow-300 mb-3 text-center">
                Design
              </h3>
              <p className="text-gray-300 text-base text-justify">
                Design is where my creativity shines. I focus on crafting modern, clean, and intuitive interfaces that not only look great but also enhance the user journey.
              </p>
            </div>
          </Fade>

          {/* Recharge */}
          <Fade direction="right">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <FaBatteryFull className="text-yellow-500 text-5xl mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-yellow-300 mb-3 text-center">
                Recharge
              </h3>
              <p className="text-gray-300 text-base text-justify">
                Creativity thrives when we recharge. Whether it's exploring new ideas or taking a break, I believe in maintaining a balance to bring my best to every project.
              </p>
            </div>
          </Fade>
        </div>

        {/* Additional Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Skills */}
          <Fade direction="left">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <FaCode className="text-yellow-500 text-5xl mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-yellow-300 mb-3 text-center">
                Skills
              </h3>
              <p className="text-gray-300 text-base text-justify">
                Proficient in React.js, JavaScript, Tailwind CSS, and modern web development practices. Always eager to learn new tools and frameworks to stay ahead.
              </p>
            </div>
          </Fade>

          {/* Projects */}
          <Fade duration={1000} delay={200}>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <FaProjectDiagram className="text-yellow-500 text-5xl mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-yellow-300 mb-3 text-center">
                Projects
              </h3>
              <p className="text-gray-300 text-base text-justify">
                Developed several projects, including e-commerce sites, dynamic dashboards, and interactive portfolio designs. Each project reflects my dedication to quality.
              </p>
            </div>
          </Fade>

          {/* Hobbies */}
          <Fade direction="right">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <FaHeart className="text-yellow-500 text-5xl mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-yellow-300 mb-3 text-center">
                Hobbies
              </h3>
              <p className="text-gray-300 text-base text-justify">
                Apart from coding, I enjoy exploring nature, reading tech blogs, and experimenting with creative UI/UX ideas to keep my mind fresh and inspired.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;

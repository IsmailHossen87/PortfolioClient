import {
  FaArrowAltCircleDown,
  FaFacebook,
  FaGithub,
  FaLaptopCode,
  FaPaintBrush,
  FaBatteryFull,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaDatabase,
} from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Slide, Fade } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";
import image from "../assets/WhatsApp Image 2024-07-03 at 17.24.30_05e3079b.jpg";

const Hero = () => {
  const skills = [
    { name: "HTML", percentage: 87, Icon: FaHtml5 },
    { name: "CSS", percentage: 87, Icon: FaCss3Alt },
    { name: "JavaScript", percentage: 60, Icon: FaJs },
    { name: "React", percentage: 80, Icon: FaReact },
    { name: "Node", percentage: 40, Icon: FaNode },
    { name: "MongoDB", percentage: 65, Icon: FaDatabase },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center bg-gray-900 text-yellow-200 mt-10 p-6 md:p-8 lg:p-12 rounded-lg shadow-lg">
        {/* Information Section */}
        <div className="flex flex-col justify-center w-full md:w-3/5 space-y-6">
          <Slide direction="left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-400 text-center md:text-left">
              <Typewriter
                options={{
                  strings: [ `Hi I'm, <span style="color: #fff;">Ismail Hossen</span>`,],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Slide>

          <Slide direction="down">
            <p className="text-xl sm:text-2xl font-semibold text-yellow-300 text-center md:text-left">
              Web Developer
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed text-justify">
              I am a React-based front-end web developer focused on crafting
              clean & user-friendly experiences. I am passionate about building
              excellent software that improves the lives of those around me.
            </p>
          </Slide>

          {/* Social Media Icons */}
          <Slide direction="down">
            <div className="flex justify-center md:justify-start space-x-4 sm:space-x-6">
              {[
                {
                  link: "https://www.facebook.com/ismailhossen875",
                  Icon: FaFacebook,
                  color: "text-blue-600",
                },
                {
                  link: "https://github.com/IsmailHossen87",
                  Icon: FaGithub,
                  color: "text-white",
                },
                {
                  link: "https://wa.me/8801754433707",
                  Icon: BsWhatsapp,
                  color: "text-green-500",
                },
              ].map(({ link, Icon, color }, index) => (
                <Link
                  key={index}
                  to={link}
                  target="_blank"
                  className={`flex items-center justify-center border p-3 rounded-full ${color} hover:bg-opacity-10 transition transform hover:scale-110`}
                >
                  <Icon size={24} />
                </Link>
              ))}
            </div>
          </Slide>

          <Slide direction="up">
            <div className="flex items-center  space-x-4">
              <a
                href="ResumeOfIsmailHosen.pdf"
                download
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-lg font-medium rounded-full shadow-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 max-w-max"
              >
                Download Resume
                <FaArrowAltCircleDown className="ml-3 text-xl" />
              </a>
              
            </div>
          </Slide>
        </div>

        {/* Profile Image */}
        <div className="w-full md:w-2/5 flex justify-center mt-6 md:mt-0">
          <img
            src={image}
            alt="Profile"
            className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-yellow-400 shadow-lg hover:scale-105 transition"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-900 text-yellow-200  px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <Slide direction="down">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-yellow-400">About </span>
              <span className="text-gray-300">Me</span>
            </h2>
          </Slide>
          <Slide direction="up">
            <p className="text-lg text-gray-300 leading-relaxed mb-8 text-justify">
              I chose web development because I am passionate about creating
              clean, user-friendly experiences. I love designing interfaces and
              crafting intuitive user experiences while balancing technical
              expertise and creativity.
            </p>
          </Slide>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Web Development",
                desc: "Building responsive, functional websites using React.",
                Icon: FaLaptopCode,
              },
              {
                title: "Design",
                desc: "Expressing creativity through UI/UX and modern designs.",
                Icon: FaPaintBrush,
              },
              {
                title: "Recharge",
                desc: "Relaxing and exploring new ideas to stay creative.",
                Icon: FaBatteryFull,
              },
            ].map(({ title, desc, Icon }, index) => (
              <Fade
                key={index}
                direction={index === 0 ? "left" : index === 2 ? "right" : "up"}
              >
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition flex flex-col items-center">
                  <Icon className="text-yellow-500 text-4xl mb-4" />
                  <h3 className="text-2xl font-semibold text-yellow-300 mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed text-center">
                    {desc}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-gray-900 text-yellow-200 py-10 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <Fade direction="down">
            <h2 className="text-5xl font-bold mb-10">
              <span className="text-yellow-400">My </span>
              <span className="text-gray-300">Skills</span>
            </h2>
          </Fade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {skills.map(({ name, percentage, Icon }, index) => (
              <Fade key={index} duration={1000} delay={index * 200}>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition flex flex-col items-center">
                  <Icon className="text-yellow-500 text-5xl mb-4" />
                  <h3 className="text-2xl font-semibold text-yellow-300 mb-2">
                    {name}
                  </h3>
                  <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-yellow-500 h-full"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-yellow-400 mt-2">{percentage}%</span>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

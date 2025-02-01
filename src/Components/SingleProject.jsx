import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Zoom } from "react-awesome-reveal";

const SingleProject = ({ project }) => {
  const { name, details, image, liveLink, githubRepo } = project;

  return (
    <Zoom>
      <div
        className="bg-gray-800 border border-gray-700 p-6 md:p-3 gap-5 rounded-xl shadow-lg 
                   transform md:hover:scale-105 transition duration-300 
                   max-w-md mx-auto md:max-w-xl lg:max-w-2xl h-[400px] flex flex-col"
      >
        {/* Project Image */}
        <div className="relative w-full rounded-lg overflow-hidden">
          <img
            referrerPolicy="no-referrer"
            src={image}
            alt={name}

            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="mt-5 flex flex-col flex-grow text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-semibold text-yellow-300 mb-3">
            {name}
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed flex-grow">
            {details}
          </p>

          {/* Links */}
          <div className="flex justify-between  gap-2 mt-5 ">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-black 
                         rounded-lg hover:bg-yellow-400 transition"
            >
              <FaExternalLinkAlt className="text-lg" /> <span>Live Demo</span>
            </a>

            <a
              href={githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-white 
                         rounded-lg hover:bg-gray-600 transition"
            >
              <FaGithub className="text-lg" /> <span>GitHub Repo</span>
            </a>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default SingleProject;

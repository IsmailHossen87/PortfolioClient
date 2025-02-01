import React from "react";
import { Slide, Fade } from "react-awesome-reveal";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "SSC",
      year: " Passing Year 2021",
      field: "Science",
      marks: "GPA: 4.57",
    },
    {
      id: 2,
      degree: "Diploma in Computer Science",
      year: "2025 (Expected)",
      field: "Computer Science and Technology",
      institution: "Sylhet Polytechnic Institute",
      marks: "CGPA: 3.33",
    },
    {
      id: 3,
      degree: "BSc (Running)",
      year: "Ongoing",
      field: "Computer Science",
      institution: "Its depend my luck",
      marks: "Currently Enrolled",
    },
  ];

  return (
    <div className="bg-gray-900 text-yellow-200 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <Slide direction="down">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
            <span className="text-yellow-400">Education</span>
          </h2>
        </Slide>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {educationData.map((edu) => (
            <Fade key={edu.id}>
              <div className="bg-gray-800 h-[320px] p-6 rounded-lg py-4 shadow-lg transform hover:scale-105 transition duration-300">
                <FaGraduationCap className="text-yellow-500 text-5xl mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold text-yellow-300 mb-3 text-center">
                  {edu.degree}
                </h3>
               <div className="flex flex-col items-start mt-3">
               <p className="text-gray-300 text-base text-center">
                  <strong>Year:</strong> {edu.year}
                </p>
                <p className="text-gray-300 text-base text-center">
                  <strong>Field:</strong> {edu.field}
                </p>
                <p className="text-gray-300 text-base text-center">
                  <strong>Institution:</strong> {edu.institution}
                </p>
                <p className="text-gray-300 text-base text-center">
                  <strong>Marks:</strong> {edu.marks}
                </p>
               </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

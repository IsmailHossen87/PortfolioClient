import { useEffect, useState } from "react";
import SingleProject from "./SingleProject";

const Project = () => {
  const [homeProject, setProject] = useState([3]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching project data only once
    fetch("publicData.json")
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load projects");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-gray-900 ">
      <h2 className="text-4xl md:text-4xl pt-7 font-bold text-center mb-10">
        <span className="text-yellow-400">My </span>
        <span className="text-gray-300">Projects</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 mx-4">
        {homeProject?.slice(0,3).map((project, index) => (
          <SingleProject key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;

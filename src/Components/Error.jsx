import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold  mb-6">
        Oops! Page Not Found.
      </h2>
      <p className="text-gray-200 mb-8 text-center">
        The page you're looking for doesn't exist or has been moved.
      </p>
     <Link ><button className="btn bg-red-400 px-4 py-2 rounded-md">Go Home</button></Link>
    </div>
  );
};

export default Error;

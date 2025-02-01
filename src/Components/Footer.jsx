
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Footer = () => {
  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
    .sendForm('service_aaux1xa', 'template_gbkorju', form.current, 'xtvNQW9zdnjhVL7f0')
    .then(
      (result) => {
        console.log('SUCCESS!', result.status, result.text);
        Swal.fire({
          title: "Email sent successfully!",
          icon: "success",
          draggable: true,
        });
        form.current.reset();
      },
      (error) => {
        console.error('FAILED...', error.text);
        Swal.fire({
          title: "Email failed to send.",
          text: error.text,
          icon: "error",
        });
      }
    );
  
    };

   
  return (
    <footer className="bg-gray-800 text-yellow-200">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">About Me</h3>
            <p className="text-gray-400">
              Passionate about web development and design, I aim to create meaningful and
              user-friendly digital experiences. Follow along for updates and projects!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/project" className="hover:text-white transition duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Subscribe to Newsletter</h3>
            <form  ref={form} onSubmit={sendEmail}>
              <div className="flex items-center">
                <input
                  type="email"
                   name="user_email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button
                  type="submit"
                  className="bg-[rgb(229,101,3)] hover:bg-red-600 text-white px-4 py-2 rounded-r-md"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} MyPortfolio. All rights reserved.
          </p>

          {/* Social Media */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

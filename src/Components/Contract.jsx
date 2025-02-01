import { Slide } from "react-awesome-reveal";
import {FaEnvelope,FaFacebook,FaInstagram, FaLinkedin,FaMapMarkerAlt,FaPhoneAlt,FaTwitter,FaWhatsapp,
} from "react-icons/fa";
import { useRef } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const Contact = () => {
  const form = useRef();

  const sendEmail = async(e) => {
    e.preventDefault();
    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
    }
    try{
      const response = await axios.post("http://localhost:5000/send-email", formData, {
      headers: { "Content-Type": "application/json" },
    })
    if (response.data.success) {
      Swal.fire({
        title: "Email sent successfully!",
        text: "You will receive a confirmation email soon.",
        icon: "success",
      });
      form.current.reset();
    } else {
      throw new Error("Failed to send emails.");
    }
    }catch(error){
      Swal.fire({
        title: "Email failed to send.",
        text: error.message,
        icon: "error",
      });
    }
  };

  return (
    <div className="bg-gray-900 text-yellow-200 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <Slide direction="down">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            <span className="text-yellow-400">Contact </span>
            <span className="text-gray-300">Me</span>
          </h2>
        </Slide>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Slide direction="left">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-yellow-300 mb-6">
                Get in Touch
              </h3>
              <form ref={form} onSubmit={sendEmail}>
                {/* Name */}
                <div className="mb-4">
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-yellow-200 focus:outline-none focus:ring focus:ring-yellow-400"
                    placeholder="Your Name"
                    required
                  />
                </div>
                {/* Email */}
                <div className="mb-4">  
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-yellow-200 focus:outline-none focus:ring focus:ring-yellow-400"
                    placeholder="Your Email"
                    name="user_email"
                    required
                  />
                </div>
                {/* Message */}
                <div className="mb-6">
                  <textarea
                    id="message"
                    rows="1"
                    name="message"
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-yellow-200 focus:outline-none focus:ring focus:ring-yellow-400"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-yellow-400 text-gray-800 font-bold rounded-lg hover:bg-yellow-500 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </Slide>

          {/* Contact Info */}
          <Slide direction="right">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-yellow-300 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-yellow-400 text-xl mr-3" />
                  <p className="text-gray-300">Sylhet, Bangladesh</p>
                </div>
                {/* Email */}
                <div className="flex items-center">
                  <FaEnvelope className="text-yellow-400 text-xl mr-3" />
                  <p className="text-gray-300">ismailhosen8757@gmail.com</p>
                </div>
                {/* Phone */}
                <div className="flex items-center">
                  <FaPhoneAlt className="text-yellow-400 text-xl mr-3" />
                  <p className="text-gray-300">+8801995998757</p>
                </div>
                {/* Phone */}
                <div className="flex items-center">
                  <FaWhatsapp className="text-yellow-400 text-2xl mr-3" />
                  <p className="text-gray-300">+8801754433707</p>
                </div>
              </div>

              {/* Social Media Links */}
              <h3 className="text-2xl font-semibold text-yellow-300 mt-8  mb-6">
                Social Media
              </h3>
              <div className="flex space-x-4 justify-center">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/ismailhossen875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 text-2xl"
                >
                  <FaFacebook />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/8801754433707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 text-2xl"
                >
                  <FaWhatsapp />
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/ismailhossen3233/?igsh=MWh4OW1rZm94enI1ag%3D%3D#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 text-2xl"
                >
                  <FaInstagram />
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ismailhossen87"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 text-2xl"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Contact;

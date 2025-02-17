import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome icons

const ContactPage = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "2966d4e3-73ca-4cf7-8761-9f034f3c1096");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      form.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
    id='Contact'
    className="container mx-auto px-6 py-16 mt-12">
      <div className="relative flex justify-center mb-10">
        <p className="text-3xl text-dark font-semibold absolute w-full self-center text-center leading-tight mb-10">
          Contact Me
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Send a Note Form */}
        <div className="md:col-span-2">
          <form
            id="contact-form"
            onSubmit={onSubmit}
            className="space-y-6"
            method="POST"
          >
            <div className="grid grid-cols-1 mt-2 md:grid-cols-2 gap-6">
              <div>
                <input
                  name="user_name"
                  type="text"
                  className="form-control w-full p-3 border border-gray-300 rounded-lg"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  name="user_email"
                  type="email"
                  className="form-control w-full p-3 border border-gray-300 rounded-lg"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                className="form-control w-full p-3 border border-gray-300 rounded-lg"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us more about your needs..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                id="submit-btn"
                className="inline-block text-center bg-transparent text-[#465697] py-3 px-6 text-lg rounded-full border-2 border-[#465697] hover:bg-green-500 hover:text-white duration-300 hover:scale-105 focus:outline-none"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>

          <span>{result}</span>
        </div>

        {/* Social Media Links */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-6">Follow Me</h2>
          <div className="flex justify-center md:justify-start space-x-8">
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/rahul-mohite-5039162a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
            >
              <i className="fab fa-linkedin text-4xl text-blue-700 hover:text-blue-800"></i>
            </a>

            {/* Twitter Icon */}
            <a
              href="https://twitter.com/harnishdesign/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
            >
              <i className="fab fa-twitter text-4xl text-blue-500 hover:text-blue-600"></i>
            </a>

            {/* WhatsApp Icon */}
            <a
              href="https://web.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
            >
              <i className="fab fa-whatsapp text-4xl text-green-500 hover:text-green-600"></i>
            </a>

            {/* GitHub Icon */}
            <a
              href="http://www.github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
            >
              <i className="fab fa-github text-4xl text-gray-800 hover:text-gray-900"></i>
            </a>

            {/* Facebook Icon */}
            <a
              href="http://www.facebook.com/harnishdesign/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
            >
              <i className="fab fa-facebook-f text-4xl text-blue-600 hover:text-blue-700"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-400 text-sm">
          &copy; 2025 Rahul. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;

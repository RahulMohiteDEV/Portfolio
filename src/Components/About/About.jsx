import React from "react";
import AboutImg from "../../assets/rahul.jpeg";
import { IoArrowForward } from "react-icons/io5";
import resume from "../../assets/resume/Rahul Mohite (9922935750).pdf"

const About = () => {
  return (
    <div
      id="About"
      className="relative mt-14 text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-6 md:p-12"
    >
      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center w-full">
        {/* Image */}
        <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
          <img className="w-64 h-64 object-cover rounded-lg md:w-80 md:h-80" src={AboutImg} alt="About img" />
        </div>

        {/* Text Content */}
        <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-8 text-black font-bold">
            Know Me More
          </h2>
          <div className="md:flex flex-wrap flex-col md:flex-row items-start">
            <ul>
              {/* Frontend Developer */}
              <div className="flex gap-3 py-4">
                <IoArrowForward size={30} className="mt-1" />
                <span className="w-full md:w-96">
                  <h1 className="text-xl md:text-2xl font-semibold pb-4 text-black leading-normal">
                    Who am I?
                  </h1>
                  <p className="text-sm md:text-md leading-tight">
                    Hello! I'm Rahul, a passionate and creative UI/UX designer and web developer. I specialize in crafting user-friendly, responsive, and visually appealing websites and web applications. My mission is to deliver an exceptional user experience while keeping up with the latest industry standards.
                  </p>
                </span>
              </div>

              {/* Personal Information */}
              <div className="flex gap-3 py-4">
                <IoArrowForward size={30} className="mt-1" />
                <span className="w-full md:w-96">
                  <h1 className="text-xl md:text-2xl font-semibold pb-4 text-black leading-normal">
                    Personal Information
                  </h1>
                  <div className="space-y-4">
                    <p className="text-sm md:text-md">
                      <strong className="text-white-700">Name:</strong> Rahul Mohite
                    </p>
                    <p className="text-sm md:text-md">
                      <strong className="text-white-700">Mail:</strong> Mohiterahul4670@gmail.com
                    </p>
                    <p className="text-sm md:text-md">
                      <strong className="text-white-700">Age:</strong> 22
                    </p>
                    <p className="text-sm md:text-md">
                      <strong className="text-white-700">From:</strong> Satara, Maharashtra
                    </p>
                  </div>
                </span>
              </div>
            </ul>
          </div>
        </div>
      </div>


      {/* Download Resume Button */}
      <div className="absolute bottom-4 right-4 md:bottom-12 md:right-12">
        <a
          href={resume} // Update with actual path to your resume file
          download
          className="inline-block text-center bg-transparent text-[#465697] py-2 px-4 md:py-3 md:px-6 text-base md:text-lg rounded-full border-2 border-[#465697] hover:bg-green-500 hover:text-white duration-300 hover:scale-105 focus:outline-none"
        >
          Download Resume
        </a>
      </div>

    </div>
  );
};

export default About;

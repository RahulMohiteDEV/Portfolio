import React from "react";
import TextChange from "../TextChange";
import Image from "../../assets/img/image.jpeg";  // Ensure the image path is correct

const Home = () => {
  return (
    <div
    id="Home"
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover", // Ensures the image covers the entire container
        backgroundPosition: "center", // Centers the image
        backgroundAttachment: "fixed", // Optional for a parallax effect
        width: "100%", // Ensure the image fills the width
        height: "100vh", // Full viewport height
        objectFit: "cover", // Ensures image scales to cover the container without distortion
      }}
    >
      {/* Overlay to dim the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="text-white flex flex-col w-full justify-center items-center p-6 md:p-20 text-center relative">
        <div className="md:w-2/4 md:pt-10">
          <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter text-white">
            <TextChange />
          </h1>
          <p className="text-sm md:text-2xl tracking-tight text-white pt-6 md:pt-8">
            I am a UI/UX designer and web developer.<br />
            To create, build, and maintain websites and web applications.
          </p>
          <button className="mt-8 md:mt-12 text-white py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 border-2 border-white font-semibold rounded-3xl bg-transparent hover:bg-green-500 hover:text-white duration-300 hover:scale-105 focus:outline-none">
          <a href="#Contact"> Contact Me</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

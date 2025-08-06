import React from "react";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-xl shadow-lg mt-8 mx-4">
      <img
        src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg"
        alt="Profile"
        className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md mb-6 md:mb-0"
      />
      <div className="md:ml-10 text-center md:text-left">
        <h1 className="text-4xl font-bold text-white mb-4">HO<span className='text-cyan-950'>DAN</span></h1>
        <p className="text-lg text-white mb-6 max-w-md"> I AM FULL STACK DEVELOPER | <span className="text-black">Hodan</span>
        </p>
        <button
          onClick={() => navigate("/aboutme")}
          className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-100 transition"
        >
          About Me
        </button>
      </div>
   
 </section>
  );
}

export default Hero;
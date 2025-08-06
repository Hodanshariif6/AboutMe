import React from "react";

function AboutMe() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full text-center">
        <img
          src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg"
          alt="About"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-blue-400"
        />
        <h2 className="text-3xl font-bold text-blue-700 mb-2">About Me</h2>
        <p className="text-gray-700 mb-4">
          Hello! I'm Hodan, a passionate full-stack developer with over 5 years of experience
                      in creating innovative web and mobile applications. My journey in technology started
                      with curiosity and has evolved into a deep passion for solving complex problems
                      through elegant code.
        </p>
        <a
          href="/"
          className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Back Home
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
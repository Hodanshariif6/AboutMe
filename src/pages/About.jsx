import React from "react";

function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-12 px-4 flex flex-col items-center">
      {/* Qaybta 1: Xogta Shakhsiyeed */}
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full mb-10">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">About Me</h2>
        <p className="text-gray-700 text-lg">
          Waxaan ahay <span className="font-semibold text-blue-600">Hodan</span>, Full Stack Developer leh khibrad sare oo ReactJS, NodeJS, iyo Tailwind CSS. Waxaan jecelahay naqshadeynta casriga ah iyo xalinta dhibaatooyinka adag ee software-ka.
        </p>
      </div>

      {/* Qaybta 2: Skills adag */}
      <div className="bg-gradient-to-r from-purple-200 to-blue-200 rounded-xl shadow-lg p-8 max-w-2xl w-full mb-10">
        <h3 className="text-2xl font-bold text-purple-700 mb-4">My Skills</h3>
        <ul className="grid grid-cols-2 gap-4 text-lg text-blue-900 font-semibold">
          <li>ReactJS & Next.js</li>
          <li>NodeJS & Express</li>
          <li>MongoDB & SQL</li>
          <li>Tailwind CSS & Sass</li>
          <li>API Integration</li>
          <li>Authentication & Security</li>
          <li>Responsive Design</li>
          <li>Problem Solving</li>
        </ul>
      </div>

      {/* Qaybta 3: Waayo-aragnimo adag */}
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">Experience</h3>
        <ul className="space-y-3 text-gray-700">
          <li>
            <span className="font-semibold text-blue-600">2023 - 2025:</span> Senior React Developer, <span className="font-semibold">SomaliTech</span> – Horumarinta web-apps waaweyn iyo API-yada adag.
          </li>
          <li>
            <span className="font-semibold text-blue-600">2021 - 2023:</span> Frontend Developer, <span className="font-semibold">XamarSoft</span> – Naqshadeyn iyo responsive design.
          </li>
          <li>
            <span className="font-semibold text-blue-600">2020 - 2021:</span> Junior Developer, <span className="font-semibold">Freelance</span> – Mashruucyo badan oo ReactJS iyo NodeJS ah.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
import React from "react";
import { useNavigate } from "react-router-dom";

const allSeminars = [
   {
    img: "https://img.freepik.com/free-vector/flat-design-programming-concept_23-2148684985.jpg",
    name: "React Seminar",
  },
  {
    img: "https://img.freepik.com/free-vector/flat-design-webinar-illustration_23-2148887187.jpg",
    name: "Webinar",
  },
  {
    img: "https://img.freepik.com/free-vector/gradient-digital-marketing-conference-poster_23-2149372062.jpg",
    name: "Tech Conference",
  },
  {
    img: "https://img.freepik.com/free-vector/flat-design-ui-ux-background_23-2149052117.jpg",
    name: "UI/UX Seminar",
  },
   {
    img: "https://img.freepik.com/free-vector/flat-design-data-science-concept_23-2148684987.jpg",
    name: "Data Science Seminar",
  },
 {
    img: "https://img.freepik.com/free-vector/flat-design-artificial-intelligence-concept_23-2148684986.jpg",
    name: "AI Seminar",
  },
];

function AllSeminars() {
  const navigate = useNavigate();

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Dhammaan Seminarro</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {allSeminars.map((seminar, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
            <img src={seminar.img} alt={seminar.name} className="w-60 h-40 object-cover rounded-lg mb-3 border-2 border-blue-400" />
            <span className="text-blue-700 font-semibold">{seminar.name}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/")}
          className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-purple-700 transition"
        >
          Back
        </button>
      </div>
    </section>
  );
}

export default AllSeminars;
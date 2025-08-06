import React from "react";
import { useNavigate } from "react-router-dom";

const seminars = [
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
];

function SeminarsSection() {
  const navigate = useNavigate();

  return (
    <section className="py-10 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-8">Seminarro aan ka qeyb galay</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {seminars.map((seminar, idx) => (
          <div key={idx} className=" flex flex-col items-center h-[100%] w-[100%] justify-between">
            <img src={seminar.img} alt={seminar.name} className="w-[120%] h-[130%] object-cover " />
            <span className="text-blue-700 font-semibold">{seminar.name}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate("/seminars")}
          className="bg-blue-600 text-white px-8 py-2 rounded-full font-semibold shadow hover:bg-blue-700 mt-10 transition"
        >
          View All
        </button>
      </div>
    </section>
  );
}

export default SeminarsSection;
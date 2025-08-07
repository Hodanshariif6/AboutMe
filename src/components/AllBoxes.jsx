import React from "react";
import { Link} from "react-router-dom";
import image1 from './image/Screenshot 2025-08-06 081034.png';
import image2 from './image/Screenshot 2025-08-06 084245.png';
import image3 from './image/Screenshot 2025-08-06 084655.png';
import image4 from './image/Screenshot 2025-08-06 085650.png';

const allBoxes = [
  {
    img: image1,
    title: "Music Player",
    desc: "Music Player: HTML, CSS, JS. Waa responsive.",
  },
  {
    img: image2,
    title: "Calculator",
    desc: "Calculator: HTML, CSS, JS. Calculator oo dhammeystiran.",
  },
  {
    img: image3,
    title: "QR Code",
    desc: "QR Code: HTML, CSS, JS. QR code generator.",
  },
  {
    img: image4,
    title: "BMI",
    desc: "BMI: HTML, TAILWIND, JS. BMI oo dhammeystiran.",
  },
  {
    img: "https://img.freepik.com/free-vector/hand-drawn-hospital-care-landing-page_23-2149774002.jpg",
    title: "Hospital",
    desc: "Hospital: HTML, TAILWIND, oo dhammeystiran.",
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80",
    title: "Weather App",
    desc: "Weather App: Cimilada magaaladaada.",
  },
  {
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=81",
    title: "Notes",
    desc: "Notes: Qor qoraallo degdeg ah.",
  },
  {
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&q=81",
    title: "Blog",
    desc: "Blog: Qor oo la wadaag maqaaladaada.",
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=81",
    title: "Portfolio",
    desc: "Portfolio: Soo bandhig shaqadaada.",
  },
  {
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=82",
    title: "Contact Form",
    desc: "Contact Form: Foomka xiriirka.",
  },
];

function AllBoxes() {

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Qaar ka mid eh website yadeeda</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {allBoxes.slice(0,5).map((box, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <img src={box.img} alt={box.title} className="w-60 h-80 rounded-2xl object-cover mb-4 border-2 border-blue-400" />
            <h3 className="text-lg font-semibold text-blue-700 mb-1">{box.title}</h3>
            <p className="text-gray-600 text-center">{box.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link to = '/'><button className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-purple-700 transition">
          Back
        </button></Link>
      </div>
    </section>
  );
}

export default AllBoxes;
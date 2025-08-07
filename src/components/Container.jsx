import React from "react";

import { Link} from "react-router-dom";
import image1 from './image/Screenshot 2025-08-06 081034.png';
import image2 from './image/Screenshot 2025-08-06 084245.png';
import image3 from './image/Screenshot 2025-08-06 084655.png';
const boxes = [
  {
    img: image1,
    title: "Music player",
    desc: " HTML , CSS and JS  wuu shaqeyna responsiv  wuu leyahay ",
  },
  {
    img: image2,
    title: "Calculator",
    desc: "HTML , CSS and JS wax walbo calculator laga rabay wuu leyahay responsiv  wuu leyahay...",
  },
  {
    img: image3,
    title: "QR Code",
    desc: "HTML , CSS and JS wax walbo QR Code laga rabay wuu leyahay responsiv  wuu leyahay....",
  },
];

function Container() {

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {boxes.map((box, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
            <img src={box.img} alt={box.title} className="w-48 h-80  rounded-2xl object-cover mb-6 border-4 " />
            <h3 className="text-2xl font-bold mb-2 text-blue-700">{box.title}</h3>
            <p className="text-gray-600 mb-4 text-center">{box.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
       <Link to = "/allboxes"> <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-blue-700 transition">
          View All
        </button></Link>
      </div>
    </section>
  );
}

export default Container;
import React from "react";
import { Link} from "react-router-dom";

const reviews = [
  {
    name: "Ayaan",
    text: "Aad baan ugu qanacsanahay adeegga! Waa mid degdeg ah oo xirfad leh.",
    icon: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
    name: "Khadar",
    text: "Website-ku waa responsive oo qurux badan. Aad baad u mahadsantahay!",
    icon: "⭐️⭐️⭐️⭐️",
  },
];

function ReviewsSection() {

  return (
    <section className="py-10 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-8">Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <div className="text-3xl mb-2">{review.icon}</div>
            <p className="text-gray-700 mb-2 text-center">{review.text}</p>
            <span className="text-blue-600 font-semibold">{review.name}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
       <Link to = "/reviews"> <button
          className="bg-blue-600 text-white px-8 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition"
        >
          View All Reviews
        </button></Link> 
      </div>
    </section>
  );
}

export default ReviewsSection;
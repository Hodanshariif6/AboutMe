import React from "react";
import { useNavigate } from "react-router-dom";

const allReviews = [
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
  {
    name: "Fartuun",
    text: "Naqshadeynta waa heer sare. Aad baan ugu faraxsanahay.",
    icon: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
    name: "Abdi",
    text: "Adeeg aad u wanaagsan, waqti fiican la qabtay.",
    icon: "⭐️⭐️⭐️⭐️",
  },
  {
    name: "Hodan",
    text: "Shaqo fiican! Waxaan jeclahay sida uu u shaqeeyo.",
    icon: "⭐️⭐️⭐️⭐️⭐️",
  },
];

function AllReviews() {
  const navigate = useNavigate();

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Dhammaan Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {allReviews.map((review, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <div className="text-3xl mb-2">{review.icon}</div>
            <p className="text-gray-700 mb-2 text-center">{review.text}</p>
            <span className="text-blue-600 font-semibold">{review.name}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/")}
          className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-purple-700 transition"
        >
          Back Home
        </button>
      </div>
    </section>
  );
}

export default AllReviews;
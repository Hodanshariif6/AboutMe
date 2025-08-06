import React from "react";

function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 py-12 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full mb-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Let's Connect</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="material-icons text-blue-600">email</span>
            <p className="ml-2">hodan@example.com</p>
          </div>
          <div className="flex items-center">
            <span className="material-icons text-blue-600">phone</span>
            <p className="ml-2">(252)613915805</p>
          </div>
          <div className="flex items-center">
            <span className="material-icons text-blue-600">location_on</span>
            <p className="ml-2">Somali, MQ</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Send me a message</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1 font-semibold">Your Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Hodan"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-semibold">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Hodan@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-semibold">Subject</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Project Discussion"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-semibold">Message</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              placeholder="Tell me about your project ideas, requirements, or any questions you have..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
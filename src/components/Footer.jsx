import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-3 md:mb-0 text-center md:text-left">
          <span className="font-bold text-lg">© {new Date().getFullYear()} Hodan | All Rights Reserved</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <a
            href="https://wa.me/252613915805"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-green-300 transition"
            title="WhatsApp"
          >
            <svg width="20" height="20" fill="currentColor" className="text-green-400"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M9.993 2C5.58 2 2 5.58 2 9.993c0 1.762.577 3.432 1.577 4.825L2 22l7.293-1.916A7.963 7.963 0 0 0 9.993 18c4.413 0 7.993-3.58 7.993-7.993C17.986 5.58 14.406 2 9.993 2zm0 14.933c-.943 0-1.87-.154-2.735-.457l-.196-.065-4.327 1.137 1.15-4.217-.127-.205A6.933 6.933 0 1 1 9.993 16.933z"/></svg>
            WhatsApp
          </a>
          <a
            href="https://hodanshariif617@gmail.com"
            className="hover:text-blue-200 transition"
            title="Email"
          >
            Email
          </a>
         
        </div>
      </div>
    </footer>
  );
}

export default Footer;
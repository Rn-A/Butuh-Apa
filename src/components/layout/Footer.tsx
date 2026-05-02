import React from "react";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { SERVICES } from "../../data/content";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-primary-black text-white pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="inline-block mb-8 relative group">
              {/* Layer pendaran merah luar */}
              <div className="absolute -inset-8 bg-primary-red/40 blur-3xl rounded-full opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
              {/* Layer cahaya gradasi merah-putih */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-red/30 via-white/40 to-primary-red/30 blur-2xl rounded-full scale-110"></div>
              <img
                src="/assets/logo1.png"
                alt="Butuh Apa Logo"
                className="relative h-32 md:h-40 lg:h-48 w-auto object-contain origin-center md:origin-left transition-transform hover:scale-105 duration-300"
              />
            </Link>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Solusi untuk segala urusan gadget dan gaya hidup Anda. Melayani service, sewa iPhone, home service, hingga rental perlengkapan outdoor.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-6">Layanan Kami</h3>
            <ul className="space-y-4 text-gray-400">
              {SERVICES.map(srv => (
                <li key={srv.id}>
                  <Link to={`/layanan/${srv.id}`} className="hover:text-white hover:pl-2 transition-all duration-300 inline-block">{srv.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-6">Sosial Media</h3>
            <ul className="space-y-4 text-gray-400 flex flex-col items-center md:items-start">
              <li>
                <a href="https://www.instagram.com/ekonter_?igsh=ZGp5aDc2cWc5NHEw" target="_blank" rel="noopener noreferrer" className="hover:text-primary-red transition-colors flex items-center gap-3">
                  <Instagram size={20} /> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@ekonter_?_r=1&_t=ZS-95h3fYN6QrM" target="_blank" rel="noopener noreferrer" className="hover:text-primary-red transition-colors flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg> TikTok
                </a>
              </li>
              <li>
                <a href="https://wa.me/6289662334567" target="_blank" rel="noopener noreferrer" className="hover:text-primary-red transition-colors flex items-center gap-3">
                  <Facebook size={20} className="opacity-0 w-0 h-0 absolute" /> {/* Using the same icon style but for WhatsApp */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg> WhatsApp Utama
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} EKONTER. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

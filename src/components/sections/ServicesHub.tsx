import React from "react";
import { motion } from "motion/react";
import { SERVICES } from "../../data/content";
import { Link } from "react-router-dom";

export function ServicesHub() {
  return (
    <section id="services-hub" className="py-20 md:py-32 bg-[#f9f9f9]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-extrabold tracking-tighter text-primary-black mb-6">
            Pilih Layanan Kami
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link 
                to={`/layanan/${srv.id}`}
                className="group p-8 rounded-3xl border-2 border-gray-100 bg-white hover:border-primary-red hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(229,9,20,0.1)] transition-all duration-300 cursor-pointer flex flex-col items-center text-center h-full block"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-100 group-hover:bg-primary-red group-hover:text-white text-primary-black flex items-center justify-center mb-6 transition-colors duration-300">
                  {srv.icon}
                </div>
                <h3 className="text-2xl font-extrabold mb-3 text-primary-black">{srv.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{srv.shortDesc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

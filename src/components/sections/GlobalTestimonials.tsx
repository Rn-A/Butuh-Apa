import { motion } from "motion/react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "../../data/content";

export function GlobalTestimonials() {
  // Take top 4 for the global section
  const displayTestis = TESTIMONIALS.slice(0, 4);

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-extrabold tracking-tighter text-primary-black mb-6">
            Apa Kata Pelanggan Kami
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayTestis.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl border border-gray-100 bg-[#f9f9f9] hover:bg-white hover:border-primary-red hover:shadow-[0_10px_20px_rgba(229,9,20,0.05)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6 text-primary-red">
                   {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 font-medium leading-relaxed mb-8">"{t.message}"</p>
              </div>
              <div>
                <h4 className="font-extrabold text-primary-black text-lg">{t.name}</h4>
                <span className="text-xs font-bold uppercase tracking-widest text-primary-red">{t.service}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

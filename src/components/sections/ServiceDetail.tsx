import React from "react";
import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { MessageCircle, CheckCircle2, Star, ArrowLeft, Instagram, Facebook } from "lucide-react";
import { TESTIMONIALS } from "../../data/content";
import { Link } from "react-router-dom";

// Custom TikTok Icon
const TikTokIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

interface ServiceProps {
  service: {
    id: string;
    title: string;
    desc: string;
    highlights: string[];
    wa: string;
    waMsg: string;
    icon: React.ReactNode;
    socials?: { platform: string; username: string; url: string }[];
  };
  index: number;
}

export const ServiceDetail: React.FC<ServiceProps> = ({ service, index }) => {
  const specificTestis = TESTIMONIALS.filter(t => t.service === service.title).slice(0, 3);

  const getCtaText = (id: string) => {
    switch (id) {
      case 'ekonter': return 'Chat Admin EKONTER';
      case 'home-service': return 'Pesan Sekarang';
      default: return 'Sewa Sekarang';
    }
  }

  const getSocialIcon = (platform: string, size: number) => {
    switch (platform.toLowerCase()) {
      case 'instagram': return <Instagram size={size} />;
      case 'facebook': return <Facebook size={size} />;
      case 'tiktok': return <TikTokIcon size={size} />;
      default: return null;
    }
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12 mb-10">
        <Link to="/" className="inline-flex items-center gap-2 text-primary-red font-bold text-sm uppercase tracking-wider hover:opacity-80 transition-opacity">
           <ArrowLeft size={18} /> Kembali ke Beranda
        </Link>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 flex flex-col gap-12 lg:gap-20 lg:flex-row items-center">
        
        <div className="w-full lg:w-1/2">
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="flex items-center gap-4 mb-6"
          >
              <div className="w-16 h-16 rounded-2xl bg-gray-50 shadow-sm text-primary-red flex items-center justify-center border border-gray-100">
                {service.icon}
              </div>
              <h1 className="text-4xl md:text-5xl font-sans font-extrabold tracking-tighter text-primary-black">
                {service.title}
              </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg md:text-xl mb-10 leading-relaxed"
          >
            {service.desc}
          </motion.p>

          <ul className="space-y-4 mb-10">
             {service.highlights.map((hl: string, i: number) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-center gap-3 font-bold text-primary-black"
                >
                  <CheckCircle2 className="text-primary-red" size={24} />
                  {hl}
                </motion.li>
             ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <Button size="lg" onClick={() => window.open(`https://wa.me/${service.wa}?text=${encodeURIComponent(service.waMsg)}`, '_blank')}>
              <MessageCircle className="mr-2" />
              {getCtaText(service.id)}
            </Button>
          </motion.div>

          {service.socials && service.socials.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-4 mt-6 border-t border-gray-100 pt-8"
            >
              <span className="font-bold text-sm uppercase tracking-wider text-primary-black">Ikuti Kami</span>
              <div className="flex flex-wrap gap-3">
                {service.socials.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-primary-black hover:border-primary-red hover:text-primary-red hover:shadow-[0_4px_12px_rgba(229,9,20,0.08)] transition-all duration-300"
                  >
                    {getSocialIcon(social.platform, 18)}
                    {social.username}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        <div className="w-full lg:w-1/2">
            <div className="bg-[#f9f9f9] p-8 md:p-12 rounded-[2rem] border border-gray-100">
               <h3 className="text-sm font-bold uppercase tracking-widest text-primary-red mb-8">Pengalaman Pelanggan</h3>
               <div className="space-y-6">
                 {specificTestis.length > 0 ? specificTestis.map((t, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.2 }}
                      className="bg-white border text-left border-gray-100 p-6 rounded-2xl hover:border-primary-red hover:shadow-[0_8px_20px_rgba(229,9,20,0.05)] transition-all duration-300"
                    >
                       <div className="flex gap-1 mb-3 text-primary-red">
                         {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                       </div>
                       <p className="text-primary-black font-medium leading-relaxed mb-4">"{t.message}"</p>
                       <h4 className="font-extrabold text-gray-500 text-sm">{t.name}</h4>
                    </motion.div>
                 )) : (
                    <p className="text-gray-500">Belum ada testimoni untuk layanan ini.</p>
                 )}
               </div>
            </div>
        </div>

      </div>
    </section>
  );
}

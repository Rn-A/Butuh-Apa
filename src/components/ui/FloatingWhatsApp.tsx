import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/6289662334567" // EKONTER Main Number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-primary-red text-white rounded-full shadow-[0_4px_20px_rgba(229,9,20,0.4)] hover:bg-primary-red-hover transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.a>
  );
}

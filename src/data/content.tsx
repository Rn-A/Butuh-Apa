import { Wrench, Smartphone, Home, Tent } from "lucide-react";
import React from "react";

export const MAIN_INFO = {
  tagline: "Solusi untuk segala urusan gadget dan gaya hidup",
  subHeadline: "Dari service HP, sewa iPhone, hingga kebutuhan outdoor — semua ada di EKONTER"
};

export const SERVICES = [
  {
    id: "ekonter",
    title: "EKONTER",
    shortDesc: "Service HP, jual beli, dan aksesoris dalam satu tempat",
    desc: "Semua kebutuhan gadget kamu dalam satu tempat — cepat, terpercaya, dan terjangkau",
    highlights: ["Ganti LCD", "Ganti baterai", "Jual HP baru & second", "Aksesoris lengkap"],
    wa: "6289662334567",
    waMsg: "Halo, saya tertarik dengan layanan EKONTER (Service/Jual Beli/Aksesoris)",
    icon: <Wrench size={32} />,
    socials: [
      { platform: "instagram", username: "@ekonter_", url: "https://www.instagram.com/ekonter_?igsh=ZGp5aDc2cWc5NHEw" },
      { platform: "tiktok", username: "@ekonter_", url: "https://www.tiktok.com/@ekonter_?_r=1&_t=ZS-95h3fYN6QrM" }
    ]
  },
  {
    id: "pinjam-iphone",
    title: "Pinjam iPhone",
    shortDesc: "Sewa iPhone mudah untuk konten dan kebutuhan harian",
    desc: "Sewa iPhone dengan mudah untuk kebutuhan konten, event, atau harian",
    highlights: ["Banyak pilihan iPhone", "Harga fleksibel", "Proses cepat"],
    wa: "6289530888880",
    waMsg: "Halo, saya tertarik dengan layanan Pinjam iPhone",
    icon: <Smartphone size={32} />,
    socials: [
      { platform: "instagram", username: "@pinjemiphone", url: "https://www.instagram.com/pinjemiphone?igsh=MTY3OXdjNXgwN3Fkdg%3D%3D&utm_source=qr" },
      { platform: "tiktok", username: "@pinjemiphone_", url: "https://www.tiktok.com/@pinjemiphone_" }
    ]
  },
  {
    id: "home-service",
    title: "Home Service",
    shortDesc: "Service tanpa ribet, teknisi datang ke rumah",
    desc: "Service HP tanpa keluar rumah — teknisi datang langsung ke lokasi kamu",
    highlights: ["Service di tempat", "Praktis", "Aman"],
    wa: "628975978777",
    waMsg: "Halo, saya tertarik dengan layanan Home Service",
    icon: <Home size={32} />,
    socials: [
      { platform: "instagram", username: "@e.alfianto", url: "https://www.instagram.com/e.alfianto?igsh=MW1kb2pxMWNyYnF1dg==" },
      { platform: "tiktok", username: "@teknisilaperkalori", url: "https://www.tiktok.com/@teknisilaperkalori?_r=1&_t=ZS-961SbW6RaBI" }
    ]
  },
  {
    id: "rental-outdoor",
    title: "Rental Outdoor",
    shortDesc: "Sewa perlengkapan outdoor tanpa harus beli mahal",
    desc: "Sewa perlengkapan outdoor untuk mendukung petualangan kamu",
    highlights: ["Tenda", "Carrier", "Peralatan camping"],
    wa: "6283863208102",
    waMsg: "Halo, saya tertarik dengan layanan Rental Outdoor",
    icon: <Tent size={32} />,
    socials: [
      { platform: "instagram", username: "@fawwasoutdoor", url: "https://www.instagram.com/fawwasoutdoor?igsh=MXdwNzZpMGk4M3JoYg==" }
    ]
  }
];

export const TESTIMONIALS = [
  { name: "Bu Kus", service: "EKONTER", rating: 5, message: "Service cepat banget, LCD langsung kinclong bisa ditunggu!" },
  { name: "Budi", service: "Pinjam iPhone", rating: 5, message: "Sewa iPhone prosesnya gampang, gak ribet. Mantap buat ngonten." },
  { name: "Tegar Prabakti", service: "Home Service", rating: 5, message: "Sangat membantu, teknisi datang ke rumah tepat waktu dan ramah." },
  { name: "Chuzz martabak", service: "Rental Outdoor", rating: 5, message: "Tenda bersih dan lengkap. Weekend besok mau sewa lagi." },
  { name: "Banez", service: "EKONTER", rating: 5, message: "Ganti baterai ori murah meriah. Kualitas jaminan!" },
  { name: "Farah Diba", service: "Pinjam iPhone", rating: 5, message: "HP mulus banget kayak baru. Perfect buat nemenin liburan." },
  { name: "Bemo", service: "Home Service", rating: 4, message: "Praktis banget gak perlu macet-macetan ke konter." },
  { name: "Haniifah", service: "Rental Outdoor", rating: 5, message: "Carrier-nya kokoh dan wangi, nyewa disini selalu puas." }
];

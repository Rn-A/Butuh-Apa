import React from "react";
import { Hero } from "../components/sections/Hero";
import { ServicesHub } from "../components/sections/ServicesHub";
import { GlobalTestimonials } from "../components/sections/GlobalTestimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesHub />
      <GlobalTestimonials />
    </>
  );
}

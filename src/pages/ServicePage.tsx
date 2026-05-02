import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { SERVICES } from "../data/content";
import { ServiceDetail } from "../components/sections/ServiceDetail";
import { motion } from "motion/react";

export default function ServicePage() {
  const { id } = useParams();
  const service = SERVICES.find((s) => s.id === id);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-24 pb-12">
      <ServiceDetail service={service} index={0} />
    </div>
  );
}

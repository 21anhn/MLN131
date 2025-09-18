// components/common/VideoSection.tsx
"use client";
import { motion } from "framer-motion";

interface Props {
  id: string;
  videoSrc: string;
  children: React.ReactNode;
  from?: "left" | "right";
}

export default function VideoSection({
  id,
  videoSrc,
  children,
  from = "left",
}: Props) {
  return (
    <section id={id} className="relative w-full h-screen overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoSrc}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <motion.div
          initial={{ opacity: 0, x: from === "left" ? -80 : 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-center text-white"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

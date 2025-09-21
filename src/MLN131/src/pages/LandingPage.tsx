// src/pages/LandingPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// ✅ Import đúng file đã convert sang H.264 + AAC
import videoBg from "../assets/mln-bg-h264.mp4";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video nền */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* Overlay mờ */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Nội dung landing */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center w-full px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Chào mừng đến với MLN131
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-white/90 mb-8 font-medium drop-shadow"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Nền tảng học tập về Dân chủ xã hội chủ nghĩa &amp; Nhà nước pháp quyền
          XHCN ở Việt Nam
        </motion.p>

        <motion.button
          onClick={() => navigate("/intro")}
          className="bg-[#6e7fdc] hover:bg-[#2a2e6e] text-white px-8 py-3 rounded-lg text-lg font-semibold shadow transition"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Bắt đầu
        </motion.button>
      </div>
    </div>
  );
};

export default LandingPage;

import React from "react";
import { motion } from "framer-motion";

import PrincipleSection from "../components/PrincipleSection";

const videoUrl = "/assets/video/bg-socialism.mp4"; // Đặt file video phù hợp vào thư mục assets/video

const IntroPage: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden pb-10 bg-[#f4f7ff]">
      {/* Video background chỉ ở phần đầu giới thiệu */}
      <div className="relative w-full flex flex-col items-center justify-center min-h-[60vh]">
        <video
          className="absolute inset-0 w-full h-full object-cover blur-md scale-110 opacity-80 -z-10"
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
        />
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2a2e6e] via-[#6e7fdc] to-[#3a3f8f] drop-shadow-2xl mb-8 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Dân chủ xã hội chủ nghĩa
            <br />
            <span className="block text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#6e7fdc] via-[#a5b4fc] to-[#3a3f8f] text-transparent bg-clip-text mt-2">
              &amp; Nhà nước pháp quyền XHCN ở Việt Nam
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl font-medium text-[#2a2e6e]/80 max-w-3xl mb-10 leading-relaxed drop-shadow-lg bg-white/60 rounded-2xl px-6 py-4 backdrop-blur-md shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.7 }}
          >
            Dân chủ xã hội chủ nghĩa là nền dân chủ rộng rãi, bảo đảm quyền lực
            thực sự thuộc về nhân dân, được thực hiện thông qua nhà nước pháp
            quyền xã hội chủ nghĩa. Nhà nước pháp quyền xã hội chủ nghĩa ở Việt
            Nam là nhà nước của nhân dân, do nhân dân, vì nhân dân, quản lý xã
            hội bằng pháp luật, bảo đảm quyền con người, quyền công dân và thúc
            đẩy sự phát triển công bằng, tiến bộ.
          </motion.p>
        </motion.div>
      </div>
      {/* ...existing code... */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <PrincipleSection />
      </motion.section>
      {/* ...chỉ giữ lại PrincipleSection, không còn Chatbot/CaseStudy ở trang chủ... */}
    </div>
  );
};

export default IntroPage;

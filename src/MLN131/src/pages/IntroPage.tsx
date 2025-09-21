import React from "react";
import { motion } from "framer-motion";
import PrincipleSection from "../components/PrincipleSection";
import img3ng from "../assets/3ng.png";

const videoUrl = "/assets/video/bg-socialism.mp4";

const IntroPage: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden pb-10 bg-[#f4f7ff]">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover blur-md scale-110 opacity-80 -z-10"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Main introduce section */}
      <div className="relative w-full flex flex-col md:flex-row items-center justify-center min-h-[70vh] px-4 pt-24 gap-12 z-10">
        {/* Left: Text */}
        <motion.div
          className="flex-1 flex flex-col items-start text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-[#6e7fdc] font-semibold mb-2 text-lg">
              Khám phá chủ đề
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#2a2e6e] mb-6 leading-tight drop-shadow-lg">
              Dân chủ xã hội chủ nghĩa
              <br />
              <span className="block text-3xl md:text-5xl font-bold text-[#6e7fdc] mt-2">
                &amp; Nhà nước pháp quyền XHCN ở Việt Nam
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-[#2a2e6e]/80 max-w-2xl mb-8 leading-relaxed drop-shadow bg-white/60 rounded-2xl px-6 py-4 backdrop-blur-md shadow-lg">
              Dân chủ xã hội chủ nghĩa là nền dân chủ rộng rãi, bảo đảm quyền
              lực thực sự thuộc về nhân dân, được thực hiện thông qua nhà nước
              pháp quyền xã hội chủ nghĩa. Nhà nước pháp quyền xã hội chủ nghĩa
              ở Việt Nam là nhà nước của nhân dân, do nhân dân, vì nhân dân,
              quản lý xã hội bằng pháp luật, bảo đảm quyền con người, quyền công
              dân và thúc đẩy sự phát triển công bằng, tiến bộ.
            </p>
          </div>
        </motion.div>
        {/* Right: Image */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative group w-full max-w-xs md:max-w-md">
            <img
              src={img3ng}
              alt="3 nhân vật"
              className="rounded-3xl shadow-2xl w-full border-4 border-white/80 bg-white/60"
            />
            {/* Note xuất hiện khi hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 text-[#2a2e6e] text-sm md:text-base font-medium px-4 py-3 rounded-xl shadow-lg backdrop-blur-md pointer-events-none"
            >
              Bức họa nổi tiếng về Karl Marx, Friedrich Engels và V.I. Lenin –
              ba nhà tư tưởng đã đặt nền móng lý luận cho chủ nghĩa xã hội khoa
              học.
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* Section tiếp theo */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <PrincipleSection />
      </motion.section>
    </div>
  );
};

export default IntroPage;

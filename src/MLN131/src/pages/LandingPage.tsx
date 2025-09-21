import React from "react";
import { useNavigate } from "react-router-dom";
import img3ng from "../assets/landing1.jpg";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${img3ng})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay mờ */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      {/* Nội dung landing */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          Chào mừng đến với MLN131
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-8 font-medium drop-shadow">
          Nền tảng học tập về Dân chủ xã hội chủ nghĩa &amp; Nhà nước pháp quyền XHCN ở Việt Nam
        </p>
        <button
          onClick={() => navigate("/intro")}
          className="bg-[#6e7fdc] hover:bg-[#2a2e6e] text-white px-8 py-3 rounded-lg text-lg font-semibold shadow transition"
        >
          Bắt đầu
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
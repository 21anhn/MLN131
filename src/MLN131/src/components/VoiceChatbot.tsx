import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mic, Send } from "lucide-react";

// Dữ liệu mô phỏng trích xuất từ giáo trình Marx-Lenin
const marxLeninQA: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["dân chủ xã hội chủ nghĩa", "dân chủ"],
    answer:
      "Dân chủ xã hội chủ nghĩa là nền dân chủ rộng rãi, bảo đảm quyền lực thực sự thuộc về nhân dân, do nhân dân, vì nhân dân, được thực hiện thông qua nhà nước pháp quyền xã hội chủ nghĩa.",
  },
  {
    keywords: ["nhà nước pháp quyền", "nhà nước"],
    answer:
      "Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam là nhà nước của nhân dân, do nhân dân, vì nhân dân, quản lý xã hội bằng pháp luật, bảo đảm quyền con người, quyền công dân.",
  },
  {
    keywords: ["quyền lực nhà nước", "quyền lực"],
    answer:
      "Quyền lực nhà nước xã hội chủ nghĩa thuộc về nhân dân, được phân công, phối hợp và kiểm soát giữa các cơ quan lập pháp, hành pháp, tư pháp.",
  },
  {
    keywords: ["pháp luật", "luật"],
    answer:
      "Pháp luật là công cụ quan trọng để quản lý xã hội, bảo đảm công bằng, dân chủ và tiến bộ xã hội.",
  },
  {
    keywords: ["quyền con người", "quyền công dân"],
    answer:
      "Nhà nước pháp quyền xã hội chủ nghĩa bảo đảm và thúc đẩy quyền con người, quyền công dân, tạo điều kiện phát triển toàn diện cho mọi người.",
  },
  {
    keywords: ["bầu cử", "ứng cử"],
    answer:
      "Nhân dân có quyền bầu cử, ứng cử, tham gia quản lý nhà nước và xã hội, thể hiện bản chất dân chủ của chế độ xã hội chủ nghĩa.",
  },
  {
    keywords: ["kiểm soát quyền lực", "phân công quyền lực"],
    answer:
      "Phân công, phối hợp và kiểm soát quyền lực nhà nước là nguyên tắc quan trọng của nhà nước pháp quyền xã hội chủ nghĩa.",
  },
];

function getMarxLeninAnswer(input: string): string {
  const lower = input.toLowerCase();
  for (const qa of marxLeninQA) {
    if (qa.keywords.some((kw) => lower.includes(kw))) return qa.answer;
  }
  return "Xin hãy hỏi về các chủ đề trong giáo trình Marx-Lenin về dân chủ xã hội chủ nghĩa và nhà nước pháp quyền!";
}

const VoiceChatbot: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([]);
  const [listening, setListening] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  // Mô phỏng voice: chỉ hiển thị icon, không thực sự nhận diện giọng nói
  const handleVoice = () => {
    setListening(true);
    setTimeout(() => {
      setInput("Dân chủ là gì?");
      setListening(false);
    }, 1200);
  };

  // Google TTS API (Web Speech API)
  const speak = (text: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      setSpeaking(true);
      const utter = new window.SpeechSynthesisUtterance(text);
      utter.lang = "vi-VN";
      utter.rate = 1;
      utter.onend = () => setSpeaking(false);
      window.speechSynthesis.speak(utter);
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setTimeout(() => {
      const answer = getMarxLeninAnswer(input);
      setMessages((prev) => [...prev, { role: "bot", text: answer }]);
      speak(answer);
    }, 800);
    setInput("");
  };

  return (
    <motion.div
      className="w-full max-w-md bg-white/80 rounded-xl shadow-xl p-6 backdrop-blur border border-white/30"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <h2 className="text-xl font-bold mb-2 text-gray-800">
        Chatbot AI giáo trình Marx-Lenin
      </h2>
      <div className="h-48 overflow-y-auto flex flex-col gap-2 mb-4">
        {messages.length === 0 && (
          <div className="text-gray-500 text-center mt-8">
            Hãy hỏi về dân chủ, nhà nước pháp quyền...
          </div>
        )}
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            className={`rounded-lg px-3 py-2 max-w-[80%] text-sm ${
              msg.role === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-200 text-gray-800 self-start"
            }`}
            initial={{ opacity: 0, x: msg.role === "user" ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {msg.text}
            {msg.role === "bot" && idx === messages.length - 1 && speaking && (
              <span className="ml-2 animate-pulse text-blue-500">🔊</span>
            )}
          </motion.div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <button
          className={`p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition ${
            listening ? "animate-pulse" : ""
          }`}
          onClick={handleVoice}
          aria-label="Voice input"
        >
          <Mic className="w-5 h-5 text-gray-700" />
        </button>
        <input
          className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          placeholder="Nhập câu hỏi..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition text-white"
          onClick={handleSend}
          aria-label="Send"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

export default VoiceChatbot;

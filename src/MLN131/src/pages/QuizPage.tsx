import React, { useState } from "react";
import { motion } from "framer-motion";

interface QuizQuestion {
  question: string;
  options: string[];
  answer: number; // index trong options
  explanation: string;
}

const questions: QuizQuestion[] = [
  {
    question: "Dân chủ xã hội chủ nghĩa là gì?",
    options: [
      "Nền dân chủ do một nhóm người kiểm soát",
      "Nền dân chủ rộng rãi, quyền lực thuộc về nhân dân",
      "Chỉ dành cho cán bộ công chức",
      "Chỉ áp dụng ở thành phố lớn",
    ],
    answer: 1,
    explanation:
      "Dân chủ xã hội chủ nghĩa là nền dân chủ rộng rãi, bảo đảm quyền lực thực sự thuộc về nhân dân, do nhân dân, vì nhân dân.",
  },
  {
    question: "Nhà nước pháp quyền xã hội chủ nghĩa quản lý xã hội bằng gì?",
    options: [
      "Bằng pháp luật",
      "Bằng mệnh lệnh cá nhân",
      "Bằng truyền thống",
      "Bằng tôn giáo",
    ],
    answer: 0,
    explanation:
      "Nhà nước pháp quyền xã hội chủ nghĩa quản lý xã hội chủ yếu bằng pháp luật.",
  },
  {
    question: "Quyền lực nhà nước xã hội chủ nghĩa thuộc về ai?",
    options: [
      "Một cá nhân lãnh đạo",
      "Một nhóm thiểu số",
      "Nhân dân",
      "Quốc hội",
    ],
    answer: 2,
    explanation: "Quyền lực nhà nước xã hội chủ nghĩa thuộc về nhân dân.",
  },
  {
    question: "Một trong các nguyên tắc của nhà nước pháp quyền XHCN là gì?",
    options: [
      "Không cần kiểm soát quyền lực",
      "Phân công, phối hợp và kiểm soát quyền lực nhà nước",
      "Chỉ có lập pháp quan trọng",
      "Chỉ có hành pháp quan trọng",
    ],
    answer: 1,
    explanation:
      "Phân công, phối hợp và kiểm soát quyền lực nhà nước là nguyên tắc quan trọng của nhà nước pháp quyền XHCN.",
  },
  {
    question: "Dân chủ xã hội chủ nghĩa có đặc điểm gì nổi bật?",
    options: [
      "Chỉ dành cho một nhóm người",
      "Dân chủ rộng rãi cho toàn thể nhân dân",
      "Không bảo đảm quyền con người",
      "Không có pháp luật",
    ],
    answer: 1,
    explanation:
      "Dân chủ xã hội chủ nghĩa là dân chủ rộng rãi cho toàn thể nhân dân.",
  },
  {
    question: "Nhà nước pháp quyền XHCN bảo đảm điều gì?",
    options: [
      "Quyền con người, quyền công dân",
      "Chỉ quyền của cán bộ",
      "Chỉ quyền của lãnh đạo",
      "Không bảo đảm quyền gì",
    ],
    answer: 0,
    explanation:
      "Bảo đảm quyền con người, quyền công dân là nguyên tắc quan trọng của nhà nước pháp quyền XHCN.",
  },
  {
    question: "Cơ quan nào thực hiện quyền lập pháp ở Việt Nam?",
    options: ["Chính phủ", "Quốc hội", "Tòa án", "Chủ tịch nước"],
    answer: 1,
    explanation:
      "Quốc hội là cơ quan duy nhất thực hiện quyền lập pháp ở Việt Nam.",
  },
  {
    question: "Dân chủ xã hội chủ nghĩa được thực hiện thông qua đâu?",
    options: [
      "Nhà nước pháp quyền xã hội chủ nghĩa",
      "Cá nhân lãnh đạo",
      "Tổ chức phi chính phủ",
      "Chỉ qua truyền thống",
    ],
    answer: 0,
    explanation:
      "Dân chủ xã hội chủ nghĩa được thực hiện thông qua nhà nước pháp quyền xã hội chủ nghĩa.",
  },
  {
    question: "Một biểu hiện của dân chủ xã hội chủ nghĩa là gì?",
    options: [
      "Nhân dân tham gia quản lý nhà nước và xã hội",
      "Chỉ lãnh đạo quyết định",
      "Không có bầu cử",
      "Không có pháp luật",
    ],
    answer: 0,
    explanation:
      "Nhân dân tham gia quản lý nhà nước và xã hội là biểu hiện của dân chủ xã hội chủ nghĩa.",
  },
  {
    question: "Nhà nước pháp quyền XHCN có đặc điểm gì?",
    options: [
      "Không có pháp luật",
      "Quản lý xã hội bằng pháp luật, bảo đảm quyền con người",
      "Chỉ dựa vào truyền thống",
      "Không có kiểm soát quyền lực",
    ],
    answer: 1,
    explanation:
      "Nhà nước pháp quyền XHCN quản lý xã hội bằng pháp luật, bảo đảm quyền con người, quyền công dân.",
  },
  {
    question: "Dân chủ xã hội chủ nghĩa có vai trò gì?",
    options: [
      "Thúc đẩy sự phát triển công bằng, tiến bộ",
      "Chỉ bảo vệ quyền của lãnh đạo",
      "Không có vai trò gì",
      "Chỉ dành cho thành phố lớn",
    ],
    answer: 0,
    explanation:
      "Dân chủ xã hội chủ nghĩa thúc đẩy sự phát triển công bằng, tiến bộ cho toàn xã hội.",
  },
  {
    question: "Nhà nước pháp quyền XHCN có trách nhiệm gì với nhân dân?",
    options: [
      "Bảo vệ, phục vụ nhân dân",
      "Chỉ phục vụ lãnh đạo",
      "Không có trách nhiệm",
      "Chỉ phục vụ cán bộ",
    ],
    answer: 0,
    explanation:
      "Nhà nước pháp quyền XHCN có trách nhiệm bảo vệ, phục vụ nhân dân.",
  },
  {
    question: "Một trong các biểu hiện của dân chủ xã hội chủ nghĩa là gì?",
    options: [
      "Nhân dân bầu cử, ứng cử, tham gia quản lý xã hội",
      "Chỉ lãnh đạo quyết định",
      "Không có bầu cử",
      "Không có pháp luật",
    ],
    answer: 0,
    explanation:
      "Nhân dân bầu cử, ứng cử, tham gia quản lý xã hội là biểu hiện của dân chủ xã hội chủ nghĩa.",
  },
  {
    question: "Nhà nước pháp quyền XHCN có đặc điểm gì nổi bật?",
    options: [
      "Quyền lực nhà nước thuộc về nhân dân",
      "Chỉ thuộc về lãnh đạo",
      "Không có pháp luật",
      "Không bảo đảm quyền con người",
    ],
    answer: 0,
    explanation:
      "Quyền lực nhà nước thuộc về nhân dân là đặc điểm nổi bật của nhà nước pháp quyền XHCN.",
  },
  {
    question: "Dân chủ xã hội chủ nghĩa bảo đảm điều gì?",
    options: [
      "Quyền con người, quyền công dân",
      "Chỉ quyền của cán bộ",
      "Không bảo đảm quyền gì",
      "Chỉ quyền của lãnh đạo",
    ],
    answer: 0,
    explanation:
      "Dân chủ xã hội chủ nghĩa bảo đảm quyền con người, quyền công dân cho mọi người trong xã hội.",
  },
  {
    question: "Nhà nước pháp quyền XHCN có vai trò gì trong phát triển xã hội?",
    options: [
      "Thúc đẩy sự phát triển công bằng, tiến bộ",
      "Không có vai trò gì",
      "Chỉ phục vụ lãnh đạo",
      "Không bảo đảm quyền con người",
    ],
    answer: 0,
    explanation:
      "Nhà nước pháp quyền XHCN thúc đẩy sự phát triển công bằng, tiến bộ cho toàn xã hội.",
  },
];

const Quiz: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<null | number>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );

  const handleAnswer = (idx: number) => {
    setSelected(idx);
    setShowFeedback(true);
    setAnswers((prev) => {
      const arr = [...prev];
      arr[current] = idx;
      return arr;
    });
    if (idx === questions[current].answer) setScore((s) => s + 1);
  };

  const handleNext = () => {
    setSelected(null);
    setShowFeedback(false);
    setCurrent((c) => Math.min(c + 1, questions.length - 1));
  };

  const handlePrev = () => {
    setSelected(null);
    setShowFeedback(false);
    setCurrent((c) => Math.max(c - 1, 0));
  };

  const isAnswered = answers[current] !== null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f7ff] py-10 px-2">
      <motion.div
        className="w-full max-w-2xl bg-white/90 rounded-2xl shadow-xl p-6 md:p-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2a2e6e] via-[#6e7fdc] to-[#3a3f8f] mb-8 text-center drop-shadow">
          Quiz ôn tập lý thuyết
        </h2>
        {current < questions.length ? (
          <>
            <div className="text-lg font-medium mb-6 text-gray-800 text-center">
              Câu {current + 1}/{questions.length}:<br />
              <span className="font-semibold">
                {questions[current].question}
              </span>
            </div>
            <div className="flex flex-col gap-3 mb-6">
              {questions[current].options.map((opt, idx) => {
                const isSelected = selected === idx || answers[current] === idx;
                const isCorrect = idx === questions[current].answer;
                const showResult = showFeedback || isAnswered;
                let btnClass = "";
                if (showResult) {
                  if (isSelected && isCorrect)
                    btnClass = "bg-green-500 text-white border-green-600";
                  else if (isSelected && !isCorrect)
                    btnClass = "bg-red-500 text-white border-red-600";
                  else if (isCorrect)
                    btnClass = "bg-green-100 border-green-400 text-green-700";
                  else btnClass = "bg-blue-100 border-blue-300 text-blue-700";
                } else {
                  btnClass = isSelected
                    ? "bg-blue-200 border-blue-400 text-blue-900"
                    : "bg-blue-100 border-blue-300 text-blue-700 hover:bg-blue-200";
                }
                return (
                  <motion.button
                    key={idx}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full px-4 py-3 rounded-lg text-lg font-medium border-2 shadow transition-all text-left ${btnClass}`}
                    disabled={showResult}
                    onClick={() => handleAnswer(idx)}
                  >
                    {String.fromCharCode(65 + idx)}. {opt}
                  </motion.button>
                );
              })}
            </div>
            {(showFeedback || isAnswered) && (
              <motion.div
                className={`text-center text-lg font-semibold mb-4 ${
                  answers[current] === questions[current].answer
                    ? "text-green-600"
                    : "text-red-600"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {answers[current] === questions[current].answer
                  ? "Chính xác!"
                  : "Chưa đúng!"}
                <div className="text-gray-700 text-base mt-2 font-normal">
                  {questions[current].explanation}
                </div>
              </motion.div>
            )}
            <div className="flex justify-between mt-6">
              <button
                className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition disabled:opacity-50"
                onClick={handlePrev}
                disabled={current === 0}
              >
                Câu trước
              </button>
              <button
                className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
                onClick={handleNext}
                disabled={current === questions.length - 1}
              >
                Câu tiếp
              </button>
            </div>
          </>
        ) : (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-2xl font-bold text-blue-700 mb-2">
              Hoàn thành!
            </div>
            <div className="text-lg mb-4">
              Bạn đúng {score}/{questions.length} câu.
            </div>
            {/* Hiển thị các câu sai và giải thích */}
            {answers.some(
              (ans, idx) => ans !== null && ans !== questions[idx].answer
            ) && (
              <div className="mt-6 text-left max-w-xl mx-auto">
                <div className="font-semibold text-red-600 mb-2">
                  Các câu bạn trả lời sai, hãy lưu ý:
                </div>
                <ul className="space-y-4">
                  {questions.map((q, idx) =>
                    answers[idx] !== null && answers[idx] !== q.answer ? (
                      <li
                        key={idx}
                        className="bg-red-50 border-l-4 border-red-400 p-4 rounded"
                      >
                        <div className="font-medium text-gray-800 mb-1">
                          Câu {idx + 1}: {q.question}
                        </div>
                        <div className="text-gray-700 mb-1">
                          <span className="font-semibold">Đáp án đúng:</span>{" "}
                          {String.fromCharCode(65 + q.answer)}.{" "}
                          {q.options[q.answer]}
                        </div>
                        <div className="text-gray-600 text-sm italic">
                          {q.explanation}
                        </div>
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            )}
            <button
              className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              onClick={() => {
                setCurrent(0);
                setScore(0);
                setSelected(null);
                setShowFeedback(false);
                setAnswers(Array(questions.length).fill(null));
              }}
            >
              Làm lại Quiz
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Quiz;

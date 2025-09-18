export default function Footer() {
  return (
    <footer className="mt-16 text-center py-8 bg-[#8B0000] text-[#FFD700] shadow-inner border-t border-[#FFD700]/30 select-none">
      <div className="max-w-3xl mx-auto flex flex-col gap-2 items-center">
        <span className="text-lg font-bold tracking-widest uppercase">
          MLN131 - RedCore
        </span>
        <span className="italic text-[#FFD700]/80 text-base">
          “Không có lý luận cách mạng thì cũng không có phong trào cách mạng.”
        </span>
        <span className="text-xs mt-2 opacity-80">
          © 2025 Bộ môn Chủ nghĩa Mác - Lênin | Trình bày bởi nhóm RedCore
        </span>
      </div>
    </footer>
  );
}

// components/layout/Header.tsx
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";
import { Separator } from "../ui/separator";

const sections = [
  { id: "intro", label: "Giới thiệu" },
  { id: "part1", label: "Phần 1" },
  { id: "part2", label: "Phần 2" },
  { id: "conclusion", label: "Kết luận" },
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }
    const handler = () => {
      let found = "";
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            found = sec.id;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [location.pathname]);

  const handleNav = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 left-0 w-full bg-[#8B0000] text-[#FFD700] shadow z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-3">
        <div className="flex items-center gap-3 select-none">
          <span
            className="text-3xl font-extrabold tracking-widest uppercase drop-shadow-md"
            style={{ letterSpacing: 2 }}
          >
            MLN131 <span className="text-[#fff]">-</span>{" "}
            <span className="text-[#FFD700]">RedCore</span>
          </span>
        </div>
        {location.pathname === "/" ? (
          <NavigationMenu className="mt-3 md:mt-0">
            <NavigationMenuList className="gap-2">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => handleNav(sec.id)}
                  className={`px-4 py-2 rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFD700] ${
                    activeSection === sec.id
                      ? "bg-[#FFD700] text-[#8B0000] shadow"
                      : "hover:bg-[#FFD700]/20"
                  }`}
                  style={{ minWidth: 100 }}
                >
                  {sec.label}
                </button>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        ) : (
          <NavigationMenu className="mt-3 md:mt-0">
            <NavigationMenuList className="gap-2">
              <button
                onClick={() => navigate("/")}
                className={`px-4 py-2 rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFD700] ${
                  location.pathname === "/"
                    ? "bg-[#FFD700] text-[#8B0000] shadow"
                    : "hover:bg-[#FFD700]/20"
                }`}
                style={{ minWidth: 100 }}
              >
                Trang chủ
              </button>
            </NavigationMenuList>
          </NavigationMenu>
        )}
      </div>
      <Separator className="bg-[#FFD700]/40" />
    </header>
  );
}

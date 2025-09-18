import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import IntroSection from "../components/sections/IntroSection";
import Part1Section from "../components/sections/Part1Section";
import Part2Section from "../components/sections/Part2Section";
import ConclusionSection from "../components/sections/ConclusionSection";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <Header />
      <main>
        <IntroSection />
        <Part1Section />
        <Part2Section />
        <ConclusionSection />
      </main>
      <Footer />
    </div>
  );
}

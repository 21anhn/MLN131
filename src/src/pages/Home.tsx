import VideoSection from "../components/common/VideoSection";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <VideoSection id="intro" videoSrc="/videos/intro.mp4" from="left">
        <h2 className="text-4xl font-bold mb-4">Giới thiệu</h2>
        <p>Nội dung mở đầu về chủ nghĩa Mác - Lênin...</p>
      </VideoSection>

      <VideoSection id="part1" videoSrc="/videos/part1.mp4" from="right">
        <h2 className="text-4xl font-bold mb-4">Phần 1: Nhà nước XHCN</h2>
        <p>Sự ra đời, bản chất và chức năng của Nhà nước XHCN...</p>
      </VideoSection>

      <VideoSection id="part2" videoSrc="/videos/part2.mp4" from="left">
        <h2 className="text-4xl font-bold mb-4">Phần 2: Dân chủ XHCN</h2>
        <p>Mối quan hệ giữa dân chủ XHCN và Nhà nước pháp quyền...</p>
      </VideoSection>

      <VideoSection
        id="conclusion"
        videoSrc="/videos/conclusion.mp4"
        from="right"
      >
        <h2 className="text-4xl font-bold mb-4">Kết luận</h2>
        <p>Tổng kết tư tưởng Mác - Lênin và ý nghĩa hiện nay...</p>
      </VideoSection>
    </div>
  );
}

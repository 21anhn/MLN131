import Accordion from "../ui/Accordion";

export default function Part1Section() {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Phần 1: Nhà nước XHCN</h2>

      <Accordion title="Sự ra đời của Nhà nước XHCN">
        <ul className="list-disc ml-6">
          <li>
            Nguyên nhân khách quan: Mâu thuẫn giữa lực lượng sản xuất và quan hệ
            sản xuất tư bản.
          </li>
          <li>
            Vai trò cách mạng & Đảng Cộng sản: Lãnh đạo cuộc cách mạng vô sản.
          </li>
          <li>
            Kết luận: Nhà nước XHCN ra đời dưới sự lãnh đạo của Đảng Cộng sản,
            đại diện cho ý chí nhân dân.
          </li>
        </ul>
      </Accordion>

      <Accordion title="Bản chất của Nhà nước XHCN">
        <ul className="list-disc ml-6">
          <li>Chính trị: Thống trị của giai cấp công nhân.</li>
          <li>
            Kinh tế: Sở hữu xã hội về tư liệu sản xuất, quản lý kinh tế - xã
            hội.
          </li>
          <li>
            Văn hóa - xã hội: Lý luận Mác - Lênin, giá trị văn hóa tiên tiến.
          </li>
        </ul>
      </Accordion>

      <Accordion title="Chức năng của Nhà nước XHCN">
        <ul className="list-disc ml-6">
          <li>Chức năng giai cấp (trấn áp) và chức năng xã hội (xây dựng).</li>
          <li>Chủ yếu là tổ chức và xây dựng xã hội mới.</li>
        </ul>
      </Accordion>

      <Accordion title="Mối quan hệ giữa Dân chủ XHCN và Nhà nước XHCN">
        <ul className="list-disc ml-6">
          <li>Dân chủ XHCN là nền tảng của Nhà nước XHCN.</li>
          <li>Nhà nước XHCN là công cụ thực thi quyền làm chủ của nhân dân.</li>
        </ul>
      </Accordion>
    </section>
  );
}

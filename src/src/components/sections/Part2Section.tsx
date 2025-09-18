import Accordion from "../ui/Accordion";

export default function Part2Section() {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">
        Phần 2: Dân chủ XHCN & Nhà nước pháp quyền XHCN ở Việt Nam
      </h2>

      <Accordion title="Sự ra đời và phát triển nền Dân chủ XHCN ở Việt Nam">
        <ul className="list-disc ml-6">
          <li>
            Giai đoạn đầu (sau 1945): Chế độ dân chủ nhân dân sau Cách mạng
            Tháng Tám 1945.
          </li>
          <li>
            Giai đoạn trước Đổi mới (trước 1986):
            <ul className="list-disc ml-6">
              <li>Sau 1976, tên nước là Cộng hòa XHCN Việt Nam.</li>
              <li>
                Khái niệm: "xây dựng chế độ làm chủ tập thể XHCN" gắn với chuyên
                chính vô sản.
              </li>
              <li>
                Bản chất và mối quan hệ với nhà nước pháp quyền XHCN chưa rõ
                ràng.
              </li>
            </ul>
          </li>
        </ul>
      </Accordion>
    </section>
  );
}

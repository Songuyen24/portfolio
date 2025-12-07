# PORTFOLIO PROJECT FLOW

## 1. SITEMAP & USER FLOW (Luồng người dùng)
Đây là cách người dùng sẽ lướt qua trang web của bạn (Single Page Application - SPA).

[ TRANG CHỦ ]
    │
    ├── 1. Hero Section (Đã làm)
    │   └── Mục tiêu: Gây ấn tượng đầu tiên (Tên + Vị trí + Nút CTA).
    │   └── Hành động: Click "Liên hệ" -> Cuộn xuống Contact.
    │
    ├── 2. About Me (Về tôi)
    │   └── Mục tiêu: Kể câu chuyện cá nhân, học vấn.
    │   └── Nội dung: Ảnh chân dung + Giới thiệu ngắn + Timeline học tập.
    │
    ├── 3. Tech Stack / Skills (Kỹ năng)
    │   └── Mục tiêu: Show logo các công nghệ đã biết (React, Next.js, Node...).
    │   └── Hiệu ứng: Icon trôi hoặc Grid layout.
    │
    ├── 4. Featured Projects (Dự án tiêu biểu - QUAN TRỌNG NHẤT)
    │   └── Layout: Dạng lưới (Grid Cards).
    │   └── Mỗi Card gồm: Ảnh preview, Tên dự án, Công nghệ sử dụng, Link Demo, Link GitHub.
    │   └── Hành động: Hover vào card -> Card nổi lên -> Click mở link.
    │
    └── 5. Contact (Liên hệ)
        └── Mục tiêu: Để lại thông tin hoặc link Social.
        └── Form: Tên, Email, Tin nhắn (Gửi qua EmailJS hoặc Formspree).
        └── Footer: Copyright + Link Facebook/LinkedIn/GitHub.

---

## 2. COMPONENT ARCHITECTURE (Cấu trúc File)
Cách chia nhỏ file trong Next.js để dễ quản lý code.

src/
├── app/
│   ├── layout.tsx       (Chứa Navbar cố định + Footer)
│   └── page.tsx         (Trang chủ - Nơi ghép các section lại)
│
├── components/
│   ├── ui/              (Các component nhỏ lẻ dùng chung)
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   │
│   ├── Navbar.tsx       (Thanh điều hướng: Home, About, Projects...)
│   ├── Hero.tsx         (Xong)
│   ├── About.tsx        (Chưa làm)
│   ├── Skills.tsx       (Chưa làm)
│   ├── Projects.tsx     (Chưa làm)
│   ├── Contact.tsx      (Chưa làm)
│   └── Footer.tsx       (Chưa làm)
│
└── public/              (Chứa tài nguyên tĩnh)
    ├── images/          (Avatar, ảnh chụp dự án)
    └── cv.pdf           (File CV tải về)

---

## 3. DEVELOPMENT ROADMAP (Các bước thực hiện)

### Phase 1: Setup & Hero (Đã xong)
- [x] Khởi tạo Next.js + Tailwind.
- [x] Cài đặt Framer Motion, Icons.
- [x] Code xong Hero Section.

### Phase 2: Navigation (Bước tiếp theo)
- [x] Tạo `Navbar.tsx`:
    - Dùng `position: fixed` để dính trên đầu trang.
    - Có hiệu ứng đổi màu nền khi cuộn trang (Glassmorphism).
    - Link trỏ tới các ID (ví dụ: `#about`, `#projects`).

### Phase 3: Content Sections
- [x] Tạo `About.tsx`: Layout chia 2 cột (Ảnh - Chữ).
- [x] Tạo `Skills.tsx`: Tìm logo SVG của các công nghệ.
- [x] Tạo `Projects.tsx`: Tạo mảng data chứa thông tin dự án giả lập (`const projects = [...]`) rồi dùng map để render ra giao diện.

### Phase 4: Contact & Polish
- [x] Tạo `Contact.tsx`: Thiết kế form đẹp.
- [x] Responsive Check: Kiểm tra hiển thị trên điện thoại (Mobile first).
- [ ] Dark Mode: Cấu hình nút chuyển Sáng/Tối.

---

## 4. DATA STRUCTURE (Cấu trúc dữ liệu mẫu cho Project)
Ví dụ dữ liệu sẽ dùng trong phần `Projects.tsx`:

```typescript
// Interface cho dự án
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[]; // VD: ["React", "NodeJS"]
  imageUrl: string;
  demoUrl: string;
  repoUrl: string;
}
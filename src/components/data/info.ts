// 1. Định nghĩa kiểu dữ liệu cho phần Học vấn (Mới)
export interface Education {
    school: string;
    major: string;      // Chuyên ngành
    gpa: string;        // Để dạng chuỗi cho linh hoạt (vd: "3.5/4.0" hoặc "Gioi")
    period: string;     // Niên khóa (vd: 2022 - 2026)
}

export interface SocialLink {
    platform: 'Facebook' | 'GitHub' | 'LinkedIn' | 'Instagram' | 'Twitter';
    url: string;
    icon?: string;
}

// 2. Cập nhật Interface chính
export interface PersonalInfo {
    fullName: string;
    role: string;
    email: string;
    phone: string;
    address: string;
    avatarUrl: string;
    cvUrl: string;
    aboutMe: string;
    socials: SocialLink[];
    education: Education[]; // Thêm mảng Education
}

// 3. Cập nhật Dữ liệu
export const PERSONAL_INFO: PersonalInfo = {
    fullName: "Nguyễn Phúc Sơn", // Tên của bạn
    role: "Frontend Developer",
    email: "son.nguyen@example.com", // Thay email thật
    phone: "0909 123 456",
    address: "TP. Hồ Chí Minh",
    avatarUrl: "/images/avatar.jpg",
    cvUrl: "/files/cv.pdf",
    aboutMe: "Sinh viên CNTT đam mê lập trình web và xây dựng giao diện người dùng hiện đại.",

    // --- PHẦN MỚI THÊM ---
    education: [
        {
            school: "Đại học Công nghệ TP.HCM (HUTECH)", // Thay tên trường của bạn
            major: "Công nghệ thông tin",
            gpa: "3.2/4.0", // Điền GPA của bạn
            period: "2022 - 2026",
        },
    ],
    // ---------------------

    socials: [
        {
            platform: "GitHub",
            url: "https://github.com/Songuyen24",
        },
        {
            platform: "Facebook",
            url: "https://facebook.com/yourprofile",
        },
    ],
};
// Định nghĩa kiểu dữ liệu cho một kỹ năng
export interface SkillItem {
    name: string;
    level?: string; // Tùy chọn: "Basic", "Advanced", "Expert" hoặc số %
    icon?: string;  // Tên file ảnh trong public/icons/ (nếu có)
}

// Định nghĩa kiểu dữ liệu cho một nhóm kỹ năng (Category)
export interface SkillCategory {
    title: string;
    items: SkillItem[];
}

// Dữ liệu thực tế
export const SKILLS_DATA: SkillCategory[] = [
    {
        title: "Frontend Development",
        items: [
            { name: "React.js" },
            { name: "Next.js" },
            { name: "TypeScript" },
            { name: "Tailwind CSS" },
            { name: "Framer Motion" },
            { name: "HTML5 / CSS3" },
        ],
    },
    {
        title: "Backend & Database",
        items: [
            { name: "Node.js" },
            { name: "Express" },
            { name: "PostgreSQL" },
            { name: "Prisma ORM" },
            { name: "MongoDB" },
        ],
    },
    {
        title: "Tools & DevOps",
        items: [
            { name: "Git / GitHub" },
            { name: "VS Code" },
            { name: "Figma" },
            { name: "Vercel" },
            { name: "Postman" },
        ],
    },
];
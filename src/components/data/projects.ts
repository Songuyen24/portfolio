// src/data/projects.ts

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    gitUrl: string;
    previewUrl: string;
}

export const PROJECTS_DATA: Project[] = [
    {
        id: 1,
        title: "Website Portfolio",
        description: "Trang web cá nhân sử dụng Next.js và Tailwind CSS",
        image: "/images/portfolio.png",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        gitUrl: "https://github.com/Songuyen24/portfolio",
        previewUrl: "https://portfolio.com",
    },
    {
        id: 2,
        title: "E-commerce Shop",
        description: "Ứng dụng mua sắm trực tuyến với tính năng giỏ hàng",
        image: "/images/shop.png",
        tags: ["React", "Redux", "Node.js"],
        gitUrl: "https://github.com/...",
        previewUrl: "https://shop.com",
    },
];
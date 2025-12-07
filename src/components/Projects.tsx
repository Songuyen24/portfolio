'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import Image from 'next/image';

// Interface cho dự án (theo yêu cầu PROJECT_FLOW.md)
interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    imageUrl: string; // Sẽ dùng placeholder color nếu chưa có ảnh
    demoUrl: string;
    repoUrl: string;
}

const projectsData: Project[] = [
    {
        id: 1,
        title: "E-Commerce Dashboard",
        description: "Một trang quản trị bán hàng đầy đủ tính năng với biểu đồ thống kê, quản lý đơn hàng và sản phẩm.",
        tags: ["Next.js", "Tailwind HTML", "Chart.js"],
        imageUrl: "/images/project1.jpg",
        demoUrl: "#",
        repoUrl: "#"
    },
    {
        id: 2,
        title: "Social Media App",
        description: "Mạng xã hội thu nhỏ cho phép đăng bài, bình luận và tương tác realtime.",
        tags: ["React", "Node.js", "Socket.io"],
        imageUrl: "/images/project2.jpg",
        demoUrl: "#",
        repoUrl: "#"
    },
    {
        id: 3,
        title: "Task Management Tool",
        description: "Ứng dụng quản lý công việc cá nhân với tính năng Drag & Drop, tối ưu hiệu suất làm việc.",
        tags: ["Vue.js", "Firebase", "DnD"],
        imageUrl: "/images/project3.jpg",
        demoUrl: "#",
        repoUrl: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 lg:py-32 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Dự Án Tiêu Biểu
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Một số dự án cá nhân mà mình tâm đắc nhất trong quá trình học tập và làm việc.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col"
                        >
                            {/* Image Placeholder Area */}
                            <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden group">
                                {/* Overlay khi hover */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <a href={project.demoUrl} className="p-2 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform" title="Live Demo">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.repoUrl} className="p-2 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform" title="View Code">
                                        <Github size={20} />
                                    </a>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-80 font-bold text-xl">
                                    {project.title} Preview
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

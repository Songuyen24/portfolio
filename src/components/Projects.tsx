'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS_DATA } from './data/projects';

const Projects = () => {
    return (
        <section id="projects" className="py-20 lg:py-32 bg-[var(--background)]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--accent)] mb-4 uppercase tracking-widest pixel-text-shadow">
                        Dự Án Tiêu Biểu
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto font-bold">
                        Những dự án cá nhân tâm đắc.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {PROJECTS_DATA.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="w-full max-w-sm bg-white text-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col"
                        >
                            {/* Image Placeholder Area */}
                            <div className="relative h-48 bg-[var(--primary)] border-b-4 border-black overflow-hidden group">
                                {/* Scanlines low opacity */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>

                                {/* Overlay khi hover */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-none flex items-center justify-center gap-4 z-20">
                                    <a href={project.previewUrl} className="p-2 bg-white border-2 border-black text-black hover:bg-[var(--accent)] transition-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1" title="Live Demo">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.gitUrl} className="p-2 bg-white border-2 border-black text-black hover:bg-[var(--accent)] transition-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1" title="View Code">
                                        <Github size={20} />
                                    </a>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl uppercase tracking-widest pixel-text-shadow">
                                    {project.title}
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-black mb-2 uppercase">
                                    {project.title}
                                </h3>
                                <p className="text-gray-700 text-sm mb-4 font-bold leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-[var(--accent)] text-black text-xs font-bold border-2 border-black">
                                            {tag.toUpperCase()}
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

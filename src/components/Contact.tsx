'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { PERSONAL_INFO } from './data/info';

const Contact = () => {
    return (
        <section id="contact" className="py-20 lg:py-32 bg-[var(--background)]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto pixel-box p-8 bg-white text-black"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-widest pixel-text-shadow text-[var(--primary)]">
                            Liên Hệ
                        </h2>
                        <p className="text-gray-600 text-lg font-bold">
                            Đừng ngần ngại liên lạc với mình!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Thông tin liên hệ */}
                        <div className="space-y-8">
                            <h3 className="text-xl font-bold mb-6 uppercase border-b-4 border-black inline-block pb-2">
                                Thông tin
                            </h3>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[var(--secondary)] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <Mail size={24} className="text-black" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Email</h4>
                                    <p className="text-gray-600 font-bold text-sm">{PERSONAL_INFO.email}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[var(--secondary)] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <Phone size={24} className="text-black" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Điện thoại</h4>
                                    <p className="text-gray-600 font-bold text-sm">{PERSONAL_INFO.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[var(--secondary)] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <MapPin size={24} className="text-black" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Địa chỉ</h4>
                                    <p className="text-gray-600 font-bold text-sm">{PERSONAL_INFO.address}</p>
                                </div>
                            </div>
                        </div>

                        {/* Form liên hệ */}
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-black mb-2 uppercase">
                                    Họ và tên
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 border-4 border-black bg-gray-100 text-black focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all font-bold"
                                    placeholder="YOUR NAME"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-black mb-2 uppercase">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 border-4 border-black bg-gray-100 text-black focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all font-bold"
                                    placeholder="EMAIL@EXAMPLE.COM"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-black mb-2 uppercase">
                                    Tin nhắn
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 border-4 border-black bg-gray-100 text-black focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all resize-none font-bold"
                                    placeholder="INSERT COIN TO CONTINUE..."
                                />
                            </div>

                            <button
                                type="button"
                                className="w-full py-3 px-6 pixel-btn font-bold flex items-center justify-center gap-2"
                            >
                                Gửi tin nhắn <Send size={20} />
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

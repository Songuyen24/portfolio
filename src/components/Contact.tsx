'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { PERSONAL_INFO } from './data/info';

const Contact = () => {
    return (
        <section id="contact" className="py-20 lg:py-32 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Liên Hệ
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                            Đừng ngần ngại liên lạc với mình để trao đổi công việc hoặc chỉ đơn giản là say hi! 👋
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Thông tin liên hệ */}
                        <div className="space-y-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                                Thông tin cá nhân
                            </h3>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                                    <p className="text-gray-600 dark:text-gray-400">{PERSONAL_INFO.email}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white">Điện thoại</h4>
                                    <p className="text-gray-600 dark:text-gray-400">{PERSONAL_INFO.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white">Địa chỉ</h4>
                                    <p className="text-gray-600 dark:text-gray-400">{PERSONAL_INFO.address}</p>
                                </div>
                            </div>
                        </div>

                        {/* Form liên hệ (Demo UI only) */}
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Họ và tên
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                    placeholder="Nhập tên của bạn"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                    placeholder="name@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Tin nhắn
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                                    placeholder="Nội dung tin nhắn..."
                                />
                            </div>

                            <button
                                type="button"
                                className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors"
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

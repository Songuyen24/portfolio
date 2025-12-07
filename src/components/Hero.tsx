'use client'; // Bắt buộc dòng này vì chúng ta dùng animation và tương tác client

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Download, ArrowRightCircle } from 'lucide-react';
import { PERSONAL_INFO } from './data/info';

const Hero = () => {
  // Cấu hình animation cho container cha (xuất hiện từ từ)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }, // Các con sẽ xuất hiện cách nhau 0.3s
    },
  };

  // Cấu hình animation cho các phần tử con (trượt từ dưới lên)
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring' as const, stiffness: 100 } },
  };

  return (
    <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* --- Cột bên trái: Nội dung chữ --- */}
          <motion.div className="col-span-1 lg:col-span-7 flex flex-col gap-6" variants={itemVariants}>
            {/* Lời chào */}
            <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400">
              👋 Xin chào, mình là
            </h2>

            {/* Tên và Hiệu ứng gõ chữ */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              {PERSONAL_INFO.fullName}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                I'm a{' '}
                <TypeAnimation
                  sequence={[
                    PERSONAL_INFO.role, // Sử dụng role từ data
                    2000,
                    'React Enthusiast.',
                    2000,
                    'UI/UX Lover.',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity} // Lặp vô tận
                />
              </span>
            </h1>

            {/* Mô tả ngắn */}
            <p className="text-lg text-gray-600 dark:text-gray-300 md:w-4/5 leading-relaxed">
              {PERSONAL_INFO.aboutMe}
            </p>

            {/* Nút kêu gọi hành động (CTA Buttons) */}
            <div className="flex flex-wrap gap-4 mt-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
              >
                Liên hệ ngay <ArrowRightCircle size={20} />
              </motion.a>

              <motion.a
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-full font-medium hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
              >
                Tải CV <Download size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* --- Cột bên phải: Ảnh đại diện --- */}
          <motion.div className="col-span-1 lg:col-span-5" variants={itemVariants}>
            {/* Placeholder cho ảnh - Hãy thay ảnh thật của bạn vào đây */}
            <div className="relative w-full aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 shadow-2xl border-4 border-white dark:border-gray-700 rotate-3 hover:rotate-0 transition-all duration-500">
              <Image
                src={PERSONAL_INFO.avatarUrl}
                alt={`${PERSONAL_INFO.fullName} Portrait`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
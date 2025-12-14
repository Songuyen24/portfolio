'use client';

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Download, ArrowRightCircle } from 'lucide-react';
import { PERSONAL_INFO } from './data/info';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring' as const, stiffness: 100 } },
  };

  return (
    <section className="py-20 lg:py-32 overflow-hidden bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* --- Cột bên trái: Nội dung chữ --- */}
          <motion.div className="col-span-1 lg:col-span-7 flex flex-col gap-6" variants={itemVariants}>
            <h2 className="text-xl md:text-2xl font-bold text-[var(--secondary)] glitch-effect">
              👋 HELLO WORLD, I AM
            </h2>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight pixel-text-shadow">
              {PERSONAL_INFO.fullName}
              <br />
              <span className="text-[var(--primary)]">
                I'm a{' '}
                <TypeAnimation
                  sequence={[
                    PERSONAL_INFO.role,
                    2000,
                    'PIXEL ARTIST.',
                    2000,
                    'REACT DEV.',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor={true}
                  style={{ display: 'inline-block', textShadow: '4px 4px 0px black' }}
                />
              </span>
            </h1>

            <p className="text-lg text-gray-300 md:w-4/5 leading-relaxed font-bold border-l-4 border-[var(--accent)] pl-4">
              {PERSONAL_INFO.aboutMe}
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pixel-btn text-white px-8 py-3 flex items-center gap-2 font-bold no-underline"
              >
                START GAME <ArrowRightCircle size={20} />
              </motion.a>

              <motion.a
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black border-4 border-black px-8 py-3 flex items-center gap-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
              >
                DOWNLOAD CV <Download size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* --- Cột bên phải: Ảnh đại diện --- */}
          <motion.div className="col-span-1 lg:col-span-5" variants={itemVariants}>
            <div className="relative w-full aspect-square lg:aspect-[4/5] bg-[var(--secondary)] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              {/* Scanline effect overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
              <Image
                src={PERSONAL_INFO.avatarUrl}
                alt={`${PERSONAL_INFO.fullName} Portrait`}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
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

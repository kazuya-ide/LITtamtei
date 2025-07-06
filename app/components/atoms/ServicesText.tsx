"use client";
import React from 'react';
import { motion } from 'framer-motion';

const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2 * i,
    },
  }),
};

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
};

interface ServicesTextProps {
  titleText: string;
  subtitleText: string;
}

const ServicesText: React.FC<ServicesTextProps> = ({ titleText, subtitleText }) => {
  return (
    <div className="text-center">
      <motion.h1
        className="
          text-white text-[2em] mb-1 overflow-hidden
          flex justify-center items-center
        "
        variants={sentenceVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        custom={1}
      >
        {titleText.split('').map((char, index) => (
          <motion.span
            key={char + '-' + index}
            variants={letterVariants}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        className="
          text-yellow-400 text-[1em] mb-[5%] overflow-hidden
          flex justify-center items-center
        "
        variants={sentenceVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        custom={2}
      >
        {subtitleText.split('').map((char, index) => (
          <motion.span
            key={char + '-' + index}
            variants={letterVariants}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

export default ServicesText;

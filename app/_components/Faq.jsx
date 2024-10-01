"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "What is ConnecSpace?",
    answer:
      "ConnecSpace is a real-time collaboration platform designed to enhance teamwork by providing customizable workspaces and integrated communication tools.",
  },
  {
    question: "How can I use ConnecSpace for my team?",
    answer:
      "Simply sign up, create a workspace, invite team members, and start collaborating in real-time. You can brainstorm, share ideas, and track progress all in one place.",
  },
  {
    question: "What features does ConnecSpace offer?",
    answer:
      "ConnecSpace offers real-time collaboration, customizable workspaces, integrated communication tools, file sharing, and live commenting to boost team productivity.",
  },
  {
    question: "Is ConnecSpace secure?",
    answer:
      "Yes, ConnecSpace ensures data security through encrypted communication, secure authentication, and regular backups to safeguard your team's information.",
  },
];

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="mb-4 relative overflow-hidden rounded-lg"
    >
      <motion.div
        className="absolute inset-0 bg-black"
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.button
        className="w-full text-left p-4 flex justify-between items-center relative z-10"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.span
          className="text-xl font-semibold"
          animate={{ color: isOpen ? "#ffffff" : "#e0e0e0" }}
          transition={{ duration: 0.3 }}
        >
          {question}
        </motion.span>
        <motion.div
          initial={false}
          animate={{
            rotate: isOpen ? 45 : 0,
            color: isOpen ? "#ffffff" : "#e0e0e0",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="p-4 relative z-10"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FloatingParticle = ({ delay }) => (
  <motion.div
    className="absolute w-1 h-1 bg-blue-500 rounded-full"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
      y: [0, -100],
      x: [-20, 20],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
      delay: delay,
    }}
  />
);

export default function SmoothFAQ() {
  return (
    <div className="bg-black text-white py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.1} />
        ))}
      </div>
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} index={index} />
        ))}
      </div>
    </div>
  );
}

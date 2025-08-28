"use client";
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-16 max-w-3xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-lg text-gray-300 mb-6"
      >
        Full-stack developer & data analyst with experience in ERP systems, ML-driven apps, and sleek frontends. Migrated Yugrow Pharmacy ERP from legacy PHP to PHP 8.2+, rebuilt hosting on DigitalOcean. Delivered AI-driven tools: email analyzers, chatbots, WhatsApp integrations. Freelance web developer (2-wheeler accessories e-commerce), built REST APIs, high-performance Next.js frontends, and automation agents. AI/ML work: trained models for diabetes prediction, house price prediction, sentiment analysis, and breast cancer classification. Certified by IBM, ISRO, HackerRank, ISC2, Cognitive Class. Currently pursuing Masters in Big Data Analytics, specialized in AI/ML.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="flex flex-col md:flex-row gap-6 justify-center items-center"
      >
        <div className="bg-white/10 rounded-xl p-6 shadow-lg w-full md:w-1/2">
          <h3 className="font-semibold text-purple-300 mb-2">Journey</h3>
          <ul className="text-left text-gray-300 text-sm list-disc pl-5">
            <li>HR → ERP Developer → Data Analyst → Full-stack & ML</li>
            <li>Fun: Sketching, FIFA, COD, AI blogs</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

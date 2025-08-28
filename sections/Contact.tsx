"use client";
import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker, HiBriefcase, HiUser, HiAtSymbol, HiChatAlt } from 'react-icons/hi';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';

import { useState } from 'react';

export default function Contact() {
  function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
    const [submitted, setSubmitted] = useState(false);

    function validate() {
      const newErrors: { name?: string; email?: string; message?: string } = {};
      if (!name.trim()) newErrors.name = "Name is required.";
      if (!email.trim()) newErrors.email = "Email is required.";
      else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Invalid email address.";
      if (!message.trim()) newErrors.message = "Message is required.";
      return newErrors;
    }

    function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
      const validationErrors = validate();
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length === 0) {
        setSubmitted(true);
        // Here you would handle the actual form submission, e.g. send to API
      } else {
        setSubmitted(false);
      }
    }

    return (
      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              <HiUser className="h-5 w-5" />
            </span>
            <input
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              className={`w-full pl-11 pr-4 py-3 bg-gray-800/50 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500/40 transition-colors`}
              placeholder="Your name"
            />
          </div>
          {errors.name && <div className="text-red-400 text-xs mt-1">{errors.name}</div>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              <HiAtSymbol className="h-5 w-5" />
            </span>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className={`w-full pl-11 pr-4 py-3 bg-gray-800/50 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500/40 transition-colors`}
              placeholder="your.email@example.com"
            />
          </div>
          {errors.email && <div className="text-red-400 text-xs mt-1">{errors.email}</div>}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute top-3 left-0 pl-3 flex items-start text-gray-400">
              <HiChatAlt className="h-5 w-5 mt-1" />
            </span>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={e => setMessage(e.target.value)}
              className={`w-full pl-11 pr-4 py-3 bg-gray-800/50 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500/40 transition-colors resize-none`}
              placeholder="Tell me about your project..."
            />
          </div>
          {errors.message && <div className="text-red-400 text-xs mt-1">{errors.message}</div>}
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="cursor-target relative overflow-hidden group w-full bg-gradient-to-r from-[#ff6ec7] via-[#a855f7] to-[#ff8c42] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
        >
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
          Send Message
        </motion.button>
        {submitted && (
          <div className="text-green-400 text-center mt-4">Thank you! Your message has been sent.</div>
        )}
      </form>
    );
  }
  return (
    <section id="contact" className="relative py-20 px-6 min-h-screen bg-black overflow-hidden">
      {/* Background Gradient (simplified) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Let's <span className="italic font-serif bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mb-2 opacity-80"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info (Gradient Card) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative rounded-3xl p-[1px] bg-gradient-to-r from-violet-500/25 to-fuchsia-500/25"
          >
            <div className="relative bg-gray-900/60 backdrop-blur-lg border border-gray-800/70 rounded-3xl p-8 space-y-8 overflow-hidden">
              {/* subtle corner glow */}
              <div className="pointer-events-none absolute -top-16 -left-16 w-56 h-56 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/0 rounded-full blur-3xl" />
              <div>
                <h3 className="text-2xl font-bold mb-3">Get in Touch</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mb-4 opacity-80" />
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center">
                      <HiMail className="text-white text-xl" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Email</div>
                      <div className="text-white">hello@visheshsanghvi.in</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#ff6ec7] via-[#a855f7] to-[#ff8c42] rounded-full flex items-center justify-center">
                      <HiLocationMarker className="text-white text-xl" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Location</div>
                      <div className="text-white">India (Remote Available)</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#ff6ec7] via-[#a855f7] to-[#ff8c42] rounded-full flex items-center justify-center">
                      <HiBriefcase className="text-white text-xl" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Availability</div>
                      <div className="text-white">Open to new opportunities</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold mb-2">Follow Me</h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mb-3 opacity-70" />
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/visheshsanghvi"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-900/40 border border-gray-700 hover:bg-gray-800/60 hover:border-transparent shadow-sm hover:shadow-purple-500/20 transition-all"
                  >
                    <FaGithub className="text-xl text-white group-hover:scale-110 transition-transform" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/visheshsanghvi"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-[#0a0f14]/60 border border-[#0077B5]/30 hover:bg-[#0a66c2]/20 hover:border-[#0a66c2]/40 transition-all"
                  >
                    <FaLinkedinIn className="text-xl text-[#0077B5] group-hover:scale-110 transition-transform" />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com/visheshsanghvi"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-[#0b1114]/60 border border-[#1DA1F2]/30 hover:bg-[#1DA1F2]/20 hover:border-[#1DA1F2]/40 transition-all"
                  >
                    <FaTwitter className="text-xl text-[#1DA1F2] group-hover:scale-110 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative rounded-3xl p-[1px] bg-gradient-to-r from-[#ff6ec7]/30 via-[#a855f7]/30 to-[#ff8c42]/30"
          >
            <div className="relative bg-gray-900/60 backdrop-blur-lg border border-gray-800/70 rounded-3xl p-10 shadow-2xl overflow-hidden">
              {/* subtle corner glow */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-tr from-fuchsia-500/20 to-transparent rounded-full blur-3xl" />
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

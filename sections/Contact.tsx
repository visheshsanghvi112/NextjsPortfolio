"use client";
import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker, HiBriefcase, HiUser, HiAtSymbol, HiChatAlt } from 'react-icons/hi';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';
import RotatingBadge from '../components/RotatingBadge';

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
        // Here you would handle the actual form submission
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
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              <HiUser className="h-5 w-5" />
            </span>
            <input
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              className={`w-full pl-11 pr-4 py-3 bg-gray-800/50 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 hover:bg-gray-800/70 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 hover:ring-1 hover:ring-purple-500/30 transition-all duration-300`}
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
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              <HiAtSymbol className="h-5 w-5" />
            </span>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className={`w-full pl-11 pr-4 py-3 bg-gray-800/50 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 hover:bg-gray-800/70 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 hover:ring-1 hover:ring-purple-500/30 transition-all duration-300`}
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
            <span className="absolute top-3 left-0 pl-3 flex items-start text-gray-400">
              <HiChatAlt className="h-5 w-5 mt-1" />
            </span>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={e => setMessage(e.target.value)}
              className={`w-full pl-11 pr-4 py-3 bg-gray-800/50 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 hover:bg-gray-800/70 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 hover:ring-1 hover:ring-purple-500/30 transition-all duration-300 resize-none`}
              placeholder="Tell me about your project..."
            />
          </div>
          {errors.message && <div className="text-red-400 text-xs mt-1">{errors.message}</div>}
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:shadow-2xl border border-transparent hover:border-purple-400/50 hover:ring-2 hover:ring-purple-500/30"
        >
          Send Message
        </motion.button>

        {submitted && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-400 text-center mt-4"
          >
            Thank you! Your message has been sent.
          </motion.div>
        )}
      </form>
    );
  }

  return (
    <section id="contact" className="relative py-20 px-6 min-h-screen bg-black">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <RotatingBadge />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:bg-gray-900/70 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20 hover:ring-1 hover:ring-purple-500/20 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              {[
                { 
                  icon: HiMail, 
                  label: "Email", 
                  value: "visheshsanghvi112@gmail.com",
                  color: "text-blue-400",
                  bg: "bg-blue-500/10"
                },
                { 
                  icon: HiLocationMarker, 
                  label: "Location", 
                  value: "India (Remote Available)",
                  color: "text-green-400",
                  bg: "bg-green-500/10"
                },
                { 
                  icon: HiBriefcase, 
                  label: "Availability", 
                  value: "Open to new opportunities",
                  color: "text-purple-400",
                  bg: "bg-purple-500/10"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-800/30 hover:border hover:border-purple-500/20 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center`}>
                    <item.icon className={`text-xl ${item.color}`} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  { 
                    href: "https://github.com/visheshsanghvi", 
                    icon: FaGithub, 
                    color: "text-gray-400 hover:text-white",
                    bg: "bg-gray-800 hover:bg-gray-700"
                  },
                  { 
                    href: "https://linkedin.com/in/visheshsanghvi", 
                    icon: FaLinkedinIn, 
                    color: "text-blue-400 hover:text-blue-300",
                    bg: "bg-blue-500/10 hover:bg-blue-500/20"
                  },
                  { 
                    href: "https://twitter.com/visheshsanghvi", 
                    icon: FaTwitter, 
                    color: "text-sky-400 hover:text-sky-300",
                    bg: "bg-sky-500/10 hover:bg-sky-500/20"
                  }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${social.bg} ${social.color} transition-all hover:ring-2 hover:ring-purple-500/30 hover:shadow-lg hover:shadow-purple-500/20`}
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:bg-gray-900/70 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20 hover:ring-1 hover:ring-purple-500/20 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
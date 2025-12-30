"use client";
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { HiMail, HiLocationMarker, HiBriefcase, HiUser, HiAtSymbol, HiChatAlt } from 'react-icons/hi';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import { useState, useRef } from 'react';
import RotatingBadge from '../components/RotatingBadge';

// Magnetic Button Component for "tiny tiny" alive effect
function MagneticButton({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: (e: any) => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Move button slightly towards cursor
    x.set(distanceX * 0.2);
    y.set(distanceY * 0.2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}

// Animated Input Component
function AnimatedInput({
  icon: Icon,
  value,
  onChange,
  id,
  placeholder,
  type = "text",
  error,
  isTextArea = false
}: any) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="group">
      <label htmlFor={id} className={`block text-sm font-medium mb-2 transition-colors ${isFocused ? 'text-purple-400' : 'text-gray-300'}`}>
        {id.charAt(0).toUpperCase() + id.slice(1)}
      </label>
      <div className="relative">
        <span className={`absolute ${isTextArea ? 'top-3' : 'inset-y-0'} left-0 pl-3 flex items-center transition-colors ${isFocused ? 'text-purple-400' : 'text-gray-500'}`}>
          <Icon className={`h-5 w-5 ${isTextArea ? 'mt-1' : ''}`} />
        </span>

        {isTextArea ? (
          <textarea
            id={id}
            rows={5}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`w-full pl-11 pr-4 py-3 bg-gray-900/40 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none z-10 relative`}
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`w-full pl-11 pr-4 py-3 bg-gray-900/40 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all duration-300 z-10 relative`}
            placeholder={placeholder}
          />
        )}

        {/* Animated Bottom Border */}
        <motion.div
          initial={false}
          animate={{ scaleX: isFocused ? 1 : 0, opacity: isFocused ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 origin-center rounded-b-lg pointer-events-none z-20"
        />

        {/* Glow effect on focus */}
        <motion.div
          animate={{ opacity: isFocused ? 0.2 : 0 }}
          className="absolute inset-0 bg-purple-500/10 rounded-lg pointer-events-none transition-opacity duration-300"
        />
      </div>
      {error && <div className="text-red-400 text-xs mt-1 ml-1">{error}</div>}
    </div>
  );
}

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
        <AnimatedInput
          icon={HiUser}
          id="name"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
          placeholder="Your name"
          error={errors.name}
        />

        <AnimatedInput
          icon={HiAtSymbol}
          id="email"
          type="email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
          placeholder="your.email@example.com"
          error={errors.email}
        />

        <AnimatedInput
          icon={HiChatAlt}
          id="message"
          value={message}
          onChange={(e: any) => setMessage(e.target.value)}
          placeholder="Tell me about your project..."
          error={errors.message}
          isTextArea={true}
        />

        <MagneticButton
          onClick={(e: Event) => { }} // Form handles submit
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:shadow-2xl border border-transparent hover:border-purple-400/50"
        >
          Send Message
        </MagneticButton>

        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-center mt-4 flex items-center justify-center gap-2"
          >
            <span className="text-xl">✨</span>
            Thank you! Your message has been sent.
          </motion.div>
        )}
      </form>
    );
  }

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 min-h-screen bg-black overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950">
        <motion.div
          className="absolute top-1/2 left-1/2 w-full h-full max-w-[800px] max-h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-[100px]"
          animate={{
            x: ["-50%", "-50%", "-50%"],
            y: ["-50%", "-60%", "-50%"],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ x: "-50%", y: "-50%", left: "50%", top: "50%" }}
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:border-purple-500/20 transition-all duration-300"
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
                  whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.03)" }}
                  className="flex items-center space-x-4 p-3 rounded-xl transition-all duration-300 cursor-default"
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
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${social.bg} ${social.color} transition-all border border-transparent hover:border-white/10`}
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
            className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:border-purple-500/20 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
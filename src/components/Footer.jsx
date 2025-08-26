import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/kahan44', label: 'GitHub' },
    { icon: Linkedin, href: 'http://www.linkedin.com/in/kahan-mistry-1a84482a7', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/kahan.04_?igsh=MXRkZGFzYTN4eG1yaw==', label: 'Instagram' },
    { icon: Mail, href: 'mailto:kahanbhatt44@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800/50 border-t border-gray-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Mistry Kahan
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Passionate developer creating innovative solutions and building amazing digital experiences. 
              Let's turn your ideas into reality.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700/50 hover:bg-gray-600 rounded-lg transition-all duration-300 group"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon 
                    size={20} 
                    className="text-gray-400 group-hover:text-white transition-colors" 
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href.slice(1))}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-300 block"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-gray-400">
                Ready to bring your ideas to life? Let's collaborate!
              </p>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">
                  <span className="text-white font-medium">Email:</span> kahanbhatt44@gmail.com
                </p>
                <p className="text-gray-400 text-sm">
                  <span className="text-white font-medium">Phone:</span> +91 6354932124
                </p>
                <p className="text-gray-400 text-sm">
                  <span className="text-white font-medium">Location:</span> Ahmedabad, Gujarat
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm flex items-center gap-2"
            >
              © {new Date().getFullYear()} Mistry Kahan. Made with 
              <Heart size={16} className="text-red-400" /> 
              and lots of ☕
            </motion.p>
          </div>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed bottom-4 right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg z-50"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp size={20} className="text-white" />
      </motion.div>
    </footer>
  );
};

export default Footer;

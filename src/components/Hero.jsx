import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/kahan44', label: 'GitHub' },
    { icon: Linkedin, href: 'http://www.linkedin.com/in/kahan-mistry-1a84482a7', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/kahan.04_?igsh=MXRkZGFzYTN4eG1yaw==', label: 'Instagram' },
    { icon: Mail, href: 'mailto:kahanbhatt44@gmail.com', label: 'Email' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/CV_KAHAN_MISTRY.pdf'; // Path to your PDF file in the public folder
    link.download = 'CV_KAHAN_MISTRY.pdf'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background with Glass Morphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full mix-blend-screen filter blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-screen filter blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
              x: [0, -40, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div 
            className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full mix-blend-screen filter blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 30, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />
        </div>
        
        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        {/* Glass Morphism Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 whitespace-nowrap"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span 
                className="text-white drop-shadow-2xl"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                    "0 0 40px rgba(139, 92, 246, 0.5)",
                    "0 0 20px rgba(59, 130, 246, 0.5)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Hello, I'm{" "}
              </motion.span>
              <motion.span 
                className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Mistry Kahan
              </motion.span>
            </motion.h1>
          </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <div className="text-xl md:text-2xl text-gray-300 mb-4">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-block"
            >
              Computer Science Student
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-blue-400 mx-2"
            >
              •
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="inline-block"
            >
              Problem Solver
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-purple-400 mx-2"
            >
              •
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="inline-block"
            >
              Tech Enthusiast
            </motion.span>
          </div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about Software Engineering, Web Development, and Data Science, with a growing interest in Machine Learning. Driven to build innovative solutions that create real-world impact.
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
        >
          <motion.button
            onClick={downloadResume}
            className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full text-white font-medium transition-all duration-300 shadow-lg hover:shadow-2xl backdrop-blur-sm border border-white/10"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </span>
          </motion.button>

          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 group shadow-lg hover:shadow-xl"
                whileHover={{ y: -3, rotateY: 180 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
              >
                <social.icon 
                  size={24} 
                  className="text-gray-300 group-hover:text-white transition-colors" 
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 shadow-lg"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
          >
            <ChevronDown size={20} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

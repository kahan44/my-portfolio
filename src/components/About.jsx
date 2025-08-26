import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Users, Trophy } from 'lucide-react';

const About = () => {
  const showcaseCards = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Computer Engineering - Expected 2027',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Focus',
      description: 'Data Science and Full-Stack Development',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'Active in tech communities and coding clubs.',
      gradient: 'from-green-500 to-emerald-500'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced Background with Glass Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            rotate: [360, 180, 0] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Glass Morphism Overlay */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
        
        {/* Floating Geometric Shapes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 ${
              i % 3 === 0 ? 'bg-blue-400/20' : 
              i % 3 === 1 ? 'bg-purple-400/20' : 'bg-pink-400/20'
            } ${
              i % 2 === 0 ? 'rounded-full' : 'rounded-sm rotate-45'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and what drives me as a developer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-center mb-20">
          {/* Profile Photo with Enhanced Glass Effect */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative group">
              {/* Outer Glow Ring */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-30 group-hover:opacity-50 blur-xl transition-opacity duration-300"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Glass Container */}
              <motion.div
                className="relative w-80 h-80 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-1 shadow-2xl"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Inner Glass Effect */}
                <div className="w-full h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl flex items-center justify-center relative overflow-hidden">
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Profile Content */}
                  <img src="/images/profile.jpeg" alt="Profile" className="w-full h-full object-cover rounded-3xl" />
                </div>
              </motion.div>
              
              {/* Floating Accent Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-2xl backdrop-blur-sm border border-white/20"
                animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full backdrop-blur-sm border border-white/20"
                animate={{ y: [0, 10, 0], rotate: [360, 180, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </motion.div>

          {/* Description with Glass Container */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 lg:p-10 shadow-2xl">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Passionate Developer & Problem Solver
                </span>
              </h3>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-200"
                >
                  I'm a <span className="text-blue-400 font-semibold">Computer Engineering student at LJU</span> with a 
                  strong passion for software development, data structures, algorithms, and modern web technologies.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-200"
                >
                  Throughout my journey, I've built diverse projects including <span className="text-purple-400 font-semibold">management systems</span>, 
                  <span className="text-green-400 font-semibold"> database applications</span>, and <span className="text-pink-400 font-semibold">embedded systems</span>, 
                  which have significantly strengthened my practical development skills.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-200"
                >
                  I'm particularly passionate about <span className="text-cyan-400 font-semibold">AI, Machine Learning, and Data Science</span>, 
                  constantly seeking to learn and grow in these cutting-edge areas. My approach combines curiosity with 
                  collaboration to bring innovative ideas to life.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="pt-4 border-t border-white/10"
                >
                  <p className="text-gray-300 italic">
                    "I believe in writing clean code, following best practices, and creating efficient, 
                    scalable, and user-friendly applications that make a real impact."
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Showcase Cards Section */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {showcaseCards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.03, rotateY: 3 }}
              className="relative group"
            >
              {/* Card Glow Effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-300`}
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0, 0.2, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: index * 0.5 
                }}
              />
              
              {/* Glass Card */}
              <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-white/25 transition-all duration-300 shadow-2xl hover:shadow-3xl h-full">
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl"
                  initial={{ x: '-100%' }}
                  whileInView={{ x: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: index * 0.2 }}
                />
                
                {/* Icon Container */}
                <motion.div 
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${card.gradient} flex items-center justify-center mb-6 relative z-10 mx-auto`}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 360,
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)"
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <card.icon size={28} className="text-white" />
                </motion.div>
                
                <div className="text-center relative z-10">
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {card.title}
                  </h4>
                  <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {card.description}
                  </p>
                </div>
                
                {/* Corner Accent */}
                <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-r ${card.gradient} rounded-full opacity-50`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional showcase cards if needed */}
        <motion.div
          variants={containerVariants}
          className="hidden"
        >
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

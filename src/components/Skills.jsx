import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 70 },
        { name: 'Java', level: 80 },
        { name: 'C', level: 85 },
      ]
    },
    {
      icon: Globe,
      title: 'Web Development',
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'Django', level: 85 },
        { name: 'MongoDB', level: 85 }
      ]
    },
    {
      icon: Wrench,
      title: 'Tools & Technologies',
      gradient: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'GitHub', level: 90 },
        { name: 'PostMan', level: 85 },
        { name: 'Git', level: 82 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        delay: 0.5,
        ease: "easeInOut"
      }
    })
  };

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-3/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              {/* Card Header */}
              <div className="flex items-center mb-8">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mr-4`}>
                  <category.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.3 + skillIndex * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        variants={skillVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={skill.level}
                        className={`h-full rounded-full bg-gradient-to-r ${category.gradient} relative`}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20 rounded-full"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear",
                            delay: categoryIndex * 0.3 + skillIndex * 0.1 + 1
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm always learning and expanding my skill set. These percentages represent my comfort level 
            and experience with each technology, and I'm constantly working to improve and stay updated 
            with the latest developments in the tech world.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;

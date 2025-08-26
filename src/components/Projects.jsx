import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AirDine',
      description: 'A full-stack restaurant booking solution with React, Django and Django-REST. Features include user authentication, user dashboard, and admin dashboard.',
      image: '/images/air_dine.png',
      techStack: ['React', 'Django', 'Django-REST', 'SQLite'],
      githubUrl: 'https://github.com/kahan44/AirDine',
    },
    {
      id: 2,
      title: 'EduDesk',
      description: 'Developed a full-stack AI-powered e-learning platform using Django and React integrating secure JWT authentication.',
      image: '/images/edudesk.png',
      techStack: ['React', 'Django', 'Django-REST', 'SQLite'],
      githubUrl: 'https://github.com/kahan44/EduDesk'
    },
    {
      id: 3,
      title: 'Connectify',
      description: 'Engineered a real-time, two-user chat application, using Java for the backend logic and JavaFX for the user interface with core functionalities including secure user authentication, real-time messaging, and chat history retrieval. ',
      image: '/images/connectify.png',
      techStack: ['Java', 'JavaFX', 'Xampp'],
      githubUrl: 'https://github.com/kahan44/Connectify'
    },
    {
      id: 4,
      title: 'Roamantics',
      description: 'An interactive frontend for a travel planner, showcasing curated tours and breathtaking destinations to help users visualize and craft their perfect vacation itinerary.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center',
      techStack: ['HTML', 'JavaScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/kahan44/Roamantics'
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

  const cardVariants = {
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

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800/30 to-slate-900">
        {/* Subtle animated background elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        {/* Projects Grid - 2 cards per row */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group relative h-full"
            >
              {/* Project Card */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl hover:shadow-3xl h-full flex flex-col">
                
                {/* Project Image Container */}
                <div className="relative overflow-hidden aspect-video group/image flex-shrink-0">
                  {/* Project Image */}
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Enhanced Glassy Overlay Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/20 group-hover:via-white/10 group-hover:to-white/5 transition-all duration-500">
                    {/* Shiny Glass Effect - Enhanced */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12"
                        initial={{ x: '-200%' }}
                        animate={{ x: '200%' }}
                        transition={{ 
                          duration: 1.5, 
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                      />
                    </div>
                    
                    {/* Glass reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 via-transparent to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* GitHub Link - Always visible on mobile, hover on desktop */}
                  <div className="absolute top-4 right-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 z-50">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-2.5 md:p-3 bg-black/80 backdrop-blur-md rounded-full border border-white/30 hover:bg-black/90 transition-all duration-300 shadow-lg cursor-pointer relative z-50"
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: 360,
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)"
                      }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      <Github size={18} className="text-white md:w-5 md:h-5" />
                    </motion.a>
                  </div>
                  
                  {/* Hover overlay for better visibility */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Info */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Project Description - Fixed height */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow min-h-[4.5rem] line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack - Cylindrical Pills */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        whileHover={{ 
                          scale: 1.05,
                          y: -2,
                          boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
                        }}
                        className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-full text-xs text-gray-300 hover:text-white hover:border-white/40 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/kahan44?tab=repositories" // Replace with your actual GitHub profile
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl border border-white/10 backdrop-blur-sm relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Github size={20} />
            </motion.div>
            <span className="relative z-10">View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;

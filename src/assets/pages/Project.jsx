import React, { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { motion, useScroll, useTransform } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 100, rotateY: 30 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { type: 'spring', stiffness: 80, damping: 15 }
  }
};

const Project = () => {
  const projectData = [
    {
      title: "Skillswap - Skill Exchange Platform",
      description: " A MERN stack application that allows users to exchange skills and learn from each other.",
      tech: ["MongoDB", "Express", "Next.js", "Node"],
      github: "https://github.com/gokulakrishnan-777/law-based-ai-bot-application",
      live: "https://skillswap-five-beta.vercel.app/",
      image: "/skillswap.png"
    },
    {
      title: "Nyayalite for Law Firm",
      description: "A full-stack MERN application for Law awarness and legal information.",
      tech: ["MongoDB", "Express", "React", "Node"],
      github: "https://github.com/gokulakrishnan-777/law-based-ai-bot-application",
      live: "https://nyayalite-com.onrender.com/",
      image: "/nyayalite.png"
    },
   
    {
      title: "Portfolio Website",
      description: "Responsive personal portfolio built with Tailwind CSS and React.",
      tech: ["React", "Tailwind", "Vite"],
      github: "https://github.com/gokulakrishnan-777/Personal-Portfolio",
      live: "https://personal-portfolio-lyart-eight-94.vercel.app/",
      image: "/portfolio.png"
    }
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section id="project" ref={ref} className="min-h-screen py-24 relative z-50 px-5 bg-slate-50 dark:bg-slate-950 transition-colors backdrop-blur-xl  border-t border-slate-200 dark:border-slate-800 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]  overflow-hidden perspective-[2000px]">
      {/* Overlsy */}
      <div className="absolute inset-0 opacity-20 dark:opacity-40 pointer-events-none">
        <motion.div style={{ y: y1 }} className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px] will-change-transform"></motion.div>
        <motion.div style={{ y: y2 }} className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600 rounded-full blur-[120px] will-change-transform"></motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-black text-center mb-12 dark:text-white font-sans sec">Featured <span className='text-purple-600'>Projects</span></h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] perspective-[1000px] px-4"
        >
          {projectData.map((project, index) => (
            <motion.div variants={itemVariants} key={index} className="snap-center shrink-0 w-[85vw] md:w-[400px] will-change-transform">
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.1} glareColor="white" glarePosition="all" scale={1.02} transitionSpeed={400} className="transform-style-3d h-full overflow-hidden will-change-transform">
                <div className="group h-full flex flex-col bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all">
                  {/* Image Container */}
                  <div className="overflow-hidden relative transform-style-3d shrink-0">
                    <img src={project.image} alt={project.title} loading="lazy" className="w-full bg-amber-50 h-48 object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                {/* Content */}
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 grow">{project.description}</p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4 border-t border-slate-200 dark:border-slate-800 pt-4 mt-auto">
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source code on GitHub`} className="flex items-center text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition">
                      <FaGithub className="mr-2" /> Code
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" aria-label={`View ${project.title} live demo`} className="flex items-center text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition">
                      Live Demo  <FaArrowRight className="ml-1 transition-all group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Project;

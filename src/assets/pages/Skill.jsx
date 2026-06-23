import React from 'react';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss, SiBootstrap, SiMui, SiJavascript, SiNextdotjs, SiMongoose, SiGit, SiGithub, SiPostman, SiDocker, SiRedux, SiVite, SiFigma, SiVercel, SiFirebase } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 12 }
  }
};

const Skill = () => {
  const skillSet = [
    { name: 'React.js', icon: <SiReact className="text-[#61DAFB]" />, level: 'Advanced' },
    { name: 'Next.js', icon: <SiNextdotjs className="dark:text-white text-slate-900" />, level: 'Intermediate' },
    { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" />, level: 'Advanced' },
    { name: 'Express.js', icon: <SiExpress className="dark:text-white text-slate-900" />, level: 'Advanced' },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, level: 'Advanced' },
    { name: 'Mongoose', icon: <SiMongoose className="text-[#880000] dark:text-[#ef4444]" />, level: 'Advanced' },
    { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" />, level: 'Advanced' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 'Expert' },
    { name: 'Material UI', icon: <SiMui className="text-[#007FFF]" />, level: 'Intermediate' },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-[#7952B3]" />, level: 'Advanced' },
    { name: 'Redux', icon: <SiRedux className="text-[#764ABC]" />, level: 'Advanced' },
    { name: 'Vite', icon: <SiVite className="text-[#646CFF]" />, level: 'Advanced' },
    { name: 'Git', icon: <SiGit className="text-[#F05032]" />, level: 'Advanced' },
    { name: 'GitHub', icon: <SiGithub className="dark:text-white text-slate-900" />, level: 'Advanced' },
    { name: 'VS Code', icon: <VscVscode className="text-[#007ACC]" />, level: 'Expert' },
    { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" />, level: 'Advanced' },
    { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" />, level: 'Intermediate' },
    { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" />, level: 'Intermediate' },
    { name: 'Vercel', icon: <SiVercel className="dark:text-white text-slate-900" />, level: 'Advanced' },
    { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" />, level: 'Intermediate' }
  ];

  return (
    <section
      id="skills"
      className="relative z-40 min-h-screen py-24 bg-slate-50/80 dark:bg-slate-950 transition-colors duration-500 backdrop-blur-3xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.3)]  overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black sec dark:text-white leading-tight font-sans">
            Technical <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-500">Expertise</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            A specialized stack focused on building high-performance,
            scalable, and <span className="text-slate-900 dark:text-white font-semibold">modern web applications.</span>
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto perspective-[1000px]"
        >
          {skillSet.map((skill, index) => (
            <motion.div variants={itemVariants} key={index} className="will-change-transform">
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={false} scale={1.05} transitionSpeed={400} className="rounded-2xl shadow-xl transform-style-3d will-change-transform overflow-hidden">
                <div
                  className="group relative flex flex-col items-center justify-center p-6 w-[140px] h-[140px] md:w-[160px] md:h-[160px] bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 rounded-2xl transition-all duration-300 hover:shadow-purple-500/20"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 flex flex-col items-center translate-z-10">
                    <div className="text-5xl md:text-6xl mb-3 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-md">
                      {skill.icon}
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 text-center">{skill.name}</h3>
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

export default Skill;

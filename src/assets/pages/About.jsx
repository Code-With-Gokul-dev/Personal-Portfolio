import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const About = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
    });
    
    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <>
      <section id="about" ref={ref} className="relative min-h-screen flex items-center z-20 overflow-hidden bg-slate-50 dark:bg-slate-950 py-24 perspective-[2000px]">
        {/* Background  */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div style={{ y: y1 }} className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px] will-change-transform"></motion.div>
          <motion.div style={{ y: y2 }} className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] will-change-transform"></motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30, rotateX: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="container max-w-6xl mx-auto px-6 relative z-20 transform-style-3d"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* LEFT */}
            <div className="w-full lg:w-3/5 space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-7xl text-purple-600 font-black dark:text-white leading-tight tracking-tighter">
                  About
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                  I'm <span className="dark:text-white font-medium">Gokulakrishnan A</span>, a MERN Stack Developer building <span className="dark:text-white font-medium">high-performance</span> web apps with a focus on robust architectures and user-centric design.
                </p>
                <p className='text-slate-600 text-xl dark:text-slate-400 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0 '>
                  I am committed to writing clean, efficient, and maintainable code while continuously learning and adapting to new technologies.
                </p>
              </div>
              <a href="/Gokulakrishnan__A_Full stack developer.pdf" target='_blank' download={"/Gokulakrishnan__A_Full stack developer.pdf"}
              aria-label="Download Resume"
              className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 overflow-hidden inline-block">
                <span className="relative z-10">Download Resume</span>
              </a>
            </div>

            {/* RIGHT */}
            <div>
              <div className=' w-96 h-96  border-2 border-slate-200 dark:border-slate-800 rounded-full '>
                <img src="/profile.png" className='w-full h-full object-cover rounded-full' alt="Profile" />
              </div>
            </div>

          </div>
        </motion.div>
      </section>
    </>
  );
};

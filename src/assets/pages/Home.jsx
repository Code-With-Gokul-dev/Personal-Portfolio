import React, { useRef } from 'react';
import { SiMongodb, SiNodedotjs, SiReact, SiTailwindcss } from 'react-icons/si';
import Tilt from 'react-parallax-tilt';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const scrollTo = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 72, behavior: 'smooth' });
    }
  };

  return (
    <main
      id="home"
      ref={ref}
      className=" min-h-screen flex py-12 md:py-30 relative z-10 justify-center bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden perspective-[2000px]"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 min-w-full h-full opacity-20 dark:opacity-40 pointer-events-none">
        <motion.div style={{ y: y1 }} className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600 rounded-full blur-[120px] will-change-transform"></motion.div>
        <motion.div style={{ y: y2 }} className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px] will-change-transform"></motion.div>
      </div>

      <section className=" mx-auto py-10 px-6 relative z-10 w-full max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 100, rotateX: 20, rotateY: -10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", bounce: 0.4 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 transform-style-3d"
        >

          {/* Profile Image  */}
          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={1000} className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-110 lg:h-110 rounded-full border-4 border-white dark:border-slate-800 bg-white overflow-hidden shadow-2xl">
              <img
                src="/profile.png"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Gokulakrishnan A"
              />
            </div>
          </Tilt>

          {/* Content Area */}
          <div className="flex-1 text-center lg:text-left  space-y-8">
            <div className="space-y-4">

              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-semibold dark:text-white">
                  Hi, I'm <span className="text-purple-600 dark:text-purple-400">Gokulakrishnan A</span>
                </h2>
                <h1 className="text-3xl min-w-2xl md:text-5xl lg:text-6xl font-black bg-clip-text text-transparent bg-linear-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-white dark:via-purple-200 dark:to-white leading-tight">
                  Full Stack  Developer
                </h1>
              </div>

              <p className="text-md md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                I design, code and build digital experiences. Passionate about
                <span className="text-slate-900 dark:text-white font-semibold"> cracking complex problems</span> and inventing clean solutions.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollTo('project')}
                aria-label="View Projects"
                className="w-full cursor-pointer sm:w-auto px-8 py-4 bg-slate-900 hover:scale-105  dark:bg-white text-white dark:text-slate-900 rounded-4xl font-bold text-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_20px_50px_rgba(255,255,255,0.1)] transition-all active:scale-95"
              >
                View Projects
              </button>

              <button
                onClick={() => scrollTo('contact')}
                aria-label="Contact Me"
                className="w-full cursor-pointer sm:w-auto px-8 py-4 border-2 hover:scale-105 border-slate-200 hover:text-white dark:border-slate-800 dark:text-white rounded-4xl font-bold text-lg hover:bg-purple-700 dark:hover:bg-slate-800 transition-all active:scale-95"
              >
                Contact Me
              </button>
            </div>

            {/* Tech Stack Badges */}
            <div className="pt-6 flex items-center justify-center lg:justify-start gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
              <span className="text-xs font-bold tracking-widest uppercase dark:text-white">Tech Stack |</span>
              <div className="flex gap-4 text-2xl dark:text-white">

                <span title="React" aria-label="React" role="img" className='text-blue-500 hover:scale-105 cursor-pointer  grayscale animate-spin hover:animate-none  hover:grayscale-0'><SiReact /></span>
                <span title="Node.js" aria-label="Node.js" role="img" className='text-green-800 hover:scale-105 cursor-pointer  grayscale hover:grayscale-0'><SiNodedotjs /></span>
                <span title="MongoDB" aria-label="MongoDB" role="img" className='text-green-400 hover:scale-105 cursor-pointer grayscale hover:grayscale-0'><SiMongodb /></span>
                <span title="Tailwind" aria-label="Tailwind CSS" role="img" className='text-sky-500 hover:scale-105 cursor-pointer grayscale hover:grayscale-0'><SiTailwindcss /></span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

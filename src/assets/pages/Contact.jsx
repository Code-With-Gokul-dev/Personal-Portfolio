import React, { useState, useRef } from 'react';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BiArrowToTop } from 'react-icons/bi';

export const Contact = () => {
  const [revealed, setRevealed] = useState(false);

  const socialLinks = [
    { label: "Instagram", icon: <SiInstagram />, href: "www.instagram.com" },
    { label: "LinkedIn", icon: <SiLinkedin />, href: "https://www.linkedin.com/in/gokulakrishnan-a-g8608" },
    { label: "GitHub", icon: <SiGithub />, href: "https://github.com/Gokulakrishnan-777/" },
  ];
  const scrollTo = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <footer id="contact" ref={ref} className="relative z-60 min-h-screen transition-colors duration-700 bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white pt-24 pb-10 overflow-hidden font-sans perspective-[2000px]">

      {/* overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div style={{ y: y1 }} className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] will-change-transform"></motion.div>
        <motion.div style={{ y: y2 }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] will-change-transform"></motion.div>
        {/* stars */}
        <div className="hidden dark:block absolute top-40 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="hidden dark:block absolute bottom-40 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 relative z-10 text-center"
      >

        {/* Contact Section */}
        <div className="mb-24">


          <h2 className="text-4xl md:text-8xl font-black tracking-tighter mb-12">
            Let's have a <span className="italic font-serif text-purple-600 dark:text-purple-400">chat</span>
          </h2>

          <button
            onClick={() => setRevealed(!revealed)}
            aria-label={revealed ? "Hide Email Address" : "Reveal Email Address"}
            className="group flex items-center gap-4 mx-auto text-xl md:text-2xl font-bold transition-all"
          >
            <span className="border-b-2 border-slate-200 dark:border-slate-800 group-hover:border-purple-600 transition-colors">
              {revealed ? "agokul110@gmail.com" : "Click to reveal email"}
            </span>
            <div className={`p-3 rounded-full bg-slate-900 dark:bg-purple-600 group-hover:bg-purple-500 text-white transition-all duration-500 ${revealed ? 'rotate-0' : 'group-hover:-rotate-25'}`}>
              <HiOutlineArrowNarrowRight size={24} />
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="pt-16 border-t border-slate-200 dark:border-slate-800/50">
          {/* Social Icons */}
          <div className="flex justify-center gap-8 mb-10">
            {socialLinks.map((item, i) => (
              <a key={i} href={item.href} target='_blank' aria-label={item.label} className="text-xl text-slate-400 hover:text-purple-600 dark:hover:text-white transition-all hover:-translate-y-1">
                {item.icon}
              </a>
            ))}
          </div>

          <h3 className="text-2xl sec font-black tracking-[0.3em] text-slate-900 dark:text-white mb-8">GOKUL</h3>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-12">
            {[
              { label: "Home", id: "home" },
              { label: "Projects", id: "project" },
              { label: "About", id: "about" },
              { label: "Skills", id: "skills" },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

          <p className="text-[10px] font-bold tracking-[0.4em] text-slate-400 dark:text-slate-600 uppercase">
            © 2026 Gokulakrishnan A
          </p>
        </div>
      </motion.div>


      <button
        onClick={() => scrollTo('home')}
        title="Back to top"
        aria-label="Back to top"
        className="absolute bottom-6 z-10 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-yellow-400 hover:scale-110 active:scale-95 transition-all"
      >
        <BiArrowToTop size={18} />
      </button>
    </footer>
  );
};


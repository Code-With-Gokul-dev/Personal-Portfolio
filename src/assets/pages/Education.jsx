import React, { useRef } from 'react'
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaMedal } from 'react-icons/fa'
import { motion, useScroll, useTransform } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50, rotateY: -15 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { type: 'spring', stiffness: 70, damping: 15 }
  }
};

const Education = () => {
     const educationData = [
    {
      degree: "Full Stack Engineering Intern",
      institution: "CyberDude Networks Pvt.Ltd. , Tamilnadu",
      duration: "Present",
      achievements: []
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "JKK Nataraja college of engineering and technology ,Tamilnadu",
      duration: "2022 - 2026",
      achievements: []
    },
    {
      degree: "Schooling",
      institution: "Govt.Higher Sec.School , Tamilnadu",
      duration: "2015-2022",
      achievements: []
    },
    
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <>
           {/*  EDUCATION */}
      <section id="education" ref={ref} className="relative z-30 min-h-screen py-24 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl  border-t border-slate-200 dark:border-slate-800 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] overflow-hidden perspective-[2000px]">
        {/* Background Decor */}
        <div className="absolute inset-0 opacity-20 dark:opacity-30 pointer-events-none">
          <motion.div style={{ y: y1 }} className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen will-change-transform"></motion.div>
          <motion.div style={{ y: y2 }} className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen will-change-transform"></motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6"
        >
          <div className="max-w-4xl mx-auto">
            <div className="mb-20 text-center">
              <h1 className="text-4xl font-black  dark:text-white font-sans">
                Academic <span className="text-purple-600">Journey</span>
              </h1>
              <div className="h-1.5 w-20 bg-purple-600 mx-auto mt-4 rounded-full"></div>
            </div>
                   
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="space-y-16">
                {educationData.map((edu, index) => (
                  <motion.div variants={itemVariants} key={index} className="relative pl-12 border-l-2 border-slate-200 dark:border-slate-800 group">
                    <div className="absolute -left-2.75 top-0 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-200 dark:border-slate-800 group-hover:border-purple-600 transition-all duration-500 scale-100 group-hover:scale-125"></div>
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="space-y-3">
                        <span className="text-sm font-black uppercase tracking-widest text-purple-600 opacity-80">{edu.duration}</span>
                        <h1 className="text-2xl md:text-3xl font-bold dark:text-white group-hover:translate-x-2 transition-transform duration-300">{edu.degree}</h1>
                        <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">{edu.institution}</p>
                        {edu.achievements && edu.achievements.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                            <h4 className="flex items-center text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                              <FaMedal className="text-amber-500 mr-2" /> Key Achievements
                            </h4>
                            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                              {edu.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>  
        </motion.div>
       
      </section>
    </>
  )
}

export default Education
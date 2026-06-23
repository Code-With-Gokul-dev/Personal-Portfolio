import React, { useContext, useEffect, useRef, useState } from 'react'
import { themeContext } from '../context/themeApi';
import { BsMoonStars } from "react-icons/bs";
import { MdOutlineWbSunny, MdMenu, MdClose } from "react-icons/md";
import { GrGithub } from 'react-icons/gr';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
const SECTION_IDS = ['home', 'about', 'education', 'skills', 'project', 'contact'];

const Header = () => {
    const { theme, setTheme } = useContext(themeContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home');
    const sectionOffsets = useRef({});

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;
            let current = 'home';
            for (const id of SECTION_IDS) {
                const el = document.getElementById(id);
                if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY;
                    if (scrollPosition >= top) {
                        current = id;
                    }
                }
            }
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Dynamic SEO updates based on active section
    useEffect(() => {
        const metaData = {
            home: { title: "Gokul | Full Stack Developer", desc: "Portfolio of Gokul, a Full Stack Developer specializing in the MERN stack, React, Next.js, and modern web applications." },
            about: { title: "About Gokul | MERN Stack Developer", desc: "Learn more about Gokulakrishnan A, a dedicated Full Stack Developer with expertise in building scalable, high-performance web applications." },
            education: { title: "Education | Gokulakrishnan A", desc: "Discover the educational background and academic achievements of Gokul, shaping his journey as a software developer." },
            skills: { title: "Technical Skills | MERN Stack, React, Node.js", desc: "Explore Gokul's technical expertise in frontend and backend technologies including MongoDB, Express, React, Node.js, and Tailwind CSS." },
            project: { title: "Featured Projects | Gokul's Portfolio", desc: "View the latest full-stack projects built by Gokul, showcasing real-world applications of React, Node.js, and responsive design." },
            contact: { title: "Contact Gokul | Hire a Full Stack Developer", desc: "Get in touch with Gokul for freelance opportunities, full-time roles, or exciting web development collaborations." }
        };

        if (metaData[activeSection]) {
            document.title = metaData[activeSection].title;
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', metaData[activeSection].desc);
            }
        }
    }, [activeSection]);

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme])

    
    useEffect(() => {
        const cache = {};
        SECTION_IDS.forEach(id => {
            const el = document.getElementById(id);
            if (el) cache[id] = el.getBoundingClientRect().top + window.scrollY;
        });
        sectionOffsets.current = cache;
    }, []);

    const handleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const scrollTo = (id) => {
        setIsMenuOpen(false);
        const HEADER = 72;
        if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
    
        const top = (sectionOffsets.current[id] ?? 0) - HEADER;
        window.scrollTo({ top, behavior: 'smooth' });
    };

    return (
        <header className='fixed top-0 z-100 w-full transition-all duration-500 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50
        rounded-b-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]'>
            <div className='max-w-6xl mx-auto flex justify-between items-center px-6 md:px-10 py-4'>

                {/* Logo  */}
                <div onClick={() => scrollTo('home')} className='flex items-center  group cursor-pointer'>
                    <div className='relative flex items-center'>
                        <div className='absolute inset-1 rounded-full blur opacity-20 transition duration-500'></div>
                        {/* <img src="/favicon.png" className='relative w-9 h-9 object-contain' alt="logo" /> */}
                    </div>
                    <h2 className='text-xl font-bold  tracking-wider dark:text-white uppercase'>
                        GOKUL
                    </h2>
                </div>

                {/* Navigation - Desktop */}
                <nav className='hidden  md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400'>
                    {SECTION_IDS.map((id) => (
                        <button
                            key={id}
                            onClick={() => scrollTo(id)}
                            className={`hover:text-purple-600 hover:cursor-pointer transition-colors ease-in-out  ${
                                activeSection === id ? 'text-purple-600 dark:text-purple-400 border-b-4 rounded-xs border-purple-600 dark:border-purple-400 pb-1 -mb-1' : ''
                            }`}
                        >
                            {id === 'project' ? 'Projects' : id}
                        </button>
                    ))}
                </nav>

                {/* Actions Area */}
                <div className='flex items-center gap-5'>
                    <ThemeToggle />

                    <div className='h-6 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block'></div>

                    <a
                        href="https://github.com/gokulakrishnan-777"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub Profile"
                        className='text-2xl text-slate-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-transform hover:-translate-y-1 hidden sm:block'
                    >
                        <GrGithub />
                    </a>

                    {/* Mobile  */}
                    <button
                        className="md:hidden p-2 dark:text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Navigation Menu"
                    >
                        {isMenuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 py-6 px-10 flex flex-col gap-6 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4">
                    {SECTION_IDS.map((id) => (
                        <button
                            key={id}
                            onClick={() => scrollTo(id)}
                            className={`text-left font-bold uppercase tracking-[0.2em] text-sm ${
                                activeSection === id ? 'text-purple-600 dark:text-purple-400' : 'dark:text-white text-slate-600'
                            }`}
                        >
                            {id === 'project' ? 'Projects' : id}
                        </button>
                    ))}
                </div>
            )}
        </header>
    )
}

export default Header

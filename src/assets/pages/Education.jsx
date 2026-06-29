import { GraduationCap, Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Education = () => {
    const educationData = [
        {
            degree: "Full Stack Engineering Intern",
            institution: "CyberDude Networks Pvt.Ltd., Tamilnadu",
            duration: "2025 - 2026",
            achievements: []
        },
        {
            degree: "B.Tech in Information Technology",
            institution: "JKK Nataraja college of engineering and technology, Tamilnadu",
            duration: "2022 - 2026",
            achievements: []
        },
        {
            degree: "Higher Secondary",
            institution: "Govt. Higher Sec. School, Tamilnadu",
            duration: "2015 - 2022",
            achievements: []
        }
    ];

    return (
        <section id="education" className="mx-auto w-full overflow-x-clip px-2 md:max-w-3xl pt-8 pb-16">
            <h2 className="sr-only">Education</h2>
            
            <div className="screen-line-top screen-line-bottom border-x border-line p-4 md:p-6">
                <div className="flex items-center gap-4 font-mono text-sm mb-6">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-line bg-muted text-muted-foreground">
                        <GraduationCap size={14} />
                    </div>
                    <p className="font-semibold text-lg tracking-tight">Academic Journey</p>
                </div>

                <div className="space-y-8">
                    {educationData.map((edu, index) => (
                        <div key={index} className="group relative flex flex-col gap-2 p-3 -mx-3 rounded-xl hover:bg-black/5 dark:hover:bg-black/40 hover:backdrop-blur-md transition-all duration-300">
                            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                                <h3 className="font-semibold text-lg flex items-center gap-2">
                                    {edu.degree}
                                    <span className="text-muted-foreground text-xs font-normal border border-line rounded px-1.5 py-0.5">{edu.duration}</span>
                                </h3>
                            </div>
                            
                            <p className="text-sm text-muted-foreground">{edu.institution}</p>
                            
                            {edu.achievements && edu.achievements.length > 0 && (
                                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                                    {edu.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
                                    ))}
                                </ul>
                            )}
                            
                            {index !== educationData.length - 1 && (
                                <div className="h-px w-full bg-line mt-6"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Hall of Fame / Certifications */}
            <div className="screen-line-top screen-line-bottom border-x border-line p-4 md:p-6 mt-12 hover:bg-black/5 dark:hover:bg-black/40 hover:backdrop-blur-md transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4 font-mono text-sm">
                        <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-line bg-muted text-muted-foreground">
                            <Trophy size={14} />
                        </div>
                        <p className="font-semibold text-lg tracking-tight">Hall of Frame</p>
                    </div>
                    
                    <Link to="/certificates" className="text-xs sm:text-sm font-medium dark:text-gray-300  text-gray-500 hover:text-foreground flex items-center gap-1 transition-all duration-500 ease-in-out group">
                        View All
                        <ArrowRight size={14} className="group-hover:translate-x-1 duration-100 ease-in-out transition-transform" />
                    </Link>
                </div>
                
                <p className="text-sm text-muted-foreground pl-10">
                    Explore my professional certifications, internships, and achievements.
                </p>
            </div>
        </section>
    );
};

export default Education;
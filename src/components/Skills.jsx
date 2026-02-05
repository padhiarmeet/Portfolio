import { motion } from 'framer-motion';
import { Atom, Coffee, Power, Zap } from 'lucide-react';

const Skills = () => {
    const categories = [
        {
            title: "Frontend & Mobile",
            titleColor: "text-cyan-500 dark:text-cyan-400",
            glowColor: "from-cyan-500/10",
            borderColor: "border-cyan-500",
            skills: [
                { name: "JavaScript" },
                { name: "React" },
                { name: "Next.js" },
                { name: "Flutter" },
                { name: "Dart" },
                { name: "HTML5" },
                { name: "CSS3" },
                { name: "Tailwind" },
                { name: "Bootstrap" }
            ]
        },
        {
            title: "Backend & Logic",
            titleColor: "text-green-500 dark:text-green-400",
            glowColor: "from-green-500/10",
            borderColor: "border-green-500",
            skills: [
                { name: "Java" },
                { name: "Spring Boot" },
                { name: "JPA / Hibernate" },
                { name: "Node.js" },
            ]
        },
        {
            title: "Data & Infrastructure",
            titleColor: "text-orange-500 dark:text-orange-400",
            glowColor: "from-orange-500/10",
            borderColor: "border-orange-500",
            skills: [
                { name: "PostgreSQL" },
                { name: "MongoDB" },
                { name: "Prisma" },
                { name: "Firebase" }
            ]
        },
        {
            title: "Tools & Platforms",
            titleColor: "text-purple-500 dark:text-purple-400",
            glowColor: "from-purple-500/10",
            borderColor: "border-purple-500",
            skills: [
                { name: "GitHub" },
                { name: "Postman" },
                { name: "Git" },
                { name: "Docker" },
                { name: "Android Studio" },
                { name: "VS Code" }
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 px-6 lg:px-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-12 text-dark dark:text-white font-heading"
                >
                    Skills<span className="text-green-500">.</span>
                </motion.h2>

                <div className="relative border border-dark/20 dark:border-white/20 p-4 md:p-8">
                    {/* Main Container Corner Markers - OVERSIZED */}
                    <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-dark/60 dark:text-white/80 text-3xl font-thin z-20">+</span>
                    <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-dark/60 dark:text-white/80 text-3xl font-thin z-20">+</span>
                    <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-dark/60 dark:text-white/80 text-3xl font-thin z-20">+</span>
                    <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-dark/60 dark:text-white/80 text-3xl font-thin z-20">+</span>

                    <div className="flex flex-col gap-8">
                        {categories.map((category, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-none bg-white/5 dark:bg-zinc-900/50 border border-dark/10 dark:border-white/5 backdrop-blur-sm relative group overflow-hidden"
                            >
                                {/* Subtle Grid Background */}
                                <div className="absolute inset-0 bg-grid opacity-5" />

                                {/* Accent Background Glow */}
                                <div className={`absolute -inset-2 bg-gradient-to-r ${category.glowColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* Card Corner Markers (+) - LARGE */}
                                <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-dark/80 dark:text-white/80 text-4xl font-thin z-20">+</span>
                                <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-dark/80 dark:text-white/80 text-4xl font-thin z-20">+</span>
                                <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-dark/80 dark:text-white/80 text-4xl font-thin z-20">+</span>
                                <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-dark/80 dark:text-white/80 text-4xl font-thin z-20">+</span>

                                <h3 className={`text-sm font-bold uppercase tracking-widest ${category.titleColor} mb-8 relative z-10`}>
                                    {category.title}
                                </h3>

                                <div className="flex flex-wrap gap-3 relative z-10">
                                    {category.skills.map((skill, sIdx) => (
                                        <div
                                            key={sIdx}
                                            style={{ opacity: 1 }}
                                            className={`px-4 py-2 bg-white/5 dark:bg-black/40 border border-l-2 border-r-black/10 border-t-black/10 border-b-black/10 ${category.borderColor} relative overflow-hidden group/skill hover:scale-110 transition-all duration-250 hover:shadow-black/5 cursor-default hover:opacity-100`}
                                        >
                                            {/* Tag Corner Markers (+) - Creating the 'L' shape via parent overflow-hidden */}
                                            {/* <span className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 ${category.titleColor} text-2xl font-thin leading-none z-10`}>+</span> */}
                                            {/* <span className={`absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 ${category.titleColor} text-2xl font-thin leading-none z-10`}>+</span> */}
                                            {/* <span className={`absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 ${category.titleColor} text-2xl font-thin leading-none z-10`}>+</span> */}
                                            {/* <span className={`absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 ${category.titleColor} text-2xl font-thin leading-none z-10`}>+</span> */}

                                            <span className="relative z-20 text-dark/90 dark:text-white/90 font-medium text-sm md:text-base">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;


import { motion } from 'framer-motion';
import { aboutMe, achievements } from '../data/portfolioData';
import { BookOpen, Code2, Award, Trophy } from 'lucide-react';

const About = () => {
    // Manually constructing stats for the blueprint cards
    const stats = [
        {
            title: "LeetCode",
            value: "140+ Problems",
            sub: "DSA & Algorithms",
            icon: Code2,
            gradient: "from-yellow-500/40 to-orange-500/40 dark:from-yellow-600/50 dark:to-orange-600/50"
        },
        {
            title: "Education",
            value: "8.6 CGPA",
            sub: "B.Tech CSE",
            icon: BookOpen,
            gradient: "from-blue-500/40 to-cyan-500/40 dark:from-blue-600/50 dark:to-cyan-600/50"
        },
        {
            title: "HackerRank",
            value: "5-Star",
            sub: "Java Gold",
            icon: Award,
            gradient: "from-green-500/40 to-emerald-500/40 dark:from-green-600/50 dark:to-emerald-600/50"
        }
    ];

    return (
        <section id="about" className="py-20 px-6 lg:px-12 relative overflow-hidden flex flex-col justify-center min-h-[80vh]">
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-dark dark:text-white"
                >
                    About Me.
                </motion.h2>

                {/* Main Content Container: Vertical Stack */}
                <div className="flex flex-col gap-16">
                    {/* Bio Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <p className="text-xl md:text-2xl text-secondary dark:text-gray-300 leading-relaxed font-light">
                            {aboutMe}
                        </p>

                        <div className="mt-8 flex gap-4">
                            <a href="https://drive.google.com/file/d/1SRCnadZzXCxrquD_txoMPclksBp0ZDmp/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-dark dark:text-white hover:underline underline-offset-4 decoration-1">
                                View Resume
                            </a>
                            <a href="#contact" className="text-dark dark:text-white hover:underline underline-offset-4 decoration-1">
                                Contact Me
                            </a>
                        </div>
                    </motion.div>

                    {/* Stats Cards: Horizontal Row (3 Columns) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -8 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.25, delay: index * 0.1 }}
                                className={`relative p-8 group transition-all duration-150`}
                            >
                                {/* Background Gradient - Interactive */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-150`} />

                                {/* Borders - Sharp Corners */}
                                <div className="absolute inset-0 border border-dark/20 dark:border-white/20 rounded-none" />

                                {/* Corner Markers (Blueprint Style) - Perfectly Aligned to Corners */}
                                <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-dark/30 dark:text-white/30 text-sm font-thin leading-none z-20">+</span>
                                <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-dark/30 dark:text-white/30 text-sm font-thin leading-none z-20">+</span>
                                <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-dark/30 dark:text-white/30 text-sm font-thin leading-none z-20">+</span>
                                <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-dark/30 dark:text-white/30 text-sm font-thin leading-none z-20">+</span>

                                {/* Content */}
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="mb-4 p-3 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm text-dark dark:text-white">
                                        <stat.icon size={24} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-dark dark:text-white mb-1">
                                        {stat.value}
                                    </h3>
                                    <p className="text-sm font-medium text-dark/70 dark:text-white/70 mb-2">
                                        {stat.title}
                                    </p>
                                    <span className="text-xs text-secondary dark:text-gray-400 uppercase tracking-wider">
                                        {stat.sub}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

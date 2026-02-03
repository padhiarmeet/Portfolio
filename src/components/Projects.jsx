import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { ArrowUpRight, Play } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6 lg:px-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-16 text-dark dark:text-white font-heading"
                >
                    Projects<span className="text-orange-500">.</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-6 bg-white/5 dark:bg-zinc-900/50 border border-dark/10 dark:border-white/5 backdrop-blur-sm"
                        >
                            {/* Card Corner Borders (Brackets) */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-dark/40 dark:border-white/40 z-20"></div>
                            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-dark/40 dark:border-white/40 z-20"></div>
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-dark/40 dark:border-white/40 z-20"></div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-dark/40 dark:border-white/40 z-20"></div>

                            <div className="relative overflow-hidden mb-6 rounded-none">
                                <div className="aspect-video bg-gray-200 dark:bg-zinc-800 transition-transform duration-500 group-hover:scale-105 flex items-center justify-center">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : null}
                                </div>
                            </div>

                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-dark dark:text-white">{project.title}</h3>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs text-secondary dark:text-gray-400 border border-dark/10 dark:border-white/10 px-2 py-1 rounded-none">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <a href={project.link} className="p-2 rounded-none border border-dark/10 dark:border-white/10 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 group/btn">
                                    {project.title === "Image Compressor & PDF Maker" ? (
                                        <>
                                            <ArrowUpRight size={18} className="group-hover/btn:hidden" />
                                            <Play size={18} className="hidden group-hover/btn:block fill-current" />
                                        </>
                                    ) : (
                                        <ArrowUpRight size={18} />
                                    )}
                                </a>
                            </div>
                            <p className="text-secondary dark:text-gray-400 text-sm leading-relaxed">
                                {project.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

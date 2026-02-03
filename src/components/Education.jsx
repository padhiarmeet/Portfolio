import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { education } from '../data/portfolioData';

const Education = () => {
    return (
        <section id="education" className="py-20 px-6 lg:px-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 text-dark dark:text-white font-heading">
                        Education<span className="text-cyan-500">.</span>
                    </h2>
                </motion.div>

                <div className="relative border-l border-dark/20 dark:border-white/20 ml-4 md:ml-12 pl-8 md:pl-16 space-y-12">
                    {/* Timeline Line is visualised by border-l on the container */}

                    {Array.isArray(education) && education.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute top-2 -left-[41px] md:-left-[73px] w-4 h-4 rounded-full bg-cyan-500 border-4 border-white dark:border-zinc-900 z-10" />

                            <div className="w-full">
                                <h3 className="text-2xl font-bold text-dark dark:text-white mb-2">
                                    {item.degree}
                                </h3>
                                <div className="text-lg text-secondary dark:text-gray-400 mb-2 font-medium">
                                    {item.institution}
                                </div>
                                <div className="flex flex-wrap items-center gap-4 mb-4">
                                    <div className="flex items-center gap-2 text-sm text-dark/60 dark:text-gray-500 bg-dark/5 dark:bg-white/5 px-3 py-1 rounded-full">
                                        <Calendar size={14} />
                                        <span>{item.period}</span>
                                    </div>

                                    {item.cgpa && (
                                        <div className="flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                                            <Award size={14} />
                                            <span className="font-semibold">CGPA: {item.cgpa}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

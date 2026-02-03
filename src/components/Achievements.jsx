import { motion } from 'framer-motion';
import { Trophy, Clock, Zap } from 'lucide-react';
import { achievements } from '../data/portfolioData';

const Achievements = () => {
    // Assuming only one main achievement for the featured view
    const mainAchievement = achievements[0];

    return (
        <section id="achievements" className="py-20 px-6 lg:px-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 text-dark dark:text-white font-heading">
                        Achievement<span className="text-yellow-500">.</span>
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Decorative Background Glow */}
                    <div className="absolute inset-0 bg-yellow-500/5 blur-3xl rounded-full -z-10" />

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="relative p-8 md:p-12 bg-white/5 dark:bg-zinc-900/50 border border-dark/10 dark:border-white/5 backdrop-blur-sm rounded-none overflow-hidden"
                    >
                        {/* Standard Corner Accents */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-dark/40 dark:border-white/40 z-20"></div>
                        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-dark/40 dark:border-white/40 z-20"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-dark/40 dark:border-white/40 z-20"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-dark/40 dark:border-white/40 z-20"></div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-shrink-0">
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 shadow-lg shadow-yellow-500/10">
                                    <Trophy size={40} className="text-yellow-500" />
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl md:text-4xl font-bold text-dark dark:text-white mb-2">
                                        {mainAchievement.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-sm text-yellow-500 font-medium uppercase tracking-wider">
                                        <span className="flex items-center gap-1"><Clock size={16} /> 24-Hour Sprint</span>
                                    </div>
                                </div>

                                <p className="text-base md:text-lg text-secondary dark:text-gray-300 leading-relaxed max-w-3xl">
                                    {mainAchievement.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;

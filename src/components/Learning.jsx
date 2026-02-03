import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Loader, BookOpen } from 'lucide-react';
import { currentlyLearning } from '../data/portfolioData';

const Learning = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [progress, setProgress] = useState(0);
    const [dots, setDots] = useState('');

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => {
                if (progress < currentlyLearning.progress) {
                    setProgress(prev => prev + 1);
                }
            }, 30);
            return () => clearTimeout(timer);
        }
    }, [isInView, progress]);

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => prev.length >= 3 ? '' : prev + '.');
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="section-padding bg-void-900 relative">
            <div className="max-w-4xl mx-auto" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="glass rounded-2xl p-8 md:p-12 float-card relative overflow-hidden"
                >
                    {/* Background Decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent-500/20 to-transparent rounded-full blur-3xl" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-500 to-accent-500 flex items-center justify-center">
                                <BookOpen size={24} className="text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">
                                    Currently Learning
                                </h2>
                                <p className="text-gray-400">Expanding my skill set</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Loader size={20} className="text-electric-400 animate-spin" />
                                <span className="text-xl font-semibold gradient-text">
                                    {currentlyLearning.topic}
                                </span>
                            </div>

                            <p className="text-gray-300 text-lg">
                                {currentlyLearning.details}
                            </p>

                            {/* Progress Bar */}
                            <div className="mt-6">
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm text-gray-400">Progress</span>
                                    <span className="text-sm text-electric-400 font-mono">
                                        Loading{dots}
                                    </span>
                                </div>
                                <div className="h-3 bg-void-700 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full progress-bar rounded-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progress}%` }}
                                        transition={{ duration: 0.1 }}
                                    />
                                </div>
                                <div className="flex justify-end mt-1">
                                    <span className="text-sm text-gray-400 font-mono">{progress}%</span>
                                </div>
                            </div>

                            {/* Terminal Effect */}
                            <div className="mt-6 bg-void-900 rounded-lg p-4 font-mono text-sm border border-white/10">
                                <div className="flex items-center gap-2 text-gray-500 mb-2">
                                    <span className="w-3 h-3 rounded-full bg-red-500" />
                                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <span className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <p className="text-green-400">
                                    $ learning --topic="{currentlyLearning.topic}"
                                </p>
                                <p className="text-gray-400 mt-1">
                                    {'>'} Mastering microservices architecture{dots}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Learning;

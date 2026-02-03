import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-[80vh] px-6 lg:px-12 flex flex-col justify-center relative overflow-hidden pt-20">
            <div className="max-w-7xl mx-auto w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-2xl md:text-4xl font-medium text-dark dark:text-white mb-2 font-heading tracking-tight">
                        Hi, I'm
                    </p>
                    <h1 className="text-6xl md:text-9xl font-bold text-dark dark:text-white leading-[0.9] tracking-tighter mb-8 font-heading">
                        Meet Padhiyar<span className="text-green-500">.</span>
                    </h1>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-lg md:text-xl text-secondary dark:text-gray-400 font-medium">
                        <span>Computer Science Student</span>
                        <span className="hidden md:inline text-gray-300">|</span>
                        <span>Flutter & Java Developer</span>
                        <span className="hidden md:inline text-gray-300">|</span>
                        <span>Building Intelligent Systems</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

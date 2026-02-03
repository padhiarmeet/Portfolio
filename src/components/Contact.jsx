import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, Download, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Custom X Logo Component
const XIcon = ({ size = 24, className }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

const Contact = () => {
    const socialLinks = [
        { name: 'Email', icon: Mail, href: `mailto:${personalInfo.email}`, color: 'hover:bg-red-500/20 hover:text-red-400' },
        { name: 'LinkedIn', icon: Linkedin, href: personalInfo.linkedin, color: 'hover:bg-blue-500/20 hover:text-blue-400' },
        { name: 'GitHub', icon: Github, href: personalInfo.github, color: 'hover:bg-green-500/20 hover:text-green-500' },
        { name: 'X', icon: XIcon, href: personalInfo.twitter, color: 'hover:bg-black/10 hover:text-black dark:hover:bg-white/10 dark:hover:text-white' },
    ];

    return (
        <section id="contact" className="section-padding bg-void-800/50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-500/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-electric-500/10 to-transparent rounded-full blur-3xl" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-electric-500 to-accent-500 mx-auto rounded-full mb-6" />
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.1 } }}
                            whileTap={{ scale: 0.95 }}
                            className={`w-14 h-14 glass rounded-xl flex items-center justify-center text-gray-400 transition-all duration-300 ${link.color}`}
                        >
                            <link.icon size={24} />
                        </motion.a>
                    ))}
                </motion.div>



                {/* Download Resume Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center"
                >
                    <motion.a
                        href="https://drive.google.com/file/d/1SRCnadZzXCxrquD_txoMPclksBp0ZDmp/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-electric-500 to-accent-500 rounded-xl font-semibold text-zinc-900 dark:text-white btn-glow"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Download size={20} />
                        Download Resume
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

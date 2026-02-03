import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const SectionIndicator = () => {
    const [activeSection, setActiveSection] = useState('none');
    const { scrollY } = useScroll();

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about');
            const skillsSection = document.getElementById('skills');
            const projectsSection = document.getElementById('projects');

            const scrollPosition = window.scrollY + window.innerHeight / 2;

            const educationSection = document.getElementById('education');
            const achievementsSection = document.getElementById('achievements');
            const experienceSection = document.getElementById('experience');

            if (achievementsSection && scrollPosition >= achievementsSection.offsetTop) {
                setActiveSection('achievements');
            } else if (educationSection && scrollPosition >= educationSection.offsetTop) {
                setActiveSection('education');
            } else if (experienceSection && scrollPosition >= experienceSection.offsetTop) {
                setActiveSection('experience');
            } else if (projectsSection && scrollPosition >= projectsSection.offsetTop) {
                setActiveSection('projects');
            } else if (skillsSection && scrollPosition >= skillsSection.offsetTop) {
                setActiveSection('skills');
            } else if (aboutSection && scrollPosition >= aboutSection.offsetTop) {
                setActiveSection('about');
            } else {
                setActiveSection('none');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* About Me. */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: activeSection === 'about' ? 0.02 : 0
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute bottom-[-2vw] left-[-3vw] leading-none"
            >
                <span className="text-[17vw] font-bold text-dark dark:text-white whitespace-nowrap select-none"
                    style={{ fontFamily: 'Inter, sans-serif' }}>
                    About Me.
                </span>
            </motion.div>

            {/* Skills. */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: activeSection === 'skills' ? 0.02 : 0
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute bottom-[-2vw] left-[-3vw] leading-none"
            >
                <span className="text-[17vw] font-bold text-dark dark:text-white whitespace-nowrap select-none"
                    style={{ fontFamily: 'Inter, sans-serif' }}>
                    Skills.
                </span>
            </motion.div>

            {/* Projects. */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: activeSection === 'projects' ? 0.02 : 0
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute bottom-[-2vw] left-[-3vw] leading-none"
            >
                <span className="text-[17vw] font-bold text-dark dark:text-white whitespace-nowrap select-none"
                    style={{ fontFamily: 'Inter, sans-serif' }}>
                    Projects.
                </span>
            </motion.div>

            {/* Experience. */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: activeSection === 'experience' ? 0.02 : 0
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute bottom-[-2vw] left-[-3vw] leading-none"
            >
                <span className="text-[17vw] font-bold text-dark dark:text-white whitespace-nowrap select-none"
                    style={{ fontFamily: 'Inter, sans-serif' }}>
                    Experience.
                </span>
            </motion.div>

            {/* Education. */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: activeSection === 'education' ? 0.02 : 0
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute bottom-[-2vw] left-[-3vw] leading-none"
            >
                <span className="text-[17vw] font-bold text-dark dark:text-white whitespace-nowrap select-none"
                    style={{ fontFamily: 'Inter, sans-serif' }}>
                    Education.
                </span>
            </motion.div>

            {/* Achievements. */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: activeSection === 'achievements' ? 0.02 : 0
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute bottom-[-2vw] left-[-3vw] leading-none"
            >
                <span className="text-[14vw] font-bold text-dark dark:text-white whitespace-nowrap select-none"
                    style={{ fontFamily: 'Inter, sans-serif' }}>
                    Achievements.
                </span>
            </motion.div>
        </div>
    );
};

export default SectionIndicator;

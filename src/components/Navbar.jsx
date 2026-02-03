import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Asterisk } from 'lucide-react';
import { navLinks } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed z-50 transition-all duration-300 group left-0 right-0 mx-auto ${isScrolled
                ? 'top-4 w-[95%] max-w-7xl rounded-2xl py-3 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-sm text-dark dark:text-white'
                : 'top-0 w-full py-6 bg-transparent mix-blend-difference text-white border border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="opacity-100"
                    >
                        <Asterisk size={40} className="text-current" />
                    </motion.div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 lg:gap-12 opacity-100">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-base lg:text-lg font-medium hover:opacity-70 transition-opacity"
                        >
                            {link.name}
                        </a>
                    ))}

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors"
                    >
                        {theme === 'dark' ? <Sun size={24} /> : <div className="w-6 h-6 rounded-full border-2 border-current bg-transparent relative overflow-hidden"><div className="absolute inset-0 bg-current translate-x-1/2" /></div>}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 bg-void-black text-white z-40 flex flex-col items-center justify-center space-y-8"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-3xl font-bold"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className="p-4 rounded-full bg-white/10 mt-8"
                        >
                            {theme === 'dark' ? <Sun size={32} /> : <Moon size={32} />}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;

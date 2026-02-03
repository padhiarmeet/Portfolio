import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'

import SectionIndicator from './components/SectionIndicator'

function App() {
    return (
        <div className="min-h-screen bg-grid transition-colors duration-300 relative">
            <SectionIndicator />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Education />
                <Achievements />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App

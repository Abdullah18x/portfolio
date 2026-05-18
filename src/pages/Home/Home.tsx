import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Strengths from '../../components/Strengths/Strengths';
import Experience from '../../components/Experience/Experience';
import Projects from '../../components/Projects/Projects';
import OpenSource from '../../components/OpenSource/OpenSource';
import Skills from '../../components/Skills/Skills';
import Education from '../../components/Education/Education';
import Certifications from '../../components/Certifications/Certifications';
import Languages from '../../components/Languages/Languages';
import Contact from '../../components/Contact/Contact';
import './Home.css';

export default function Home() {
  return (
    <main id="main" className="home">
      <Hero />
      <About />
      <Strengths />
      <Experience />
      <Projects />
      <OpenSource />
      <Skills />
      <Education />
      <Certifications />
      <Languages />
      <Contact />
    </main>
  );
}

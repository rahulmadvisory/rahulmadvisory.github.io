import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Recommendations from '@/components/Recommendations'
import Experience from '@/components/Experience'
import Services from '@/components/Services'

export default function Home() {
  return (
    <main>
  <Navigation />
  <Hero />
  <Services />
  <Projects />
  <Skills />
  <Experience />
  <Recommendations />
  <About />
  <Contact />
    </main>
  );
}

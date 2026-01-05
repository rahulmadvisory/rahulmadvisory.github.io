import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Projects from '../components/Projects'
import WhyLumen from '../components/WhyLumen'
import HowIWork from '../components/HowIWork'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
  <Navigation />
  <Hero />
  <Services />
  <Projects />
  <WhyLumen />
  <HowIWork />
  <Contact />
  <About />
    </main>
  );
}

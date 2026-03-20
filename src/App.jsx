import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experts from './components/Experts';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experts />
      <Contact />
      <WhatsAppButton />
    </>
  );
}

import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
// import Testimonials from './components/Testimonials';
// import Companies from './components/Companies';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="text-center">
      <main>
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;

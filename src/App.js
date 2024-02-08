import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
// import Testimonials from './components/Testimonials';
// import Companies from './components/Companies';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <div className="font-body relative z-0">
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Research />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

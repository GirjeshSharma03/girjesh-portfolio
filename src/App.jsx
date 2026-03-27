import { useState, useEffect } from "react";

import "./styles/global.css";

import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Skills     from "./components/Skills";
import Experience from "./components/Experience";
import Projects   from "./components/Projects";
import Education  from "./components/Education";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";

function App() {
  const [scrolled,   setScrolled]   = useState(false);
  const [cursorPos,  setCursorPos]  = useState({ x: -100, y: -100 });
  const [ringPos,    setRingPos]    = useState({ x: -100, y: -100 });

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Custom cursor
  useEffect(() => {
    let animId, rx = -100, ry = -100;
    const onMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      const tx = e.clientX, ty = e.clientY;
      const animate = () => {
        rx += (tx - rx) * 0.12;
        ry += (ty - ry) * 0.12;
        setRingPos({ x: rx, y: ry });
        animId = requestAnimationFrame(animate);
      };
      cancelAnimationFrame(animId);
      animId = requestAnimationFrame(animate);
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div
        className="cursor"
        style={{ transform: `translate(${cursorPos.x - 5}px, ${cursorPos.y - 5}px)` }}
      />
      <div
        className="cursor-ring"
        style={{ transform: `translate(${ringPos.x - 18}px, ${ringPos.y - 18}px)` }}
      />

      <Navbar     scrolled={scrolled} />
      <Hero       />
      <About      />
      <Skills     />
      <Experience />
      <Projects   />
      <Education  />
      <Contact    />
      <Footer     />
    </>
  );
}

export default App;

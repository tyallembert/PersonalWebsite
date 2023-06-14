import { useState, useEffect, useRef } from 'react';
import './App.scss';
import Projects from './components/Projects';
import Title from './components/Title';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Education from './components/Education';
import Contact from './components/Contact';
import Experience from './components/Experience';
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [activePage, setActivePage] = useState("home");

  const mainContainer = useRef(null);
  const infoContainer = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(heroRef.current, 
        {
            y: 500,
            ease: "none",
            scrollTrigger: {
                scroller: infoContainer.current,
                trigger: aboutRef.current,
                start: "top bottom",
                end: "top+=200 top",
                scrub: true,
              }
        });
      });
      return () => ctx.revert(); // <-- CLEANUP!
  }, [])

  useEffect(() => {
    let mainCopy = mainContainer.current;
    mainCopy.addEventListener('scroll', checkScroll, true);
    return () => {
      mainCopy.removeEventListener("scroll", checkScroll, true);
  };
  }, [])

  const checkScroll = () => {
    const boundingBoxHero = heroRef.current.getBoundingClientRect();
    const boundingBoxAbout = aboutRef.current.getBoundingClientRect();
    const boundingBoxEducation = educationRef.current.getBoundingClientRect();
    const boundingBoxProjects = projectsRef.current.getBoundingClientRect();

    if(boundingBoxHero.top < mainContainer.current.getBoundingClientRect().top && 
      boundingBoxHero.bottom - 215 > mainContainer.current.getBoundingClientRect().top &&
      heroRef.current){
        setActivePage("home");
    }
    else if(boundingBoxAbout.top < mainContainer.current.getBoundingClientRect().top && 
      boundingBoxAbout.bottom - 70 > mainContainer.current.getBoundingClientRect().top &&
      aboutRef.current){
      setActivePage("about");
    }
    else if(boundingBoxEducation.top - 70 < mainContainer.current.getBoundingClientRect().top && 
    boundingBoxEducation.bottom > mainContainer.current.getBoundingClientRect().top &&
      educationRef.current){
      setActivePage("education");
    }
    else if(boundingBoxProjects.top < mainContainer.current.getBoundingClientRect().top && 
    boundingBoxProjects.bottom > mainContainer.current.getBoundingClientRect().top &&
      projectsRef.current){
      setActivePage("projects");
    }
  }

  return (
    <div className="App">
      <div className={'mainContainer ' + activePage} ref={mainContainer}>
        <Title activePage={activePage}/>
        <div className='infoContainer' ref={infoContainer}>
          <Hero heroRef={heroRef}/>
          <About aboutRef={aboutRef} infoContainer={infoContainer}/>
          <Education educationRef={educationRef} infoContainer={infoContainer}/>
          <Experience />
          <Projects projectsRef={projectsRef}/>
          <Contact />
        </div>
        <Footer />
      </div>
      <Nav activePage={activePage} setActivePage={setActivePage}/>
    </div>
  );
}

export default App;

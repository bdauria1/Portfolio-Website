import React, { useEffect, useRef } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './App.css';

const Home = () => (
  <div className="section home-section">
    <h1>
      <ReactTypingEffect
        text={["Welcome to My Website!", "Discover my projects and learn more about what I do!"]}
        speed={100}
        eraseSpeed={50}
        eraseDelay={2000}
        typingDelay={500}
      />
    </h1>
  </div>
);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutRef.current.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div ref={aboutRef} className="section about-section">
      <div className="about-content">
        <h1>About Me</h1>
        <p className="intro">👋 Hi there! I'm a passionate Computer Science graduate from Boston University, constantly exploring the world of technology and its endless possibilities.</p>
        <div className="details">
          <h2>My Journey</h2>
          <p>💻 Over the past five years, I've delved into the intricacies of software development, from understanding algorithms to building robust systems. My experiences at startups like GigChomp and Project Alexandria have been invaluable in shaping my skills.</p>
          <h2>What's Next</h2>
          <p>🚀 As I look ahead, I'm eager to connect with like-minded professionals and contribute to innovative projects in the software development landscape. Let's create impactful technology solutions together!</p>
        </div>
      </div>
      <div className="cool-object">
        <CoolObject />
      </div>
    </div>
  );
};

const CoolObject = () => {
  return (
    <div className="cube">
      <div className="face front"></div>
      <div className="face back"></div>
      <div className="face left"></div>
      <div className="face right"></div>
      <div className="face top"></div>
      <div className="face bottom"></div>
    </div>
  );
};

const Projects = () => (
  <div className="section project-section">
    <h1>Projects</h1>
    <div className="project-list">
      <div className="project">
        <h2>Project 1</h2>
        <p>Description of Project 1...</p>
      </div>
      <div className="project">
        <h2>Project 2</h2>
        <p>Description of Project 2...</p>
      </div>
      <div className="project">
        <h2>Project 3</h2>
        <p>Description of Project 3...</p>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>
    </div>
  );
}

export default App;
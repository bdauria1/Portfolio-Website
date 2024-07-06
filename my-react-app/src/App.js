import React, { useEffect, useRef } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './App.css';

const Home = () => (
  <div className="section home-section">
    <h1>
      <ReactTypingEffect
        text={["Welcome to My Website!", "Discover my projects and learn more about what I do!"]}
        speed={30}
        eraseSpeed={30}
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
        <p className="intro"> Hi there! I'm a passionate Computer Science graduate from Boston University, constantly exploring the world of technology and its endless possibilities.</p>
        <div className="details">
          <p> Over the past five years, I've delved into the intricacies of software development, from understanding algorithms to building robust systems. My experiences at startups like GigChomp and Project Alexandria have been invaluable in shaping my skills.</p>
          <p> As I look ahead, I'm eager to connect with like-minded professionals and contribute to innovative projects in the software development landscape.</p>
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
      <div className="project-card">
        <h2>Project 1: Nutrition Application</h2>
        <p>• Developed a React application integrating Yelp and Nutritionix APIs to fetch and display data, using
Axios for promise-based HTTP requests.</p>
        <p>• Managed application state with React Hooks (useState, useRef, useEffect) to handle places, nutrients, meals, and
        locations, ensuring efficient state changes and data fetching.</p>
        <a href="https://github.com/your-username/project1" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
      <div className="project-card">
        <h2>Project 2</h2>
        <p>Description of Project 2...</p>
        <a href="https://github.com/your-username/project2" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
      <div className="project-card">
        <h2>Project 3</h2>
        <p>Description of Project 3...</p>
        <a href="https://github.com/your-username/project3" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
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
import React from 'react';
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

const About = () => (
  <div className="section about-section">
    <h1>About Me</h1>
    <p>👋 I'm a Computer Science graduate from Boston University with an insatiable curiosity for learning and a deep passion for technology. My journey into the world of programming began over five years ago, and I've been captivated by the endless possibilities it offers ever since.

💻 Throughout my academic and professional journey, I've immersed myself in the world of software development, exploring its complexities and pushing its boundaries. From delving into the inner workings of algorithms to designing and building robust systems, I thrive on the challenges and opportunities that computer science presents.

🚀 My experience includes invaluable stints at early-stage startups like GigChomp and Project Alexandria, where I had the privilege of contributing to innovative projects and collaborating with talented individuals. These roles have honed my skills and ignited my passion for creating impactful technology solutions.

🔍 As I step into the next phase of my career, I am eager to connect with like-minded professionals, explore new opportunities, and make meaningful contributions to the ever-evolving landscape of software development.

Let's connect and embark on this exciting journey together! 🌟</p>
  </div>
);

const Projects = () => (
  <div className="section projects-section">
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

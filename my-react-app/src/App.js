import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './App.css';

const Home = () => (
  <div className="section">
    <h1>
      <ReactTypingEffect
        text={["Welcome to My Website!", "Discover my projects and learn more about what I do."]}
        speed={100}
        eraseSpeed={50}
        eraseDelay={2000}
        typingDelay={500}
      />
    </h1>
  </div>
);

const About = () => (
  <div className="section">
    <h1>About Me</h1>
    <p>Here is some information about me...</p>
  </div>
);

const Projects = () => (
  <div className="section">
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

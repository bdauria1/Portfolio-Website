import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ReactTypingEffect from 'react-typing-effect';
import './App.css';

const Home = () => (
  <div className="home">
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

const About = () => <h1>About Me</h1>;
const Projects = () => <h1>Projects</h1>;

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

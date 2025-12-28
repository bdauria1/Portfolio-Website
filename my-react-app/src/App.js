import React, { useEffect, useRef } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './App.css';

const Home = () => (
  <div className="section home-section">
    <div className="home-content">
      <h1>
        <ReactTypingEffect
          text={["Welcome to My Website!", "Discover my projects and learn more about what I do!"]}
          speed={30}
          eraseSpeed={30}
          eraseDelay={2000}
          typingDelay={500}
        />
      </h1>
      <div className="home-subtitle">
        <p>Backend Developer | Problem Solver | Tech Enthusiast</p>
      </div>
      <div className="floating-elements">
        <div className="float-box box-1"></div>
        <div className="float-box box-2"></div>
        <div className="float-box box-3"></div>
      </div>
      <div className="cta-buttons">
        <a href="#about" className="btn btn-primary">Learn About Me</a>
        <a href="#projects" className="btn btn-secondary">View Projects</a>
      </div>
    </div>
    <div className="animated-background">
      <div className="orbit orbit-1"></div>
      <div className="orbit orbit-2"></div>
      <div className="orbit orbit-3"></div>
    </div>
  </div>
);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          containerRef.current.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="about-and-work-container">
      <div className="about-column">
        <div className="about-content">
          <h1>About Me</h1>
          <p className="intro">Hi there! I'm a passionate Computer Science graduate from Boston University, constantly exploring the world of technology and its endless possibilities.</p>
          <div className="details">
            <p>Over the past five years, I've delved into the intricacies of software development, from understanding algorithms to building robust systems. My experiences at startups like GigChomp and Project Alexandria have been invaluable in shaping my skills.</p>
            <p>As I look ahead, I'm eager to connect with like-minded professionals and contribute to innovative projects in the software development landscape.</p>
          </div>
          <div className="technologies">
          <h1>Technologies I Work With</h1>
          <ul className="tech-list">
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>Flask</li>
            <li>PostgreSQL</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          
        </div>
        </div>
      </div>

      <div className="work-column">
        <h1>Work Experience</h1>
        <div className="work-items-container">
          <div className="work-item-card">
            <div className="work-header">
              <h3>Nterprisers</h3>
              <span className="work-date">April 2025 – Dec 2025</span>
            </div>
            <p className="work-position">Junior Backend Engineer – Full Time</p>
            <p className="work-location">Providence, RI</p>
            <ul className="work-details">
              <li>Developed and maintained Python-based backend services supporting an early-stage web platform for local manufacturing and small businesses, contributing to 100% of core backend functionality used during the initial go-to-market launch.</li>
              <li>Designed and implemented 10–20 RESTful API endpoints using Python to support core platform features and front-end data consumption, enabling ~30% faster feature iteration.</li>
              <li>Built and optimized PostgreSQL database schemas across 10+ relational tables, reducing average query response times by ~20–30%.</li>
              <li>Collaborated with 3–5 cross-functional stakeholders across product, marketing, and data teams to translate evolving business requirements into scalable backend solutions.</li>
              <li>Wrote unit-level tests and conducted manual API testing to verify backend correctness and reduce regression.</li>
            </ul>
          </div>
          <div className="work-item-card">
            <div className="work-header">
              <h3>GigChomp</h3>
              <span className="work-date">June 2023 – Sept 2023</span>
            </div>
            <p className="work-position">Full Stack Developer – Internship</p>
            <p className="work-location">Boston, MA</p>
            <ul className="work-details">
              <li>Engineered a full-stack web application using Flask and React, enhancing daily active users by ~50% through streamlined UX improvements.</li>
              <li>Optimized backend data flow, session management, and API interactions in Flask, resulting in ~30% faster data retrieval and reduced server load.</li>
              <li>Led a UI/UX redesign initiative using Figma prototypes, improving navigation flows and user engagement metrics by 50%.</li>
              <li>Designed and optimized RESTful API endpoints and backend request workflows, reducing API latency by ~25%.</li>
              <li>Implemented server-side input validation and authorization checks across Flask routes to enforce access control and reduce backend error rates.</li>
            </ul>
          </div>

          <div className="work-item-card">
            <div className="work-header">
              <h3>Biblio.io</h3>
              <span className="work-date">Sept 2022 – Dec 2022</span>
            </div>
            <p className="work-position">Frontend Developer – Internship</p>
            <p className="work-location">Singapore</p>
            <ul className="work-details">
              <li>Integrated seven custom React components—including search filters, navigation elements, and reusable UI modules—improving site functionality and usability by ~20%.</li>
              <li>Improved frontend architecture and performance by implementing lazy loading, code splitting, and memoization, reducing initial page load time by ~15%.</li>
              <li>Collaborated with cross-functional product and backend teams to align React frontend with REST APIs, ensuring ~25% fewer frontend–backend sync issues.</li>
              <li>Refactored frontend state management and component lifecycles to minimize unnecessary re-renders and optimize performance.</li>
              <li>Enhanced frontend reliability by adding defensive rendering patterns and React error boundaries, reducing UI crashes.</li>
            </ul>
          </div>
          <div className="resume-button-container">
              <a href="/Resume.pdf" download className="btn btn-primary">
                Download My Resume
              </a>
            </div>
        </div>
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
        <a href="https://github.com/krisch0u/cs411" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
      <div className="project-card">
        <h2>Project 2: Logistical Web Application</h2>
        <p>• Created a dynamic web application with Flask and MySQL, enabling users to register accounts, share photos,
        manage albums, connect with friends, and engage with content through likes and comments.</p>
        <p>• Integrated Python, HTML, and CSS to create visually appealing and responsive web pages, enhancing the user
        experience</p>
        <a href="https://github.com/bdauria1/Flask-Web-Application" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
      <div className="project-card">
        <h2>Project 3: Project Alexandria</h2>
        <p>• Worked with a startup called Biblio.io, a freelance site that connects freelancers with clients.</p>
        <p>• Collaborated with a team of developers to build the frontend and backend of the platform using React.</p>
        <p>• Implemented features such as user authentication, project management, and payment processing.</p>
        <a href="https://github.com/bdauria1/Project-Alexandria" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="section contact-section">
    <h2>Let's Connect</h2>
    <div className="contact-links">
      <a href="https://www.linkedin.com/in/bdauria" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="mailto:b.dauria24@gmail.com">
        <i className="fas fa-envelope"></i>
      </a>
      <a href="https://github.com/bdauria1" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
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
            <li><a href="#contact">Contact</a></li>
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
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
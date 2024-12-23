import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Home Component
function Home() {
  return (
    <div className="page home">
      <h1>Welcome to Salahuddin Qureshi's Portfolio</h1>
      <p>
        I am a passionate web developer with expertise in React, Node.js, and
        deep learning applications.
      </p>
    </div>
  );
}

// About Component
function About() {
  return (
    <div className="page about">
      <h1>About Me</h1>
      <p>
        Hi, I am Salahuddin Qureshi, a BSCS student at Sukkur IBA University. I
        specialize in web development and AI, with a focus on creating
        innovative solutions like recipe generation from food images.
      </p>
    </div>
  );
}

// Projects Component
function Projects() {
  return (
    <div className="page projects">
      <h1>My Projects</h1>
      <ul>
        <li>Recipe Generation from Food Images - FYP</li>
        <li>Weather Classification using CNN</li>
        <li>Tweet Emotions Classification</li>
        <li>Web-based E-commerce Platform</li>
      </ul>
    </div>
  );
}

// Contact Component
function Contact() {
  return (
    <div className="page contact">
      <h1>Contact Me</h1>
      <p>Email: salahuddin@example.com</p>
      <p>Phone: +92-123-4567890</p>
    </div>
  );
}

// Navigation Component
function Navigation() {
  return (
    <nav className="navbar">
      <h2>SQ Portfolio</h2>
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
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

// App Component
function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

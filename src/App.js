import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Styles/App.css';
import Home from './Home';
import Resume from './Resume';
import Projects from './Projects';
import Bio from './Bio';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <nav>
            <h1 className="site-title">My Website</h1>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/resume">Resume</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/bio">Bio</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

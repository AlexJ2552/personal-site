import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Panel from './components/Panel';
import { Routes, Route, Link } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Professional from './pages/Professional';
import ContactMe from './pages/ContactMe';


function Home() {
  return (
    <>
      <h1>Alex Joyce</h1>

      <div className="panels-container">

        <Link to="/personal-site/about">
          <Panel title="About Me" icon="👨‍💻" color="primary">
            General, background, interests, introduction  
          </Panel>
        </Link>

        <Link to="/personal-site/projects">
          <Panel title="Projects" icon="🚀" color="accent">
            GL, Algo trading, Unity Games, Web apps
          </Panel>
        </Link>

        <Link to="/personal-site/professional">
          <Panel title="Professional Skills" icon="💼" color="secondary">
            CV, Experience, Qualifications, Skills
          </Panel>
        </Link>

        <Link to="/personal-site/contact">
          <Panel title="Contact Me" icon="📧" color="success">
            Email, LinkedIn, Github, Contact Me Form
          </Panel>
        </Link>

      </div>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/personal-site/" element={<Home />} />
      <Route path="/personal-site/about" element={<AboutMe />} />
      <Route path="/personal-site/projects" element={<Projects />} />
      <Route path="/personal-site/professional" element={<Professional />} />
      <Route path="/personal-site/contact" element={<ContactMe />} />
    </Routes>
  );
}

export default App

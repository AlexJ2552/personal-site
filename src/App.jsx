import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Panel from './components/Panel';

function App() {
  return (
    <>
      <h1>Alex Joyce</h1>

      <div className="panels-container">

        <Panel title="About Me">
          General, backround, intrests, introduction  
        </Panel>

        <Panel title="Projects">
          GL, Algo trading, Unity Games, Web apps
        </Panel>

        <Panel title="Resume/Experience">
          CV, Experience, Qualifications, Skills
        </Panel>
        
        <Panel title="Contact Me">
          Email, LinkedIn, Github, Contact Me Form
        </Panel>

      </div>
    </>
  );
}


export default App

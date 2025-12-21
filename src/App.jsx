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

        <Panel title="Projects">
          Algo trading, Unity, Web apps
        </Panel>

        <Panel title="Resume">
          View my experience and skills
        </Panel>

        <Panel title="Experiments">
          Ledger, dashboards, research
        </Panel>
        
      </div>
    </>
  );
}


export default App

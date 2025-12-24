import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation'; 
import Panel from '../components/Panel';

function Projects() {
  return (
    <>
      <Navigation />
      
      <h1>Projects</h1>
      
      <div className="panels-container">

        <a href="https://www.google.com/search?q=put+link+to+general+ledger+project+here+:)" target="_blank" rel="noopener noreferrer">
          <Panel title="General Ledger" icon="👨‍💻" color="primary">
            Here is a link to my general ledger project.
            Not yet finished.  
          </Panel>
        </a>

        <a href="https://www.google.com/search?q=put+link+to+algo+trading+project+here+:)" target="_blank" rel="noopener noreferrer">
          <Panel title="Algo trading" icon="🚀" color="accent">
            Here is a link to my Algo trading project.
            Not yet finished.  
          </Panel>
        </a>

        <a href="https://www.google.com/search?q=put+link+to+unity+games+project+here+:)" target="_blank" rel="noopener noreferrer">
          <Panel title="Unity Games" icon="💼" color="secondary">
            Here is a link to my Unity games project.
            Not yet finished.  
          </Panel>
        </a>

      </div>
    </>
  );
}

export default Projects;
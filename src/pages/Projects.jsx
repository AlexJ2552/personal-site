import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation'; 
import Panel from '../components/Panel';

function Projects() {
  return (
    <>
      <Navigation />
      
      <h1>Projects</h1>
      
      <div className="panels-container">

        <a href="https://www.google.com/search?q=general+ledger+project" target="_blank" rel="noopener noreferrer">
          <Panel title="General Ledger">
            Here is a link to my general ledger project.
            Not yet finished.  
          </Panel>
        </a>

        <a href="https://www.google.com/search?q=algo+trading+project" target="_blank" rel="noopener noreferrer">
          <Panel title="Algo trading">
            Here is a link to my Algo trading project.
            Not yet finished.  
          </Panel>
        </a>

        <a href="https://www.google.com/search?q=unity+games+project" target="_blank" rel="noopener noreferrer">
          <Panel title="Unity Games">
            Here is a link to my Unity games project.
            Not yet finished.  
          </Panel>
        </a>

      </div>
    </>
  );
}

export default Projects;
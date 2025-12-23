import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/personal-site/" className="nav-home">🏠 Home</Link>
      
      <div className="nav-links">
        <Link to="/personal-site/about" className="nav-link">About Me</Link>
        <Link to="/personal-site/projects" className="nav-link">Projects</Link>
        <Link to="/personal-site/professional" className="nav-link">Professional</Link>
        <Link to="/personal-site/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
}

export default Navigation;
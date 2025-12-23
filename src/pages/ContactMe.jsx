import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <>
      <nav>
        <Link to="/personal-site/">← Back to Home</Link>
      </nav>
      
      <h1>Cobntact Me</h1>
      
      <div className="page-content">
        <p>This is where you'll add your personal background, interests, and introduction.</p>
        <p>You can include information about:</p>
        <ul>
          <li>Your background and education</li>
          <li>Personal interests and hobbies</li>
          <li>What drives you in your career</li>
          <li>Fun facts about yourself</li>
        </ul>
      </div>
    </>
  );
}

export default AboutMe;
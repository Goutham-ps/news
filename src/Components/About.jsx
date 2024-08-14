import React from 'react';
import './About.css';  // Importing the CSS file
import member1 from '../Assets/member1.jpeg';  // Replace with the correct path to your images
import member2 from '../Assets/member2.jpeg';
import member3 from '../Assets/img.jpeg';
import Header from './Header';

const About = () => {
  return (
    <div>
        <Header/>
    
    <div className="about-container">
      <div className="about-section">
        <h2>Our Work</h2>
        <p>
          DAILY BUGGLE is a community of strong, curious, and ambitious individuals redefining success on our own terms. 
          We are here to inform, entertain, and inspire action through the content and experiences we create. 
          We are unapologetic in our beliefs and values of supporting those who are chasing dreams both big and small.
        </p>
      </div>

      <div className="team-section">
        <h2>Meet Team DAILY BUGGLE</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={member1} alt="Sophia Amoruso" />
            <h3>Sophia Amoruso</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src={member2} alt="Neha Gandhi" />
            <h3>Kapil Dev</h3>
            <p>Editor-In-Chief & COO</p>
          </div>
          <div className="team-member">
            <img src={member3} alt="Charlene Jaravata" />
            <h3>Charlene Jaravata</h3>
            <p>Vice President of Finance</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
